'use client';

import React from "react";
import { motion } from "framer-motion";
import { Building2, Wallet, Package, Users } from "lucide-react";

const nodes = [
  { icon: Building2, title: "Ops", pos: "rotate-0" },
  { icon: Wallet, title: "Fin", pos: "rotate-90" },
  { icon: Package, title: "Supply", pos: "rotate-180" },
  { icon: Users, title: "HR", pos: "rotate-[270deg]" }
];

export default function ERPBlueprint() {
  return (
    <section className="bg-slate-900 py-2 px-3 text-white overflow-hidden">
      <div className="max-w-md mx-auto">

        <h2 className="text-sm font-black text-center mb-2">
          System Blueprint
        </h2>

        <div className="relative h-[150px] rounded-xl border border-cyan-400/10 bg-white/[0.02] flex items-center justify-center">

          {/* Core */}
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-400 p-[1.5px] z-20">
            <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center">
              <span className="text-[7px] font-bold">
                CORE
              </span>
            </div>
          </div>

          {/* Orbit */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            {nodes.map((node,i)=>{
              const Icon = node.icon;

              return(
                <div
                  key={i}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${node.pos}`}
                  style={{ transformOrigin:'0px 0px' }}
                >
                  <div className="relative -top-[52px] flex flex-col items-center">
                    <div className="w-5 h-5 rounded-md bg-slate-800 border border-cyan-400/20 flex items-center justify-center">
                      <Icon
                        size={10}
                        className="text-cyan-300"
                      />
                    </div>

                    <span className="text-[6px] mt-[2px] text-white/50 uppercase">
                      {node.title}
                    </span>
                  </div>
                </div>
              )
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}