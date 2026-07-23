"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./AscendFrameworkScene.module.css";

type FrameworkPhase =
  | "intro"
  | "command"
  | "create"
  | "operate"
  | "expand"
  | "complete"
  | "exit";

type PillarPhase = Exclude<FrameworkPhase, "intro" | "complete" | "exit">;

type PhaseContent = {
  label: string;
  headline: string;
  copy: string;
  capabilities: readonly string[];
  progress: string;
};

type PillarDefinition = PhaseContent & {
  id: PillarPhase;
  number: string;
  path: string;
};

const PHASE_RANGES = {
  intro: [0, 0.1],
  command: [0.1, 0.27],
  create: [0.27, 0.44],
  operate: [0.44, 0.61],
  expand: [0.61, 0.78],
  complete: [0.78, 0.92],
  exit: [0.92, 1],
} as const satisfies Record<FrameworkPhase, readonly [number, number]>;

const PILLARS: readonly PillarDefinition[] = [
  {
    id: "command",
    number: "01",
    label: "COMMAND",
    headline: "Command turns ambition into aligned direction.",
    copy: "Clear priorities give the business a decisive center—so leadership, decisions, and action move toward the same outcome.",
    capabilities: ["DIRECTION", "DECISIONS", "ALIGNMENT"],
    progress: "01 / 04",
    path: "M200 157V72",
  },
  {
    id: "create",
    number: "02",
    label: "CREATE",
    headline: "Create makes the value impossible to miss.",
    copy: "Identity, message, digital presence, and customer experience work together so the business is recognized for what makes it matter.",
    capabilities: ["IDENTITY", "PRESENCE", "EXPERIENCE"],
    progress: "02 / 04",
    path: "M243 200H328",
  },
  {
    id: "operate",
    number: "03",
    label: "OPERATE",
    headline: "Operate turns capability into control.",
    copy: "Connected systems and repeatable workflows give the team visibility, consistency, and the confidence to execute without friction.",
    capabilities: ["SYSTEMS", "EXECUTION", "CONTROL"],
    progress: "03 / 04",
    path: "M200 243V328",
  },
  {
    id: "expand",
    number: "04",
    label: "EXPAND",
    headline: "Expand turns momentum into durable growth.",
    copy: "With direction, presence, and operations working together, the business can reach farther, respond faster, and grow without losing control.",
    capabilities: ["REACH", "OPPORTUNITY", "SCALE"],
    progress: "04 / 04",
    path: "M157 200H72",
  },
] as const;

const INTRO_CONTENT: PhaseContent = {
  label: "SYSTEM RECEIVER",
  headline: "One core. Four coordinated disciplines.",
  copy: "Scroll to watch the Ascend Framework calibrate direction, expression, execution, and growth around one business system.",
  capabilities: ["COMMAND", "CREATE", "OPERATE", "EXPAND"],
  progress: "00 / 04",
};

const COMPLETE_CONTENT: PhaseContent = {
  label: "FRAMEWORK COMPLETE",
  headline: "Four disciplines. One connected transformation system.",
  copy: "Command, Create, Operate, and Expand now work as one direction for the business.",
  capabilities: ["COMMAND", "CREATE", "OPERATE", "EXPAND"],
  progress: "04 / 04",
};

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

function rangeProgress(
  progress: number,
  [start, end]: readonly [number, number],
) {
  return clamp((progress - start) / (end - start));
}

function phaseAtProgress(progress: number): FrameworkPhase {
  const entry = (
    Object.entries(PHASE_RANGES) as [
      FrameworkPhase,
      readonly [number, number],
    ][]
  ).find(([, [start, end]]) => progress >= start && progress < end);
  return entry?.[0] ?? "exit";
}

function contentForPhase(phase: FrameworkPhase): PhaseContent {
  if (phase === "intro") return INTRO_CONTENT;
  if (phase === "complete" || phase === "exit") return COMPLETE_CONTENT;
  return PILLARS.find((pillar) => pillar.id === phase) ?? INTRO_CONTENT;
}

function PillarIcon({ phase }: { phase: PillarPhase }) {
  if (phase === "command") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="7" />
        <path d="M12 2v5M12 17v5M2 12h5M17 12h5M12 9v6M9 12h6" />
      </svg>
    );
  }
  if (phase === "create") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 18 2.4-6.7L16 2.7 21.3 8l-8.6 8.6L6 19Z" />
        <path d="m14.3 4.4 5.3 5.3M7.4 11.3l5.3 5.3M4 21h8" />
      </svg>
    );
  }
  if (phase === "operate") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="4" width="7" height="7" rx="1" />
        <rect x="14" y="4" width="7" height="7" rx="1" />
        <rect x="8.5" y="15" width="7" height="6" rx="1" />
        <path d="M6.5 11v2h11v-2M12 13v2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 19 19 4M10 4h9v9M4 8v11h11" />
      <path d="M7 16 16 7" />
    </svg>
  );
}

