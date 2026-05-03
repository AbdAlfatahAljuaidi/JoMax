'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Cloud, ShieldCheck, Zap, Database, Server, Activity, Cpu, Gauge, Radio } from 'lucide-react';

const services = [
  { title: 'Government Integration', icon: Globe, desc: 'Tax systems & e-invoicing' },
  { title: 'Cloud ERP', icon: Cloud, desc: 'Scalable enterprise ecosystems' },
  { title: '24/7 Support', icon: ShieldCheck, desc: 'Monitoring & stability' },
  { title: 'Data Analytics', icon: Database, desc: 'Real-time business insights' },
  { title: 'Global Server', icon: Server, desc: 'High availability clusters' },
  { title: 'Fast Execution', icon: Zap, desc: 'Low latency transactions' }
];

export default function ServicesOrbit() {
  return (
    <section className="relative py-40 bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white overflow-hidden">
      {/* Background Atmosphere - تم تكبير التوهج ليتناسب مع الحجم الجديد */}
      <div className="absolute inset-0 " />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full " />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
           {/* Section Heading */}
           <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .8 }}
              className="text-center mb-20"
            >
              <p className="text-brand-green tracking-[0.35em] text-sm mb-4 uppercase">
              Service Constellation
              </p>
    
              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Enterprise
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-brand-green">
                Systems
                </span>
              </h2>
    
              <p className="mt-6 text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
              A unified ecosystem where every service operates in a living orbital system.
              </p>
            </motion.div>

        {/* Stats Row - تم تكبير حجمها قليلاً */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24 w-full ">
          <StatCard icon={Activity} label="System Load" value="75%" color="text-cyan-400" />
          <StatCard icon={Cpu} label="Nodes Active" value="6/6" color="text-emerald-400" />
          <StatCard icon={Gauge} label="Sync Rate" value="24ms" color="text-purple-400" />
          <StatCard icon={Radio} label="Uptime" value="99.9%" color="text-amber-400" />
        </div>

        {/* ORBIT SYSTEM - الأحجام الضخمة الجديدة (900px) */}
       {/* Orbit System */}
<div className="relative w-[700px] h-[700px] flex items-center justify-center shrink-0">

{/* Orbit Rings */}
<div className="absolute w-[400px] h-[400px] rounded-full border border-white/5" />
<div className="absolute w-[650px] h-[650px] rounded-full border border-cyan-500/10" />

{/* Core */}
<div className="w-50 h-50 rounded-full bg-slate-900 border border-cyan-500/30 flex flex-col items-center justify-center shadow-[0_0_120px_rgba(6,182,212,0.25)] z-10">
  <h3 className="text-5xl font-black tracking-tighter">CORE</h3>
  <span className="text-cyan-500 text-sm tracking-[0.25em] mt-2">
    SYSTEM
  </span>
</div>

<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
  className="absolute inset-0"
>
  {services.map((item,i)=>{
    const Icon = item.icon;
    const angle = (i * 60) * (Math.PI/180);

    // orbit on second circle
    const radius = 325;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return (
      <div
        key={i}
        className="absolute top-1/2 left-1/2"
        style={{
          transform:`translate(calc(${x}px - 50%), calc(${y}px - 50%))`
        }}
      >
        <motion.div
          animate={{ rotate:-360 }}
          transition={{
            duration:70,
            repeat:Infinity,
            ease:"linear"
          }}
          className="w-56 p-5 bg-slate-900/90 backdrop-blur border border-white/10 rounded-2xl hover:border-cyan-500/50 shadow-2xl"
        >
          <Icon className="text-cyan-400 mb-2" size={26}/>
          <h4 className="font-bold text-xl">
            {item.title}
          </h4>
          <p className="text-base text-white/50 mt-1">
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

type StatCardProps = {
  icon: React.ElementType;
  label: string;
  value: string | number;
  color?: string;
};

function StatCard({ icon: Icon, label, value, color }: StatCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur flex items-center gap-4 min-w-[220px]">
      <Icon className={color} size={26} />

      <div>
        <p className="text-xs uppercase tracking-widest text-white/40">
          {label}
        </p>

        <p className="text-2xl font-extrabold mt-1">
          {value}
        </p>
      </div>
    </div>
  );
}