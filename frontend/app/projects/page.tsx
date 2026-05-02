"use client";

import React, { useState } from "react";
import { ArrowUpRight, Code2, Globe, Shield, Cpu, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";

const ProjectsPage = () => {
  const projects = [
    {
      title: "FinEdge Banking Platform",
      category: "Web",
      description:
        "A next-generation digital banking platform handling 2M+ daily transactions with sub-100ms latency.",
      tech: ["React", "Node.js", "PostgreSQL"],
      result: "2M+ daily transactions",
      accentColor: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/20",
      tagText: "text-cyan-400",
      icon: <Globe size={20} />,
    },
    {
      title: "NeuralCommerce AI Engine",
      category: "AI",
      description:
        "Custom recommendation engine and dynamic pricing system that increased conversion rates by 34% for retail.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      result: "+34% conversion rate",
      accentColor: "from-emerald-500 to-cyan-400",
      glowColor: "group-hover:shadow-emerald-500/20",
      tagText: "text-emerald-400",
      icon: <Cpu size={20} />,
    },
    {
      title: "SecureVault Zero-Trust",
      category: "Security",
      description:
        "Designed and implemented a zero-trust network architecture for a defense contractor achieving NIST compliance.",
      tech: ["Palo Alto", "Okta", "IBM"],
      result: "NIST 800-207 certified",
      accentColor: "from-orange-500 to-amber-400",
      glowColor: "group-hover:shadow-orange-500/20",
      tagText: "text-orange-400",
      icon: <Shield size={20} />,
    },
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="bg-slate-900 text-white">
      <NavBar />

      <section className="relative py-40 px-6 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(40,202,225,.08),transparent_70%)]">
        
        {/* Background Neon Blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Stats Section - Futuristic Glass Style */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-40"
          >
            {[
              { label: "Founded", value: "2011", sub: "Digital Pioneers" },
              { label: "Clients Served", value: "500+", sub: "Global Trust" },
              { label: "Projects Delivered", value: "1.2K+", sub: "Pure Efficiency" },
              { label: "Uptime", value: "99.9%", sub: "Reliable Systems" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="relative p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-md transition-all text-center group"
              >
                <h4 className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-[0.3em] mb-4">
                  {stat.label}
                </h4>
                <div className="text-5xl font-black text-white tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Header & Tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                <Zap size={14} className="text-cyan-400 animate-pulse" />
                <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.4em]">
                  The Portfolio
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.85]">
                PROVEN WORK.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
                  REAL RESULTS.
                </span>
              </h2>
            </div>

            {/* Futuristic Tabs */}
            <div className="flex flex-wrap gap-2 bg-white/[0.03] p-2 rounded-full border border-white/10 backdrop-blur-xl">
              {["All", "Web", "AI", "Security", "Cloud"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeTab}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className={`group relative bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 flex flex-col transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl ${project.glowColor}`}
              >
                {/* Top Accent Line */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${project.accentColor} rounded-b-full`} />

                <div className="flex justify-between items-start mb-8">
                  <div className={`flex items-center gap-2 ${project.tagText} font-mono text-[10px] uppercase tracking-widest`}>
                    {project.icon}
                    {project.category}
                  </div>
                  <ArrowUpRight className="text-slate-600 group-hover:text-cyan-400 transition-colors" size={20} />
                </div>

                <h3 className="text-2xl font-bold text-white tracking-tight mb-4 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/5 border border-white/5 rounded-lg text-[9px] font-bold text-slate-400 group-hover:text-cyan-200 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Result/Outcome */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">
                     Outcome
                  </span>
                  <span className={`font-bold text-sm italic tracking-tight ${project.tagText}`}>
                    {project.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;