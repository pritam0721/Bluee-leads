"use client";

import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const images = [
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80",
  "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80",
];

const highlights = [
  "Expert English-speaking agents with 8+ years average experience",
  "Dedicated account manager and weekly performance reviews",
  "Fully scripted campaigns built around your brand voice",
  "Transparent real-time KPI dashboards and CRM integration",
  "ISO 27001 certified operations with GDPR compliance",
  "Flexible contracts — no long-term lock-in",
];

export default function AboutSection() {
  const [activeImg, setActiveImg] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  // Auto-rotate images
  useGSAP(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  });

  useGSAP(() => {
    gsap.from(textRef.current, {
      opacity: 0,
      x: -60,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
    gsap.from(imgRef.current, {
      opacity: 0,
      x: 60,
      duration: 0.9,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  return (
    <section id="about" ref={sectionRef} className="section-py bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div ref={textRef}>
            <span className="section-eyebrow">About Us</span>
            <h2 className="display-md text-gray-900 mt-3 mb-6">
              Your Trusted BPO Partner for{" "}
              <span className="text-gradient">Sustainable Growth</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Bluee Leads Marketing Limited was founded with a single purpose: to provide UK businesses
              with world-class outbound and inbound calling services that drive real commercial results
              at a fraction of the cost.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Our multilingual team of experienced telemarketers operate from our modern facility,
              handling everything from initial lead generation through to appointment scheduling,
              market research and customer support — all underpinned by strict quality assurance
              and compliance frameworks.
            </p>

            <ul className="space-y-3 mb-10">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>

            <Link href="/about" className="btn-primary">
              Our Full Story <ArrowRight size={16} />
            </Link>
          </div>

          {/* Image Slideshow */}
          <div ref={imgRef} className="relative">
            {/* Main image stack */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
              {images.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
                  style={{
                    backgroundImage: `url(${src})`,
                    opacity: i === activeImg ? 1 : 0,
                  }}
                />
              ))}
              {/* Overlay content */}
              <div
                className="absolute bottom-0 left-0 right-0 p-6"
                style={{
                  background: "linear-gradient(to top, rgba(5,13,31,0.8), transparent)",
                }}
              >
                <div className="flex gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeImg ? "w-8 bg-white" : "w-3 bg-white/40"
                      }`}
                      aria-label={`Slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-6 -right-6 md:-top-8 md:-right-8 z-10 rounded-2xl px-6 py-5 shadow-2xl"
              style={{ background: "linear-gradient(135deg, #0057ff, #003cbf)" ,padding:".5rem .5rem"}}
            >
              <div className="text-white text-2xl font-black">10+</div>
              <div className="text-blue-200 text-xs">Years in BPO</div>
            </div>

            {/* Floating ISO badge */}
            <div
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 z-10 rounded-2xl px-6 py-5 shadow-2xl bg-white border border-gray-100"
              style={{padding:".5rem .5rem"}}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                  <CheckCircle size={16} className="text-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-sm">ISO 27001</div>
                  <div className="text-gray-400 text-xs">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
