"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000)); // simulate
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section
        className="py-24 text-center text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #050d1f 0%, #041233 60%, #0a1f5c 100%)" }}
      >
        <div className="absolute inset-0 grid-dot-pattern opacity-20" />
        <div className="container-xl relative z-10">
          <FadeIn>
            <span className="section-eyebrow" style={{ background: "rgba(0,87,255,0.2)", color: "#93c5fd" }}>Contact Us</span>
            <h1 className="display-xl text-white mt-4 mb-6">Let&apos;s Start a Conversation</h1>
            <p className="text-gray-300 text-xl max-w-xl mx-auto">
              Get a free consultation and find out how Bluee Leads can accelerate your business growth.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-py bg-[#f8faff]">
        <div className="container-xl">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <FadeIn direction="left">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                {[
                  { icon: Phone, label: "Phone", value: "+44 (0) 123 456 7890", href: "tel:+441234567890" },
                  { icon: Mail, label: "Email", value: "hello@blueeleads.co.uk", href: "mailto:hello@blueeleads.co.uk" },
                  { icon: MapPin, label: "Address", value: "1 Business Park, Innovation Drive, London EC1A 1BB", href: "#" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri 8am–6pm GMT", href: "#" },
                ].map((c) => (
                  <a key={c.label} href={c.href} className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-200 group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <c.icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{c.label}</div>
                      <div className="text-gray-800 font-medium text-sm">{c.value}</div>
                    </div>
                  </a>
                ))}
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <FadeIn direction="right" delay={0.2}>
                <div className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100">
                  {submitted ? (
                    <div className="text-center py-12">
                      <CheckCircle size={60} className="text-green-500 mx-auto mb-5" />
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                      <p className="text-gray-500">Thanks {form.name}. Our team will respond within 1 business day.</p>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Request a Free Quote</h2>
                      <p className="text-gray-400 text-sm mb-8">Fill in the form and we&apos;ll get back to you within 24 hours.</p>
                      <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
                        <div className="grid grid-cols-2 gap-4">
                          <input className="form-input-light col-span-2 md:col-span-1" placeholder="Full Name *" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
                          <input className="form-input-light col-span-2 md:col-span-1" type="email" placeholder="Work Email *" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
                          <input className="form-input-light col-span-2 md:col-span-1" type="tel" placeholder="Phone Number *" required value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} />
                          <input className="form-input-light col-span-2 md:col-span-1" placeholder="Company Name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} />
                        </div>
                        <select className="form-input-light" value={form.service} onChange={e => setForm({...form, service: e.target.value})}>
                          <option value="">Select a Service</option>
                          {["B2B Telemarketing","Lead Generation","Appointment Setting","Inbound Call Handling","Market Research","Data Cleansing","B2C Telemarketing"].map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                        <textarea className="form-input-light resize-none" rows={4} placeholder="Tell us about your campaign goals..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} />
                        <button type="submit" disabled={loading} className="btn-primary w-full justify-center py-4 text-base rounded-xl disabled:opacity-70">
                          {loading ? "Sending..." : <><Send size={18} /> Send Message</>}
                        </button>
                        <p className="text-xs text-gray-400 text-center">GDPR Compliant. We never share your data. <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>.</p>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