function useFrameworkProgress(
  sceneRef: React.RefObject<HTMLElement | null>,
  onPhaseChange: (phase: FrameworkPhase) => void,
  onReducedMotionChange: (reduced: boolean) => void,
) {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let lastPhase: FrameworkPhase | null = null;
    let lastReduced = !reducedMotion.matches;

    const write = () => {
      frame = 0;
      scene.dataset.documentHidden = String(document.hidden);
      if ((!visible || document.hidden) && !reducedMotion.matches) return;

      const reduced = reducedMotion.matches;
      if (reduced !== lastReduced) {
        lastReduced = reduced;
        onReducedMotionChange(reduced);
      }

      const bounds = scene.getBoundingClientRect();
      const distance = Math.max(bounds.height - window.innerHeight, 1);
      const progress = reduced ? 0.86 : clamp(-bounds.top / distance);
      const phase = reduced ? "complete" : phaseAtProgress(progress);
      const phaseRange = PHASE_RANGES[phase];

      scene.style.setProperty("--af-progress", progress.toFixed(4));
      scene.style.setProperty(
        "--af-entry",
        (reduced ? 1 : rangeProgress(progress, PHASE_RANGES.intro)).toFixed(4),
      );
      scene.style.setProperty(
        "--af-phase-local",
        rangeProgress(progress, phaseRange).toFixed(4),
      );
      scene.style.setProperty(
        "--af-complete",
        (reduced
          ? 1
          : rangeProgress(progress, PHASE_RANGES.complete)
        ).toFixed(4),
      );
      scene.style.setProperty(
        "--af-exit",
        (reduced ? 0 : rangeProgress(progress, PHASE_RANGES.exit)).toFixed(4),
      );
      scene.dataset.motion = reduced ? "reduced" : "full";

      if (phase !== lastPhase) {
        lastPhase = phase;
        onPhaseChange(phase);
      }
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
      { rootMargin: "18% 0px" },
    );
    const visibility = () => schedule();

    observer.observe(scene);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", visibility);
    reducedMotion.addEventListener("change", schedule);
    schedule();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", visibility);
      reducedMotion.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sceneRef, onPhaseChange, onReducedMotionChange]);
}

function FrameworkEnvironment() {
  return (
    <div className={styles.ascendFrameworkEnvironment} aria-hidden="true">
      <span className={styles.ascendFrameworkDepth} />
      <span className={styles.ascendFrameworkGrid} />
      <span className={styles.ascendFrameworkArchitecture} />
      <span className={styles.ascendFrameworkAxis} />
      <span className={styles.ascendFrameworkHorizon} />
      <span className={styles.ascendFrameworkVignette} />
    </div>
  );
}

function FrameworkCore() {
  return (
    <div className={styles.ascendFrameworkCore} aria-hidden="true">
      <span className={styles.ascendFrameworkCoreField} />
      <span className={styles.ascendFrameworkOuterRing} />
      <span className={styles.ascendFrameworkCalibrationRing} />
      <span className={styles.ascendFrameworkInnerRing} />
      <span className={styles.ascendFrameworkReflection} />
      <span className={`${styles.ascendFrameworkPort} ${styles.portNorth}`} />
      <span className={`${styles.ascendFrameworkPort} ${styles.portEast}`} />
      <span className={`${styles.ascendFrameworkPort} ${styles.portSouth}`} />
      <span className={`${styles.ascendFrameworkPort} ${styles.portWest}`} />
      <Image
        className={styles.ascendFrameworkEmblem}
        src="/logo.png"
        alt=""
        width={2000}
        height={2000}
        sizes="(max-width: 760px) 42vw, 32vw"
      />
    </div>
  );
}

function FrameworkPathways() {
  return (
    <svg
      className={styles.ascendFrameworkPathways}
      viewBox="0 0 400 400"
      aria-hidden="true"
    >
      {PILLARS.map((pillar) => (
        <g data-path={pillar.id} key={pillar.id}>
          <path
            className={styles.ascendFrameworkPathBase}
            d={pillar.path}
            pathLength="100"
          />
          <path
            className={styles.ascendFrameworkPathActive}
            d={pillar.path}
            pathLength="100"
          />
          <path
            className={styles.ascendFrameworkPathSignal}
            d={pillar.path}
            pathLength="100"
          />
        </g>
      ))}
    </svg>
  );
}

