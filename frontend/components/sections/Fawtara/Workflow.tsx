import React from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Invoice Creation",
    subtitle: "UBL 2.1 Standard",
    desc: "Automatically converts data into ZATKA-approved XML format with all mandatory fields."
  },
  {
    id: "02",
    title: "Digital Signing",
    subtitle: "PKI Encryption",
    desc: "Invoices are signed using certified CSID certificates according to security standards."
  },
  {
    id: "03",
    title: "ZATKA Submission",
    subtitle: "Fatoora API",
    desc: "Seamless transfer to ZATKA platform via Reporting or Clearance API gateways."
  },
  {
    id: "04",
    title: "Instant Validation",
    subtitle: "Real-time Sync",
    desc: "Instant status updates and official timestamps directly from government servers."
  },
  {
    id: "05",
    title: "Secure Archiving",
    subtitle: "10+ Years Storage",
    desc: "Final PDF delivery with certified QR codes and long-term secure XML archiving."
  }
];

const WorkflowSection = () => {
  return (
    <section className="bg-slate-900 py-32 relative overflow-hidden font-sans" dir="ltr">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 opacity-[0.02] bg-[zinc-grid-pattern] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header - Left Aligned for a modern look */}
        <div className="mb-24 max-w-3xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6">
            <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.3em]">Operational Flow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
            How we automate <br />
            <span className="text-slate-500 underline decoration-brand-green/30 underline-offset-8">your compliance.</span>
          </h2>
        </div>

        {/* Steps Grid - Zig-Zag Layout */}
        <div className="relative">
          {/* Horizontal Connector Line (Desktop Only) */}
          <div className="absolute top-[4.5rem] left-0 w-full h-[1px] bg-gradient-to-r from-brand-green/50 via-slate-800 to-transparent hidden lg:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                
                {/* Step Number & Icon */}
                <div className="relative mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green/10 transition-all duration-500">
                    <span className="text-2xl font-black text-white group-hover:text-brand-green">{step.id}</span>
                  </div>
                  {/* Small connector arrow for desktop */}
                  {index !== steps.length - 1 && (
                    <div className="absolute top-1/2 -right-4 translate-x-full hidden lg:block text-slate-700 group-hover:text-brand-green transition-colors">
                      <ChevronRight size={24} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="flex flex-col">
                    <span className="text-brand-green text-[10px] font-bold uppercase tracking-widest mb-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {step.subtitle}
                    </span>
                    <h3 className="text-white text-xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors">
                    {step.desc}
                  </p>
                </div>

                {/* Vertical number background decoration */}
                <div className="absolute -top-12 -left-4 text-7xl font-black text-white/[0.03] select-none pointer-events-none group-hover:text-brand-green/[0.05] transition-colors">
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div className="mt-24 p-8 rounded-[2rem] bg-slate-800/30 border border-slate-800/50 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 rounded-full bg-brand-green animate-pulse"></div>
            <p className="text-slate-300 font-medium">Ready for real-time integration with ZATKA Fatoora Portal</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-green text-slate-950 font-bold rounded-xl hover:bg-brand-green/90 transition-all active:scale-95">
            Get Started Now <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;