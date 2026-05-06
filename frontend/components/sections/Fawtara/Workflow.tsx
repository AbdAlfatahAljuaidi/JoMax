import React from 'react';
import { ArrowRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    id: "01",
    title: "Invoice Creation",
    subtitle: "UBL 2.1 Standard",
    desc: "Automatically converts data into ZATKA-approved XML format."
  },
  {
    id: "02",
    title: "Digital Signing",
    subtitle: "PKI Encryption",
    desc: "Signed using certified CSID certificates according to security standards."
  },
  {
    id: "03",
    title: "ZATKA Submission",
    subtitle: "Fatoora API",
    desc: "Seamless transfer via Reporting or Clearance API gateways."
  },
  {
    id: "04",
    title: "Instant Validation",
    subtitle: "Real-time Sync",
    desc: "Instant status updates directly from government servers."
  },
  {
    id: "05",
    title: "Secure Archiving",
    subtitle: "10+ Years Storage",
    desc: "Certified QR codes and long-term secure XML archiving."
  }
];

const WorkflowSection = () => {
  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden font-sans" dir="ltr">
      
      {/* --- أنيميشن مسار البيانات المنساب --- */}
      <style>{`
        @keyframes travel {
          0% { left: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        .data-bead {
          width: 4px;
          height: 4px;
          background: #22c55e;
          border-radius: 50%;
          position: absolute;
          top: -1.5px;
          filter: drop-shadow(0 0 5px #22c55e);
          animation: travel 6s linear infinite;
        }
        .scan-overlay {
          background: linear-gradient(to bottom, transparent 50%, rgba(34, 197, 94, 0.05) 50%);
          background-size: 100% 4px;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6">
            <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.3em]">Operational Flow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
            How we automate <br />
            <span className="text-slate-500 underline decoration-brand-green/30 underline-offset-8">your compliance.</span>
          </h2>
        </div>

        {/* --- Steps Grid --- */}
        <div className="relative mb-32">
          {/* Connector Line & Animated Beads */}
          <div className="absolute top-[2rem] left-0 w-full h-[1px] bg-gradient-to-r from-brand-green/40 via-slate-700 to-transparent hidden lg:block z-0">
             <div className="data-bead" style={{ animationDelay: '0s' }}></div>
             <div className="data-bead" style={{ animationDelay: '2s' }}></div>
             <div className="data-bead" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative mb-8 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green/10 transition-all duration-500 shadow-xl">
                    <span className="text-2xl font-black text-white group-hover:text-brand-green">{step.id}</span>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 translate-x-full hidden lg:block text-slate-800 group-hover:text-brand-green/50 transition-colors">
                      <ChevronRight size={20} />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <span className="text-brand-green text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    {step.subtitle}
                  </span>
                  <h3 className="text-white text-xl font-bold group-hover:text-brand-green transition-colors">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>

                <div className="absolute -top-12 -left-4 text-7xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-brand-green/[0.05] transition-all">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- الجديد: Integration Dashboard (تناسق كامل مع الصورة) --- */}
        <div className="relative group">
          <div className="bg-slate-800/20 border border-slate-800 rounded-[3rem] overflow-hidden backdrop-blur-xl shadow-2xl relative z-10">
            <div className="grid lg:grid-cols-2 items-center">
              
              {/* النص والأزرار (اليسار) */}
              <div className="p-10 md:p-16 space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Gateway Status: Active</span>
                  </div>
                  <h3 className="text-white text-3xl md:text-5xl font-black leading-tight">
                    Seamlessly Linked to <br /> 
                    <span className="text-brand-green/80">ZATKA Fatoora</span>
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    Automated real-time integration. Every invoice is validated and signed in milliseconds with zero human intervention.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <button className="flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-slate-950 font-black rounded-2xl hover:bg-white transition-all active:scale-95 shadow-xl shadow-brand-green/10 group/btn">
                    Connect Now <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  
                  <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-700/50 bg-slate-900/50">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                          <CheckCircle2 size={14} className="text-brand-green" />
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-tighter">Certified v2.1</span>
                  </div>
                </div>
              </div>

              {/* الصورة التكنولوجية (اليمين) - عرض احترافي ومكشوف */}
              <div className="relative h-full min-h-[450px] bg-slate-950/40 border-l border-slate-800 overflow-hidden">
                {/* طبقة المسح الضوئي (تأثير الشاشة) */}
                <div className="absolute inset-0 scan-overlay z-20 pointer-events-none opacity-30"></div>
                
                <div className="absolute inset-0 p-10">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-800 shadow-inner group-hover:border-brand-green/30 transition-colors duration-700">
                    <Image
                      src="/images/bv.png" 
                      alt="Integration Flow Visual" 
                      fill
                      className="w-full h-full object-cover object-center  group-hover:scale-105 transition-all duration-1000"
                    />
                    
                    {/* رادار نبضي فوق الصورة */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl animate-pulse"></div>
                    
                    {/* زوايا ديكورية */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-brand-green/40 rounded-tl-md"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-brand-green/40 rounded-br-md"></div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* توهج خلفي يعزز هيبة القسم */}
          <div className="absolute -inset-10 bg-brand-green/5 blur-[120px] rounded-[5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;