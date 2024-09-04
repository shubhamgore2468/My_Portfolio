"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
// import Header from "./header";
import Socials from "./Social";
import Photo from "./Photo";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="h-full">
      <div className="container mx-auto h-full px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left pt-8 xl:pt-12">
            <h1 className="text-[32px] md:text-[48px] xl:text-[80px] leading-[1.1] font-semibold pt-4">
              Hello I&apos;m <br /> <span>Shubham Gore</span>
            </h1>
            <h1 className="max-w-[500px] mb-6 md:mb-9 text-xl md:text-2xl font-bold pt-2">
              MS CS-AI at University of Southern California, Los Angeles.
            </h1>
            {/* Button and socials */}
            <div className="flex flex-col md:flex-row items-center gap-2">
              <button>
                <a
                  className="group bg-slate-900 text-white px-6 py-3 md:px-7 md:py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                  href="/ShubhamGore.pdf"
                  download
                >
                  Download CV{" "}
                  <FiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                </a>
              </button>
              <div className="mt-6 xl:mt-0 pl-0 xl:pl-2">
                <Socials
                  containerStyles="flex gap-4 md:gap-6"
                  iconsStyles="w-10 h-10 md:w-12 md:h-12 border border-accent rounded-full flex justify-center items-center hover:transition-all duration-500 hover:bg-black hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="mt-8 xl:mt-0 pl-0 xl:pl-8">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
