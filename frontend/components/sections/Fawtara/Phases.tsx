import React from 'react';
import { CheckCircle2, Link2, FileCode2 } from 'lucide-react';

const PhasesSection = () => {
  return (
    <section className="bg-slate-900 py-24 relative font-sans" dir="ltr">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-green text-sm font-bold tracking-widest uppercase">
            Invoicing Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Full Support for Both Phases
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Our platform fully covers ZATKA requirements for both the Generation Phase and the Integration Phase.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Phase 2 - Integration (The Active One) */}
          <div className="relative group order-1 md:order-2">
            {/* Active Border Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            
            <div className="relative bg-slate-900 border border-emerald-500/50 rounded-2xl p-8 h-full">
              {/* Active Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-emerald-500/10 text-brand-green text-[10px] font-bold px-3 py-1 rounded-full border border-emerald-500/20 uppercase tracking-tighter">
                  Currently Active
                </span>
              </div>

              <div className="flex flex-col items-end text-right">
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/20">
                  <Link2 className="text-brand-green w-6 h-6" />
                </div>

                <h3 className="text-white text-2xl font-bold mb-2">Phase Two – Integration</h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Real-time integration with ZATKA (Fatoora) portal via API for instant invoice clearance and reporting.
                </p>

                <ul className="space-y-4 w-full">
                  <FeatureItem text="Direct API Integration" active />
                  <FeatureItem text="Tax Invoice Clearance" active />
                  <FeatureItem text="Simplified Invoice Reporting" active />
                  <FeatureItem text="CSID & CCSID Management" active />
                  <FeatureItem text="Full UBL 2.1 XML Support" active />
                </ul>
              </div>
            </div>
          </div>

          {/* Phase 1 - Generation */}
          <div className="relative bg-slate-800/30 border border-slate-800 rounded-2xl p-8 h-full order-2 md:order-1 transition-all hover:bg-slate-800/50">
            <div className="flex flex-col items-end text-right">
              <div className="w-12 h-12 bg-slate-700 rounded-xl flex items-center justify-center mb-6">
                <FileCode2 className="text-slate-400 w-6 h-6" />
              </div>

              <h3 className="text-white text-2xl font-bold mb-2">Phase One – Generation</h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                Generating e-invoices in compliant XML format with mandatory QR codes as per ZATKA standards.
              </p>

              <ul className="space-y-4 w-full">
                <FeatureItem text="Approved Tax Invoices" />
                <FeatureItem text="Credit & Debit Notes" />
                <FeatureItem text="Encrypted QR Code" />
                <FeatureItem text="Digital Signature" />
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Reusable Component for List Items
const FeatureItem = ({ text, active = false }: { text: string; active?: boolean }) => (
  <li className="flex items-center justify-end gap-3 group/item">
    <span className={`text-sm ${active ? 'text-slate-300' : 'text-slate-500'}`}>{text}</span>
    <CheckCircle2 className={`w-5 h-5 ${active ? 'text-brand-green' : 'text-slate-700'}`} />
  </li>
);

export default PhasesSection;