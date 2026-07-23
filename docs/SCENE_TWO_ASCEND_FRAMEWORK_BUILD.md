# Gent Ascend Collective — Scene Two Build Document

## Ascend Framework / Four Pillars Command Core

**Document purpose:** Production specification and implementation prompt for rebuilding Scene Two of the Gent Ascend Collective homepage.

**Project:** `gac-website`  
**Stack:** Next.js 16, React 19, strict TypeScript  
**Primary approval viewport:** mobile, beginning at 390px wide  
**Design direction:** cinematic, premium, controlled, intelligent, dimensional  
**Last prepared:** July 23, 2026

---

## 1. Project context

The Gent Ascend Collective homepage is intended to behave as a continuous cinematic business-transformation journey. Scene One is the company arrival. Scene Two is the Ascend Framework: a four-part system that should reveal how GAC turns ambition into coordinated business movement.

Scene Two must not feel like a conventional feature section, accordion, carousel, tab panel, or collection of cards. Its job is to make the visitor feel that one connected operating system is actively recalibrating around four disciplines.

The current local implementation places framework markup, state, copy, and scroll logic inside `components/hero/Hero.tsx`. It uses `app/globals.css` for multiple accumulated styling layers. The current node taxonomy in the code is Identity, Presence, Intelligence, and Infrastructure. This build direction supersedes that presentation at the top level: the four visible framework states are **Command, Create, Operate, and Expand**.

The project currently includes these relevant assets:

- `/public/logo.png` — the approved Gent Ascend Collective company emblem.
- `/public/hero-icon.png` — a separate circular system-style asset.
- `/public/bc-icon.png` — the Business Core asset for a later business-system chapter.

The company emblem must remain correctly identified. Do not use `/bc-icon.png` as the company logo. Scene Two should inherit the approved `/logo.png` emblem from the Scene One transition and turn its surrounding system into the command core. The raster emblem may be supported by code-native rings, ports, pathways, light, and architecture, but it must not be distorted, crudely cropped, or recreated.

Relevant current files:

- `components/hero/Hero.tsx`
- `components/OperationalComplexity.tsx`
- `components/TransformationScene.tsx`
- `app/page.tsx`
- `app/globals.css`
- `docs/EXPERIENCE_NORTH_STAR.md`
- `BUILD_STATUS.md`

The existing Experience North Star remains applicable: native reversible scroll, mobile-first composition, purposeful motion, isolated semantic scenes, lifecycle control, designed reduced motion, and a visual handoff between scenes.

---

## 2. Current problems to solve

### 2.1 The scene is structurally mixed with the opening

The current framework is rendered inside `Hero.tsx`, so Scene One and Scene Two are not truly separate chapters. This makes scene boundaries fragile and encourages opening copy, the framework, the core, and the next scene to compete inside one long sticky container.

### 2.2 The mobile composition does not establish the entire system

The four pillars are positioned like corner modules around a large center asset. On mobile, they become clipped, pushed toward unsafe edges, or separated so widely that the visitor cannot read the complete framework at a glance.

All four pillars must remain visible, recognizable, and legible during the active framework sequence. An inactive pillar may dim, but it must not disappear.

### 2.3 The interaction behaves like a dressed-up accordion

The current pattern is effectively:

1. Scroll to a threshold.
2. Highlight one label.
3. Replace a paragraph.

That logic is serviceable, but the visual consequence is too small. The active discipline must recalibrate the whole scene: pathway, core, background architecture, lighting, node geometry, copy, and progress.

### 2.4 The center emblem dominates without carrying the narrative

The center is visually heavy, but it does not communicate enough changing system behavior. It must become a living command core whose mechanics visibly respond to the selected discipline.

### 2.5 The content treatment still feels like a card

The large boxed framework brief creates a box-on-box template appearance. It competes with the system instead of feeling integrated into it.

### 2.6 The current taxonomy does not match this approved direction

The visible states in this rebuild are:

1. Command
2. Create
3. Operate
4. Expand

Do not silently retain Identity, Presence, Intelligence, and Infrastructure as the primary node labels. Those legacy concepts may inform subordinate language where useful, but the four visible controls, phase labels, progress states, and system reactions must use Command, Create, Operate, and Expand.

### 2.7 Styling history creates override risk

`app/globals.css` contains several generations of overlapping opening/framework rules. Adding another late override without removing obsolete framework styling will make the scene brittle. The implementation must replace or cleanly retire the old Scene Two rules and use one namespaced, authoritative style system.

---

## 3. Approved experience direction

Rebuild Scene Two as a **living Ascend Framework command core**.

The visitor enters a full-viewport system chamber. The GAC emblem remains the visual point of continuity from Scene One. Four compact nodes surround it in a deliberate cross/diamond:

- **Command** — above the core
- **Create** — right of the core
- **Operate** — below the core
- **Expand** — left of the core

All four nodes remain visible. Four pathways connect them to the center. Scroll advances through four controlled phases. During each phase, one pathway routes energy outward, the active node gains presence, the core mechanically realigns, the background architecture responds, and integrated editorial copy explains the business meaning.

After Expand, the system enters a distinct completion state:

- all four pathways illuminate;
- all four nodes resolve to equal strength;
- the core acknowledges the complete framework;
- the environment becomes balanced and ordered;
- the line “Four disciplines. One connected transformation system.” resolves as the payoff;
- the complete system creates the visual handoff into the next scene.

The experience should feel like a precision instrument calibrating, not a slide deck changing pages.

### Experience principles

