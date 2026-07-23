# Gent Ascend Collective

## Official Build Roadmap — Middle Cinematic Chapters

**Document status:** Implementation-ready  
**Project:** Gent Ascend Collective homepage  
**Platform:** Next.js, React, TypeScript, Vercel  
**Experience priority:** Mobile-first  
**Chapters covered:** Ascend Framework, Framework-to-Business-Core transition, Business Core, Growth / Complexity / Clarity  
**Creative authority:** `docs/GAC_MIDDLE_CHAPTERS_CREATIVE_DIRECTION.md`

---

# Overview

## Objective

The middle of the Gent Ascend Collective homepage contains the right strategic ideas but does not yet deliver them with sufficient visual authority, narrative consequence, or cinematic continuity.

This rebuild will transform the middle chapters from interactive diagrams into one continuous executive presentation:

1. The Ascend Framework reveals four coordinated disciplines around one living command core.
2. The completed framework concentrates and physically becomes the Business Core.
3. The Business Core assembles the people, systems, customers, tools, and responsibilities of a living company.
4. Growth creates coordination pressure.
5. Intelligence recognizes the pattern and reorganizes the same business from complexity into clarity.

The visitor should never feel that they have reached another webpage. The completed subject of each scene must become the starting material of the next.

The implementation standard is not “more animation.” It is more meaningful transformation. Every major scroll beat must change the visible system, the hierarchy, and the story. Supporting copy should clarify what the visitor can already see rather than carrying the experience by itself.

## Homepage story

These chapters sit between the company arrival and the later proof or conversion experience.

- Scene 1 establishes the GAC brand and promise.
- Scene 2 introduces the Ascend Framework as GAC’s connected method.
- Scene 3 applies that method to a living business through the Business Core.
- Scene 4 reveals the reality of growth and demonstrates how intelligence turns complexity into alignment.
- The final aligned system leaves the middle chapters ready to become evidence, proof, or forward action.

The middle sequence must therefore operate as the homepage’s transformation engine. It is where the company’s point of view becomes visible.

## Source-of-truth order

When instructions conflict, follow this order:

1. The current user request and these five prompts.
2. `docs/GAC_MIDDLE_CHAPTERS_CREATIVE_DIRECTION.md`.
3. `docs/EXPERIENCE_NORTH_STAR.md`.
4. The current repository and approved brand assets.
5. Older build notes and prior prompt documents.

`BUILD_STATUS.md` records history; it is not permission to preserve an implementation that conflicts with the current creative direction.

## Current repository note

The project brief names Tailwind, but the repository baseline at the time this roadmap was prepared uses a CSS Module for the Ascend Framework and global CSS for other scenes; Tailwind is not listed in `package.json`.

Codex must inspect the active repository before each prompt and use the styling system actually configured at that time. Do not introduce or migrate to Tailwind as incidental work. If Tailwind has been intentionally added before execution, follow the established Tailwind conventions. Otherwise, retain the project’s current CSS architecture and improve it without creating another conflicting styling layer.

## Permanent implementation contract

All five prompts share these rules:

- Preserve Next.js, React, strict TypeScript, native browser scrolling, and Vercel compatibility.
- Preserve unrelated user changes in the working tree.
- Do not commit, push, deploy, or open a pull request unless separately requested.
- Do not install an animation, icon, canvas, or WebGL dependency unless the prompt cannot be completed responsibly without it and the need is documented first.
- Prefer semantic HTML, responsive CSS, lightweight SVG, typed state, CSS custom properties, passive scroll observation, and frame-batched visual updates.
- Continuous progress must not produce a React render for every scroll pixel.
- Scroll must remain native, reversible, and deterministic. Never trap, hijack, lock, or require snap scrolling.
- Treat `/public/logo.png` as the approved GAC company emblem.
- Treat `/public/bc-icon.png` as the Business Core asset, not the company logo.
- Do not recreate approved raster emblems in CSS or SVG.
- Preserve image aspect ratio and do not hide asset quality problems behind excessive glow.
- Use obsidian, graphite, deep blue, restrained dimensional gold, warm ivory, and muted stone as the permanent palette.
- Avoid generic SaaS cards, dashboards, fake metrics, cyberpunk spectacle, random particles, meaningless gold lines, decorative route spaghetti, and motion without narrative purpose.
- Meaning must remain available without hover.
- Every scene requires a designed reduced-motion mode that preserves the narrative and final state.
- Mobile at 390px is the first approval viewport, followed by 375px, 430px, 320px, tablet, laptop, and wide desktop.
- Do not claim rendered approval for any viewport, browser, or input method that was not actually observed.

## Prompt ownership

| Prompt | Owns | Must not redo |
|---|---|---|
| 1 | Ascend Framework scene | Business Core network, cross-scene transformation, complexity story |
| 2 | Framework-complete to Business-Core-receiver transformation | Framework redesign, Business Core network redesign |
| 3 | Business Core formation, network assembly, healthy business, growth, onset of pressure | Framework, cross-scene transition, full complexity-to-clarity transformation |
| 4 | Complexity, hidden cost, recognition, direction, integration, command, forward handoff | Framework, Business Core formation, global polish |
| 5 | Shared visual system, motion tuning, responsive refinement, accessibility, performance, final transitions and QA | Narrative redesign or new features |

Execute the prompts in order. Complete and validate one prompt before beginning the next.

---

# Prompt 1 — Rebuild the Ascend Framework Experience

Copy this prompt into Codex:

