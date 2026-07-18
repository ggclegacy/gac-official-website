"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const PHASES = ["transition", "connected", "growth", "complexity", "hiddenCost", "analysis", "alignment"] as const;
const CUTS = [0, .08, .25, .42, .59, .75, .89, 1] as const;
const copy = [
  ["ENTERING THE OPERATING ENVIRONMENT", "The business comes into focus.", "A capable company is already moving. Its decisions, people, and operations gather around one living core."],
  ["INSIDE A GROWING BUSINESS", "Growth begins with connection.", "In the beginning, information moves clearly. Decisions stay close. People, customers, and operations remain easy to coordinate."],
  ["INSIDE A GROWING BUSINESS", "Success creates more to coordinate.", "More customers bring more tools, more decisions, more handoffs, and more information moving at once."],
  ["THE REALITY GAP", "Growth isn't the problem.", "The systems that once supported the business are now carrying more than they were designed to coordinate."],
  ["THE HIDDEN COST", "Complexity consumes what growth needs most.", "Time. Attention. Consistency. Visibility. Opportunity."],
  ["THE PATTERN BECOMES VISIBLE", "What feels complicated can be understood.", "When the whole operating environment is visible, friction stops looking random. The system can see where clarity, connection, and control are being lost."],
  ["ALIGNMENT BEGINS", "Alignment begins with seeing the whole system.", "When the moving parts share one direction, growth becomes clearer, more deliberate, and easier to control."],
] as const;

const nodes = [
  ["customers", "Customers", 52, 105, "base"], ["team", "Team", 126, 55, "base"],
  ["operations", "Operations", 272, 62, "base"], ["growth", "Growth", 340, 124, "base"],
  ["website", "Website", 40, 270, "growth"], ["leads", "Leads", 108, 354, "growth"],
  ["scheduling", "Scheduling", 205, 382, "growth"], ["marketing", "Marketing", 302, 354, "growth secondary"],
  ["finance", "Finance", 350, 276, "growth friction"], ["data", "Customer Data", 363, 203, "growth friction"],
] as const;
const paths = [
  "M195 210C145 190 95 143 52 105", "M195 210C174 145 150 89 126 55", "M195 210C216 142 244 91 272 62", "M195 210C252 190 304 157 340 124",
  "M52 105C42 166 37 218 40 270", "M40 270C58 317 81 343 108 354", "M195 210C178 282 181 341 205 382", "M205 382C246 383 276 371 302 354",
  "M340 124C357 176 358 229 350 276", "M340 124C358 152 365 177 363 203", "M108 354C177 320 267 321 350 276", "M40 270C126 241 249 258 350 276", "M363 203C314 229 254 229 195 210"
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
      const next = motion.matches ? 6 : Math.max(0, raw); if (next !== last) { last = next; onPhase(next); }
      scene.dataset.motion = motion.matches ? "reduced" : "full";
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(render); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; scene.dataset.sceneActive = String(visible); if (visible) schedule(); }, { rootMargin: "15% 0px" });
    observer.observe(scene); addEventListener("scroll", schedule, { passive: true }); addEventListener("resize", schedule, { passive: true }); motion.addEventListener("change", schedule); schedule();
    return () => { observer.disconnect(); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); motion.removeEventListener("change", schedule); if (raf) cancelAnimationFrame(raf); };
  }, [ref, onPhase]);
}

function BusinessCore() {
  return <g className="business-core" transform="translate(195 210)" aria-hidden="true">
    <circle className="business-core__halo" r="43"/><circle className="business-core__ring" r="34"/>
    <path className="business-core__braces" d="M-23-23h13M10-23h13M23 23H10M-10 23h-13M-23-23v13M23-23v13M23 10v13M-23 10v13"/>
    <path className="business-core__axis" d="M0 20V-20M-7-12 0-20l7 8"/><circle className="business-core__nucleus" r="8"/>
    <g className="business-core__ports"><circle cx="0" cy="-34" r="3"/><circle cx="34" cy="0" r="3"/><circle cx="0" cy="34" r="3"/><circle cx="-34" cy="0" r="3"/></g>
    <text y="57" textAnchor="middle">BUSINESS CORE</text>
  </g>;
}

function Network({ selected, onSelect }: { selected: string | null; onSelect: (id: string) => void }) {
  return <div className="reality-network">
    <svg viewBox="0 0 390 430" role="img" aria-label="A growing business network moving from healthy connection through complexity toward alignment.">
      <defs><linearGradient id="realityPath" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7398ad" stopOpacity=".24"/><stop offset=".5" stopColor="#d5aa58" stopOpacity=".78"/><stop offset="1" stopColor="#607f91" stopOpacity=".14"/></linearGradient><filter id="coreGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g className="network-paths">{paths.map((d, i) => <path d={d} className={i < 4 ? "base" : i < 10 ? "growth" : "complex"} key={d}/>)}</g>
      <g className="network-signals">{paths.slice(0, 10).map((d, i) => <circle r="2.2" className={i > 3 ? "growth" : "base"} key={d}><animateMotion dur={`${4.5 + i % 3}s`} repeatCount="indefinite" path={d}/></circle>)}</g>
      <BusinessCore/>
      <g className="analysis-field"><circle cx="195" cy="210" r="83"/><path d="M195 18V402M18 210H372"/></g>
      <g className="alignment-channels"><path d="M195 210V12M195 210H378M195 210V418M195 210H12"/></g>
    </svg>
    <div className="network-nodes">{nodes.map(([id,label,x,y,kind]) => <button key={id} type="button" className={`${kind} ${selected === id ? "selected" : ""}`} style={{left:`${x / 3.9}%`,top:`${y / 4.3}%`}} aria-pressed={selected === id} aria-label={`${label} operational node`} onClick={() => onSelect(id)}><i aria-hidden="true"/><span>{label}</span></button>)}</div>
    <div className="hidden-costs" aria-hidden="true">{["Time","Attention","Consistency","Visibility","Opportunity"].map(word => <span key={word}>{word}</span>)}</div>
  </div>;
}

export function OperationalComplexity() {
  const ref = useRef<HTMLElement>(null); const [phase, setPhase] = useState(0); const [selected, setSelected] = useState<string | null>(null);
  const changePhase = useCallback((value: number) => { setPhase(value); if (value > 3) setSelected(null); }, []); useSceneProgress(ref, changePhase);
  return <section className={`reality-scene phase-${PHASES[phase]}`} id="collective" ref={ref} aria-labelledby="reality-title">
    <div className="reality-scene__sticky-stage"><div className="reality-atmosphere" aria-hidden="true"/><div className="continuity-axis" aria-hidden="true"/>
      <div className="reality-layout"><div className="reality-copy" key={phase}><p className="reality-copy__eyebrow">{copy[phase][0]}</p><h2 id="reality-title">{copy[phase][1]}</h2><p>{copy[phase][2]}</p><div className="phase-meter" aria-hidden="true">{PHASES.map((name,i)=><i className={i <= phase ? "reached" : ""} key={name}/>)}</div></div>
      <Network selected={selected} onSelect={id => setSelected(current => current === id ? null : id)}/></div>
      <div className="reality-exit" aria-hidden="true"><i/><i/><i/><i/><span/></div>
    </div>
    <div className="sr-only"><h3>Scene summary</h3>{copy.slice(1).map((item)=><p key={item[1]}><strong>{item[1]}</strong> {item[2]}</p>)}</div>
  </section>;
}
