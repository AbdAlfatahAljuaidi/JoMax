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
    readMore: isAr ? "قراءة_القصة_كاملة" : "READ_FULL_STORY"
  };

  return (
    <section className="bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white py-24 md:py-32" dir={isAr ? "rtl" : "ltr"}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* القسم الرئيسي */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
          
          {/* الجانب الأيسر: قائمة التحكم */}
          <div className="md:col-span-2 space-y-2">
            <h4 className={`text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-10 italic ${isAr ? 'text-right' : 'text-left'}`}>
              {content.selectLabel}
            </h4>
            {posts.map((post, i) => (
              <button
                key={post.id}
                onClick={() => setActive(i)}
                className={`w-full text-right py-6 border-b border-white/5 transition-all duration-300 group flex items-baseline gap-6 ${active === i ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'}`}
              >
                <span className={`font-mono text-lg transition-transform duration-300 ${active === i ? 'translate-x-0' : (isAr ? 'translate-x-2' : '-translate-x-2')}`}>
                  {post.id}
                </span>
                <span className={`text-xl md:text-2xl font-bold tracking-tight leading-snug ${isAr ? 'text-right' : 'text-left'}`}>
                  {post.title}
                </span>
              </button>
            ))}
          </div>

          {/* الجانب الأيمن: شاشة العرض */}
          <div className="md:col-span-3 min-h-[450px] bg-zinc-900/30 border border-white/5 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10, x: isAr ? 20 : -20 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, y: -10, x: isAr ? -20 : 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`space-y-8 ${isAr ? 'text-right' : 'text-left'}`}
              >
                <div className={`flex items-center gap-4 ${isAr ? 'flex-row-reverse justify-end' : ''}`}>
                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        {posts[active].category}
                    </span>
                    <div className="h-[1px] w-12 bg-cyan-400/30" />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                  {posts[active].title}
                </h2>
                
                <p className={`text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md ${isAr ? 'mr-0 ml-auto' : ''}`}>
                  {posts[active].desc}
                </p>
                
                <motion.button 
                    whileHover={{ x: isAr ? -10 : 10 }}
                    className="text-sm font-semibold border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors"
                >
                    {content.readMore}
                </motion.button>
              </motion.div>
            </AnimatePresence>
            
            {/* رقم خلفي مخفي */}
            <div className={`absolute -bottom-10 ${isAr ? '-left-6' : '-right-6'} text-[150px] md:text-[200px] font-black text-white/5 pointer-events-none select-none`}>
              {posts[active].id}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}