```text
Rebuild Scene 2 of the Gent Ascend Collective homepage: the Ascend Framework.

Implement the change directly in the current local website repository. This prompt owns only the Ascend Framework scene. Do not redesign the Business Core, the Framework-to-Business-Core transformation, or the later Complexity-to-Clarity chapter in this pass.

PROJECT AND SOURCE OF TRUTH
- The project is a mobile-first Next.js and strict TypeScript website deployed to Vercel.
- Read `docs/GAC_MIDDLE_CHAPTERS_CREATIVE_DIRECTION.md` completely before editing.
- Read `docs/EXPERIENCE_NORTH_STAR.md` for permanent experience standards.
- Inspect the current repository before assuming the styling stack. The project may use CSS Modules/global CSS even if an earlier brief mentions Tailwind. Use the active styling system; do not perform a Tailwind migration.
- Inspect the current Scene 1 exit, `components/AscendFrameworkScene.tsx`, its styles, `app/page.tsx`, shared global styles, approved assets, reduced-motion behavior, and current scroll ownership.
- Run baseline lint, strict TypeScript checking, and production build before modifying files.
- Preserve unrelated user changes.

OBJECTIVE
Replace the current four-controls-around-an-icon impression with one living Ascend Framework command core.

The visitor should immediately understand that Command, Create, Operate, and Expand are four coordinated disciplines inside one system. The scene must feel like a premium executive intelligence chamber, not a tab interface, accordion, infographic, dashboard, or card layout.

PRESERVE
- The separate semantic Scene 2 boundary.
- `/public/logo.png` as the GAC emblem at the center of the framework.
- The four approved disciplines and their order:
  1. Command
  2. Create
  3. Operate
  4. Expand
- Native reversible scroll.
- The concept of four paths connected to a center.
- One distinct framework-complete state.
- The existing Scene 1 composition and the next chapter’s implementation.

REBUILD THE COMPOSITION
- Make the command core the dominant subject.
- Keep the approved emblem intact inside a code-native precision housing with restrained rings, four ports, internal blue energy, selective gold decision points, and controlled material reflection.
- The core must feel responsive and mechanically intelligent. Do not rely on constant spinning or generic glow.
- Arrange the disciplines as a compact cross/diamond:
  - Command above the core.
  - Create to the right.
  - Operate below.
  - Expand to the left.
- Keep the nodes close enough to read as one instrument rather than controls attached to viewport corners.
- All four nodes must remain visible and legible throughout the active mobile sequence.
- Inactive nodes may recede but may not disappear.
- Give the nodes a coherent engineered icon family and material language. They must not look like four cards.
- Replace any large boxed content panel with an integrated editorial area consisting of:
  - a small phase locator;
  - one decisive headline;
  - one short supporting statement;
  - three capability terms;
  - textual phase position;
  - a restrained four-part progress indicator.
- Hold stable space for the longest content so the system does not jump between phases.
- Prevent duplicated framework titles or messages.

APPROVED PILLAR CONTENT

COMMAND
- Headline: `Command turns ambition into aligned direction.`
- Support: `Clear priorities give the business a decisive center—so leadership, decisions, and action move toward the same outcome.`
- Terms: `DIRECTION / DECISIONS / ALIGNMENT`
- Visual meaning: the top route activates, the vertical axis sharpens, the core aligns and locks, and the chamber becomes more symmetrical.

CREATE
- Headline: `Create makes the value impossible to miss.`
- Support: `Identity, message, digital presence, and customer experience work together so the business is recognized for what makes it matter.`
- Terms: `IDENTITY / PRESENCE / EXPERIENCE`
- Visual meaning: the right route activates, the core opens outward, restrained warm reflection travels across the housing, and the environment extends toward a customer-facing field.

OPERATE
- Headline: `Operate turns capability into control.`
- Support: `Connected systems and repeatable workflows give the team visibility, consistency, and the confidence to execute without friction.`
- Terms: `SYSTEMS / EXECUTION / CONTROL`
- Visual meaning: the bottom route activates, the housing tightens, structural geometry resolves, and signals gain a dependable cadence.

EXPAND
- Headline: `Expand turns momentum into durable growth.`
- Support: `With direction, presence, and operations working together, the business can reach farther, respond faster, and grow without losing control.`
- Terms: `REACH / OPPORTUNITY / SCALE`
- Visual meaning: the left route activates, the outer field broadens, distant architecture opens, and the system reveals controlled forward depth.

FRAMEWORK COMPLETE
- Headline: `Four disciplines. One connected transformation system.`
- Support: `Command, Create, Operate, and Expand now work as one direction for the business.`
- Terms: `COMMAND / CREATE / OPERATE / EXPAND`
- Visual meaning: all four routes illuminate with equal authority, signals synchronize, the core balances, the architecture resolves, and separate progress marks become one system.

SCROLL AND STATE ARCHITECTURE
- Use one typed, centralized phase model: intro, Command, Create, Operate, Expand, complete, exit-ready.
- Use one normalized progress source for the scene.
- Give each discipline a readable hold; avoid rapid threshold changes.
- Write continuous visual progress to CSS custom properties or an equivalent non-rendering presentation channel.
- Update React only when semantic state changes.
- Reverse scrolling must rebuild every state correctly.
- Fast scrolling and refresh at an intermediate position must produce a valid state with matching core, node, route, environment, copy, and progress.
- Direct node interaction is optional enhancement, not the primary story.
- If nodes are interactive, use native buttons. Activation must move to or agree with the corresponding scroll phase so manual and scroll state never conflict.
- Do not announce automatic scroll changes through a live region.

WHOLE-SCENE RESPONSE
Every discipline change must visibly affect all of the following:
- active route;
- command-core mechanics;
- core lighting;
- active node;
- inactive-node hierarchy;
- background architecture;
- headline;
- supporting content;
- progress.

A phase is not complete if it only changes a node highlight and paragraph.

PATHWAYS
- Use one responsive, crisp pathway system with visible core and node ports.
- Every path must have a clear origin and destination.
- Base paths remain faintly visible so the full framework is always understandable.
- The active path illuminates from the core outward, followed by one restrained signal response.
- Avoid decorative Bézier flourishes, long flat gold dividers, and unrelated moving dots.
- The complete state uses coordinated route behavior, not four unsynchronized loops.

MOTION
- Motion must communicate power, analysis, synchronization, alignment, decision, connection, or transformation.
- Between disciplines:
  1. the current route releases;
  2. energy returns to the core;
  3. the core performs one clear mechanical recalibration;
  4. architecture changes emphasis;
  5. the next path activates center-out;
  6. the next node gains modest presence;
  7. the next headline resolves.
- Use quiet holds between decisive movements.
- Avoid bounce, constant spinning, full-scene pulsing, large raster zoom, random particle storms, and excessive blur.

MOBILE-FIRST COMPOSITION
- Approve the composition at 390px before wider screens.
- Keep a stable orientation zone, system zone, and editorial zone inside the active viewport.
- Keep the core centered in the upper-middle region with all four nodes visible around it.
- Maintain at least 44×44 CSS-pixel interactive targets where controls exist.
- Do not shrink labels below credible readability to make the composition fit.
- No node may touch the viewport edge, clip, hide behind browser chrome, or overlap the editorial content.
- For short-height phones, reduce atmosphere and peripheral engineering detail before reducing core meaning, labels, or touch targets.
- Account for safe areas and dynamic browser bars.
- Prevent horizontal overflow.

TABLET AND DESKTOP
- Expand the same system rather than designing another composition.
- Keep the core and four disciplines together inside a bounded visual field.
- Desktop may place the editorial field beside the system and reveal deeper architecture, larger material reflections, and restrained pointer atmosphere.
- Do not push nodes to browser corners.
- Cap wide layouts so increased width produces depth and negative space rather than extreme spacing.
- Essential information must remain independent of hover.

ACCESSIBILITY AND REDUCED MOTION
- Use a semantic section with a stable accessible heading.
- Preserve logical reading and focus order.
- Native controls require visible labels, visible focus, and accurate selected state.
- Do not communicate active state through color alone.
- Hide decorative rings, routes, particles, and architecture from assistive technology.
- Reduced motion must remove the long scrub and continuous route/ring travel while preserving all four disciplines, their content, and the complete message.
- A reduced-motion visitor should receive a stable complete framework and direct access to the four summaries without large spatial movement.

PERFORMANCE
- Do not add a new animation, icon, canvas, or WebGL dependency.
- Keep one passive, frame-batched progress observer for this scene.
- Pause autonomous motion while offscreen or when the document is hidden.
- Prefer transforms and opacity.
- Keep SVG filters bounded and avoid continuous full-screen blur.
- Use accurate responsive image sizing and reserve dimensions.

PROTECTED BOUNDARIES
- Do not redesign Scene 1.
- Do not build the Framework-to-Business-Core transformation yet. End with a stable, explicit framework-complete and exit-ready state that Prompt 2 can consume.
- Do not redesign the Business Core network.
- Do not alter the Complexity-to-Clarity story.
- Do not append another conflicting style layer; remove or consolidate obsolete Scene 2 rules.

VALIDATION
Render and inspect:
- 320px mobile;
- 375px mobile;
- 390px mobile;
- 414px mobile;
- 430px mobile;
- one short mobile height;
- tablet;
- 1024px;
- common laptop;
- 1440px/wide desktop.

At relevant sizes, verify:
- initial Scene 2 entry;
- all four nodes visible;
- slow forward scroll;
- fast scroll;
- reverse scroll at each boundary;
- direct interaction;
- keyboard focus;
- complete state;
- reduced motion;
- resize and orientation change;
- no overlap, clipping, horizontal overflow, stale copy, stale route, layout shift, hydration issue, or console error.

Run and pass:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `git diff --check`

COMPLETION REPORT
Report:
1. root causes found;
2. files changed;
3. final scene architecture;
4. phase and scroll model;
5. how mobile keeps all four disciplines visible;
6. visual behavior of each discipline;
7. complete-state handoff contract for Prompt 2;
8. accessibility and reduced-motion behavior;
9. performance safeguards;
10. exact rendered and automated validation completed;
11. any unobserved-device risk.
```

