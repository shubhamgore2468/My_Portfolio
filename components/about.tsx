"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  //Style this part

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a Master&apos;s student in Computer Science (AI/ML) at USC,
        graduating December 2025. I work at the intersection of ML systems and
        backend engineering — building custom CUDA/Triton kernels, LLM training
        and inference pipelines, and full-stack agentic AI applications.
      </p>

      <p>
        My recent work spans vision-language model training, reinforcement
        learning for retrieval-augmented QA, and production-grade AI agents
        deployed on GCP. Previously, I built distributed event-streaming systems
        at Avaya processing 1M+ messages/day and conducted ML research on
        traffic prediction at CDAC. I&apos;m passionate about making AI systems
        that are fast, reliable, and actually useful.
      </p>
    </motion.section>
  );
}
