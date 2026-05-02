'use client';

import React from "react";
import { motion } from "framer-motion";
import { Cpu, Orbit, Shield, Sparkles, Zap, Globe, Layers } from "lucide-react";
import Footer from "@/components/sections/Footer";
import { div } from "three/src/nodes/math/OperatorNode.js";
import NavBar from "@/components/sections/NavBar";

export default function page() {
  return (
    <div>
        <NavBar/>
    
    <section className="relative min-h-screen bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white overflow-hidden py-24">
      
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-700/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Headline */}
        <div className="text-center my-32">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter"
          >
            WE BUILD <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">
              DIGITAL UNIVERSES
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-10 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed"
          >
            Jomaxsoft is not just a development agency. We engineer sophisticated enterprise ecosystems designed to automate growth and redefine digital efficiency.
          </motion.p>
        </div>

        {/* Floating Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <Cpu size={32}/>, title: "Neural ERP", text: "Intelligent resource planning that adapts to your unique business flow." },
            { icon: <Globe size={32}/>, title: "Cloud Galaxies", text: "Scalable infrastructure that powers your operations across the globe." },
            { icon: <Shield size={32}/>, title: "Quantum Security", text: "Military-grade protection for your most sensitive enterprise data." },
            { 
              icon: <Layers size={32}/>, 
              title: "Web Development", 
              text: "High-performance, immersive web applications built with cutting-edge frameworks." 
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -15 }}
              className="group relative rounded-[32px] p-8 bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

       {/* Futuristic Core - Enhanced Version */}
<div className="mt-40 flex flex-col items-center">
  <div className="relative flex items-center justify-center">
    
    {/* Outer Pulsing Glow - طبقة التوهج الخارجي */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"
    />

    {/* Spinning Outer Ring - الحلقة الخارجية المتقطعة */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute w-56 h-56 rounded-full border-2 border-dashed border-cyan-500/20"
    />

    {/* Middle Orbiting Ring - الحلقة الوسطى المعاكسة */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute w-48 h-48 rounded-full border border-blue-400/30 border-t-transparent border-b-transparent"
    />

    {/* The Core - القلب المركزي */}
    <motion.div 
      whileHover={{ scale: 1.1, rotate: 90 }}
      initial={{ boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
      animate={{ 
        boxShadow: [
          "0 0 20px rgba(6, 182, 212, 0.5)",
          "0 0 50px rgba(6, 182, 212, 0.8)",
          "0 0 20px rgba(6, 182, 212, 0.5)"
        ]
      }}
      transition={{ 
        boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 0.5 } 
      }}
      className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center cursor-pointer overflow-hidden"
    >
      {/* Internal Scanning Light - تأثير ضوء المسح الداخلي */}
      <motion.div 
        animate={{ x: [-100, 200] }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 blur-md"
      />
      
      <Sparkles size={40} className="text-white relative z-20" />
    </motion.div>

    {/* Orbiting Particle - جسيم صغير يدور حول القلب */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      className="absolute w-48 h-48"
    >
      <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] absolute top-0 left-1/2 -translate-x-1/2" />
    </motion.div>
  </div>

  {/* Subtitle with Glitch-like animation */}
  <motion.p 
    initial={{ opacity: 0.5 }}
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="mt-12 text-cyan-400 font-mono tracking-[0.3em] uppercase text-xs"
  >
     System Status: Operational
  </motion.p>
</div>

        {/* Bottom Stats - Optimized Grid */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
          {[
            { n: "250+", l: "Happy Clients" },
            { n: "1.2K+", l: "Projects Shipped" },
            { n: "99.9%", l: "System Uptime" },
            { n: "24/7", l: "Expert Support" }
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{item.n}</div>
              <div className="text-slate-500 text-sm uppercase tracking-widest">{item.l}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
      <Footer />
    </div>
  );
}