import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="md:h-[135vh] md:pt-20 bg-[#01040a] text-white relative flex flex-col lg:block overflow-hidden">
      
      {/* 1. حاوية الصورة الخلفية الأساسية */}
      <div className="relative w-full h-[350px] sm:h-[450px] lg:absolute lg:inset-0 lg:h-full lg:w-full z-0">
        <Image 
          src="/images/wq.jpeg" 
          alt="Fatoora Dashboard"
          fill
          className="object-cover object-center lg:object-right transition-all duration-700"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040a] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#01040a] lg:via-[#01040a]/60 lg:to-transparent z-10" />
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
          
          <p className="text-slate-400 text-sm lg:text-lg mb-8 lg:mb-10 leading-relaxed mx-auto lg:mx-0">
            Jomax Soft — An integrated e-invoicing platform compliant with the requirements of the Zakat, Tax and Customs Authority (ZATCA), featuring full integration with the Fatoora system.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="https://wa.me/962799198989" target="_blank" rel="noopener noreferrer" className="contents">
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

      {/* 3. حاوية الصورة السفلية الممتدة بعرض الشاشة الكامل وبدون خلفية بيضاء */}
      <div className="relative lg:absolute bottom-0 left-0 w-full z-30">
        {/* أزلنا الـ container والـ px-6 لجعل الصورة تلامس أطراف الشاشة */}
      {/* حاوية الصورة الكاملة (الحاوية الأم) */}
<div className="relative w-full overflow-hidden transition-all duration-500">
  
  {/* 1. صورة وضع الموبايل - تظهر في الشاشات الصغيرة وتختفي من الديسكتوب */}
  <div className="relative w-[90%] mx-auto h-[1000px]  block md:hidden">
    <Image 
      src="/images/rt.jpeg" // ضع مسار صورة الموبايل هنا
      alt="Mobile Feature Banner"
      fill
      className="object-cover" 
      priority
    />
    {/* التدرج الناعم للأعلى - للموبايل */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#01040a] via-transparent to-transparent h-16" />
  </div>

  {/* 2. صورة وضع الديسكتوب (الكبير) - تختفي من الموبايل وتظهر من شاشات MD فما فوق */}
  <div className="relative w-full h-[150px] lg:h-[220px] hidden md:block">
    <Image 
      src="/images/io.png" // صورتك الأصلية للديسكتوب
      alt="Feature Full Banner"
      fill
      className="object-cover object-center" 
      priority
    />
    {/* التدرج الناعم للأعلى - للديسكتوب */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#01040a] via-transparent to-transparent h-12" />
  </div>

</div>
      </div>

    </section>
  );
};

export default HeroSection;