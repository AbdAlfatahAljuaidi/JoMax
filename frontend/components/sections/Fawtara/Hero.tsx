import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] py-32 flex items-center justify-center bg-slate-900 overflow-hidden font-sans" dir="ltr">
      {/* 1. Radial Gradient Background */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] pointer-events-none" 
        aria-hidden="true"
      />

      {/* 2. Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_at_center,black,transparent)] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" 
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        
        {/* Badge - ZATKA Approved */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 mb-10 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-slate-300 text-xs md:text-sm font-medium tracking-wider uppercase">
            Certified Provider — ZATKA (Fatoora) Compliant
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight leading-[1.1]">
          E-Invoicing <br/>
          <span className="text-[#28CAE1] drop-shadow-[0_0_15px_rgba(40,202,225,0.3)]">
            World-Class Standards
          </span> 
          <span className="text-brand-green block mt-2">
            For Phase Two (Integration)
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-3xl mx-auto text-slate-400 text-base md:text-lg lg:text-xl mb-12 leading-relaxed font-light">
          Domax Soft — A comprehensive e-invoicing platform fully integrated with ZATKA requirements. 
          Seamlessly issue invoices in <span className="text-slate-200 font-mono">UBL 2.1</span> format 
          with digital signatures and real-time API synchronization.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-24">
          <button className="group relative px-10 py-4 bg-brand-green/80 hover:bg-brand-green text-slate-950 font-bold rounded-2xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.2)] active:scale-95">
            Explore Services
          </button>
          <button className="px-10 py-4 bg-slate-800/50 hover:bg-slate-800 text-white font-semibold rounded-2xl border border-slate-700 backdrop-blur-md transition-all duration-300 active:scale-95">
            How it works?
          </button>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto border-t border-slate-800/60 pt-16">
          <StatBox label="ZATKA Compliant" value="100%" />
          <StatBox label="XML Standard" value="UBL 2.1" />
          <StatBox label="Continuous Support" value="24/7" />
          <StatBox label="Smart Integration" value="API" />
        </div>

      </div>
    </section>
  );
};

// Sub-component for Stats
const StatBox = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col items-center group cursor-default">
    <span className="text-2xl md:text-4xl font-black text-white group-hover:text-[#28CAE1] transition-colors duration-300">
      {value}
    </span>
    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mt-2 group-hover:text-slate-400 transition-colors">
      {label}
    </span>
  </div>
);

export default HeroSection;