'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PartnerMarquee = () => {
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

  const partners = [
    { id: 1, logoUrl: '/images/Picture31.jpg' },
    { id: 2, logoUrl: '/images/Picture30.png' },
    { id: 3, logoUrl: '/images/Picture29.png' },
    { id: 4, logoUrl: '/images/Picture28.png' },
    { id: 5, logoUrl: '/images/Picture27.png' },
    { id: 6, logoUrl: '/images/Picture26.png' },
    { id: 7, logoUrl: '/images/invice.jpeg' },
  ];

  // تكرار المصفوفة لضمان تغطية عرض الشاشة الكاملة بدون فراغات أثناء الحركة
  const triplePartners = [...partners, ...partners, ...partners];

  return (
    <section className="w-full py-12 bg-gradient-to-b from-black border-b border-white/20 to-slate-900 overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] text-center">
          {isAr ? "تحالفات عالمية موثوقة" : "Trusted Global Alliances"}
        </h4>
      </div>

      {/* الحاوية الرئيسية - بعرض الشاشة الكاملة وموقع نسبي للأقنعة */}
      <div className="relative w-full flex flex-col gap-8 overflow-hidden mix-blend-screen">
        
        {/* Gradient Masks - تنعيم الحواف عند الأطراف بما يتناسب مع لون الخلفية */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-black via-slate-950/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-black via-slate-950/70 to-transparent z-10 pointer-events-none" />

        {/* السطر الأول: يتحرك باتجاه (حسب اللغة) */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap pr-16 md:pr-24"
            animate={{ x: isAr ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
            transition={{ duration: 35, ease: "linear", repeat: Infinity }}
          >
            {triplePartners.map((partner, index) => (
              <div 
                key={`row1-${index}`} 
                className="flex-shrink-0 w-36 h-12 md:w-48 md:h-16 flex items-center justify-center grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img 
                  src={partner.logoUrl} 
                  alt="Partner Logo" 
                  className="max-h-full w-auto object-contain" 
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* السطر الثاني: يتحرك بالاتجاه المعاكس تماماً */}
        <div className="flex w-full overflow-hidden">
          <motion.div
            className="flex gap-16 md:gap-24 items-center whitespace-nowrap pr-16 md:pr-24"
            // عكس قيم الـ x تماماً مقارنة بالسطر الأول ليصبح الاتجاه معاكساً
            animate={{ x: isAr ? ["0%", "-33.33%"] : ["-33.33%", "0%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }} // سرعة مختلفة قليلاً تعطي حيوية للتصميم
          >
            {triplePartners.map((partner, index) => (
              <div 
                key={`row2-${index}`} 
                className="flex-shrink-0 w-36 h-12 md:w-48 md:h-16 flex items-center justify-center  transition-all duration-300"
              >
                <img 
                  src={partner.logoUrl} 
                  alt="Partner Logo" 
                  className="max-h-full w-auto object-contain" 
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PartnerMarquee;