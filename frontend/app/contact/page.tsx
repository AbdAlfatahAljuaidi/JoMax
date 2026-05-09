"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '@/components/sections/Footer';
import NavBar from '@/components/sections/NavBar';

const ContactPage = () => {
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

  return (
    <div 
      className="bg-slate-900 text-white min-h-screen selection:bg-brand-main/20 selection:text-white uppercase tracking-tighter font-sans"
      dir={isAr ? "rtl" : "ltr"}
    >
      <NavBar />

      <section className="relative py-44 px-6 overflow-hidden">
        {/* Ambient Background Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-main/10 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Area */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-3xl mb-24 space-y-8 text-center ${isAr ? 'md:text-right' : 'md:text-left'}`}
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-2xl bg-slate-800/50 border border-slate-700 shadow-2xl backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-main opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-main shadow-[0_0_10px_#06b6d4]"></span>
              </span>
              <span className={`text-[10px] font-black text-brand-main uppercase ${isAr ? '' : 'tracking-[0.4em]'}`}>
                {isAr ? "متاحون للمشاريع الجديدة" : "Available for projects"}
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              {isAr ? "لنبنِ شيئاً" : "Let's Build"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main via-brand-green to-brand-main italic font-black">
                {isAr ? "عظيماً معاً." : "Something Great."}
              </span>
            </h2>
            
            <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-xl normal-case mx-auto md:mx-0">
              {isAr 
                ? "سواء كان لديك مشروع في ذهنك، تحدٍ ترغب بحله، أو تريد فقط استكشاف ما هو ممكن — " 
                : "Whether you have a project in mind, a challenge to solve, or just want to explore what's possible — "}
              <span className="text-white font-bold underline decoration-brand-green underline-offset-8">
                {isAr ? "يسعدنا جداً التواصل معك." : "we'd love to hear from you."}
              </span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Sidebar: Info Cards */}
            <div className="lg:col-span-4 space-y-6">
              {[
                { icon: MapPin, label: isAr ? 'المقر الرئيسي' : 'Headquarters', value: isAr ? 'شارع وصفي التل، عمان، الأردن' : 'Wasfi Al-Tal St., Amman, Jordan', color: 'bg-slate-800 text-cyan-400' },
                { icon: Phone, label: isAr ? 'الهاتف' : 'Phone', value: '+962 79 000 0000', color: 'bg-slate-800 text-green-400' },
                { icon: Mail, label: isAr ? 'البريد الإلكتروني' : 'Email', value: 'hello@jomax.tech', color: 'bg-slate-800 text-brand-main' }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: isAr ? -10 : 10 }}
                  className="group flex items-center gap-6 p-6 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-[2rem] transition-all hover:border-brand-main/50 shadow-xl"
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center shrink-0 shadow-inner border border-white/5 transition-transform group-hover:rotate-12`}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="text-start">
                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-bold tracking-tight text-sm md:text-base">{item.value}</p>
                  </div>
                </motion.div>
              ))}

              {/* Map Placeholder */}
              <div className="relative aspect-video rounded-[2.5rem] bg-slate-800 border border-slate-700 overflow-hidden group shadow-2xl">
                <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm group-hover:opacity-0 transition-opacity z-10 pointer-events-none flex items-center justify-center">
                    <p className="text-[10px] font-black tracking-widest uppercase text-slate-500">
                      {isAr ? "جاري تحميل الخريطة..." : "Interactive Map Loading..."}
                    </p>
                </div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d35.88!3d31.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU4JzQ4LjAiTiAzNcKwNTInNDguMCJF!5e0!3m2!1sen!2sjo!4v1" 
                  className="absolute inset-0 w-full h-full grayscale invert opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                  style={{ border: 0 }}
                />
              </div>
            </div>

            {/* Main Form: Glass Bento Card */}
            <div className="lg:col-span-8">
              <div className="bg-slate-800/30 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                
                <div className={`mb-12 relative z-10 text-start`}>
                  <h3 className="text-3xl font-black text-white tracking-tighter mb-2 uppercase italic">
                    {isAr ? "أرسل لنا رسالة" : "Send Us a Message"}
                  </h3>
                  <p className="text-slate-400 font-medium normal-case">
                    {isAr ? "أخبرنا عن مشروعك وسنعاود الاتصال بك خلال 24 ساعة." : "Tell us about your project and we'll get back to you within 24 hours."}
                  </p>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                  <div className="space-y-3 text-start">
                    <label className={`text-[10px] font-black text-slate-500 uppercase tracking-widest ${isAr ? 'mr-4' : 'ml-4'}`}>
                      {isAr ? "الاسم الكامل" : "Full Name"}
                    </label>
                    <input type="text" placeholder={isAr ? "عبد الفتاح" : "Abd Alfatah"} className="w-full px-6 py-5 rounded-2xl bg-slate-900/50 border border-slate-700 focus:border-brand-main transition-all outline-none font-bold text-white placeholder:text-slate-700" />
                  </div>
                  <div className="space-y-3 text-start">
                    <label className={`text-[10px] font-black text-slate-500 uppercase tracking-widest ${isAr ? 'mr-4' : 'ml-4'}`}>
                      {isAr ? "البريد الإلكتروني" : "Email Address"}
                    </label>
                    <input type="email" placeholder="dev@jomax.tech" className="w-full px-6 py-5 rounded-2xl bg-slate-900/50 border border-slate-700 focus:border-brand-main transition-all outline-none font-bold text-white placeholder:text-slate-700 text-left" dir="ltr" />
                  </div>
                  <div className="space-y-3 md:col-span-2 text-start">
                    <label className={`text-[10px] font-black text-slate-500 uppercase tracking-widest ${isAr ? 'mr-4' : 'ml-4'}`}>
                      {isAr ? "الخدمة المطلوبة" : "Service Needed"}
                    </label>
                    <select className="w-full px-6 py-5 rounded-2xl bg-slate-900/50 border border-slate-700 focus:border-brand-main transition-all outline-none font-bold text-white appearance-none cursor-pointer">
                      <option className="bg-slate-900">{isAr ? "تطوير ويب (MERN Stack)" : "Web Development (MERN)"}</option>
                      <option className="bg-slate-900">{isAr ? "تصميم واجهات (Bento Style)" : "UI/UX Design (Bento Style)"}</option>
                      <option className="bg-slate-900">{isAr ? "بنية سحابية تحتية" : "Cloud Infrastructure"}</option>
                    </select>
                  </div>
                  <div className="space-y-3 md:col-span-2 text-start">
                    <label className={`text-[10px] font-black text-slate-500 uppercase tracking-widest ${isAr ? 'mr-4' : 'ml-4'}`}>
                      {isAr ? "رسالتك" : "Your Message"}
                    </label>
                    <textarea rows={5} placeholder={isAr ? "صف رؤيتك للمشروع..." : "Describe your vision..."} className="w-full px-6 py-5 rounded-2xl bg-slate-900/50 border border-slate-700 focus:border-brand-main transition-all outline-none font-bold text-white resize-none placeholder:text-slate-700"></textarea>
                  </div>
                  
                  <div className="md:col-span-2 pt-6">
                    <button className="group/btn relative w-full flex items-center justify-center gap-6 pl-10 pr-3 py-3 rounded-full bg-brand-main text-white font-black uppercase text-xs tracking-[0.2em] transition-all hover:bg-white hover:text-slate-900 active:scale-95 shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                      {isAr ? "إرسال الرسالة" : "Send Message"}
                      <div className={`w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-brand-main group-hover/btn:rotate-45 transition-transform duration-500 shadow-xl group-hover:text-white ${isAr ? 'rotate-180' : ''}`}>
                        <ArrowUpRight size={22} />
                      </div>
                    </button>
                  </div>
                </form>

                {/* Decoration */}
                <Zap size={200} className={`absolute -bottom-20 -right-20 text-white/[0.02] pointer-events-none rotate-12 ${isAr ? '-right-auto -left-20' : ''}`} />
              </div>
            </div>
          </div>

          {/* Bottom Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            {[
              { title: isAr ? 'ساعات العمل' : 'Business Hours', value: isAr ? 'الأحد-الخميس، 9ص-6م' : 'Sun-Thu, 9am-6pm', detail: isAr ? 'توقيت عمان (GMT+3)' : 'Amman Time (GMT+3)' },
              { title: isAr ? 'سرعة الاستجابة' : 'Response Time', value: isAr ? 'أقل من ساعتين' : '< 2 Hours', detail: isAr ? 'دعم هندسي سريع' : 'Rapid Engineering Support' },
              { title: isAr ? 'حالة النظام' : 'Status', value: isAr ? 'النظام يعمل بكفاءة' : 'System Operational', detail: isAr ? 'جميع الخدمات نشطة' : 'All services active' }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-10 bg-slate-800/30 border border-slate-700/50 rounded-[2.5rem] flex flex-col items-center text-center space-y-4 hover:bg-slate-800/50 transition-all"
              >
                <h4 className="text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">{stat.title}</h4>
                <p className="text-2xl font-black text-white tracking-tight italic">{stat.value}</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer /> 
    </div>
  );
};

export default ContactPage;