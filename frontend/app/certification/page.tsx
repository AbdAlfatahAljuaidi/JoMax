"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

const page = () => {
  const orgCertifications = [
    {
      id: 1,
      shortName: "SOC2",
      title: "SOC 2 Type II",
      authority: "AICPA",
      year: "2023",
      color: "bg-sky-600",
      description:
        "Third-party audit confirming security, availability, and privacy controls.",
    },
    {
      id: 2,
      shortName: "ISO",
      title: "ISO/IEC 27001",
      authority: "ISO",
      year: "2022",
      color: "bg-indigo-600",
      description:
        "Global standard certifying Information Security Management Systems.",
    },
    {
      id: 3,
      shortName: "AWS",
      title: "AWS Advanced Partner",
      authority: "Amazon Web Services",
      year: "2024",
      color: "bg-orange-500",
      description:
        "Recognized for cloud expertise, migrations, and certified architects.",
    },
  ];

  const teamCertifications = [
    { name: "AWS Solutions Architect Professional", count: 24 },
    { name: "Google Cloud Engineer", count: 18 },
    { name: "CISSP", count: 12 },
    { name: "CKA", count: 15 },
    { name: "Azure Architect Expert", count: 20 },
    { name: "CEH", count: 9 },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <div>
      <NavBar />

      <section className="relative py-40 px-6 bg-[#fcfdfe] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-main/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl mb-24 space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">
                Compliance & Standards
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Standards <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-green italic">
                We Uphold.
              </span>
            </h2>

            <p className="text-slate-500 text-xl font-medium max-w-xl">
              Certifications represent trust, security, and excellence.
            </p>
          </motion.div>

          {/* Org Certifications */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32"
          >
            {orgCertifications.map((cert) => (
              <motion.div
                key={cert.id}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex justify-between items-start mb-8">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className={`w-16 h-16 rounded-[1.25rem] ${cert.color} flex items-center justify-center text-white font-black text-xl`}
                  >
                    {cert.shortName}
                  </motion.div>

                  <span className="text-[10px] font-black text-slate-300 group-hover:text-brand-green">
                    {cert.year}
                  </span>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-black text-slate-900">
                    {cert.title}
                  </h4>
                  <p className="text-[10px] font-black text-brand-main uppercase">
                    {cert.authority}
                  </p>
                  <p className="text-sm text-slate-500">
                    {cert.description}
                  </p>
                </div>

                {/* Progress */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-50">
                  <div className="w-0 group-hover:w-full h-full bg-brand-green transition-all duration-1000" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Certifications */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {teamCertifications.map((cert, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 5 }}
                className="group flex items-center justify-between p-6 bg-white/60 backdrop-blur-md border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:text-brand-main">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="font-bold text-slate-700 group-hover:text-slate-900">
                    {cert.name}
                  </span>
                </div>

                <span className="text-2xl font-black text-slate-200 group-hover:text-brand-green">
                  {cert.count}
                </span>
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