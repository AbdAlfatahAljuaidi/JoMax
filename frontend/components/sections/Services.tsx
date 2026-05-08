'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Cloud, ShieldCheck, Zap, Database, Server, Activity, Cpu, Gauge, Radio } from 'lucide-react';

export default function ServicesOrbit() {
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

  const services = [
    { 
      title: isAr ? 'الربط الحكومي' : 'Government Integration', 
      icon: Globe, 
      desc: isAr ? 'أنظمة الضرائب والفوترة الإلكترونية' : 'Tax systems & e-invoicing' 
    },
    { 
      title: isAr ? 'سحابة ERP' : 'Cloud ERP', 
      icon: Cloud, 
      desc: isAr ? 'أنظمة مؤسسية قابلة للتوسع' : 'Scalable enterprise ecosystems' 
    },
    { 
      title: isAr ? 'دعم 24/7' : '24/7 Support', 
      icon: ShieldCheck, 
      desc: isAr ? 'مراقبة واستقرار مستمر' : 'Monitoring & stability' 
    },
    { 
      title: isAr ? 'تحليل البيانات' : 'Data Analytics', 
      icon: Database, 
      desc: isAr ? 'رؤى أعمال فورية ولحظية' : 'Real-time business insights' 
    },
    { 
      title: isAr ? 'خوادم عالمية' : 'Global Server', 
      icon: Server, 
      desc: isAr ? 'عناقيد خوادم عالية التوافر' : 'High availability clusters' 
    },
    { 
      title: isAr ? 'تنفيذ فائق السرعة' : 'Fast Execution', 
      icon: Zap, 
      desc: isAr ? 'عمليات تقنية زمن استجابة منخفض' : 'Low latency transactions' 
    }
  ];

  return (
    <section 
      className="relative py-40 bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="text-brand-green tracking-[0.35em] text-sm mb-4 uppercase font-bold">
            {isAr ? "كوكبة الخدمات" : "Service Constellation"}
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {isAr ? "أنظمة" : "Enterprise"}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-green">
              {isAr ? "المؤسسات" : "Systems"}
            </span>
          </h2>

          <p className="mt-6 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            {isAr 
              ? "منظومة موحدة حيث تعمل كل خدمة في نظام مداري حيوي متكامل." 
              : "A unified ecosystem where every service operates in a living orbital system."}
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 w-full">
          <StatCard icon={Activity} label={isAr ? "حمل النظام" : "System Load"} value="75%" color="text-cyan-400" isAr={isAr} />
          <StatCard icon={Cpu} label={isAr ? "النقاط النشطة" : "Nodes Active"} value="6/6" color="text-emerald-400" isAr={isAr} />
          <StatCard icon={Gauge} label={isAr ? "معدل المزامنة" : "Sync Rate"} value="24ms" color="text-purple-400" isAr={isAr} />
          <StatCard icon={Radio} label={isAr ? "وقت التشغيل" : "Uptime"} value="99.9%" color="text-amber-400" isAr={isAr} />
        </div>

        {/* ORBIT SYSTEM */}
        <div className="relative w-[700px] h-[700px] flex items-center justify-center shrink-0">
          {/* Orbit Rings */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" />
          <div className="absolute w-[650px] h-[650px] rounded-full border border-cyan-500/10" />

          {/* Core */}
          <div className="w-52 h-52 rounded-full bg-slate-900 border border-cyan-500/30 flex flex-col items-center justify-center shadow-[0_0_120px_rgba(6,182,212,0.25)] z-10">
            <h3 className="text-5xl font-black tracking-tighter">{isAr ? "النواة" : "CORE"}</h3>
            <span className="text-cyan-500 text-sm tracking-[0.25em] mt-2 uppercase font-bold">
              {isAr ? "المنظومة" : "SYSTEM"}
            </span>
          </div>

          <motion.div
            animate={{ rotate: isAr ? -360 : 360 }} // عكس اتجاه الدوران في العربية يعطي شعوراً بصرياً أفضل
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {services.map((item, i) => {
              const Icon = item.icon;
              const angle = (i * 60) * (Math.PI / 180);
              const radius = 325;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div
                  key={i}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`
                  }}
                >
                  <motion.div
                    animate={{ rotate: isAr ? 360 : -360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className={`w-64 p-6 bg-slate-900/90 backdrop-blur border border-white/10 rounded-2xl hover:border-cyan-500/50 shadow-2xl ${isAr ? 'text-right' : 'text-left'}`}
                  >
                    <Icon className={`${isAr ? 'mr-0 ml-auto' : ''} text-cyan-400 mb-3`} size={28} />
                    <h4 className="font-bold text-xl">
                      {item.title}
                    </h4>
                    <p className="text-base text-white/50 mt-2 leading-snug">
                      {item.desc}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, color, isAr }: any) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur flex items-center gap-4 min-w-[220px]">
      <Icon className={color} size={26} />
      <div className={isAr ? "text-right" : "text-left"}>
        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
          {label}
        </p>
        <p className="text-2xl font-extrabold mt-1 tracking-tight">
          {value}
        </p>
      </div>
    </div>
  );
}