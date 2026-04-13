"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <Image
          className="rounded-full object-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[498px] xl:h-[510px] border-[0.35rem] border-white shadow-xl"
          src="/self.jpg"
          alt="Shubham Gore"
          width={498}
          height={510}
        />
      </motion.div>
    </div>
  );
};

export default Photo;
