'use client';

import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, Phone, BookOpen, Zap, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';

const SupportPage = () => {
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

  const supportCategories = [
    { 
        title: isAr ? "مشاكل تقنية" : "Technical Issue", 
        desc: isAr ? "الوصول إلى أدلة التشغيل وإرشادات الإعداد." : "Access manuals and setup guides.", 
        icon: BookOpen 
    },
    { 
        title: isAr ? "دردشة مباشرة" : "Live Chat", 
        desc: isAr ? "تواصل مع مهندسينا بشكل فوري ومباشر." : "Connect with our engineers instantly.", 
        icon: MessageSquare 
    },
    { 
        title: isAr ? "الإبلاغ عن مشكلة" : "Report an Issue", 
        desc: isAr ? "فتح تذكرة دعم فني ذات أولوية عالية." : "Open a priority support ticket.", 
        icon: Mail 
    },
    { 
        title: isAr ? "دعم الطوارئ" : "Emergency Support", 
        desc: isAr ? "مساعدة فورية للأعطال الحرجة في النظام." : "Immediate help for critical failures.", 
        icon: Phone 
    }
  ];

  return (
    // تأمين الحاوية الرئيسية للموقع بـ w-full و overflow-x-hidden
    <div className={`min-h-screen bg-slate-900 text-white selection:bg-brand-green/30 selection:text-white w-full overflow-x-hidden ${isAr ? 'font-sans' : 'uppercase tracking-tighter'}`} dir={isAr ? "rtl" : "ltr"}>
      <NavBar />

      {/* إضافة overflow-hidden و w-full هنا لقص تمدد الـ blur الخلفي نهائياً */}
      <main className="pt-44 pb-24 px-6 relative w-full overflow-hidden">
        
        {/* التوهج الخلفي - أصبح آمناً الآن ولن يتسبب في أي تمزق أفقي */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-brand-main/10 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* --- Heading Section --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 text-center space-y-8"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75 duration-700"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green shadow-[0_0_12px_#22c55e,0_0_20px_#22c55e]"></span>
              </span>
              <span className={`text-[11px] font-black uppercase ${isAr ? 'tracking-normal' : 'tracking-[0.4em]'} text-brand-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]`}>
                {isAr ? "المهندسون متصلون الآن" : "Engineers Online"}
              </span>
            </div>

            <h1 className={`text-5xl md:text-8xl font-black text-white leading-[0.9] ${isAr ? 'tracking-normal' : 'tracking-tighter'}`}>
              {isAr ? "مركز دعم" : "Jomax"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main via-brand-green to-brand-main italic">
                {isAr ? "جومكس الفني." : "Support Center."}
              </span>
            </h1>
            
            <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto normal-case leading-relaxed">
              {isAr 
                ? "فريقنا الهندسي مكرس لضمان استمرارية عملك. اختر قناة الدعم المفضلة لديك أدناه." 
                : "Our engineering team is dedicated to your uptime. Choose your preferred support channel below."}
            </p>
          </motion.div>

          {/* --- Support Cards --- */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {supportCategories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-800/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-700/50 hover:border-brand-green/50 hover:bg-slate-800/60 transition-all duration-500 overflow-hidden"
              >
                <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-brand-green group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="text-brand-green group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-brand-green transition-colors uppercase italic">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed normal-case">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-brand-green transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          {/* --- Form Section --- */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 rounded-[3.5rem] border border-slate-700/50 p-6 md:p-12 lg:p-20 relative overflow-hidden"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className={`space-y-8 ${isAr ? 'text-right' : 'text-left'}`}>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic text-brand-green">
                    {isAr ? "طلب مباشر." : "Direct Request."}
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed normal-case">
                  {isAr 
                    ? "قم بتعبئة التفاصيل وسيقوم مكتب الدعم لدينا بالرد خلال " 
                    : "Fill in the details and our support desk will respond within "}
                  <span className="text-white underline decoration-brand-green underline-offset-4">
                    {isAr ? "ساعتين" : "2 hours"}
                  </span>.
                </p>
                <div className="flex items-center gap-4 text-brand-green font-black text-xs tracking-widest bg-brand-green/10 w-fit px-6 py-3 rounded-full border border-brand-green/20">
                  <Zap size={18} className="animate-pulse" />
                  <span>{isAr ? "متوسط الرد: 45 دقيقة" : "AVG RESPONSE: 45 MINS"}</span>
                </div>
              </div>

              <form className="bg-slate-900/80 p-6 md:p-10 rounded-[2.5rem] border border-white/5 space-y-6 md:space-y-8 backdrop-blur-xl shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 focus:border-brand-green outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder={isAr ? "الاسم الكامل" : "Full Name"}
                  />
                  <input
                    type="email"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 focus:border-brand-green outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder={isAr ? "البريد الإلكتروني" : "Email Address"}
                  />
                </div>
                <div className="relative">
                    <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 outline-none text-slate-400 focus:border-brand-green appearance-none cursor-pointer">
                        <option>{isAr ? "مشكلة في البنية التحتية" : "Infrastructure Issue"}</option>
                        <option>{isAr ? "استفسار أمني" : "Security Inquiry"}</option>
                        <option>{isAr ? "نشر سحابي (Cloud)" : "Cloud Deployment"}</option>
                    </select>
                    <ChevronDown className={`absolute top-1/2 -translate-y-1/2 ${isAr ? 'left-4' : 'right-4'} text-slate-500 pointer-events-none`} size={20} />
                </div>
                <textarea
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 outline-none h-32 focus:border-brand-green transition-all text-white placeholder:text-slate-600 shadow-inner"
                  placeholder={isAr ? "اشرح الموقف التقني بالتفصيل..." : "Describe the technical situation..."}
                />
                <button
                  type="button"
                  className="w-full bg-brand-green py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] text-slate-900 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(34,197,94,0.3)]"
                >
                  {isAr ? "إرسال تذكرة الدعم" : "Submit Support Ticket"}
                </button>
              </form>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;