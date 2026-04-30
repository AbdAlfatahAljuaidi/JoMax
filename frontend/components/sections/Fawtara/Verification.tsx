import React from 'react';
import { ShieldCheck, Landmark } from 'lucide-react'; // Optional: Use Lucide icons for extra flair

const ComplianceSection = () => {
  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden font-sans" dir="ltr">
      <div className="container mx-auto px-6">
        
        {/* Top Header Section */}
        <div className="text-center mb-16">
          <span className="text-[#28CAE1] text-sm font-bold tracking-[0.2em] uppercase">
            Visual Identity
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            E-Invoicing Logo
          </h2>
        </div>

        {/* Logo/Verification Circle Graphic */}
        <div className="flex justify-center mb-24">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
            
            {/* The Main Circle Border */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-slate-700 flex flex-col items-center justify-center bg-slate-900/50 backdrop-blur-sm">
              {/* Document Icon Placeholder (Representing the Invoice) */}
              <div className="w-24 h-32 border-2 border-amber-400/50 rounded-lg relative mb-4 flex flex-col p-3 gap-2">
                <div className="w-full h-1 bg-slate-700 rounded"></div>
                <div className="w-2/3 h-1 bg-slate-700 rounded"></div>
                {/* The Green Checkmark Badge */}
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 p-2 rounded-full shadow-lg shadow-emerald-500/40">
                  <ShieldCheck className="text-slate-900 w-6 h-6" />
                </div>
              </div>
              
              <div className="text-center mt-4">
                <h3 className="text-white font-bold text-lg tracking-tight">DOMAX SOFT</h3>
                <p className="text-slate-500 text-[10px] uppercase tracking-widest mt-1">E-Invoicing System</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compliance Banner Card */}
        <div className="relative max-w-6xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-2xl border border-emerald-500/20"></div>
          
          <div className="relative p-8 md:p-12 flex flex-col md:flex-row-reverse items-center justify-between gap-8 backdrop-blur-md">
            
            {/* Icon Group */}
            <div className="flex items-center gap-4">
              <div className="p-4 bg-slate-800 rounded-2xl border border-slate-700">
                <Landmark className="text-slate-300 w-8 h-8" />
              </div>
            </div>

            {/* Content Group */}
            <div className="text-center md:text-right flex-1">
              <h3 className="text-brand-green text-xl md:text-2xl font-bold mb-3">
                Full Compliance with ZATKA Requirements – Phase 2 (Integration)
              </h3>
              <p className="text-slate-400 text-sm md:text-base max-w-3xl leading-relaxed ml-auto">
                Domax Soft is specifically engineered to meet Phase 2 (Integration Phase) technical requirements, 
                mandating direct real-time integration with the ZATKA platform for instant clearance of invoices 
                and credit/debit notes.
              </p>
            </div>

            {/* Badge */}
            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green text-slate-950 text-xs font-black uppercase tracking-tighter">
                <span className="w-2 h-2 bg-slate-900 rounded-full animate-pulse"></span>
                Phase 2 Certified
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSection;