"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const toggleVisibility = () => {
      // إظهار الزر بعد التمرير لأسفل مسافة محددة
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }} // بداية سلسة من الأسفل
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-8 right-8 z-50 flex items-center justify-center group" // استخدام group هنا للتحكم في العناصر الداخلية
        >
          {/* تأثير الإضاءة المحيطية (Outer Neon Glow) */}
          {/* يعتمد هذا التأثير على توسيع التوهج النيون المحيط بالزر برفق */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(var(--brand-green-rgb), 0.4)", // إضاءة هادئة
                "0 0 35px rgba(var(--brand-green-rgb), 0.8)", // توهج أقوى
                "0 0 15px rgba(var(--brand-green-rgb), 0.4)"  // العودة للهدوء
              ],
            }}
            transition={{
              duration: 2.5, // سرعة النبض (Breathing rate)
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -inset-2 bg-brand-green/20 rounded-full blur-xl opacity-80" // blur عالٍ لخلق التوهج
          />

          {/* تأثير النبض النيون (Inner Pulse Loop) */}
          {/* حلقة مضيئة تتحرك وتتوسع للخارج */}
          <motion.div
            animate={{
              scale: [1, 1.4], // تكبير الحلقة
              opacity: [0.6, 0] // تتلاشى تدريجياً للخارج
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut", // حركة سلسة للخارج
            }}
            className="absolute -inset-1 border-2 border-brand-green rounded-full opacity-60"
          />

          {/* الزر الرئيسي مع تأثيرات التفاعل والإضاءة الداخلية */}
          <motion.button
            whileHover={{ scale: 1.08 }} // تكبير خفيف عند التمرير
            whileTap={{ scale: 0.96 }}   // تصغير عند الضغط
            onClick={() => router.push('/contact')}
            className="relative flex items-center gap-3 bg-slate-900 text-white border border-brand-green px-8 py-4 rounded-full shadow-[0_0_20px_rgba(var(--brand-green-rgb),0.5)] overflow-hidden transition-all duration-300"
          >
            {/* الخلفية المضيئة عند التمرير (Hover Shine) */}
            <div className=" absolute inset-0 bg-gradient-to-r from-brand-green  to-brand-green translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out opacity-20 group-hover:opacity-100" />
            
            {/* النص مع تأثير توهج نيون داخلي خفيف عند التمرير */}
            <span className="relative z-10 font-extrabold uppercase text-xs tracking-[0.25em] text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_5px_rgba(var(--brand-green-rgb),1)]">
              Get Demo
            </span>
            
            {/* الأيقونة */}
            <div className="relative z-10 p-1 bg-brand-green rounded-full shadow-[0_0_10px_rgba(var(--brand-green-rgb),0.8)]">
              <ArrowRight size={18} className="text-slate-950 group-hover:text-white" />
            </div>

            {/* تأثير إضاءة النيون على الإطار عند التمرير */}
            <div className="absolute -inset-[1px] rounded-full border border-brand-green group-hover:shadow-[0_0_15px_rgba(var(--brand-green-rgb),1)] transition-shadow duration-300"></div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButton;