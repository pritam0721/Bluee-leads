"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.8,
  className = "",
  once = true,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const fromProps: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") fromProps.y = distance;
    if (direction === "down") fromProps.y = -distance;
    if (direction === "left") fromProps.x = -distance;
    if (direction === "right") fromProps.x = distance;

    gsap.from(el, {
      ...fromProps,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface StaggerGroupProps {
  children: ReactNode;
  stagger?: number;
  delay?: number;
  className?: string;
  childSelector?: string;
}

export function StaggerGroup({
  children,
  stagger = 0.1,
  delay = 0,
  className = "",
  childSelector = ":scope > *",
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll(childSelector);

    gsap.fromTo(
      items,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

interface CountUpProps {
  target: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
}

export function CountUp({
  target,
  prefix = "",
  suffix = "",
  className = "",
  duration = 2,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.value).toLocaleString()}${suffix}`;
      },
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return <span ref={ref} className={className}>{prefix}0{suffix}</span>;
}
