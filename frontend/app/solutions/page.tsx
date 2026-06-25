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
  Sparkles,
  Building2,
  ShieldCheck,
  Globe2,
  Boxes
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
        ? "هندسة وإعادة هيكلة المنصات الرقمية المعقدة وتطوير الأنظمة السحابية فائقة الأداء القابلة للتوسع اللانهائي، مع صياغة أطر صارمة ومفتوحة لإدارة مؤشرات الأداء الحيوية (KPIs). نحن ندمج استراتيجيات التحول الشامل مع حوكمة دورة حياة البرمجيات عبر تطبيق اختبارات الجودة المؤتمتة (QA)، واختبارات الإجهاد والاختراق المتقدمة، لضمان استقرار العمليات المؤسسية الكبرى، وتقليل تكاليف التشغيل التقني، ورفع كفاءة البنية التحتية لتتحمل ملايين العمليات المتزامنة بأعلى مستويات الأمان والاستجابة الفورية."
        : "Architecting and re-engineering mission-critical cloud ecosystems and web platforms optimized for infinite enterprise scalability, multi-tenant resilience, and high-throughput data processing. We seamlessly unify digital transformation strategies with rigid software lifecycle governance—deploying advanced automated Quality Assurance (QA) pipelines, comprehensive security vulnerability analysis, and rigorous stress testing. This ensures maximum operational uptime, modernizes legacy infrastructures into microservices, reduces technical debt, and empowers enterprise units with highly responsive, secure, and fault-tolerant digital touchpoints capable of processing millions of concurrent requests seamlessly.",
      gridClass: "md:col-span-2",
      metrics: "99.9% Uptime // QA Certified",
      features: []
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
      metrics: "ZATKA Phase 2 Ready",
      features: [
        {
          category: isAr ? "المبيعات والفوترة الإلكترونية" : "Sales & E-Invoicing",
          items: isAr 
            ? ["معالجة أوامر البيع والعروض", "الربط مع منصة الفوترة الحكومية", "التسعير، الخصومات والعروض", "الحدود الائتمانية وكشوفات العملاء", "تتبع الإيرادات والتحصيل", "لوحات قياس المبيعات والامتثال"]
            : ["Quotation & Sales Order Processing", "Gov. E-Invoicing Platform Integration", "Pricing, Discounts & Promotions", "Credit Limit & Customer Statements", "Revenue & Collections Tracking", "Sales KPIs & Compliance Dashboards"]
        }
      ]
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
        ? "تصميم وهيكلة وإدارة بيئات الـ ERP المعقدة لضمان سير العمليات بكفاءة وحوكمة كاملة عبر 7 موديولات رئيسية متكاملة."
        : "Designing, auditing, and executing complex ERP ecosystems with strict operational governance across 7 core modules.",
      gridClass: "md:col-span-3",
      metrics: "7-Module Integrated Map",
      features: [
        {
          category: isAr ? "الإدارة المالية" : "Finance Management",
          items: isAr 
            ? ["الدفتر العام ودليل الحسابات", "حسابات الدائنين والمدينين", "الموازنات، التكاليف والتنبؤ المالي", "الأصول الثابتة وإدارة النقدية", "التقارير المالية (IFRS / GAAP)", "الامتثال الضريبي وزكاة القيمة المضافة"]
            : ["General Ledger & Chart of Accounts", "Accounts Receivable & Payable", "Budgeting, Costing & Forecasting", "Fixed Assets & Cash Management", "Financial Reporting (IFRS / GAAP)", "Tax & VAT Compliance"]
        },
        {
          category: isAr ? "إدارة سلاسل الإمداد" : "Supply Chain Management",
          items: isAr 
            ? ["إدارة أوامر الشراء", "إدارة الموردين والبائعين", "تخطيط الطلب والسعة الاستيعابية", "تخطيط متطلبات المواد (MRP)", "تحليلات التكاليف والمصروفات"]
            : ["Purchase Order Management", "Vendor & Supplier Management", "Demand & Capacity Planning", "Material Requirements (MRP)", "Cost & Spend Analytics"]
        },
        {
          category: isAr ? "إدارة المستودعات والمخزون" : "Warehouse & Inventory Operations",
          items: isAr 
            ? ["الرقابة على المخزون وتقييمه", "إشعار استلام وصرف البضائع (GRN / GIN)", "إدارة مواقع متعددة والصناديق (Bin)", "تحويلات المخزون والتسويات", "تتبع الباركود والأرقام التسلسلية", "بيانات المواد (UoM, Pack-size)", "إدارة الفئات الهيكلية للمواد", "المواد البديلة والمتاحة"]
            : ["Inventory Control & Valuation", "Goods Receipt & Issue (GRN / GIN)", "Multi-Location & Bin Management", "Stock Transfers & Adjustments", "Barcode & Serial Number Tracking", "Item Master & Categorization", "Hierarchical Item Categories", "Substitute & Alternate Items"]
        },
        {
          category: isAr ? "إدارة رأس المال البشري (HCM)" : "Human Capital Management (HCM)",
          items: isAr 
            ? ["إدارة دورة حياة الموظف", "معالجة الرواتب والربط الحكومي", "التوظيف والتهيئة للعمل", "الأداء والتقييمات", "تتبع الإجازات والحضور"]
            : ["Employee Lifecycle Management", "Payroll Processing & Government Integrations", "Recruitment & Onboarding", "Performance & Appraisals", "Leave & Attendance Tracking"]
        },
        {
          category: isAr ? "إدارة المشاريع" : "Project Management",
          items: isAr 
            ? ["تخطيط المشاريع وهيكل العمل WBS", "تتبع المهام والمراحل الرئيسية", "توزيع الموارد ونسب الاستخدام", "مراقبة الميزانية والتكاليف", "إدارة الجداول الزمنية (Timesheets)"]
            : ["Project Planning & WBS", "Task & Milestone Tracking", "Resource Allocation & Utilization", "Budget & Cost Control", "Timesheet Management"]
        },
        {
          category: isAr ? "إدارة الرواتب والامتثال (Payroll & Compliance)" : "Payroll Management & Compliance",
          items: isAr 
            ? [
                "معالجة الرواتب والربط الحكومي",
                "تقارير الموارد البشرية والرواتب",
                "سجل الرواتب والفروقات (Payroll Register & Variance)",
                "تقارير الحضور والإجازات والعمل الإضافي",
                "حساب نهاية الخدمة وانتهاء الوثائق",
                "محرك رواتب سعودي يحتوي على أكثر من 100 عنصر قابل للتهيئة",
                "حسابات الموظفين وأصحاب العمل بالتكامل مع الأنظمة الحكومية",
                "إنشاء ملفات WPS البنكية حسب رقم IBAN",
                "إدارة الامتثال والالتزام بأنظمة الرواتب"
              ]
            : [
                "Payroll Processing & Government Integrations",
                "HR & Payroll Reports",
                "Payroll Register & Variance Reports",
                "Attendance, Leave & Overtime Reports",
                "End-of-Service & Document Expiry Tracking",
                "Saudi Payroll Engine with 100+ Configurable Elements",
                "Government-Integrated Employer & Employee Calculations",
                "WPS Bank File Generation (IBAN-Based)",
                "Payroll Compliance & Regulatory Management"
              ]
        }
      ]
    },
    {
      id: "04",
      title: isAr ? "ذكاء البيانات وإدارة التغيير" : "Data Intelligence & CRM",
      subItems: [
        "Data, Analytics & Decision Intelligence",
        "Organizational & Change Management",
        "Customer Relationship Management"
      ],
      icon: BarChart3,
      desc: isAr 
        ? "تحويل البيانات الضخمة إلى قرارات استراتيجية ذكية مع قيادة المؤسسات عبر مراحل التغيير وسلاسة إدارة العملاء."
        : "Empowering decisions through advanced analytics while driving institutional cultural adaptation and deep client relationships.",
      gridClass: "md:col-span-3",
      metrics: "Predictive BI & 360° CRM",
      features: [
        {
          category: isAr ? "إدارة علاقات العملاء (CRM)" : "Customer Relationship Management (CRM)",
          items: isAr 
            ? ["إدارة العملاء المحتملين والفرص البيعية", "رؤية متكاملة 360 درجة للحسابات", "مراحل المبيعات والتنبؤات المستقبيلية", "تجزئة وتصنيف العملاء", "تتبع الأنشطة والمهام اليومية"]
            : ["Lead & Opportunity Management", "Contact & Account 360° View", "Sales Pipeline & Forecasting", "Customer Segmentation", "Activity & Task Tracking"]
        }
      ]
    }
  ];

  const processSteps = [
    { num: "01", title: isAr ? "اكتشاف البيئة البرمجية" : "Architecture Discovery", tag: "Audit" },
    { num: "02", title: isAr ? "تشخيص الثغرات والأداء" : "Performance Diagnosis", tag: "Analysis" },
    { num: "03", title: isAr ? "مخطط حوكمة البيانات" : "Governance Blueprint", tag: "Design" },
    { num: "04", title: isAr ? "التنفيذ والربط الشامل" : "Enterprise Execution", tag: "Go-Live" },
    { num: "05", title: isAr ? "التطوير والتحول المستمر" : "Continuous Evolution", tag: "Scale" },
  ];

  const empoweredIndustries = [
    { icon: Building2, title: isAr ? "الشركات والمؤسسات الكبرى" : "Enterprises & Conglomerates" },
    { icon: Boxes, title: isAr ? "سلاسل الإمداد والخدمات اللوجستية" : "Supply Chain & Logistics" },
    { icon: ShieldCheck, title: isAr ? "القطاعات الحكومية والامتثال" : "Government & Compliance Sectors" },
    { icon: Globe2, title: isAr ? "التجارة الإلكترونية والمنصات الرقمية" : "E-Commerce & Digital Platforms" }
  ];

  return (
    <div 
      className={`bg-[#0b1120] bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.2),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(29,78,216,0.15),transparent_70%)] text-slate-100 min-h-screen selection:bg-cyan-400 selection:text-black overflow-x-hidden `}
      dir={isAr ? "rtl" : "ltr"}
    >
      <NavBar />

      <main className="relative z-10">
        
        {/* --- HERO SECTION WITH OPEN AMBIENT GLOW --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-28 relative">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 backdrop-blur-md px-4 py-2 rounded-xl text-cyan-400 text-xs font-bold uppercase tracking-wider"
              >
                <Sparkles size={14} className="text-cyan-400" />
                {isAr ? "جومكس سوفت // مصفوفة الحلول المتقدمة 2026" : "JoMax Soft // Advanced Solutions Matrix 2026"}
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-[1.05] text-white">
                {isAr ? "منظومة حلول" : "INTELLIGENT"}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
                  {isAr ? "المؤسسات الذكية والـ ERP." : "ENTERPRISE SOLUTIONS & ERP."}
                </span>
              </h1>
            </div>

            <div className="lg:col-span-4 lg:border-l lg:border-slate-800 lg:pl-8 lg:rtl:border-l-0 lg:rtl:border-r lg:rtl:pr-8 backdrop-blur-sm p-6 rounded-2xl bg-slate-900/20 border border-slate-800/40">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold mb-3 font-mono">
                <Activity size={12} className="animate-pulse" /> // LIVE ENGINE ACTIVE
              </div>
              <p className="text-slate-300 text-base leading-relaxed normal-case font-sans">
                {isAr 
                  ? "نقوم بهندسة وحوكمة البنية الرقمية وأنظمة الـ ERP المتكاملة لتمكين الشركات من إدارة الأصول والمالية وسلاسل الإمداد بأعلى معايير الامتثال والذكاء."
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
                {isAr ? "القدرات التشغيلية والحلول الهيكلية" : "OUR ARCHITECTURE CAPABILITIES"}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                {isAr ? "خارطة الموديولات والأنظمة المتكاملة" : "Ecosystem Architecture"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol, index) => {
              const hasFeatures = sol.features && sol.features.length > 0;

              return (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br from-slate-900/60 to-slate-950/80 border border-slate-800 p-8 md:p-10 rounded-[2rem] relative overflow-hidden group flex flex-col justify-between transition-all duration-500 shadow-xl shadow-black/20 backdrop-blur-md ${sol.gridClass}`}
                  whileHover={{ y: -4, scale: 1.005 }}
                >
                  <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div>
                    <div className="flex justify-between items-start mb-8">
                      <div className="p-4 bg-slate-800/50 border border-slate-700/60 rounded-2xl text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:text-black group-hover:shadow-lg group-hover:shadow-cyan-400/20 transition-all duration-300">
                        <sol.icon size={24} />
                      </div>
                      <span className="text-xs font-mono px-3 py-1 bg-slate-950 rounded-full border border-slate-800 text-slate-400 group-hover:text-cyan-400 transition-colors">
                        {sol.metrics}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4 text-white group-hover:text-cyan-400 transition-colors">
                      {sol.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                      {sol.desc}
                    </p>

                    {/* عرض مباشر وتلقائي لكافة البيانات دون الحاجة لزر ضغط */}
                    {hasFeatures && (
                      <div className="mb-8 space-y-6 pt-6 border-t border-slate-800/60">
                        {sol.features.map((feat, fIdx) => (
                          <div key={fIdx} className="space-y-3">
                            <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                              {feat.category}
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 pl-2 rtl:pl-0 rtl:pr-2">
                              {feat.items.map((item, iIdx) => (
                                <li key={iIdx} className="text-xs text-slate-400 flex items-start gap-1.5 font-sans leading-relaxed hover:text-slate-200 transition-colors">
                                  <span className="text-cyan-500 font-bold mt-0.5">›</span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

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
              );
            })}
          </div>
        </section>

        {/* --- INDUSTRIES WE EMPOWER SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative">
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[200px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                {isAr ? "القطاعات التي نمكنها" : "INDUSTRIES WE EMPOWER"}
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
                {isAr ? "تحويل التعقيد إلى كفاءة" : "Transforming Complexity."}
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed font-sans">
                {isAr 
                  ? "تقدم جومكس خبرة تقنية عميقة وحلولاً موجهة للتنفيذ في مختلف القطاعات، من خلال تقديم برمجيات مخصصة واستراتيجيات تحول رقمي تعالج التحديات التشغيلية الفريدة وتدفع نحو إحداث أثر ملموس على الأعمال."
                  : "JoMax brings deep technical expertise and execution-driven solutions to diverse sectors, delivering tailored software and digital transformation strategies that address unique operational challenges and drive measurable business impact."}
              </p>
              <p className="text-slate-400 text-xs md:text-sm font-sans italic border-l-2 border-cyan-400/40 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pr-4">
                {isAr
                  ? "إن معرفتنا المتخصصة في حلول الـ ERP، وضمان الجودة، وتطوير الويب، والبرمجيات المخصصة تضمن لنا تحويل التعقيد إلى نتائج واضحة، قابلة للتطوير، وقابلة للتنفيذ الفوري عبر كافة القطاعات التي نخدمها."
                  : "Our specialized knowledge in ERP solutions, quality assurance, web development, and customized software ensures we transform complexity into clear, scalable, and actionable outcomes — across every industry we serve."}
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {empoweredIndustries.map((ind, index) => (
                <div 
                  key={index}
                  className="bg-slate-900/30 border border-slate-800/80 p-6 rounded-2xl flex items-center gap-4 hover:border-cyan-500/40 transition-all duration-300 backdrop-blur-sm group"
                >
                  <div className="p-3 bg-slate-950 rounded-xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                    <ind.icon size={20} />
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-slate-200 group-hover:text-white font-sans transition-colors">
                    {ind.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- INTERACTIVE PIPELINE PROCESS SECTION --- */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-10 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-14 backdrop-blur-md relative overflow-hidden">
            <h3 className="text-2xl md:text-4xl font-black mb-12 tracking-tight text-white">
              {isAr ? "منهجية التشغيل والتحول في جومكس" : "THE EXECUTION PIPELINE"}
            </h3>

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
              ? "انتقل بمؤسستك إلى مستوى جديد من الحوكمة والأتمتة الذكية عبر تفعيل باقة حلول جومكس وموديولات الـ ERP المتكاملة."
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