import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PortfolioImg from "@/public/portfolio.png";
import MP from "@/public/portfolio.png";
import OCR from "@/public/OCR.png";
import PT from "@/public/planttraits.png";
import LP from "@/public/LipReading.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title:
      "Master's in Computer Science AI @ University of Southern California ",
    location: "Los Angeles, United States",
    description:
      "Coursework Includes: Machine Learning CSCI 567, Intro to Artificial Intelligence CSCI 561",
    icon: React.createElement(LuGraduationCap),
    date: "01/2024-Present",
  },
  {
    title: "Research Assistant @ CDAC ",
    location: "Pune, India",
    description:
      "Leveraged Machine Learning to predict traffic matrices on Telecom dataset - Abilene, GANT and compared models LSTM, GRU give better results",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 - 06/2023",
  },
  {
    title: "Software Engineer Intern @ Avaya", //Avaya needs to be a link
    location: "Pune, India",
    description:
      "contributed to a Customer Contact Centre cloud-based solution by Avaya. In role, focused on utilizing Typescript and Node.js to enhance system's functionality Responsibilities involved writing comprehensive test cases and testing for potential bugs and vulnerabilities, with a specific emphasis on social media integration",
    icon: React.createElement(CgWorkAlt),
    date: "01/2022 - 06/2022",
  },
  {
    title:
      "Bachelor's of Engineering @ SRM Institute of Science and Technology",
    location: "Chennair, India",
    description:
      "Major in Computer Science and Engineering with specialization in Big Data Analytics with a gpa of 9.3/10",
    icon: React.createElement(LuGraduationCap),
    date: "08/2018-04/2022",
  },
] as const;

export const projectsData = [
  {
    title: "OCR",
    description:
      "application for Recognition of characters in structured and unstructured form using py tesseract and CNN and openCV for image preprocessing and implementing it on Streamlit.io",
    tags: ["Python", "OpenCV", "Tensorflow", "pyTessearact"],
    imageUrl: OCR,
  },
  {
    title: "LipReading ",
    description: "",
    tags: ["Python", "Keras", "Tensorflow"],
    imageUrl: LP,
  },
  {
    title: "Plant Traits Prediction - Kaggle",
    description: "",
    tags: ["Python", "Keras", "Tensorflow"],
    imageUrl: PT,
  },
  // {
  //   title: "Neural Style Transfer",
  //   description: "",
  //   tags: ["Python", "Keras", "Tensorflow"],
  //   imageUrl: CBIR,
  // },
  {
    title: "My Portfolio",
    description:
      "A fully responsive, user interactive portfolio Website hosted using vercel. Implement email service using resend in contact form",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Tailwind",
      "Resend",
      "React Email",
    ],
    imageUrl: MP,
  },
] as const;

export const skillsData = [
  "Machine Learning",
  "Computer Vision",
  "Python",
  "Tensorflow, Keras",
  "Pytorch",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
] as const;