---

# Prompt 2 — Transform the Completed Framework into the Business Core

Copy this prompt into Codex after Prompt 1 is complete:

```text
Build the cinematic transition from the completed Ascend Framework into the Business Core chapter.

Implement the change directly in the current local website repository. Prompt 1 has already rebuilt the Ascend Framework and established a stable framework-complete / exit-ready state. Preserve that work. This prompt owns only the cross-scene transformation and the Business Core receiver state. Do not redesign the Framework disciplines or the Business Core network in this pass.

PROJECT AND SOURCE OF TRUTH
- The project is a mobile-first Next.js and strict TypeScript website deployed to Vercel.
- Read `docs/GAC_MIDDLE_CHAPTERS_CREATIVE_DIRECTION.md`, especially the transition doctrine.
- Inspect the current completed Framework state, its exit progress, the Business Core scene’s initial state, page order, sticky boundaries, relevant style ownership, and reduced-motion branches.
- Inspect the active styling system; do not migrate styling stacks.
- Run baseline lint, strict TypeScript checking, production build, and `git diff --check` before editing.
- Preserve unrelated user changes.

OBJECTIVE
Make the completed Ascend Framework physically and narratively become the Business Core.

This must not be:
- a fade between sections;
- a loading-screen moment;
- a blank or black hold;
- a generic portal;
- a logo zoom;
- a white flash;
- an isolated particle transition;
- two unrelated graphics crossfading.

The visitor should understand the causal statement:
`The GAC framework is now being applied to the living business.`

PROTECTED STATES
- Preserve Prompt 1’s final framework-complete composition, content, four coordinated routes, command core, mobile layout, direct interaction, and reduced-motion behavior.
- Preserve the Business Core concept, `/public/bc-icon.png`, and the existing Business Core chapter after its receiver/arrival state.
- Do not use `/public/bc-icon.png` as the GAC emblem during the Framework.
- Do not redesign Business Core nodes, network hierarchy, growth states, or complexity states. Prompt 3 owns those.

TRANSITION NARRATIVE
Create one reversible transformation with these ordered beats:

1. FRAMEWORK COMPLETION
- Hold the completed framework long enough to understand.
- All four disciplines and routes remain clear.
- The command core acknowledges completion through one restrained synchronized response.

2. INWARD CONVERGENCE
- Command, Create, Operate, and Expand release energy inward along their existing paths.
- Nodes lose interface emphasis and become directional endpoints.
- The outer chamber narrows its attention toward the center.
- Copy recedes before the primary object transforms.

3. CONCENTRATION
- Four separate route energies combine inside the command core.
- Gold decision points and blue intelligence compress into a single precise nucleus.
- Raster detail recedes before scale or blur would expose image artifacts.
- The scene never becomes visually empty; the nucleus and shared architecture preserve continuity.

4. MATERIAL TRANSFORMATION
- The GAC framework housing sheds or reorganizes into the first structural language of the Business Core.
- The transformation should be carried by geometry, masking, light, port alignment, and material response rather than an oversized image morph.
- Preserve the central axis and key-light direction.

5. BUSINESS CORE REFORMATION
- `/public/bc-icon.png` resolves from the concentrated nucleus as the Business Core, with its own housing and visual identity.
- The core appears first, then its primary ports, then the first directional pathways.
- The Business Core must feel produced by the completed framework rather than revealed behind it.

6. RECEIVER STABILIZATION
- The Business Core reaches a stable arrival state.
- The first business-system anchors become perceptible without beginning the full network assembly.
- Business Core copy enters only after the object and first relationships are legible.
- The transition releases ownership cleanly to the Business Core chapter.

CROSS-SCENE CONTINUITY CONTRACT
Match these properties across the boundary:
- core center position;
- apparent core scale at handoff;
- central axis;
- blue/gold balance;
- key-light direction;
- surrounding obsidian/graphite material field;
- depth and camera direction;
- route endpoint positions;
- scroll direction and velocity response.

There must be no visible document seam, margin gap, sudden background-color change, z-index flash, duplicate core, or frame in which both scenes appear unrelated.

SCROLL OWNERSHIP
- Keep native scrolling.
- Use one authoritative normalized transition model for the handoff.
- Make phase ownership explicit so the Framework does not continue changing after the Business Core receiver takes over.
- Do not create two competing scroll listeners writing the same boundary state.
- Forward, reverse, fast, and interrupted scrolling must reconstruct the same ordered transformation.
- Refresh near the boundary must render a valid handoff frame.
- Avoid timer-driven sequences. Progress must be derived from document position.
- Do not create an additional long empty scroll track solely for the transition. The movement must be earned by visible transformation.

MOBILE
- Design and approve the transition at 390px first.
- Keep the nucleus, axis, and resolving Business Core inside the safe visual region.
- Prevent the four converging nodes from crossing copy, browser chrome, or viewport edges.
- Reduce peripheral architecture and route detail before reducing the clarity of the transformation.
- Avoid scale values that expose raster softness or crop either emblem.
- Test short-height mobile behavior and dynamic browser bars.
- Prevent horizontal overflow throughout the collapse and reformation.

DESKTOP
- Use increased space for depth, foreground occlusion, and wider route release—not a larger logo zoom.
- Keep the transformation centered within the established composition.
- Do not add essential transition information that is absent on mobile.

MOTION LANGUAGE
- Motion communicates completion, convergence, concentration, transformation, formation, and stabilization.
- Use deliberate acceleration and precise settling.
- Avoid explosion, bounce, random scatter, endless spin, generic blur tunnel, and excessive bloom.
- Hold the nucleus long enough to register but not long enough to feel like loading.
- Use restrained blue energy and selective gold routing.
- Keep atmosphere subordinate to the core transformation.

REDUCED MOTION
- Preserve the causal connection without large collapse, camera travel, or route motion.
- Show a concise sequence or direct state change from completed Framework to stable Business Core with the central axis, shared light, and chapter order intact.
- Do not insert a blank frame.
- Keep content order, focus order, and scroll position predictable.

PERFORMANCE
- Reuse existing scene layers and assets where practical.
- Do not add a new dependency, canvas, WebGL scene, video, or image sequence.
- Avoid simultaneous full-screen filters.
- Pause autonomous motion offscreen.
- Keep filter bounds and raster scaling conservative.
- Prevent duplicate heavyweight scene trees from remaining active after the handoff.

PROTECTED BOUNDARIES
- Do not change the four Framework phases, content, or composition except where the final exit-ready state needs a transition hook.
- Do not redesign the Business Core network, nodes, growth story, or complexity states.
- Do not redesign the later Complexity-to-Clarity chapter.
- Do not add a generic “continue” screen or transition label.

VALIDATION
Observe the complete transition at:
- 320px;
- 375px;
- 390px;
- 414px;
- 430px;
- one short mobile height;
- tablet;
- laptop;
- wide desktop.

At relevant sizes, verify:
- completion hold;
- slow forward convergence;
- fast forward crossing;
- reverse reconstruction from Business Core to Framework;
- repeated direction changes during every beat;
- refresh at multiple boundary positions;
- reduced motion;
- resize/orientation change;
- no blank frame, double core, asset pop, clipping, seam, stale state, console error, or horizontal overflow.

Run and pass:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `git diff --check`

COMPLETION REPORT
Report:
1. the previous boundary failure;
2. files changed;
3. final transition phases;
4. scroll-ownership model;
5. exact Framework-complete and Business-Core-receiver contract;
6. mobile behavior;
7. reduced-motion behavior;
8. performance safeguards;
9. rendered and automated validation completed;
10. any unobserved-device risk for Prompt 3.
```

