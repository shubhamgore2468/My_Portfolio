"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div>
        <div className="">
          <Image
            className="rounded-full object-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] xl:w-[498px] xl:h-[510px]"
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
