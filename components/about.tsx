"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

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
        I work as a software developer in{" "}
        <span className="font-medium">Blue Cross And Blue Shield of Louisiana</span>. I mostly use <span className="font-medium">C#, .Net, Angular
        and SQL</span> in my job. I also have a Bachelor's in {" "}
        <span className="font-medium">Computer Science</span>.{" "}
        I love programming, problem solving, and building solutions. 
      </p>
    </motion.section>
  );
}
