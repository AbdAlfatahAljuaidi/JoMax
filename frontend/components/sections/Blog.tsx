'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BlogSection() {
  const [lang, setLang] = useState('en');
  const [active, setActive] = useState(0);

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

  const posts = [
    { 
      id: '01', 
      title: isAr ? 'تفكير الأنظمة المستقبلية' : 'Future Systems Thinking', 
      category: isAr ? 'أبحاث' : 'Research', 
      desc: isAr ? 'غوص عميق في الهيكلية النظامية والأطر المنطقية للبرمجيات.' : 'Deep dive into systemic architecture and logical frameworks.' 
    },
    { 
      id: '02', 
      title: isAr ? 'هندسة السحاب العملاقة' : 'Architecting Cloud Scale', 
      category: isAr ? 'سحابي' : 'Cloud', 
      desc: isAr ? 'إتقان الأنظمة الموزعة للتطبيقات ذات الكثافة المرورية العالية.' : 'Mastering distributed systems for high-traffic applications.' 
    },
    { 
      id: '03', 
      title: isAr ? 'الذكاء في حركة' : 'Intelligence In Motion', 
      category: isAr ? 'ذكاء اصطناعي' : 'AI', 
      desc: isAr ? 'تطوير محركات استنتاج لحظية لواجهات المستخدم الحديثة.' : 'Developing real-time inference engines for modern interfaces.' 
    },
    { 
      id: '04', 
      title: isAr ? 'أمن بلا حدود' : 'Security Beyond Boundaries', 
      category: isAr ? 'سيبراني' : 'Cyber', 
      desc: isAr ? 'تنفيذ بروتوكولات الثقة الصفرية في هيكليات الخدمات المصغرة.' : 'Implementing zero-trust protocols in microservice architectures.' 
    }
  ];

  const content = {
    selectLabel: isAr ? "اختر الرؤية" : "Select Insight",
    readMore: isAr ? "قراءة القصة كاملة" : "READ FULL STORY"
  };

  return (
    <section className="bg-slate-900  text-white py-20 relative overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* خط ديكوري علوي ناعم */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-5 gap-12 md:gap-16 items-center">
          
          {/* الجانب الأيسر: قائمة التحكم الذكية */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-[11px] uppercase tracking-[0.3em] text-cyan-500/70 font-mono mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              {content.selectLabel}
            </h4>
            
            <div className="space-y-1 relative">
              {posts.map((post, i) => {
                const isSelected = active === i;
                return (
                  <button
                    key={post.id}
                    onClick={() => setActive(i)}
                    className={`w-full relative py-5 px-4 rounded-xl transition-colors duration-300 group flex items-center gap-6 ${isSelected ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                  >
                    {/* خلفية متحركة ذكية عند التحديد */}
                    {isSelected && (
                      <motion.div 
                        layoutId="activeGlow"
                        className="absolute inset-0 bg-slate-900 border border-white/10 rounded-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    <span className={`font-mono text-sm relative z-10 transition-transform duration-300 ${isSelected ? 'text-cyan-400 font-bold' : 'group-hover:scale-105'}`}>
                      {post.id}
                    </span>
                    
                    <span className="text-lg md:text-xl font-medium tracking-tight relative z-10 transition-transform duration-300">
                      {post.title}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* الجانب الأيمن: شاشة العرض السينمائية */}
          <div className="md:col-span-3 min-h-[460px] bg-gradient-to-b from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-8 md:p-14 relative overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-sm">
            
            {/* توهج زاوية البطاقة الداخلي */}
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: isAr ? 30 : -30, filter: "blur(4px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, x: isAr ? -30 : 30, filter: "blur(4px)" }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="space-y-6 my-auto relative z-10"
              >
                {/* التصنيف */}
                <div className="flex items-center gap-3">
                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                        {posts[active].category}
                    </span>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-cyan-500/30 to-transparent" />
                </div>
                
                {/* العنوان الرئيسي */}
                <h2 className="text-3xl md:text-5xl font-bold leading-[1.15] tracking-tight text-zinc-100">
                  {posts[active].title}
                </h2>
                
                {/* الوصف */}
                <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
                  {posts[active].desc}
                </p>

                {/* زر قراءة المزيد المضاف حديثاً كعنصر تفاعلي */}
              
              </motion.div>
            </AnimatePresence>
            
            {/* الرقم الخلفي الضخم بدقة محسنة */}
            <div className={`absolute -bottom-12 ${isAr ? '-left-4' : '-right-4'} text-[180px] md:text-[240px] font-black text-white/[0.02] pointer-events-none select-none font-mono leading-none tracking-tighter`}>
              {posts[active].id}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}