"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const SCENE_RANGES = {
  arrival: [0, 0.2],
  coreActivation: [0.08, 0.32],
  frameworkEmergence: [0.28, 0.56],
  frameworkInteraction: [0.52, 0.78],
  enterSystem: [0.76, 1],
} as const;

const frameworks = [
  { label: "Identity", copy: "Clarify what the business stands for, how it should feel, and why people should trust it." },
  { label: "Presence", copy: "Create the digital experience, messaging, and visibility that make the business impossible to overlook." },
  { label: "Intelligence", copy: "Equip the company with AI, insight, and decision systems that improve how it thinks and serves." },
  { label: "Infrastructure", copy: "Build the workflows, platforms, and operating systems that help the business scale with control." },
] as const;

const neutralFramework = {
  label: "THE ASCEND FRAMEWORK",
  copy: "Four connected disciplines designed to strengthen how a business looks, operates, thinks, and grows.",
};

type SceneRangeName = keyof typeof SCENE_RANGES;

function rangeProgress(progress: number, [start, end]: readonly [number, number]) {
  return Math.min(Math.max((progress - start) / (end - start), 0), 1);
}

function ArrowIcon() {
  return <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" /></svg>;
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

function CommandCore({ activeNode }: { activeNode: number | null }) {
  return (
    <div className={`opening-command-core${activeNode !== null ? ` has-active-node active-node-${activeNode + 1}` : ""}`} aria-label="Gent Ascend Collective command core">
      <div className="opening-command-core__field" aria-hidden="true" />
      <div className="opening-command-core__energy" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="opening-command-core__outer-ring" aria-hidden="true" />
      <div className="opening-command-core__segmented-ring" aria-hidden="true" />
      <div className="opening-command-core__calibration" aria-hidden="true" />
      <div className="opening-command-core__bezel">
        <span className="opening-command-core__reflection" aria-hidden="true" />
        <div className="opening-command-core__chamber">
          <Image src="/hero-icon.png" alt="Gent Ascend Collective engineered emblem" width={2000} height={2000} sizes="(max-width: 760px) 66vw, 560px" priority />
        </div>
      </div>
    </div>
  );
}

function FrameworkSystem({ activeNode, interactive, onActivate }: { activeNode: number | null; interactive: boolean; onActivate: (index: number) => void }) {
  return (
    <div className="opening-framework" aria-label="The Ascend Framework">
      <svg className="opening-framework__paths" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M50 50L22 20M50 50L78 20M50 50L22 80M50 50L78 80" />
        <path className="opening-framework__active-path" d={activeNode === 0 ? "M50 50L22 20" : activeNode === 1 ? "M50 50L78 20" : activeNode === 2 ? "M50 50L22 80" : "M50 50L78 80"} />
      </svg>
      {frameworks.map((framework, index) => (
        <button
          className={`opening-framework__node opening-framework__node--${index + 1}`}
          key={framework.label}
          disabled={!interactive}
          aria-pressed={activeNode === index}
          onClick={() => onActivate(index)}
        >
          <span className="opening-framework__node-mark" aria-hidden="true">0{index + 1}</span>
          <span>{framework.label}</span>
        </button>
      ))}
    </div>
  );
}

function useOpeningSceneProgress(sceneRef: React.RefObject<HTMLElement | null>, onPhaseChange: (interactive: boolean, exiting: boolean) => void) {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let lastInteractive = false;
    let lastExiting = false;

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
      const interactive = reducedMotion.matches || (progress >= .54 && progress < .79);
      const exiting = !reducedMotion.matches && progress >= .79;
      if (interactive !== lastInteractive || exiting !== lastExiting) {
        lastInteractive = interactive; lastExiting = exiting; onPhaseChange(interactive, exiting);
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
  const activeFramework = activeNode === null ? neutralFramework : frameworks[activeNode];

  const handlePhaseChange = useCallback((canInteract: boolean, exiting: boolean) => {
    setInteractive(canInteract);
    if (exiting) setActiveNode(null);
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
            <FrameworkSystem activeNode={activeNode} interactive={interactive} onActivate={index => setActiveNode(current => current === index ? null : index)} />
            <CommandCore activeNode={activeNode} />
          </div>
          <div className="opening-foreground__message">
            <p className="opening-eyebrow"><span aria-hidden="true" />THE BUSINESS INTELLIGENCE COLLECTIVE</p>
            <h1 id="opening-title">Build the business<br />you know is <em>possible.</em></h1>
            <p className="opening-foreground__support">See how possibility becomes a system.</p>
            <button className="opening-primary-action" type="button" onClick={enterExperience}>Enter the Experience <ArrowIcon /></button>
          </div>
          <div className="opening-framework-brief" aria-live="polite" aria-atomic="true">
            <div><strong>{activeFramework.label}</strong><span aria-label={activeNode === null ? "Framework overview" : `${activeNode + 1} of 4`}>{frameworks.map((item, index) => <i className={activeNode === index ? "is-current" : ""} key={item.label} />)}</span></div>
            <p key={activeFramework.label}>{activeFramework.copy}</p>
          </div>
        </div>
        <a className="opening-scroll-invitation" href="#collective" aria-label="Continue through the experience"><span>Possibility becomes structure</span><i aria-hidden="true" /></a>
        <div className="opening-scene__portal" aria-hidden="true"><i /><span /></div>
        <div className="opening-scene__exit-boundary" aria-hidden="true"><span /></div>
      </div>
    </section>
  );
}
