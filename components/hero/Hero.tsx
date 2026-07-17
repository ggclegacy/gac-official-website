"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const frameworks = [
  { label: "Identity", copy: "Clarify what the business stands for, how it should feel, and why people should trust it." },
  { label: "Presence", copy: "Create the digital experience, messaging, and visibility that make the business impossible to overlook." },
  { label: "Intelligence", copy: "Equip the company with AI, insight, and decision systems that improve how it thinks and serves." },
  { label: "Infrastructure", copy: "Build the workflows, platforms, and operating systems that help the business scale with control." },
] as const;

const defaultFramework = {
  label: "THE ASCEND FRAMEWORK",
  copy: "Four connected disciplines designed to strengthen how a business looks, operates, thinks, and grows.",
};

function NodeIcon({ index }: { index: number }) {
  const paths = [
    <><path d="M8 2.5 12 4v3.2c0 2.7-1.6 4.8-4 6.3-2.4-1.5-4-3.6-4-6.3V4l4-1.5Z" /><path d="M6.2 7.7 7.5 9l2.5-2.7" /></>,
    <><circle cx="8" cy="8" r="4.8" /><path d="M3.5 6.3h9M3.5 9.7h9M8 3.2c1.5 1.3 2.2 2.9 2.2 4.8S9.5 11.5 8 12.8C6.5 11.5 5.8 9.9 5.8 8S6.5 4.5 8 3.2Z" /></>,
    <><path d="M4 5.5h8v6H4zM6 3.5h4M8 3.5v2M6.2 8.4h.1M9.7 8.4h.1M6.3 10h3.4" /></>,
    <><path d="M3 4h4v3H3zM9 4h4v3H9zM6 9h4v3H6zM5 7v1.1h3M11 7v1.1H8" /></>,
  ];

  return <svg viewBox="0 0 16 16" aria-hidden="true">{paths[index]}</svg>;
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
    </svg>
  );
}

function Navigation() {
  return (
    <header className="site-header reveal reveal-nav">
      <a className="wordmark" href="#top" aria-label="Gent Ascend Collective home">
        <span className="wordmark-mark">GA</span>
        <span>Gent Ascend <em>Collective</em></span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#collective">Collective</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#approach">Approach</a>
        <a href="#blueprint" className="nav-cta">Start a conversation <ArrowIcon /></a>
      </nav>
    </header>
  );
}

type CommandCoreProps = {
  activeNode: number | null;
  onActivate: (index: number) => void;
  onHoverIntent: (index: number) => void;
  onHoverEnd: () => void;
  onNodeBlur: (event: React.FocusEvent<HTMLButtonElement>) => void;
};

