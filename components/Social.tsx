import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icons: <FaGithub />, path: "https://github.com/shubhamgore2468" },
  {
    icons: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/shubhampgore/",
  },
];

const Social = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconsStyles}>
            {item.icons}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
