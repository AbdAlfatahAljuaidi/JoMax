"use client";

import React from "react";
import { Quote } from "lucide-react";
import { motion,Variants } from "framer-motion";

import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";

const page = () => {
  const clients = [
    { id: 1, name: "Meridian Bank", initials: "MB", sector: "Financial Services", color: "bg-blue-600" },
    { id: 2, name: "Apex Health", initials: "AH", sector: "Healthcare", color: "bg-emerald-500" },
    { id: 3, name: "Stratas Logistics", initials: "SL", sector: "Supply Chain", color: "bg-orange-500" },
    { id: 4, name: "Vertex AI", initials: "VA", sector: "Artificial Intelligence", color: "bg-purple-600" },
    { id: 5, name: "CoreDefense", initials: "CD", sector: "Cybersecurity", color: "bg-rose-600" },
    { id: 6, name: "NovaBuild", initials: "NB", sector: "Construction Tech", color: "bg-sky-500" },
    { id: 7, name: "PulseRetail", initials: "PR", sector: "E-Commerce", color: "bg-pink-600" },
    { id: 8, name: "GlobalBridge", initials: "GB", sector: "Media & Streaming", color: "bg-indigo-600" },
  ];
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut" as const,
      },
    },
  };
  
  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div>
      <NavBar />

      <section className="relative py-40 px-6 bg-[#fcfdfe] overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-main/5 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center text-center mb-24 space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                Trust Network
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Companies That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-green italic">
                Trust Us.
              </span>
            </h2>

            <p className="text-slate-500 text-xl font-medium max-w-2xl leading-relaxed">
              From startups to enterprise giants — we power global infrastructure.
            </p>
          </motion.div>

          {/* Clients */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32"
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative bg-white border border-slate-100 rounded-[2.5rem] p-8 flex flex-col items-center justify-center gap-4 transition-all duration-700 hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-14 h-14 rounded-2xl ${client.color} flex items-center justify-center text-white font-black text-lg shadow-lg`}
                >
                  {client.initials}
                </motion.div>

                <div className="text-center">
                  <h4 className="text-sm font-black text-slate-900 tracking-tight">
                    {client.name}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {client.sector}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-brand-main/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem]" />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-900 rounded-[4rem] p-12 md:p-20 relative overflow-hidden mb-40 shadow-2xl"
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(#fff 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "Active Clients", value: "500+" },
                { label: "Industries", value: "18" },
                { label: "Retention Rate", value: "98%" },
                { label: "Satisfaction", value: "4.9/5" },
              ].map((stat, idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em]">
                    {stat.label}
                  </h4>
                  <div className="text-5xl md:text-6xl font-black text-white italic tracking-tighter">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white/60 backdrop-blur-xl border border-slate-100 rounded-[3rem] p-10 flex flex-col justify-between hover:shadow-2xl transition-all duration-700"
              >
                <div className="text-brand-main/20 mb-8">
                  <Quote size={40} />
                </div>

                <p className="text-slate-600 text-lg font-medium leading-relaxed italic mb-10">
                  "Jomax transformed our infrastructure completely."
                </p>

                <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-white" />
                  <div>
                    <h4 className="font-black text-slate-900 text-sm">
                      Marcus Webb
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      CTO, Meridian Bank
                    </p>
                  </div>

                  <div className="ml-auto flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <div
                        key={s}
                        className="w-1.5 h-1.5 rounded-full bg-brand-green"
                      />
                    ))}
                  </div>
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