- One command core, not four disconnected cards.
- Whole-scene response, not a label plus paragraph swap.
- Readable restraint, not a noisy dashboard.
- Architectural depth, not generic glow.
- Native scroll, not scroll hijacking or forced snapping.
- Mobile recomposition, not desktop shrinkage.
- A distinct completion payoff, not a fifth tab.
- A designed handoff, not a hard rectangular section seam.

---

## 4. Scene architecture and component boundary

Scene Two must become its own semantic section and implementation unit.

Recommended structure:

```text
app/page.tsx
├── Hero                         // Scene One: company arrival only
├── AscendFrameworkScene         // Scene Two: four-pillar command core
├── OperationalComplexity        // next chapter
└── TransformationScene
```

Recommended implementation location:

- `components/AscendFrameworkScene.tsx`

If the component becomes too large, use a small colocated folder:

- `components/ascend-framework/AscendFrameworkScene.tsx`
- `components/ascend-framework/FrameworkCore.tsx`
- `components/ascend-framework/FrameworkNodes.tsx`
- `components/ascend-framework/frameworkContent.ts`

Do not fragment the feature into many tiny files unless the split creates clear ownership.

### Required boundary behavior

- `Hero.tsx` owns only Scene One and its exit handoff.
- `AscendFrameworkScene` owns its scroll track, sticky stage, active phase, controls, progress, copy, completion, and exit.
- Scene Two must not render inside the Scene One sticky wrapper.
- Scene Two must not be visible in the initial Scene One viewport.
- The end state of Scene One and the opening state of Scene Two must agree on emblem position, scale, light direction, and background color.
- The Scene Two exit must agree with the receiver state in `OperationalComplexity`.
- Remove the obsolete Scene Two markup from `Hero.tsx`; do not merely hide it.
- Remove or consolidate obsolete `.opening-framework*` rules that no longer have an owner.
- Use a new, namespaced class family such as `.ascend-framework-*` to prevent cascade collisions.

---

## 5. Exact mobile composition

Mobile is the authoritative composition. Approve 390px first, then verify 375px, 430px, and 320px.

### 5.1 Sticky stage

- Scene track: approximately `560svh` to `620svh`, tuned through rendered testing.
- Sticky stage: `position: sticky; top: 0; min-height: 100svh; height: 100dvh`.
- Clip decorative overflow at the stage level without clipping focus outlines or semantic content.
- Respect `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)`.
- Keep native document scroll. No wheel interception, touch interception, mandatory snap, or body locking.

### 5.2 Vertical zones at 390px

The sticky stage should read as three coordinated zones:

1. **Orientation zone:** compact eyebrow/title near the safe top.
2. **System zone:** centered command core with all four nodes and pathways in the upper-middle.
3. **Editorial zone:** active phase copy and progress in the lower portion, without a containing card.

Target proportions:

- Orientation zone: roughly the top 10%–17% of the usable viewport.
- System zone: roughly 17%–63%.
- Editorial zone: roughly 66% to the safe bottom.

These percentages are tuning guides, not hard layout values. Use grid rows, `clamp()`, and short-height queries rather than absolute pixel-only placement.

### 5.3 Command core

- Center the emblem in the system zone.
- At 390px, target a core diameter around `clamp(148px, 42vw, 184px)`.
- Keep the actual `/logo.png` image fully visible with `object-fit: contain`.
- Put animation on code-native wrappers and rings, not destructive transforms on the raster.
- Keep the emblem’s central detail crisp. Do not enlarge it beyond the source resolution required for the rendered size.
- The core may move a few pixels or rotate mechanical rings, but it must not drift out of the stable visual center.

### 5.4 Four-node layout

Use a compact cross/diamond close to the core:

- Command: top center
- Create: right center
- Operate: bottom center
- Expand: left center

At all mobile target widths:

- all four labels are visible at once;
- no label touches or crosses the viewport edge;
- no node is behind the editorial copy;
- no node is clipped by browser chrome;
- each node has a minimum interactive target of 44×44 CSS pixels;
- primary label text should generally remain at least 10px–11px with clear tracking and strong contrast;
- node widths should be content-aware but compact, generally 84px–108px on standard mobile;
- node-to-core distance should be visually connected, not stretched to the screen corners.

The nodes should feel engineered and icon-led, but not like four rectangular cards. Favor small labels, a precise icon, a number or state mark, clipped details, and restrained material edges. Avoid heavy opaque backgrounds.

### 5.5 Pathways

- Use one responsive SVG overlay aligned to the system zone.
- Path endpoints must land on visible ports in the core and nodes.
- Inactive pathways remain faintly visible so the system is always understandable.
- The active pathway illuminates from the center outward.
- Path geometry must be recalculated by responsive viewBox/layout rules rather than using desktop coordinates cropped on mobile.
- Do not use long horizontal gold lines that look decorative but disconnected.

### 5.6 Editorial copy

The copy is embedded in the chamber, not placed in a card.

Use:

- a subtle top rule or short gold locator line;
- a small uppercase phase label;
- a refined display headline;
- one restrained paragraph;
- three capability terms;
- a textual phase indicator such as `01 / 04`;
- a minimal four-segment progress marker.

Do not use:

- a full border;
- a filled rectangular panel;
- heavy shadow;
- a glass card;
- duplicated scene title;
- more than one paragraph per phase on mobile.

Reserve stable vertical space for the longest approved copy so phase changes do not shift the system.

### 5.7 Short mobile heights

For heights below approximately 700px:

- reduce decorative architecture before reducing type legibility;
- reduce the core modestly;
- tighten the node radius;
- shorten copy only if an approved shorter version exists;
- keep all four nodes, the active headline, progress, and the minimum touch targets;
- never solve the layout by hiding inactive pillars.

---

## 6. Exact tablet and desktop composition

Desktop expands the same system; it does not invent a different story.