export function AscendFrameworkScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<FrameworkPhase>("intro");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [directAnnouncement, setDirectAnnouncement] = useState("");
  const announcementTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const content = contentForPhase(phase);
  const selectedPillar =
    phase === "command" ||
    phase === "create" ||
    phase === "operate" ||
    phase === "expand"
      ? phase
      : null;

  const handlePhaseChange = useCallback(
    (nextPhase: FrameworkPhase) => setPhase(nextPhase),
    [],
  );
  const handleReducedMotionChange = useCallback(
    (reduced: boolean) => setReducedMotion(reduced),
    [],
  );
  useFrameworkProgress(
    sceneRef,
    handlePhaseChange,
    handleReducedMotionChange,
  );

  useEffect(
    () => () => {
      if (announcementTimer.current) {
        clearTimeout(announcementTimer.current);
      }
    },
    [],
  );

  const activatePillar = (pillar: PillarDefinition) => {
    setDirectAnnouncement(`${pillar.label}: ${pillar.headline}`);
    if (announcementTimer.current) {
      clearTimeout(announcementTimer.current);
    }
    announcementTimer.current = setTimeout(
      () => setDirectAnnouncement(""),
      1600,
    );

    if (reducedMotion) {
      setPhase(pillar.id);
      return;
    }

    const scene = sceneRef.current;
    if (!scene) return;
    const [start, end] = PHASE_RANGES[pillar.id];
    const targetProgress = start + (end - start) * 0.42;
    const travel = Math.max(scene.offsetHeight - window.innerHeight, 1);
    window.scrollTo({
      top: scene.offsetTop + travel * targetProgress,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={styles.ascendFrameworkScene}
      id="ascend-framework"
      ref={sceneRef}
      aria-labelledby="ascend-framework-title"
    >
      <div
        className={styles.ascendFrameworkStage}
        data-phase={phase}
      >
        <FrameworkEnvironment />
        <div className={styles.ascendFrameworkComposition}>
          <header className={styles.ascendFrameworkOrientation}>
            <p>ASCEND FRAMEWORK <span aria-hidden="true">{`//`}</span> SYSTEM 02</p>
            <h2 id="ascend-framework-title">The Ascend Framework</h2>
          </header>

          <div className={styles.ascendFrameworkSystem}>
            <FrameworkPathways />
            <FrameworkCore />
            {PILLARS.map((pillar) => (
              <button
                className={styles.ascendFrameworkNode}
                data-node={pillar.id}
                type="button"
                aria-pressed={selectedPillar === pillar.id}
                onClick={() => activatePillar(pillar)}
                key={pillar.id}
              >
                <span
                  className={styles.ascendFrameworkNodeIcon}
                  aria-hidden="true"
                >
                  <PillarIcon phase={pillar.id} />
                </span>
                <span className={styles.ascendFrameworkNodeText}>
                  <small>{pillar.number}</small>
                  <strong>{pillar.label}</strong>
                </span>
              </button>
            ))}
            <span
              className={styles.ascendFrameworkReceiverAxis}
              aria-hidden="true"
            />
          </div>

          <div className={styles.ascendFrameworkEditorial}>
            <div className={styles.ascendFrameworkMeta}>
              <p>{content.label}</p>
              <p>{content.progress}</p>
            </div>
            <h3>{content.headline}</h3>
            <p className={styles.ascendFrameworkCopy}>{content.copy}</p>
            <ul
              className={styles.ascendFrameworkCapabilities}
              aria-label={`${content.label} capabilities`}
            >
              {content.capabilities.map((capability) => (
                <li key={capability}>{capability}</li>
              ))}
            </ul>
            <div
              className={styles.ascendFrameworkProgress}
              aria-hidden="true"
            >
              {PILLARS.map((pillar, index) => {
                const selectedIndex = selectedPillar
                  ? PILLARS.findIndex((item) => item.id === selectedPillar)
                  : -1;
                const reached =
                  phase === "complete" ||
                  phase === "exit" ||
                  index <= selectedIndex;
                return (
                  <i
                    className={reached ? styles.isReached : undefined}
                    key={pillar.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <p className="sr-only" aria-live="polite">
          {directAnnouncement}
        </p>
      </div>
    </section>
  );
}
