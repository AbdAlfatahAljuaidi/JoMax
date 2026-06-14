"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Globe, Shield, Cpu, Zap } from "lucide-react";
import { motion, Variants } from "framer-motion";

import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";

const ProjectsPage = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    setLang(storedLang);

    const handleStorageChange = () => {
      setLang(localStorage.getItem('language') || 'en');
    };

    // التزامن مع تغيير اللغة في الموقع
    const interval = setInterval(handleStorageChange, 500);
    return () => clearInterval(interval);
  }, []);

  const isAr = lang === 'ar';

  const projects = [
    {
      title: isAr ? "سولتك - عمان" : "Soltek - Amman",
      logo:"/images/Sol.png",
      category: isAr ? "تنفيذ ERP" : "ERP", // التصنيفات التقنية عادة تبقى بالإنجليزية أو تعرب (ويب)
      description: isAr 
        ?"تنفذ قائمة منتجاتنا مثل المحاسبة، وسلسلة التوريد، والمبيعات، والفواتير الإلكترونية، والمستودعات"
        : "implement list of our Products such as Accounting   Supply chain , sales , E-invoice , warehouses",
      tech: ["React", "Node.js", "PostgreSQL"],
      result: isAr ? "2 مليون+ عملية يومية" : "2M+ daily transactions",
      accentColor: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/20",
      tagText: "text-cyan-400",
      icon: <Globe size={20} />,
    },
    {
      title: isAr ? "NGN - KSA" : "NGN - KSA",
      logo:"/images/NGN.png",
      category: isAr ? "تنفيذ ERP" : "ERP",
      description: isAr 
        ? "تنفيذ قائمة منتجاتنا مثل المحاسبة، وسلسلة التوريد، والمبيعات، والفواتير الإلكترونية، والمستودعات"
        : "implement list of our Products such as Accounting   Supply chain , sales , E-invoice , warehouses",
      tech: ["Python", "TensorFlow", "FastAPI"],
      result: isAr ? "+34% معدل التحويل" : "+34% conversion rate",
      accentColor: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/20",
      tagText: "text-cyan-400",
      icon: <Cpu size={20} />,
    },
    {
      title: isAr ? "Starkar - Iraq" : "Starkar - Iraq",
      logo:"/images/Star.png",
      category: isAr ? "تطوير برمجيات مخصصة" : "Software Dev",
      description: isAr 
        ? "تطوير مخصص لتأمين المركبات مع التسعير الديناميكي ورقمنة تأمين المركبات"
        : "  Customize development  for Vehicle insurance with dynamic prices , digitization Vehicle insurance",
      tech: ["Palo Alto", "Okta", "IBM"],
      result: isAr ? "شهادة NIST 800-207" : "NIST 800-207 certified",
      accentColor: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/20",
      tagText: "text-cyan-400",
      icon: <Shield size={20} />,
    },

    
    {
      title: isAr ? "Beautiful cars - KSA" : "Beautiful cars - KSA",
      logo:"/images/BC.png",
      category: isAr ? "تكامل ZATCA للفوترة الإلكترونية" : "ZATCA E-Invoice",
      description: isAr 
        ? "تطوير مخصص لتأمين المركبات مع التسعير الديناميكي ورقمنة تأمين المركبات"
        : "  Sales Module integrated implicitly with Zatca",
      tech: ["Palo Alto", "Okta", "IBM"],
      result: isAr ? "شهادة NIST 800-207" : "NIST 800-207 certified",
      accentColor: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/20",
      tagText: "text-cyan-400",
      icon: <Shield size={20} />,
    },

    {
      title: isAr ? "Yamin  Solation - Jordan" : "Yamin  Solation - Jordan ",
      logo:"/images/Yamin.png",
      category: isAr ? "تنفيذ ERP" : "ERP",
      description: isAr 
        ? "تنفيذ قائمة منتجاتنا مثل المحاسبة، وسلسلة التوريد، والمبيعات، والفواتير الإلكترونية، والمستودعات"
        : "   implement list of our Products such as Accounting   Supply chain , sales , E-invoice , warehouses",
      tech: ["Palo Alto", "Okta", "IBM"],
      result: isAr ? "شهادة NIST 800-207" : "NIST 800-207 certified",
      accentColor: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/20",
      tagText: "text-cyan-400",
      icon: <Shield size={20} />,
    },

    
    {
      title: isAr ? "Soltek - KSA " : "Soltek - KSA ",
      logo:"/images/Sol.png",
      category: isAr ? "تنفيذ ERP" : "ERP",
      description: isAr 
        ? "تنفيذ قائمة منتجاتنا مثل المحاسبة، وسلسلة التوريد، والمبيعات، والفواتير الإلكترونية، والمستودعات"
        : " implement list of our Products such as Accounting   Supply chain , sales , E-invoice , warehouses",
      tech: ["Palo Alto", "Okta", "IBM"],
      result: isAr ? "شهادة NIST 800-207" : "NIST 800-207 certified",
      accentColor: "from-blue-500 to-cyan-400",
      glowColor: "group-hover:shadow-blue-500/20",
      tagText: "text-cyan-400",
      icon: <Shield size={20} />,
    },
  ];

  const stats = [
    { label: isAr ? "تأسست عام" : "Founded", value: "2011", sub: isAr ? "رواد الرقمية" : "Digital Pioneers" },
    { label: isAr ? "العملاء" : "Clients Served", value: "500+", sub: isAr ? "ثقة عالمية" : "Global Trust" },
    { label: isAr ? "المشاريع المنفذة" : "Projects Delivered", value: "1.2K+", sub: isAr ? "كفاءة مطلقة" : "Pure Efficiency" },
    { label: isAr ? "وقت التشغيل" : "Uptime", value: "99.9%", sub: isAr ? "أنظمة موثوقة" : "Reliable Systems" },
  ];

  const tabs = isAr 
    ? ["الكل", "تنفيذ ERP", "تطوير برمجيات مخصصة", "تكامل ZATCA للفوترة الإلكترونية"]
   :  ["All", "ERP", "Software Dev", "ZATCA E-Invoice"]

  const [activeTab, setActiveTab] = useState("All");

  // معالجة التصفية لتشمل الكل باللغتين
  const filteredProjects =
    (activeTab === "All" || activeTab === "الكل")
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className={`bg-slate-900 text-white font-sans`} dir={isAr ? "rtl" : "ltr"}>
      <NavBar />

      <section className="relative py-40 px-6 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(40,202,225,.08),transparent_70%)]">
        
        {/* Background Neon Blobs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Stats Section */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-40"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="relative p-8 bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-md transition-all text-center group"
              >
                <h4 className="text-[10px] font-mono text-cyan-400/60 uppercase tracking-[0.3em] mb-4">
                  {stat.label}
                </h4>
                <div className="text-5xl font-black text-white tracking-tighter mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {stat.sub}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Header & Tabs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10"
          >
            <div className="space-y-6 text-start">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/5 border border-white/10">
                <Zap size={14} className="text-cyan-400 animate-pulse" />
                <span className={`text-[10px] font-black text-cyan-400 uppercase ${isAr ? '' : 'tracking-[0.4em]'}`}>
                  {isAr ? "معرض الأعمال" : "The Portfolio"}
                </span>
              </div>

              <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                {isAr ? "عمل متقن." : "PROVEN WORK."}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">
                  {isAr ? "نتائج حقيقية." : "REAL RESULTS."}
                </span>
              </h2>
            </div>

            {/* Futuristic Tabs */}
            <div className="flex flex-wrap gap-2 bg-white/[0.03] p-2 rounded-full border border-white/10 backdrop-blur-xl">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeTab === tab
                      ? "bg-cyan-500 text-slate-900 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            key={activeTab}
            variants={stagger}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className={`group relative bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 flex flex-col transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl ${project.glowColor}`}
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-gradient-to-r ${project.accentColor} rounded-b-full`} />

                <div className="flex justify-between items-start mb-8">
                  <div className={`flex items-center gap-2 ${project.tagText} font-mono text-[10px] uppercase tracking-widest`}>
                    {/* {project.icon} */}
                
                    {project.category}
                  </div>
                  <ArrowUpRight className={`${isAr ? 'rotate-[-90deg]' : ''} text-slate-600 group-hover:text-cyan-400 transition-colors`} size={20} />
                </div>
                <div className="flex items-center gap-4 mb-4">
  {project.logo && (
    <div className="w-20 h-20 bg-white flex items-center justify-center  rounded-2xl p-2 border border-white/5">
      <img 
        src={project.logo} 
        alt={project.title} 
        className="max-w-full max-h-full object-contain" 
      />
    </div>
  )}
  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors text-start">
    {project.title}
  </h3>
</div>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-medium text-start">
                  {project.description}
                </p>

               
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;