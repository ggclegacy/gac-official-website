"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./MiddleChaptersScene.module.css";

const PHASES = [
  {
    id: "formation",
    chapter: "03",
    locator: "BUSINESS CORE / FORMATION",
    headline: "The framework enters the living business.",
    support:
      "Four connected disciplines concentrate into one source of business intelligence.",
    range: [0, 0.08],
  },
  {
    id: "primary",
    chapter: "03",
    locator: "BUSINESS CORE / RECOGNITION",
    headline: "The business establishes around a common core.",
    support:
      "Customers, team, operations, and growth become the first visible operating relationships.",
    range: [0.08, 0.16],
  },
  {
    id: "connection",
    chapter: "03",
    locator: "BUSINESS CORE / CONNECTION",
    headline: "Work, information, and decisions begin to move.",
    support:
      "The core senses each relationship, opens a route, and begins coordinating the field.",
    range: [0.16, 0.24],
  },
  {
    id: "expansion",
    chapter: "03",
    locator: "BUSINESS CORE / EXPANSION",
    headline: "Capability expands the operating field.",
    support:
      "More customers, tools, responsibilities, and opportunity reveal a more capable business.",
    range: [0.24, 0.33],
  },
  {
    id: "comprehension",
    chapter: "03",
    locator: "BUSINESS CORE / COMPREHENSION",
    headline: "The whole business becomes visible.",
    support:
      "Primary systems, supporting systems, and dependencies resolve as one living organism.",
    range: [0.33, 0.41],
  },
  {
    id: "tension",
    chapter: "03",
    locator: "BUSINESS CORE / TENSION",
    headline: "Growth creates coordination pressure.",
    support:
      "Nothing has failed. The business has simply outgrown the simplicity of its earlier operating model.",
    range: [0.41, 0.49],
  },
  {
    id: "complexity",
    chapter: "04",
    locator: "COMPLEXITY REVEALED",
    headline: "Growth created a system no one designed.",
    support:
      "Routes cross, repeat, pause, and compete while the core spends energy maintaining connection.",
    range: [0.49, 0.57],
  },
  {
    id: "cost",
    chapter: "04",
    locator: "THE HIDDEN COST",
    headline: "The work behind the work is consuming the business.",
    support:
      "Waiting, duplicated effort, divided focus, and lost visibility emerge inside the routes.",
    range: [0.57, 0.65],
  },
  {
    id: "recognition",
    chapter: "04",
    locator: "RECOGNITION",
    headline: "Clarity begins when the business can see itself.",
    support:
      "Analytical intelligence traces bottlenecks, duplication, and the relationships that matter most.",
    range: [0.65, 0.73],
  },
  {
    id: "direction",
    chapter: "04",
    locator: "DIRECTION",
    headline: "When priorities align, complexity finds a direction.",
    support:
      "Low-value duplication recedes as a small number of decisive routes establish a shared axis.",
    range: [0.73, 0.81],
  },
  {
    id: "integration",
    chapter: "04",
    locator: "INTEGRATION",
    headline: "Separate systems begin moving as one business.",
    support:
      "Command, Create, Operate, and Expand now reinforce the business from within.",
    range: [0.81, 0.89],
  },
  {
    id: "command",
    chapter: "04",
    locator: "COMMAND",
    headline: "Clarity becomes control.",
    support:
      "Signals find a shared rhythm. Priority becomes visible. Movement gains direction.",
    range: [0.89, 0.96],
  },
  {
    id: "forward",
    chapter: "04",
    locator: "FORWARD",
    headline: "The business is ready to ascend.",
    support:
      "The aligned operating system releases one coherent trajectory into what comes next.",
    range: [0.96, 1],
  },
] as const;

type Phase = (typeof PHASES)[number];
type PhaseId = Phase["id"];
type NodeLayer = "primary" | "supporting" | "tertiary";

type NetworkNode = {
  id: string;
  label: string;
  x: number;
  y: number;
  layer: NodeLayer;
  group: "market" | "people" | "operations" | "growth";
};

const NODES: readonly NetworkNode[] = [
  { id: "customers", label: "Customers", x: 50, y: 17, layer: "primary", group: "market" },
  { id: "team", label: "Team", x: 82, y: 48, layer: "primary", group: "people" },
  { id: "operations", label: "Operations", x: 50, y: 80, layer: "primary", group: "operations" },
  { id: "growth", label: "Growth", x: 18, y: 48, layer: "primary", group: "growth" },
  { id: "website", label: "Website", x: 17, y: 16, layer: "supporting", group: "market" },
  { id: "marketing", label: "Marketing", x: 7, y: 33, layer: "supporting", group: "market" },
  { id: "customer-data", label: "Customer Data", x: 84, y: 17, layer: "supporting", group: "market" },
  { id: "finance", label: "Finance", x: 94, y: 35, layer: "supporting", group: "growth" },
  { id: "delivery", label: "Service Delivery", x: 85, y: 79, layer: "supporting", group: "operations" },
  { id: "scheduling", label: "Scheduling", x: 68, y: 94, layer: "supporting", group: "operations" },
  { id: "leads", label: "Leads", x: 32, y: 94, layer: "supporting", group: "growth" },
  { id: "reporting", label: "Reporting", x: 6, y: 75, layer: "supporting", group: "people" },
  { id: "crm", label: "CRM", x: 2, y: 12, layer: "tertiary", group: "market" },
  { id: "tools", label: "Tools", x: 98, y: 12, layer: "tertiary", group: "people" },
  { id: "vendors", label: "Vendors", x: 98, y: 91, layer: "tertiary", group: "operations" },
  { id: "inventory", label: "Inventory", x: 2, y: 91, layer: "tertiary", group: "operations" },
];