---

# Prompt 3 — Elevate the Business Core Experience

Copy this prompt into Codex after Prompt 2 is complete:

```text
Elevate the Business Core chapter while preserving its strategic concept.

Implement the change directly in the current local website repository. Prompts 1 and 2 have already completed the Ascend Framework and its cinematic transformation into the Business Core receiver. Preserve both. This prompt owns Business Core formation, network assembly, healthy operation, growth, and the first onset of coordination pressure. Do not build the full Complexity-to-Clarity transformation yet.

PROJECT AND SOURCE OF TRUTH
- The project is a mobile-first Next.js and strict TypeScript website deployed to Vercel.
- Read `docs/GAC_MIDDLE_CHAPTERS_CREATIVE_DIRECTION.md`, especially Chapter 3.
- Inspect the Business Core receiver from Prompt 2, the current Business Core component, node and route data, chapter copy, styles, scroll state, asset sizing, reduced motion, page order, and the next chapter’s incoming state.
- Inspect the active styling system; do not migrate styling stacks.
- Run baseline lint, strict TypeScript checking, production build, and `git diff --check` before editing.
- Preserve unrelated user changes.

OBJECTIVE
Turn the Business Core from a diagram into a living business operating system assembling in real time.

Maintain the existing idea:
- one central Business Core;
- Customers, Team, Operations, and Growth as primary systems;
- supporting systems surrounding them;
- signals representing information, work, decisions, and feedback;
- growth adding capability before it creates coordination pressure.

Redesign the execution so the Business Core is visually dominant, every surrounding system belongs to a clear hierarchy, pathways feel engineered, and the entire chapter appears to originate from the core.

CORE
- Use `/public/bc-icon.png` only as the Business Core asset.
- Make the Business Core the largest, highest-value object in the chapter.
- Preserve image aspect ratio and source detail.
- Support it with a restrained physical housing:
  - clear nucleus;
  - structural shell;
  - directional ports;
  - one or two calibration rings;
  - focused internal blue energy;
  - selective gold decision points;
  - visible state response under load and stabilization.
- The core must communicate sensing, routing, prioritizing, comparing, stabilizing, and coordinating.
- Do not make it a generic AI brain, robot face, hologram, processor chip, or glowing orb.
- Motion should respond to network events. Avoid perpetual spectacle.

REMOVE THE CURRENT TRANSITION LINE
- Remove the existing obvious transition line, vertical line, decorative axis, or connector that reads as an artificial section seam or unexplained gold/blue stroke.
- Do not replace it with another standalone line.
- Continuity from Prompt 2 must be carried by the core position, port geometry, first routed pathways, light direction, and shared architecture.
- Every visible route requires a business origin and destination.

NETWORK HIERARCHY
Build a legible hierarchy:

1. BUSINESS CORE
- Dominant visual mass and light source.

2. PRIMARY SYSTEMS
- Customers.
- Team.
- Operations.
- Growth.
- These are the largest surrounding systems, closest to the core, and connected by short direct routes.

3. SUPPORTING SYSTEMS
- Website.
- Marketing.
- Leads.
- Customer Data.
- Scheduling.
- Service Delivery.
- Finance.
- Other currently approved supporting systems.
- These are grouped by business role and connected through relevant primary systems or directly to the core when the relationship requires it.

4. TERTIARY DEPENDENCIES
- CRM.
- Reporting.
- Inventory.
- Vendors.
- Other lower-priority dependencies already present and justified.
- These add realism and density without competing with the primary story.

Do not assign equal size, brightness, label treatment, or route weight to every system.

SURROUNDING SYSTEM DESIGN
- Make primary systems substantially larger and easier to read than current tiny labels.
- Give systems clear connection ports and a coherent component language.
- Avoid generic rectangular cards.
- Use restrained physical modules, engraved labels, or architectural nodes that belong to the same environment as the core.
- Group supporting systems spatially so the visitor can perceive customer/market, delivery/operation, and control/decision relationships.
- On mobile, simplify tertiary representation before shrinking primary systems.
- Do not force every tertiary label to remain visible simultaneously if grouping preserves the meaning more clearly.

ENGINEERED PATHWAYS
- Replace meaningless decorative curves with routed architecture.
- Pathways may use controlled arcs, articulated bends, short rails, junctions, returns, and branches, but every geometry choice must communicate a relationship.
- Establish clear port-to-port connections.
- Direct routes represent healthy coordination.
- Returning routes represent feedback.
- Branching junctions represent dependency.
- Later crossings, duplications, and queues will represent pressure.
- Avoid randomly generated route spaghetti.
- Build the route system from typed, centralized business-relationship data so visual and semantic ownership remain maintainable.

INTELLIGENT SIGNAL ROUTING
- Signals must demonstrate movement of information, work, decisions, or feedback.
- Signals originate from or return to the Business Core.
- Use sparse, readable signals.
- Give healthy routes calm, consistent cadence.
- Near systems may respond before distant systems.
- Ports should acknowledge signal arrival.
- A route may illuminate bidirectionally when feedback is meaningful.
- Do not animate every route constantly.
- Do not use unrelated particles as a substitute for routed behavior.

PHYSICAL SYSTEM ASSEMBLY
Build the chapter through these ordered semantic states:

1. RECEIVER / CORE FORMATION
- Receive the Business Core from Prompt 2.
- Resolve housing, ports, light, and first architectural depth.
- Delay copy until the object is legible.

2. PRIMARY ESTABLISHMENT
- Customers, Team, Operations, and Growth appear in relation to the core.
- Their routes establish before secondary density arrives.
- The composition is calm and direct.

3. HEALTHY CONNECTION
- Short routes carry steady signals.
- The core maintains an even cadence.
- The visitor can understand the business at a glance.
- Hold this state long enough to establish the baseline.

4. CAPABILITY EXPANSION
- Supporting systems assemble in meaningful groups.
- The field opens and the business feels more capable.
- More customers, tools, responsibilities, and opportunities should initially feel positive.

5. FULL LIVING BUSINESS
- Primary, supporting, and selected tertiary systems operate as one visible business.
- The composition is rich but still hierarchical.
- The core remains dominant.

6. ONSET OF PRESSURE
- Introduce only the first signs of coordination work:
  - one delayed signal;
  - one repeated responsibility;
  - one shared junction under load;
  - a subtle cadence imbalance.
- End in a stable handoff state for Prompt 4.
- Do not complete the complexity diagnosis or alignment transformation yet.

HEADLINE HIERARCHY
- Use one major headline per semantic state or meaningful group of states.
- The headline must name what the visitor can already see.
- Supporting copy is concise and secondary.
- Do not place the copy in a large card.
- Preserve this narrative arc:
  - `The business begins with a common center.`
  - `Connected by design.`
  - `Growth adds capability.`
  - `Every new capability creates another relationship to coordinate.`
- Refine line wrapping and supporting language as needed without changing the meaning.

SCROLL AND STATE ARCHITECTURE
- Use one typed state model for the Business Core chapter.
- Keep state ranges and relationship data centralized.
- Use one normalized progress source.
- Continuous visual interpolation must not trigger per-pixel React rendering.
- Every state must be valid on fast scroll, reverse scroll, mid-scene refresh, resize, and re-entry.
- The receiver state from Prompt 2 and pressure handoff to Prompt 4 are contracts, not incidental fades.
- Do not trap or snap scrolling.

VISUAL LANGUAGE
- Use obsidian depth, graphite structure, embedded blue intelligence, restrained gold direction, warm ivory type, and muted supporting labels.
- The Business Core acts as the key light for nearby systems.
- Architecture responds to the scale of the business.
- Use layered depth to distinguish core, primary systems, supporting systems, and distant dependencies.
- Avoid dashboard chrome, fake metrics, generic data visualizations, warning-red chaos, and uniform glow.

MOBILE
- Approve 390px first.
- Keep the Business Core dominant in the center or upper-center.
- Keep all four primary systems identifiable.
- Reveal supporting systems progressively and simplify tertiary density.
- Keep the headline in a stable readable zone outside the network’s collision field.
- Do not reduce the chapter to a tiny full-network thumbnail.
- Preserve safe-area and dynamic-browser-bar behavior.
- Prevent clipping and horizontal overflow.
- Short-height phones must retain core, four primary systems, active headline, and the current visual event.

TABLET AND DESKTOP
- Expand spatial depth and system grouping without making every node equally prominent.
- Keep the core dominant.
- Allow larger modules, clearer route depth, and more environmental architecture.
- Cap ultrawide spread so the network remains one business rather than a constellation.
- Pointer response may add material nuance but not essential meaning.

ACCESSIBILITY AND REDUCED MOTION
- Keep headlines and supporting narrative in semantic HTML.
- Treat the network as decorative when equivalent narrative meaning exists in HTML.
- If any system nodes are interactive, use real controls with visible focus and meaningful labels; do not add interaction solely for spectacle.
- Do not require hover.
- Reduced motion should present a stable assembled business with clear hierarchy and the complete narrative in document order.
- Remove continuous signal travel, parallax, and large assembly movement while preserving the receiver and pressure-handoff meaning.

PERFORMANCE
- Do not add dependencies, canvas, WebGL, video, or an image sequence.
- Keep route and node counts bounded.
- Group SVG motion where practical.
- Use compact filters and avoid full-screen animated blur.
- Keep one passive, frame-batched progress observer.
- Pause offscreen and document-hidden motion.
- Reserve image dimensions and use accurate responsive sizes.

PROTECTED BOUNDARIES
- Do not change the Ascend Framework or Prompt 2 transition beyond minimal receiver compatibility.
- Do not implement the full Complexity / Hidden Cost / Recognition / Direction / Integration / Command sequence. Prompt 4 owns it.
- Do not globally retune all scenes. Prompt 5 owns cross-scene polish.
- Do not remove the pressure-handoff state needed by Prompt 4.

VALIDATION
Render and inspect:
- 320px;
- 375px;
- 390px;
- 414px;
- 430px;
- short-height mobile;
- tablet;
- 1024px;
- laptop;
- wide desktop.

At relevant sizes, verify:
- receiver from Prompt 2;
- core formation;
- primary-system establishment;
- healthy hold;
- supporting-system expansion;
- full network;
- first pressure state;
- slow, fast, reverse, and interrupted scrolling;
- mid-scene refresh;
- reduced motion;
- keyboard/focus if controls exist;
- no tiny primary labels, route disconnection, core de-emphasis, clipping, overflow, stale state, layout shift, console error, or hydration issue.

Run and pass:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `git diff --check`

COMPLETION REPORT
Report:
1. previous hierarchy and network problems;
2. files changed;
3. final Business Core state model;
4. final node hierarchy;
5. route and signal language;
6. physical assembly sequence;
7. how the current transition line was removed and continuity preserved;
8. mobile composition;
9. pressure-handoff contract for Prompt 4;
10. accessibility, reduced motion, and performance safeguards;
11. exact rendered and automated validation completed;
12. remaining risk.
```

