'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TerminalUI() {
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

  const commands = [
    { 
      cmd: 'INIT_SYSTEM_CORE', 
      result: isAr ? 'هيكلية_المؤسسة_جاهزة' : 'ENTERPRISE_ARCHITECTURE_READY' 
    },
    { 
      cmd: 'CONNECT_SERVICES', 
      result: isAr ? 'تم_ربط_الخدمات_المصغرة' : 'MICROSERVICES_LINKED' 
    },
    { 
      cmd: 'SYNC_DATABASES', 
      result: isAr ? 'طبقة_البيانات_مستقرة' : 'DATA_LAYER_STABLE' 
    },
    { 
      cmd: 'DEPLOY_BACKEND', 
      result: isAr ? 'البنية_التحتية_للـAPI_نشطة' : 'API_INFRASTRUCTURE_ACTIVE' 
    },
    { 
      cmd: 'RENDER_FRONTEND', 
      result: isAr ? 'تحسين_مسار_واجهة_المستخدم' : 'UI_PIPELINE_OPTIMIZED' 
    },
    { 
      cmd: 'ENABLE_MONITORING', 
      result: isAr ? 'مراقبة_النظام_اللحظية_تعمل' : 'REALTIME_SYSTEM_OBSERVABILITY' 
    }
  ];

  const content = {
    badge: isAr ? "واجهة التحكم" : "Control Interface",
    title: isAr ? "حيث تتحول الأنظمة إلى" : "Where Systems",
    titleHighlight: isAr ? "ذكاء اصطناعي" : "Become Intelligence",
    desc: isAr 
      ? "هيكلية برمجية لحظية، أتمتة ذكية، وبنية تحتية للمهام الحساسة تعمل بتزامن تام."
      : "Real-time architecture, intelligent automation and mission-critical infrastructure operating in perfect synchronization.",
    terminalName: isAr ? "منصة.النواة_العصبية" : "neural-core.console"
  };

  return (
    <section 
      className="bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] min-h-screen  px-8 md:px-20 font-mono overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="text-brand-green tracking-[0.35em] text-sm mb-4 uppercase">
            {content.badge}
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {content.title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-green">
              {content.titleHighlight}
            </span>
          </h2>

          <p className="mt-6 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            {content.desc}
          </p>
        </motion.div>

        {/* Terminal */}
        <div className="border border-white/10 bg-black rounded-3xl shadow-2xl p-8 md:p-12 backdrop-blur-xl relative">

          {/* glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/10 blur-[120px]" />

          {/* Terminal Top Bar */}
          <div className={`flex items-center gap-3 mb-10 relative z-10 ${isAr ? 'flex-row-reverse' : ''}`}>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>

            <span className={`${isAr ? 'mr-4' : 'ml-4'} text-white/30 text-sm`}>
              {content.terminalName}
            </span>
          </div>

          {/* Commands */}
          <div className="space-y-8 relative z-10">
            {commands.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isAr ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.2,
                  duration: .7
                }}
                className="group"
              >
                <div className="flex gap-4 items-center">
                  <span className="text-[#00E6CC] text-xl">
                    {isAr ? ' < ' : ' > '}
                  </span>

                  <span className="text-white font-bold tracking-wide group-hover:text-cyan-300 transition">
                    {item.cmd}
                  </span>
                </div>

                <div className={`${isAr ? 'mr-8' : 'ml-8'} mt-2 text-brand-green text-sm italic tracking-wide`}>
                  {isAr ? `النتيجة: ${item.result} //` : `// RESULT: ${item.result}`}
                </div>
              </motion.div>
            ))}

            {/* Cursor */}
            <div className="mt-10 flex gap-3 items-center">
              <span className="text-brand-green text-xl">
                {isAr ? ' < ' : ' > '}
              </span>

              <motion.div
                animate={{ opacity: [0,1,0] }}
                transition={{
                  repeat: Infinity,
                  duration: .8
                }}
                className="w-2 h-6 bg-white"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}