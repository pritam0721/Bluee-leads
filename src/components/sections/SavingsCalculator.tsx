"use client";

import { useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PoundSterling, TrendingDown, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function formatGBP(value: number): string {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function calculateSavings(agents: number) {
  const ukSalaryPerAgent = 2083; // £25k/yr ÷ 12
  const ukOnCostsMultiplier = 1.28; // 28% on-costs: NI, pension, etc.
  const ukCostPerAgent = ukSalaryPerAgent * ukOnCostsMultiplier;
  const blmlRate = 750; // BPO rate per agent/month
  const ukTotal = agents * ukCostPerAgent;
  const blmlTotal = agents * blmlRate;
  const savings = ukTotal - blmlTotal;
  const pct = Math.round((savings / ukTotal) * 100);
  const annualSavings = savings * 12;
  return { ukTotal, blmlTotal, savings, pct, annualSavings };
}

export default function SavingsCalculator() {
  const [agents, setAgents] = useState(10);
  const sectionRef = useRef<HTMLDivElement>(null);
  const ukRef = useRef<HTMLSpanElement>(null);
  const blmlRef = useRef<HTMLSpanElement>(null);
  const savingsRef = useRef<HTMLSpanElement>(null);
  const annualRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const prevAgents = useRef(10);

  function animateValue(el: HTMLElement, from: number, to: number, formatter: (v: number) => string) {
    const obj = { value: from };
    gsap.to(obj, {
      value: to,
      duration: 0.6,
      ease: "power2.out",
      onUpdate: () => {
        el.textContent = formatter(Math.round(obj.value));
      },
    });
  }

  useEffect(() => {
    const prev = calculateSavings(prevAgents.current);
    const next = calculateSavings(agents);
    prevAgents.current = agents;

    if (ukRef.current) animateValue(ukRef.current, prev.ukTotal, next.ukTotal, formatGBP);
    if (blmlRef.current) animateValue(blmlRef.current, prev.blmlTotal, next.blmlTotal, formatGBP);
    if (savingsRef.current) animateValue(savingsRef.current, prev.savings, next.savings, formatGBP);
    if (annualRef.current) animateValue(annualRef.current, prev.annualSavings, next.annualSavings, formatGBP);

    if (barRef.current) {
      gsap.to(barRef.current, { width: `${next.pct}%`, duration: 0.6, ease: "power2.out" });
    }
  }, [agents]);

  // Entrance animation
  useGSAP(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  const calc = calculateSavings(agents);

  return (
    <section
      id="savings-calculator"
      className="section-py"
      style={{ background: "linear-gradient(180deg, #f8faff 0%, #e8f0ff 100%)" }}
    >
      <div className="container-xl ">
        <div className="section-header">
          <span className="section-eyebrow">Cost Calculator</span>
          <h2 className="display-lg text-gray-900 max-w-2xl mx-auto">
            Calculate Your <span className="text-gradient">Potential Savings</span>
          </h2>
          <p className="text-gray-500 text-lg mt-4 max-w-xl mx-auto">
            See exactly how much you could save by switching to Bluee Leads BPO services
            compared to maintaining an in-house team.
          </p>
        </div>

        <div
          ref={sectionRef}
          className="max-w-auto mx-auto rounded-3xl overflow-hidden  "
          style={{ boxShadow: "0 20px 80px rgba(0,87,255,0.15)", padding: "1.5rem" }}
        >
          {/* Calculator Panel */}
          <div className="grid md:grid-cols-2  gap-5" >
            {/* Slider Side */}
            <div className="p-10 bg-white max " style={{padding: '2.5rem 2.75rem',borderRadius: '1.5rem' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Users size={20} className="text-blue-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Number of Agents</div>
                  <div className="text-gray-500 text-sm">Drag slider to adjust</div>
                </div>
              </div>

              {/* Agent count display */}
              <div className="text-center mb-8">
                <div
                  className="text-7xl font-black text-blue-600 mb-1"
                  id="agent-count-display"
                >
                  {agents}
                </div>
                <div className="text-gray-400 text-sm">Agents</div>
              </div>

              {/* Slider */}
              <div className="mb-8">
                <input
                  id="agents-slider"
                  type="range"
                  min={1}
                  max={50}
                  value={agents}
                  onChange={(e) => setAgents(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #0057ff ${((agents - 1) / 49) * 100}%, #e5e7eb ${((agents - 1) / 49) * 100}%)`,
                  }}
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2">
                  <span>1 Agent</span>
                  <span>50 Agents</span>
                </div>
              </div>

              {/* Comparison bars */}
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600 font-medium">UK In-House Cost</span>
                    <span ref={ukRef} className="font-bold text-gray-800">{formatGBP(calc.ukTotal)}</span>
                  </div>
                  <div className="h-3 rounded-full bg-red-100">
                    <div className="h-full rounded-full bg-red-400" style={{ width: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="text-gray-600 font-medium">Bluee Leads Cost</span>
                    <span ref={blmlRef} className="font-bold text-gray-800">{formatGBP(calc.blmlTotal)}</span>
                  </div>
                  <div className="h-3 rounded-full bg-gray-100">
                    <div
                      className="h-full rounded-full bg-blue-500"
                      style={{ width: `${(calc.blmlTotal / calc.ukTotal) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div
              className="p-10 flex flex-col justify-center "
              style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 100%)",padding: '2.5rem 2.75rem',borderRadius: '1.5rem' , gap: '1rem' }}
            >
              {/* Monthly Savings */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown size={18} className="text-cyan-400" />
                  <span className="text-gray-400 text-sm">Monthly Savings</span>
                </div>
                <div className="flex items-end gap-2">
                  <span ref={savingsRef} className="text-5xl font-black text-cyan-400">
                    {formatGBP(calc.savings)}
                  </span>
                </div>
              </div>

              {/* Savings % bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Savings Rate</span>
                  <span className="text-cyan-400 font-bold">{calc.pct}%</span>
                </div>
                <div className="h-3 rounded-full bg-white/10">
                  <div
                    ref={barRef}
                    className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"
                    style={{ width: `${calc.pct}%` }}
                  />
                </div>
              </div>

              {/* Annual savings */}
              <div className="rounded-xl p-5 mb-8" style={{ background: "rgba(34,211,238,0.1)", border: "1px solid rgba(34,211,238,0.2)", }}>
                <div style={{marginLeft:'1rem'}}>
<div className="text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-1">Annual Saving</div>
                <span ref={annualRef} className="text-3xl font-black text-cyan-400">
                  {formatGBP(calc.annualSavings)}
                </span>
                <div className="text-gray-400 text-xs mt-1 "
                
                >
                  vs. maintaining {agents} in-house agent{agents > 1 ? "s" : ""}
                </div>
              </div>
                </div>
                     <div className="text-gray-500 text-xs mb-6">
                * Based on £25k salary, 28% on-costs vs. BLML agency rate. Actual savings may vary.
              </div>

              <Link href="/contact" className="btn-white !py-3.5 justify-center">
                Lock In This Rate <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0057ff;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0, 87, 255, 0.4);
          border: 3px solid white;
        }
        input[type="range"]::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #0057ff;
          cursor: pointer;
          box-shadow: 0 2px 12px rgba(0, 87, 255, 0.4);
          border: 3px solid white;
        }
      `}</style>
    </section>
  );
}
