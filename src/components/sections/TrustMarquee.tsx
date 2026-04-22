"use client";

const badges = [
  { label: "ISO 27001 Certified", emoji: "🏅" },
  { label: "UK GDPR Compliant", emoji: "🛡️" },
  { label: "ICO Registered", emoji: "📋" },
  { label: "DMA Member", emoji: "🤝" },
  { label: "500+ Campaigns", emoji: "🚀" },
  { label: "FCA Compliant", emoji: "⚖️" },
  { label: "12M+ Calls Made", emoji: "📞" },
  { label: "OFCOM Compliant", emoji: "📡" },
  { label: "Telefunds Registered", emoji: "✅" },
  { label: "CXA Award Winner", emoji: "🏆" },
];

export default function TrustMarquee() {
  return (
    <section
      id="trust-badges"
      className="py-10 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 100%)" }}
    >
      {/* Row 1 - forward */}
      <div className="marquee-wrapper mb-4">
        <div className="marquee-track">
          {[...badges, ...badges].map((b, i) => (
            <div
              key={`r1-${i}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full flex-shrink-0"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span>{b.emoji}</span>
              <span className="text-gray-300 text-sm font-medium whitespace-nowrap">{b.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - reverse */}
      <div className="marquee-wrapper">
        <div className="marquee-track" style={{ animationDirection: "reverse", animationDuration: "25s" }}>
          {[...badges.slice(4), ...badges, ...badges.slice(0, 4)].map((b, i) => (
            <div
              key={`r2-${i}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full flex-shrink-0"
              style={{
                background: "rgba(0,87,255,0.1)",
                border: "1px solid rgba(0,87,255,0.2)",
              }}
            >
              <span>{b.emoji}</span>
              <span className="text-blue-300 text-sm font-medium whitespace-nowrap">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
