'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cpu, Orbit, Shield, Sparkles, Zap, Globe, Layers, Laptop, Cloud, Database, ShieldCheck, Server } from "lucide-react";
import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";

export default function Page() {
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
// تأكد من تحديث سطر استيراد الأيقونات في أعلى الملف ليشمل الأيقونات الجديدة:
// import { Globe, Laptop, Cloud, Database, ShieldCheck, Server } from 'lucide-react';

const services = [
  { 
    icon: <Globe size={32}/>, 
    title: isAr ? 'التحول الرقمي وتطوير الويب' : 'Digital Transformation & Web Development', 
    text: isAr ? 'إعادة تصميم العمليات ورقمة تدفق العمل • تطوير منصات الويب والأتمتة • حلول مخصصة مبنية حول متطلبات عملك.' : 'Process redesign & workflow digitization • Web platform development & automation • Customized solutions built around your business requirements.' 
  },
  { 
    icon: <Cloud size={32}/>, 
    title: isAr ? 'تنفيذ وحوكمة أنظمة ERP' : 'ERP Implementation & Governance', 
    text: isAr ? 'نموذج حوكمة نشر وإطلاق أنظمة ERP • مكتب إدارة المشاريع (PMO) كخدمة لدورة حياة ERP • جاهزية الإطلاق الحي وتنفيذ خارطة الطريق.' : 'ERP deployment and rollout governance model • Project Management Office (PMO) as a service for ERP lifecycles • go-live readiness & roadmap execution.' 
  },
  { 
    icon: <Database size={32}/>, 
    title: isAr ? 'البيانات والتحليلات وذكاء القرار' : 'Data, Analytics & Decision Intelligence', 
    text: isAr ? 'حوكمة البيانات وبنيتها التحتية • أطر عمل مؤشرات الأداء الرئيسية وتحليلات الأعمال • لوحات تحكم تنفيذية ورؤى فورية.' : 'Data governance & architecture • KPI frameworks & business analytics • Executive dashboards & insights.' 
  },
  { 
    icon: <ShieldCheck size={32}/>, 
    title: isAr ? 'إدارة التغيير والتنظيم المؤسسي' : 'Organizational & Change Management', 
    text: isAr ? 'مواءمة أصحاب المصلحة ومشاركة القيادة • اتصالات التغيير وتهيئة المستخدمين • رفع كفاءة الفريق وتدريب المستخدم النهائي.' : 'Stakeholder alignment & leadership engagement • Change communication & user onboarding • Team capability uplift & end-user training.' 
  },
  { 
    icon: <Server size={32}/>, 
    title: isAr ? 'ضمان الجودة وإدارة الأداء' : 'Quality Assurance & Performance Management', 
    text: isAr ? 'حوكمة شاملة لضمان الجودة عبر جميع مراحل الحل • دورات المراجعة، مسؤولية الاختبار وتتبع العيوب • ربط الأثر من الإستراتيجية إلى الاختبار ثم التسليم.' : 'End-to-end QA governance across all solution phases • Review cycles, testing accountability & defect tracking • Strategy → Testing → Delivery impact linkage.' 
  }
];
  const stats = [
    { n: "250+", l: isAr ? "عميل سعيد" : "Happy Clients" },
    { n: "1.2K+", l: isAr ? "مشروع منجز" : "Projects Shipped" },
    { n: "99.9%", l: isAr ? "وقت تشغيل النظام" : "System Uptime" },
    { n: "24/7", l: isAr ? "دعم الخبراء" : "Expert Support" }
  ];

  return (
    <div dir={isAr ? "rtl" : "ltr"}>
      <NavBar/>
    
      <section className="relative min-h-screen bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white overflow-hidden py-24 font-sans">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-700/10 blur-[150px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Headline */}
          <div className="text-center my-32">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`text-6xl md:text-[120px] font-black leading-[0.85] ${isAr ? 'tracking-normal' : 'tracking-tighter'}`}
            >
              {isAr ? "نحن نبني" : "WE BUILD"} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-500">
                {isAr ? "أكواناً رقمية" : "DIGITAL UNIVERSES"}
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="mt-10 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed"
            >
              {isAr 
                ? "جومكس سوفت ليست مجرد وكالة تطوير. نحن نهندس أنظمة مؤسسية متطورة صُممت لأتمتة النمو وإعادة تعريف الكفاءة الرقمية."
                : "Jomaxsoft is not just a development agency. We engineer sophisticated enterprise ecosystems designed to automate growth and redefine digital efficiency."}
            </motion.p>
          </div>

          {/* Floating Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="group relative rounded-[32px] p-8 bg-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Futuristic Core */}
          <div className="mt-40 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-56 h-56 rounded-full border-2 border-dashed border-cyan-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48 rounded-full border border-blue-400/30 border-t-transparent border-b-transparent"
              />
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 90 }}
                animate={{ boxShadow: ["0 0 20px rgba(6, 182, 212, 0.5)", "0 0 50px rgba(6, 182, 212, 0.8)", "0 0 20px rgba(6, 182, 212, 0.5)"] }}
                transition={{ boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 0.5 } }}
                className="relative z-10 w-32 h-32 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center cursor-pointer overflow-hidden shadow-2xl"
              >
                <motion.div 
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-1/2 h-full bg-white/20 skew-x-12 blur-md"
                />
                <Sparkles size={40} className="text-white relative z-20" />
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-48 h-48"
              >
                <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee] absolute top-0 left-1/2 -translate-x-1/2" />
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`mt-12 text-cyan-400 font-mono ${isAr ? 'tracking-normal' : 'tracking-[0.3em]'} uppercase text-xs`}
            >
              {isAr ? "حالة النظام: فعال" : "System Status: Operational"}
            </motion.p>
          </div>

          {/* Bottom Stats */}
          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/5 pt-16">
            {stats.map((item, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-white mb-2">{item.n}</div>
                <div className="text-slate-500 text-sm uppercase tracking-widest">{item.l}</div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}