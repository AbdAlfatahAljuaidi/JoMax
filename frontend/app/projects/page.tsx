"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion ,Variants} from "framer-motion";

import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";

const page = () => {
  const projects = [
    {
      title: "FinEdge Banking Platform",
      category: "Web",
      description:
        "A next-generation digital banking platform handling 2M+ daily transactions with sub-100ms latency.",
      tech: ["React", "Node.js", "PostgreSQL"],
      result: "2M+ daily transactions",
      accentColor: "bg-blue-500",
      tagBg: "bg-blue-50",
      tagText: "text-blue-600",
      resultColor: "text-blue-600",
    },
    {
      title: "NeuralCommerce AI Engine",
      category: "AI",
      description:
        "Custom recommendation engine and dynamic pricing system that increased conversion rates by 34% for retail.",
      tech: ["Python", "TensorFlow", "FastAPI"],
      result: "+34% conversion rate",
      accentColor: "bg-emerald-500",
      tagBg: "bg-emerald-50",
      tagText: "text-emerald-600",
      resultColor: "text-emerald-600",
    },
    {
      title: "SecureVault Zero-Trust",
      category: "Security",
      description:
        "Designed and implemented a zero-trust network architecture for a defense contractor achieving NIST compliance.",
      tech: ["Palo Alto", "Okta", "IBM"],
      result: "NIST 800-207 certified",
      accentColor: "bg-orange-500",
      tagBg: "bg-orange-50",
      tagText: "text-orange-600",
      resultColor: "text-orange-600",
    },
  ];

  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

      const fadeUp: Variants = {
        hidden: {
          opacity: 0,
          y: 50,
        },
        show: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut" as const,
          },
        },
      };
      
      const stagger: Variants = {
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.12,
          },
        },
      };
  return (
    <div>
      <NavBar />

      <section className="relative py-40 px-6 bg-[#fcfdfe] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-main/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Stats */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-40"
          >
            {[
              { label: "Founded", value: "2011", sub: "Established Excellence" },
              { label: "Clients Served", value: "500+", sub: "Global Trust" },
              {
                label: "Projects Delivered",
                value: "1,200+",
                sub: "Successful Launches",
              },
              { label: "Countries", value: "30+", sub: "Regional Reach" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.03 }}
                className="relative group p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-xl transition-all text-center"
              >
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
                  {stat.label}
                </h4>
                <div className="text-5xl font-black text-slate-900 tracking-tighter mb-2 group-hover:text-brand-main transition-colors">
                  {stat.value}
                </div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                  Our Portfolio
                </span>
              </div>

              <h2 className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                Proven Work. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-green italic">
                  Real Results.
                </span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 bg-slate-100/50 p-2 rounded-[2rem] backdrop-blur-md border border-slate-200/50">
              {["All", "Web", "Mobile", "Cloud", "AI", "Security"].map(
                (tab) => (
                  <motion.button
                    key={tab}
                    whileTap={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                      activeTab === tab
                        ? "bg-slate-900 text-white shadow-lg"
                        : "hover:bg-white text-slate-400 hover:text-slate-900"
                    }`}
                  >
                    {tab}
                  </motion.button>
                )
              )}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            key={activeTab} // مهم عشان يعيد الأنيميشن عند الفلترة
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white border border-slate-100 rounded-[3rem] p-10 flex flex-col transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                <div
                  className={`absolute top-0 left-0 w-full h-2 ${project.accentColor}`}
                />

                <div className="flex justify-between items-start mb-8">
                  <div
                    className={`px-4 py-1.5 rounded-full ${project.tagBg} ${project.tagText} text-[9px] font-black uppercase tracking-widest`}
                  >
                    {project.category}
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-4 group-hover:text-brand-main transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1.5 bg-slate-50 rounded-lg text-[9px] font-bold text-slate-400 group-hover:bg-slate-100 group-hover:text-slate-600 transition-all"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* Result */}
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
                    Outcome
                  </span>
                  <span
                    className={`font-black text-sm italic ${project.resultColor}`}
                  >
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

export default page;