### Tablet

- Preserve a centered system with the editorial area either below or in a narrow side column depending on available height.
- Increase node spacing and core scale modestly.
- Keep all four nodes within the visual system’s own bounded field, not at browser corners.
- Maintain readable copy without turning the section into a two-column feature grid.

### Desktop

Use a restrained asymmetric composition:

- Left editorial column: approximately 34%–40% of usable width.
- Right system field: approximately 60%–66%.
- Core target: roughly 320px–430px depending on viewport height.
- Four nodes remain in a cross/diamond around the core inside the system field.
- Copy aligns vertically with the core’s center or lower third, not with the top browser edge.
- Use expanded negative space and more environmental depth.
- Add peripheral engineering marks, faint perspective architecture, and pointer-responsive light only as optional atmosphere.
- Essential meaning must not depend on hover or pointer position.

At wide and ultrawide sizes:

- cap the composition width;
- do not push pillars to the far corners;
- do not scale the core indefinitely;
- use added space for depth and atmosphere rather than longer travel distances.

---

## 7. Pillar interaction states

Use a typed data model and a typed visual state:

```ts
type FrameworkPhase =
  | "intro"
  | "command"
  | "create"
  | "operate"
  | "expand"
  | "complete"
  | "exit";
```

Each pillar must change the entire system while remaining part of one visual language.

### 7.1 Command — top node

**Business meaning:** Command creates direction. It aligns vision, priorities, leadership decisions, and the next best move.

**Suggested editorial content:**

- Label: `COMMAND`
- Headline: `Command turns ambition into aligned direction.`
- Copy: `Clear priorities give the business a decisive center—so leadership, decisions, and action move toward the same outcome.`
- Capability terms: `DIRECTION / DECISIONS / ALIGNMENT`

**System response:**

- The top pathway ignites from core to node.
- A central vertical gold axis sharpens through the chamber.
- Inner rings rotate into alignment and pause with a precise lock.
- The core’s brightest internal point moves upward.
- Background architecture becomes more symmetrical and directional.
- The Command node lifts or expands slightly.
- Other nodes dim, but remain fully legible.

### 7.2 Create — right node

**Business meaning:** Create turns direction into a clear, valuable presence across brand, message, experience, and customer touchpoints.

**Suggested editorial content:**

- Label: `CREATE`
- Headline: `Create makes the value impossible to miss.`
- Copy: `Identity, message, digital presence, and customer experience work together so the business is recognized for what makes it matter.`
- Capability terms: `IDENTITY / PRESENCE / EXPERIENCE`

**System response:**

- The right pathway illuminates outward.
- The core aperture opens slightly toward the right.
- A restrained gold reflection travels across the housing.
- Blue light widens into a controlled outward field.
- Background lines extend toward customer-facing space.
- The Create node expands slightly and gains a warmer edge.
- Do not turn this state pink, purple, or stylistically separate from the master palette.

### 7.3 Operate — bottom node

**Business meaning:** Operate turns capability into dependable execution through connected workflows, information, tools, and accountability.

**Suggested editorial content:**

- Label: `OPERATE`
- Headline: `Operate turns capability into control.`
- Copy: `Connected systems and repeatable workflows give the team visibility, consistency, and the confidence to execute without friction.`
- Capability terms: `SYSTEMS / EXECUTION / CONTROL`

**System response:**

- The bottom pathway illuminates and feels structurally load-bearing.
- Housing segments tighten and lock.
- Fine grid lines resolve into a more ordered pattern.
- Core motion slows and becomes mechanically stable.
- Deep-blue signals route downward and return to center.
- The Operate node gains weight through structure, not excessive glow.

### 7.4 Expand — left node

**Business meaning:** Expand turns a working business into durable growth by increasing reach, opportunity, capacity, and strategic leverage.

**Suggested editorial content:**

- Label: `EXPAND`
- Headline: `Expand turns momentum into durable growth.`
- Copy: `With direction, presence, and operations working together, the business can reach farther, respond faster, and grow without losing control.`
- Capability terms: `REACH / OPPORTUNITY / SCALE`

**System response:**

- The left pathway illuminates and sends a measured pulse outward.
- The outer field broadens without moving the core off center.
- Peripheral architecture opens to reveal greater depth.
- The core’s outer ring rotates into a wider alignment.
- A restrained upward trajectory becomes visible in the environment.
- The Expand node gains slightly more surrounding space, not a larger card.

### 7.5 Complete state

The complete state is a separate visual payoff, not another selected node.

**Editorial content:**

- Label: `FRAMEWORK COMPLETE`
- Headline: `Four disciplines. One connected transformation system.`
- Copy: `Command, Create, Operate, and Expand now work as one direction for the business.`
- Capability terms: `COMMAND / CREATE / OPERATE / EXPAND`

**System response:**

- All four pathways illuminate together.
- Four synchronized pulses travel from center to nodes, then return.
- All nodes resolve to equal emphasis.
- Inner and outer rings briefly counter-rotate, then settle.
- Core light balances blue depth and gold precision.
- Background architecture completes a coherent radial/axial structure.
- The progress marker resolves from four separate segments into one continuous line or ring.
- Hold the completed state long enough to understand before beginning the exit.

---

## 8. Scroll architecture

Use one Scene Two scroll track containing one sticky full-screen stage.

Recommended normalized timeline:

| Progress | State | Purpose |
|---|---|---|
| `0.00–0.10` | Intro / receiver | Receive the emblem and light from Scene One; establish all four nodes |
| `0.10–0.27` | Command | Activate the top pathway and Command system state |
| `0.27–0.44` | Create | Recalibrate from Command to Create |
| `0.44–0.61` | Operate | Recalibrate from Create to Operate |
| `0.61–0.78` | Expand | Recalibrate from Operate to Expand |
| `0.78–0.92` | Complete | Illuminate the entire framework and resolve the message |
| `0.92–1.00` | Exit / handoff | Convert the complete system into the next scene’s receiver |

