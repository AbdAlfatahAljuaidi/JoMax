import React from 'react';
import { 
  FileText, 
  Zap, 
  QrCode, 
  ShieldCheck, 
  Settings, 
  BarChart3, 
  LayoutGrid, 
  Archive 
} from 'lucide-react';

const solutions = [
  {
    title: "Electronic Invoicing",
    desc: "Generate and issue tax invoices and debit/credit notes in XML format with a certified digital signature.",
    icon: <FileText className="w-6 h-6 text-blue-400" />,
  },
  {
    title: "API Integration with ZATKA",
    desc: "Direct integration with the Fatoora portal for real-time validation and instant invoice reporting.",
    icon: <Zap className="w-6 h-6 text-amber-400" />,
  },
  {
    title: "Certified QR Code",
    desc: "Generate encrypted QR codes compliant with TLV standards for both simplified and standard tax invoices.",
    icon: <QrCode className="w-6 h-6 text-emerald-400" />,
  },
  {
    title: "Digital Signatures & CSID",
    desc: "Automated management of Cryptographic CSIDs and stamps, with auto-renewal before expiration.",
    icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
  },
  {
    title: "ERP & Accounting Integration",
    desc: "Seamless connectivity with SAP, Oracle, Odoo, and cloud accounting systems via our open API.",
    icon: <Settings className="w-6 h-6 text-slate-400" />,
  },
  {
    title: "Dashboard & Analytics",
    desc: "A comprehensive interface to monitor all invoices, validation status, and detailed financial reports.",
    icon: <BarChart3 className="w-6 h-6 text-rose-400" />,
  },
  {
    title: "Multi-Branch Support",
    desc: "Centrally manage invoicing for all company branches and facilities with consolidated reporting.",
    icon: <LayoutGrid className="w-6 h-6 text-cyan-400" />,
  },
  {
    title: "Legal Archiving",
    desc: "Secure storage and archiving of electronic invoices for 10+ years in compliance with legal regulations.",
    icon: <Archive className="w-6 h-6 text-indigo-400" />,
  },
];

const SolutionsSection = () => {
  return (
    <section className="bg-slate-900 py-24 relative font-sans" dir="ltr">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-brand-green text-sm font-bold tracking-[0.3em] uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">
            Integrated E-Invoicing Solutions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We provide a comprehensive suite of tools designed to cover all business needs for digital invoicing compliance.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50  transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/20"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 border border-slate-700 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-brand-green transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-green transition-all duration-300 group-hover:w-full rounded-b-2xl opacity-50"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;