type RouteKind =
  | "primary"
  | "supporting"
  | "dependency"
  | "pressure"
  | "analysis"
  | "direction"
  | "integration";

type Route = {
  id: string;
  x: number;
  y: number;
  length: number;
  angle: number;
  kind: RouteKind;
  signal?: boolean;
};

const ROUTES: readonly Route[] = [
  { id: "core-n", x: 50, y: 50, length: 33, angle: -90, kind: "primary", signal: true },
  { id: "core-e", x: 50, y: 50, length: 32, angle: 0, kind: "primary", signal: true },
  { id: "core-s", x: 50, y: 50, length: 30, angle: 90, kind: "primary", signal: true },
  { id: "core-w", x: 50, y: 50, length: 32, angle: 180, kind: "primary", signal: true },
  { id: "market-a", x: 50, y: 17, length: 33, angle: 180, kind: "supporting" },
  { id: "market-b", x: 17, y: 16, length: 18, angle: 118, kind: "supporting", signal: true },
  { id: "data", x: 50, y: 17, length: 34, angle: 0, kind: "supporting" },
  { id: "finance", x: 82, y: 48, length: 18, angle: -46, kind: "supporting" },
  { id: "delivery", x: 50, y: 80, length: 35, angle: 0, kind: "supporting", signal: true },
  { id: "schedule", x: 50, y: 80, length: 20, angle: 58, kind: "supporting" },
  { id: "leads", x: 50, y: 80, length: 20, angle: 122, kind: "supporting" },
  { id: "reporting", x: 18, y: 48, length: 30, angle: 112, kind: "supporting", signal: true },
  { id: "dep-nw", x: 17, y: 16, length: 16, angle: 192, kind: "dependency" },
  { id: "dep-ne", x: 84, y: 17, length: 15, angle: -12, kind: "dependency" },
  { id: "dep-se", x: 85, y: 79, length: 17, angle: 42, kind: "dependency" },
  { id: "dep-sw", x: 32, y: 94, length: 30, angle: 180, kind: "dependency" },
  { id: "duplicate", x: 7, y: 33, length: 88, angle: 22, kind: "pressure" },
  { id: "crossing", x: 17, y: 16, length: 105, angle: 42, kind: "pressure" },
  { id: "return", x: 6, y: 75, length: 91, angle: -45, kind: "pressure" },
  { id: "analysis-a", x: 7, y: 33, length: 88, angle: 22, kind: "analysis" },
  { id: "analysis-b", x: 17, y: 16, length: 105, angle: 42, kind: "analysis" },
  { id: "axis-n", x: 50, y: 50, length: 49, angle: -90, kind: "direction" },
  { id: "axis-s", x: 50, y: 50, length: 49, angle: 90, kind: "direction" },
  { id: "integrate-ne", x: 50, y: 50, length: 45, angle: -45, kind: "integration" },
  { id: "integrate-se", x: 50, y: 50, length: 45, angle: 45, kind: "integration" },
  { id: "integrate-sw", x: 50, y: 50, length: 45, angle: 135, kind: "integration" },
  { id: "integrate-nw", x: 50, y: 50, length: 45, angle: 225, kind: "integration" },
];

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

function phaseAtProgress(progress: number): Phase {
  return (
    PHASES.find(({ range: [start, end] }) => progress >= start && progress < end) ??
    PHASES.at(-1)!
  );
}

