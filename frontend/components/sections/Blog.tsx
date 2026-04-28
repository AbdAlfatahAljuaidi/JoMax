'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const posts = [
  { id: '01', title: 'Future Systems Thinking', category: 'Research', desc: 'Deep dive into systemic architecture and logical frameworks.' },
  { id: '02', title: 'Architecting Cloud Scale', category: 'Cloud', desc: 'Mastering distributed systems for high-traffic applications.' },
  { id: '03', title: 'Intelligence In Motion', category: 'AI', desc: 'Developing real-time inference engines for modern interfaces.' },
  { id: '04', title: 'Security Beyond Boundaries', category: 'Cyber', desc: 'Implementing zero-trust protocols in microservice architectures.' }
];

export default function BlogSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        
        {/* القسم الرئيسي */}
        <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
          
          {/* الجانب الأيسر: قائمة التحكم (أخذت حصة أقل من العرض) */}
          <div className="md:col-span-2 space-y-2">
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-10 italic">Select Insight</h4>
            {posts.map((post, i) => (
              <button
                key={post.id}
                onClick={() => setActive(i)}
                className={`w-full text-left py-6 border-b border-white/5 transition-all duration-300 group flex items-baseline gap-6 ${active === i ? 'text-white' : 'text-zinc-600 hover:text-zinc-300'}`}
              >
                <span className={`font-mono text-lg transition-transform duration-300 ${active === i ? 'translate-x-0' : '-translate-x-2'}`}>
                  {post.id}
                </span>
                <span className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
                  {post.title}
                </span>
              </button>
            ))}
          </div>

          {/* الجانب الأيمن: شاشة العرض (أخذت مساحة أكبر لتكون هي بطل المشهد) */}
          <div className="md:col-span-3 min-h-[450px] bg-zinc-900/30 border border-white/5 p-8 md:p-12 relative overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                    <span className="text-cyan-400 font-mono text-xs tracking-widest uppercase">
                        {posts[active].category}
                    </span>
                    <div className="h-[1px] w-12 bg-cyan-400/30" />
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tighter">
                  {posts[active].title}
                </h2>
                
                <p className="text-zinc-400 text-lg md:text-xl leading-relaxed max-w-md">
                  {posts[active].desc}
                </p>
                
                <motion.button 
                    whileHover={{ x: 10 }}
                    className="text-sm font-semibold border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-colors"
                >
                    READ_FULL_STORY
                </motion.button>
              </motion.div>
            </AnimatePresence>
            
            {/* رقم خلفي مخفي بوضوح منخفض ليعطي عمق */}
            <div className="absolute -bottom-10 -right-6 text-[150px] md:text-[200px] font-black text-white/5 pointer-events-none select-none">
              {posts[active].id}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}