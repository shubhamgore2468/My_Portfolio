"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div>
        <div className="">
          {/* <img
            className="rounded-full w-[498px] h-[510px]"
            src="/assets/self.jpg"
          ></img> */}
          <Image
            className="rounded-full"
            src="/self.jpg"
            alt="Description of the image"
            width={498}
            height={510}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