Tune the exact ranges in the rendered browser. Do not scatter threshold numbers across JSX and CSS. Keep ranges in one typed configuration.

### Scroll behavior requirements

- Continuous progress should be written to CSS custom properties.
- React state should change only when semantic phase or interaction state changes.
- Reverse scrolling must reconstruct every state deterministically.
- Fast scrolling must not leave stale active nodes or copy.
- Refreshing at an intermediate scroll position must render the correct phase.
- The scene must not rely on Intersection Observer thresholds for continuous progress.
- Use Intersection Observer only to mark the scene active and pause work offscreen.
- Scroll listeners must be passive and frame-batched with `requestAnimationFrame`.
- Do not add a motion dependency for this scene unless an existing library is already present and clearly necessary. The current project does not require one.

### Direct interaction

The four nodes should be real buttons.

- Tapping or clicking a node should move the document to that node’s corresponding scroll phase, keeping scroll as the source of truth.
- Use smooth scrolling only when reduced motion is not requested.
- Keyboard activation must provide the same result.
- `Escape` may return to the scroll-authoritative state if a temporary manual inspection mode exists.
- Do not allow manual state and scroll state to disagree.
- Do not announce every scroll threshold through a live region.

---

## 9. Animation choreography

### 9.1 Intro

- Receive the Scene One emblem without a hard cut.
- The core housing resolves around it.
- Four faint pathway traces and four compact nodes become visible.
- The title and short orientation copy settle.
- Avoid replaying a large entrance animation if the user arrives mid-page.

### 9.2 Between phases

Each transition should feel like recalibration:

1. Current copy reduces in opacity and moves no more than 8px–14px.
2. Current pathway releases its brightest energy while remaining structurally visible.
3. Core rings rotate or realign through a short controlled movement.
4. Background architecture changes emphasis.
5. The next pathway illuminates from center outward.
6. The next node expands approximately 2%–5%.
7. New copy resolves.

The entire transition should feel deliberate at slow scroll and stable during fast or reverse scroll.

### 9.3 Core motion

Use layered code-native mechanics around the raster emblem:

- outer housing ring;
- segmented calibration ring;
- four pathway ports;
- inner light field;
- restrained reflection;
- optional fine radial marks.

Animate transforms and opacity. Keep rotations subtle. Avoid constant high-speed spinning, excessive glow, pulsing every element, or motion that makes the command core look like a game HUD.

### 9.4 Pathway signal

- Base pathway: always faintly visible.
- Active pathway: brighter blue/gold route with one restrained traveling signal.
- Completion: four synchronized signals, not four unrelated loop speeds.
- Signals must pause offscreen and under reduced motion.

### 9.5 Background response

The environment remains one chamber. It changes emphasis by phase:

- Command: axial order and centered direction.
- Create: outward expression and refined warmth.
- Operate: structural reinforcement and grid clarity.
- Expand: depth, horizon, and outward/upward possibility.
- Complete: balanced geometry and unified illumination.

Do not replace the background per phase or introduce unrelated colors.

### 9.6 Exit

After the completion hold:

- editorial copy recedes first;
- nodes contract slightly toward the core or reduce into pathway endpoints;
- four pathways converge into one controlled axis or receiver shape;
- the core light narrows or transfers into the next scene;
- the next scene receives the same position, color, and motion direction;
- avoid an oversized raster zoom, full blackout, or ordinary section fade.

---

## 10. Visual system

### Color

- Obsidian foundation: near-black with subtle material variation.
- Deep blue: spatial depth, intelligence, signal travel, internal energy.
- Graphite: housing, architecture, non-active structure.
- Luxury gold: precision, active edges, decisive direction, completion.
- Warm ivory: primary editorial type.
- Muted stone/gray: secondary copy and inactive labels.

Gold must be selective. Blue should provide depth. Glow should reveal system behavior rather than cover weak contrast.

### Materials

- Brushed or machined graphite.
- Restrained metallic gold edges.
- Dark glass only as an internal optical surface, not a glassmorphism card.
- Fine architectural lines and radial engineering marks.
- Controlled haze and vignette.
- Very subtle particles or dust only if they remain subordinate and inexpensive.

### Typography

- Preserve the project’s refined display serif for primary statements.
- Use the sans-serif system for labels, progress, and capability terms.
- Keep hierarchy clear: phase label, headline, copy, capability terms.
- Avoid tiny low-contrast uppercase copy.
- Avoid duplicating the scene title inside the editorial area.

### Iconography

- Use a coherent custom line-icon family for the four nodes.
- Icons must remain legible at mobile size.
- Keep stroke weight and geometry consistent.
- Decorative icons are `aria-hidden`; button text carries the accessible name.
- Do not import a generic icon package solely for these four symbols.

### What to avoid

- Generic SaaS card grids.
- Four oversized corner panels.
- Neon cyberpunk colors.
- A dashboard full of numbers.
- Indiscriminate bloom and blur.
- Long flat gold divider lines.
- Huge raster scaling.
- Hover-only information.
- Continuous motion with no narrative purpose.
- A giant content card under the diagram.

---

## 11. Content treatment

The editorial area must remain stable while its content changes.

Recommended semantic structure:

```html
<div class="ascend-framework__editorial">
  <div class="ascend-framework__meta">
    <p>COMMAND</p>
    <p>01 / 04</p>
  </div>
  <h2>Command turns ambition into aligned direction.</h2>
  <p>...</p>
  <ul aria-label="Command capabilities">...</ul>
  <div aria-hidden="true">progress segments</div>
</div>
```

