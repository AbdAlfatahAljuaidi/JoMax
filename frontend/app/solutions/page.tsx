'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  Smile,
  LifeBuoy,
  CheckCircle,
  Zap
} from "lucide-react";

import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export default function BrutalistAboutUpdated() {
  return (
    <div className="bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)]  text-[#fff] min-h-screen selection:bg-cyan-500 selection:text-black uppercase tracking-tighter font-sans">
      <NavBar />

      <main className="relative">

        {/* --- HERO --- */}
        <section className="relative h-[90vh] flex flex-col justify-end px-6 md:px-16 pb-20 overflow-hidden">
          <div className="relative z-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="h-px w-20 bg-cyan-500" />
              <span className="text-cyan-500 font-mono text-sm tracking-[0.4em]">
                Established 2011 // Jomax
              </span>
            </motion.div>

            <h1 className="text-[12vw] md:text-[11vw] font-black leading-[0.8] tracking-[-0.05em] mb-10">
              ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                DOMINANCE.
              </span>
            </h1>
          </div>
        </section>

        {/* --- MISSION & VISION (NEW DESIGN) --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen border-y border-white/10">

          {[{
            title: "Our Mission",
            icon: Target,
            text: "Providing innovative, efficient cloud software solutions for modern enterprises.",
            img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200"
          },
          {
            title: "Our Vision",
            icon: Eye,
            text: "To become the leading regional provider of high-performance software architectures.",
            img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200"
          }].map((item, i) => (

            <div key={i} className="relative group overflow-hidden">

              {/* Image */}
              <img
                src={item.img}
                className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 group-hover:opacity-40 transition-all duration-1000"
              />

              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Content */}
              <div className="relative h-full p-12 md:p-20 flex flex-col justify-between backdrop-blur-sm group-hover:backdrop-blur-md transition-all">

                <item.icon className="text-cyan-400 group-hover:scale-125 transition-all duration-500" size={44} />

                <div className="space-y-6">
                  <h3 className="text-6xl md:text-7xl font-black italic tracking-tight group-hover:text-cyan-400 transition-all duration-500">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-lg max-w-md leading-relaxed normal-case">
                    {item.text}
                  </p>
                </div>

                {/* Border Glow */}
                <div className="absolute inset-0 border border-transparent group-hover:border-cyan-500/40 transition-all duration-500" />

              </div>
            </div>
          ))}
        </section>

        {/* --- VALUES --- */}
        <section className="py-40 px-6 md:px-16">
          <h2 className="text-8xl font-black mb-24">
            CORE <span className="text-cyan-500 italic font-light">VALUES</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { title: "Innovation", icon: Lightbulb },
              { title: "Quality", icon: Award },
              { title: "Transparency", icon: Eye },
              { title: "Customer Focus", icon: Smile },
              { title: "Commitment", icon: CheckCircle },
              { title: "24/7 Support", icon: LifeBuoy },
            ].map((val, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(6, 182, 212, 0.05)" }}
                className="bg-black p-12 group"
              >
                <div className="flex justify-between mb-12">
                  <val.icon className="text-cyan-500" size={32} />
                  <span className="text-white/10 font-black text-4xl">0{i + 1}</span>
                </div>
                <h4 className="text-3xl font-black mb-4">{val.title}</h4>
                <p className="text-slate-500 text-sm normal-case italic">
                  Precision in every line of code.
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PROCESS --- */}
        <section className="relative h-screen px-4 md:px-10 mb-40">
          <motion.div
            initial={{ clipPath: "inset(20% 0 20% 0)" }}
            whileInView={{ clipPath: "inset(0% 0 0% 0)" }}
            transition={{ duration: 1.2 }}
            className="relative h-full w-full overflow-hidden rounded-[4rem]"
          >
            <img
              src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2800"
              className="w-full h-full object-cover grayscale brightness-50 opacity-40"
            />

            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
              <h2 className="text-7xl md:text-[9vw] font-black italic mb-20">
                THE PROCESS.
              </h2>

              <div className="grid md:grid-cols-5 gap-px bg-white/20 border border-white/20">
                {["01 Discovery", "02 Diagnosis", "03 Blueprint", "04 Execute", "05 Evolve"].map((step, i) => (
                  <div key={i} className="bg-black/60 p-10 backdrop-blur-md hover:bg-cyan-500 transition-all group">
                    <h4 className="text-xl font-black group-hover:text-black">
                      {step}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* --- CTA (NEW DESIGN) --- */}
        <section className="relative py-52 flex flex-col items-center overflow-hidden">

          {/* Glow */}
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/20 blur-[150px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Rotating Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <Zap className="text-cyan-400 mb-10" size={70} />
          </motion.div>

          {/* Title */}
          <h2 className="text-6xl md:text-[8vw] font-black text-center mb-12 leading-[0.85]">
            READY TO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 italic">
              ACTIVATE?
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-400 text-lg mb-12 text-center max-w-xl normal-case">
            Let’s build something powerful, scalable, and future-proof together.
          </p>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-14 py-5 bg-cyan-500 text-black font-black text-lg rounded-full overflow-hidden"
          >
            <span className="relative z-10">INITIALIZE PROJECT</span>

            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-all duration-300" />
          </motion.button>
        </section>

      </main>

      <Footer />
    </div>
  );
}