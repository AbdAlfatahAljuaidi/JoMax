'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileText, Zap, QrCode, ShieldCheck, 
  Settings, BarChart3, LayoutGrid, Archive, ArrowUpRight 
} from 'lucide-react';
import Image from 'next/image';

const SolutionsSection = () => {
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

  // مصفوفة الحلول المترجمة
  const solutions = [
    { 
      title: isAr ? "الفواتير الإلكترونية" : "Electronic Invoicing", 
      desc: isAr ? "إصدار فواتير ضريبية وإشعارات مدينة/دائنة بصيغة XML." : "Generate tax invoices and debit/credit notes in XML format.", 
      icon: <FileText size={22} /> 
    },
    { 
      title: isAr ? "مزامنة API زاتكا" : "ZATKA API Sync", 
      desc: isAr ? "ربط مباشر مع بوابة فاتورة للتحقق الفوري من البيانات." : "Direct integration with the Fatoora portal for real-time validation.", 
      icon: <Zap size={22} /> 
    },
    { 
      title: isAr ? "رمز QR معتمد" : "Certified QR Code", 
      desc: isAr ? "رموز QR مشفرة ومتوافقة مع معايير TLV الفنية." : "Encrypted QR codes compliant with TLV standards.", 
      icon: <QrCode size={22} /> 
    },
    { 
      title: isAr ? "التوقيعات الرقمية" : "Digital Signatures", 
      desc: isAr ? "إدارة تلقائية لشهادات التشفير (CSID) والأختام الرقمية." : "Automated management of Cryptographic CSIDs and stamps.", 
      icon: <ShieldCheck size={22} /> 
    },
    { 
      title: isAr ? "الربط مع ERP" : "ERP Integration", 
      desc: isAr ? "اتصال سلس مع أنظمة SAP و Oracle و Odoo وغيرها." : "Seamless connectivity with SAP, Oracle, and Odoo systems.", 
      icon: <Settings size={22} /> 
    },
    { 
      title: isAr ? "لوحة التحليلات" : "Analytics Dashboard", 
      desc: isAr ? "مراقبة حالة الفواتير وتقارير مالية مفصلة." : "Monitor invoice status and detailed financial reports.", 
      icon: <BarChart3 size={22} /> 
    },
    { 
      title: isAr ? "دعم متعدد الفروع" : "Multi-Branch Support", 
      desc: isAr ? "إدارة مركزية للفواتير لجميع فروع شركتك." : "Centrally manage invoicing for all company branches.", 
      icon: <LayoutGrid size={22} /> 
    },
    { 
      title: isAr ? "الأرشفة القانونية" : "Legal Archiving", 
      desc: isAr ? "تخزين آمن للفواتير الإلكترونية لمدة تزيد عن 10 سنوات." : "Secure storage of electronic invoices for 10+ years.", 
      icon: <Archive size={22} /> 
    },
  ];

  const content = {
    badge: isAr ? "حزمة الشركات" : "Enterprise Suite",
    titleMain: isAr ? "حلول قوية" : "Powerful Solutions",
    titleSub: isAr ? "للنمو الرقمي." : "For Digital Growth.",
    desc: isAr 
      ? "بنية تحتية معتمدة من زاتكا مصممة لمعالجة أحجام كبيرة من البيانات مع امتثال قانوني بنسبة 100%."
      : "ZATKA-certified infrastructure designed for high-volume processing and 100% legal compliance.",
    status: isAr ? "محرك النظام نشط" : "System Engine Active"
  };

  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden font-sans" dir={isAr ? "rtl" : "ltr"}>
      
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        .scanner-line {
          height: 2px;
          background: linear-gradient(90deg, transparent, #22c55e, transparent);
          position: absolute;
          width: 100%;
          z-index: 20;
          animation: scan 4s linear infinite;
        }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Header Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className={isAr ? 'text-right' : 'text-left'}>
            <div className={`flex items-center gap-2 mb-4 ${isAr ? 'flex-row' : ''}`}>
              <span className="w-8 h-[1px] bg-brand-green"></span>
              <span className="text-brand-green text-xs font-bold tracking-[0.4em] uppercase">{content.badge}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              {content.titleMain} <br />
              <span className="text-slate-500 font-normal">{content.titleSub}</span>
            </h2>
            <p className="mt-6 text-slate-400 max-w-md text-lg leading-relaxed">
              {content.desc}
            </p>
          </div>

          {/* الصورة */}
          <div className="relative group hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/50 p-4 shadow-2xl">
              <div className="relative w-full h-[550px] overflow-hidden rounded-2xl border border-slate-800"> 
                <Image
                    src="/images/SOL.jpeg" 
                    alt="Solutions Visual" 
                    fill 
                    className="object-cover object-center transition-transform duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
                />
              </div>
              
              <div className={`absolute top-0 ${isAr ? 'right-0' : 'left-0'} w-8 h-8 border-t-2 ${isAr ? 'border-r-2' : 'border-l-2'} border-brand-green/30 rounded-t-xl`}></div>
              <div className={`absolute bottom-0 ${isAr ? 'left-0' : 'right-0'} w-8 h-8 border-b-2 ${isAr ? 'border-l-2' : 'border-r-2'} border-brand-green/30 rounded-b-xl`}></div>
            </div>
            
            <div className={`absolute -bottom-6 ${isAr ? '-right-6' : '-left-6'} bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl backdrop-blur-md`}>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                <span className="text-white text-xs font-bold tracking-wider uppercase">{content.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl bg-slate-800/30 border border-slate-800/50 hover:border-brand-green/50 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between group/card ${isAr ? 'text-right' : 'text-left'}`}
            >
              <div>
                <div className={`text-brand-green mb-6 bg-slate-900 w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 shadow-inner ${isAr ? 'mr-0' : ''}`}>
                  {item.icon}
                </div>
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className={`mt-6 flex ${isAr ? 'justify-start' : 'justify-end'}`}>
                <ArrowUpRight className={`text-slate-700 group-hover/card:text-brand-green w-4 h-4 transition-all ${isAr ? '-rotate-90 group-hover/card:-translate-x-1' : 'group-hover/card:translate-x-1'} group-hover/card:-translate-y-1`} />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;