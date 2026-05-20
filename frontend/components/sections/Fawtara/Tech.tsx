'use client';

import React, { useState, useEffect } from 'react';
import { Send, LayoutDashboard, Terminal, Globe } from 'lucide-react';
import Image from 'next/image';

const TechAndCtaSection = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    setLang(storedLang);

    const handleStorageChange = () => {
      setLang(localStorage.getItem('language') || 'en');
    };

    const interval = setInterval(handleStorageChange, 500);
    return () => clearInterval(interval);
  }, []);

  const isAr = lang === 'ar';

  const technologies = [
    { name: "ISO 27001", cat: isAr ? "الأمن" : "Security" },
    { name: "256-bit TLS", cat: isAr ? "التشفير" : "Encryption" },
    { name: "SAP Integration", cat: isAr ? "أنظمة ERP" : "ERP" },
    { name: "Oracle ERP", cat: isAr ? "أنظمة ERP" : "ERP" },
    { name: "Odoo", cat: isAr ? "أنظمة ERP" : "ERP" },
    { name: "ZATCA APIs", cat: isAr ? "الربط" : "Integration" },
    { name: "UBL 2.1 XML", cat: isAr ? "المعايير" : "Standard" },
    { name: "REST API", cat: isAr ? "تطوير" : "Dev" },
    { name: "SHA-256", cat: isAr ? "الأمن" : "Security" },
    { name: "PKI / CSID", cat: isAr ? "الهوية" : "Identity" },
    { name: "Cloud Hosting", cat: isAr ? "البنية" : "Infra" },
    { name: "QR Code TLV", cat: isAr ? "زاتكا" : "ZATCA" }
  ];

  const content = {
    infraTag: isAr ? "البنية التحتية" : "Infrastructure",
    techTitle: isAr ? "مبني بأحدث" : "Built with",
    techTitleSub: isAr ? "التقنيات المتطورة" : "Advanced Tech",
    techDesc: isAr 
      ? "نعتمد تقنيات بمستوى المؤسسات الكبرى لضمان أمان كل فاتورة، امتثالها، وتسليمها في أجزاء من الثانية."
      : "We leverage enterprise-grade technologies to ensure every invoice is secure, compliant, and delivered in milliseconds.",
    ctaTitle: isAr ? "ابدأ رحلة" : "Start Your Smart",
    ctaTitleGreen: isAr ? "الفواتير الذكية اليوم" : "Invoicing Journey Today",
    ctaDesc: isAr 
      ? "تواصل مع فريق جوماكس سوفت للتسجيل كمزود خدمة معتمد والحصول على عرض متكامل يناسب احتياجات منشأتك."
      : "Connect with the Jomax Soft team to register as a certified service provider and get an integrated offer that fits your facility's needs.",
    ctaBtnPrimary: isAr ? "تواصل معنا" : "Contact Us",
    ctaBtnSecondary: isAr ? "استكشف الخدمات" : "Explore Services"
  };

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* 1. Tech Stack Matrix */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-32">
        <div className={`flex flex-col lg:flex-row items-start gap-16 ${isAr ? 'text-right' : 'text-left'}`}>
          
          <div className="lg:w-1/3 sticky top-24">
            <div className="inline-flex items-center gap-2 text-cyan-500 mb-6 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              <Terminal size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">{content.infraTag}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {content.techTitle} <br /> 
              <span className="text-slate-600 italic">{content.techTitleSub}</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
              {content.techDesc}
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-1 h-0 bg-cyan-500 group-hover:h-full transition-all duration-300" />
                <p className="text-[10px] text-slate-500 font-bold uppercase mb-2 tracking-tighter">
                  {tech.cat}
                </p>
                <p className="text-white font-bold group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Final CTA Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="relative group overflow-hidden rounded-[3.5rem] bg-slate-950 border border-white/10 shadow-2xl min-h-[500px] md:min-h-[600px] flex items-center justify-center">
          
          {/* Background Image with stronger Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/as.jpeg"
              alt="CTA Background" 
              fill
              className="object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#01040a] via-transparent to-[#01040a] opacity-90" />
            <div className="absolute inset-0 bg-slate-950/60" />
          </div>
          
          <div className="relative p-8 md:p-24 flex flex-col items-center text-center z-20 w-full">
            <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mb-8 border border-cyan-500/30 backdrop-blur-md">
              <Globe className="text-cyan-400 w-8 h-8" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-4xl tracking-tight leading-[1.1]">
              {content.ctaTitle} <br className="hidden md:block"/> 
              <span className="text-cyan-400">
                {content.ctaTitleGreen}
              </span>
            </h2>
            
            <p className="text-slate-300 text-lg mb-12 max-w-2xl leading-relaxed">
              {content.ctaDesc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-cyan-500 text-black font-black rounded-2xl transition-all hover:bg-white hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] active:scale-95">
                <Send className={`w-5 h-5 ${isAr ? 'rotate-180' : ''}`} />
                {content.ctaBtnPrimary}
              </button>
              <button className="flex items-center justify-center gap-3 px-10 py-5 bg-white/5 text-white font-bold rounded-2xl border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all">
                <LayoutDashboard className="w-5 h-5 text-cyan-400" />
                {content.ctaBtnSecondary}
              </button>
            </div>
          </div>

          {/* Decorative Bottom Line */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50"></div>
        </div>
      </div>

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2"></div>
    </section>
  );
};

export default TechAndCtaSection;