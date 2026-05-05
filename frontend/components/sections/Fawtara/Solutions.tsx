import React from 'react';
import { 
  FileText, Zap, QrCode, ShieldCheck, 
  Settings, BarChart3, LayoutGrid, Archive, ArrowUpRight 
} from 'lucide-react';
import Image from 'next/image';

const solutions = [
  { title: "Electronic Invoicing", desc: "Generate tax invoices and debit/credit notes in XML format.", icon: <FileText size={22} /> },
  { title: "ZATKA API Sync", desc: "Direct integration with the Fatoora portal for real-time validation.", icon: <Zap size={22} /> },
  { title: "Certified QR Code", desc: "Encrypted QR codes compliant with TLV standards.", icon: <QrCode size={22} /> },
  { title: "Digital Signatures", desc: "Automated management of Cryptographic CSIDs and stamps.", icon: <ShieldCheck size={22} /> },
  { title: "ERP Integration", desc: "Seamless connectivity with SAP, Oracle, and Odoo systems.", icon: <Settings size={22} /> },
  { title: "Analytics Dashboard", desc: "Monitor invoice status and detailed financial reports.", icon: <BarChart3 size={22} /> },
  { title: "Multi-Branch Support", desc: "Centrally manage invoicing for all company branches.", icon: <LayoutGrid size={22} /> },
  { title: "Legal Archiving", desc: "Secure storage of electronic invoices for 10+ years.", icon: <Archive size={22} /> },
];

const SolutionsSection = () => {
  return (
    <section className="bg-slate-900 py-32 relative overflow-hidden font-sans" dir="ltr">
      
      {/* --- أنيميشن الخط الضوئي (Scanning Line) - حركة احترافية بسيطة --- */}
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
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-brand-green"></span>
              <span className="text-brand-green text-xs font-bold tracking-[0.4em] uppercase">Enterprise Suite</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
              Powerful Solutions <br />
              <span className="text-slate-500 font-normal">For Digital Growth.</span>
            </h2>
            <p className="mt-6 text-slate-400 max-w-md text-lg leading-relaxed">
              ZATKA-certified infrastructure designed for high-volume processing and 100% legal compliance.
            </p>
          </div>

          {/* --- عرض الصورة بشكل احترافي ومنظم --- */}
          <div className="relative group hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950/50 p-4 shadow-2xl">
              {/* خط المسح الضوئي */}
           
              
        {/* 1. نقوم بإنشاء حاوية للأب وتحديد تموضعها وحجمها */}
<div className="relative w-full h-[550px] overflow-hidden rounded-2xl border border-slate-800"> 
    
    {/* 2. الآن يعمل fill بشكل صحيح داخل هذه الحاوية */}
    <Image
        src="/images/SOL.jpeg" // مسار الصورة الخاص بك
        alt="Jomax to ZATKA Integration Bridge Visual" 
        fill // تأخذ الصورة حجم الـ div الأب بالكامل
        className=" object-center transition-transform duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
        // ملاحظة: مع fill، لا نحتاج لتحديد w-full h-full داخل className
    />

</div>
              
              {/* زوايا ديكورية تعطي طابع هندسي (Architectural Corners) */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-brand-green/30 rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-brand-green/30 rounded-br-xl"></div>
            </div>
            
            {/* بطاقة معلومات صغيرة تطفو بجانب الصورة (تزيد من الطابع العملي) */}
            <div className="absolute -bottom-6 -left-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                <span className="text-white text-xs font-bold tracking-wider uppercase">System Engine Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Layout: رصين ونظيف */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item, index) => (
            <div 
              key={index}
              className="p-8 rounded-2xl bg-slate-800/30 border border-slate-800/50 hover:border-brand-green/50 hover:bg-slate-800/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="text-brand-green mb-6 bg-slate-900 w-10 h-10 flex items-center justify-center rounded-lg border border-slate-700 shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="mt-6 flex justify-end">
                <ArrowUpRight className="text-slate-700 group-hover:text-brand-green w-4 h-4 transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;