---

# Prompt 4 — Rebuild Growth / Complexity / Clarity as a Cinematic Transformation

Copy this prompt into Codex after Prompt 3 is complete:

```text
Rebuild the Growth / Complexity / Clarity chapter as a cinematic analysis and reorganization of the living business.

Implement the change directly in the current local website repository. Prompts 1–3 have already completed the Ascend Framework, the Framework-to-Business-Core transformation, and the Business Core through its first coordination-pressure state. Preserve those results. This prompt owns the complete narrative from complexity through hidden cost, recognition, direction, integration, command, and the forward handoff.

PROJECT AND SOURCE OF TRUTH
- The project is a mobile-first Next.js and strict TypeScript website deployed to Vercel.
- Read `docs/GAC_MIDDLE_CHAPTERS_CREATIVE_DIRECTION.md`, especially Chapter 4.
- Inspect the pressure-handoff state from Prompt 3, the current complexity and transformation components, shared network data, copy, styles, scroll ownership, next-scene receiver, responsive rules, accessibility, and reduced-motion branches.
- Determine where the current narrative is split across components. Preserve a clean semantic chapter boundary while ensuring the same business network visibly continues. Share typed network definitions or handoff geometry where needed; do not render an unrelated replacement diagram.
- Inspect the active styling system; do not migrate styling stacks.
- Run baseline lint, strict TypeScript checking, production build, and `git diff --check` before editing.
- Preserve unrelated user changes.

CURRENT FAILURE
The existing experience asks the visitor to scroll repeatedly while small cards, labels, or supporting copy change and the main visual remains largely the same.

That is not acceptable.

Every major stage must visibly change:
- the hero headline;
- network silhouette;
- route architecture;
- signal rhythm;
- Business Core behavior;
- environmental pressure;
- light;
- spatial depth.

Every stage must create a memorable reveal that remains obvious on mobile.

OBJECTIVE
Make the visitor feel as if an advanced AI operating system is understanding and reorganizing a business in real time.

The intelligence must be demonstrated through selection, tracing, comparison, rerouting, stabilization, and synchronization—not fake metrics, dashboards, generic scans, or data noise.

PRESERVE
- The same Business Core and living-business network from Prompt 3.
- Growth as a positive source of capability.
- Complexity as a coordination consequence, not business failure.
- The approved obsidian, blue, graphite, gold, ivory, and stone palette.
- Native reversible scrolling.
- A clear forward handoff at the end.

REMOVE
- Small cards as the main state-change mechanism.
- Repeated box layouts.
- Fixed hero copy with tiny changing labels underneath.
- Supporting copy that dominates the scene.
- Visual states distinguishable only by subtle opacity.
- Decorative routes unrelated to the business.
- Independent scene resets between complexity and clarity.

NARRATIVE AND VISUAL STAGES

STAGE 1 — COMPLEXITY REVEALED
- Headline: `Growth created a system no one designed.`
- Supporting thought: `Capability expanded faster than coordination.`
- Continue directly from Prompt 3’s pressure state.
- Lengthen selected routes.
- Introduce meaningful crossings, repeated responsibilities, delayed returns, and competing signals.
- The Business Core remains capable but spends visible energy maintaining connection.
- Compress the architecture slightly and increase uneven cadence.
- Keep the system intelligible; do not create random chaos.

STAGE 2 — THE HIDDEN COST
- Headline: `The work behind the work is consuming the business.`
- Supporting thought: `Time, focus, visibility, consistency, and opportunity are lost between disconnected systems.`
- Express the five costs through system behavior:
  - Time: signals wait or travel unnecessarily long routes.
  - Focus: the core divides attention across competing paths.
  - Visibility: one important system becomes isolated or receives incomplete feedback.
  - Consistency: similar work reaches different outcomes through duplicated routes.
  - Opportunity: a high-value signal passes without a clear owner or return path.
- Do not present five cards, counters, percentages, or floating keywords as the primary reveal.
- The headline remains the dominant textual event.

STAGE 3 — RECOGNITION
- Headline: `Clarity begins when the business can see itself.`
- Supporting thought: `The system stops carrying noise and begins identifying the pattern.`
- Stop adding density.
- Use analytical blue to trace duplicated routes, bottlenecks, high-value relationships, and feedback gaps.
- Recede nonessential background activity.
- Shift the Business Core from compensating to interpreting.
- Make this feel like the first clear breath after pressure.

STAGE 4 — DIRECTION
- Headline: `When priorities align, complexity finds a direction.`
- Supporting thought: `The business begins organizing around what matters most.`
- Establish one decisive shared axis or backbone through the existing network.
- Clarify primary routes.
- Reduce low-value duplication.
- Give selected junctions clear ownership.
- Stabilize the core around a smaller number of meaningful pathways.
- Increase gold only at chosen routes, locks, and decision points.

STAGE 5 — INTEGRATION
- Headline: `Separate systems begin moving as one business.`
- Supporting thought: `Direction, expression, execution, and growth reinforce one another.`
- Show Command, Create, Operate, and Expand as influences within the business rather than controls outside it.
- Customer-facing, operational, intelligence, and executive routes should visibly support each other.
- Transform the network from a set of connections into an operating architecture.
- Synchronize route cadence in meaningful groups.

STAGE 6 — COMMAND
- Headline: `Clarity becomes control.`
- Supporting thought: `The business can move with visibility, consistency, and confidence.`
- Bring the Business Core to its most stable and capable state.
- Prioritize primary systems.
- Keep supporting systems active but subordinate.
- Use consistent signal rhythm and clear feedback.
- Open the environment to reveal depth and possibility.
- Preserve life and movement; do not make the aligned business sterile or frozen.

STAGE 7 — FORWARD
- Headline: `The business is ready to ascend.`
- Supporting thought: `Clarity, capability, and control now move in one direction.`
- Produce one coherent forward trajectory from the aligned system.
- Preserve the Business Core long enough to show that the business—not an abstract interface—is moving forward.
- Create an explicit visual handoff contract for the next homepage chapter.
- Do not fade every element independently.

HEADLINE SYSTEM
- The headline is the chapter’s narrative voice.
- Use one persistent semantic heading region with stable layout.
- Each headline must be concise, large, and understandable without supporting copy.
- A new headline appears only when its visual transformation is already perceptible.
- Supporting copy is one short thought and remains secondary.
- Small stage labels may orient the visitor but may not carry the story.
- Avoid live-region announcements for automatic scroll changes.

STILL-FRAME STANDARD
Every adjacent stage must be distinguishable in a still image without reading the support copy.

Judge each stage across:
- silhouette;
- routing;
- rhythm;
- light;
- Business Core condition;
- environmental space;
- headline.

If two stages look nearly identical, strengthen the visual transformation rather than adding more text.

AI ANALYSIS LANGUAGE
- Show intelligence through behavior:
  - identifying patterns;
  - comparing routes;
  - isolating bottlenecks;
  - selecting high-value relationships;
  - rerouting work;
  - restoring feedback;
  - synchronizing systems;
  - stabilizing the core.
- Avoid brains, robots, scanning lasers, fake percentages, fictional diagnostics, radar screens, and generic HUD overlays.
- The most intelligent moment should be the reduction of noise and selection of what matters.

NETWORK CONTINUITY
- Use the same business nodes and relationship model established in Prompt 3.
- Do not swap to a visibly unrelated network.
- Preserve node identity and spatial memory while routes and hierarchy transform.
- Complexity comes from changed relationships and timing, not arbitrary new density.
- Clarity comes from reorganization, not deleting the business.
- Keep route origins, destinations, and meaning explicit.

SCROLL AND STATE ARCHITECTURE
- Use one typed, centralized stage model.
- Give every major stage a meaningful hold.
- Use one normalized progress source for this chapter.
- Keep continuous values outside per-pixel React state.
- Use deterministic interpolation and discrete semantic thresholds.
- Add a small stability/hysteresis band if needed to prevent headline flicker near thresholds.
- Fast, reverse, interrupted, and mid-page refresh behavior must remain valid.
- Do not use timers, scroll snapping, wheel interception, body locking, or nested scroll containers.

MOTION
- Every movement communicates analysis, pressure, selection, rerouting, alignment, synchronization, or forward transformation.
- Use deliberate movement followed by quiet holds.
- Let signals demonstrate cause and effect.
- Let core motion reflect load, recognition, and stability.
- Avoid constant background animation, bounce, random particle storms, large raster zoom, and full-screen blur.
- Do not make every route glow at once.

MOBILE
- Approve 390px first.
- Keep the Business Core and primary systems visually dominant.
- Keep the headline in a stable reading zone separate from network collisions.
- Make every stage’s main visual difference obvious without relying on tiny labels.
- Simplify tertiary systems and atmosphere before reducing primary meaning.
- Preserve safe areas and dynamic browser bars.
- Test short-height mobile and landscape.
- Prevent clipping and horizontal overflow.
- Do not place the narrative inside a large bottom card.

TABLET AND DESKTOP
- Expand depth, route visibility, and architecture while preserving the same stage logic.
- Keep one headline and one visual subject dominant.
- Use wide space for clearer group relationships, not more decorative systems.
- Cap ultrawide spread.
- Pointer atmosphere remains optional and nonessential.

ACCESSIBILITY AND REDUCED MOTION
- Keep the complete seven-stage narrative in semantic HTML.
- Decorative network layers remain hidden from assistive technology when equivalent narrative text is present.
- Ensure contrast and reading order remain stable across every lighting state.
- Do not require hover or fine pointer interaction.
- Reduced motion must remove the long scrub, continuous signals, parallax, and large reorganization travel.
- Present the complete narrative in document order and a stable aligned representative system.
- Preserve the causal sequence from complexity to recognition to command.

PERFORMANCE
- Do not add dependencies, canvas, WebGL, video, or an image sequence.
- Reuse the established network rather than rendering multiple full copies.
- Keep route and filter counts bounded.
- Prefer grouped SVG/CSS transforms and opacity.
- Keep one passive, frame-batched progress observer.
- Pause work offscreen and while the document is hidden.
- Avoid full-screen animated filters.
- Check memory after repeated forward/reverse passes.

PROTECTED BOUNDARIES
- Do not redesign the Ascend Framework.
- Do not alter Prompt 2’s cross-scene transformation.
- Do not rebuild Business Core formation or healthy growth states from Prompt 3.
- Begin with Prompt 3’s pressure-handoff contract.
- Do not perform global visual-system polish beyond what this chapter requires; Prompt 5 owns final consistency.

VALIDATION
Render and inspect:
- 320px;
- 375px;
- 390px;
- 414px;
- 430px;
- short-height mobile;
- mobile landscape;
- tablet;
- 1024px;
- common laptop;
- wide desktop.

At relevant sizes, observe:
- each of the seven major states;
- slow forward scroll;
- fast scroll across several states;
- reverse scroll at every threshold;
- repeated direction changes;
- refresh in each state;
- entry from Business Core;
- forward handoff;
- reduced motion;
- resize/orientation change;
- network/headline synchronization;
- no tiny-card dependency, stale copy, stale route, blank boundary, clipping, overflow, layout shift, hydration issue, or console error.

Capture or record one representative still frame per major state for comparison. Do not claim visual distinction without observing it.

Run and pass:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `git diff --check`

COMPLETION REPORT
Report:
1. previous narrative and visual failures;
2. files changed;
3. final seven-stage model;
4. headline system;
5. visible network transformation at each stage;
6. Business Core behavior at each stage;
7. AI-analysis language used and clichés removed;
8. mobile behavior;
9. reduced-motion and accessibility behavior;
10. performance safeguards;
11. forward-handoff contract;
12. exact rendered and automated validation completed;
13. remaining risk for Prompt 5.
```

---

# Prompt 5 — Global Cinematic Polish and Production Readiness

Copy this prompt into Codex after Prompts 1–4 are complete:

```text
Perform the final global cinematic polish and production-readiness pass across the completed middle chapters of the Gent Ascend Collective homepage.

Implement the change directly in the current local website repository. Prompts 1–4 have already completed the Ascend Framework, Framework-to-Business-Core transformation, Business Core experience, and Growth / Complexity / Clarity transformation. Preserve their approved narrative, structure, copy, and state models.

This is a refinement, consistency, accessibility, performance, and QA pass. Do not redesign the chapters, add new narrative beats, replace approved assets, or introduce new features.

PROJECT AND SOURCE OF TRUTH
- The project is a mobile-first Next.js and strict TypeScript website deployed to Vercel.
- Read `docs/GAC_MIDDLE_CHAPTERS_CREATIVE_DIRECTION.md` completely.
- Review the completion reports and diffs from Prompts 1–4.
- Inspect the current active styling system. Consolidate within it; do not migrate styling stacks.
- Inspect all Scene 2–4 components, styles, shared assets, scroll observers, lifecycle handling, reduced-motion branches, page order, chapter boundaries, and next-scene handoff.
- Run baseline lint, strict TypeScript checking, production build, and `git diff --check` before editing.
- Preserve unrelated user changes.

OBJECTIVE
Make Scenes 2–4 feel like one premium cinematic system created at the same time by the same design team.

The final sequence should have:
- consistent command-core family resemblance;
- one pathway and signal grammar;
- one lighting philosophy;
- one motion philosophy;
- one typographic hierarchy;
- controlled pacing;
- responsive compositional quality;
- accessible narrative;
- stable performance;
- seamless transitions.

Do not flatten the unique role of each chapter. Consistency means shared principles and materials, not identical layouts.

VISUAL-SYSTEM CONSISTENCY
Audit and normalize:

PALETTE
- Obsidian foundation.
- Graphite structure.
- Deep blue for intelligence, depth, analysis, and internal energy.
- Restrained dimensional gold for decisions, value, locks, selected paths, and shared direction.
- Warm ivory for primary editorial text.
- Muted stone for support and inactive states.
- Remove accidental one-off blues, yellows, grays, and glow colors that weaken cohesion.

MATERIALS
- Command cores share a family of machined graphite, dark optical depth, fine gold edges, and internal blue energy.
- The GAC Framework core and Business Core remain distinct in role and asset but clearly belong to one world.
- Normalize edge weight, reflections, ring treatment, port treatment, and material shadow without making the two cores identical.
- Remove plastic, flat, overly glossy, or generic glass-card treatments.

PATHWAYS
- Establish one permanent grammar for route bases, active routes, analysis traces, decision routes, return paths, junctions, and signals.
- Normalize visual weight and luminance by meaning.
- Remove remaining decorative lines with no origin or destination.
- Remove route effects that conflict across chapters.
- Gold indicates selected direction; blue indicates intelligence and active system energy.

ARCHITECTURE AND DEPTH
- Keep foreground, subject plane, middle architecture, and distant field legible.
- Normalize vignette, haze, grid, radial marks, and perspective so chapter boundaries feel continuous.
- Remove full-screen blur or haze that lowers text and object clarity.
- Keep atmosphere subordinate to the current subject.

TYPOGRAPHY HIERARCHY
- One decisive display headline per major state.
- One quiet supporting thought.
- Small sans-serif locators, progress, and system labels.
- Normalize headline scale, line-height, measure, text-wrap, support contrast, and label tracking across scenes.
- Prevent tiny uppercase copy.
- Remove duplicate titles and redundant explanatory paragraphs.
- Ensure copy changes do not cause layout shift.

SPACING AND COMPOSITION
- Normalize safe-area breathing room, editorial-to-system spacing, scene edge treatment, and vertical rhythm.
- Remove repeated “graphic above, card below” impressions.
- Maintain each scene’s distinct composition while preserving one continuous spatial world.
- Ensure completed states have enough hold and visual breathing room.

MOTION POLISH
Audit every autonomous and scroll-driven movement.

Every movement must communicate:
- power;
- analysis;
- synchronization;
- alignment;
- decision;
- connection;
- transformation.

Remove or reduce motion that exists only because it can animate.

Normalize:
- easing families;
- acceleration and settling;
- route-signal speed;
- ring cadence;
- core response time;
- copy transition distance;
- phase hold length;
- completion hold;
- boundary handoff timing.

The experience should alternate between quiet understanding and decisive transformation.

Remove:
- bounce;
- jitter;
- endless high-speed spin;
- full-scene pulsing;
- random particle loops;
- unsynchronized signal clutter;
- abrupt opacity cuts;
- excessively subtle state changes;
- transition delays that feel like loading.

SCENE TRANSITIONS
Review all boundaries:
- Scene 1 to Ascend Framework.
- Framework completion to Business Core.
- Business Core growth to complexity.
- Complexity to clarity.
- Clarity to the next homepage chapter.

At every boundary:
- the outgoing chapter’s completed subject becomes the incoming chapter’s starting material;
- core position, scale, axis, light, depth, and direction agree;
- copy recedes before the visual subject changes;
- there is no blank screen, loading hold, duplicate object, background seam, z-index flash, or unrelated reset;
- forward and reverse scrolling remain deterministic;
- reduced motion preserves the causal relationship.

Do not invent a new transition motif. Refine the motifs already established by Prompts 1–4.

MOBILE REFINEMENT
Review in this order:
1. 390px.
2. 375px.
3. 430px.
4. 320px.
5. short-height mobile.
6. mobile landscape.

For every chapter and boundary:
- protect the dominant core or network;
- keep primary labels readable;
- keep all four Framework disciplines visible;
- keep the Business Core and primary systems visually dominant;
- preserve a stable headline zone;
- respect safe areas and dynamic browser bars;
- prevent copy/system collision;
- prevent focus clipping;
- prevent horizontal overflow;
- reduce atmosphere and tertiary density before meaning;
- verify touch behavior without hover;
- ensure rapid and reverse scroll never reveals stale states.

Do not approve mobile based on source inspection alone.

TABLET AND DESKTOP REFINEMENT
- Review tablet, 1024px, common laptop, 1440px, and ultrawide.
- Use larger viewports for depth and negative space, not for pushing nodes to corners.
- Cap system spread and headline measure.
- Verify that desktop pointer effects remain optional.
- Prevent laptop-height collisions.
- Keep the complete narrative and hierarchy equivalent to mobile.

ACCESSIBILITY
Perform a complete middle-chapter accessibility pass:
- semantic section and heading order;
- DOM reading order;
- native controls;
- visible focus;
- accurate selected/pressed state;
- 44×44 minimum touch targets;
- no hover-only meaning;
- no color-only state;
- decorative visual layers hidden from assistive technology;
- concise accessible alternatives for complex graphics;
- no automatic scroll-state live-region flooding;
- sufficient text and focus contrast in every lighting state;
- usable keyboard navigation;
- content remains meaningful with animation or CSS enhancement unavailable.

REDUCED MOTION
Design one coherent reduced-motion experience across all middle chapters:
- no long sticky scrub requirement;
- no large collapse, portal travel, parallax, continuous ring spin, or traveling signal loops;
- stable Framework complete state with all four summaries available;
- concise causal change into the Business Core;
- stable assembled Business Core and complete business narrative;
- complexity-to-clarity story available in document order;
- clear aligned final state and natural forward flow;
- no hidden narrative content.

PERFORMANCE
Profile and refine the completed sequence:
- one progress observer per active scene, not duplicated listeners for the same boundary;
- passive scroll listeners;
- requestAnimationFrame batching;
- continuous values outside React rendering;
- offscreen and document-hidden pausing;
- bounded route/node counts;
- grouped SVG motion where practical;
- compact filter bounds;
- no continuously animated full-screen blur;
- conservative GPU layer creation;
- responsive image sizing and reserved dimensions;
- no unnecessary eager loading after the opening;
- no hydration mismatch;
- no memory growth after repeated forward/reverse passes;
- no unnecessary dependency added by the rebuild.

Inspect production behavior, not only development behavior.

STYLE OWNERSHIP AND CLEANUP
- Remove obsolete selectors, dead animation names, abandoned components, duplicate phase data, unused assets introduced by the rebuild, temporary debugging UI, console logging, and conflicting cascade layers.
- Keep style ownership clear.
- If the active repository uses CSS Modules, preserve scene isolation.
- If Tailwind has been intentionally configured, use established utilities and tokens without mixing redundant ad hoc systems.
- Do not perform a new styling-stack migration.
- Keep shared tokens centralized only where they are genuinely shared.
- Preserve scene-specific tuning where it supports each chapter’s role.

PROTECTED BOUNDARIES
- Do not change approved narrative order.
- Do not rewrite approved headlines or support copy except to fix a clear typo or accessibility problem.
- Do not add new scenes, nodes, controls, or narrative stages.
- Do not replace `/public/logo.png` or `/public/bc-icon.png`.
- Do not introduce video, canvas, WebGL, image sequences, or new animation dependencies.
- Do not redesign later homepage chapters outside the minimum receiver compatibility needed for the final handoff.

FINAL VALIDATION MATRIX
Observe the complete middle experience, not isolated scenes, at:
- 320px mobile;
- 375px mobile;
- 390px mobile;
- 414px mobile;
- 430px mobile;
- short-height mobile;
- mobile landscape;
- tablet;
- 1024px;
- common laptop;
- 1440px;
- ultrawide.

For every relevant viewport, test:
- direct page load at top;
- entry from Scene 1;
- slow scroll through all states;
- fast scroll across multiple states;
- reverse scroll through every boundary;
- repeated direction changes;
- refresh at intermediate states;
- re-entry after scrolling offscreen;
- touch;
- keyboard;
- focus visibility;
- reduced motion;
- resize/orientation change;
- dynamic browser bars;
- full final handoff.

Record:
- viewport;
- browser/device;
- input method;
- reduced-motion state;
- issues found and fixed;
- unobserved cases.

Automated validation:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`
- `git diff --check`
- inspect browser console during the rendered sequence

