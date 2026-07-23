"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

function rangeProgress(
  progress: number,
  [start, end]: readonly [number, number],
) {
  return Math.min(Math.max((progress - start) / (end - start), 0), 1);
}

function OpeningNavigation() {
  return (
    <header className="arrival-navigation">
      <a
        className="arrival-navigation__brand"
        href="#top"
        aria-label="Gent Ascend Collective home"
      >
        <span className="arrival-navigation__monogram" aria-hidden="true">
          <i>GA</i>
        </span>
        <span>
          Gent Ascend <em>Collective</em>
        </span>
      </a>
      <a className="arrival-navigation__contact" href="#collective">
        Start a conversation
      </a>
    </header>
  );
}

function OpeningEnvironment() {
  return (
    <div
      className="chapter-environment chapter-environment--arrival"
      aria-hidden="true"
    >
      <div className="chapter-environment__depth" />
      <div className="chapter-environment__grid" />
      <div className="chapter-environment__architecture">
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="chapter-environment__axis" />
      <div className="chapter-environment__light" />
      <div className="chapter-environment__vignette" />
    </div>
  );
}

function ArrivalEmblem() {
  return (
    <div className="arrival-emblem">
      <span className="arrival-emblem__aura" aria-hidden="true" />
      <span
        className="arrival-emblem__orbit arrival-emblem__orbit--outer"
        aria-hidden="true"
      />
      <span
        className="arrival-emblem__orbit arrival-emblem__orbit--inner"
        aria-hidden="true"
      />
      <Image
        className="arrival-emblem__image"
        src="/logo.png"
        alt="Gent Ascend Collective emblem"
        width={2000}
        height={2000}
        sizes="(max-width: 760px) 84vw, 46vw"
        priority
      />
    </div>
  );
}

function useArrivalProgress(sceneRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;

    const write = () => {
      frame = 0;
      if (!visible && !reducedMotion.matches) return;

      const bounds = scene.getBoundingClientRect();
      const distance = Math.max(bounds.height - window.innerHeight, 1);
      const progress = reducedMotion.matches
        ? 0
        : Math.min(Math.max(-bounds.top / distance, 0), 1);

      scene.style.setProperty("--arrival-progress", progress.toFixed(4));
      scene.style.setProperty(
        "--arrival-copy-fade",
        rangeProgress(progress, [0.12, 0.48]).toFixed(4),
      );
      scene.style.setProperty(
        "--arrival-forward",
        rangeProgress(progress, [0.38, 0.9]).toFixed(4),
      );
      scene.style.setProperty(
        "--arrival-release",
        rangeProgress(progress, [0.8, 1]).toFixed(4),
      );
      scene.dataset.motion = reducedMotion.matches ? "reduced" : "full";
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(write);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        scene.dataset.sceneActive = String(visible);
        if (visible) schedule();
      },
      { rootMargin: "20% 0px" },
    );

    observer.observe(scene);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    reducedMotion.addEventListener("change", schedule);
    schedule();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      reducedMotion.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sceneRef]);
}

export function Hero() {
  const sceneRef = useRef<HTMLElement>(null);
  useArrivalProgress(sceneRef);

  return (
    <section
      className="arrival-scene"
      id="top"
      ref={sceneRef}
      aria-labelledby="opening-title"
    >
      <div className="arrival-stage">
        <OpeningEnvironment />
        <OpeningNavigation />
        <div className="arrival-layout">
          <ArrivalEmblem />
          <div className="arrival-copy">
            <p className="arrival-brand">GENT ASCEND COLLECTIVE</p>
            <p className="arrival-eyebrow">THE ASCEND FRAMEWORK</p>
            <h1 id="opening-title">
              Four disciplines.
              <br />
              One connected <em>transformation system.</em>
            </h1>
          </div>
        </div>
        <a
          className="arrival-scroll-cue"
          href="#ascend-framework"
          aria-label="Continue to the Ascend Framework"
        >
          <span>Scroll to enter</span>
          <i aria-hidden="true" />
        </a>
        <div className="arrival-portal" aria-hidden="true">
          <i />
          <span />
        </div>
      </div>
    </section>
  );
}
