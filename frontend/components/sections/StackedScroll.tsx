'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Step {
  id: string;
  number: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  color: string;
  glow: string;
}

const JomaxStackedSection = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    setLang(storedLang);
  }, []);

  const isAr = lang === 'ar';

  const steps: Step[] = [
    {
      id: 'integration',
      number: '01',
      tag: isAr ? 'الربط البرمجي' : 'API INTEGRATION',
      title: isAr ? 'ربط الأنظمة المحاسبية' : 'ERP System Integration',
      desc: isAr 
        ? 'تكامل سلس ومباشر يربط نظامك الحالي بمنصة زاتكا لضمان تدفق البيانات تلقائياً دون تدخل بشري.' 
        : 'Seamless integration linking your current system to ZATKA to ensure automated data flow.',
      image: '/images/stats.png', // صورة واحدة واضحة جداً
      color: 'text-cyan-400',
      glow: 'from-cyan-500/20',
    },
    {
      id: 'signing',
      number: '02',
      tag: isAr ? 'التوقيع الرقمي' : 'DIGITAL SIGNING',
      title: isAr ? 'تشفير وتصديق الفواتير' : 'Invoice Encryption',
      desc: isAr 
        ? 'تشفير فوري لكل فاتورة باستخدام شهادات CSID المعتمدة، مما يمنح فواتيرك صبغة قانونية تقنية لا تقبل التلاعب.' 
        : 'Instant encryption for every invoice using certified CSID, giving your invoices a tamper-proof legal status.',
      image: '/images/fg.jpeg',
      color: 'text-purple-500',
      glow: 'from-purple-500/20',
    },
    {
      id: 'monitoring',
      number: '03',
      tag: isAr ? 'المراقبة والتقارير' : 'MONITORING & REPORTS',
      title: isAr ? 'لوحة تحكم ذكية' : 'Smart Dashboard',
      desc: isAr 
        ? 'مراقبة حية لجميع عمليات الإرسال والاستلام مع تقارير دقيقة توضح حالة كل فاتورة في أجزاء من الثانية.' 
        : 'Live monitoring of all transmissions with precise reports showing the status of each invoice in milliseconds.',
      image: '/images/bv.png',
      color: 'text-emerald-400',
      glow: 'from-emerald-500/20',
    },
  ];

  return (
    <section className="bg-slate-900  px-4 md:px-10 lg:px-20" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="container mx-auto">
        
        {/* Header Section */}
        <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <h2 className="text-white text-5xl md:text-8xl font-black mb-6 tracking-tighter">
              {isAr ? 'قوة ' : 'The Power of '} 
              <span className="text-cyan-500">Jomax</span>
            </h2>
            <p className="text-slate-400 text-xl">
              {isAr ? 'تقنية متطورة، لفوترة إلكترونية بلا تعقيد.' : 'Advanced tech for effortless e-invoicing.'}
            </p>
          </div>
          <div className="hidden md:block text-slate-700 font-mono text-sm tracking-widest uppercase">
            // Smart Workflow Implementation
          </div>
        </div>

        <div className="relative space-y-[15vh]">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="sticky w-full"
              style={{ top: `${100 + index * 40}px` }}
            >
              <div className="relative w-full h-[70vh] md:h-[80vh] bg-[#0d1117] border border-white/5 rounded-[4rem] shadow-2xl overflow-hidden group">
                
                {/* Full-Width Background Image */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={step.image} 
                    fill 
                    className=" transition-transform duration-[2s] group-hover:scale-110" 
                    alt={step.title}
                    priority
                  />
                  {/* Subtle Gradient Overlay to ensure text visibility regardless of image brightness */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${isAr ? 'md:bg-gradient-to-l' : 'md:bg-gradient-to-r'} from-black/90 via-black/40 to-transparent`} />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end md:justify-center p-8 md:p-20 lg:p-24 max-w-3xl">
                  <div className="mb-6 flex items-center gap-4">
                    <span className={`h-px w-12 ${step.color.replace('text', 'bg')}`} />
                    <span className={`text-sm font-black tracking-[0.4em] uppercase ${step.color}`}>
                      {step.number} // {step.tag}
                    </span>
                  </div>
                  
                  <h3 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-xl opacity-90">
                    {step.desc}
                  </p>

                  <div className="mt-12">
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl font-bold hover:bg-white hover:text-black transition-all duration-300">
                      {isAr ? 'اكتشف المزيد' : 'Learn More'}
                    </button>
                  </div>
                </div>

                {/* Decorative Element: Corner Number */}
                <div className="absolute top-12 right-12 text-white/5 text-9xl font-black select-none group-hover:text-white/10 transition-colors">
                  {step.number}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Padding for Scroll */}
        <div className="h-[30vh]" />
      </div>
    </section>
  );
};

export default JomaxStackedSection;