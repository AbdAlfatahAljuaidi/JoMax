"use client";

import React from "react";
import { CheckCircle2, Award } from "lucide-react";
import { motion, Variants } from "framer-motion";

import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

const CertificationsPage = () => {
  const orgCertifications = [
    {
      id: 1,
      shortName: "SOC2",
      title: "SOC 2 Type II",
      authority: "AICPA",
      year: "2023",
      // تم تغيير الألوان لتكون أكثر سطوعاً في الوضع الداكن
      color: "text-sky-400 bg-sky-950/50", 
      description:
        "Third-party audit confirming security, availability, and privacy controls.",
    },
    {
      id: 2,
      shortName: "ISO",
      title: "ISO/IEC 27001",
      authority: "ISO",
      year: "2022",
      color: "text-indigo-400 bg-indigo-950/50",
      description:
        "Global standard certifying Information Security Management Systems.",
    },
    {
      id: 3,
      shortName: "AWS",
      title: "AWS Advanced Partner",
      authority: "Amazon Web Services",
      year: "2024",
      color: "text-orange-400 bg-orange-950/50",
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

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="bg-slate-900 text-white min-h-screen selection:bg-brand-main/20 selection:text-white uppercase tracking-tighter">
      <NavBar />

      <main>
        <section className="relative py-40 px-6 overflow-hidden">
          {/* Glow Effect - تم تقليل الشفافية قليلاً */}
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-main/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Header */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="max-w-3xl mb-24 space-y-6"
            >
              {/* Badge - تم تعديل ألوانه */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-slate-800 border border-slate-700 shadow-xl">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
                  Compliance & Standards
                </span>
              </div>

              {/* Title - تحويل النصوص للون الأبيض */}
              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                Standards <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-green italic">
                  We Uphold.
                </span>
              </h2>

              {/* Subtitle - تحويل النصوص للرمادي الفاتح */}
              <p className="text-slate-400 text-xl font-medium max-w-xl normal-case">
                Certifications represent trust, security, and excellence in engineering.
              </p>
            </motion.div>

            {/* Org Certifications Grid */}
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
                  whileHover={{ y: -10 }}
                  // تعديل الكروت: خلفية داكنة، تأثير زجاجي، حدود خفيفة
                  className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-[2.5rem] p-8 overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(6,182,212,0.15)] hover:border-brand-main/50"
                >
                  <div className="flex justify-between items-start mb-8">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      className={`w-16 h-16 rounded-[1.25rem] ${cert.color} flex items-center justify-center font-black text-xl border border-white/5 shadow-inner`}
                    >
                      {cert.shortName}
                    </motion.div>

                    {/* الرمادي الفاتح للسنة */}
                    <span className="text-[10px] font-black text-slate-600 group-hover:text-brand-green">
                      {cert.year}
                    </span>
                  </div>

                  <div className="space-y-3 relative z-10">
                    <h4 className="text-xl font-black text-white uppercase group-hover:text-brand-main transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                      {cert.authority}
                    </p>
                    <p className="text-sm text-slate-500 normal-case leading-relaxed font-medium">
                      {cert.description}
                    </p>
                  </div>

                  {/* Progress Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-700">
                    <div className="w-0 group-hover:w-full h-full bg-brand-main transition-all duration-1000 ease-out" />
                  </div>
                  
                  {/* زخرفة خلفية بسيطة */}
                  <Award size={100} className="absolute -bottom-10 -right-10 text-white/[0.02] pointer-events-none group-hover:text-white/[0.05] transition-colors" />
                </motion.div>
              ))}
            </motion.div>

            {/* Team Certifications */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {teamCertifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ x: 5 }}
                  // تعديل القائمة: خلفية داكنة وتأثير زجاجي خفيف
                  className="group flex items-center justify-between p-6 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl hover:bg-slate-800 hover:shadow-xl hover:border-slate-600 transition-all active:scale-[0.98]"
                >
                  <div className="flex items-center gap-6">
                    {/* أيقونة السيان */}
                    <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center group-hover:text-brand-main text-cyan-400 shadow-inner">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="font-bold text-slate-300 group-hover:text-white uppercase text-sm tracking-wide transition-colors">
                      {cert.name}
                    </span>
                  </div>

                  {/* العدد باللون الأبيض والسيان عند الحوم */}
                  <span className="text-2xl font-black text-slate-600 group-hover:text-brand-green transition-colors">
                    {cert.count}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CertificationsPage;