function CommandCore({ activeNode, onActivate, onHoverIntent, onHoverEnd, onNodeBlur }: CommandCoreProps) {
  return (
    <div className={`core-stage reveal reveal-core${activeNode !== null ? ` core-active core-active-${activeNode + 1}` : ""}`} aria-label="Gent Ascend Collective command core">
      <div className="atmosphere" />
      <div className="depth-fog" />
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 6 }, (_, index) => <i key={index} />)}
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="precision-ring"><span /></div>
      <div className="segmented-ring" />
      <div className="segment-highlights" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="trace trace-one" />
      <div className="trace trace-two" />
      <svg className="connections" viewBox="0 0 620 620" aria-hidden="true">
        <defs>
          <linearGradient id="channelVertical" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#8f7443" stopOpacity=".08" /><stop offset=".5" stopColor="#e4bf72" stopOpacity=".7" /><stop offset="1" stopColor="#8f7443" stopOpacity=".08" />
          </linearGradient>
          <linearGradient id="channelHorizontal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8f7443" stopOpacity=".08" /><stop offset=".5" stopColor="#e4bf72" stopOpacity=".7" /><stop offset="1" stopColor="#8f7443" stopOpacity=".08" />
          </linearGradient>
        </defs>
        <path className="channel-base" d="M310 74V206M546 310H414M310 546V414M74 310H206" />
        <path className="channel-pulse pulse-1" d="M310 74V206" stroke="url(#channelVertical)" />
        <path className="channel-pulse pulse-2" d="M546 310H414" stroke="url(#channelHorizontal)" />
        <path className="channel-pulse pulse-3" d="M310 546V414" stroke="url(#channelVertical)" />
        <path className="channel-pulse pulse-4" d="M74 310H206" stroke="url(#channelHorizontal)" />
        <circle className="center-signal" cx="310" cy="310" r="109" />
      </svg>
      <div className="bezel">
        <div className="bezel-highlight" />
        <div className="logo-well">
          <Image src="/logo.png" alt="Gent Ascend Collective emblem" width={2000} height={2000} priority />
        </div>
      </div>
      {frameworks.map((framework, index) => (
        <button
          className={`framework-node node-${index + 1}${activeNode === index ? " is-active" : ""}`}
          key={framework.label}
          aria-label={`Activate ${framework.label} framework`}
          aria-pressed={activeNode === index}
          onClick={(event) => { if (event.detail > 0 || activeNode !== index) onActivate(index); }}
          onFocus={(event) => { if (event.currentTarget.matches(":focus-visible") && activeNode !== index) onActivate(index); }}
          onBlur={onNodeBlur}
          onPointerEnter={(event) => { if (event.pointerType === "mouse") onHoverIntent(index); }}
          onPointerLeave={onHoverEnd}
        >
          <span className="node-corner node-corner-a" />
          <span className="node-corner node-corner-b" />
          <span className="node-icon"><NodeIcon index={index} /></span>
          <span className="node-label">{framework.label}</span>
        </button>
      ))}
      <svg className="core-lines" viewBox="0 0 620 620" aria-hidden="true">
        <circle cx="310" cy="310" r="252" />
        <path d="M310 26v33M594 310h-33M310 594v-33M26 310h33" />
        <path className="gold-line" d="M102 164A252 252 0 0 1 226 72M518 456a252 252 0 0 1-124 92" />
      </svg>
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeNode, setActiveNode] = useState<number | null>(null);
  const activeFramework = activeNode === null ? defaultFramework : frameworks[activeNode];

  const activateNode = (index: number) => {
    setActiveNode((current) => current === index ? null : index);
  };

  const handleHoverIntent = (index: number) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    hoverTimer.current = setTimeout(() => setActiveNode(index), 110);
  };

  const handleHoverEnd = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
  };

  const handleNodeBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (!(event.relatedTarget instanceof Element) || !event.relatedTarget.closest(".framework-node")) {
      setActiveNode(null);
    }
  };

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const observer = new IntersectionObserver(([entry]) => {
      hero.classList.toggle("is-paused", !entry.isIntersecting);
    }, { rootMargin: "10% 0px", threshold: 0.02 });
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const distance = Math.min(window.scrollY, window.innerHeight);
        hero.style.setProperty("--hero-back", `${Math.min(distance * 0.012, 9)}px`);
        hero.style.setProperty("--hero-mid", `${Math.min(distance * 0.024, 17)}px`);
        hero.style.setProperty("--hero-front", `${Math.min(distance * 0.038, 26)}px`);
        frame = 0;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return () => window.removeEventListener("scroll", onScroll);
    }

    let pointerFrame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    const updateCamera = () => {
      const x = pointerX / window.innerWidth - 0.5;
      const y = pointerY / window.innerHeight - 0.5;
      hero.style.setProperty("--pointer-x", `${x}`);
      hero.style.setProperty("--pointer-y", `${y}`);
      hero.style.setProperty("--light-x", `${pointerX}px`);
      hero.style.setProperty("--light-y", `${pointerY}px`);
      hero.style.setProperty("--camera-bg-x", `${x * 2}px`);
      hero.style.setProperty("--camera-bg-y", `${y * 1.5}px`);
      hero.style.setProperty("--camera-mid-x", `${x * 5}px`);
      hero.style.setProperty("--camera-mid-y", `${y * 4}px`);
      hero.style.setProperty("--camera-front-x", `${x * 9}px`);
      hero.style.setProperty("--camera-front-y", `${y * 7}px`);
      pointerFrame = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!pointerFrame) pointerFrame = window.requestAnimationFrame(updateCamera);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveNode(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
    };
  }, []);

  return (
    <main>
      <section className="hero" id="top" ref={heroRef}>
        <div className="environment" aria-hidden="true">
          <div className="environment-base" />
          <div className="structural-grid" />
          <div className="architectural-lines"><i /><i /><i /><i /></div>
          <div className="chamber-haze" />
          <div className="overhead-light" />
          <div className="gold-reflection" />
          <div className="foreground-fragment fragment-left" />
          <div className="foreground-fragment fragment-right" />
        </div>
        <div className="ambient-light" aria-hidden="true" />
        <div className="grain" />
        <Navigation />
        <div className="hero-layout">
          <CommandCore activeNode={activeNode} onActivate={activateNode} onHoverIntent={handleHoverIntent} onHoverEnd={handleHoverEnd} onNodeBlur={handleNodeBlur} />
          <div className="hero-copy">
            <p className="eyebrow reveal reveal-eyebrow"><span />THE BUSINESS INTELLIGENCE COLLECTIVE<span /></p>
            <h1 className="reveal reveal-headline">Build the business<br />you know is <em>possible.</em></h1>
            <p className="supporting-copy reveal reveal-copy">Gent Ascend Collective designs intelligent systems, digital experiences, and operating infrastructure that help ambitious businesses grow with greater clarity, capability, and control.</p>
            <div className={`framework-brief reveal reveal-copy${activeNode !== null ? " is-engaged" : ""}`} aria-live="polite" aria-atomic="true">
              <div className="framework-brief-heading">
                <span>{activeFramework.label}</span>
                <div className="framework-position" aria-label={activeNode === null ? "No framework selected" : `${activeNode + 1} of 4`}>
                  {frameworks.map((framework, index) => <i className={activeNode === index ? "is-current" : ""} key={framework.label} />)}
                </div>
              </div>
              <p key={activeFramework.label}>{activeFramework.copy}</p>
            </div>
            <div className="hero-actions reveal reveal-actions">
              <a className="button button-primary" href="#blueprint">Begin Your Blueprint <ArrowIcon /></a>
              <a className="button button-secondary" href="#collective">Explore the Collective <ArrowIcon /></a>
            </div>
          </div>
        </div>
        <a className="scroll-cue reveal reveal-scroll" href="#collective" aria-label="Scroll to explore">
          <span>Scroll to explore</span><i />
        </a>
        <div className="hero-transition" aria-hidden="true"><span /></div>
      </section>
    </main>
  );
}
