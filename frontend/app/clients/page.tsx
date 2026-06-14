"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote, Zap } from "lucide-react";

import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

const ClientsPage = () => {
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

  const clients = [
    { name:  "Soltek", logo: "/images/Sol.png" },
    { name: isAr ? "أبكس للرعاية الصحية" : "Apex Health" },
    { name: isAr ? "ستراتاس للخدمات اللوجستية" : "Stratas Logistics" },
    { name: isAr ? "فيرتكس للذكاء الاصطناعي" : "Vertex AI" },
    { name: isAr ? "كور ديفنس للأمن" : "CoreDefense" },
    { name: isAr ? "نوفا بيلد" : "NovaBuild" },
    { name: isAr ? "نبض التجزئة" : "PulseRetail" },
    { name: isAr ? "جسر العالم" : "GlobalBridge" },
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // عكس اتجاه الحركة في العربية لجعل التمرير طبيعياً
  const x = useTransform(scrollYProgress, [0, 1], ["0%", isAr ? "75%" : "-75%"]);

  const performanceStats = [
    { label: isAr ? "نمو قاعدة العملاء" : "Client Growth", value: 90 },
    { label: isAr ? "معدل استبقاء العملاء" : "Retention Rate", value: 98 },
    { label: isAr ? "نجاح المشاريع" : "Project Success", value: 95 },
    { label: isAr ? "رضا العملاء" : "Customer Satisfaction", value: 92 },
  ];

  const valueProps = [
    {
      title: isAr ? "دقة هندسية" : "Engineering Precision",
      desc: isAr ? "نبني أنظمة بدقة جراحية ومعمارية قابلة للتوسع اللامتناهي." : "We build systems with surgical accuracy and scalable architecture.",
    },
    {
      title: isAr ? "تنفيذ سريع" : "Fast Execution",
      desc: isAr ? "من الفكرة إلى مرحلة الإنتاج في وقت قياسي دون المساس بالجودة." : "From idea to production in record time without sacrificing quality.",
    },
    {
      title: isAr ? "أمن المؤسسات" : "Enterprise Security",
      desc: isAr ? "نهج أمني صارم مصمم للبيئات ذات المخاطر العالية." : "Security-first approach built for high-risk environments.",
    },
    {
      title: isAr ? "أنظمة قابلة للتوسع" : "Scalable Systems",
      desc: isAr ? "نصمم بنية تحتية تنمو وتتطور مع نمو أعمالك." : "We design infrastructure that grows with your business."
    }
  ];


  const services = [
    {
      title: isAr ? "تطوير برمجيات ERP" : "ERP Systems",
      desc: isAr ? "حلول متكاملة لإدارة موارد المؤسسات بكفاءة عالية." : "End-to-end solutions for resource management.",
    },
    {
      title: isAr ? "تحليل البيانات" : "Data Analytics",
      desc: isAr ? "تحويل البيانات الخام إلى رؤى استراتيجية لاتخاذ القرارات." : "Turning raw data into strategic insights.",
    },
    {
      title: isAr ? "الأمن السيبراني" : "Cyber Security",
      desc: isAr ? "حماية أصولك الرقمية بأحدث تقنيات التشفير والتحصين." : "Protecting digital assets with advanced security.",
    },
    {
      title: isAr ? "الحوسبة السحابية" : "Cloud Solutions",
      desc: isAr ? "بنية تحتية مرنة وسحابية تضمن استمرارية العمل." : "Flexible and reliable cloud infrastructure.",
    },
    {
      title: isAr ? "تكامل الأنظمة" : "Systems Integration",
      desc: isAr ? "ربط برمجياتك الحالية لتعمل كنظام واحد متناغم." : "Seamless integration for your existing software.",
    },
  ];

  const values = [
    {
      title: isAr ? "أمان لا يضاهى" : "Unrivaled Security",
      desc: isAr ? "نضع الحماية كأولوية قصوى في كل سطر برمجي، لضمان سلامة بياناتك وخصوصيتك." : "Security is our top priority, ensuring your data remains protected at all levels.",
      icon: "Shield" // يمكنك استخدام أيقونات Lucide
    },
    {
      title: isAr ? "سرعة الأداء" : "Performance Speed",
      desc: isAr ? "نصمم أنظمة فائقة السرعة تضمن لك استجابة فورية وتجربة مستخدم سلسة." : "High-performance systems designed for lightning-fast responsiveness.",
    },
    {
      title: isAr ? "احترافية مطلقة" : "Professional Excellence",
      desc: isAr ? "نلتزم بأعلى معايير الجودة في التنفيذ والتطوير لتقديم نتائج تفوق التوقعات." : "We adhere to the highest quality standards to exceed your expectations.",
    },
    {
      title: isAr ? "قابلية التوسع" : "Infinite Scalability",
      desc: isAr ? "بنيتنا التحتية مصممة لتنمو وتتوسع معك أياً كان حجم طموحك وتوسع أعمالك." : "Infrastructure designed to scale alongside your business growth.",
    },
  ];

  return (
    <div className={`bg-slate-900 text-white min-h-screen bg-[radial-gradient(circle_at_center,rgba(40,202,225,.15),transparent_60%)] font-sans`}
         dir={isAr ? "rtl" : "ltr"}>
      
      <NavBar />

      {/* 🔥 HERO */}
      <section className="mt-36 flex items-center justify-center text-center px-6">
        <h1 className="text-[7vw]  font-black leading-[0.85] tracking-tighter uppercase">
          {isAr ? "ثقة" : "TRUST"} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
            {isAr ? "عبر الخبرة" : "EXPERIENCE"}
          </span>
        </h1>
      </section>

      {/* 🔥 HORIZONTAL CLIENTS */}
      <section ref={containerRef} className="relative h-[320vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
  style={{ x }}
  className="flex gap-10 px-20 md:px-32"
>
  {values.map((v, i) => (
    <motion.div
      key={i}
      whileHover={{ scale: 1.05, borderColor: "#3b82f6" }}
      className="min-w-[320px] md:min-w-[400px] h-[300px] 
      bg-[#0a0a0a] border border-white/5 rounded-[2rem] 
      flex flex-col items-start justify-center p-10
      shadow-xl hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] 
      transition-all duration-500"
    >
      {/* الرقم التسلسلي للقيمة */}
      <div className="text-4xl font-black text-white/10 mb-6">
        0{i + 1}
      </div>
      
      <div className="space-y-4">
        <h3 className="text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
          {v.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed normal-case">
          {v.desc}
        </p>
      </div>
    </motion.div>
  ))}
</motion.div>
        </div>
      </section>

      {/* 🔥 PERFORMANCE STATS */}
      <section className=" px-6 md:px-12 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black mb-20 text-center uppercase">
          {isAr ? "الأداء الرقمي" : "PERFORMANCE"}
        </h2>
        <div className="space-y-10">
          {performanceStats.map((item, i) => (
            <div key={i} className="space-y-3">
              <div className={`flex justify-between text-sm uppercase tracking-widest ${isAr ? 'font-bold' : ''}`}>
                <span className="text-slate-400">{item.label}</span>
                <span className="text-cyan-400 font-bold">{item.value}%</span>
              </div>
              <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.value}%` }}
                  transition={{ duration: 1 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔥 WHY CHOOSE US */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            {isAr ? "لماذا يختارنا" : "WHY CLIENTS"} <span className="text-cyan-400 italic">{isAr ? "العملاء؟" : "CHOOSE US"}</span>
          </h2>
          <p className="text-slate-500 mt-6 max-w-xl mx-auto normal-case font-medium">
            {isAr ? "نحن لا نقدم خدمات فحسب — بل نصمم النتائج هندسياً." : "We don’t just deliver services — we engineer outcomes."}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {valueProps.map((item, i) => (
            <div key={i} className="group relative p-[1px] rounded-[2.5rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400 opacity-40 group-hover:opacity-100 transition-all duration-500 animate-pulse" />
              <div className="relative bg-[#0a0a0a] rounded-[2.5rem] p-10 h-full transition-all duration-500 group-hover:translate-y-[-6px]">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-[2.5rem]" />
                <div className="relative z-10 space-y-6 text-start">
                  <div className={`flex items-center gap-4 ${isAr ? 'flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg" />
                    <span className="text-xs text-cyan-400 uppercase tracking-[0.3em]">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed normal-case">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClientsPage;