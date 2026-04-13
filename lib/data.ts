import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PortfolioImg from "@/public/portfolio.png";
import PT from "@/public/planttraits.png";
import RAG from "@/public/RAG.png";

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
      "Master's in Computer Science (AI/ML) @ University of Southern California",
    location: "Los Angeles, United States",
    description:
      "Specialization in AI/ML. Coursework: Machine Learning (CSCI 567), Artificial Intelligence (CSCI 561), Deep Learning, Natural Language Processing, Distributed Systems.",
    icon: React.createElement(LuGraduationCap),
    date: "01/2024 - 12/2025",
  },
  {
    title: "Graduate Research Assistant @ USC",
    location: "Los Angeles, United States",
    description:
      "Built real-time WebSocket event-driven backend systems achieving sub-100ms synchronization latency. Designed scalable architectures for concurrent data processing pipelines.",
    icon: React.createElement(CgWorkAlt),
    date: "08/2024 - 12/2024",
  },
  {
    title: "Software Development Engineer Intern @ Avaya",
    location: "Pune, India",
    description:
      "Worked on Avaya Social Connections, a cloud-based CCaaS platform integrating contact centers with Facebook, Instagram, WhatsApp, and Twitter. Built microservices using Java, Spring Boot, Node.js, and TypeScript. Implemented Kafka-based event streaming processing 1M+ messages/day. Added Datadog monitoring, PII hashing, graceful shutdown. Increased test coverage from 30% to 80%.",
    icon: React.createElement(CgWorkAlt),
    date: "01/2022 - 06/2022",
  },
  {
    title: "ML Research Intern @ CDAC (Centre for Development of Advanced Computing)",
    location: "Pune, India",
    description:
      "Developed LSTM/GRU models for traffic matrix prediction on telecom datasets (Abilene, GÉANT). Built Docker-based CI/CD pipeline for model deployment. Discovered that predicting overall traffic matrix with key element correction optimally balances performance and prediction time.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 - 06/2023",
  },
  {
    title:
      "B.E. in Computer Science @ SRM Institute of Science and Technology",
    location: "Chennai, India",
    description:
      "Major in Computer Science with specialization in Big Data Analytics. GPA: 9.3/10.",
    icon: React.createElement(LuGraduationCap),
    date: "08/2018 - 04/2022",
  },
] as const;

export const projectsData = [
  {
    title: "AI HR Hiring Agent",
    description:
      "Full-stack AI hiring assistant with LangGraph agentic workflow, Gemini LLM, FastAPI on GCP Cloud Run, Next.js 15 frontend on Vercel, and PostgreSQL with pgvector on Cloud SQL. Features candidate scoring via cosine similarity with weighted skill/experience/location matching, Notion integration, and GitHub Actions CI/CD.",
    tags: ["LangGraph", "FastAPI", "GCP", "Next.js", "pgvector", "Gemini", "PostgreSQL"],
    imageUrl: PortfolioImg,
    projectLink: "https://github.com/shubhamgore2468/HR-AI-Chatbot",
  },
  {
    title: "Vision-Language Model (VLM) Training",
    description:
      "Trained a custom VLM combining SigLIP vision encoder, MLP projector, and Qwen2.5-0.5B language model on LLaVA-Instruct-150K dataset. Implemented KV-cache optimization, INT4/INT8 quantization, continuous batching, and custom Triton kernel fusion for inference acceleration on Kaggle T4 GPUs.",
    tags: ["PyTorch", "Triton", "CUDA", "Qwen2.5", "SigLIP", "Quantization"],
    imageUrl: PortfolioImg,
    projectLink: "",
  },
  {
    title: "Write-in-Margins (WiM) RL System",
    description:
      "Retrieval-augmented QA system for HotpotQA where an LLM generates margin notes on document chunks before synthesizing answers. Trained with PPO on Qwen2.5-3B using NF4 quantization, LoRA/PEFT, and PagedAdamW8bit. Extended the WiM paper with selective KV-cache injection of PPO-ranked margin tokens.",
    tags: ["PPO", "LoRA", "Qwen2.5", "RAG", "HuggingFace", "W&B"],
    imageUrl: PortfolioImg,
    projectLink: "",
  },
  {
    title: "VC Deal Sourcing Agent",
    description:
      "LangGraph-based agentic system for venture capital deal sourcing with Anthropic tool-calling, Pydantic v2 anti-hallucination validators, and multi-source search router (Exa, Tavily, TechCrunch RSS, ProductHunt). Uses SqliteSaver persistence and source-weighted result merging.",
    tags: ["LangGraph", "Anthropic API", "Pydantic", "Exa", "Tavily"],
    imageUrl: PortfolioImg,
    projectLink: "",
  },
  {
    title: "GraphRAG Knowledge Retrieval",
    description:
      "Built a hybrid retrieval system using Neo4j knowledge graphs combined with vector similarity search and cross-encoder reranking. Converts e-commerce product reviews into structured graph representations enabling both graph traversal and semantic search for context-based QA.",
    tags: ["Neo4j", "LangChain", "RAG", "OpenAI", "Python"],
    imageUrl: RAG,
    projectLink: "",
  },
  {
    title: "Plant Traits Prediction — Kaggle (Top 1%, Top 50/3000+)",
    description:
      "Achieved Top 1% ranking (Top 50 out of 3,000+ participants) using Swin Transformer, ConvNeXT, and ViT models with augmented datasets and crowd-sourced data integration for plant trait prediction.",
    tags: ["PyTorch", "Swin Transformer", "ViT", "Kaggle", "Computer Vision"],
    imageUrl: PT,
    projectLink: "https://www.kaggle.com/code/foxtrot22/planttraits-spearmen-corr",
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "CUDA",
  "Triton",
  "PyTorch",
  "TensorFlow",
  "LangGraph",
  "LangChain",
  "HuggingFace",
  "RAG",
  "LLM Fine-tuning",
  "Distributed Systems",
  "FastAPI",
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "PostgreSQL",
  "Neo4j",
  "Docker",
  "GCP",
  "AWS",
  "Kafka",
  "Git",
  "Tailwind CSS",
] as const;
