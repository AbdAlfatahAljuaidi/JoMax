'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  BarChart3,
  FileCheck,
  Code2,
  Zap,
  ArrowUpRight,
  Activity,
  Sparkles
} from "lucide-react";

import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export default function JoMaxSolutionsPage() {
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

  const solutions = [
    {
      id: "01",
      title: isAr ? "التحول الرقمي وتطوير الويب" : "Digital Transformation & Web Dev",
      subItems: [
        "Digital Transformation & Web Development",
        "Quality Assurance & Performance Management"
      ],
      icon: Code2,
      desc: isAr 
        ? "بناء منصات رقمية متكاملة فائقة السرعة والأداء مع ضمان أعلى معايير الجودة وإدارة الأداء."
        : "Building high-performance digital platforms tailored for modern enterprise scalability.",
      gridClass: "md:col-span-2",
      metrics: "99.9% Uptime // QA Certified"
    },
    {
      id: "02",
      title: isAr ? "تكامل الأنظمة والربط الفاتوري" : "ERP E-Invoicing & Compliance",
      subItems: [
        "ERP E-Invoicing Integration"
      ],
      icon: FileCheck,
      desc: isAr 
        ? "أتمتة الفوترة الإلكترونية المتوافقة تماماً مع متطلبات هيئة الزكاة والضريبة والجمارك (ZATKA)."
        : "Seamless compliance and automated e-invoicing systems integrated directly with ZATKA regulations.",
      gridClass: "md:col-span-1",
      metrics: "ZATKA Phase 2 Ready"
    },
    {
      id: "03",
      title: isAr ? "بنية وحوكمة أنظمة ERP" : "ERP Architecture & Governance",
      subItems: [
        "ERP Functional Architecture",
        "ERP Landscape",
        "ERP Implementation & Governance"
      ],
      icon: Cpu,
      desc: isAr 
        ? "تصميم وهيكلة وإدارة بيئات الـ ERP المعقدة لضمان سير العمليات بكفاءة وحوكمة كاملة."
        : "Designing, auditing, and executing complex ERP ecosystems with strict operational governance.",
      gridClass: "md:col-span-1",
      metrics: "Tier-1 Governance"
    },
    {
      id: "04",
      title: isAr ? "ذكاء البيانات وإدارة التغيير" : "Data Intelligence & Change",
      subItems: [
        "Data, Analytics & Decision Intelligence",
        "Organizational & Change Management"
      ],
      icon: BarChart3,
      desc: isAr 
        ? "تحويل البيانات الضخمة إلى قرارات استراتيجية ذكية مع قيادة المؤسسات عبر مراحل التغيير بسلاسة."
        : "Empowering decisions through advanced analytics while driving institutional cultural adaptation.",
      gridClass: "md:col-span-2",
      metrics: "Predictive BI Model"
    }
  ];

  const processSteps = [
    { num: "01", title: isAr ? "اكتشاف البيئة البرمجية" : "Architecture Discovery", tag: "Audit" },
    { num: "02", title: isAr ? "تشخيص الثغرات والأداء" : "Performance Diagnosis", tag: "Analysis" },
    { num: "03", title: isAr ? "مخطط حوكمة البيانات" : "Governance Blueprint", tag: "Design" },
    { num: "04", title: isAr ? "التنفيذ والربط الشامل" : "Enterprise Execution", tag: "Go-Live" },
    { num: "05", title: isAr ? "التطوير والتحول المستمر" : "Continuous Evolution", tag: "Scale" },
  ];

  return (
    <div 
      className={`bg-[#0b1120] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.2),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(29,78,216,0.15),transparent_70%)] text-slate-100 min-h-screen selection:bg-cyan-400 selection:text-black overflow-x-hidden ${isAr ? 'font-sans' : 'font-mono'}`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <NavBar />

      <main className="relative z-10">
        
        {/* --- HERO SECTION WITH OPEN AMBIENT GLOW --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-28 relative">
          {/* خلفية جمالية مشعة تفتح مساحة الصفحة */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-md px-4 py-2 rounded-xl text-cyan-400 text-xs font-bold uppercase tracking-wider"
              >
                <Sparkles size={14} className="text-cyan-400" />
                {isAr ? "جومكس سوفت // مصفوفة الحلول المتقدمة 2025" : "JoMax Soft // Advanced Solutions Matrix 2025"}
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white">
                {isAr ? "منظومة حلول" : "INTELLIGENT"}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                  {isAr ? "المؤسسات الذكية." : "ENTERPRISE SOLUTIONS."}
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-slate-800 lg:pl-8 lg:rtl:border-l-0 lg:rtl:border-r lg:rtl:pr-8 backdrop-blur-sm p-6 rounded-2xl bg-slate-900/20 border border-slate-800/40">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-3 font-mono">
                <Activity size={12} className="animate-pulse" /> // LIVE ENGINE ACTIVE
              </div>
              <p className="text-slate-300 text-base leading-relaxed normal-case font-sans">
                {isAr 
                  ? "نقوم بهندسة وحوكمة البنية الرقمية وأنظمة الـ ERP لتمكين الشركات من قيادة التحول الرقمي بأعلى معايير الكفاءة والامتثال المالي والتنظيمي."
                  : "Architecting governed digital ecosystems and full-scale ERP frameworks to ensure complete compliance, technical resilience, and data-driven intelligence."}
              </p>
            </div>
          </div>
        </section>

        {/* --- INNOVATIVE BENTO GRID SOLUTIONS --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                {isAr ? "القدرات التشغيلية والحلول" : "OUR ARCHITECTURE CAPABILITIES"}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                {isAr ? "الحلول الهندسية المعتمدة" : "Ecosystem Architecture"}
              </h2>
            </div>
          </div>

          {/* البينتو جريد بنظام الزجاج الفاتح المنشرح */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-br from-slate-900/60 to-slate-950/80 border border-slate-800 hover:border-cyan-400/60 p-8 md:p-10 rounded-[2rem] relative overflow-hidden group flex flex-col justify-between transition-all duration-500 shadow-xl shadow-black/20 backdrop-blur-md ${sol.gridClass}`}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                {/* إضاءة خلفية داخل الكرت تظهر عند الـ Hover لتعطي حيوية وانشراح */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-300">
                      <sol.icon size={24} />
                    </div>
                    {/* فكرة فنية: شريط تتبع يعطي انطباع بذكاء الأنظمة (System Performance Tag) */}
                    <span className="text-xs font-mono px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                      {sol.metrics}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-white group-hover:text-cyan-400 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-8 font-sans">
                    {sol.desc}
                  </p>
                </div>

                {/* استعراض دقيق وشرح للنقاط المأخوذة من ملفكم */}
                <div className="mt-auto pt-6 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-2">
                    {sol.subItems.map((sub, i) => (
                      <span key={i} className="text-xs bg-slate-950/80 px-3 py-2 rounded-xl border border-slate-800 text-slate-200 font-sans font-medium hover:border-cyan-500/40 transition-colors">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- INTERACTIVE PIPELINE PROCESS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-10  relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-14 backdrop-blur-md relative overflow-hidden">
            <h3 className="text-2xl md:text-4xl font-black mb-12 tracking-tight text-white">
              {isAr ? "منهجية التشغيل والتحول في جومكس" : "THE EXECUTION PIPELINE"}
            </h3>

            {/* خط زمني يربط المراحل الخمس انسيابياً وبألوان واضحة تفاعلية */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {processSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-slate-950/60 border border-slate-800/80 hover:border-cyan-400/40 p-6 rounded-2xl group transition-all duration-300 relative flex flex-col justify-between h-40"
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-cyan-400 font-bold font-mono text-sm bg-cyan-500/10 px-2.5 py-0.5 rounded-md border border-cyan-500/20">{step.num}</span>
                    <span className="text-[10px] text-slate-500 font-mono tracking-widest uppercase">{step.tag}</span>
                  </div>
                  <h4 className="text-sm md:text-base font-bold tracking-tight text-slate-200 group-hover:text-white transition-colors font-sans">
                    {step.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INSPIRATIONAL CALL TO ACTION (CTA) --- */}
        <section className="relative py-10 flex flex-col items-center justify-center px-6">
          {/* دائرة نيون ضخمة خلف الـ CTA لتعطي شعوراً بالتفاؤل والانشراح الهيكلي */}
          <div className="absolute w-[600px] h-[300px] bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-[140px] rounded-full pointer-events-none" />
          
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="mb-6 p-4 bg-cyan-500/10 border border-cyan-400/20 rounded-full text-cyan-400 shadow-xl shadow-cyan-500/5"
          >
            <Zap className="fill-cyan-400" size={32} />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-black text-center mb-6 tracking-tight text-white leading-tight">
            {isAr ? "لنصنع القفزة الرقمية معاً" : "CONNECT YOUR ECOSYSTEM"}
          </h2>
          <p className="text-slate-300 text-center max-w-xl mb-12 text-sm md:text-base font-sans leading-relaxed">
            {isAr 
              ? "انتقل بمؤسستك إلى مستوى جديد من الحوكمة والأتمتة الذكية عبر تفعيل باقة حلول جومكس المتكاملة."
              : "Deploy governed ERP components and highly scalable applications optimized for enterprise performance."}
          </p>

          <motion.button
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(6,182,212,0.4)" }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 text-slate-950 font-black text-sm rounded-2xl flex items-center gap-3 tracking-wider shadow-xl shadow-cyan-500/20"
          >
            <span className="font-sans font-black text-base">{isAr ? "ابدأ هندسة حلولك الآن" : "INITIALIZE SOLUTION ARCHITECTURE"}</span>
            <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[2.5]" />
          </motion.button>
        </section>

      </main>

      <Footer />
    </div>
  );
}