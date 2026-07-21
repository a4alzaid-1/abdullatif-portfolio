"use client";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 border-b-2 border-ink">
      <div className="max-w-3xl mx-auto">
        <SectionHeader title="How I build" />
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-[20px] leading-[1.65] text-ink pl-5 border-l-[4px] border-red italic">
            My core skill is directing AI coding tools to take a business problem all the
            way to a deployed product — while personally owning every decision that
            determines whether the product is actually good.
          </p>
          <p className="text-[16px] leading-[1.7] text-text-secondary">
            I&apos;m a Software Engineering student at Abdulla Al-Salem University (AASU) in
            Kuwait. In practice, that means I define the scope, make every UI/UX and brand
            decision, test the result myself across devices, and diagnose real production
            issues — broken deployments, DNS misconfiguration, Git authentication failures —
            by reading logs and documentation, then direct the tooling to implement the fix.
          </p>
          <p className="text-[16px] leading-[1.7] text-text-secondary">
            I&apos;ve used this workflow to run a small independent freelance practice —
            building and shipping live websites for real small businesses in Kuwait, end to
            end: outreach, pricing, delivery, and ongoing support.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
