"use client";

import { useEffect, useRef, useState } from "react";

const nodes = [
  { x: 72, y: 178, size: 5, type: "source", label: "Customers", stage: 1 },
  { x: 154, y: 104, size: 4, type: "standard", label: "Team", stage: 1 },
  { x: 180, y: 232, size: 6, type: "standard", label: "Website", stage: 2 },
  { x: 268, y: 66, size: 5, type: "decision", label: "Leads", stage: 2 },
  { x: 288, y: 164, size: 8, type: "hub", label: "Business Core", stage: 1 },
  { x: 262, y: 286, size: 4, type: "standard", label: "Scheduling", stage: 2 },
  { x: 394, y: 102, size: 5, type: "standard", label: "Inventory", stage: 2 },
  { x: 410, y: 218, size: 6, type: "standard", label: "Growth", stage: 1 },
  { x: 502, y: 62, size: 4, type: "standard", label: "Marketing", stage: 2 },
  { x: 526, y: 158, size: 7, type: "bottleneck", label: "Finance", stage: 2 },
  { x: 506, y: 282, size: 5, type: "standard", label: "Customer Data", stage: 2 },
  { x: 614, y: 118, size: 4, type: "isolated", label: "Decisions", stage: 3 },
  { x: 626, y: 236, size: 5, type: "edge", label: "Handoffs", stage: 3 },
] as const;

const stages = [
  { label: "Connected", copy: "What once worked was simple, direct, and easy to manage." },
  { label: "Expanding", copy: "Growth introduces more customers, tools, people, and decisions." },
  { label: "Fragmented", copy: "Without connected infrastructure, complexity begins to consume attention." },
] as const;

const paths = [
  "M72 178C104 178 117 116 154 104",
  "M72 178C116 178 131 224 180 232",
  "M154 104C194 90 220 71 268 66",
  "M154 104C211 112 231 151 288 164",
  "M180 232C222 219 246 181 288 164",
  "M180 232C218 248 229 279 262 286",
  "M268 66C319 63 347 88 394 102",
  "M288 164C335 164 360 205 410 218",
  "M288 164C330 145 354 116 394 102",
  "M262 286C317 283 354 240 410 218",
  "M394 102C437 86 463 65 502 62",
  "M394 102C447 111 474 142 526 158",
  "M410 218C453 210 478 172 526 158",
  "M410 218C449 239 463 275 506 282",
  "M502 62C548 61 569 99 614 118",
  "M526 158C566 151 583 127 614 118",
  "M526 158C570 176 585 221 626 236",
  "M506 282C554 281 582 248 626 236",
] as const;

const pathStages = [1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3] as const;

