'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Landmark, ArrowRightLeft, Cpu } from 'lucide-react';
import Image from 'next/image';

const ComplianceSection = () => {
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
    badge: isAr ? "الامتثال التنظيمي" : "Regulatory Compliance",
    title: isAr ? "هوية معتمدة و" : "Certified Identity &",
    titleSub: isAr ? "ربط قانوني متكامل" : "Legal Integration",
    node1Title: isAr ? "نظام جوماكس" : "Jomax System",
    node1Desc: isAr ? "معالجة آلية للبيانات وتوليد ملفات XML معيار UBL 2.1." : "Automated data processing and XML UBL 2.1 generation.",
    node2Title: isAr ? "بوابة زاتكا" : "ZATKA Portal",
    node2Desc: isAr ? "البوابة الحكومية الرسمية لاعتماد التقارير والفواتير." : "Official government clearance and reporting gateway.",
    liveSync: isAr ? "مزامنة مباشرة" : "Live Sync",
    protocol: isAr ? "بروتوكول المرحلة 2" : "Phase 2 Protocol",
    certTitle: isAr ? "معتمد للمرحلة الثانية" : "Phase 2 Certified",
    certSub: isAr ? "مرحلة الربط والتكامل" : "Clearance & Integration Phase",
    certQuote: isAr 
      ? "تم تصميم جوماكس سوفت خصيصاً لتلبية المتطلبات التقنية للمرحلة الثانية، والتي تفرض الربط المباشر واللحظي مع منصة زاتكا."
      : "Jomax Soft is specifically engineered to meet Phase 2 technical requirements, mandating direct real-time integration with the ZATKA platform.",
    feat1Title: isAr ? "اعتماد API مباشر" : "Direct API Clearance",
    feat1Desc: isAr ? "تحقق فوري من بوابة فاتورة." : "Instant validation from Fatoora portal.",
    feat2Title: isAr ? "إدارة الهوية الرقمية" : "Digital Identity Management",
    feat2Desc: isAr ? "أختام رقمية وشهادات CSID مؤتمتة." : "Automated CSID & cryptographic stamps.",
    feat3Title: isAr ? "امتثال معيار UBL 2.1" : "UBL 2.1 Compliance",
    feat3Desc: isAr ? "متوافق تماماً مع معايير XML العالمية." : "Fully compatible with international XML standards."
  };

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden font-sans" dir={isAr ? "rtl" : "ltr"}>
      
      <style>{`
        @keyframes flow-line {
          0% { stroke-dashoffset: ${isAr ? '-100' : '100'}; opacity: 0.2; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }
        .data-stream-line {
          stroke-dasharray: 20 80;
          animation: flow-line 4s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className={`max-w-3xl mb-12 ${isAr ? 'text-right' : 'text-left'}`}>
          <div className="flex items-center gap-3 mb-4 justify-start">
            <div className="w-10 h-[2px] bg-cyan-500"></div>
            <span className="text-cyan-500 text-xs font-bold tracking-[0.3em] uppercase">
              {content.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {content.title} <br />
            <span className="text-slate-500">{content.titleSub}</span>
          </h2>
        </div>

        {/* --- الصورة المطلوبة (تحت العنوان مباشرة وبنسبة عرض 80%) --- */}
        <div className="w-full  mb-16">
            <div className="relative w-full lg:w-[80%] h-[400px] md:h-[600px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                <Image
                    src="/images/xc.jpeg" 
                    alt="Integration Visual" 
                    fill 
                    className=" transition-transform duration-1000 group-hover:scale-105"
                    priority
                />
                {/* تأثير الأنيميشن فوق الصورة */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <svg viewBox="0 0 800 500" className={`w-full h-full ${isAr ? 'scale-x-[-1]' : ''}`}>
                        <path d="M 100 250 L 700 250" stroke="url(#gradient-flow)" strokeWidth="2" fill="none" className="data-stream-line" />
                        <defs>
                            <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#28CAE1" stopOpacity="0" />
                                <stop offset="50%" stopColor="#28CAE1" stopOpacity="1" />
                                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                {/* Overlay تدرج خفيف */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#01040a] via-transparent to-transparent opacity-60" />
            </div>
        </div>

        {/* تفاصيل الامتثال (النودز والنص) */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          
          {/* الـ Nodes (توزيع أفقي) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-800/20 border border-slate-800 backdrop-blur-sm group hover:border-cyan-500/50 transition-all">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center mb-4">
                <Cpu className="text-cyan-500 w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">{content.node1Title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.node1Desc}</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
              <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                <Landmark className="text-slate-400 w-5 h-5" />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">{content.node2Title}</h4>
              <p className="text-slate-500 text-xs leading-relaxed">{content.node2Desc}</p>
              <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} p-3`}>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
              </div>
            </div>

            <div className="md:col-span-2 flex items-center justify-center">
               <div className="flex items-center gap-3 bg-slate-800/50 px-5 py-2 rounded-full border border-slate-700">
                  <span className="text-cyan-400 text-[10px] font-black uppercase">{content.liveSync}</span>
                  <ArrowRightLeft className={`text-slate-500 w-3 h-3 ${isAr ? 'rotate-180' : ''}`} />
                  <span className="text-white text-[10px] font-medium">{content.protocol}</span>
               </div>
            </div>
          </div>

          {/* نص الشهادة */}
          <div className="bg-slate-800/10 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-cyan-500 p-3 rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                <ShieldCheck className="text-slate-950 w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">{content.certTitle}</h3>
                <p className="text-cyan-500 text-sm font-medium">{content.certSub}</p>
              </div>
            </div>
            <p className={`text-slate-400 text-base leading-relaxed italic ${isAr ? 'border-r-2 pr-4 text-right' : 'border-l-2 pl-4 text-left'} border-slate-700`}>
              "{content.certQuote}"
            </p>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-slate-800 pt-12 ${isAr ? 'text-right' : 'text-left'}`}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col gap-1">
              <span className="text-white font-bold text-sm">{content[`feat${i}Title`]}</span>
              <span className="text-slate-500 text-xs">{content[`feat${i}Desc`]}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComplianceSection;