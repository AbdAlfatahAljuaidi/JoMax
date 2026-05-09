'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Cpu, BarChart3, Globe, CreditCard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lang, setLang] = useState('en');
  const router = useRouter();

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

  // الفيديو الأساسي الذي سيعمل في الخلفية لكل السلايدات
  const backgroundVideo = 'https://res.cloudinary.com/danvxvhvq/video/upload/v1777367606/web_qoi5fh.mp4';

  const sliderData = [
    {
      id: 1,
      duration: 7,
      badge: isAr ? 'تخطيط موارد المؤسسات' : 'Enterprise Resource Planning',
      title: isAr ? 'هندسة الهيمنة المستقبلية' : 'Architecting Future Dominance',
      description: isAr 
        ? 'تنسيق بنى تحتية تعتمد على الذكاء الاصطناعي، مصممة لسرعة لا تضاهى وقدرة توسع هائلة ذكاء تنافسي.'
        : 'Orchestrating AI-driven architectures engineered for unmatched speed, scalability, and competitive intelligence.',
      features: isAr ? ['تحليلات الذكاء الاصطناعي', 'توسع سحابي', 'الأمن السيبراني'] : ['AI Analytics', 'Cloud Scaling', 'Cyber Security'],
      partners: [{ name: 'Partner 1', logo: '/images/Picture25.jpg' }, { name: 'Partner 2', logo: '/images/Picture26.png' }],
      icon: Cpu
    },
    {
      id: 2,
      duration: 5,
      badge: isAr ? 'الأنظمة الذكية' : 'Smart Ecosystems',
      title: isAr ? 'تناغم رقمي سلس' : 'Seamless Digital Harmony',
      description: isAr 
        ? 'تحويل العمليات المعقدة إلى سير عمل موحد وسلس من خلال مجموعة الإدارة الذكية لدينا.'
        : 'Transforming complex operations into frictionless, unified workflows with our smart management suite.',
      features: isAr ? ['لوحة تحكم ERP', 'تكامل ضريبي', 'مزامنة لحظية'] : ['ERP Dashboard', 'Tax Integration', 'Real-time Sync'],
      partners: [{ name: 'Partner 3', logo: '/images/Picture27.png' }, { name: 'Partner 4', logo: '/images/Picture28.png' }],
      icon: BarChart3
    },
    {
      id: 3,
      duration: 8,
      badge: isAr ? 'شراكة عالمية' : 'Global Partnership',
      title: isAr ? 'نتحول معاً' : 'Transforming Together',
      description: isAr 
        ? 'شركاء تقنيون موثوقون للمؤسسات الرائدة التي تقود النمو في الأردن، السعودية، والعراق.'
        : 'Trusted technology partners for visionary organizations driving growth across Jordan, KSA, and Iraq.',
      features: isAr ? ['استشارات استراتيجية', 'دعم 24/7', 'تطوير مخصص'] : ['Strategic Consulting', '24/7 Support', 'Custom Dev'],
      partners: [{ name: 'Partner 5', logo: '/images/Picture29.png' }, { name: 'Partner 6', logo: '/images/Picture30.png' }],
      icon: Globe
    },
    {
      id: 4,
      duration: 6,
      badge: isAr ? 'التمويل المؤتمت' : 'Automated Finance',
      title: isAr ? 'حلول الفوترة الذكية' : 'Smart Billing Solutions',
      description: isAr 
        ? 'تمكين الشركات من خلال خدمات فوترة سلسة ومؤتمتة مصممة بدقة متناهية.'
        : 'Empowering businesses with seamless, automated billing services designed for precision.',
      features: isAr ? ['أتمتة الفواتير', 'بوابات دفع آمنة', 'تحليلات مباشرة'] : ['Automated Invoicing', 'Secure Payment Gateways', 'Real-time Analytics'],
      partners: [{ name: 'Partner 1', logo: '/images/invice.jpeg' }],
      icon: CreditCard
    }
  ];

  useEffect(() => {
    const duration = sliderData[currentSlide].duration * 1000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const CurrentIcon = sliderData[currentSlide].icon;

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      
      {/* 1. Static Background Video - يظل ثابتاً ولا يتأثر بتغيير السلايد */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/images/vf.mp4" type="video/mp4" />
        </video>
        {/* طبقة تظليل إضافية لضمان وضوح النص فوق أي فيديو */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
      </div>

      {/* 2. Content Overlay - النصوص هي فقط ما يتغير */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 lg:px-24 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide} // تغيير المفتاح هنا يحفز الأنيميشن للنصوص فقط
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="p-2 bg-brand-green/20 rounded-lg border border-brand-green/30 backdrop-blur-sm">
                  <CurrentIcon size={20} className="text-brand-green" />
               </div>
               <span className="text-brand-green font-black text-xs tracking-[0.4em] uppercase">
                {sliderData[currentSlide].badge}
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-8xl font-black text-white tracking-tighter mb-8 leading-[1] max-w-4xl">
              {sliderData[currentSlide].title}
            </h1>
            
            <p className="text-xl text-white/70 max-w-2xl mb-12 font-medium leading-relaxed">
              {sliderData[currentSlide].description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {sliderData[currentSlide].features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-xl px-6 py-3 rounded-2xl border border-white/10 text-white font-bold text-sm">
                  <CheckCircle size={18} className="text-brand-green" /> {f}
                </div>
              ))}
            </div>

            {sliderData[currentSlide].id === 4 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/Fawtara')}
                className="group relative flex items-center gap-4 bg-white text-black px-10 py-5 mb-10 rounded-2xl font-black uppercase text-sm tracking-widest overflow-hidden transition-all"
              >
                <span className="relative z-10">{isAr ? 'اكتشف المزيد' : 'Learn More'}</span>
                {isAr ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </motion.button>
            )}

            {sliderData[currentSlide].partners.length > 0 && (
              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <span className="text-white/40 text-[10px] uppercase font-black tracking-[0.3em]">
                  {isAr ? 'الشركاء الاستراتيجيون' : 'Strategic Partners'}
                </span>
                <div className="flex gap-8 items-center">
                  {sliderData[currentSlide].partners.map((p, i) => (
                    <img key={i} src={p.logo} alt={p.name} className="h-8 w-auto  opacity-50   transition-all duration-500" />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3. Global Progress Bars */}
      {/* <div className={`absolute bottom-16 ${isAr ? 'right-24' : 'left-24'} flex gap-3 z-30`}>
        {sliderData.map((slide, i) => (
          <div key={i} className="group cursor-pointer py-4" onClick={() => setCurrentSlide(i)}>
            <div className="h-[3px] w-20 bg-white/10 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                animate={{ width: i === currentSlide ? "100%" : i < currentSlide ? "100%" : "0%" }} 
                transition={{ 
                  duration: i === currentSlide ? slide.duration : 0.3, 
                  ease: i === currentSlide ? "linear" : "easeInOut" 
                }} 
                className="h-full bg-brand-green shadow-[0_0_10px_#00ff00]" 
              />
            </div>
          </div>
        ))}
      </div> */}

      {/* Decorative Scanline effect */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_4px,3px_100%] z-10" />
    </div>
  );
}