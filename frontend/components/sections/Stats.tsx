'use client';

import React from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

// مكون فرعي للرقم المتحرك
const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        (ref.current as HTMLElement).textContent = Math.floor(latest).toString();
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

export default function StatsSection() {
  const stats = [
    { label: 'CLIENTS WORLDWIDE', value: 500, suffix: '+' },
    { label: 'PROJECTS DELIVERED', value: 1200, suffix: '+' },
    { label: 'YEARS EXPERIENCE', value: 15, suffix: '+' },
    { label: 'CLIENT SATISFACTION', value: 98, suffix: '%' },
  ];

  return (
    <section className="relative bg-slate-50 py-24 overflow-hidden">
    {/* Background Pattern - Subtle Grid Design */}
    <div className="absolute inset-0 z-0 opacity-[0.03]" 
        >
    </div>
  
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="relative group bg-white p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-main/5 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center gap-3"
          >
            {/* Decorative Corner Accent */}
            <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-slate-100 group-hover:bg-brand-main transition-colors duration-500" />
            
            {/* Number & Suffix */}
            <div className="flex items-baseline justify-center">
              <span className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter group-hover:text-brand-main transition-colors duration-500">
                <AnimatedNumber value={stat.value} />
              </span>
              <span className="text-3xl md:text-4xl font-black text-brand-main ml-1">
                {stat.suffix}
              </span>
            </div>
            
            {/* Label with Animated Underline */}
            <div className="relative">
              <span className="text-[11px] font-black text-slate-400 tracking-[0.3em] uppercase">
                {stat.label}
              </span>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-main group-hover:w-full transition-all duration-500 opacity-50" />
            </div>
  
            {/* Background Highlight Effect */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand-main/[0.02] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}