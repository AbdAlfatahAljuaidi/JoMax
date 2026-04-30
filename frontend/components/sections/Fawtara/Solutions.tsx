import React from 'react';
import { 
  FileText, Zap, QrCode, ShieldCheck, 
  Settings, BarChart3, LayoutGrid, Archive, ArrowUpRight 
} from 'lucide-react';

const solutions = [
  {
    title: "Electronic Invoicing",
    desc: "Generate tax invoices and debit/credit notes in XML format with certified digital signatures.",
    icon: <FileText size={24} />,
  },
  {
    title: "ZATKA API Sync",
    desc: "Direct integration with the Fatoora portal for real-time validation and instant reporting.",
    icon: <Zap size={24} />,
  },
  {
    title: "Certified QR Code",
    desc: "Encrypted QR codes compliant with TLV standards for all tax invoice types.",
    icon: <QrCode size={24} />,
  },
  {
    title: "Digital Signatures",
    desc: "Automated management of Cryptographic CSIDs and stamps with auto-renewal.",
    icon: <ShieldCheck size={24} />,
  },
  {
    title: "ERP Integration",
    desc: "Seamless connectivity with SAP, Oracle, Odoo, and cloud systems via Open API.",
    icon: <Settings size={24} />,
  },
  {
    title: "Analytics Dashboard",
    desc: "A comprehensive interface to monitor invoice status and detailed financial reports.",
    icon: <BarChart3 size={24} />,
  },
  {
    title: "Multi-Branch Support",
    desc: "Centrally manage invoicing for all company branches with consolidated reporting.",
    icon: <LayoutGrid size={24} />,
  },
  {
    title: "Legal Archiving",
    desc: "Secure storage of electronic invoices for 10+ years in compliance with regulations.",
    icon: <Archive size={24} />,
  },
];

const SolutionsSection = () => {
  return (
    <section className="bg-slate-900 py-32 relative overflow-hidden font-sans" dir="ltr">
      {/* Decorative Blur Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-green/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Modern Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-brand-green"></span>
              <span className="text-brand-green text-xs font-bold tracking-[0.4em] uppercase">Premium Features</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-none">
              Powerful Solutions <br />
              <span className="text-slate-600 italic">For Digital Growth.</span>
            </h2>
          </div>
          <div className="lg:mb-2 text-slate-400 max-w-sm">
            Everything you need to manage your electronic billing cycles under one secure, ZATKA-certified roof.
          </div>
        </div>

        {/* New Solution Grid: Hover-Border Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-slate-800/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="group relative p-10 bg-slate-900 hover:bg-slate-800/50 transition-all duration-500 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                {/* Icon with Glowing background */}
                <div className="relative w-12 h-12 mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-brand-green/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative text-brand-green group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-white text-xl font-bold mb-4 group-hover:translate-x-1 transition-transform duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Arrow Detail */}
              <div className="mt-8 flex items-center justify-between">
                <span className="h-[1px] w-0 bg-brand-green group-hover:w-12 transition-all duration-500"></span>
                <ArrowUpRight className="text-slate-700 group-hover:text-brand-green transition-colors w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;