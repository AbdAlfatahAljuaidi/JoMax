import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';

const PhasesSection = () => {
  return (
    <section className="bg-slate-900 py-32 relative overflow-hidden font-sans" dir="ltr">
      
      {/* Decorative background text */}
      <div className="absolute top-10 left-10 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none">
        PHASE
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header with Side Line */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Our Readiness <br />
              <span className="text-brand-green">For Every Step</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-sm border-l-2 border-brand-green pl-6 py-2">
            Fully compliant with ZATKA requirements for both Generation and Integration phases.
          </p>
        </div>

        <div className="relative">
          
          {/* Phase 1: The Foundation (Lower Layer) */}
          <div className="relative z-10 w-full lg:w-3/4 mr-auto">
            <div className="bg-slate-800/20 border border-slate-800 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm group hover:bg-slate-800/40 transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-700">
                  <ShieldCheck className="text-slate-500 w-8 h-8" />
                </div>
                <div className="flex-1">
                  <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">Initial Requirement</span>
                  <h3 className="text-white text-3xl font-bold mt-2 mb-6">Phase One: Generation</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FeatureItem text="Compliant XML Format" />
                    <FeatureItem text="Mandatory QR Codes" />
                    <FeatureItem text="Tax Invoices" />
                    <FeatureItem text="Digital Archiving" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 2: The Future (Floating Layer) */}
          <div className="relative z-20 w-full lg:w-2/3 -mt-20 lg:-mt-32 ml-auto">
            <div className="p-[2px] rounded-[3rem] bg-gradient-to-br from-brand-green to-transparent shadow-2xl shadow-brand-green/10">
              <div className="bg-slate-950 p-8 md:p-12 rounded-[3rem] relative overflow-hidden">
                
                {/* Active Glow */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/10 blur-[80px] rounded-full"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="bg-brand-green p-4 rounded-2xl shadow-lg shadow-brand-green/20">
                      <Zap className="text-slate-950 w-8 h-8 fill-current" />
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[10px] font-black tracking-tighter uppercase">
                      Active Phase
                    </span>
                  </div>

                  <h3 className="text-white text-3xl md:text-4xl font-black mb-4">Phase Two: Integration</h3>
                  <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                    Automated real-time synchronization with ZATKA systems via <span className="text-white font-mono">Fatoora API</span>.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FeatureItem text="Direct API Integration" active />
                    <FeatureItem text="Invoice Clearance" active />
                    <FeatureItem text="Real-time Reporting" active />
                    <FeatureItem text="CSID Management" active />
                    <FeatureItem text="UBL 2.1 Standard" active />
                    <FeatureItem text="Simplified Reporting" active />
                  </div>
                  
                  <button className="mt-12 flex items-center gap-2 text-brand-green font-bold group/btn">
                    Learn about integration
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text, active = false }: { text: string; active?: boolean }) => (
  <div className="flex items-center gap-3">
    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${active ? 'text-brand-green' : 'text-slate-700'}`} />
    <span className={`text-sm md:text-base ${active ? 'text-slate-200' : 'text-slate-500'}`}>{text}</span>
  </div>
);

export default PhasesSection;