FINAL ACCEPTANCE CRITERIA
- The middle homepage reads as one continuous causal story.
- Every major scroll produces a visible narrative consequence.
- All four Framework disciplines fit and remain legible on mobile.
- The completed Framework visibly becomes the Business Core.
- The Business Core dominates its network.
- Every pathway has meaning.
- Complexity emerges from growth rather than random chaos.
- Clarity reorganizes the same business rather than replacing it.
- Headlines carry the story; support copy remains secondary.
- Adjacent major states are visually distinct in still frames.
- Motion is purposeful, premium, and restrained.
- Gold always communicates value, decision, or direction.
- There are no giant generic cards, decorative route spaghetti, blank transitions, or dashboard clichés.
- Mobile and desktop feel intentionally composed.
- Reduced motion preserves the entire narrative.
- Accessibility and production performance are credible.
- No required validation command fails.

COMPLETION REPORT
Report:
1. files changed;
2. global visual-language refinements;
3. motion and timing refinements;
4. transition refinements;
5. mobile and desktop refinements;
6. accessibility improvements;
7. reduced-motion experience;
8. performance changes and profiling observations;
9. obsolete code/styles removed;
10. complete rendered-validation matrix;
11. automated validation results;
12. remaining risk or external-device follow-up.

Do not claim the rebuild is production approved if required rendered review could not be completed. State the exact limitation.
```

---

# Completion Standard

The middle cinematic rebuild is complete only when:

- all five prompts have been executed in order;
- each prompt’s protected boundaries have been respected;
- all automated checks pass after every prompt;
- the full sequence has been observed as one continuous experience;
- mobile has been approved before desktop;
- forward and reverse scroll remain coherent;
- reduced motion preserves the entire story;
- the completed Framework becomes the Business Core;
- the Business Core visibly assembles the living business;
- complexity visibly emerges from growth;
- clarity visibly reorganizes the same system;
- the final aligned business exits with one coherent forward trajectory;
- remaining device or browser limitations are documented honestly.

The intended result is not a collection of impressive scenes. It is one connected transformation:

> Framework becomes intelligence.  
> Intelligence understands the business.  
> Understanding reveals complexity.  
> Clarity creates command.

