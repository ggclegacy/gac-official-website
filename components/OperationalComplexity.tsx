"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const STATES = ["arrival", "healthy", "growth", "complexity", "recognition", "alignment"] as const;
type LivingBusinessState = (typeof STATES)[number];

const RANGES = {
  transition: [0, 0.1], arrival: [0.06, 0.22], healthy: [0.18, 0.38],
  growth: [0.34, 0.58], complexity: [0.54, 0.76], recognition: [0.72, 0.9],
  alignment: [0.86, 0.98], exit: [0.95, 1],
} as const;

const STATE_STARTS = [0.06, 0.2, 0.37, 0.57, 0.75, 0.89] as const;
const COPY = {
  arrival: ["THE REALITY OF GROWTH", "Success creates complexity.", "Every growing business adds more people, tools, responsibilities, and decisions. Growth is not the problem. The challenge begins when those moving parts stop working as one system."],
  healthy: ["A HEALTHY BUSINESS", "Connected by design.", "At first, the business is direct, connected, and easy to manage."],
  growth: ["GROWTH & EXPANSION", "Capability expands.", "Growth adds capability—more customers, more people, more tools, and more opportunity."],
  complexity: ["COMPLEXITY EMERGING", "Coordination becomes the work.", "Capable people begin spending their attention holding disconnected systems together."],
  recognition: ["THE PATTERN BECOMES VISIBLE", "See the system clearly.", "Once the pattern becomes visible, the business can begin operating differently."],
  alignment: ["EARLY ALIGNMENT", "A clearer way forward.", "When the business can see itself clearly, complexity becomes something it can redesign."],
} satisfies Record<LivingBusinessState, readonly [string, string, string]>;

type NodeLayer = "primary" | "market" | "delivery" | "control";
type BusinessNode = { id: string; label: string; x: number; y: number; layer: NodeLayer };

const NODES: readonly BusinessNode[] = [
  { id: "customers", label: "Customers", x: 54, y: 98, layer: "primary" },
  { id: "team", label: "Team", x: 128, y: 50, layer: "primary" },
  { id: "operations", label: "Operations", x: 270, y: 56, layer: "primary" },
  { id: "growth", label: "Growth", x: 340, y: 112, layer: "primary" },
  { id: "website", label: "Website", x: 31, y: 250, layer: "market" },
  { id: "leads", label: "Leads", x: 86, y: 331, layer: "market" },
  { id: "marketing", label: "Marketing", x: 30, y: 382, layer: "market" },
  { id: "customer-data", label: "Customer Data", x: 353, y: 204, layer: "market" },
  { id: "scheduling", label: "Scheduling", x: 148, y: 391, layer: "delivery" },
  { id: "service", label: "Service Delivery", x: 235, y: 400, layer: "delivery" },
  { id: "inventory", label: "Inventory", x: 307, y: 370, layer: "delivery" },
  { id: "vendors", label: "Vendors", x: 364, y: 317, layer: "delivery" },
  { id: "finance", label: "Finance", x: 363, y: 266, layer: "control" },
  { id: "crm", label: "CRM", x: 92, y: 402, layer: "control" },
  { id: "reporting", label: "Reporting", x: 285, y: 421, layer: "control" },
];

const ROUTES = [
  ["primary", "M195 210C145 185 96 137 54 98"], ["primary", "M195 210C174 142 151 82 128 50"],
  ["primary", "M195 210C217 140 244 88 270 56"], ["primary", "M195 210C252 187 303 147 340 112"],
  ["market", "M54 98C35 148 27 207 31 250"], ["market", "M31 250C42 290 61 317 86 331"],
  ["market", "M86 331C65 350 47 368 30 382"], ["market", "M340 112C356 143 360 174 353 204"],
  ["delivery", "M195 210C165 278 145 342 148 391"], ["delivery", "M195 210C218 286 234 350 235 400"],
  ["delivery", "M235 400C264 402 288 391 307 370"], ["delivery", "M307 370C333 359 350 341 364 317"],
  ["control", "M340 112C368 164 370 218 363 266"], ["control", "M86 331C87 360 89 385 92 402"],
  ["control", "M235 400C254 413 270 420 285 421"],
  ["strain duplicate", "M31 250C126 237 272 263 363 266"],
  ["strain crossing", "M54 98C136 174 254 304 364 317"],
  ["strain isolated", "M30 382C121 356 245 355 353 204"],
  ["backbone", "M195 420V210V18"],
] as const;

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

