import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center bg-slate-900 overflow-hidden font-sans" dir="ltr">
      
      {/* 1. Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)]" />
      
      {/* Animated Light Beam */}
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full animate-pulse" />

      {/* Main Container with Horizontal Padding */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className="lg:w-7/12 text-left">
            {/* Minimalist Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/5 border border-emerald-500/20 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
                ZATKA Certified Provider
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
              E-Invoicing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28CAE1] to-emerald-400">
                World-Class
              </span> <br />
              <span className="relative inline-block mt-2">
                Standards
                <div className="absolute -bottom-2 left-0 w-full h-2 bg-emerald-500/30 rounded-full"></div>
              </span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed border-l-2 border-slate-800 pl-8">
              Domax Soft — A comprehensive e-invoicing platform integrated with ZATKA requirements. 
              Issue <span className="text-white font-semibold">UBL 2.1</span> invoices with digital signatures 
              and real-time API synchronization.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl transition-all hover:shadow-[0_20px_40px_rgba(16,185,129,0.25)] active:scale-95">
                Explore Services
              </button>
              <button className="px-10 py-4 bg-slate-800/40 hover:bg-slate-800 text-white font-semibold rounded-2xl border border-slate-700 backdrop-blur-sm transition-all active:scale-95">
                How it works?
              </button>
            </div>
          </div>

          {/* Right Side: Visual Stats Card */}
          <div className="lg:w-5/12 w-full max-w-lg mx-auto lg:mx-0">
            <div className="relative p-[1px] rounded-[2.5rem] bg-gradient-to-br from-slate-700 to-transparent shadow-2xl">
              <div className="relative bg-slate-900/90 backdrop-blur-2xl p-8 md:p-10 rounded-[2.5rem] overflow-hidden">
                
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-6 relative z-10">
                  <StatBox label="ZATKA Compliant" value="100%" color="text-emerald-400" />
                  <StatBox label="XML Standard" value="UBL 2.1" color="text-[#28CAE1]" />
                  <StatBox label="Support" value="24/7" color="text-emerald-400" />
                  <StatBox label="Integration" value="API" color="text-[#28CAE1]" />
                </div>

                {/* Integration Status Footer */}
                <div className="mt-8 pt-8 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest">Current Status</p>
                    <p className="text-slate-200 font-bold">Phase Two Integration</p>
                  </div>
                  <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black rounded-lg">
                    LIVE
                  </div>
                </div>

                {/* Subtle Background Shape in Card */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#28CAE1]/10 blur-3xl rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const StatBox = ({ label, value, color }: { label: string; value: string; color: string }) => (
  <div className="group cursor-default">
    <div className={`text-3xl md:text-4xl font-black mb-2 transition-transform duration-300 group-hover:scale-110 ${color}`}>
      {value}
    </div>
    <div className="text-[10px] md:text-xs uppercase tracking-widest text-slate-500 font-bold leading-tight">
      {label}
    </div>
  </div>
);

export default HeroSection;