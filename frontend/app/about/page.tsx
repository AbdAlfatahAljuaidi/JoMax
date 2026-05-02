'use client';

import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Zap, Eye, Code2, Cpu, Globe,Shield } from "lucide-react";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export default function AboutSection() {
  return (
    <div className="bg-slate-900">
      <NavBar />

      <section className="relative min-h-screen text-white overflow-hidden py-24 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_50%)]">
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Hero Section - The Identity */}
          <div className="mt-20 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl"
            >
              <h2 className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-4">// ARCHITECTS OF TOMORROW</h2>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                BEYOND THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  CODE LIMITS
                </span>
              </h1>
              <p className="text-xl text-slate-400 leading-relaxed border-l-2 border-cyan-500/30 pl-6">
                Jomaxsoft is not just a tech company; we are a digital foundry where logic meets imagination. Founded on the principle of "Hyper-Efficiency," we build systems that don't just work—they evolve.
              </p>
            </motion.div>
          </div>

          {/* Mission & Vision - Futuristic Cards */}
          <div className="grid md:grid-cols-2 gap-12 mb-40">
            {[
              {
                icon: <Target className="text-cyan-400" size={40} />,
                title: "The Mission",
                desc: "To accelerate human potential by engineering autonomous digital ecosystems that eliminate complexity.",
                color: "from-cyan-500/20"
              },
              {
                icon: <Eye className="text-blue-400" size={40} />,
                title: "The Vision",
                desc: "Setting the global standard for the 'Next-Gen' enterprise, where AI and human creativity merge seamlessly.",
                color: "from-blue-500/20"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`p-10 rounded-[40px] bg-gradient-to-br ${item.color} to-transparent border border-white/5 relative group overflow-hidden`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-150 transition-transform duration-700">
                  {item.icon}
                </div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values - The DNA Grid */}
          <div className="mb-40">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold italic tracking-tight">OUR CORE DNA</h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
              {[
                { title: "Innovation First", icon: <Zap size={20}/>, text: "We never settle for 'proven'. We seek the 'undiscovered'." },
                { title: "Quantum Speed", icon: <Rocket size={20}/>, text: "Rapid deployment without compromising architectural integrity." },
                { title: "Extreme Security", icon: <Shield size={20}/>, text: "Bulletproof protocols integrated into every line of code." },
                { title: "Global Scale", icon: <Globe size={20}/>, text: "Solutions designed to perform across continents instantly." },
                { title: "Human Centric", icon: <Users size={20}/>, text: "Technology built by humans, for humans, with soul." },
                { title: "Deep Logic", icon: <Code2 size={20}/>, text: "Clean, efficient, and sophisticated code architecture." }
              ].map((value, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="p-12 bg-slate-900/50 flex flex-col gap-4"
                >
                  <div className="text-cyan-400 flex items-center gap-2 font-mono text-sm">
                    {value.icon} {value.title}
                  </div>
                  <p className="text-slate-400 text-sm">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Interactive "Philosophy" Core */}
          <div className="relative py-20 px-10 rounded-[60px] bg-white/[0.02] border border-white/5 overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
            
            <motion.div
               animate={{ rotate: [0, 360] }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="absolute -top-24 -right-24 w-64 h-64 border border-cyan-500/10 rounded-full"
            />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">WANT TO BUILD THE FUTURE?</h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10">
              Join us in our journey to redefine what’s possible in the digital realm. Let's create something legendary.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-cyan-500 text-slate-900 font-bold rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
            >
              INITIATE PROJECT
            </motion.button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}