Requirements:

- Use one persistent heading element; update its text by semantic phase.
- Keep copy in real HTML.
- Reserve space for the longest content.
- Use an unordered list for capability terms if they carry meaning.
- Announce changes politely only when initiated by direct button interaction.
- Do not use keys that unnecessarily destroy and recreate the whole editorial subtree on every scroll threshold.
- Keep text concise enough to read during a held phase.

---

## 12. Responsive requirements

Validate at:

- 320px width
- 375px width
- 390px width
- 414px width
- 430px width
- 768px width
- 1024px width
- 1280px and common laptop height
- 1440px and wide desktop
- at least one short mobile height
- mobile portrait and landscape

At every size:

- all four pillars remain visible and identifiable;
- active copy is readable without overlapping the system;
- there is no horizontal scrolling;
- the sticky stage does not jump when mobile browser bars change;
- safe areas are respected;
- focus outlines are not clipped;
- the core maintains aspect ratio and image quality;
- the next scene does not bleed into the sticky stage;
- the complete state is clearly stronger than any single pillar state;
- the exit remains continuous.

Responsive layout must use topology and spacing changes, not uniform scale-down alone.

---

## 13. Accessibility requirements

- Scene Two is a semantic `<section>` with a stable accessible heading.
- Four nodes are native `<button type="button">` elements.
- Use `aria-pressed` or another accurate selected-state pattern.
- Each button has a visible text label.
- Focus order follows Command, Create, Operate, Expand, then editorial/next content.
- Focus indicators meet contrast requirements and are not clipped.
- Touch targets are at least 44×44 CSS pixels.
- Meaning is not communicated by color alone; active states also use text, geometry, weight, and pressed state.
- Decorative SVG, pathways, particles, rings, and background architecture use `aria-hidden="true"`.
- The active phase and `01 / 04` progress are available as text.
- Avoid automatic live-region announcements during ordinary scrolling.
- Ensure text/background contrast remains credible over every animated state.
- The scene remains understandable with CSS animation disabled.

### Reduced motion

`prefers-reduced-motion: reduce` is a designed alternate mode:

- remove the long sticky scrub and large spatial transitions;
- show the core in its complete state;
- show all four nodes;
- present the four editorial summaries in document order or through directly operable buttons without automatic travel;
- disable traveling signals, continuous ring rotation, parallax, and large scale changes;
- use short opacity changes or immediate state changes;
- preserve the complete framework message and the transition to the next section;
- do not hide content merely because animation is disabled.

---

## 14. Performance requirements

- No new animation, canvas, WebGL, or icon dependency unless absolutely required and justified.
- Use one passive, `requestAnimationFrame`-batched progress loop for this scene.
- Store continuous progress in CSS custom properties rather than React state.
- Update React only when the semantic phase changes.
- Pause autonomous animation when the scene is offscreen or the document is hidden.
- Prefer transform and opacity.
- Keep SVG filters small and tightly bounded.
- Avoid full-screen continuously animated blur.
- Use responsive image sizing and reserve dimensions to prevent layout shift.
- Only Scene One’s required opening asset should be eagerly prioritized. Load Scene Two responsibly before it becomes visible.
- Avoid unnecessary rerenders caused by rebuilding arrays, callbacks, or large decorative trees on every phase.
- Test on a representative mid-range phone, not only a desktop development machine.
- Check console, hydration, and memory behavior after repeated forward/reverse scroll.

---

## 15. Implementation constraints

- Preserve Next.js 16, React 19, and strict TypeScript.
- Preserve native browser scrolling.
- Preserve the premium obsidian/deep-blue/luxury-gold brand direction.
- Preserve Scene One’s corrected use of `/logo.png`.
- Do not use `/bc-icon.png` as the GAC company emblem.
- Do not redesign `OperationalComplexity` or later chapters beyond the minimum receiver adjustment required for a clean handoff.
- Do not add unnecessary dependencies.
- Do not convert the scene to a video, image sequence, canvas, or WebGL implementation.
- Do not recreate the approved company emblem in CSS or SVG.
- Do not patch the current mobile issue only by shrinking nodes.
- Do not leave duplicate framework markup hidden in `Hero.tsx`.
- Do not add another conflicting tail section of CSS. Remove or consolidate obsolete rules.
- Keep content and state definitions typed and centralized.
- Keep the four phase names, copy, capability terms, timeline ranges, and node placement data maintainable.
- Comment only where choreography ownership or handoff logic is non-obvious.

---

## 16. Validation checklist

### Structure

- [ ] Scene One and Scene Two are separate semantic sections/components.
- [ ] Scene Two is not rendered inside the Scene One sticky wrapper.
- [ ] Old Scene Two markup is removed from `Hero.tsx`.
- [ ] Old framework CSS is removed or consolidated.
- [ ] `app/page.tsx` renders Scene Two in the correct sequence.
- [ ] No Scene Two content appears in the initial Scene One viewport.

### Assets and brand

- [ ] `/logo.png` remains the approved GAC emblem.
- [ ] `/bc-icon.png` is not used as the company emblem.
- [ ] The emblem is not cropped, distorted, or over-scaled.
- [ ] The visual system remains obsidian, deep blue, graphite, luxury gold, and ivory.

### Mobile composition

- [ ] Command, Create, Operate, and Expand are all visible at once at 320, 375, 390, 414, and 430px.
- [ ] All four labels remain legible.
- [ ] No node touches the browser edge or overlaps editorial copy.
- [ ] Minimum touch targets are preserved.
- [ ] No horizontal overflow exists.
- [ ] Short-height layouts preserve core meaning.
- [ ] Dynamic browser bars and safe areas do not break the stage.

