'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Zap, Shield, Cpu, BarChart3, Globe,CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import { useRouter } from 'next/navigation';

const sliderData = [
  {
    id: 1,
    image: '/images/blog-1.png',
    badge: 'Enterprise Intelligence',
    title: 'Architecting Future Dominance',
    description: 'Orchestrating AI-driven architectures engineered for unmatched speed, scalability, and competitive intelligence.',
    features: ['AI Analytics', 'Cloud Scaling', 'Cyber Security'],
    partners: [{ name: 'Partner 1', logo: '/images/Picture25.jpg' }, { name: 'Partner 2', logo: '/images/Picture26.png' }],
    icon: Cpu
  },
  {
    id: 2,
    image: '/images/blog-2.png',
    badge: 'Smart Ecosystems',
    title: 'Seamless Digital Harmony',
    description: 'Transforming complex operations into frictionless, unified workflows with our smart management suite.',
    features: ['ERP Dashboard', 'Tax Integration', 'Real-time Sync'],
    partners: [{ name: 'Partner 3', logo: '/images/Picture27.png' }, { name: 'Partner 4', logo: '/images/Picture28.png' }],
    icon: BarChart3
  },
  {
    id: 3,
    image: '/images/blog-3.png',
    badge: 'Global Partnership',
    title: 'Transforming Together',
    description: 'Trusted technology partners for visionary organizations driving growth across Jordan, KSA, and Iraq.',
    features: ['Strategic Consulting', '24/7 Support', 'Custom Dev'],
    partners: [{ name: 'Partner 5', logo: '/images/Picture29.png' }, { name: 'Partner 6', logo: '/images/Picture30.png' }],
    icon: Globe
  },
  {
    id: 4,
    image: '/images/Billing.png', // تأكد من حفظ الصورة الجديدة بهذا الاسم
    badge: 'Automated Finance',
    title: 'Smart Billing Solutions',
    description: 'Empowering businesses with seamless, automated billing services designed for precision, secure payment gateways, and real-time financial data management.',
    features: ['Automated Invoicing', 'Secure Payment Gateways', 'Real-time Analytics'],
    partners: [{ name: 'Partner 5', logo: '/images/Picture29.png' }, { name: 'Partner 6', logo: '/images/Picture30.png' }],
    icon: CreditCard // يمكنك استبدال Globe بـ CreditCard أو أي أيقونة مالية مناسبة
  },
];



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const CurrentIcon = sliderData[currentSlide].icon;
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  
  const router = useRouter();

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* الصورة مع أنيميشن قوي جداً (Scale + Pan) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
        >
          <motion.img
            initial={{ scale: 1.3, x: -50 }}
            animate={{ scale: 1, x: 0 }}
            transition={{ duration: 7, ease: "easeInOut" }}
            src={sliderData[currentSlide].image}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex flex-col justify-center px-8 lg:px-24 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + "content"}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
          <span className="text-brand-green font-bold text-xs tracking-[0.3em] uppercase mb-4 block flex items-center gap-2">
  <CurrentIcon size={16} /> {sliderData[currentSlide].badge}
</span>
            
            <h1 className="text-6xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[0.9]">
              {sliderData[currentSlide].title}
            </h1>
            
            <p className="text-xl text-white/70 max-w-xl mb-10 font-light leading-relaxed">
              {sliderData[currentSlide].description}
            </p>



            {/* Features Row */}
            <div className="flex flex-wrap gap-4 mb-12">
              {sliderData[currentSlide].features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white font-medium text-sm">
                  <CheckCircle size={18} className="text-brand-green" /> {f}
                </div>
              ))}
            </div>

                        {/* إضافة الزر هنا */}
{sliderData[currentSlide].id === 4 && (
  <motion.button
  whileHover={{ scale: 1.05 }} // جعل الحركة أقل حدة لتبدو أكثر ثباتاً
  whileTap={{ scale: 0.95 }}
  onClick={() => router.push('/contact')}
  // أضفنا 'cursor-pointer' و 'group' للتأثيرات
  className="group relative flex items-center gap-3 bg-slate-900 text-white border border-brand-green px-8 py-4 mb-10 rounded-full shadow-[0_0_20px_rgba(var(--brand-green-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--brand-green-rgb),0.5)] overflow-hidden transition-all duration-300 cursor-pointer"
>
  {/* الخلفية المضيئة - أضفنا لها تأثير دخول من اليسار */}
  <div className="absolute inset-0 bg-brand-green translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out opacity-20" />
  
  {/* النص */}
  <span className="relative z-10 font-extrabold uppercase text-xs tracking-[0.25em] text-white transition-all duration-300 group-hover:text-black">
    Get Demo
  </span>
  
  {/* الأيقونة - أضفنا حركة بسيطة لها عند الـ hover */}
  <div className="relative z-10 p-1 bg-brand-green rounded-full shadow-[0_0_10px_rgba(var(--brand-green-rgb),0.8)] transition-transform duration-300 group-hover:rotate-[-45deg]">
    <ArrowRight size={18} className="text-black" />
  </div>

  {/* تأثير الإطار المتوهج */}
  <div className="absolute inset-0 rounded-full border-2 border-brand-green/30 group-hover:border-brand-green transition-colors duration-300"></div>
</motion.button>
)}

{/* Partners Specific to Slide */}
{sliderData[currentSlide].id != 4 && (

            <div className="flex items-center gap-8">
              <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">Our Clients:</span>
              <div className="flex gap-6">
                {sliderData[currentSlide].partners.map((p, i) => (
                  <motion.img 
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    src={p.logo} 
                    alt={p.name} 
                    className="h-10 w-auto  transition-all cursor-pointer"
                  />
                ))}
              </div>
            </div>
          )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-12 left-24 flex gap-4 z-30">
        {sliderData.map((_, i) => (
          <div key={i} className="h-[2px] w-24 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: i === currentSlide ? "100%" : 0 }} 
              transition={{ duration: 7, ease: "linear" }} 
              className="h-full bg-brand-green" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}