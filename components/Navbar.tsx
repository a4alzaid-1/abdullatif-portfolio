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
      className={`fixed top-0 inset-x-0 z-50 bg-paper transition-colors duration-200 ${
        scrolled ? "border-b-2 border-ink" : "border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-display text-sm text-ink tracking-tight">
          ABDULLATIF
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-bold uppercase tracking-[0.06em] text-ink border-b-[3px] border-transparent hover:border-red pb-1 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/Abdullatif_Alzaid_CV.docx"
            className="text-[13px] font-bold uppercase tracking-[0.06em] px-6 py-2.5 bg-ink text-paper hover:bg-red transition-colors"
          >
            Resume
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink -mr-2.5 p-2.5 flex items-center justify-center"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-paper border-t-2 border-ink px-6 py-5 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="text-ink text-sm font-bold uppercase tracking-[0.06em]">
              {l.label}
            </a>
          ))}
          <a href="/Abdullatif_Alzaid_CV.docx" className="text-red text-sm font-bold uppercase tracking-[0.06em]">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}
