'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Rocket, ShieldCheck, Headphones, ArrowRight, ArrowLeft, Play } from 'lucide-react';

const StatItem = ({ icon: Icon, label, value, isAr }: { icon: any, label: string, value: string, isAr: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="text-cyan-400"><Icon size={28} /></div>
    <div className={isAr ? "text-right" : "text-left"}>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

export default function HeroSection() {
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
    badge: isAr ? "✨ ابتكار. بناء. نمو." : "✨ Innovate. Build. Grow.",
    title: isAr ? "تمكين نمو الأعمال عبر" : "Powering Business Growth Through",
    titleHighlight: isAr ? "برمجيات و ERP ذكية" : "Smart ERP & Software",
    desc: isAr 
      ? "تقدم جومكس سوفت حلول ERP قوية، فوترة إلكترونية، حلول سحابية وبرمجيات مخصصة تساعد الشركات على أتمتة عملياتها، زيادة الكفاءة وتحقيق نمو مستدام."
      : "Jomaxsoft delivers powerful ERP, e-invoicing, cloud solutions and custom software that help businesses automate operations, increase efficiency and achieve sustainable growth.",
    btnPrimary: isAr ? "استكشف الحلول" : "Explore Solutions",
    btnSecondary: isAr ? "احجز عرضاً تجريبياً" : "Book a Demo",
    stats: [
      { icon: Users, label: isAr ? "عميل سعيد" : "Happy Clients", value: "250+" },
      { icon: Rocket, label: isAr ? "مشروع مكتمل" : "Projects Delivered", value: "1,200+" },
      { icon: ShieldCheck, label: isAr ? "استقرار النظام" : "System Uptime", value: "99.9%" },
      { icon: Headphones, label: isAr ? "دعم فني خبير" : "Expert Support", value: "24/7" }
    ]
  };

  return (
    <section 
      className="relative min-h-screen bg-[#02050e] text-white overflow-hidden font-sans"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* الخلفية */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02050e]" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 container mx-auto px-6 pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* الجانب النصي */}
          <motion.div 
            initial={{ opacity: 0, x: isAr ? 50 : -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }}
            className={isAr ? "text-right" : "text-left"}
          >
            <div className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
              {content.badge}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6 tracking-tight">
              {content.title} <br />
              <span className="text-cyan-400">{content.titleHighlight}</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
              {content.desc}
            </p>
            
            <div className={`flex gap-4 ${isAr ? "justify-start" : ""}`}>
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition">
                {content.btnPrimary} {isAr ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </button>
              <button className="flex items-center gap-2 border border-gray-600 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition">
                {content.btnSecondary} <Play size={16} className={isAr ? "rotate-180" : ""} />
              </button>
            </div>
          </motion.div>

          {/* الجانب المرئي */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block h-[500px] w-full bg-gradient-to-tr from-blue-900/20 to-cyan-900/20 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden"
          >
            {/* يمكنك هنا وضع صورة المنتج أو الـ 3D */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
          </motion.div>
        </div>

        {/* شريط الإحصائيات (Stats Bar) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl"
        >
          {content.stats.map((stat, i) => (
            <StatItem key={i} icon={stat.icon} label={stat.label} value={stat.value} isAr={isAr} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}