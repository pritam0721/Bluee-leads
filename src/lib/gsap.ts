"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Register all GSAP plugins (safe to call multiple times)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  // Default ease
  gsap.defaults({ ease: "power3.out" });

  // ScrollTrigger defaults
  ScrollTrigger.defaults({
    markers: false,
  });

  // Responsive refresh
  ScrollTrigger.config({ autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize" });
}

export { gsap, ScrollTrigger };

// Preset animations
export const animations = {
  fadeUp: (el: gsap.TweenTarget, delay = 0) =>
    gsap.from(el, { opacity: 0, y: 40, duration: 0.8, delay, ease: "power3.out" }),

  fadeIn: (el: gsap.TweenTarget, delay = 0) =>
    gsap.from(el, { opacity: 0, duration: 0.6, delay, ease: "power2.out" }),

  staggerFadeUp: (els: gsap.TweenTarget, stagger = 0.1, delay = 0) =>
    gsap.from(els, { opacity: 0, y: 50, duration: 0.7, stagger, delay, ease: "power3.out" }),

  slideFromLeft: (el: gsap.TweenTarget, delay = 0) =>
    gsap.from(el, { opacity: 0, x: -60, duration: 0.8, delay, ease: "power3.out" }),

  slideFromRight: (el: gsap.TweenTarget, delay = 0) =>
    gsap.from(el, { opacity: 0, x: 60, duration: 0.8, delay, ease: "power3.out" }),

  scaleIn: (el: gsap.TweenTarget, delay = 0) =>
    gsap.from(el, { opacity: 0, scale: 0.85, duration: 0.7, delay, ease: "back.out(1.7)" }),

  countUp: (el: HTMLElement, target: number, prefix = "", suffix = "") => {
    const obj = { value: 0 };
    return gsap.to(obj, {
      value: target,
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
      },
    });
  },
};
