import React from 'react';
import { CheckCircle2, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const PhasesSection = () => {
  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden font-sans" dir="ltr">
      
      {/* --- بداية تعديل: أنيميشن الخلفية الدائم --- */}
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-pulse-ring {
          animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float-slow 5s ease-in-out infinite;
        }
      `}</style>
      {/* --- نهاية تعديل الأنيميشن --- */}

      {/* Decorative background text */}
      <div className="absolute top-10 left-10 text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase">
        Phase
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
          
          {/* صورة خلفية تربط بين المرحلتين (بصرية تقنية) */}
          <div className="absolute inset-0 z-0 opacity-30 pointer-events-none hidden lg:block">
            <Image
              src="/images/tech-flow.png" // افترض أن هذه هي الصورة التقنية الجديدة
              alt="Technology Flow"
              fill
              className="w-full h-full object-contain object-center scale-110"
            />
          </div>

          {/* Phase 1: The Foundation (Lower Layer) */}
          <div className="relative z-10 w-full lg:w-3/4 mr-auto animate-float">
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
            
            {/* تأثير النبض خلف الكرت (أنيميشن دائم) */}
            <div className="absolute -inset-4 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-brand-green/20 rounded-full blur-3xl animate-pulse-ring"></div>
            </div>

            <div className="p-[2px] rounded-[3rem] bg-gradient-to-br from-brand-green to-transparent shadow-2xl shadow-brand-green/10 relative z-10">
              <div className="bg-slate-950 p-8 md:p-12 rounded-[3rem] relative overflow-hidden">
                
                {/* Active Glow Background Image inside card */}
                <div className="absolute inset-0 opacity-50 pointer-events-none">
                     <img src="/images/phase.jpeg" alt="Overlay" className="w-full h-full object-cover" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="bg-brand-green p-4 rounded-2xl shadow-lg shadow-brand-green/20">
                      <Zap className="text-slate-950 w-8 h-8 fill-current" />
                    </div>
                    <div className="flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                        <span className="px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/30 text-brand-green text-[10px] font-black tracking-tighter uppercase">
                        Active Phase
                        </span>
                    </div>
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