"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Zap } from "lucide-react";

import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

const ClientsPage = () => {
  const clients = [
    { name: "Meridian Bank" },
    { name: "Apex Health" },
    { name: "Stratas Logistics" },
    { name: "Vertex AI" },
    { name: "CoreDefense" },
    { name: "NovaBuild" },
    { name: "PulseRetail" },
    { name: "GlobalBridge" },
  ];

  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div className="bg-slate-900 text-white min-h-screen 
    bg-[radial-gradient(circle_at_center,rgba(40,202,225,.15),transparent_60%)]">
      
      <NavBar />

      {/* 🔥 HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.85] tracking-tighter">
          TRUST <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
            EXPERIENCE
          </span>
        </h1>
      </section>

      {/* 🔥 HORIZONTAL CLIENTS */}
      <section ref={containerRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">

          <motion.div
            style={{ x }}
            className="flex gap-24 px-20 md:px-32"
          >
            {clients.map((c, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08, y: -10 }}
                className="min-w-[380px] md:min-w-[480px] h-[320px] md:h-[380px] 
                bg-[#0a0a0a] border border-white/10 rounded-[3rem] 
                flex flex-col items-center justify-center text-center 
                shadow-xl hover:shadow-[0_0_60px_rgba(6,182,212,0.2)] 
                transition-all duration-500 relative overflow-hidden"
              >
                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-all duration-500" />

                {/* initials */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-black font-black text-2xl mb-6 shadow-lg">
                  {c.name.split(" ").map(w => w[0]).join("")}
                </div>

                <h3 className="text-2xl md:text-3xl font-black tracking-tight">
                  {c.name}
                </h3>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="py-40 px-6 md:px-12 max-w-5xl mx-auto">

<h2 className="text-5xl md:text-7xl font-black mb-20 text-center">
  PERFORMANCE
</h2>

<div className="space-y-10">

  {[
    { label: "Client Growth", value: 90 },
    { label: "Retention Rate", value: 98 },
    { label: "Project Success", value: 95 },
    { label: "Customer Satisfaction", value: 92 },
  ].map((item, i) => (
    
    <div key={i} className="space-y-3">
      
      <div className="flex justify-between text-sm uppercase tracking-widest">
        <span className="text-slate-400">{item.label}</span>
        <span className="text-cyan-400 font-bold">{item.value}%</span>
      </div>

      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.value}%` }}
          transition={{ duration: 1 }}
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>

    </div>
  ))}

</div>
</section>

      {/* 🔥 TESTIMONIALS */}
      <section className="py-40 px-6 md:px-12 max-w-7xl mx-auto">

{/* HEADER */}
<div className="text-center mb-24">
  <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
    WHY CLIENTS <span className="text-cyan-400 italic">CHOOSE US</span>
  </h2>
  <p className="text-slate-500 mt-6 max-w-xl mx-auto normal-case">
    We don’t just deliver services — we engineer outcomes.
  </p>
</div>

{/* GRID */}
<div className="grid md:grid-cols-2 gap-8">

  {[
    {
      title: "Engineering Precision",
      desc: "We build systems with surgical accuracy and scalable architecture.",
    },
    {
      title: "Fast Execution",
      desc: "From idea to production in record time without sacrificing quality.",
    },
    {
      title: "Enterprise Security",
      desc: "Security-first approach built for high-risk environments.",
    },
    {
      title: "Scalable Systems",
      desc: "We design infrastructure that grows with your business."
    }
  ].map((item, i) => (

    <div
      key={i}
      className="group relative p-[1px] rounded-[2.5rem] overflow-hidden"
    >

      {/* Animated Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 opacity-40 group-hover:opacity-100 transition-all duration-500 animate-pulse" />

      {/* Inner Card */}
      <div className="relative bg-[#0a0a0a] rounded-[2.5rem] p-10 h-full
        transition-all duration-500 group-hover:translate-y-[-6px]">

        {/* glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[2.5rem]" />

        {/* CONTENT */}
        <div className="relative z-10 space-y-6">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg" />
            <span className="text-xs text-cyan-400 uppercase tracking-[0.3em]">
              0{i + 1}
            </span>
          </div>

          <h3 className="text-3xl font-black uppercase tracking-tight">
            {item.title}
          </h3>

          <p className="text-slate-400 leading-relaxed normal-case">
            {item.desc}
          </p>

        </div>

      </div>

    </div>

  ))}

</div>
</section>

      <Footer />
    </div>
  );
};

export default ClientsPage;