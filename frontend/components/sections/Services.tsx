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

    window.addEventListener('storage', handleStorageChange);
    const interval = setInterval(handleStorageChange, 1000);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const isAr = lang === 'ar';

  const services = [
    { title: isAr ? 'الربط الحكومي' : 'Government Integration', icon: Globe, desc: isAr ? 'أنظمة الضرائب والفوترة الإلكترونية' : 'Tax systems & e-invoicing' },
    { title: isAr ? 'سحابة ERP' : 'Cloud ERP', icon: Cloud, desc: isAr ? 'أنظمة مؤسسية قابلة للتوسع' : 'Scalable enterprise ecosystems' },
    { title: isAr ? 'دعم 24/7' : '24/7 Support', icon: ShieldCheck, desc: isAr ? 'مراقبة واستقرار مستمر' : 'Monitoring & stability' },
    { title: isAr ? 'تحليل البيانات' : 'Data Analytics', icon: Database, desc: isAr ? 'رؤى أعمال فورية ولحظية' : 'Real-time business insights' },
    { title: isAr ? 'خوادم عالمية' : 'Global Server', icon: Server, desc: isAr ? 'عناقيد خوادم عالية التوافر' : 'High availability clusters' },
    { title: isAr ? 'تنفيذ فائق السرعة' : 'Fast Execution', icon: Zap, desc: isAr ? 'عمليات تقنية زمن استجابة منخفض' : 'Low latency transactions' }
  ];

  return (
    <section 
      className="relative py-20 md:py-40 bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <p className="text-cyan-400 tracking-[0.2em] md:tracking-[0.35em] text-xs md:sm mb-4 uppercase font-bold">
            {isAr ? "كوكبة الخدمات" : "Service Constellation"}
          </p>
          <h2 className="text-4xl md:text-7xl font-bold text-white leading-tight">
            {isAr ? "أنظمة " : "Enterprise "}
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
              {isAr ? "المؤسسات" : "Systems"}
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 md:mb-32 w-full">
          <StatCard icon={Activity} label={isAr ? "حمل النظام" : "System Load"} value="75%" color="text-cyan-400" isAr={isAr} />
          <StatCard icon={Cpu} label={isAr ? "النقاط النشطة" : "Nodes Active"} value="6/6" color="text-emerald-400" isAr={isAr} />
          <StatCard icon={Gauge} label={isAr ? "معدل المزامنة" : "Sync Rate"} value="24ms" color="text-purple-400" isAr={isAr} />
          <StatCard icon={Radio} label={isAr ? "وقت التشغيل" : "Uptime"} value="99.9%" color="text-amber-400" isAr={isAr} />
        </div>

        {/* ORBIT SYSTEM - Hidden on small screens, shown on desktop */}
        <div className="hidden lg:flex relative w-[700px] h-[700px] items-center justify-center">
          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" />
          <div className="absolute w-[600px] h-[600px] rounded-full border border-cyan-500/10" />

          {/* Core */}
          <div className="w-48 h-48 rounded-full bg-slate-900 border border-cyan-500/30 flex flex-col items-center justify-center shadow-[0_0_80px_rgba(6,182,212,0.2)] z-20">
            <h3 className="text-4xl font-black tracking-tighter">{isAr ? "النواة" : "CORE"}</h3>
            <span className="text-cyan-500 text-xs tracking-widest mt-1 uppercase font-bold">{isAr ? "المنظومة" : "SYSTEM"}</span>
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            {services.map((item, i) => {
              const angle = (i * 60) * (Math.PI / 180);
              const radius = 300;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div key={i} className="absolute top-1/2 left-1/2" style={{ transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))` }}>
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className={`w-56 p-5 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-xl hover:border-cyan-500/50 transition-colors ${isAr ? 'text-right' : 'text-left'}`}
                  >
                    <item.icon className="text-cyan-400 mb-2" size={24} />
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-white/50 leading-tight">{item.desc}</p>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* MOBILE LIST - Shown only on small/medium screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6 w-full">
          {services.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-6 bg-white/5 rounded-2xl border border-white/10 flex items-start gap-4 ${isAr ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className="flex-1">
                <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </div>
              <div className="p-3 bg-cyan-500/10 rounded-lg">
                <item.icon className="text-cyan-400" size={24} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

function StatCard({ icon: Icon, label, value, color, isAr }: any) {
  return (
    <div className="bg-white/5 p-4 md:p-6 rounded-2xl border border-white/10 backdrop-blur flex items-center gap-4">
      <Icon className={`${color} shrink-0`} size={24} />
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold truncate">
          {label}
        </p>
        <p className="text-xl md:text-2xl font-extrabold mt-0.5 tracking-tight uppercase">
          {value}
        </p>
      </div>
    </div>
  );
}