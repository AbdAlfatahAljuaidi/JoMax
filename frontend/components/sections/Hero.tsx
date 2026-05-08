'use client';

import React, { useState, useEffect } from 'react';
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

  const sliderData = [
    {
      id: 1,
      video: 'https://res.cloudinary.com/danvxvhvq/video/upload/v1777367606/web_qoi5fh.mp4',
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
      video: '/videos/billing.mp4',
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
      video: 'https://res.cloudinary.com/danvxvhvq/video/upload/v1777367606/billing_tiiwbp.mp4',
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
      video: '/videos/billing.mp4',
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

  const CurrentIcon = sliderData[currentSlide].icon;

  useEffect(() => {
    const duration = sliderData[currentSlide].duration * 1000;
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === sliderData.length - 1 ? 0 : prev + 1));
    }, duration);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" dir={isAr ? "rtl" : "ltr"}>
      {/* Background Video */}
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} className="absolute inset-0 z-0">
          <video
            key={sliderData[currentSlide].video}
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={sliderData[currentSlide].video} type="video/mp4" />
          </video>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-center px-8 lg:px-24 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide + "content"}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-brand-green font-bold text-xs tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
              <CurrentIcon size={16} /> {sliderData[currentSlide].badge}
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1]">
              {sliderData[currentSlide].title}
            </h1>
            
            <p className="text-xl text-white/70 max-w-xl mb-10 font-light leading-relaxed">
              {sliderData[currentSlide].description}
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              {sliderData[currentSlide].features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-white font-medium text-sm">
                  <CheckCircle size={18} className="text-brand-green" /> {f}
                </div>
              ))}
            </div>

            {sliderData[currentSlide].id === 4 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => router.push('/Fawtara')}
                className="group relative flex items-center gap-3 bg-slate-900 text-white border border-brand-green px-8 py-4 mb-10 rounded-full shadow-[0_0_20px_rgba(var(--brand-green-rgb),0.3)] hover:shadow-[0_0_30px_rgba(var(--brand-green-rgb),0.5)] overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <div className={`absolute inset-0 bg-brand-green transition-transform duration-500 ease-out opacity-20 ${isAr ? 'translate-x-[100%] group-hover:translate-x-0' : 'translate-x-[-100%] group-hover:translate-x-0'}`} />
                <span className="relative z-10 font-extrabold uppercase text-xs tracking-[0.25em] text-white transition-all duration-300 group-hover:text-black">
                  {isAr ? 'اكتشف المزيد' : 'Learn More'}
                </span>
                <div className="relative z-10 p-1 bg-brand-green rounded-full shadow-[0_0_10px_rgba(var(--brand-green-rgb),0.8)]">
                  {isAr ? <ArrowLeft size={18} className="text-black" /> : <ArrowRight size={18} className="text-black" />}
                </div>
              </motion.button>
            )}

            {sliderData[currentSlide].partners.length > 0 && (
              <div className="flex items-center gap-8">
                <span className="text-white/30 text-[10px] uppercase font-bold tracking-widest">
                  {isAr ? 'عملائنا:' : 'Our Clients:'}
                </span>
                <div className="flex gap-6">
                  {sliderData[currentSlide].partners.map((p, i) => (
                    <img key={i} src={p.logo} alt={p.name} className="h-10 w-auto opacity-60 hover:opacity-100 transition-all cursor-pointer" />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress Bars Indicators */}
      <div className={`absolute bottom-12 ${isAr ? 'right-24' : 'left-24'} flex gap-4 z-30`}>
        {sliderData.map((slide, i) => (
          <div key={i} className="h-[2px] w-24 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: i === currentSlide ? "100%" : 0 }} 
              transition={{ duration: slide.duration, ease: "linear" }} 
              className="h-full bg-brand-green" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}