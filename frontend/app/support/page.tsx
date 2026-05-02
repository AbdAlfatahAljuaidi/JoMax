"use client";

import React from 'react';
import { Mail, MessageSquare, Phone, BookOpen, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';

const SupportPage = () => {
  const supportCategories = [
    { title: "Technical Issue", desc: "Access manuals and setup guides.", icon: BookOpen },
    { title: "Live Chat", desc: "Connect with our engineers instantly.", icon: MessageSquare },
    { title: "Report an Issue", desc: "Open a priority support ticket.", icon: Mail },
    { title: "Emergency Support", desc: "Immediate help for critical failures.", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-brand-green/30 selection:text-white uppercase tracking-tighter font-sans">
      <NavBar />

      <main className="pt-44 pb-24 px-6 relative">
        {/* اضاءة خلفية خفيفة */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-main/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* --- قسم العنوان مع "الضو" المحدث --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-24 text-center space-y-8"
          >
            {/* Status Badge - الضو اللي كان ناقص */}
            <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-xl mx-auto shadow-[0_0_20px_rgba(0,0,0,0.3)]">
              <span className="relative flex h-3 w-3">
                {/* تأثير النبض الخارجي - زدت القوة والسرعة */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75 duration-700"></span>
                {/* النقطة المركزية مع توهج نيون (Neon Glow) */}
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-green shadow-[0_0_12px_#22c55e,0_0_20px_#22c55e]"></span>
              </span>
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-brand-green drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]">
                Engineers Online
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]">
              Jomax <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main via-brand-green to-brand-main italic">
                Support Center.
              </span>
            </h1>
            
            <p className="text-slate-400 text-xl font-medium max-w-xl mx-auto normal-case leading-relaxed">
              Our engineering team is dedicated to your uptime. Choose your preferred support channel below.
            </p>
          </motion.div>

          {/* --- كروت الدعم --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {supportCategories.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-slate-800/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-slate-700/50
                hover:border-brand-green/50 hover:bg-slate-800/60 transition-all duration-500 overflow-hidden"
              >
                <div className="w-16 h-16 bg-slate-700/50 rounded-2xl flex items-center justify-center mb-8
                group-hover:bg-brand-green group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="text-brand-green group-hover:text-white transition-colors" size={28} />
                </div>
                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-brand-green transition-colors uppercase italic">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed normal-case">
                  {item.desc}
                </p>
                <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-1 bg-brand-green transition-all duration-700" />
              </motion.div>
            ))}
          </div>

          {/* --- قسم الفورم --- */}
          <motion.section 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800/30 rounded-[3.5rem] border border-slate-700/50 p-12 md:p-20 relative overflow-hidden"
          >
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8 text-left">
                <h2 className="text-5xl font-black tracking-tighter uppercase italic text-brand-green">Direct Request.</h2>
                <p className="text-slate-400 text-lg leading-relaxed normal-case">
                  Fill in the details and our support desk will respond within <span className="text-white underline decoration-brand-green underline-offset-4">2 hours</span>.
                </p>
                <div className="flex items-center gap-4 text-brand-green font-black text-xs tracking-widest bg-brand-green/10 w-fit px-6 py-3 rounded-full border border-brand-green/20">
                  <Zap size={18} className="animate-pulse" />
                  <span>AVG RESPONSE: 45 MINS</span>
                </div>
              </div>

              <form className="bg-slate-900/80 p-10 rounded-[2.5rem] border border-white/5 space-y-8 backdrop-blur-xl shadow-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 focus:border-brand-green outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder="Full Name"
                  />
                  <input
                    type="email"
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 focus:border-brand-green outline-none transition-all text-white placeholder:text-slate-600"
                    placeholder="Email Address"
                  />
                </div>
                <select className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 outline-none text-slate-400 focus:border-brand-green appearance-none cursor-pointer">
                  <option>Infrastructure Issue</option>
                  <option>Security Inquiry</option>
                  <option>Cloud Deployment</option>
                </select>
                <textarea
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 outline-none h-32 focus:border-brand-green transition-all text-white placeholder:text-slate-600 shadow-inner"
                  placeholder="Describe the technical situation..."
                />
                <button
                  type="button"
                  className="w-full bg-brand-green py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] text-slate-900 hover:bg-white hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-[0_10px_40px_rgba(34,197,94,0.3)]"
                >
                  Submit Support Ticket
                </button>
              </form>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;