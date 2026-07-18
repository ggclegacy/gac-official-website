"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PHASES = ["arrival", "growth", "complexity", "hiddenCost", "recognition", "alignment"] as const;
const CUTS = [0, .17, .34, .51, .68, .84, 1] as const;
const stateCopy = [
  ["Arrival", "At first, the business is direct, connected, and easy to manage."],
  ["Growth", "More opportunity brings more customers, people, tools, and decisions."],
  ["Complexity", "The business begins outgrowing the systems that once supported it."],
  ["Hidden Cost", "Complexity quietly consumes time, attention, visibility, consistency, and opportunity."],
  ["Recognition", "When the pattern becomes visible, the business can finally respond to what growth requires."],
  ["Alignment", "The moving parts begin finding one shared direction."],
] as const;
type RealityPhase = typeof PHASES[number];

const nodes = [
  ["customers", "Customers", 52, 105, "base"], ["team", "Team", 126, 55, "base"],
  ["operations", "Operations", 272, 62, "base"], ["growth", "Growth", 340, 124, "base"],
  ["website", "Website", 40, 270, "growth"], ["leads", "Leads", 108, 354, "growth"],
  ["scheduling", "Scheduling", 205, 382, "growth"], ["marketing", "Marketing", 302, 354, "growth secondary"],
  ["finance", "Finance", 350, 276, "growth friction"], ["data", "Customer Data", 363, 203, "growth friction"],
  ["inventory", "Inventory", 21, 205, "growth tertiary"], ["crm", "CRM", 73, 397, "growth tertiary"],
  ["vendors", "Vendors", 332, 400, "growth tertiary"],
] as const;
const paths = [
  "M195 210C145 190 95 143 52 105", "M195 210C174 145 150 89 126 55", "M195 210C216 142 244 91 272 62", "M195 210C252 190 304 157 340 124",
  "M52 105C42 166 37 218 40 270", "M40 270C58 317 81 343 108 354", "M195 210C178 282 181 341 205 382", "M205 382C246 383 276 371 302 354",
  "M340 124C357 176 358 229 350 276", "M340 124C358 152 365 177 363 203", "M40 270C26 249 20 226 21 205", "M108 354C94 373 82 388 73 397", "M302 354C316 373 326 390 332 400",
  "M108 354C177 320 267 321 350 276", "M40 270C126 241 249 258 350 276", "M363 203C314 229 254 229 195 210"
] as const;

function clamp(value: number) { return Math.min(Math.max(value, 0), 1); }

function useSceneProgress(ref: React.RefObject<HTMLElement | null>, onPhase: (phase: number) => void) {
  useEffect(() => {
    const scene = ref.current; if (!scene) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0, visible = true, last = -1;
    const render = () => {
      raf = 0; if (!visible && !motion.matches) return;
      const rect = scene.getBoundingClientRect();
      const progress = motion.matches ? 1 : clamp(-rect.top / Math.max(rect.height - innerHeight, 1));
      scene.style.setProperty("--reality-progress", progress.toFixed(4));
      PHASES.forEach((phase, index) => scene.style.setProperty(`--phase-${phase.replace(/[A-Z]/g, x => `-${x.toLowerCase()}`)}`, clamp((progress - CUTS[index]) / (CUTS[index + 1] - CUTS[index])).toFixed(4)));
      const raw = CUTS.findIndex((cut, index) => index < CUTS.length - 1 && progress >= cut && progress < CUTS[index + 1]);
      let next = motion.matches ? 5 : Math.max(0, raw);
      if (last >= 0 && next !== last) {
        const boundary = next > last ? CUTS[next] : CUTS[last];
        if (Math.abs(progress - boundary) < .008) next = last;
      }
      if (next !== last) { last = next; onPhase(next); }
      scene.dataset.motion = motion.matches ? "reduced" : "full";
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(render); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; scene.dataset.sceneActive = String(visible); if (visible) schedule(); }, { rootMargin: "15% 0px" });
    const onVisibility = () => { const bounds = scene.getBoundingClientRect(); visible = !document.hidden && bounds.bottom > 0 && bounds.top < innerHeight; scene.dataset.sceneActive = String(visible); if (visible) schedule(); };
    observer.observe(scene); addEventListener("scroll", schedule, { passive: true }); addEventListener("resize", schedule, { passive: true }); document.addEventListener("visibilitychange", onVisibility); motion.addEventListener("change", schedule); schedule();
    return () => { observer.disconnect(); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); document.removeEventListener("visibilitychange", onVisibility); motion.removeEventListener("change", schedule); if (raf) cancelAnimationFrame(raf); };
  }, [ref, onPhase]);
}

