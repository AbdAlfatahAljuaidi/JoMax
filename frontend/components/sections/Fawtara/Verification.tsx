import React from 'react';
import { ShieldCheck, Landmark, ArrowRightLeft, Cpu } from 'lucide-react';

const ComplianceSection = () => {
  return (
    <section className="bg-slate-900 py-32 relative overflow-hidden font-sans" dir="ltr">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#28CAE1]/20 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green text-xs font-bold tracking-[0.3em] uppercase">
              Regulatory Compliance
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Certified Identity & <br />
            <span className="text-slate-500">Legal Integration</span>
          </h2>
        </div>

        {/* New Design: Connection Architecture */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-24">
          
          {/* Left Side: The "Bridge" Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Domax Soft Node */}
              <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-xl group hover:border-brand-green transition-all duration-500">
                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center mb-6">
                  <Cpu className="text-brand-green w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">Domax System</h4>
                <p className="text-slate-500 text-sm">Automated data processing and XML UBL 2.1 generation.</p>
              </div>

              {/* ZATKA Node */}
              <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
                  <Landmark className="text-slate-400 w-6 h-6" />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">ZATKA Portal</h4>
                <p className="text-slate-500 text-sm">Official government clearance and reporting gateway.</p>
              </div>

              {/* Connection Overlay Label */}
              <div className="md:col-span-2 flex items-center justify-center py-4">
                <div className="flex items-center gap-4 bg-slate-800/80 px-6 py-3 rounded-full border border-slate-700">
                  <span className="text-brand-green text-xs font-black uppercase">Live Sync</span>
                  <ArrowRightLeft className="text-slate-500 w-4 h-4" />
                  <span className="text-white text-xs font-medium">Phase 2 Protocol</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Compliance Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-slate-700 to-transparent">
              <div className="bg-slate-900 p-8 rounded-3xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-brand-green p-3 rounded-xl shadow-[0_0_20px_rgba(40,202,225,0.3)]">
                    <ShieldCheck className="text-slate-950 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white text-2xl font-bold">Phase 2 Certified</h3>
                    <p className="text-brand-green text-sm font-medium">Clearance & Integration Phase</p>
                  </div>
                </div>
                <p className="text-slate-400 leading-relaxed italic">
                  "Domax Soft is specifically engineered to meet Phase 2 technical requirements, 
                  mandating direct real-time integration with the ZATKA platform."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-800 pt-16">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">Direct API Clearance</span>
            <span className="text-slate-500 text-sm">Instant validation from Fatoora portal.</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">Digital Identity Management</span>
            <span className="text-slate-500 text-sm">Automated CSID & cryptographic stamps.</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">UBL 2.1 Compliance</span>
            <span className="text-slate-500 text-sm">Fully compatible with international XML standards.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSection;