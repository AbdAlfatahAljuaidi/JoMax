'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PartnerMarquee = () => {
  const partners = [
    { id: 1, logoUrl: '/images/Picture31.jpg' },
    { id: 2, logoUrl: '/images/Picture30.png' },
    { id: 3, logoUrl: '/images/Picture29.png' },
    { id: 4, logoUrl: '/images/Picture28.png' },
    { id: 5, logoUrl: '/images/Picture27.png' },
    { id: 6, logoUrl: '/images/Picture26.png' },
  ];
 
  return (
    // الخلفية الآن black متوافقة مع الـ Hero والـ Dashboard
    <section className="w-full py-12   bg-gradient-to-b from-black border-b border-white/20  to-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h4 className="text-[10px] font-black text-white/30 uppercase tracking-[0.3em] text-center">
          Trusted Global Alliances
        </h4>
      </div>

      <div className="relative flex w-full">
        {/* Gradient Mask متوافق مع الخلفية السوداء */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-24 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-48 h-16 flex items-center justify-center  transition-all duration-700"
            >
              <img 
                src={partner.logoUrl} 
                alt="Partner Logo" 
                className="max-h-full w-auto object-contain  invert" 
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerMarquee;