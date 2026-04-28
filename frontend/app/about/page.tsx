"use client";

import React from "react";
import Image from "next/image";
import { Target, Eye } from "lucide-react";
import { motion,Variants } from "framer-motion";


import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

const AboutPage = () => {
  // تعريف الأنيميشن العام
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1] as const,
      },
    },
  };
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };
  
  const floatVariant: Variants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const content = [
    {
      title: "OUR VISION",
      desc: "To be a global leader in digital transformation by delivering innovative solutions that create a better future.",
      icon: Eye
    },
    {
      title: "OUR MISSION",
      desc: "To empower businesses with reliable, scalable and smart technology solutions that drive efficiency and growth.",
      icon: Target
    }
  ];

  return (
    <div className="bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-40 pb-24 px-6 overflow-hidden ">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/5 border border-brand-green/10 text-[10px] font-black text-brand-green uppercase tracking-[0.4em]">
              About Jomax Tech
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              Built to Transform <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green italic">Businesses.</span>
            </h1>
          </motion.div>
        </div>
      </section>

   {/* Vision & Mission Section - متناسق مع الخلفية البيضاء */}
<section className="py-24 px-6 overflow-hidden">
  <div className="max-w-7xl mx-auto bg-black rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
    
    {/* إضافة إضاءة خلفية خفيفة جداً لجعل اللون الأسود يبدو "عميقاً" وليس "مقطوعاً" */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
      
      {/* الجزء الأيسر: النصوص */}
      <div className="space-y-12">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-10 bg-brand-green rounded-full"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">VISION & MISSION</h2>
        </div>

        <div className="space-y-10">
          {content.map((item, index) => (
            <div key={index} className="flex gap-6 items-start group">
              <div className="mt-1">
                <div className="w-16 h-16 rounded-2xl border border-brand-green/20 flex items-center justify-center bg-brand-green/5">
                  <item.icon className="w-8 h-8 text-brand-green" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed max-w-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* الجزء الأيمن: الصورة مع دمج حوافها */}
      <div className="relative w-full h-[500px]">
        {/* تأثير Mask لجعل الصورة تمتزج مع الخلفية السوداء للسيكشن */}
        <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent z-10 md:hidden"></div>
        <Image 
          src="/images/about.png" 
          alt="About Us" 
          fill 
          className="object-contain" 
          priority
        />
      </div>

    </div>
  </div>
</section>

      {/* Engineering Blueprint Section */}
      <section className="py-32 px-6 bg-white text-slate-900 overflow-hidden">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="flex justify-between items-end border-b border-slate-200 pb-16 mb-20">
            <div>
              <h4 className="text-brand-green font-black uppercase tracking-[0.4em] text-[10px] mb-4">Engineering Manifesto</h4>
              <h2 className="text-7xl font-black tracking-tighter">OPERATIONAL <br/><span className="text-brand-green">BLUEPRINT</span></h2>
            </div>
            <div className="text-right">
              <span className="text-brand-green font-mono text-sm block">0x04_ENGINEERING_CORE</span>
              <span className="text-slate-500 text-sm">Status: <span className="text-brand-green font-bold animate-pulse">READY</span></span>
            </div>
          </motion.div>

          <div className="grid grid-cols-12 gap-16">
            <motion.div variants={containerVariants} className="col-span-12 lg:col-span-5 space-y-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <h3 className="text-2xl font-black tracking-tight border-l-4 border-brand-green pl-4">Infrastructure & Compute</h3>
                <p className="text-slate-600 font-medium leading-relaxed">We architect distributed environments that maintain absolute parity between staging and production.</p>
              </motion.div>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Latency", val: "40ms" }, { title: "Uptime", val: "99.9%" },
                  { title: "Throughput", val: "10K+" }, { title: "Storage", val: "ACID" },
                ].map((stat, i) => (
                  <motion.div key={i} variants={itemVariants} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                    <span className="block text-brand-green font-black text-3xl">{stat.val}</span>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="col-span-12 lg:col-span-7 h-[600px] bg-slate-50 border border-slate-100 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
              <div className="text-slate-400 font-mono text-[10px] z-10">
                [SYSTEM_CORE]  INITIALIZING INTEGRATION LAYERS... <br/>
                [0x01]  MERN_CLUSTER_BOUND <br/>
                [0x02]  KUBERNETES_ORCHESTRATION_SYNC
              </div>
              
              {/* التعديل: دمج الأنيميشن المستمر مع تأثير الطفو */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                    animate={{ rotate: 360 }} 
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                    className="w-64 h-64 border-2 border-slate-200 rounded-full" 
                />
                <motion.div 
                    variants={floatVariant}
                    animate="animate"
                    className="absolute w-24 h-24 bg-brand-green rounded-xl rotate-45 flex items-center justify-center shadow-2xl shadow-brand-green/50"
                >
                  <span className="text-white font-black -rotate-45">JOMAX</span>
                </motion.div>
              </div>
              
              <div className="text-right z-10"><p className="font-black text-slate-900">SYSTEM CORE ARCHITECTURE</p></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;