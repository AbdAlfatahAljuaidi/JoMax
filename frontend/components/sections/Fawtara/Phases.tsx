'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, Zap, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const PhasesSection = () => {
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

  const content = {
    bgText: isAr ? "المراحل" : "Phase",
    title: isAr ? "جاهزيتنا" : "Our Readiness",
    titleSub: isAr ? "لكل خطوة" : "For Every Step",
    headerDesc: isAr 
      ? "متوافقون تماماً مع متطلبات (زاتكا) لمرحلتي الإصدار والربط."
      : "Fully compliant with ZATKA requirements for both Generation and Integration phases.",
    
    phase1Tag: isAr ? "المتطلبات الأولية" : "Initial Requirement",
    phase1Title: isAr ? "المرحلة الأولى: الإصدار" : "Phase One: Generation",
    phase1Features: isAr 
      ? ["صيغة XML متوافقة", "أكواد QR الإلزامية", "الفواتير الضريبية", "الأرشفة الرقمية"]
      : ["Compliant XML Format", "Mandatory QR Codes", "Tax Invoices", "Digital Archiving"],

    phase2Active: isAr ? "المرحلة النشطة" : "Active Phase",
    phase2Title: isAr ? "المرحلة الثانية: الربط" : "Phase Two: Integration",
    phase2Desc: isAr 
      ? "مزامنة آلية فورية مع أنظمة زاتكا عبر" 
      : "Automated real-time synchronization with ZATKA systems via",
    phase2Features: isAr
      ? ["ربط مباشر عبر API", "تصفية الفواتير", "تقارير فورية", "إدارة شهادات CSID", "معيار UBL 2.1", "تقارير مبسطة"]
      : ["Direct API Integration", "Invoice Clearance", "Real-time Reporting", "CSID Management", "UBL 2.1 Standard", "Simplified Reporting"],
    
    learnMore: isAr ? "تعرف على تفاصيل الربط" : "Learn about integration"
  };

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* Background Decor */}
      <div className={`absolute top-0 ${isAr ? 'right-10' : 'left-10'} text-[15rem] font-black text-white/[0.02] select-none pointer-events-none uppercase leading-none`}>
        {content.bgText}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
              {content.title} <br />
              <span className="text-cyan-500">{content.titleSub}</span>
            </h2>
          </div>
          <p className={`text-slate-400 max-w-sm text-lg ${isAr ? 'border-r-2 pr-6' : 'border-l-2 pl-6'} border-cyan-500/50 py-2`}>
            {content.headerDesc}
          </p>
        </div>

        <div className="space-y-32">
          
          {/* Phase 1: Card Style */}
          <div className={`relative flex flex-col lg:flex-row gap-12 items-center ${isAr ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
             <div className="flex-1 w-full bg-slate-900/40 border border-slate-800 p-8 md:p-12 rounded-[3rem] backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                   <div className="bg-slate-800 p-3 rounded-xl">
                      <ShieldCheck className="text-slate-400 w-6 h-6" />
                   </div>
                   <span className="text-slate-500 font-bold text-xs uppercase tracking-widest">{content.phase1Tag}</span>
                </div>
                <h3 className="text-white text-3xl font-bold mb-8">{content.phase1Title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {content.phase1Features.map(f => <FeatureItem key={f} text={f} />)}
                </div>
             </div>
             {/* Decorative element for Phase 1 if needed */}
             <div className="hidden lg:block w-1/4 h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent"></div>
          </div>

          {/* Phase 2: Content Separated from Image */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* The Image (fg.jpeg) - Separated */}
            <div className="relative order-2 lg:order-1 group">
               <div className="absolute -inset-4 bg-cyan-500/10 rounded-[3.5rem] blur-2xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
               <div className="relative h-[300px] md:h-[400px] w-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <Image 
                    src="/images/fg.jpeg" 
                    fill 
                    alt="Integration Technology" 
                    className=" transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#01040a] via-transparent to-transparent opacity-60"></div>
               </div>
               
               {/* Floating Badge on Image */}
               <div className="absolute top-8 right-8 bg-slate-900/90 backdrop-blur-md border border-white/10 px-6 py-4 rounded-2xl shadow-xl">
                  <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                     <span className="text-white font-mono text-sm">Fatoora API Live</span>
                  </div>
               </div>
            </div>

            {/* The Text Content - Separated */}
            <div className="order-1 lg:order-2">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-500 text-xs font-black uppercase tracking-tighter mb-8">
                  <Zap className="w-4 h-4 fill-current" />
                  {content.phase2Active}
               </div>
               
               <h3 className="text-white text-4xl md:text-6xl font-black mb-6 leading-tight">
                  {content.phase2Title}
               </h3>
               
               <p className="text-slate-400 text-xl mb-10 leading-relaxed">
                  {content.phase2Desc} <span className="text-white font-bold border-b-2 border-cyan-500">ZATKA Systems</span>. 
                  نضمن لك توافقاً كاملاً مع متطلبات الربط التقني للمرحلة الثانية.
               </p>

               <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {content.phase2Features.map(f => <FeatureItem key={f} text={f} active />)}
               </div>

               <button className="group flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-4 rounded-2xl transition-all active:scale-95 shadow-[0_20px_40px_rgba(6,182,212,0.2)]">
                  {content.learnMore}
                  <ArrowUpRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 ${isAr ? 'rotate-[-90deg]' : ''}`} />
               </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text, active = false }: { text: string; active?: boolean }) => (
  <div className="flex items-center gap-4 group cursor-default">
    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${active ? 'bg-cyan-500/20' : 'bg-slate-800'}`}>
      <CheckCircle2 className={`w-4 h-4 ${active ? 'text-cyan-400' : 'text-slate-600'}`} />
    </div>
    <span className={`text-base font-medium transition-colors ${active ? 'text-slate-200 group-hover:text-white' : 'text-slate-500'}`}>
      {text}
    </span>
  </div>
);

export default PhasesSection;