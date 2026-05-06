import React from 'react';
import Image from 'next/image';
import { ChartBarIcon, DivideCircle, DivideSquare, HeadphonesIcon, LinkIcon, ShieldCheckIcon, UsersIcon } from 'lucide-react';

const HeroSection = () => {
  return (
    // نستخدم flex-col للموبايل لترتيب الصورة فوق النص، و block للديسكتوب لأن الصورة ستصبح absolute
    <section className="md:h-[135vh] md:pt-20 bg-[#01040a] text-white relative flex flex-col lg:block overflow-hidden">
      
      {/* 1. حاوية الصورة المتغيرة */}
      <div className="relative w-full h-[350px] sm:h-[450px] lg:absolute lg:inset-0 lg:h-full lg:w-full z-0">
        <Image 
          src="/images/wq.jpeg" 
          alt="Fatoora Dashboard"
          fill
          // object-cover تضمن ملء المساحة دائماً
          className="object-cover object-center lg:object-right transition-all duration-700"
          priority
        />
        
        {/* طبقات التدرج اللوني - تم تعديلها لتناسب الموبايل (أسود من الأسفل) والديسكتوب (أسود من اليسار) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#01040a] lg:via-[#01040a]/60 lg:to-transparent z-10" />
        
        {/* توهج أزرق - للديسكتوب فقط */}
        <div className="hidden lg:block absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-cyan-600/20 blur-[120px] rounded-full -translate-y-1/2" />
      </div>

      {/* 2. المحتوى الرئيسي */}
      <main className="container mx-auto px-6 lg:px-12 relative z-20 flex-1 flex items-center lg:min-h-screen">
        <div className="max-w-3xl w-full py-12 lg:py-0 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-black/40 border border-cyan-500/30 px-4 py-2 rounded-full text-[10px] lg:text-xs mb-8 backdrop-blur-md">
            <span className="text-cyan-400">🛡️ ZATCA-Compliant</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-300">Integration Experts</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
          E-Invoicing <br />
            <span className="text-white">With Global Standards</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-emerald-400">
            For Phase Two
            </span>
          </h1>
          
          <p className="text-slate-400 text-sm lg:text-lg  mb-8 lg:mb-10 leading-relaxed mx-auto lg:mx-0">
          Jomax Soft — An integrated e-invoicing platform compliant with the requirements of the Zakat, Tax and Customs Authority (ZATCA), featuring full integration with the Fatoora system, invoice generation in UBL 2.1 format with digital signature, and real-time API connectivity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a 
  href="https://wa.me/962799198989" 
  target="_blank" 
  rel="noopener noreferrer"
  className="contents" // عشان اللينك ما يخرب التصميم
>
  <button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95">
    Book a Demo <span className="text-xl">→</span>
  </button>
</a>
            <button className="border border-slate-700 bg-white/5 hover:bg-white/10 px-8 py-3.5 rounded-xl font-semibold transition-all backdrop-blur-md active:scale-95 text-center">
              Get Started
            </button>
          </div>
        {/* قسم الشركاء المحدث */}
<div className="flex flex-col items-center lg:items-start gap-4 border-t border-white/5 pt-8 mt-12">
  {/* النص التعريفي: يتوسط في الموبايل ويتحاذى يساراً في الديسكتوب */}
  <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 text-center lg:text-left">
    Trusted By
  </p>
  
  {/* حاوية اللوجوهات: justify-center للموبايل */}
  <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8   transition-all">
    <div className="relative w-28 h-10">
      <Image 
        src="/images/fatoo.jpeg" 
        alt="Partner" 
        fill 
        className="object-contain" 
      />
    </div>
    {/* أضف لوجوهات إضافية هنا */}
    {/* <div className="relative w-28 h-10">
        <Image src="/images/other-partner.png" alt="Partner" fill className="object-contain" />
    </div> */}
  </div>
</div>
        </div>
      </main>

{/* 3. شريط المميزات السفلي - النسخة المطورة */}
<div className="relative lg:absolute bottom-6 lg:bottom-10 left-0 w-full z-30 pb-10 lg:pb-0">
  <div className="container mx-auto px-6">
    <div className="
      relative 
      grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between items-center 
      gap-6 lg:gap-4 p-6 lg:p-8 lg:px-12 
      bg-[#020817]/60 backdrop-blur-2xl 
      rounded-[1.5rem] border border-blue-500/30
      shadow-[0_0_25px_rgba(30,144,255,0.15)]
      before:absolute before:inset-0 before:rounded-[1.5rem] before:p-[1px] before:bg-gradient-to-r before:from-transparent before:via-blue-500/50 before:to-transparent before:-z-10
    ">
      
      <FeatureItem icon={<ShieldCheckIcon  />} title="ZATCA" sub="Compliance" />
      
      <FeatureItem icon={<LinkIcon />} title="ERP" sub="Integration" />
      
      <FeatureItem icon={<UsersIcon />} title="Onboarding" sub="Team" />
      
      <FeatureItem icon={<ChartBarIcon />} title="Custom" sub="Dashboards" />
      
      <div className="col-span-2 md:col-span-1 lg:col-span-auto flex justify-center lg:block">
         <FeatureItem icon={<HeadphonesIcon />} title="24/7" sub="Support" />
      </div>
      
    </div>
  </div>
</div>
    </section>
  );
};

// تغيير النوع من string إلى React.ReactNode ليقبل الأيقونات والنصوص معاً
const FeatureItem = ({ icon, title, sub }: { icon: React.ReactNode, title: string, sub: string }) => (
<div className="flex items-center gap-3 lg:gap-4 group cursor-pointer md:border-l pl-5 first:border-none first:pl-0">
    {/* تم إزالة opacity-80 واستبدالها بفلتر توهج خفيف ليطابق الصورة الأصلية */}
    <div className="text-6xl text-blue-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)] group-hover:scale-110 transition-all">
      {icon}
    </div>
    <div className="flex flex-col leading-tight text-left">
      <span className="text-[12px] lg:text-[14px] font-bold text-white whitespace-nowrap">
        {title}
      </span>
      <span className="text-[10px] lg:text-[11px] text-white whitespace-nowrap uppercase tracking-wider">
        {sub}
      </span>
    </div>
  </div>
);
export default HeroSection;