function useSequenceProgress(
  sceneRef: RefObject<HTMLElement | null>,
  onPhaseChange: (phase: PhaseId) => void,
) {
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = true;
    let lastPhase: PhaseId | null = null;

    const write = () => {
      frame = 0;
      if ((!visible || document.hidden) && !reducedMotion.matches) return;

      const bounds = scene.getBoundingClientRect();
      const distance = Math.max(bounds.height - innerHeight, 1);
      const progress = reducedMotion.matches ? 0.93 : clamp(-bounds.top / distance);
      const phase = phaseAtProgress(progress);

      scene.style.setProperty("--middle-progress", progress.toFixed(4));
      for (const item of PHASES) {
        const [start, end] = item.range;
        scene.style.setProperty(
          `--beat-${item.id}`,
          clamp((progress - start) / (end - start)).toFixed(4),
        );
      }

      if (phase.id !== lastPhase) {
        lastPhase = phase.id;
        onPhaseChange(phase.id);
      }

      scene.dataset.motion = reducedMotion.matches ? "reduced" : "full";
      scene.dataset.documentHidden = String(document.hidden);
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
      { rootMargin: "15% 0px" },
    );
    const handleVisibility = () => {
      visible =
        !document.hidden &&
        scene.getBoundingClientRect().bottom > 0 &&
        scene.getBoundingClientRect().top < innerHeight;
      schedule();
    };

    observer.observe(scene);
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);
    reducedMotion.addEventListener("change", schedule);
    schedule();

    return () => {
      observer.disconnect();
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", handleVisibility);
      reducedMotion.removeEventListener("change", schedule);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sceneRef, onPhaseChange]);
}

function EngineeredRoute({ route }: { route: Route }) {
  const style = {
    left: `${route.x}%`,
    top: `${route.y}%`,
    width: `${route.length}%`,
    transform: `rotate(${route.angle}deg)`,
  } satisfies CSSProperties;

  return (
    <i
      className={`${styles.route} ${styles[`route_${route.kind}`]} ${
        route.signal ? styles.routeSignal : ""
      }`}
      data-route={route.id}
      style={style}
    />
  );
}

function BusinessCore() {
  return (
    <div className={styles.core}>
      <i className={styles.coreField} />
      <i className={styles.coreBrace} />
      <i className={styles.coreRingOuter} />
      <i className={styles.coreRingInner} />
      <span className={styles.coreImage}>
        <Image
          src="/bc-icon.png"
          alt=""
          width={2000}
          height={2000}
          sizes="(max-width: 760px) 32vw, 220px"
        />
      </span>
      <span className={styles.coreNucleus} />
      <i className={`${styles.corePort} ${styles.corePortNorth}`} />
      <i className={`${styles.corePort} ${styles.corePortEast}`} />
      <i className={`${styles.corePort} ${styles.corePortSouth}`} />
      <i className={`${styles.corePort} ${styles.corePortWest}`} />
      <b>BUSINESS CORE</b>
    </div>
  );
}

function OperatingSystem() {
  return (
    <div className={styles.system} aria-hidden="true">
      <div className={styles.systemDepth}>
        <i />
        <i />
        <i />
      </div>
      <div className={styles.convergence}>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className={styles.routes}>
        {ROUTES.map((route) => (
          <EngineeredRoute route={route} key={route.id} />
        ))}
      </div>
      <div className={styles.nodes}>
        {NODES.map((node) => (
          <span
            className={`${styles.node} ${styles[`node_${node.layer}`]}`}
            data-group={node.group}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
            key={node.id}
          >
            <i />
            <b>{node.label}</b>
          </span>
        ))}
      </div>
      <BusinessCore />
      <div className={styles.queue}>
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className={styles.disciplines}>
        <span>Command</span>
        <span>Create</span>
        <span>Operate</span>
        <span>Expand</span>
      </div>
      <div className={styles.forwardAxis}>
        <i />
        <span />
      </div>
    </div>
  );
}

export function MiddleChaptersScene() {
  const sceneRef = useRef<HTMLElement>(null);
  const [phaseId, setPhaseId] = useState<PhaseId>("formation");
  const updatePhase = useCallback((phase: PhaseId) => setPhaseId(phase), []);
  useSequenceProgress(sceneRef, updatePhase);

  const phase = PHASES.find((item) => item.id === phaseId) ?? PHASES[0];
  const phaseIndex = PHASES.indexOf(phase);

  return (
    <section
      className={styles.scene}
      id="business-core"
      ref={sceneRef}
      data-phase={phase.id}
      data-chapter={phase.chapter}
      aria-labelledby="middle-chapter-title"
    >
      <div className={styles.stage}>
        <div className={styles.environment} aria-hidden="true">
          <i />
          <i />
          <i />
          <span />
          <span />
        </div>

        <div className={styles.layout}>
          <header className={styles.orientation}>
            <p>CHAPTER {phase.chapter}</p>
            <span>{phase.chapter === "03" ? "THE BUSINESS CORE" : "FROM COMPLEXITY TO CLARITY"}</span>
          </header>

          <OperatingSystem />

          <div className={styles.meaning} key={phase.id}>
            <p>{phase.locator}</p>
            <h2 id="middle-chapter-title">{phase.headline}</h2>
            <span>{phase.support}</span>
            <div
              className={styles.progress}
              aria-label={`Step ${phaseIndex + 1} of ${PHASES.length}`}
            >
              {PHASES.map((item, index) => (
                <i
                  className={index <= phaseIndex ? styles.progressReached : ""}
                  key={item.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.reducedStory}>
        <h2>The Business Core</h2>
        {PHASES.map((item) => (
          <article key={item.id}>
            <p>{item.locator}</p>
            <h3>{item.headline}</h3>
            <span>{item.support}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
