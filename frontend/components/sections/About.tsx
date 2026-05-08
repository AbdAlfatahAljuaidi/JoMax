'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function JomaxPortalWithImage() {
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
    badge: isAr ? "ذكاء جوماكس" : "Jomax Intelligence",
    titleMain: isAr ? "هيكلة منطق" : "The Architecture",
    titleSub: isAr ? "المستقبل" : "of Future Logic",
    description: isAr 
      ? "لقد بنينا هذا النظام ليكون الجسر بين البيانات المعقدة والقرارات البسيطة - ليس مجرد كود، بل فلسفة رقمية."
      : "We built this system to be the bridge between complex data and simple decisions — not just code, but a digital philosophy.",
    velocityLabel: isAr ? "سرعة الاستجابة" : "Response Velocity",
    ecoTitle: isAr ? "تدفق بيانات" : "Live Ecosystem",
    ecoSub: isAr ? "النظام المباشر" : "Data Streams",
    ecoDesc: isAr 
      ? "مزامنة لحظية عبر وحدات المؤسسة مع تدفق مستمر للبيانات، ومراقبة، واستجابات نظام تكيفية."
      : "Real-time synchronization across enterprise modules with continuous data flow, monitoring, and adaptive system responses.",
    tags: isAr 
      ? ['الاستقرار', 'القابلية للتوسع', 'الدقة', 'الأمان']
      : ['Stability', 'Scalability', 'Precision', 'Security']
  };

  return (
    <section className="bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] py-24 px-6 min-h-screen flex items-center justify-center relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* عناصر خلفية عائمة */}
      <div className={`absolute w-[600px] h-[600px] bg-[#00E6CC]/10 rounded-full blur-[150px] -top-20 ${isAr ? '-left-20' : '-right-20'}`} />
      
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 relative z-10">
        
        {/* الكرت الرئيسي: المحتوى النصي + دمج الصورة كخلفية فنية */}
        <div className="md:col-span-7 bg-[#0A0A0A] border border-white/10 p-12 rounded-[3rem] flex flex-col justify-between min-h-[500px] relative overflow-hidden group">
          <Image 
            src="/images/stats.png" 
            alt="Dashboard Stats" 
            fill 
            className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
          
          <div className="relative z-10 space-y-4">
            <h2 className="text-brand-green text-[10px] uppercase tracking-[0.4em] font-bold">{content.badge}</h2>
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
              {content.titleMain}<br /> 
              <span className="text-white/40">{content.titleSub}</span>
            </h1>
          </div>
          <p className="relative z-10 text-white/60 max-w-sm text-lg leading-relaxed">
            {content.description}
          </p>
        </div>

        {/* الكروت الجانبية */}
        <div className="md:col-span-5 grid grid-rows-2 gap-6">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-white/40 text-[10px] uppercase tracking-wider">{content.velocityLabel}</p>
              <p className="text-4xl font-black">12.4<span className="text-xl text-brand-green mx-1">ms</span></p>
            </div>
            <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center">
              <div className="w-8 h-8 bg-brand-green rounded-full animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.4)]" />
            </div>
          </div>

          <div className="bg-brand-green/10 border border-[#00E6CC]/20 rounded-[2.5rem] p-8 relative overflow-hidden">
            <h3 className="text-2xl font-bold relative z-10 leading-tight">
              {content.ecoTitle}<br/>{content.ecoSub}
            </h3>
            <p className="text-white/60 mt-3 relative z-10 text-sm leading-relaxed">
              {content.ecoDesc}
            </p>
            <div className={`absolute -bottom-10 ${isAr ? '-left-10' : '-right-10'} w-40 h-40 border border-[#00E6CC]/20 rounded-full`} />
          </div>
        </div>

        {/* شريط سفلي */}
        <div className="md:col-span-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-[2rem] p-6 flex flex-wrap justify-between items-center gap-4">
           {content.tags.map((tag) => (
             <span key={tag} className="text-white/30 font-medium text-xs md:text-sm flex items-center gap-2 uppercase tracking-widest">
               <div className="w-1.5 h-1.5 bg-brand-green rounded-full" /> {tag}
             </span>
           ))}
        </div>
      </div>
    </section>
  );
}