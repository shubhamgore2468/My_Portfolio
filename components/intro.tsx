"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FiDownload } from "react-icons/fi";
import Header from "./header";
import Socials from "./Social";
import Photo from "./Photo";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-centered justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left pt-12">
            {/* <span className="text-xl">Software Developer, ML Developer</span> */}
            <h1 className="text-[48px] xl:text-[80px] leading-[1.1] font-semibold pt-4">
              {/* h2 className="text-[36px] xl:text-[48px] leading-[1.1] font-semibold" */}
              {/* h3 className="text-[20px] xl:text-[24px] leading-[1.1] font-semibold" */}
              Hello I&apos;m <br /> <span>Shubham Gore</span>
            </h1>
            <h1 className="max-w-[500px] mb-9 text-2xl font-bold pt-2">
              MS CS-AI at University of Southern California, Los Angeles.
            </h1>
            {/* Button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-2">
              <button>
                <span>
                  <a
                    className="group bg-slate-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                    href="/ShubhamGoreResume.pdf"
                    download
                  >
                    Download CV{" "}
                    <FiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                  </a>
                </span>
              </button>
              <div className="mb-8 xl:mb-0 pl-2">
                <Socials
                  containerStyles="flex gap-6"
                  iconsStyles="w-12 h-12 border border-accent rounded-full flex justify-center items-center hover:transition-all duration-500 hover:bg-black hover:text-white"
                />
              </div>
            </div>
          </div>
          {/* photo*/}
          <div className="pl-8">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
