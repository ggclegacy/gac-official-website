"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SCENE_RANGES = {
  arrival: [0, 0.16],
  coreActivation: [0.05, 0.22],
  frameworkEmergence: [0.14, 0.3],
  frameworkInteraction: [0.22, 0.84],
  enterSystem: [0.84, 1],
} as const;

const frameworks = [
  { label: "Identity", title: "Identity creates direction.", copy: "When a business is clear about what it stands for, every decision, message, and experience begins moving in the same direction.", concepts: "Clarity · Positioning · Trust" },
  { label: "Presence", title: "Presence turns clarity into recognition.", copy: "Your website, message, reputation, and customer experience should make the value of your business impossible to miss.", concepts: "Visibility · Experience · Reputation" },
  { label: "Intelligence", title: "Intelligence turns information into action.", copy: "AI, insight, and decision systems help the business see what matters, respond faster, and serve with greater capability.", concepts: "Insight · Decisions · Capability" },
  { label: "Infrastructure", title: "Infrastructure turns capability into control.", copy: "Connected workflows, platforms, and operating systems allow the business to grow without losing consistency, visibility, or control.", concepts: "Systems · Scale · Control" },
] as const;

const neutralFramework = {
  label: "THE ASCEND FRAMEWORK",
  title: "Four disciplines. One connected transformation system.",
  copy: "Each strengthens a different part of the business. Together, they create one direction for growth.",
  concepts: "Identity · Presence · Intelligence · Infrastructure",
};

type CoreState = "neutral" | "identity" | "presence" | "intelligence" | "infrastructure" | "complete" | "transition";

type SceneRangeName = keyof typeof SCENE_RANGES;

function rangeProgress(progress: number, [start, end]: readonly [number, number]) {
  return Math.min(Math.max((progress - start) / (end - start), 0), 1);
}

function ArrowIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" /></svg>;
}

function PillarIcon({ index }: { index: number }) {
  const paths = [
    <><rect x="4" y="4" width="16" height="16" rx="1"/><path d="M8 12h8M12 8v8"/></>,
    <><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1"/></>,
    <><path d="M4 17V7l8-4 8 4v10l-8 4-8-4Z"/><path d="m8 14 3-4 2 3 3-4"/></>,
    <><path d="M4 19V9h5V4h6v5h5v10H4Z"/><path d="M9 9h6M9 14h6"/></>,
  ];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[index]}</svg>;
}

function OpeningNavigation() {
  return (
    <header className="opening-navigation">
      <a className="opening-navigation__brand" href="#top" aria-label="Gent Ascend Collective home">
        <span className="opening-navigation__monogram" aria-hidden="true">GA</span>
        <span>Gent Ascend <em>Collective</em></span>
      </a>
      <a className="opening-navigation__contact" href="#collective">Start a conversation</a>
    </header>
  );
}

function OpeningEnvironment() {
  return (
    <div className="opening-environment" aria-hidden="true">
      <div className="opening-environment__depth" /><div className="opening-environment__grid" />
      <div className="opening-environment__architecture"><i /><i /><i /><i /></div>
      <div className="opening-environment__pathways"><i /><i /><i /></div>
      <div className="opening-environment__dust"><i /><i /><i /><i /></div>
      <div className="opening-environment__axis" /><div className="opening-environment__light" />
      <div className="opening-environment__floor-light" /><div className="opening-environment__vignette" />
    </div>
  );
}

function CommandCore({ activeNode, state }: { activeNode: number | null; state: CoreState }) {
  return (
    <div className={`opening-command-core core-state-${state}${activeNode !== null ? ` has-active-node active-node-${activeNode + 1}` : ""}`} aria-label="Gent Ascend Collective command core">
      <div className="opening-command-core__field" aria-hidden="true" />
      <div className="opening-command-core__energy" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="opening-command-core__outer-ring" aria-hidden="true" />
      <div className="opening-command-core__segmented-ring" aria-hidden="true" />
      <div className="opening-command-core__calibration" aria-hidden="true" />
      <div className="opening-command-core__bezel">
        <span className="opening-command-core__reflection" aria-hidden="true" />
        <div className="opening-command-core__chamber">
          <Image className="opening-command-core__brand" src="/hero-icon.png" alt="" width={1200} height={1200} sizes="(max-width: 760px) 58vw, 500px" priority />
          <Image className="opening-command-core__business" src="/bc-icon.png" alt="" width={2000} height={2000} sizes="(max-width: 760px) 58vw, 500px" />
        </div>
      </div>
    </div>
  );
}

