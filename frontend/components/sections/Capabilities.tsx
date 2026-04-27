'use client';

import React from "react";
import { motion } from "framer-motion";
import { Building2, Wallet, Package, Users } from "lucide-react";

const nodes = [
  { icon: Building2, title: "Operations Core", x: "12%", y: "22%" },
  { icon: Wallet, title: "Finance Engine", x: "66%", y: "18%" },
  { icon: Package, title: "Supply Grid", x: "18%", y: "60%" },
  { icon: Users, title: "HR Intelligence", x: "64%", y: "62%" }
];

export default function ERPBlueprint() {
  return (
    <section className="bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] to-black py-28 px-8 text-white relative overflow-hidden">

      {/* ambient orbs */}
      <div className="absolute -top-20 left-20 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] bg-emerald-500/10 blur-[200px]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-16">
          <p className="text-brand-green uppercase tracking-[0.45em] text-xs mb-6">
            System Blueprint
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-[0.95]">
            Architecting
            <span className="block bg-gradient-to-r from-cyan-400 to-brand-green text-transparent bg-clip-text">
              Enterprise Flow
            </span>
          </h2>

          <p className="text-white/50 mt-6 max-w-2xl mx-auto">
            A unified system where every operational layer is interconnected in real-time.
          </p>
        </div>

        {/* frame */}
        <div className="relative h-[760px] rounded-[52px] border border-cyan-400/15 bg-white/[0.02] backdrop-blur-2xl overflow-hidden">

          {/* grid */}
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
linear-gradient(rgba(0,255,255,.08) 1px, transparent 1px),
linear-gradient(90deg, rgba(0,255,255,.08) 1px, transparent 1px)
`,
              backgroundSize: "65px 65px"
            }}
          />

          {/* animated energy field */}
          <motion.div
            className="absolute inset-0 bg-cyan-400/5"
            animate={{ opacity: [0.08, 0.2, 0.08] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* CORE (multi-layered) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            {/* outer glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-72 h-72 rounded-full border border-cyan-400/20"
            />

            {/* pulse ring */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute w-64 h-64 rounded-full bg-cyan-400/10 blur-xl"
            />

            {/* core body */}
            <div className="relative w-56 h-56 rounded-full bg-gradient-to-br from-cyan-500 to-brand-green p-[2px] shadow-[0_0_120px_rgba(0,255,220,.35)]">

              <div className="w-full h-full rounded-full bg-slate-950 flex flex-col items-center justify-center text-center p-8">
                <h3 className="text-4xl font-black mb-2">ERP CORE</h3>
                <p className="text-white/50 text-sm">
                  Unified Intelligence Engine
                </p>
              </div>

            </div>

          </div>

          {/* connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[
              ["28%", "30%", "50%", "50%"],
              ["70%", "28%", "50%", "50%"],
              ["30%", "70%", "50%", "50%"],
              ["68%", "70%", "50%", "50%"]
            ].map((l, i) => (
              <motion.line
                key={i}
                x1={l[0]}
                y1={l[1]}
                x2={l[2]}
                y2={l[3]}
                stroke="#00e6cc33"
                strokeWidth="1.5"
                animate={{ opacity: [0.2, 0.7, 0.2] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </svg>

          {/* nodes */}
          {nodes.map((node, i) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ scale: 1.08 }}
                className="absolute group"
                style={{ left: node.x, top: node.y }}
              >

                {/* glow dot */}
                <div className="absolute -left-2 -top-2 w-3 h-3 rounded-full bg-cyan-400 blur-sm opacity-70 group-hover:scale-150 transition" />

                {/* node (ultra minimal) */}
                <div className="flex items-center gap-5">

                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-300 backdrop-blur-xl group-hover:bg-white/10 transition">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg font-bold group-hover:text-cyan-300 transition">
                      {node.title}
                    </h4>
                    <p className="text-white/40 text-xs tracking-wide">
                      MODULE 0{i + 1}
                    </p>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}