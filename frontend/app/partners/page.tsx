"use client";

import React, { useState, useEffect } from "react";
import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PartnersPage = () => {
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

  const partners = [
    { id: 1, logoUrl: "/images/Sol.png" },
    { id: 2, logoUrl: "/images/Star.png" },
    { id: 3, logoUrl: "/images/BC.png" },
    { id: 4, logoUrl: "/images/NGN.png" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.92 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div 
      className="bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_60%)] min-h-screen font-sans"
      dir={isAr ? "rtl" : "ltr"}
    >
      <NavBar />

      <main className="pt-32 md:pt-40 pb-28 md:pb-36 px-6 md:px-10">

        {/* --- HEADER --- */}
        <section className="max-w-4xl mx-auto text-center mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-brand-green font-bold tracking-[0.35em] uppercase text-xs">
              {isAr ? "تحالف عالمي" : "Global Alliance"}
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05]">
              {isAr ? "شركاء في " : "Partners in "}
              <span className="text-brand-main italic">{isAr ? "الابتكار" : "Innovation"}</span>
            </h1>

            <p className="text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              {isAr 
                ? "نتواصل مع قادة الصناعة لتجاوز حدود الممكن وبناء مستقبل تقني متطور."
                : "Connecting with industry leaders to push the boundaries of what is possible."}
            </p>
          </motion.div>
        </section>

        {/* --- GRID --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 md:gap-6 max-w-6xl mx-auto"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group aspect-square bg-white/95 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-6 relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-main/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <img
                src={partner.logoUrl}
                alt="Partner Logo"
                className="max-w-[65%] max-h-[65%] object-contain grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* --- CTA --- */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-28 md:mt-36 max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-white/10 rounded-[2.5rem] p-10 md:p-16 overflow-hidden">

            <div className="absolute -top-20 -right-20 w-80 h-80 bg-brand-green/20 rounded-full blur-[120px]" />

            <div className={`relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 ${isAr ? 'text-center md:text-right' : 'text-center md:text-left'}`}>

              <div className="space-y-4 max-w-md">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                  {isAr ? "هل أنت مستعد للتعاون؟" : "Ready to collaborate?"}
                </h2>

                <p className="text-slate-400 text-sm md:text-base">
                  {isAr 
                    ? "انضم إلى منظومتنا المتنامية لنبني معاً حلولاً برمجية تترك أثراً حقيقياً."
                    : "Join our growing ecosystem and build impactful solutions together."}
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex items-center gap-4 bg-white text-slate-900 px-7 py-3 rounded-full font-black uppercase text-xs md:text-sm hover:bg-brand-green hover:text-white transition-all duration-300"
              >
                {isAr ? "ابدأ الشراكة" : "Start Partnership"}

                <div className={`bg-slate-100 p-2 rounded-full group-hover:bg-white/20 transition-all ${isAr ? 'rotate-180' : ''}`}>
                  <ArrowUpRight size={18} />
                </div>
              </Link>

            </div>
          </div>
        </motion.section>

      </main>

      <Footer />
    </div>
  );
};

export default PartnersPage;