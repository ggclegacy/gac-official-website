"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const REALITY_RANGES = {
  connected: [0, 0.18], growth: [0.14, 0.36], complexity: [0.32, 0.55],
  hiddenCost: [0.51, 0.73], analysis: [0.69, 0.88], alignment: [0.84, 1],
} as const;

const beatCopy = [
  ["Connected", "What once worked was simple, direct, and easy to manage."],
  ["Growth", "Growth introduces more customers, tools, people, and decisions."],
  ["Complexity", "Without connected infrastructure, complexity begins to consume attention."],
  ["Hidden cost", "Complexity rarely announces itself. It quietly consumes what growth needs most."],
  ["Analysis", "The problem is rarely one disconnected tool. It is the pattern formed between them."],
  ["Alignment", "The pattern is visible. Shared structure begins to emerge."],
] as const;

const nodes = [
  { id: "customers", label: "Customers", x: 54, y: 112, phase: "base" },
  { id: "team", label: "Team", x: 126, y: 55, phase: "base" },
  { id: "operations", label: "Operations", x: 270, y: 64, phase: "base" },
  { id: "growth", label: "Growth", x: 338, y: 132, phase: "base" },
  { id: "website", label: "Website", x: 42, y: 268, phase: "growth" },
  { id: "leads", label: "Leads", x: 112, y: 352, phase: "growth" },
  { id: "scheduling", label: "Scheduling", x: 208, y: 376, phase: "growth" },
  { id: "finance", label: "Finance", x: 346, y: 282, phase: "growth friction" },
  { id: "marketing", label: "Marketing", x: 312, y: 354, phase: "growth mobile-secondary" },
  { id: "data", label: "Customer Data", x: 362, y: 206, phase: "growth friction" },
] as const;

const paths = [
  { d: "M195 205C145 191 97 147 54 112", phase: "base" }, { d: "M195 205C177 143 153 91 126 55", phase: "base" },
  { d: "M195 205C218 139 240 91 270 64", phase: "base" }, { d: "M195 205C251 188 302 158 338 132", phase: "base" },
  { d: "M54 112C45 163 38 216 42 268", phase: "growth" }, { d: "M42 268C60 318 83 340 112 352", phase: "growth" },
  { d: "M195 205C174 273 177 334 208 376", phase: "growth" }, { d: "M338 132C353 180 356 231 346 282", phase: "growth friction bottleneck" },
  { d: "M208 376C249 377 281 367 312 354", phase: "growth" }, { d: "M338 132C355 156 363 178 362 206", phase: "growth friction isolated" },
  { d: "M112 352C177 321 260 318 346 282", phase: "complex duplicate" }, { d: "M42 268C126 244 247 259 346 282", phase: "complex duplicate" },
  { d: "M362 206C317 226 260 224 195 205", phase: "complex interrupted" },
] as const;

const costs = [
  ["Time", "Delayed routes consume time."], ["Attention", "Competing signals divide attention."],
  ["Visibility", "Isolated information reduces visibility."], ["Consistency", "Duplicated processes weaken consistency."],
  ["Opportunity", "Stopped signals represent missed opportunity."],
] as const;

type Range = readonly [number, number];
function ranged(progress: number, [start, end]: Range) { return Math.min(Math.max((progress - start) / (end - start), 0), 1); }

function useRealityProgress(ref: React.RefObject<HTMLElement | null>, onBeat: (beat: number) => void) {
  useEffect(() => {
    const scene = ref.current; if (!scene) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, visible = true, lastBeat = -1;
    const write = () => {
      frame = 0; if (!visible && !reduced.matches) return;
      const bounds = scene.getBoundingClientRect();
      const travel = Math.max(bounds.height - innerHeight, 1);
      const progress = reduced.matches ? 1 : Math.min(Math.max(-bounds.top / travel, 0), 1);
      scene.style.setProperty("--reality-progress", progress.toFixed(4));
      Object.entries(REALITY_RANGES).forEach(([name, range]) => scene.style.setProperty(`--reality-${name.replace(/[A-Z]/g, l => `-${l.toLowerCase()}`)}`, ranged(progress, range).toFixed(4)));
      costs.forEach((_, index) => scene.style.setProperty(`--cost-${index + 1}`, ranged(progress, [.53 + index * .035, .61 + index * .035]).toFixed(4)));
      const beat = reduced.matches ? 5 : progress < .17 ? 0 : progress < .34 ? 1 : progress < .52 ? 2 : progress < .7 ? 3 : progress < .86 ? 4 : 5;
      if (beat !== lastBeat) { lastBeat = beat; onBeat(beat); }
      scene.dataset.motion = reduced.matches ? "reduced" : "full";
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(write); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; scene.dataset.sceneActive = String(visible); if (visible) schedule(); }, { rootMargin: "20% 0px" });
    observer.observe(scene); addEventListener("scroll", schedule, { passive: true }); addEventListener("resize", schedule, { passive: true }); reduced.addEventListener("change", schedule); schedule();
    return () => { observer.disconnect(); removeEventListener("scroll", schedule); removeEventListener("resize", schedule); reduced.removeEventListener("change", schedule); if (frame) cancelAnimationFrame(frame); };
  }, [ref, onBeat]);
}

function OperationalNetwork() {
  return (
    <div className="reality-network" role="img" aria-label="A healthy connected business grows beyond its supporting systems, reveals operational costs, and begins aligning into shared structure.">
      <div className="reality-network__depth" aria-hidden="true" />
      <svg viewBox="0 0 390 430" aria-hidden="true">
        <defs>
          <linearGradient id="realityPath" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#728b98" stopOpacity=".18" /><stop offset=".5" stopColor="#d1a85c" stopOpacity=".65" /><stop offset="1" stopColor="#728b98" stopOpacity=".12" /></linearGradient>
          <filter id="realityGlow" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="2" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        </defs>
        <g className="reality-network__paths">{paths.map((path, index) => <path className={path.phase.split(" ").map(p => `is-${p}`).join(" ")} d={path.d} key={index} />)}</g>
        <g className="reality-network__signals">
          {[0,1,2,3,4,6,7,9,10].map((pathIndex, index) => <circle className={index > 3 ? "is-growth" : "is-base"} r="2.2" key={pathIndex}><animateMotion dur={`${5.2 + (index % 3)}s`} repeatCount="indefinite" path={paths[pathIndex].d} /></circle>)}
        </g>
        <g className="reality-network__core" transform="translate(195 205)"><circle r="36" /><circle r="24" /><path d="M-9 0H9M0-9V9" /><text y="54" textAnchor="middle">BUSINESS CORE</text></g>
        <g className="reality-network__nodes">{nodes.map((node, index) => <g className={node.phase.split(" ").map(p => `is-${p}`).join(" ")} transform={`translate(${node.x} ${node.y})`} key={node.id} style={{ "--node-index": index } as React.CSSProperties}><circle r="16" /><circle r="5" /><text y="29" textAnchor="middle">{node.label}</text></g>)}</g>
        <g className="reality-network__analysis"><circle cx="195" cy="205" r="65" /><path d="M195 205L54 112M195 205L270 64M195 205L346 282M195 205L208 376" /></g>
        <g className="reality-network__channels"><path d="M195 205L195 18M195 205L372 205M195 205L195 414M195 205L18 205" /><circle cx="195" cy="18" r="4" /><circle cx="372" cy="205" r="4" /><circle cx="195" cy="414" r="4" /><circle cx="18" cy="205" r="4" /></g>
      </svg>
      <div className="reality-costs" aria-hidden="true">{costs.map(([label], index) => <span className={`reality-cost reality-cost--${index + 1}`} key={label}><i />{label}</span>)}</div>
    </div>
  );
}

export function OperationalComplexity() {
  const sceneRef = useRef<HTMLElement>(null);
  const [activeBeat, setActiveBeat] = useState(0);
  const handleBeat = useCallback((beat: number) => setActiveBeat(beat), []);
  useRealityProgress(sceneRef, handleBeat);
  return (
    <section className={`reality-scene reality-beat-${activeBeat + 1}`} id="collective" ref={sceneRef} aria-labelledby="complexity-title">
      <div className="reality-scene__sticky-stage">
        <div className="reality-scene__entrance" aria-hidden="true"><i /></div>
        <div className="reality-scene__atmosphere" aria-hidden="true" />
        <div className="reality-scene__layout">
          <div className="reality-copy">
            <p className="reality-copy__eyebrow"><span aria-hidden="true" />MOST BUSINESSES DON&apos;T HAVE A PEOPLE PROBLEM.</p>
            <h2 id="complexity-title">Success creates <em>complexity.</em></h2>
            <p className="reality-copy__support">As a business grows, information becomes scattered, processes become inconsistent, and decisions become harder to make. Teams work harder, yet opportunities still slip through the cracks. Growth isn&apos;t the problem. Operating without connected systems is.</p>
          </div>
          <OperationalNetwork />
          <div className="reality-narrative" aria-live="polite" aria-atomic="true"><strong>{beatCopy[activeBeat][0]}</strong><p key={activeBeat}>{beatCopy[activeBeat][1]}</p><div>{beatCopy.map(([label], index) => <i className={index <= activeBeat ? "is-reached" : ""} title={label} key={label} />)}</div></div>
        </div>
        <div className="reality-scene__exit" aria-hidden="true"><i /><i /><i /><i /><span /></div>
      </div>
      <div className="sr-only">
        <p>What once worked was simple, direct, and easy to manage. Customers, Team, Operations, and Growth connect clearly to the Business Core.</p>
        <p>Growth introduces Website, Leads, Scheduling, Finance, Marketing, and Customer Data, expanding the capable system.</p>
        <p>The business grows beyond the systems that once supported it. Routes duplicate, information isolates, signals delay, and bottlenecks form.</p>
        <h3>Hidden operational costs</h3><ul>{costs.map(([label, relationship]) => <li key={label}><strong>{label}:</strong> {relationship}</li>)}</ul>
        <p>The system recognizes the pattern between disconnected tools. Duplicate paths begin consolidating toward four shared organizing channels, but alignment is not yet complete.</p>
      </div>
    </section>
  );
}
