"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header>
      <div className="z-[999] relative">
        {/* <div className="py-8 xl:py-12 ">
          <div className="container ax-auto text-3xl">Shubham .</div>
        </div> */}
        {/* <motion.div
          className="fixed top-1/2 left-0 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:left-6 sm:h-[36rem] sm:w-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
          initial={{ x: -100, y: "-50%", opacity: 0 }}
          animate={{ x: 0, y: "-50%", opacity: 1 }}
        > */}
        <motion.div className="invisible lg:visible sm:invisible md:invisible">
          <nav className="flex fixed left-[0.15rem] top-1/2 h-12 -translate-y-1/2 py-2 sm:left-[1.7rem] sm:h-[initial] sm:py-0">
            <ul className="flex flex-col w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:h-[initial] sm:flex-nowrap sm:gap-5">
              {links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300",
                      {
                        "text-gray-950 dark:text-gray-200":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                        layoutId="activeSection"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}