function FrameworkSystem({ activeNode, assembled, complete, interactive, onActivate }: { activeNode: number | null; assembled: number; complete: boolean; interactive: boolean; onActivate: (index: number) => void }) {
  return (
    <div className={`opening-framework framework-assembled-${assembled}${complete ? " is-complete" : ""}`} aria-label="The Ascend Framework">
      <svg className="opening-framework__paths" viewBox="0 0 100 100" aria-hidden="true">
        <path className="pillar-path pillar-path--1" d="M50 50L22 20"/><path className="pillar-path pillar-path--2" d="M50 50L78 20"/><path className="pillar-path pillar-path--3" d="M50 50L22 80"/><path className="pillar-path pillar-path--4" d="M50 50L78 80"/>
        <path className={`opening-framework__active-path${activeNode !== null ? " is-active" : ""}`} d={activeNode === 0 ? "M50 50L22 20" : activeNode === 1 ? "M50 50L78 20" : activeNode === 2 ? "M50 50L22 80" : activeNode === 3 ? "M50 50L78 80" : ""} />
      </svg>
      {frameworks.map((framework, index) => (
        <button
          className={`opening-framework__node opening-framework__node--${index + 1}${index < assembled ? " is-assembled" : ""}${complete ? " is-complete" : ""}`}
          key={framework.label}
          disabled={!interactive}
          aria-pressed={activeNode === index}
          onClick={() => onActivate(index)}
        >
          <span className="opening-framework__node-mark" aria-hidden="true">0{index + 1}</span><span className="opening-framework__node-icon"><PillarIcon index={index}/></span><span>{framework.label}</span>
        </button>
      ))}
    </div>
  );
}

