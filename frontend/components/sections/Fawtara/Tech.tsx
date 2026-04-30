import React from 'react';
import { Send, LayoutDashboard } from 'lucide-react';

const technologies = [
  "ISO 27001", "256-bit TLS", "Odoo", "Oracle ERP", "SAP Integration", 
  "Cloud Hosting", "REST API", "SHA-256", "QR Code TLV", "PKI / CSID", 
  "ZATKA APIs", "UBL 2.1 XML"
];

const TechAndCtaSection = () => {
  return (
    <section className="bg-slate-900 pt-20 pb-32 relative font-sans overflow-hidden" dir="ltr">
      
      {/* 1. World Class Technologies Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="text-center mb-12">
          <span className="text-brand-green text-sm font-bold tracking-widest uppercase">Technical Infrastructure</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">World-Class Technologies</h2>
          <p className="text-slate-400 mt-4">Our platform is built on the latest technologies to ensure performance, security, and compliance.</p>
        </div>

        {/* Tech Badges Cloud */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="px-5 py-2 rounded-full bg-slate-800/40 border border-slate-700/50 text-slate-300 text-sm font-medium hover:border-brand-green hover:text-brand-green transition-all cursor-default flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-green"></div>
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* 2. Final CTA Card Section */}
      <div className="container mx-auto px-6">
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden">
          {/* Background Gradient & Glow */}
          <div className="absolute inset-0 bg-[#0f172a] border border-slate-800"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(40,202,225,0.1),transparent_50%)]"></div>
          
          <div className="relative p-10 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Start Your Smart Invoicing Journey Today
            </h2>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Connect with the Domax Soft team to register as a certified service provider and get an integrated offer that fits your facility's needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-green/80 hover:brand-green text-slate-900 font-bold rounded-xl transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20">
                <Send className="w-5 h-5" />
                Contact Us
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl border border-slate-700 transition-all">
                <LayoutDashboard className="w-5 h-5" />
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Blur */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default TechAndCtaSection;