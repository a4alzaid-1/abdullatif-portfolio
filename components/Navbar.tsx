"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-void/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-mono text-sm text-ink tracking-tight">
          <span className="text-cyan">~/</span>abdullatif
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-dim hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href="/Abdullatif_Alzaid_CV.docx"
            className="text-sm px-4 py-2 rounded-full border border-line text-ink hover:border-cyan hover:text-cyan transition-colors"
          >
            Resume
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-ink" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-panel border-t border-line px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink text-sm">
              {l.label}
            </a>
          ))}
          <a href="/Abdullatif_Alzaid_CV.docx" className="text-cyan text-sm">Resume</a>
        </div>
      )}
    </nav>
  );
}
