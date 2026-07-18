"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const beats = [
  ["Handoff", "The analyzed business moves forward without resetting."],
  ["Recognition", "The pattern is visible. Now the business can be redesigned around what growth actually requires."],
  ["Identity", "A clear identity gives every decision, message, and experience one direction."],
  ["Presence", "Every touchpoint begins expressing that direction with greater clarity and consistency."],
  ["Intelligence", "Disconnected information becomes insight the business can act on."],
  ["Infrastructure", "Workflows and systems turn that intelligence into reliable execution."],
  ["Integration", "Four connected disciplines begin operating as one business system."],
  ["Command", "The business gains the clarity, capability, and control to keep ascending."],
  ["Forward", "The experience is the evidence."],
] as const;

const ranges = [[0,.08],[.06,.19],[.17,.32],[.29,.44],[.41,.56],[.53,.68],[.65,.81],[.78,.94],[.91,1]] as const;
const nodes = [
  ["Customers",50,104,"primary outward"],["Team",128,56,"primary"],["Operations",270,62,"primary"],["Growth",340,120,"primary"],
  ["Website",38,267,"support touchpoint"],["Leads",106,354,"support touchpoint"],["Scheduling",202,382,"support operation"],["Marketing",300,352,"support touchpoint"],
  ["Finance",350,275,"support operation"],["Customer Data",362,202,"support information"],["Inventory",20,203,"tertiary operation"],["CRM",72,399,"tertiary information"],["Vendors",332,400,"tertiary operation"],
] as const;
const routes = [
  "M195 210C145 190 94 142 50 104","M195 210C176 145 151 89 128 56","M195 210C217 142 243 91 270 62","M195 210C252 190 304 155 340 120",
  "M50 104C41 160 36 217 38 267","M38 267C57 316 81 343 106 354","M195 210C177 280 179 340 202 382","M202 382C244 382 276 369 300 352",
  "M340 120C357 174 358 228 350 275","M340 120C357 150 364 177 362 202","M38 267C28 247 21 224 20 203","M106 354C93 374 81 390 72 399","M300 352C315 373 325 390 332 400"
] as const;

const clamp = (value: number) => Math.min(Math.max(value, 0), 1);

function useTransformationProgress(ref: React.RefObject<HTMLElement | null>, onBeat: (beat: number) => void) {
  useEffect(() => {
    const scene = ref.current; if (!scene) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, visible = true, last = -1;
    const render = () => {
      frame = 0; if ((!visible || document.hidden) && !reduced.matches) return;
      const box = scene.getBoundingClientRect();
      const progress = reduced.matches ? 1 : clamp(-box.top / Math.max(box.height - innerHeight, 1));
      scene.style.setProperty("--transformation-progress", progress.toFixed(4));
      ranges.forEach(([start,end], index) => scene.style.setProperty(`--transform-beat-${index}`, clamp((progress-start)/(end-start)).toFixed(4)));
      let next = ranges.findIndex(([start,end]) => progress >= start && progress < end); if (next < 0) next = 8;
      if (last >= 0 && next !== last) { const boundary = next > last ? ranges[next][0] : ranges[last][0]; if (Math.abs(progress-boundary) < .008) next = last; }
      if (next !== last) { last = next; onBeat(next); }
      scene.dataset.motion = reduced.matches ? "reduced" : "full";
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; scene.dataset.sceneActive = String(visible); if (visible) schedule(); }, { rootMargin:"15% 0" });
    const visibility = () => { if (!document.hidden) schedule(); };
    observer.observe(scene); addEventListener("scroll",schedule,{passive:true}); addEventListener("resize",schedule,{passive:true}); document.addEventListener("visibilitychange",visibility); reduced.addEventListener("change",schedule); schedule();
    return () => { observer.disconnect(); removeEventListener("scroll",schedule); removeEventListener("resize",schedule); document.removeEventListener("visibilitychange",visibility); reduced.removeEventListener("change",schedule); if(frame) cancelAnimationFrame(frame); };
  }, [ref,onBeat]);
}

function TransformationSystem() {
  return <div className="transformation-system" aria-hidden="true">
    <svg viewBox="0 0 390 430">
      <defs><linearGradient id="transformRoute" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#628da6" stopOpacity=".35"/><stop offset=".48" stopColor="#d5aa59"/><stop offset="1" stopColor="#7194a5" stopOpacity=".28"/></linearGradient><filter id="transformGlow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="1.4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g className="transformation-routes">{routes.map((route,index)=><path d={route} className={`route-${index+1}`} key={route}/>)}</g>
      <g className="transformation-backbone"><path d="M195 410V18M18 210H372"/><path d="M195 210L50 104M195 210L340 120M195 210L106 354M195 210L300 352"/></g>
      <g className="transformation-signals">{routes.slice(0,10).map((route,index)=><circle r="2" key={route}><animateMotion path={route} dur={`${4.8+index%3}s`} repeatCount="indefinite"/></circle>)}</g>
      <g className="transformation-core" transform="translate(195 210)"><circle className="outer" r="46"/><circle className="housing" r="35"/><path className="bracing" d="M-25-25h15M10-25h15M25 25H10M-10 25h-15M0 25V-25M-8-15 0-25l8 10"/><circle className="nucleus" r="9"/><g><circle cy="-35" r="3"/><circle cx="35" r="3"/><circle cy="35" r="3"/><circle cx="-35" r="3"/></g></g>
      <g className="discipline-influence"><path className="identity" d="M195 405V15"/><path className="presence" d="M22 210H368"/><path className="intelligence" d="M50 104C112 148 133 173 195 210C252 243 309 237 362 202"/><path className="infrastructure" d="M38 267H106V354H202V382H300V352H350V275"/></g>
      <g className="trajectory"><path d="M195 410V324L220 299V225"/><path d="m211 235 9-10 9 10"/></g>
    </svg>
    <div className="transformation-nodes">{nodes.map(([label,x,y,type])=><span className={type} style={{left:`${x/3.9}%`,top:`${y/4.3}%`}} key={label}><i/>{label}</span>)}</div>
    <div className="transformation-disciplines"><i>Identity</i><i>Presence</i><i>Intelligence</i><i>Infrastructure</i></div>
  </div>;
}

export function TransformationScene() {
  const ref = useRef<HTMLElement>(null); const [activeBeat,setActiveBeat] = useState(0); const update = useCallback((beat:number)=>setActiveBeat(beat),[]); useTransformationProgress(ref,update);
  return <section className={`transformation-scene transformation-phase-${activeBeat}`} ref={ref} aria-labelledby="transformation-title">
    <div className="transformation-stage"><div className="transformation-environment" aria-hidden="true"><i/><i/><i/><i/></div><div className="transformation-entry" aria-hidden="true"/>
      <div className="transformation-layout"><header className="transformation-copy"><p>FROM COMPLEXITY TO CLARITY</p><h2 id="transformation-title">Growth becomes powerful when everything moves in <em>one direction.</em></h2><div className="transformation-statement" key={activeBeat}><strong>{beats[activeBeat][0]}</strong><span>{beats[activeBeat][1]}</span></div></header><TransformationSystem/></div>
      <div className="transformation-exit" aria-hidden="true"><i/><span/></div>
    </div>
    <div className="transformation-reduced-story"><p>Gent Ascend Collective aligns how your business is understood, experienced, informed, and operated—turning disconnected growth into one coordinated system.</p>{beats.slice(1,8).map(([label,text])=><p key={label}><strong>{label}:</strong> {text}</p>)}</div>
  </section>;
}