function useOpeningSceneProgress(sceneRef: React.RefObject<HTMLElement | null>, onPhaseChange: (interactive: boolean, exiting: boolean, assembled: number, automaticNode: number | null, complete: boolean) => void) {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let lastInteractive = false;
    let lastExiting = false, lastAssembled = -1, lastAutomatic = -2, lastComplete = false;

    const write = () => {
      frame = 0;
      if (!visible && !reducedMotion.matches) return;
      const bounds = scene.getBoundingClientRect();
      const distance = Math.max(bounds.height - window.innerHeight, 1);
      const progress = reducedMotion.matches ? 0 : Math.min(Math.max(-bounds.top / distance, 0), 1);
      scene.style.setProperty("--scene-progress", progress.toFixed(4));
      (Object.keys(SCENE_RANGES) as SceneRangeName[]).forEach((name) => {
        const cssName = name.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`);
        scene.style.setProperty(`--beat-${cssName}`, rangeProgress(progress, SCENE_RANGES[name]).toFixed(4));
      });
      const interactive = reducedMotion.matches || (progress >= .25 && progress < .84);
      const exiting = !reducedMotion.matches && progress >= .84;
      const assemblyProgress = rangeProgress(progress, [.18, .73]);
      const assembled = reducedMotion.matches ? 4 : Math.min(4, Math.floor(assemblyProgress * 4.45));
      const automaticNode = progress >= .2 && progress < .75 ? Math.min(3, Math.floor(rangeProgress(progress, [.2, .75]) * 4)) : null;
      const complete = !reducedMotion.matches && progress >= .75 && progress < .86;
      if (interactive !== lastInteractive || exiting !== lastExiting || assembled !== lastAssembled || automaticNode !== lastAutomatic || complete !== lastComplete) {
        lastInteractive = interactive; lastExiting = exiting; lastAssembled = assembled; lastAutomatic = automaticNode ?? -2; lastComplete = complete;
        onPhaseChange(interactive, exiting, assembled, automaticNode, complete);
      }
      scene.dataset.motion = reducedMotion.matches ? "reduced" : "full";
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(write); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; scene.dataset.sceneActive = String(visible); if (visible) schedule(); }, { rootMargin: "20% 0px" });
    observer.observe(scene);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    reducedMotion.addEventListener("change", schedule);
    schedule();
    return () => { observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); reducedMotion.removeEventListener("change", schedule); if (frame) cancelAnimationFrame(frame); };
  }, [sceneRef, onPhaseChange]);
}

export function Hero() {
  const sceneRef = useRef<HTMLElement>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const [interactive, setInteractive] = useState(false);
  const [automaticNode, setAutomaticNode] = useState<number | null>(null);
  const [assembled, setAssembled] = useState(0);
  const [complete, setComplete] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [manual, setManual] = useState(false);
  const displayNode = manual ? activeNode : automaticNode;
  const activeFramework = complete ? { label: "FRAMEWORK COMPLETE", title: "Four Pillars. One Ascension.", copy: "When identity, presence, intelligence, and infrastructure strengthen one another, businesses don’t just grow. They ascend.", concepts: "One connected transformation system" } : displayNode === null ? neutralFramework : frameworks[displayNode];
  const coreState: CoreState = transitioning ? "transition" : complete ? "complete" : displayNode === null ? "neutral" : frameworks[displayNode].label.toLowerCase() as CoreState;

  const handlePhaseChange = useCallback((canInteract: boolean, exiting: boolean, assemblyCount: number, autoNode: number | null, isComplete: boolean) => {
    setInteractive(canInteract); setAssembled(assemblyCount); setAutomaticNode(autoNode); setComplete(isComplete); setTransitioning(exiting);
    if (!canInteract || exiting || isComplete) { setManual(false); setActiveNode(null); }
  }, []);
  useOpeningSceneProgress(sceneRef, handlePhaseChange);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveNode(null); };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const enterExperience = () => {
    const scene = sceneRef.current;
    if (!scene) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const travel = Math.max(scene.offsetHeight - window.innerHeight, 1);
    window.scrollTo({ top: scene.offsetTop + travel * .31, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <section className="opening-scene" id="top" ref={sceneRef} aria-labelledby="opening-title">
      <div className="opening-scene__sticky-stage">
        <OpeningEnvironment /><OpeningNavigation />
        <div className="opening-foreground">
          <div className="opening-foreground__system">
            <FrameworkSystem activeNode={displayNode} assembled={assembled} complete={complete} interactive={interactive && !complete} onActivate={index => { setManual(true); setActiveNode(current => manual && current === index ? null : index); }} />
            <CommandCore activeNode={displayNode} state={coreState} />
          </div>
          <div className="opening-foreground__message">
            <p className="opening-brand-hero">Gent Ascend <span>Collective</span></p>
            <p className="opening-eyebrow"><span aria-hidden="true" />THE ASCEND FRAMEWORK</p>
            <h1 id="opening-title">Four disciplines.<br />One connected <em>transformation system.</em></h1>
            <p className="opening-foreground__support">Each strengthens a different part of the business. Together, they create one direction for growth.</p>
            <button className="opening-primary-action" type="button" onClick={enterExperience}>Enter the Experience <ArrowIcon /></button>
          </div>
          <p className="opening-framework-cue">Activate a pillar</p>
          <div className="opening-framework-brief" aria-live={manual ? "polite" : "off"} aria-atomic="true">
            <div><strong>{activeFramework.label}</strong><span aria-label={displayNode === null ? "Framework overview" : `${displayNode + 1} of 4`}>{frameworks.map((item, index) => <i className={displayNode === index || complete ? "is-current" : ""} key={item.label} />)}</span></div>
            <h2 key={`${activeFramework.label}-title`}>{activeFramework.title}</h2><p key={activeFramework.label}>{activeFramework.copy}</p><small>{activeFramework.concepts}</small>
          </div>
        </div>
        <a className="opening-scroll-invitation" href="#collective" aria-label="Continue through the experience"><span>Possibility becomes structure</span><i aria-hidden="true" /></a>
        <div className="opening-scene__portal" aria-hidden="true"><i /><b /><span /></div>
        <div className="opening-scene__exit-boundary" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
