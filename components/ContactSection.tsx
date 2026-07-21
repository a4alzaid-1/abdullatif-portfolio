"use client";
import { motion } from "framer-motion";
import { Mail, Phone, FileDown } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="Let's talk" />
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 border-2 border-ink flex flex-col gap-6"
        >
          <p className="text-[16px] leading-[1.7] text-text-secondary">
            Open to internships, training programs, and collaboration opportunities.
            Reach out any time.
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <a href="mailto:abdullatifalzaid206@gmail.com"
              className="flex items-center gap-2 text-ink hover:text-red transition-colors text-[15px] font-medium">
              <Mail size={16} /> abdullatifalzaid206@gmail.com
            </a>
            <a href="tel:+96596796655"
              className="flex items-center gap-2 text-ink hover:text-red transition-colors text-[15px] font-medium" dir="ltr">
              <Phone size={16} /> +965 9679 6655
            </a>
          </div>
          <a href="/Abdullatif_Alzaid_CV.docx" download
            className="self-start mt-2 flex items-center gap-2 px-6 py-2.5 bg-ink text-paper border-2 border-ink text-[14px] font-bold uppercase tracking-[0.06em] hover:bg-red hover:border-red transition-colors">
            <FileDown size={16} /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
