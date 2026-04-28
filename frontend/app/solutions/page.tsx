"use client";

import React from "react";
import {
  Target,
  Eye,
  Lightbulb,
  Award,
  Smile,
  LifeBuoy,
  CheckCircle,
} from "lucide-react";
import { motion ,Variants} from "framer-motion";

import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";

const AboutPage = () => {
  // تعريف الأنيميشن داخل المكون
  const fadeUp: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };
  
  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="bg-[#fcfdfe]">
      <NavBar />

      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green italic">Transform</span> Businesses.
            </h2>
            <p className="text-slate-600 text-lg font-medium leading-relaxed">
              Founded in 2011, JOMAX has spent over a decade engineering systems that scale and securing infrastructure that matters.
            </p>
          </motion.div>

          {/* Mission & Vision (مع صور مدمجة) */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
            {[
              { title: "Our Mission", desc: "Providing innovative, efficient cloud software solutions for modern enterprises.", icon: Target, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800" },
              { title: "Our Vision", desc: "To become the leading regional provider of high-performance software architectures.", icon: Eye, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800" },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeUp} className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-slate-900/80 p-10 flex flex-col justify-end">
                  <item.icon className="text-brand-green mb-3" size={28} />
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Grid */}
          <div className="mb-24">
           
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mb-6">
              Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-green italic"> Our Core </span> Values.
            </h2>
            {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-18">
      {[
        { title: "Innovation", icon: Lightbulb },
        { title: "Quality", icon: Award },
        { title: "Transparency", icon: Eye },
        { title: "Customer Focus", icon: Smile },
        { title: "Commitment", icon: CheckCircle },
        { title: "24/7 Support", icon: LifeBuoy },
      ].map((val,i)=>(

      <motion.div
        key={i}
        initial={{ opacity:0, y:50 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:.5, delay:i*0.1 }}
        viewport={{ once:true }}
        whileHover={{
          y:-8,
          scale:1.02
        }}
        className="bg-white border border-slate-200 p-7 rounded-3xl
        min-h-[160px] flex items-start gap-4
        hover:shadow-xl hover:border-brand-green transition-all"
      >
        <motion.div
          whileHover={{ rotate:8 }}
          className="p-4 bg-slate-50 text-brand-green rounded-2xl"
        >
          <val.icon size={24}/>
        </motion.div>

        <div>
          <h4 className="font-bold text-lg text-slate-900">
            {val.title}
          </h4>

          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Excellence in execution.
          </p>
        </div>
      </motion.div>

      ))}
    </div>
          </div>
        </div>
      </section>

    {/* Process Section - مع تعديل دمج الصورة والأنيميشن */}
<section className="relative py-32 px-6 bg-slate-950 overflow-hidden">
  {/* صورة الخلفية كطبقة أساسية */}
  <img 
    src="https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2800" 
    alt="Process Background" 
    className="absolute inset-0 w-full h-full object-cover opacity-80" 
  />
  
  {/* طبقة التعتيم (Gradient Overlay) لدمج الصورة مع الخلفية الداكنة بسلاسة */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-20">
      <h4 className="text-brand-green font-black tracking-[0.3em] uppercase text-xs mb-4">Our Workflow</h4>
      <h2 className="text-5xl font-black text-white">The <span className="italic text-brand-green">Process</span></h2>
    </div>

    <motion.div 
      variants={stagger} 
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true }} 
      className="grid grid-cols-1 md:grid-cols-5 gap-4"
    >
      {[
        { step: "01", title: "Discovery", desc: "Aligning objectives." },
        { step: "02", title: "Diagnosis", desc: "Analyzing gaps." },
        { step: "03", title: "Blueprint", desc: "Architecting scale." },
        { step: "04", title: "Execute", desc: "Agile delivery." },
        { step: "05", title: "Evolve", desc: "Continuous growth." },
      ].map((item, i) => (
        <motion.div 
          key={i} 
          variants={fadeUp}
          whileHover={{ y: -10 }}
          className="group relative p-8 rounded-[2rem] border border-white/5 bg-white/5 hover:bg-white/10 backdrop-blur-md transition-all duration-300"
        >
          {/* رقم الخطوة بتصميم جذاب */}
          <div className="text-4xl font-black text-white/10 group-hover:text-brand-green/50 transition-colors mb-6">
            {item.step}
          </div>
          
          <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
          <p className="text-slate-400 text-xs font-medium leading-relaxed">{item.desc}</p>
          
          {/* خط أسفل الكرت يظهر عند الـ Hover */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-green opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-[2rem]" />
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
};

export default AboutPage;