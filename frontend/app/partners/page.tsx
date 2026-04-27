"use client";

import Footer from "@/components/sections/Footer";
import NavBar from "@/components/sections/NavBar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const PartnersPage = () => {
  const partners = [
    { id: 1, logoUrl: "/images/Picture18.png" },
    { id: 2, logoUrl: "/images/Picture19.png" },
    { id: 3, logoUrl: "/images/Picture20.png" },
    { id: 4, logoUrl: "/images/Picture21.png" },
    { id: 5, logoUrl: "/images/Picture22.png" },
    { id: 6, logoUrl: "/images/Picture23.png" },
    { id: 7, logoUrl: "/images/Picture24.png" },
    { id: 8, logoUrl: "/images/Picture25.jpg" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      <NavBar />

      <main className="pt-40 pb-32 px-6">
        {/* Header Section */}
        <section className="max-w-5xl mx-auto text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <span className="text-brand-green font-bold tracking-[0.3em] uppercase text-xs">Global Alliance</span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Partners in <span className="text-brand-main italic">Innovation</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Connecting with industry leaders to push the boundaries of what is possible.
            </p>
          </motion.div>
        </section>

        {/* Partners Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group aspect-square bg-white border border-slate-100 rounded-3xl flex items-center justify-center p-8 relative overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* تدرج لوني يظهر عند التمرير */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-main/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <img
                src={partner.logoUrl}
                alt="Partner Logo"
                className="max-w-[70%] max-h-[70%] object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-32 max-w-6xl mx-auto"
        >
          <div className="relative bg-slate-900 rounded-[3rem] p-12 md:p-20 overflow-hidden">
            {/* زخرفة خلفية */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/20 rounded-full blur-[120px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  Ready to collaborate?
                </h2>
                <p className="text-slate-400">Join our growing ecosystem today.</p>
              </div>

              <Link
                href="/contact"
                className="group flex items-center gap-4 bg-white text-slate-900 px-8 py-4 rounded-full font-black uppercase text-sm hover:bg-brand-green hover:text-white transition-colors"
              >
                Start Partnership
                <div className="bg-slate-100 p-2 rounded-full group-hover:bg-white/20 transition-colors">
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