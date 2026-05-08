'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Zap, ArrowRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const StrategicPartnerSection = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('language') || 'en';
    setLang(storedLang);
  }, []);

  const isAr = lang === 'ar';

  const partnerContent = {
    tag: isAr ? "شراكة استراتيجية" : "STRATEGIC PARTNERSHIP",
    title: isAr ? "قوة Jomax بدعم من" : "Jomax Powered by",
    partnerName: "ZATKA / Global Partner", // استبدله باسم الشريك
    desc: isAr 
      ? "تكاملنا العميق مع [اسم الشريك] يضمن لك استقراراً بنسبة 99.9% في عمليات الفوترة الإلكترونية، مع بنية تحتية سحابية هي الأقوى عالمياً."
      : "Our deep integration with [Partner Name] guarantees 99.9% stability in e-invoicing operations, backed by the world's strongest cloud infrastructure.",
    stats: [
      { label: isAr ? "وقت الاستجابة" : "Latency", value: "< 200ms" },
      { label: isAr ? "الأمان" : "Security", value: "AES-256" },
      { label: isAr ? "التوافق" : "Compliance", value: "100%" }
    ],
    cta: isAr ? "للمزيد" : "Learn More"
  };

  return (
    <section className="bg-slate-900 px-20 py-24 relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Side: Content (The Story) */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <Zap size={14} className="text-cyan-400 fill-cyan-400" />
                <span className="text-[10px] font-black tracking-[0.3em] text-slate-300 uppercase">
                  {partnerContent.tag}
                </span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white leading-tight">
                {partnerContent.title} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-green">
                  {partnerContent.partnerName}
                </span>
              </h2>
              
              <p className="text-slate-400 text-xl leading-relaxed max-w-xl">
                {partnerContent.desc}
              </p>
            </div>

            {/* Partner Key Stats */}
            <div className="grid grid-cols-3 gap-6 p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              {partnerContent.stats.map((stat, i) => (
                <div key={i} className="text-center lg:text-start">
                  <p className="text-cyan-500 font-mono text-2xl font-bold mb-1">{stat.value}</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-tighter">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 items-center">
                <Link href="/Fawtara" >
              <button className="group flex items-center gap-3 bg-white text-black font-black px-8 py-4 rounded-2xl hover:bg-cyan-400 transition-all duration-300">
                {partnerContent.cta}
                <ExternalLink size={18} className="transition-transform group-hover:rotate-12" />
              </button>
              </Link>
              <div className="flex items-center gap-2 text-slate-500">
                <ShieldCheck size={20} className="text-emerald-500" />
                <span className="text-sm font-medium">{isAr ? "شريك معتمد وموثق" : "Verified & Certified Partner"}</span>
              </div>
            </div>
          </div>

          {/* Right Side: The Visual (High Tech Immersive Image) */}
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative h-[500px] md:h-[700px] w-full rounded-[4rem] overflow-hidden border border-white/10 shadow-[0_0_100px_-20px_rgba(6,182,212,0.3)]">
              
              {/* The Partner Image - تجعلها صورة معبرة عن الشريك (مثل سيرفرات أو تكنولوجيا متقدمة) */}
              <Image 
                src="/images/fawtara1.jpeg" // صورة الشريك المهم
                fill
                className="object-cover transition-transform duration-[3s] group-hover:scale-110"
                alt="Strategic Partner"
                priority
              />

         

              {/* Dark Overlay with scan-line effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%]" />
            </div>

            {/* Decorative Floating Card */}
            <div className={`absolute -bottom-10 ${isAr ? '-right-10' : '-left-10'} hidden xl:block bg-cyan-500 p-1 rounded-[2rem] rotate-3 hover:rotate-0 transition-transform duration-500`}>
                <div className="bg-[#020617] p-8 rounded-[1.8rem] flex items-center gap-6">
                    <div className="h-12 w-12 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-500">
                        <ArrowRight className={isAr ? 'rotate-180' : ''} />
                    </div>
                    <div>
                        <p className="text-white font-bold leading-none mb-1">{isAr ? "تحقق التوافق" : "Compliance Verified"}</p>
                        <p className="text-slate-500 text-xs uppercase tracking-widest">{isAr ? "فحص بنسبة 100%" : "100% Monitored"}</p>
                    </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default StrategicPartnerSection;