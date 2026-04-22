"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "B2B Telemarketing", href: "/services#b2b" },
      { label: "Lead Generation", href: "/services#lead-gen" },
      { label: "Appointment Setting", href: "/services#appointments" },
      { label: "Inbound Call Handling", href: "/services#inbound" },
      { label: "Market Research", href: "/services#research" },
      { label: "Data Cleansing", href: "/services#data" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Clients", href: "/clients" },
  { label: "Blogs", href: "/blogs" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isDarkHero = ["/", "/about", "/services", "/clients", "/blogs", "/careers", "/contact", "/privacy-policy"].includes(pathname);
  const isLightText = !isScrolled && isDarkHero;

  useGSAP(() => {
    if (navRef.current) {
      gsap.set(navRef.current, { y: -80, opacity: 0 });
      gsap.to(navRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
      });
    }
  }, { scope: navRef });

  return (
    <nav
      ref={navRef}
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="container-xl">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-sm">BL</span>
            </div>
            <div>
              <div className={`font-black text-base leading-tight font-[var(--font-primary)] tracking-tight transition-colors ${!isLightText ? "text-gray-900" : "text-white"}`}>
                Bluee Leads
              </div>
              <div className={`text-sm font-medium transition-colors ${!isLightText ? "text-blue-600" : "text-blue-300"}`}>
                Marketing Limited
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                {link.children ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      !isLightText ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                    }`}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${
                      !isLightText ? "text-gray-700 hover:text-blue-600" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                )}

                {/* Dropdown */}
                {link.children && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+441234567890"
              className={`hidden md:flex items-center gap-2 text-sm font-semibold transition-colors ${
                !isLightText ? "text-blue-600" : "text-white"
              }`}
            >
              <Phone size={16} />
              +44 (0) 123 456 7890
            </a>
            <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm py-2.5 px-5">
              Get Free Quote
            </Link>
            <button
              id="mobile-menu-toggle"
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                !isLightText ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="container-xl py-4 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              <Link
                href={link.href}
                className="block py-3 px-4 text-gray-800 font-medium hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="pl-6 space-y-1">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 pb-2 border-t border-gray-100">
            <Link href="/contact" className="btn-primary w-full justify-center" onClick={() => setMobileOpen(false)}>
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
