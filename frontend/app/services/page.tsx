'use client';


import React from 'react'
import { Check, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { motion } from "framer-motion";
import Footer from '@/components/sections/Footer';
import NavBar from '@/components/sections/NavBar';

const page = () => {

  const services = [
    {
      title: "Network Infrastructure",
      tagline: "Reliable, High-Performance Connectivity",
      description: "We design and build network experiences that are fast, secure, and built to scale for enterprise-level operations.",
      icon: Globe,
      iconBg: "bg-brand-green",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
      features: ["Enterprise Routing & Switching", "Wireless Solutions (Wi-Fi 6)", "SD-WAN Implementation", "Fiber Optic & Structured Cabling", "Performance Optimization", "Network Security Hardening"]
    },
    {
      title: "Cyber Security",
      tagline: "Scalable Infrastructure, Zero Compromise",
      description: "Protecting your digital assets with advanced threat detection, penetration testing, and 24/7 security monitoring.",
      icon: ShieldCheck,
      iconBg: "bg-slate-900",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      features: ["Endpoint Protection", "Next-Gen Firewalls", "Vulnerability Assessment", "Security Audit & Compliance", "Identity Management", "Threat Intel & Response"]
    }
  ];

  const fadeUp = { hidden: { opacity: 0, y: 60 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const stagger = { show: { transition: { staggerChildren: 0.15 } } };

  return (
    <div>
      <NavBar />

      <section className="relative py-28  px-6 bg-[#fcfdfe] overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-main/5 rounded-full blur-[140px]" />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-3xl mb-32 space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                Business / Services
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
              What We <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-green italic font-black">
                Deliver.
              </span>
            </h1>

            <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
              Six core service lines. One unified team. End-to-end technology services engineered to
              <span className="text-slate-900 font-bold"> modernize your operations.</span>
            </p>
          </motion.div>

          {/* Services */}
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-12">
            {services.map((service, idx) => (
              <motion.div key={idx} variants={fadeUp} className="group relative bg-white rounded-[3.5rem] border border-slate-100 p-8 md:p-12 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
                
                {/* خلفية الصورة التفاعلية */}
                <div className="absolute inset-0 z-0">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover opacity-100  transition-all duration-1000 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-4 space-y-6">
                    <div className={`w-16 h-16 rounded-[1.5rem] ${service.iconBg} flex items-center justify-center text-white shadow-lg`}>
                      <service.icon size={32} strokeWidth={1.5} />
                    </div>
                    <div>
                      <span className="text-[10px] font-black text-brand-green uppercase tracking-widest">{service.tagline}</span>
                      <h3 className="text-4xl font-black text-slate-900 mt-2">{service.title}</h3>
                      <p className="text-slate-500 font-medium mt-4 text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-4 p-5 bg-white/50 backdrop-blur-sm rounded-[1.5rem] border border-slate-100">
                        <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-bold text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      <Footer />
    </div>
  )
}

export default page;