function BusinessCore({ phase }: { phase: RealityPhase }) {
  return <g className={`business-core business-core--${phase}`} transform="translate(195 210)" aria-hidden="true">
    <circle className="business-core__halo" r="54"/><circle className="business-core__ring" r="47"/>
    <image className="business-core__image" href="/bc-icon.png" x="-43" y="-43" width="86" height="86" preserveAspectRatio="xMidYMid meet"/>
    <g className="business-core__ports"><circle cx="0" cy="-47" r="3"/><circle cx="47" cy="0" r="3"/><circle cy="47" r="3"/><circle cx="-47" r="3"/></g>
    <text y="68" textAnchor="middle">BUSINESS CORE</text>
  </g>;
}

function Network({ phase, selected, onSelect }: { phase: RealityPhase; selected: string | null; onSelect: (id: string) => void }) {
  return <div className="reality-network">
    <svg viewBox="0 0 390 430" role="img" aria-label="A growing business network moving from healthy connection through complexity toward alignment.">
      <defs><linearGradient id="realityPath" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7398ad" stopOpacity=".24"/><stop offset=".5" stopColor="#d5aa58" stopOpacity=".78"/><stop offset="1" stopColor="#607f91" stopOpacity=".14"/></linearGradient><filter id="coreGlow" x="-45%" y="-45%" width="190%" height="190%"><feGaussianBlur stdDeviation="1.6" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g className="network-paths">{paths.map((d, i) => <path d={d} className={i < 4 ? "base" : i < 13 ? "growth" : "complex"} key={d}/>)}</g>
      <g className="network-signals">{paths.slice(0, 13).map((d, i) => <circle r="2.2" className={i > 3 ? "growth" : "base"} key={d}><animateMotion dur={`${4.5 + i % 3}s`} repeatCount="indefinite" path={d}/></circle>)}</g>
      <BusinessCore phase={phase}/>
      <g className="analysis-field"><circle cx="195" cy="210" r="83"/><path d="M195 18V402M18 210H372"/></g>
      <g className="alignment-channels"><path d="M195 210V12M195 210H378M195 210V418M195 210H12"/></g>
    </svg>
    <div className="network-nodes">{nodes.map(([id,label,x,y,kind]) => <button key={id} type="button" className={`${kind} ${selected === id ? "selected" : ""}`} style={{left:`${x / 3.9}%`,top:`${y / 4.3}%`}} aria-pressed={selected === id} aria-label={`${label} operational node`} onClick={() => onSelect(id)}><i aria-hidden="true"/><span>{label}</span></button>)}</div>
    <div className="hidden-costs" aria-hidden="true">{["Attention","Time","Visibility","Consistency","Opportunity"].map(word => <span key={word}>{word}</span>)}</div>
  </div>;
}

export function OperationalComplexity() {
  const ref = useRef<HTMLElement>(null); const [phase, setPhase] = useState(0); const [selected, setSelected] = useState<string | null>(null);
  const changePhase = useCallback((value: number) => { setPhase(value); if (value > 3) setSelected(null); }, []); useSceneProgress(ref, changePhase);
  return <section className={`reality-scene phase-${PHASES[phase]}`} id="collective" ref={ref} aria-labelledby="reality-title">
    <div className="reality-scene__sticky-stage"><div className="reality-environment" aria-hidden="true"><i/><i/><i/><i/></div><div className="reality-atmosphere" aria-hidden="true"/><div className="continuity-axis" aria-hidden="true"/>
      <div className="reality-layout"><div className="reality-copy"><p className="reality-copy__eyebrow">THE REALITY OF GROWTH</p><h2 id="reality-title">Success creates <em>complexity.</em></h2><p>As a business grows, more customers, people, tools, and decisions enter the picture. Growth is not the problem. The challenge begins when those moving parts stop working as one system.</p><div className="reality-state" key={phase}><strong>{stateCopy[phase][0]}</strong><span>{stateCopy[phase][1]}</span></div><div className="phase-meter" aria-hidden="true">{PHASES.map((name,i)=><i className={i <= phase ? "reached" : ""} key={name}/>)}</div></div>
      <Network phase={PHASES[phase]} selected={selected} onSelect={id => setSelected(current => current === id ? null : id)}/></div>
      <div className="reality-exit" aria-hidden="true"><i/><i/><i/><i/><span/></div>
    </div>
    <div className="sr-only"><h3>Scene summary</h3>{stateCopy.slice(1).map((item)=><p key={item[0]}><strong>{item[0]}:</strong> {item[1]}</p>)}</div>
  </section>;
}
