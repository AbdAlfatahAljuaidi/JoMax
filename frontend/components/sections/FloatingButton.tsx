"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lang, setLang] = useState('en');
  const router = useRouter();

  useEffect(() => {
    // مراقبة اللغة من localStorage
    const storedLang = localStorage.getItem('language') || 'en';
    setLang(storedLang);

    const handleStorageChange = () => {
      setLang(localStorage.getItem('language') || 'en');
    };

    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    // مستمع لتغييرات اللغة
    const interval = setInterval(handleStorageChange, 500);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearInterval(interval);
    };
  }, []);

  const isAr = lang === 'ar';

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          // التبديل بين اليمين واليسار حسب اللغة
          className={`fixed bottom-8 ${isAr ? 'left-8' : 'right-8'} z-50 flex items-center justify-center group`}
          dir={isAr ? "rtl" : "ltr"}
        >
          {/* تأثير الإضاءة المحيطية */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(var(--brand-green-rgb), 0.4)",
                "0 0 35px rgba(var(--brand-green-rgb), 0.8)",
                "0 0 15px rgba(var(--brand-green-rgb), 0.4)"
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-2 bg-brand-green/20 rounded-full blur-xl opacity-80"
          />

          {/* تأثير النبض النيون */}
          <motion.div
            animate={{
              scale: [1, 1.4],
              opacity: [0.6, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
            className="absolute -inset-1 border-2 border-brand-green rounded-full opacity-60"
          />

          {/* الزر الرئيسي */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => router.push('/contact')}
            className="relative flex items-center gap-3 bg-slate-900 text-white border border-brand-green px-8 py-4 rounded-full shadow-[0_0_20px_rgba(var(--brand-green-rgb),0.5)] overflow-hidden transition-all duration-300"
          >
            {/* الخلفية المضيئة عند التمرير */}
            <div className={`absolute inset-0 bg-brand-green transition-transform duration-700 ease-in-out opacity-20 group-hover:opacity-100 ${isAr ? 'translate-x-[100%] group-hover:translate-x-0' : 'translate-x-[-100%] group-hover:translate-x-0'}`} />
            
            <span className="relative z-10 font-extrabold uppercase text-xs tracking-[0.25em] text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_5px_rgba(var(--brand-green-rgb),1)]">
              {isAr ? "احصل على العرض" : "Get Demo"}
            </span>
            
            {/* الأيقونة تتبدل حسب اتجاه اللغة */}
            <div className="relative z-10 p-1 bg-brand-green rounded-full shadow-[0_0_10px_rgba(var(--brand-green-rgb),0.8)]">
              {isAr ? (
                <ArrowLeft size={18} className="text-slate-950 group-hover:text-white" />
              ) : (
                <ArrowRight size={18} className="text-slate-950 group-hover:text-white" />
              )}
            </div>

            <div className="absolute -inset-[1px] rounded-full border border-brand-green group-hover:shadow-[0_0_15px_rgba(var(--brand-green-rgb),1)] transition-shadow duration-300"></div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButton;