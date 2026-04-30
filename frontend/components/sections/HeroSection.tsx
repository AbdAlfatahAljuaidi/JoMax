'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Users, Rocket, ShieldCheck, Headphones, ArrowRight, Play } from 'lucide-react';

const StatItem = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-cyan-400"><Icon size={28} /></div>
    <div>
      <div className="text-xl font-bold text-white">{value}</div>
      <div className="text-xs text-gray-400 uppercase tracking-wider">{label}</div>
    </div>
  </div>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#02050e] text-white overflow-hidden font-sans">
      {/* الخلفية */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.png" 
          alt="Background" 
          fill 
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#02050e]" />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 container mx-auto px-6 pt-24 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* الجانب النصي */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-cyan-400 font-semibold tracking-widest uppercase text-sm mb-4">
              ✨ Innovate. Build. Grow.
            </div>
            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-6">
              Powering Business Growth Through <br />
              <span className="text-cyan-400">Smart ERP & Software</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-lg mb-8 leading-relaxed">
              Jomaxsoft delivers powerful ERP, e-invoicing, cloud solutions and custom software that help businesses automate operations, increase efficiency and achieve sustainable growth.
            </p>
            
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition">
                Explore Solutions <ArrowRight size={18} />
              </button>
              <button className="flex items-center gap-2 border border-gray-600 hover:bg-white/10 px-8 py-4 rounded-xl font-bold transition">
                Book a Demo <Play size={16} />
              </button>
            </div>
          </motion.div>

          {/* الجانب المرئي (المكان المخصص للـ 3D أو الصورة) */}
          <div className="hidden lg:block h-[500px] w-full bg-gradient-to-tr from-blue-900/20 to-cyan-900/20 rounded-3xl border border-white/10 backdrop-blur-sm" />
        </div>

        {/* شريط الإحصائيات (Stats Bar) */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-black/40 border border-white/10 p-8 rounded-3xl backdrop-blur-xl"
        >
          <StatItem icon={Users} label="Happy Clients" value="250+" />
          <StatItem icon={Rocket} label="Projects Delivered" value="1,200+" />
          <StatItem icon={ShieldCheck} label="System Uptime" value="99.9%" />
          <StatItem icon={Headphones} label="Expert Support" value="24/7" />
        </motion.div>
      </div>
    </section>
  );
}