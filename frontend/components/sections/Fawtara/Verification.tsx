import React from 'react';
import { ShieldCheck, Landmark, ArrowRightLeft, Cpu } from 'lucide-react';
import Image from 'next/image';

const ComplianceSection = () => {
  return (
    <section className="bg-slate-900 py-20 relative overflow-hidden font-sans" dir="ltr">
      
      {/* --- بداية تعديل: تعريف الأنيميشن الدائم (CSS Keyframes) --- */}
      <style>{`
        @keyframes flow-line {
          0% { stroke-dashoffset: 100; opacity: 0.2; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }

        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.5; filter: blur(2px); }
          50% { transform: scale(1.2); opacity: 1; filter: blur(4px); }
        }

        .data-stream-line {
          stroke-dasharray: 20 80; /* خطوط متقطعة */
          animation: flow-line 4s linear infinite; /* حركة دائمة */
        }
        
        .connection-node {
          animation: pulse-glow 3s ease-in-out infinite; /* توهج دائم */
        }
      `}</style>
      {/* --- نهاية تعديل الأنيميشن --- */}

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#28CAE1]/20 to-transparent"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-brand-green"></div>
            <span className="text-brand-green text-xs font-bold tracking-[0.3em] uppercase">
              Regulatory Compliance
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
            Certified Identity & <br />
            <span className="text-slate-500">Legal Integration</span>
          </h2>
        </div>

        {/* New Design: Balanced Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          
          {/* Column 1: The Visual Connection (Left) */}
          <div className="relative order-2 lg:order-1">
            
            {/* --- بداية تعديل: عرض الصورة الكبيرة مع أنيميشن "تدفق البيانات الحية" --- */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-slate-950/50 mb-10 group">
                {/* الصورة الكبيرة */}
           {/* 1. نقوم بإنشاء حاوية للأب وتحديد تموضعها وحجمها */}
<div className="relative w-full h-[400px] overflow-hidden rounded-2xl border border-slate-800"> 
    
    {/* 2. الآن يعمل fill بشكل صحيح داخل هذه الحاوية */}
    <Image
        src="/images/bv.png" // مسار الصورة الخاص بك
        alt="Jomax to ZATKA Integration Bridge Visual" 
        fill // تأخذ الصورة حجم الـ div الأب بالكامل
        className="object-cover object-center transition-transform duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
        // ملاحظة: مع fill، لا نحتاج لتحديد w-full h-full داخل className
    />

</div>

                {/* طبقة تراكب أنيميشن تدفق البيانات (بشكل دائم فوق الصورة) */}
                <div className="absolute inset-0 z-10 pointer-events-none" >
                    <svg viewBox="0 0 800 500" className="w-full h-full">
                        
                        {/* خطوط بيانات مائلة متحركة تحاكي التدفق */}
                        <path d="M 150 250 L 650 250" stroke="url(#gradient-flow)" strokeWidth="2" fill="none" className="data-stream-line" />
                        <path d="M 160 280 L 640 280" stroke="url(#gradient-flow)" strokeWidth="1.5" fill="none" className="data-stream-line" style={{ animationDelay: '1s' }} />
                        <path d="M 140 220 L 660 220" stroke="url(#gradient-flow)" strokeWidth="1.5" fill="none" className="data-stream-line" style={{ animationDelay: '2s' }} />

                        {/* نقاط اتصال مضيئة بتأثير نبض (على أطراف التدفق) */}
                      
                        {/* تعريف التدرج اللوني للخطوط */}
                        <defs>
                            <linearGradient id="gradient-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#28CAE1" stopOpacity="0" />
                                <stop offset="50%" stopColor="#28CAE1" stopOpacity="1" />
                                <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            {/* --- نهاية تعديل الصورة والأنيميشن --- */}

            {/* كروت الاتصال تحت الصورة مباشرة */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              
              {/* Jomax Soft Node */}
              <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm group hover:border-brand-green transition-all duration-500">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center mb-4">
                  <Cpu className="text-brand-green w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">Jomax System</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Automated data processing and XML UBL 2.1 generation.</p>
              </div>

              {/* ZATKA Node */}
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 backdrop-blur-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center mb-4">
                  <Landmark className="text-slate-400 w-5 h-5" />
                </div>
                <h4 className="text-white font-bold text-lg mb-1">ZATKA Portal</h4>
                <p className="text-slate-500 text-xs leading-relaxed">Official government clearance and reporting gateway.</p>
              </div>

              {/* Connection Overlay Label - مدمج بشكل أنظف */}
              <div className="md:col-span-2 flex items-center justify-center pt-2 relative">
                {/* إضافة نقطة أنيميشن صغيرة خضراء لتأكيد "Live" */}
                <div className="flex items-center gap-3 bg-slate-800 px-5 py-2.5 rounded-full border border-slate-700 shadow-lg relative z-10">
                  <span className="text-brand-green text-xs font-black uppercase tracking-wider">Live Sync</span>
                  <ArrowRightLeft className="text-slate-500 w-3.5 h-3.5" />
                  <span className="text-white text-xs font-medium">Phase 2 Protocol</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Compliance Details (Right) */}
          <div className="lg:col-span-1 space-y-10 order-1 lg:order-2">
            <div className="relative p-1 rounded-3xl bg-gradient-to-br from-slate-700 to-transparent shadow-xl">
              <div className="bg-slate-900/80 p-10 rounded-3xl backdrop-blur-lg">
                <div className="flex items-start gap-5 mb-8">
                  <div className="bg-brand-green p-4 rounded-2xl shadow-[0_0_30px_rgba(40,202,225,0.4)] flex-shrink-0 relative overflow-hidden">
                    {/* إضافة أنيميشن شعاع ضوئي خلفي للدرع */}
                    <ShieldCheck className="text-slate-950 w-8 h-8 relative z-10" />
                  </div>
                  <div>
                    <h3 className="text-white text-3xl font-extrabold tracking-tight">Phase 2 Certified</h3>
                    <p className="text-brand-green text-base font-semibold mt-1">Clearance & Integration Phase</p>
                  </div>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed italic border-l-4 border-slate-700 pl-6 py-2">
                  "Jomax Soft is specifically engineered to meet Phase 2 technical requirements, 
                  mandating direct real-time integration with the ZATKA platform."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Highlights Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-slate-800 pt-16">
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">Direct API Clearance</span>
            <span className="text-slate-500 text-sm">Instant validation from Fatoora portal.</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">Digital Identity Management</span>
            <span className="text-slate-500 text-sm">Automated CSID & cryptographic stamps.</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-white font-bold">UBL 2.1 Compliance</span>
            <span className="text-slate-500 text-sm">Fully compatible with international XML standards.</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplianceSection;