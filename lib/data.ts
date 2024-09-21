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
      "Researched and developed machine learning models (LSTM, GRU) to predict traffic matrices on telecom datasets (Abilene,GÉANT). Evaluated multiple approaches, including complete TM, individual OD flows, and top m-OD flows with key element correction. Discovered predicting overall traffic matrix combined with key element correction balances traffic engineering performance and prediction time",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 - 06/2023",
  },
  {
    title: "Software Engineer Intern @ Avaya", //Avaya needs to be a link
    location: "Pune, India",
    description:
      "Collaborated with a team of five on Avaya Social Connections, a cloud-based social media messaging solution integrates contact centers with social business channels Facebook, Instagram, WhatsApp, and Twitter. Devised and contributed to microservices Facebook connector, contact center adaptor, etc. are built using Java, spring boot, Nodejs, typescript. Added to features Datadog metrics, monitoring, logging - feature implementation Hashing PII items, graceful shutdown for microservices, Improved security of product by solving sonar scan and Coverity scan bugs, increasing test coverage from 30% to 80%",
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
    title: "LLM-based Knowledge Graph Retrieval-Augmented Generation (RAG) ",
    description:
      "•	Built a RAG(Generative AI) tool integrating Neo4j and OpenAI API to convert Ecommerce products customer reviews JSON into graph, enabling structured and unstructured data retrieval using entity extraction, knowledge graphs, and vector-based search. Developed a hybrid search pipeline combining Neo4j graph data with embeddings, providing RAG context-based question answering of products.",
    tags: [
      "Python",
      "Neo4j",
      "LLM's",
      "RAG",
      "LangChain",
      "Selenium",
      "BeautifulSoup",
      "Streamlit",
    ],
    imageUrl: OCR,
    projectLink: "",
  },
  {
    title: "OCR",
    description:
      "Led a team of 4 to build an application for Recognition of characters in structured and unstructured form using py-tesseract and CNN and OpenCV for image preprocessing and implementing it on Streamlit.io. Developed the Recognition of Structured images of dataset making bounding boxes using CNN and py-tesseract and extracting text in a text file",
    tags: ["Python", "OpenCV", "Tensorflow", "pyTessearact"],
    imageUrl: OCR,
    projectLink:
      "https://github.com/Data-Science-Community-SRM/Optical-Character-Recognition",
  },
  {
    title: "LipReading ",
    description:
      "Implemented Lip Net, a model maps variable-length video sequences to text by utilizing spatiotemporal convolutions, a recurrent network, and connectionist temporal classification loss, trained entirely end-to-end",
    tags: ["Python", "Keras", "Tensorflow"],
    imageUrl: LP,
    projectLink:
      "https://github.com/Data-Science-Community-SRM/Optical-Character-Recognition",
  },
  {
    title: "Plant Traits Prediction - Kaggle",
    description:
      "Employed ConvNeXT, Swin Transformer, and ViT models, augmented datasets, integrated crowd-sourced data, and optimized preprocessing to boost model generalization, accuracy, and performance",
    tags: ["Python", "Keras", "Tensorflow"],
    imageUrl: PT,
    projectLink:
      "https://www.kaggle.com/code/foxtrot22/planttraits-spearmen-corr",
  },
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
    projectLink: "https://github.com/shubhamgore2468/My_Portfolio",
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