### Interaction and narrative

- [ ] Scroll activates Command, Create, Operate, and Expand in the approved order.
- [ ] Every phase changes the pathway, core, node, background, copy, and progress.
- [ ] Inactive nodes remain visible.
- [ ] Direct node activation agrees with scroll position.
- [ ] Reverse scroll reconstructs states correctly.
- [ ] Fast scroll does not leave stale state.
- [ ] Refresh at an intermediate position renders the correct phase.
- [ ] Completion lights all four pathways and presents a clear whole-system payoff.
- [ ] The completed state holds before exit.

### Content

- [ ] No large boxed content card remains.
- [ ] Editorial copy uses a top rule/locator, label, headline, paragraph, terms, and progress.
- [ ] Copy does not cause layout shift between phases.
- [ ] No headline or framework message is duplicated.
- [ ] Primary node labels are Command, Create, Operate, and Expand.

### Accessibility

- [ ] Nodes are native buttons with visible labels and selected state.
- [ ] Focus order and focus indicators work.
- [ ] Essential meaning is not hover-dependent or color-only.
- [ ] Decorative visuals are hidden from assistive technology.
- [ ] Scroll does not flood a live region.
- [ ] Reduced motion presents the entire framework without long scrubbed motion.
- [ ] The section remains understandable with animation disabled.

### Performance and quality

- [ ] No unnecessary dependency was added.
- [ ] Continuous scroll work is frame-batched.
- [ ] Continuous progress does not trigger React renders.
- [ ] Offscreen and hidden-document animation pauses.
- [ ] Large filters and blur areas are restrained.
- [ ] No layout shift, hydration error, console error, or horizontal scroll occurs.
- [ ] `npm run lint` passes.
- [ ] `npx tsc --noEmit` passes.
- [ ] `npm run build` passes.
- [ ] Full rendered lifecycle is reviewed at mobile, tablet, and desktop widths.

---

## 17. Comprehensive Codex implementation prompt

Copy the entire prompt below into Codex:

```text
Rebuild Scene Two of the Gent Ascend Collective homepage as a premium, mobile-first Ascend Framework command core. Implement the change directly in the local `gac-website` project.

THIS IS A FULL SCENE-TWO REBUILD, NOT A SPACING PATCH.

PROJECT
- Stack: Next.js 16, React 19, strict TypeScript.
- Primary approval viewport: 390px mobile.
- Existing relevant files:
  - components/hero/Hero.tsx
  - components/OperationalComplexity.tsx
  - components/TransformationScene.tsx
  - app/page.tsx
  - app/globals.css
  - docs/EXPERIENCE_NORTH_STAR.md
  - BUILD_STATUS.md
- Relevant assets:
  - /public/logo.png is the approved Gent Ascend Collective company emblem.
  - /public/hero-icon.png is a separate system-style asset.
  - /public/bc-icon.png is the Business Core asset for a later business-system chapter.
- Do not use /bc-icon.png as the GAC company emblem.
- Preserve the corrected Scene One company-logo usage and image quality.

SOURCE OF TRUTH
- Use the latest supplied screenshot and the requirements below as the visual and behavioral source of truth.
- The current four-pillar experience does not fit cleanly on mobile and behaves like a dressed-up accordion.
- The replacement must feel like one living precision system recalibrating across four disciplines.
- The approved primary pillar labels and phase order are:
  1. Command
  2. Create
  3. Operate
  4. Expand
- Do not silently retain Identity, Presence, Intelligence, and Infrastructure as the primary node labels. They may inform subordinate language, but the visible nodes, phase labels, progress, and system states must use Command, Create, Operate, and Expand.

FIRST: AUDIT THE CURRENT IMPLEMENTATION
- Inspect Hero.tsx, page.tsx, globals.css, the next scene receiver, current scroll ranges, current framework markup, and all later CSS overrides.
- Identify every place Scene Two is currently embedded in Scene One.
- Identify obsolete `.opening-framework*` markup and accumulated CSS that would conflict with the rebuild.
- Confirm which asset is used at each scene.
- Run baseline lint, strict typecheck, and production build before editing.
- Preserve unrelated user work.

REQUIRED STRUCTURAL FIX
- Make Scene Two a separate semantic section and component.
- Hero.tsx must own Scene One only.
- Create a maintainable component such as `components/AscendFrameworkScene.tsx` or a small colocated `components/ascend-framework/` folder.
- Update app/page.tsx so the order is:
  Hero
  AscendFrameworkScene
  OperationalComplexity
  TransformationScene
- Remove obsolete Scene Two markup from Hero.tsx. Do not hide duplicate markup with opacity, visibility, overflow, or z-index.
- Remove or consolidate obsolete framework CSS. Do not append another conflicting override layer.
- Use one new namespaced style family such as `.ascend-framework-*`.
- Scene Two must not be visible in the initial Scene One viewport.
- The Scene One exit and Scene Two opening must agree on emblem position, scale, light direction, and background.
- The Scene Two exit must hand off cleanly to OperationalComplexity without redesigning that later scene.

APPROVED EXPERIENCE
- Build one sticky full-screen Ascend Framework chamber.
- Keep a centered command core based on the approved `/logo.png` emblem carried forward from Scene One.
- Support the raster emblem with code-native housing rings, ports, pathways, reflection, and internal light. Do not recreate or distort the emblem.
- Arrange four compact nodes in a close cross/diamond:
  - Command above
  - Create right
  - Operate below
  - Expand left
- All four nodes must remain visible and legible at the same time on mobile.
- Inactive nodes may dim but must remain identifiable.
- Connect every node to the core with a responsive SVG pathway.
- Each scroll phase must change the entire scene: active pathway, core mechanics, node treatment, background architecture, lighting, editorial copy, and progress.
- After Expand, create a distinct completion state in which all four pathways illuminate and the framework resolves as one system.
- Hold the complete state long enough to understand, then use the completed geometry/light as the transition into the next scene.

EXACT MOBILE COMPOSITION
- Treat 390px as authoritative, then verify 375px, 430px, and 320px.
- Use one scene track approximately 560svh–620svh, tuned in the rendered browser.
- Use a sticky stage with 100svh fallback and 100dvh behavior.
- Respect safe-area insets and dynamic browser bars.
- Organize the stage into:
  1. compact orientation/title zone near the safe top;
  2. centered system zone in the upper-middle;
  3. integrated editorial zone in the lower portion.
- At 390px, target a core around `clamp(148px, 42vw, 184px)`.
- Keep `/logo.png` fully visible with object-fit: contain.
- Keep nodes close to the core, generally 84px–108px wide on standard mobile.
- Preserve at least 44×44 CSS-pixel touch targets.
- Keep primary node labels at a legible size, generally at least 10px–11px.
- No node may touch the viewport edge, clip, overlap copy, or disappear behind browser chrome.
- Do not solve narrow layouts by hiding inactive pillars.
- For short-height phones, reduce decorative architecture first, then tighten radius/core scale modestly while preserving labels, headline, progress, and touch targets.
- No horizontal scrolling.

TABLET AND DESKTOP
- Expand the same system rather than creating a different story.
- Tablet may retain a centered stack or use a restrained side editorial area if height requires it.
- Desktop should use a controlled asymmetric layout: roughly 34%–40% editorial and 60%–66% system field.
- Target a desktop core around 320px–430px depending on viewport height.
- Keep nodes around the core inside the system field, not at browser corners.
- Cap wide layouts. Use extra space for environmental depth, not extreme travel distance.
- Pointer-responsive atmosphere may be added on desktop, but no essential meaning may depend on hover.

PILLAR CONTENT AND WHOLE-SCENE STATES

COMMAND
- Label: COMMAND
- Headline: “Command turns ambition into aligned direction.”
- Copy: “Clear priorities give the business a decisive center—so leadership, decisions, and action move toward the same outcome.”
- Terms: DIRECTION / DECISIONS / ALIGNMENT
- Visual response: top pathway ignites; central vertical gold axis sharpens; inner rings rotate into alignment and lock; core light moves upward; background becomes more directional and symmetrical.

CREATE
- Label: CREATE
- Headline: “Create makes the value impossible to miss.”
- Copy: “Identity, message, digital presence, and customer experience work together so the business is recognized for what makes it matter.”
- Terms: IDENTITY / PRESENCE / EXPERIENCE
- Visual response: right pathway illuminates outward; aperture opens slightly right; a restrained gold reflection travels across the housing; blue light widens; customer-facing architecture extends outward.

OPERATE
- Label: OPERATE
- Headline: “Operate turns capability into control.”
- Copy: “Connected systems and repeatable workflows give the team visibility, consistency, and the confidence to execute without friction.”
- Terms: SYSTEMS / EXECUTION / CONTROL
- Visual response: bottom pathway becomes structurally load-bearing; housing segments tighten; grid resolves; core motion stabilizes; deep-blue signals travel down and return.

EXPAND
- Label: EXPAND
- Headline: “Expand turns momentum into durable growth.”
- Copy: “With direction, presence, and operations working together, the business can reach farther, respond faster, and grow without losing control.”
- Terms: REACH / OPPORTUNITY / SCALE
- Visual response: left pathway illuminates; outer field broadens; peripheral architecture opens; outer ring moves to a wider alignment; restrained upward trajectory appears.

COMPLETE
- Label: FRAMEWORK COMPLETE
- Headline: “Four disciplines. One connected transformation system.”
- Copy: “Command, Create, Operate, and Expand now work as one direction for the business.”
- Terms: COMMAND / CREATE / OPERATE / EXPAND
- Visual response: all four pathways illuminate; synchronized signals travel out and return; all nodes resolve to equal strength; inner and outer rings briefly counter-rotate then settle; the progress marker resolves into one system; background architecture becomes balanced and complete.

EDITORIAL CONTENT TREATMENT
- Remove the giant boxed framework card.
- Use one integrated editorial area with:
  - a subtle top rule or short locator;
  - small uppercase phase label;
  - refined display headline;
  - one concise paragraph;
  - three capability terms;
  - textual phase progress such as 01 / 04;
  - a minimal four-segment progress marker.
- No full border, opaque card fill, heavy shadow, glass panel, or box-on-box treatment.
- Reserve space for the longest copy so phase changes do not shift the core.
- Use real semantic HTML.
- Do not duplicate the scene title or framework message.

SCROLL ARCHITECTURE
- Use one Scene Two track with one sticky stage and native reversible document scrolling.
- Recommended normalized ranges:
  - 0.00–0.10: intro/receiver
  - 0.10–0.27: Command
  - 0.27–0.44: Create
  - 0.44–0.61: Operate
  - 0.61–0.78: Expand
  - 0.78–0.92: complete
  - 0.92–1.00: exit/handoff
- Tune ranges after rendered testing.
- Keep all ranges in one typed configuration.
- Write continuous progress to CSS custom properties.
- Change React state only when semantic phase changes.
- Use one passive scroll listener batched through requestAnimationFrame.
- Use Intersection Observer only for scene activation and offscreen pausing, not continuous progress.
- Pause autonomous motion when offscreen or when the document is hidden.
- Reverse scroll, fast scroll, refresh mid-scene, resize, and orientation change must all produce deterministic correct state.
- Do not trap scroll, prevent default wheel/touch events, lock the body, or require scroll snapping.

DIRECT INTERACTION
- Make all four nodes native buttons.
- Tapping, clicking, or keyboard-activating a node should move the document to that node’s corresponding scroll phase so scroll remains the source of truth.
- Use smooth scrolling only when reduced motion is not requested.
- Use an accurate selected state such as aria-pressed.
- Do not let manual and scroll state disagree.
- Do not announce every automatic scroll phase through a live region.
- Announce a content change politely only when directly initiated by the user.

ANIMATION CHOREOGRAPHY
- The Scene One emblem should be visibly received by Scene Two, not hard-cut.
- Reveal faint base pathways and all four nodes during the intro.
- Between phases:
  1. current copy fades/moves only 8px–14px;
  2. current active signal releases while the base route remains;
  3. core rings mechanically realign;
  4. background architecture changes emphasis;
  5. next pathway illuminates from center outward;
  6. next node expands only 2%–5%;
  7. next copy resolves.
- Use subtle code-native rings, ports, field light, and reflection around the raster.
- Avoid fast spinning, constant large motion, indiscriminate pulsing, generic HUD behavior, and excessive glow.
- Base pathways stay faintly visible.
- Use one restrained signal on the active path.
- Completion uses four synchronized signals rather than unrelated loops.
- Exit order: copy recedes; nodes reduce toward pathway endpoints; four routes converge into a controlled receiver/axis; core light transfers into the next scene.
- Avoid oversized raster zoom, generic blackout, or an ordinary rectangular section fade.

VISUAL SYSTEM
- Palette: obsidian, graphite, deep midnight blue, selective luxury gold, warm ivory, muted stone.
- Materials: machined graphite, restrained gold edges, dark optical surfaces, fine architectural/radial marks, controlled haze and vignette.
- Gold indicates precision and active direction.
- Blue provides depth and energy.
- Glow reveals behavior; it must not replace contrast or structure.
- Preserve the project’s refined display serif and supporting sans-serif.
- Use one coherent custom line-icon family for the four nodes. Do not add an icon package for four symbols.
- Avoid generic SaaS cards, neon cyberpunk color, dashboard clutter, full-screen animated blur, and four oversized corner panels.

ACCESSIBILITY
- Scene Two is a semantic section with a stable accessible heading.
- Nodes are native button elements with visible labels and accurate selected state.
- DOM/focus order is Command, Create, Operate, Expand.
- Focus indicators are visible and not clipped.
- Touch targets are at least 44×44.
- Active meaning is not color-only.
- Decorative SVG, pathways, rings, particles, and architecture are aria-hidden.
- Expose phase and `01 / 04` progress as text.
- Do not flood assistive technology with automatic scroll announcements.
- The scene must remain understandable with animation disabled.

REDUCED MOTION
- Treat prefers-reduced-motion as a designed alternate mode.
- Remove the long sticky scrub and large spatial transitions.
- Present the core in a stable complete state with all four nodes visible.
- Make all four summaries available in document order or through direct buttons without automatic travel.
- Disable path travel, continuous ring rotation, parallax, and large scale changes.
- Use short fades or immediate state changes.
- Preserve the completion message and natural transition to the next section.
- Do not hide narrative content.

PERFORMANCE
- Do not add a new animation, canvas, WebGL, or icon dependency unless absolutely necessary and explicitly justified.
- Prefer transform and opacity.
- Keep SVG filters compact and tightly bounded.
- Avoid continuous large blur/filter animation.
- Reserve image dimensions and use correct responsive sizes.
- Do not trigger React renders for per-pixel scroll progress.
- Avoid unnecessary callback/data/tree recreation.
- Verify memory and state after repeated forward/reverse scroll.

IMPLEMENTATION CONSTRAINTS
- Keep strict TypeScript clean.
- Centralize typed phase data, ranges, copy, capability terms, and visual state.
- Preserve unrelated scenes and user changes.
- Do not redesign OperationalComplexity or later scenes beyond the minimum receiver adjustment needed for continuity.
- Do not recreate the company emblem.
- Do not leave hidden duplicate framework markup.
- Do not fix mobile only by shrinking the current layout.
- Do not append a new conflicting CSS override layer.
- Do not add unnecessary dependencies.

VALIDATION
Observe the complete scene lifecycle in a rendered browser at:
- 320px
- 375px
- 390px
- 414px
- 430px
- 768px
- 1024px
- 1280px laptop
- 1440px/wide desktop
- at least one short mobile height
- mobile portrait and landscape

At each relevant size, verify:
- initial entry from Scene One;
- all four pillars visible and legible;
- slow scroll through every phase;
- fast scroll;
- reverse scroll at every boundary;
- direct tap/click;
- keyboard and focus behavior;
- complete state;
- exit into OperationalComplexity;
- reduced motion;
- resize/orientation change;
- dynamic mobile browser bars and safe areas;
- no clipping, overlap, horizontal overflow, stale state, layout shift, console error, or hydration error.

Run and pass:
- npm run lint
- npx tsc --noEmit
- npm run build

DELIVERABLE
Implement the rebuild directly. When finished, report:
1. the root causes found;
2. the files changed;
3. the new scene/component structure;
4. how mobile keeps all four pillars visible;
5. the scroll-state architecture;
6. the visual response for each pillar;
7. reduced-motion and accessibility behavior;
8. performance safeguards;
9. exact validation completed;
10. any remaining rendered-device risk.

Do not claim rendered approval for any viewport or browser you could not actually observe.
```

