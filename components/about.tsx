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
        I am pursuing Master of Science program in Computer Science at the
        University of Southern California. I am passionate about data science
        and machine learning, and I have completed several online courses and
        certifications on Python, R, SQL, TensorFlow, and PyTorch.
      </p>

      <p>
        As a Software Development intern at Avaya, I worked with JavaScript,
        TypeScript, PostgreSQL, Node.js, and REST APIs to develop and test web
        applications and services. I have contributed to multiple projects, such
        as creating a dashboard for monitoring the performance of cloud-based
        solutions, and integrating a chatbot with a CRM system. I have also
        learned how to use AWS cloud services to deploy and scale applications.
      </p>
    </motion.section>
  );
}
