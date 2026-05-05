import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    // نستخدم flex-col للموبايل لترتيب الصورة فوق النص، و block للديسكتوب لأن الصورة ستصبح absolute
    <section className="md:h-[120vh] bg-[#01040a] text-white relative flex flex-col lg:block overflow-hidden">
      
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
            Your Saudi <br />
            <span className="text-white">E-Invoicing &</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-emerald-400">
              Integration Provider
            </span>
          </h1>
          
          <p className="text-slate-400 text-sm lg:text-lg max-w-lg mb-8 lg:mb-10 leading-relaxed mx-auto lg:mx-0">
            We help businesses stay ZATCA-compliant with Fatoora, seamlessly integrate systems, and grow with custom dashboards.
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
        </div>
      </main>

      {/* 3. شريط المميزات السفلي */}
      <div className="relative lg:absolute bottom-6 lg:bottom-10 left-0 w-full z-30 pb-10 lg:pb-0">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-between items-center gap-6 lg:gap-4 p-6 lg:p-4 lg:px-10 border border-white/5 bg-black/40 backdrop-blur-xl rounded-[2rem]">
            <FeatureItem icon="🛡️" title="ZATCA" sub="Compliance" />
            <div className="hidden lg:block w-px h-8 bg-slate-800" />
            <FeatureItem icon="🔗" title="ERP" sub="Integration" />
            <div className="hidden md:block lg:block w-px h-8 bg-slate-800" />
            <FeatureItem icon="👥" title="Onboarding" sub="Team" />
            <div className="hidden lg:block w-px h-8 bg-slate-800" />
            <FeatureItem icon="📊" title="Custom" sub="Dashboards" />
            <div className="hidden md:block lg:block w-px h-8 bg-slate-800" />
            <div className="col-span-2 md:col-span-1 lg:col-span-auto flex justify-center lg:block">
               <FeatureItem icon="🎧" title="24/7" sub="Support" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, title, sub }: { icon: string, title: string, sub: string }) => (
  <div className="flex items-center gap-3 lg:gap-4 group cursor-pointer">
    <div className="text-xl lg:text-2xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">{icon}</div>
    <div className="flex flex-col leading-tight text-left">
      <span className="text-[12px] lg:text-[14px] font-bold text-white whitespace-nowrap">{title}</span>
      <span className="text-[10px] lg:text-[11px] text-slate-500 whitespace-nowrap uppercase tracking-tighter">{sub}</span>
    </div>
  </div>
);

export default HeroSection;