function useLivingBusinessProgress(ref: React.RefObject<HTMLElement | null>, onState: (state: LivingBusinessState) => void) {
  useEffect(() => {
    const scene = ref.current;
    if (!scene) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let lastIndex = -1;

    const render = () => {
      frame = 0;
      if ((!visible || document.hidden) && !reduced.matches) return;
      const bounds = scene.getBoundingClientRect();
      const progress = reduced.matches ? 0.92 : clamp(-bounds.top / Math.max(bounds.height - innerHeight, 1));
      scene.style.setProperty("--living-progress", progress.toFixed(4));
      Object.entries(RANGES).forEach(([name, [start, end]]) => {
        scene.style.setProperty(`--living-${name}`, clamp((progress - start) / (end - start)).toFixed(4));
      });

      let nextIndex = STATE_STARTS.findLastIndex((start) => progress >= start);
      nextIndex = Math.max(0, nextIndex);
      if (lastIndex >= 0 && nextIndex !== lastIndex) {
        const boundary = nextIndex > lastIndex ? STATE_STARTS[nextIndex] : STATE_STARTS[lastIndex];
        if (Math.abs(progress - boundary) < 0.009) nextIndex = lastIndex;
      }
      if (nextIndex !== lastIndex) {
        lastIndex = nextIndex;
        onState(STATES[nextIndex]);
      }
      scene.dataset.motion = reduced.matches ? "reduced" : "full";
    };

    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      scene.dataset.sceneActive = String(visible);
      if (visible) schedule();
    }, { rootMargin: "15% 0px" });
    const visibility = () => { visible = !document.hidden && scene.getBoundingClientRect().bottom > 0 && scene.getBoundingClientRect().top < innerHeight; if (visible) schedule(); };
    observer.observe(scene);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", schedule);
    schedule();
    return () => {
      observer.disconnect();
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref, onState]);
}

function LivingBusinessSystem({ state }: { state: LivingBusinessState }) {
  return <div className="living-system" aria-hidden="true">
    <div className="living-core" data-state={state}>
      <i className="living-core__halo"/><i className="living-core__orbit living-core__orbit--outer"/><i className="living-core__orbit living-core__orbit--inner"/>
      <span className="living-core__image"><Image src="/bc-icon.png" alt="" width={2000} height={2000} sizes="(max-width: 430px) 30vw, 220px" priority={false}/></span>
      <i className="living-core__port port-n"/><i className="living-core__port port-e"/><i className="living-core__port port-s"/><i className="living-core__port port-w"/>
      <b>BUSINESS CORE</b>
    </div>
    <svg className="living-network" viewBox="0 0 390 440">
      <defs>
        <linearGradient id="livingRoute" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#6d98b2" stopOpacity=".2"/><stop offset=".5" stopColor="#d6aa57" stopOpacity=".85"/><stop offset="1" stopColor="#7392a5" stopOpacity=".18"/></linearGradient>
        <filter id="livingGlow" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="1.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <g className="living-routes">{ROUTES.map(([kind, path], index) => <path className={kind} d={path} key={`${kind}-${index}`}/>)}</g>
      <g className="living-signals">{ROUTES.slice(0, 15).map(([kind, path], index) => <circle className={`${kind} signal-${index}`} r="2.1" key={`${path}-signal`}><animateMotion path={path} dur={`${4.2 + index % 4 * 0.55}s`} repeatCount="indefinite"/></circle>)}</g>
      <g className="living-analysis"><circle cx="195" cy="210" r="92"/><path d="M50 98C127 168 262 303 364 317"/><path d="M31 250C126 237 272 263 363 266"/></g>
      <g className="living-exit-axis"><path d="M195 430V210V4"/><circle cx="195" cy="18" r="4"/></g>
    </svg>
    <div className="living-nodes">{NODES.map(({ id, label, x, y, layer }) => <span className={`living-node living-node--${layer}`} style={{ left: `${x / 3.9}%`, top: `${y / 4.4}%` }} key={id}><i/>{label}</span>)}</div>
    <div className="living-costs"><span>TIME</span><span>FOCUS</span><span>VISIBILITY</span><span>CONSISTENCY</span><span>OPPORTUNITY</span></div>
  </div>;
}

export function OperationalComplexity() {
  const ref = useRef<HTMLElement>(null);
  const [state, setState] = useState<LivingBusinessState>("arrival");
  const updateState = useCallback((next: LivingBusinessState) => setState(next), []);
  useLivingBusinessProgress(ref, updateState);
  const [eyebrow, headline, support] = COPY[state];

  return <section className={`reality-scene living-business living-business--${state}`} id="collective" ref={ref} aria-labelledby="living-title">
    <div className="living-stage">
      <div className="living-environment" aria-hidden="true"><i/><i/><i/><i/><span/><span/></div>
      <div className="living-transition" aria-hidden="true"><i/><i/><i/><i/><span/></div>
      <div className="living-layout">
        <header className="living-copy" key={state}>
          <p>{eyebrow}</p><h2 id="living-title">{headline}</h2><span>{support}</span>
          <div className="living-progress" aria-hidden="true">{STATES.map((item) => <i className={STATES.indexOf(item) <= STATES.indexOf(state) ? "reached" : ""} key={item}/>)}</div>
        </header>
        <LivingBusinessSystem state={state}/>
      </div>
      <div className="living-handoff" aria-hidden="true"><i/><span/></div>
    </div>
    <div className="sr-only"><h3>The Living Business</h3>{STATES.map((item) => <p key={item}><strong>{COPY[item][1]}</strong> {COPY[item][2]}</p>)}</div>
  </section>;
}
