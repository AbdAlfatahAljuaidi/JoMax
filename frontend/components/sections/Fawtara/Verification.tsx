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

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.5; filter: blur(2px); }
          50% { transform: scale(1.2); opacity: 1; filter: blur(4px); }
        }

        .data-stream-line {
          stroke-dasharray: 20 80;
          animation: flow-line 4s linear infinite;
        }
      `}</style>

      {/* Decorative Lines */}
      <div className={`absolute top-0 ${isAr ? 'right-1/4' : 'left-1/4'} w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent`}></div>
      <div className={`absolute top-0 ${isAr ? 'left-1/4' : 'right-1/4'} w-px h-full bg-gradient-to-b from-transparent via-[#28CAE1]/20 to-transparent`}></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className={`max-w-3xl mb-20 ${isAr ? 'text-right' : 'text-left'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green text-xs font-bold tracking-[0.3em] uppercase">
              {content.badge}
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            {content.title} <br />
            <span className="text-slate-500">{content.titleSub}</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Column 1: The Visual Connection */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950/50 mb-10 group">
              <div className="relative w-full h-[400px] overflow-hidden rounded-2xl border border-slate-800"> 
                <Image
                    src="/images/bv.png" 
                    alt="Integration Visual" 
                    fill 
                    className="object-cover object-center transition-transform duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>

              {/* Data Flow Animation (Direction Aware) */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                <svg viewBox="0 0 800 500" className={`w-full h-full ${isAr ? 'scale-x-[-1]' : ''}`}>
                    <path d="M 150 250 L 650 250" stroke="url(#gradient-flow)" strokeWidth="2" fill="none" className="data-stream-line" />
                    <path d="M 160 280 L 640 280" stroke="url(#gradient-flow)" strokeWidth="1.5" fill="none" className="data-stream-line" style={{ animationDelay: '1s' }} />
                    <path d="M 140 220 L 660 220" stroke="url(#gradient-flow)" strokeWidth="1.5" fill="none" className="data-stream-line" style={{ animationDelay: '2s' }} />
                    <defs>
                        <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#28CAE1" stopOpacity="0" />
                            <stop offset="50%" stopColor="#28CAE1" stopOpacity="1" />
                            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm group hover:border-brand-green transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <Cpu className="text-brand-green w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{content.node1Title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{content.node1Desc}</p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
                <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} p-3`}>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                  <Landmark className="text-slate-400 w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">{content.node2Title}</h4>
                <p className="text-slate-500 text-xs leading-relaxed">{content.node2Desc}</p>
              </div>

              <div className="md:col-span-2 flex items-center justify-center pt-2 relative">
                <div className="flex items-center gap-3 bg-slate-800 px-5 py-2.5 rounded-full border border-slate-700 shadow-lg relative z-10">
                  <span className="text-brand-green text-xs font-black uppercase tracking-wider">{content.liveSync}</span>
                  <ArrowRightLeft className={`text-slate-500 w-3.5 h-3.5 ${isAr ? 'rotate-180' : ''}`} />
                  <span className="text-white text-xs font-medium">{content.protocol}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Compliance Details */}
          <div className="lg:col-span-1 space-y-10 order-1 lg:order-2">
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-slate-700 to-transparent shadow-xl">
              <div className="bg-slate-900/80 p-10 rounded-3xl backdrop-blur-lg">
                <div className={`flex items-start gap-5 mb-8 ${isAr ? 'flex-row' : ''}`}>
                  <div className="bg-brand-green p-4 rounded-2xl shadow-[0_0_30px_rgba(40,202,225,0.4)] flex-shrink-0">
                    <ShieldCheck className="text-slate-950 w-8 h-8 relative z-10" />
                  </div>
                  <div className={isAr ? 'text-right' : 'text-left'}>
                    <h3 className="text-white text-3xl font-extrabold tracking-tight">{content.certTitle}</h3>
                    <p className="text-brand-green text-base font-semibold mt-1">{content.certSub}</p>
                  </div>
                </div>
                <p className={`text-slate-300 text-lg leading-relaxed italic ${isAr ? 'border-r-4 pr-6 text-right' : 'border-l-4 pl-6 text-left'} border-slate-700 py-2`}>
                  "{content.certQuote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-800 pt-16 ${isAr ? 'text-right' : 'text-left'}`}>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">{content.feat1Title}</span>
            <span className="text-slate-500 text-sm">{content.feat1Desc}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">{content.feat2Title}</span>
            <span className="text-slate-500 text-sm">{content.feat2Desc}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">{content.feat3Title}</span>
            <span className="text-slate-500 text-sm">{content.feat3Desc}</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSection;