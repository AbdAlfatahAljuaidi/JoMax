'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HeroSection = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // جلب اللغة المخزنة عند تحميل المكون
    const storedLang = localStorage.getItem('language') || 'en';
    setLang(storedLang);

    // إضافة مستمع لحدث التغيير في localStorage للتزامن مع الـ Navbar
    const handleStorageChange = () => {
      setLang(localStorage.getItem('language') || 'en');
    };

    window.addEventListener('storage', handleStorageChange);
    // كحل إضافي للتزامن في نفس النافذة، يمكن استخدام Custom Event أو التحديث كل ثانية
    const interval = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const isAr = lang === 'ar';

  // نصوص الترجمة
  const content = {
    badge1: isAr ? "🛡️ متوافق مع زاتكا" : "🛡️ ZATCA-Compliant",
    badge2: isAr ? "خبراء الربط" : "Integration Experts",
    title1: isAr ? "الفواتير الإلكترونية" : "E-Invoicing",
    title2: isAr ? "بمعايير عالمية" : "With Global Standards",
    title3: isAr ? "للمرحلة الثانية" : "For Phase Two",
    description: isAr 
      ? "جوماكس سوفت — منصة فواتير إلكترونية متكاملة متوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATCA)، وتتميز بالربط الكامل مع نظام فاتورة."
      : "Jomax Soft — An integrated e-invoicing platform compliant with the requirements of the Zakat, Tax and Customs Authority (ZATCA), featuring full integration with the Fatoora system.",
    demoBtn: isAr ? "احجز تجربة مجانية" : "Book a Demo",
    startBtn: isAr ? "ابدأ الآن" : "Get Started"
  };

  return (
    <section className="md:min-h-[145vh] md:pt-20 bg-[#01040a] text-white relative flex flex-col lg:block overflow-hidden">
      
      {/* 1. حاوية الصورة الخلفية الأساسية */}
      <div className="relative w-full h-[350px] sm:h-[450px] lg:absolute lg:inset-0 lg:h-full lg:w-full z-0">
        <Image 
          src="/images/wq.jpeg" 
          alt="Dashboard"
          fill
          className={`object-cover object-center transition-all duration-700 ${isAr ? 'lg:object-left' : 'lg:object-right'}`}
          priority
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#01040a] via-transparent to-transparent lg:bg-gradient-to-r ${isAr ? 'lg:from-transparent lg:to-[#01040a]' : 'lg:from-[#01040a] lg:to-transparent'} lg:via-[#01040a]/60 z-10`} />
        <div className={`hidden lg:block absolute top-1/2 ${isAr ? 'left-1/4' : 'right-1/4'} w-[400px] h-[400px] bg-cyan-600/20 blur-[120px] rounded-full -translate-y-1/2`} />
      </div>

      {/* 2. المحتوى الرئيسي */}
      <main className="container mx-auto px-6 lg:px-12 relative z-20 flex-1 flex items-center lg:min-h-screen">
        <div className={`max-w-3xl w-full py-12 lg:py-0 text-center ${isAr ? 'lg:text-right' : 'lg:text-left'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/40 border border-cyan-500/30 px-4 py-2 rounded-full text-[10px] lg:text-xs mb-8 backdrop-blur-md">
            <span className="text-cyan-400">{content.badge1}</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">{content.badge2}</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
            {content.title1} <br />
            <span className="text-white">{content.title2}</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-emerald-400">
              {content.title3}
            </span>
          </h1>
          
          <p className="text-slate-400 text-sm lg:text-lg mb-8 lg:mb-10 leading-relaxed mx-auto lg:mx-0">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="https://wa.me/962799198989" target="_blank" rel="noopener noreferrer" className="contents">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">
                {content.demoBtn} <span className={`text-xl ${isAr ? 'rotate-180' : ''}`}>→</span>
              </button>
            </a>
            <button className="border border-slate-700 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all backdrop-blur-md active:scale-95 text-center">
              {content.startBtn}
            </button>
          </div>
        </div>
      </main>

      {/* 3. حاوية الصورة السفلية */}
      <div className="relative lg:absolute bottom-0 left-0 w-full z-30">
        <div className="relative w-full overflow-hidden transition-all duration-500">
          <div className="w-full px-4 sm:px-6 lg:px-12 pb-10">
            <div className="container mx-auto">
              <div className="relative w-full h-[200px] md:h-[300px]"> 
                <Image 
                  src="/images/io.png" 
                  alt="banner"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;