'use client';

import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const WorkflowSection = () => {
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

  const steps = [
    {
      id: "01",
      title: isAr ? "إنشاء فاتورة UBL 2.1" : "UBL 2.1 Invoice Creation",
      subtitle: isAr ? "توليد XML تلقائي" : "Automated XML Generation",
      desc: isAr ? "يقوم نظامنا بتحويل بيانات الفواتير من نظامك إلى صيغة XML المعتمدة من زاتكا (UBL 2.1) تلقائياً." : "Our system converts invoice data from your system into the ZATCA-approved XML format (UBL 2.1), automatically including all mandatory fields."
    },
    {
      id: "02",
      title: isAr ? "التوقيع الرقمي والتشفير" : "Digital Signing & Encryption",
      subtitle: isAr ? "امتثال آمن" : "Secure Compliance",
      desc: isAr ? "يتم توقيع الفواتير رقمياً باستخدام شهادة CSID معتمدة وتشفيرها وفقاً لمعايير PKI المعتمدة." : "Invoices are digitally signed using a ZATCA-approved CSID certificate and encrypted according to approved PKI standards."
    },
    {
      id: "03",
      title: isAr ? "الإرسال لمنصة فاتورة" : "Fatoora Platform Submission",
      subtitle: isAr ? "ربط سلس" : "Seamless Integration",
      desc: isAr ? "ترسل الفواتير تلقائياً إلى زاتكا عبر API التقارير للفواتير المبسطة أو API الاعتماد للفواتير الضريبية." : "Invoices are automatically sent to ZATCA via the Reporting API for simplified invoices or the Clearance API for tax invoices."
    },
    {
      id: "04",
      title: isAr ? "المصادقة اللحظية" : "Real-Time Authentication",
      subtitle: isAr ? "تحديث فوري للحالة" : "Instant Status Updates",
      desc: isAr ? "استلام مصادقة فورية من زاتكا، وتحديث حالة الفاتورة في نظامك تلقائياً مع الختم الزمني الرسمي." : "Immediate authentication is received from ZATCA, and the invoice status is automatically updated in your system with the official timestamp."
    },
    {
      id: "05",
      title: isAr ? "التسليم والأرشفة" : "Delivery & Archiving",
      subtitle: isAr ? "تخزين ممتثل" : "Compliant Storage",
      desc: isAr ? "تسليم الفاتورة للعميل بصيغة PDF مع رمز QR معتمد، وأرشفة نسخة XML بأمان وفقاً للمتطلبات القانونية." : "Invoices are delivered to customers in PDF format with an approved QR code, while XML copies are securely archived in compliance with legal requirements."
    }
  ];

  const content = {
    badge: isAr ? "التدفق التشغيلي" : "Operational Flow",
    title: isAr ? "كيف نؤتمت" : "How we automate",
    titleSub: isAr ? "امتثالك الضريبي." : "your compliance.",
    gatewayStatus: isAr ? "حالة البوابة: نشطة" : "Gateway Status: Active",
    linkedTitle: isAr ? "مرتبط بسلاسة مع" : "Seamlessly Linked to",
    linkedBrand: isAr ? "فاتورة زاتكا" : "ZATKA Fatoora",
    linkedDesc: isAr ? "تكامل آلي لحظي. يتم فحص وتوقيع كل فاتورة في أجزاء من الثانية دون تدخل بشري." : "Automated real-time integration. Every invoice is validated and signed in milliseconds with zero human intervention.",
    connectBtn: isAr ? "اتصل الآن" : "Connect Now",
    certified: isAr ? "معتمد v2.1" : "Certified v2.1"
  };

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden font-sans" dir={isAr ? "rtl" : "ltr"}>
      
      <style>{`
        @keyframes travel {
          0% { ${isAr ? 'right' : 'left'}: 0%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { ${isAr ? 'right' : 'left'}: 100%; opacity: 0; }
        }
        .data-bead {
          width: 4px;
          height: 4px;
          background: #22c55e;
          border-radius: 50%;
          position: absolute;
          top: -1.5px;
          filter: drop-shadow(0 0 5px #22c55e);
          animation: travel 6s linear infinite;
        }
        .scan-overlay {
          background: linear-gradient(to bottom, transparent 50%, rgba(34, 197, 94, 0.05) 50%);
          background-size: 100% 4px;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Section */}
        <div className={`mb-24 max-w-3xl ${isAr ? 'text-right' : 'text-left'}`}>
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 mb-6">
            <span className="text-brand-green text-[10px] font-black uppercase tracking-[0.3em]">{content.badge}</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1]">
            {content.title} <br />
            <span className="text-slate-500 underline decoration-brand-green/30 underline-offset-8">{content.titleSub}</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative mb-32">
          {/* Connector Line */}
          <div className={`absolute top-[2rem] ${isAr ? 'right-0' : 'left-0'} w-full h-[1px] bg-gradient-to-r from-brand-green/40 via-slate-700 to-transparent hidden lg:block z-0`}>
             <div className="data-bead" style={{ animationDelay: '0s' }}></div>
             <div className="data-bead" style={{ animationDelay: '2s' }}></div>
             <div className="data-bead" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className={`relative group ${isAr ? 'text-right' : 'text-left'}`}>
                <div className="relative mb-8 z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center group-hover:border-brand-green group-hover:bg-brand-green/10 transition-all duration-500 shadow-xl">
                    <span className="text-2xl font-black text-white group-hover:text-brand-green">{step.id}</span>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className={`absolute top-1/2 ${isAr ? '-left-4 -translate-x-full' : '-right-4 translate-x-full'} hidden lg:block text-slate-800 group-hover:text-brand-green/50 transition-colors`}>
                      {isAr ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <span className="text-brand-green text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                    {step.subtitle}
                  </span>
                  <h3 className="text-white text-xl font-bold group-hover:text-brand-green transition-colors">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>

                <div className={`absolute -top-12 ${isAr ? '-right-4' : '-left-4'} text-7xl font-black text-white/[0.02] select-none pointer-events-none group-hover:text-brand-green/[0.05] transition-all`}>
                  {step.id}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration Dashboard */}
        <div className="relative group">
          <div className="bg-slate-800/20 border border-slate-800 rounded-[3rem] overflow-hidden backdrop-blur-xl shadow-2xl relative z-10">
            <div className="grid lg:grid-cols-2 items-center">
              
              <div className={`p-10 md:p-16 space-y-8 ${isAr ? 'text-right' : 'text-left'}`}>
                <div className="space-y-4">
                  <div className={`flex items-center gap-3 ${isAr ? 'flex-row' : ''}`}>
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-green animate-pulse shadow-[0_0_10px_#22c55e]"></div>
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">{content.gatewayStatus}</span>
                  </div>
                  <h3 className="text-white text-3xl md:text-5xl font-black leading-tight">
                    {content.linkedTitle} <br /> 
                    <span className="text-brand-green/80">{content.linkedBrand}</span>
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                    {content.linkedDesc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <button className="flex items-center justify-center gap-3 px-8 py-4 bg-brand-green text-slate-950 font-black rounded-2xl hover:bg-white transition-all active:scale-95 shadow-xl shadow-brand-green/10 group/btn">
                    {content.connectBtn} {isAr ? <ArrowLeft size={20} className="group-hover/btn:-translate-x-1 transition-transform" /> : <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />}
                  </button>
                  
                  <div className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-slate-700/50 bg-slate-900/50">
                    <div className="flex -space-x-2">
                      {[1,2,3].map(i => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center">
                          <CheckCircle2 size={14} className="text-brand-green" />
                        </div>
                      ))}
                    </div>
                    <span className="text-slate-300 text-xs font-bold uppercase tracking-tighter">{content.certified}</span>
                  </div>
                </div>
              </div>

              <div className={`relative h-full min-h-[450px] bg-slate-950/40 ${isAr ? 'border-r' : 'border-l'} border-slate-800 overflow-hidden`}>
                <div className="absolute inset-0 scan-overlay z-20 pointer-events-none opacity-30"></div>
                <div className="absolute inset-0 p-10">
                  <div className="relative h-full w-full rounded-2xl overflow-hidden border border-slate-800 shadow-inner group-hover:border-brand-green/30 transition-colors duration-700">
                    <Image
                      src="/images/bv.png" 
                      alt="Integration Visual" 
                      fill
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} w-6 h-6 border-t-2 ${isAr ? 'border-r-2' : 'border-l-2'} border-brand-green/40 rounded-t-md`}></div>
                    <div className={`absolute bottom-4 ${isAr ? 'left-4' : 'right-4'} w-6 h-6 border-b-2 ${isAr ? 'border-l-2' : 'border-r-2'} border-brand-green/40 rounded-b-md`}></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="absolute -inset-10 bg-brand-green/5 blur-[120px] rounded-[5rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
        </div>

      </div>
    </section>
  );
};

export default WorkflowSection;