export function OperationalComplexity() {
  const sectionRef = useRef<HTMLElement>(null);
  const networkRef = useRef<HTMLDivElement>(null);
  const networkSvgRef = useRef<SVGSVGElement>(null);
  const activeStageRef = useRef(0);
  const isActiveRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      isActiveRef.current = entry.isIntersecting;
      setIsActive(entry.isIntersecting);
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { rootMargin: "12% 0px 12%", threshold: 0.08 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const svg = networkSvgRef.current;
    if (!svg || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (isActive) svg.unpauseAnimations();
    else svg.pauseAnimations();
  }, [isActive]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      section.style.setProperty("--chapter-progress", "1");
      activeStageRef.current = 2;
      const reducedFrame = window.requestAnimationFrame(() => setActiveStage(2));
      return () => window.cancelAnimationFrame(reducedFrame);
    }
    let frame = 0;
    const updateProgress = () => {
      if (!isActiveRef.current) {
        frame = 0;
        return;
      }
      const bounds = section.getBoundingClientRect();
      const travel = Math.max(bounds.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-bounds.top / travel, 0), 1);
      section.style.setProperty("--chapter-progress", progress.toFixed(3));
      let nextStage = activeStageRef.current;
      if (nextStage === 0 && progress > .33) nextStage = 1;
      else if (nextStage === 1 && progress > .64) nextStage = 2;
      else if (nextStage === 1 && progress < .24) nextStage = 0;
      else if (nextStage === 2 && progress < .55) nextStage = 1;
      if (nextStage !== activeStageRef.current) {
        activeStageRef.current = nextStage;
        setActiveStage(nextStage);
      }
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateProgress);
    };
    frame = window.requestAnimationFrame(updateProgress);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [isActive]);

  useEffect(() => {
    const network = networkRef.current;
    if (!network || !window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const update = () => {
      network.style.setProperty("--network-x", `${x}px`);
      network.style.setProperty("--network-y", `${y}px`);
      frame = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      const bounds = network.getBoundingClientRect();
      x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 5;
      y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 4;
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    network.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      network.removeEventListener("pointermove", onPointerMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className={`complexity-section stage-${activeStage + 1}${isVisible ? " is-visible" : ""}${isActive ? " is-active" : ""}`} id="collective" ref={sectionRef} aria-labelledby="complexity-title">
      <div className="complexity-atmosphere" aria-hidden="true" />
      <div className="complexity-inner">
        <div className="complexity-copy">
          <p className="complexity-eyebrow"><span />MOST BUSINESSES DON&apos;T HAVE A PEOPLE PROBLEM.</p>
          <h2 id="complexity-title">Success creates <em>complexity.</em></h2>
          <p className="complexity-support">As a business grows, information becomes scattered, processes become inconsistent, and decisions become harder to make. Teams work harder, yet opportunities still slip through the cracks. Growth isn&apos;t the problem. Operating without connected systems is.</p>
          <div className="network-narrative" aria-live="polite" aria-atomic="true">
            <div className="stage-track" aria-label={`Stage ${activeStage + 1} of 3: ${stages[activeStage].label}`}>
              {stages.map((stage, index) => <span className={index <= activeStage ? "is-reached" : ""} key={stage.label}><i />{stage.label}</span>)}
            </div>
            <p key={stages[activeStage].label}><strong>{stages[activeStage].label}</strong>{stages[activeStage].copy}</p>
          </div>
        </div>

        <div className="network-frame" ref={networkRef} role="img" aria-label="An evolving network of operational systems, workflows, and decision points">
          <div className="network-depth" aria-hidden="true" />
          <svg className="operational-network" viewBox="0 0 700 350" aria-hidden="true" ref={networkSvgRef}>
            <defs>
              <linearGradient id="networkLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="#738794" stopOpacity=".08" />
                <stop offset=".48" stopColor="#a18a5c" stopOpacity=".34" />
                <stop offset="1" stopColor="#738794" stopOpacity=".08" />
              </linearGradient>
              <filter id="networkSoftGlow" x="-100%" y="-100%" width="300%" height="300%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <g className="network-paths">
              {paths.map((path, index) => {
                const stage = pathStages[index];
                return <path className={`path-stage-${stage}${index === 7 || index === 12 ? " is-constricted" : ""}${index === 16 ? " is-interrupted" : ""}`} d={path} key={path} />;
              })}
              <path className="redirect-path" d="M506 282C548 266 576 244 626 236C585 231 550 219 526 198" />
            </g>
            <g className="network-signals">
              {[1, 4, 7, 10, 13, 16, 12].map((index, order) => <circle className={`signal-stage-${order < 2 ? 1 : order < 5 ? 2 : 3}${order === 5 ? " is-delayed" : ""}`} r="2" key={`${index}-${order}`} style={{ "--signal-delay": `${order * -0.72}s` } as React.CSSProperties}><animateMotion dur={`${order < 2 ? 6.2 : order < 5 ? 5.2 : 8.4}s`} repeatCount="indefinite" path={paths[index]} /></circle>)}
            </g>
            <g className="network-nodes">
              {nodes.map((node, index) => (
                <g className={`network-node node-stage-${node.stage} node-type-${node.type}`} style={{ "--node-delay": `${index * 65}ms` } as React.CSSProperties} transform={`translate(${node.x} ${node.y})`} key={`${node.x}-${node.y}`}>
                  <circle className="node-aura" r={node.size + 9} />
                  <circle className="node-shell" r={node.size + 3} />
                  <circle className="node-center" r={node.size} />
                  {node.type === "decision" && <path d="M-3-11h6M0-11v5" />}
                  <text className="network-node-label" x="0" y={node.size + 18} textAnchor="middle">{node.label}</text>
                </g>
              ))}
            </g>
          </svg>
        </div>
      </div>
      <p className="sr-only">The network progresses from a simple connected business, through expanding tools and functions, to a capable business experiencing fragmented information and operational bottlenecks.</p>
    </section>
  );
}
