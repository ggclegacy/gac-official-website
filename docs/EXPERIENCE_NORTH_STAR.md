# Gent Ascend Collective Experience North Star

Last reviewed: July 17, 2026

## Research scope and confidence

This document is the alignment standard for the Gent Ascend Collective (GAC) homepage. Mercury is treated as an experience benchmark, not a visual template.

The current public Mercury homepage at [mercury.com](https://mercury.com/) was reviewed from beginning to end through its published page structure and media descriptions. The review covered the opening, product overview, social proof, product capability stories, value and control stories, security, press proof, final conversion, and footer. The page exposes distinct desktop and mobile navigation structures and a product-led sequence whose imagery stays tied to the claim beside it.

Direct interactive browser control was unavailable in this session. Consequently, exact mobile-versus-desktop motion, sticky durations, easing curves, reverse-scroll behavior, reduced-motion behavior, asset loading, and the presence of canvas/WebGL could not be verified hands-on. Any observations below about choreography are principles to validate in a future live browser pass, not claims about Mercury's proprietary implementation. No proprietary source code was inspected or reverse-engineered.

## 1. Mercury Experience Analysis

### A connected commercial journey

Mercury's homepage reads as a progression of confidence rather than a pile of equal-weight feature blocks:

1. **Declare a category-level promise.** The opening leads with a short, high-confidence statement and immediate account/demo actions.
2. **Expand the promise into a system.** The next movement groups banking, cards, payments, invoicing, and accounting under one operating idea rather than presenting unrelated features.
3. **Transfer credibility to customers.** Social proof and testimonials arrive after the product world is established, confirming the promise without interrupting the initial momentum.
4. **Make benefits concrete.** Product moments show recognizable tasks—creating cards, paying bills, invoicing, and receipt reconciliation—so visual craft remains connected to utility.
5. **Widen from speed to leverage.** Later stories move from getting started quickly to saving fees, earning yield, gaining visibility, automating work, managing teams, and applying controls.
6. **Resolve risk and close.** Scale, security, protection, external validation, and a final conversion choice turn aspiration into a defensible decision.

The important lesson is narrative escalation. Each movement answers the question created by the previous one: What is different? What is included? Does it work for companies like mine? What does it help me do? Can I trust it? What should I do next?

### Scene architecture

- A scene should have one dominant proposition and one dominant visual subject.
- Product imagery is evidence, not wallpaper. A card, invoice flow, search interface, graph, or control is paired with the operational outcome it demonstrates.
- Repeated structures are grouped into larger narrative chapters, which keeps the page from feeling like a catalog even when it contains many capabilities.
- Large claims alternate with denser proof. This change in visual pressure gives the visitor recovery time and restores emphasis.
- The final movement resolves both emotional and practical objections before presenting the conversion action again.

For GAC, the equivalent architecture is not Mercury's banking sequence. It is the transformation from latent ambition, through operational complexity, into an aligned business system.

### Scroll choreography and transition systems

The target principle is that scroll should control narrative state, not merely reveal boxes. A strong sequence uses scroll distance as time: an establishing state is allowed to breathe, a visual system develops in legible increments, and the outgoing subject becomes the incoming scene's point of continuity.

Continuity can be created through:

- a persistent object that changes role, scale, or context;
- matched geometry, light direction, color, or camera axis across a boundary;
- foreground occlusion, masking, depth fog, or a controlled blackout that hides the DOM boundary;
- typography that recedes before the visual handoff rather than colliding with the next message;
- a sticky stage only when several meaningful states must occupy the same visual field.

The hero should therefore not finish with every element fading out independently. Its command core should become the visual portal into the Reality Gap. The viewer should understand the relationship before reading the next heading.

### Visual hierarchy

- One focal object, one primary statement, and one next action should dominate at a time.
- Supporting text should enter after orientation, remain readable long enough to comprehend, and recede when visual development requires attention.
- Product or system visuals should grow in specificity as the narrative grows in specificity.
- Proof should vary in density and scale; uniformly loud components flatten the journey.
- Motion should direct the eye toward a claim, state change, or consequence. It should not reward random movement.

### Mobile behavior

Mercury publishes separate mobile navigation behavior rather than relying on an unchanged desktop header. That confirms an essential principle: responsive behavior is a recomposition, not a proportional shrink.

For GAC, the mobile sequence must use a narrower field of attention, shorter simultaneous copy, larger touch targets, fewer concurrent layers, and autonomous cues that do not depend on hover. The essential story and its transitions must remain intact. Desktop may add peripheral depth and pointer-responsive light, but mobile defines the timing, focus, and semantic order.

The exact Mercury mobile choreography could not be observed interactively in this research pass and must not be inferred as a technical recipe.

### Performance strategy

The public page structure suggests a useful content strategy: visuals are closely scoped to individual claims, and image alternatives describe their semantic purpose. For GAC, performance must be treated as part of direction and pacing:

- reserve dimensions for media to prevent layout shifts;
- prioritize only the opening assets;
- lazy-load later-scene media before, but not far before, it is needed;
- animate compositor-friendly transforms and opacity where practical;
- keep scroll measurement and DOM writes inside a single scheduled animation frame;
- pause autonomous animation when a scene is offscreen;
- reduce layer count, blur area, and simultaneous effects on mobile;
- provide static semantic states before enhancing them with motion;
- measure on representative mid-range phones, not only a development laptop.

### Interaction philosophy

Interaction should clarify agency while preserving natural browser behavior. Scroll remains native. Touch, keyboard, and pointer interactions may reveal optional detail, but essential meaning cannot be gated behind hover. Autonomous motion can signal that the environment is alive, but it must be slow, purposeful, pauseable by visibility, and compatible with reduced motion.

## 2. What We Should Learn

### Storytelling principles

- Begin with a decisive worldview, then prove it through an escalating transformation.
- Give each scene one narrative job and one question it resolves.
- Tie every major visual to an actual GAC capability or business consequence.
- Move from ambition to diagnosis, from diagnosis to alignment, and from alignment to control.
- Alternate intensity with breathing room so cinematic scale does not reduce comprehension.
- Use a recurring visual grammar—command core, pathways, signals, materials, and controlled light—to make separate scenes feel like one environment.

### Interaction principles

- Map scroll progress to meaningful state changes, not arbitrary motion values.
- Maintain native, reversible scrolling; every state should make sense when approached in either direction.
- Use autonomous idle motion to communicate aliveness on touch devices.
- Treat pointer response as optional atmosphere, never required content.
- Keep focus order, touch targets, live-region use, and keyboard behavior independent of visual layering.
- Let each interaction reveal meaning, confirm system response, or advance the narrative.

### Technical principles

- Build each scene first as an accessible static composition with explicit states.
- Use CSS custom properties as the interface between scroll progress and presentation.
- Centralize progress measurement per scene and batch updates through `requestAnimationFrame`.
- Use Intersection Observer for activation, asset preparation, and pausing; do not use it for continuous progress.
- Prefer SVG for crisp pathways, diagrams, masks, and branded interface geometry.
- Add a timeline library only when choreography complexity justifies it.
- Keep scene components isolated enough to profile, tune, and replace without destabilizing the full journey.

### Mobile-first principles

- Design and approve the 390px composition before expanding it.
- Write mobile copy and visual states for the real viewport, not a cropped desktop artboard.
- Preserve the complete causal story while reducing concurrent detail.
- Use autonomous focus cues and tap states in place of hover-dependent discoveries.
- Keep primary subjects inside thumb-safe and browser-chrome-safe regions.
- Test dynamic browser bars, orientation changes, safe areas, and interrupted/reversed scroll.
- Use desktop space for added depth, not for essential meaning absent on mobile.

### Performance principles

- Establish budgets for initial JavaScript, hero media, total scene media, long tasks, and dropped frames before production polish.
- Prefer vector/CSS treatments for simple geometry and short loops.
- Load high-cost scenes on approach and dispose of or pause their work after exit.
- Avoid large continuously animated filters, shadows, and full-screen blurs on mobile.
- Use responsive images, modern formats, explicit sizing, and only the resolution the rendered size needs.
- Profile memory as well as frame rate; decoded image sequences and GPU layers can remain expensive after network loading ends.
- Make reduced motion a designed narrative mode, not a blanket removal of meaning.

## 3. What We Must Not Copy

The following belong to Mercury's identity and product story and must not be imitated directly:

- Mercury's name, logo, color system, typography, voice, headlines, labels, calls to action, and product wording;
- any exact hero, navigation, grid, card, testimonial, feature, security, press, conversion, or footer layout;
- its literal banking dashboard, card, invoice, device, search, graph, account, protection, or control concepts;
- its illustrations, portraits, screenshots, icons, photography, video, SVGs, textures, gradients, or other proprietary assets;
- exact transition timings, easing, scroll distances, masks, camera moves, or sticky compositions;
- any recognizable sequence in which the same subjects appear in the same order and spatial relationship;
- source code, DOM structure, class naming, shaders, animation data, or implementation details.

GAC may learn from the abstract disciplines—focus, continuity, pacing, product relevance, responsive recomposition, and restraint—but must express them with its own business-transformation story and branded environment.

## 4. GAC Experience Definition

The GAC homepage is a **continuous cinematic journey** through one premium private business-intelligence environment. It is not a conventional marketing page decorated with motion.

It is a **sequence of scroll-driven scenes**. Each scene has a stable opening, a legible development, a narrative turn, and a visual handoff. Scroll is the storytelling engine and remains native, reversible, and under the visitor's control.

It is a **mobile-first experience**. The mobile composition defines pacing, hierarchy, interaction, and comprehension. Larger viewports expand depth, environmental detail, and optional pointer response without changing the core story.

It is a **business transformation narrative**. The visitor moves from the business they know is possible, into the reality gap created by growth and fragmentation, and toward the Identity, Presence, Intelligence, and Infrastructure that produce clarity and control.

It is an **original branded environment** built from obsidian foundations, graphite materials, midnight-blue depth, dimensional luxury gold, warm ivory type, controlled atmospheric light, engineered pathways, and refined interface geometry. It must feel intelligent, masculine, precise, and premium—never like generic SaaS, cyberpunk spectacle, or a game interface.

## 5. Scene Engineering Standards

Every future scene must satisfy all of the following:

1. **Opening state:** A stable, meaningful composition exists before scroll development begins. It works on direct entry, refresh, and reverse scroll.
2. **Visual development:** Scroll changes scale, position, depth, light, masking, opacity, or system state in a purposeful sequence. Development is not a single entrance animation.
3. **Narrative purpose:** The scene communicates one necessary part of the GAC transformation story. Every major effect supports that purpose.
4. **Exit transition:** The scene has a designed release. Content does not simply stop at a rectangular boundary.
5. **Visual handoff:** A subject, geometry, light field, pathway, or camera direction visibly connects the scene to the next one.
6. **Selective sticky use:** Sticky stages are allowed only when a shared visual field must develop through multiple states. Sticky duration must be earned by content and tuned separately for mobile.
7. **Native scroll:** Scrolling must never be trapped, hijacked, artificially delayed, or converted into mandatory snap steps.
8. **Touch autonomy:** Mobile receives meaningful autonomous motion and explicit touch behavior. Hover cannot carry essential meaning.
9. **Efficient properties:** Use transforms and opacity where practical. Treat large filters, layout-changing properties, and excessive compositing as exceptions requiring profiling.
10. **Lifecycle control:** Reduce or pause offscreen CSS, SVG, canvas, video, and animation-frame work.
11. **Reduced motion:** `prefers-reduced-motion` must preserve order, cause-and-effect, copy, and final state. Replace long spatial travel with concise fades, cuts, or state changes.
12. **Viewport resilience:** Account for dynamic mobile browser bars with modern viewport units (`svh`, `dvh`, and `lvh` where appropriate), safe-area insets, orientation changes, and visual viewport changes.
13. **Accessible semantics:** DOM order, headings, focus behavior, controls, alternatives, and contrast must remain coherent without animation.
14. **Rendered proof:** No major scene is complete based only on code review or a static screenshot. It must be observed across its full lifecycle in a rendered browser.
15. **Continuity contract:** The outgoing scene and incoming scene must agree on the handoff object's position, scale, light, depth, and scroll range at every target viewport.

## 6. Build Review Standards

### Required viewport order

Review every scene in this order. A scene does not advance to wider screens until its mobile behavior is credible.

1. 390px mobile
2. 375px mobile
3. 430px mobile
4. 320px mobile
5. Tablet
6. Desktop

Use representative heights as well as widths, including short mobile landscapes and devices with dynamic browser chrome. Desktop review should include at least one common laptop viewport and one wide viewport.

### Required observation states

At every target size, observe the scene:

- during initial load, including slow-network and uncached behavior;
- while idle, long enough to see all autonomous loops and detect distracting repetition;
- while scrolling slowly through every state threshold;
- while scrolling quickly across the whole track;
- while reversing direction at the beginning, midpoint, thresholds, and exit;
- during pointer, touch, keyboard, and focus interaction where applicable;
- during its transition into the next scene;
- with reduced motion enabled;
- after resize or orientation change and after re-entering from an offscreen position.

### Acceptance criteria

- The narrative is understandable without explanation and without hover.
- Copy remains readable long enough to comprehend and never competes with the focal visual.
- No jump, flash, stale state, clipped control, inaccessible focus target, or ordinary section seam breaks continuity.
- Scroll progress is deterministic in both directions and after refresh at an intermediate position.
- Idle motion is alive but subordinate.
- The handoff remains visually continuous at all approved viewports.
- Performance is judged in the rendered browser with profiling where needed, not inferred from the presence of optimized-looking code.

Record review evidence per scene: viewport, device/browser, input method, reduced-motion state, issues found, performance observations, and the approved handoff frame.

## 7. Recommended Technical Approach

### Current repository baseline

The repository is a small Next.js 16 and React 19 application with no animation library installed. The existing homepage already uses CSS animations and custom properties, SVG, Intersection Observer, passive scroll listeners, and `requestAnimationFrame`. That is a sound starting vocabulary. Do not install a library until a planned scene demonstrates a concrete need.

### Recommended default stack

Use semantic React components for scene state, CSS for composition and inexpensive animation, SVG for engineered diagrams and pathways, Intersection Observer for lifecycle, and one `requestAnimationFrame`-batched progress controller for each active scroll scene. Expose normalized progress through CSS custom properties so motion remains easy to tune at each breakpoint.

This default is appropriate for the command core, interface geometry, opacity/scale transitions, layered parallax, pathway signals, and the Reality Gap network as long as the number of independently sequenced elements remains manageable.

### Framer Motion or Motion

Use Motion only if future scenes need React-aware presence, layout transitions, gesture states, or reusable spring behavior across component state changes. It is useful for discrete UI transitions, but it should not become the default scroll engine for every decorative layer. The current repository does not yet justify adding it.

### GSAP and ScrollTrigger

Consider GSAP with ScrollTrigger for a scene whose timeline has many coordinated labels, pinned phases, reversible scrubbing, and cross-scene handoffs that become fragile in custom code. It is the strongest candidate for the opening-to-Reality-Gap portal if that transition evolves into a dense multi-phase camera sequence. Keep it scene-scoped, respect native scroll, use `matchMedia` for separate mobile choreography, and verify cleanup under React lifecycle behavior. Do not add it merely to animate opacity and transforms.

### Native CSS scroll-driven animation

Use `scroll-timeline`, `view-timeline`, and `animation-range` as progressive enhancement for simple, local transforms, opacity, masks, or progress indicators where the project's supported-browser matrix proves reliability. Provide a static or lightweight JavaScript fallback. Avoid making a critical multi-scene narrative depend solely on support that has not been tested across target iOS Safari and Chromium versions.

### SVG

SVG is the preferred medium for GAC pathways, system diagrams, masks, line drawing, nodes, and precise interface geometry. Keep DOM complexity bounded, animate groups when possible, and use SVG filters sparingly. Provide accessible text outside the graphic rather than encoding essential copy into paths.

### Image sequences

Use an image sequence only when a photographic or materially complex transformation cannot be produced credibly with layered DOM/SVG. Before adopting one, prototype mobile memory use, decoded frame cost, delivery size, seeking behavior, and dropped frames. Use responsive frame dimensions, modern formats, bounded preloading, and a reduced-motion poster/final state. A sequence should be reserved for a signature moment, not background ambience.

### Video

Use video for autonomous atmospheric material, pre-rendered lighting, or a non-interactive cinematic plate when its compression is substantially more efficient than an image sequence. It is not ideal for precise reversible scroll scrubbing across browsers. Use muted inline playback, posters, explicit dimensions, visibility-based play/pause, and a meaningful static fallback.

### Canvas

Use 2D canvas for a large number of dynamic signals, lines, or particles only after SVG/DOM profiling demonstrates a bottleneck. Canvas requires a separate accessible semantic layer, explicit pixel-ratio caps, resize handling, visibility pausing, and deterministic reduced-motion output. Random particles without narrative purpose are prohibited.

### React Three Fiber

Do not use React Three Fiber by default. Adopt it only if a core branded object requires true camera movement, occlusion, material response, or spatial transformation that cannot be achieved convincingly with 2.5D layers or pre-rendered media. Any proposal must include a mobile performance prototype, asset and shader budgets, context-loss handling, loading and reduced-motion fallbacks, and evidence that the 3D communicates business meaning.

### Smooth-scrolling libraries

Do not add a smooth-scrolling library for polish alone. Native scrolling preserves platform expectations, accessibility, input behavior, browser restoration, and performance. A library would be considered only if a verified narrative requirement cannot be met natively and it passes touch, keyboard, reduced-motion, anchor, history, and nested-scroll testing. It must never trap or hijack scroll.

### Intersection Observer

Use Intersection Observer to activate scenes shortly before entry, pause them after exit, lazy-load expensive media, and avoid global work. It is not precise enough to drive continuous choreography by itself.

### `requestAnimationFrame`

Use `requestAnimationFrame` to batch scroll reads and visual writes once per frame. Keep a single active scheduler rather than one uncoordinated listener per layer. Cache stable measurements, recompute on resize/orientation/font changes, prefer passive input listeners, and stop scheduling when no scene is active.

### Modern viewport units

Use `svh` for stable minimum compositions that must not jump with browser chrome, `dvh` where a stage should track the currently visible viewport, and `lvh` only when the expanded viewport is intentionally required. Combine these with safe-area insets and test real browser-bar transitions. Avoid assuming `100vh` equals the usable mobile viewport.

### Recommended decision path

1. Prototype each scene with React, CSS custom properties, SVG, Intersection Observer, and a small animation-frame progress controller.
2. Validate the static, reduced-motion, and mobile versions before increasing motion fidelity.
3. Profile the rendered scene on representative mobile hardware.
4. Introduce GSAP/ScrollTrigger only for a proven multi-phase timeline problem.
5. Introduce canvas, image sequences, video, or React Three Fiber only for a signature visual whose narrative value exceeds its delivery and runtime cost.

The likely initial approach for GAC is therefore **native CSS/SVG plus a small requestAnimationFrame scroll controller**, with **GSAP/ScrollTrigger held in reserve for the command-core portal and other genuinely complex pinned timelines**. Motion, canvas, video, image sequences, and 3D remain opt-in tools rather than architectural defaults.

## Sources reviewed

- [Mercury public homepage](https://mercury.com/), reviewed July 17, 2026
- Current GAC repository structure and production dependencies, reviewed July 17, 2026

