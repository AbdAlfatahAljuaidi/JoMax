'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BlogSection() {

  const articles = [
    {
      title: 'The Future of Cloud Native Architectures in 2025',
      excerpt: 'How microservices and serverless are reshaping enterprise systems.',
      date: 'Oct 12, 2024',
      category: 'Cloud'
    },
    {
      title: 'Implementing Zero-Trust Security Models',
      excerpt: 'A modern approach to securing distributed infrastructures.',
      date: 'Oct 05, 2024',
      category: 'Security'
    },
    {
      title: 'AI Integration for Legacy Systems',
      excerpt: 'Transforming legacy platforms into intelligent systems.',
      date: 'Sep 28, 2024',
      category: 'AI & ML'
    }
  ];

  return (
    <section className="relative py-32 px-6 bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white overflow-hidden">

      {/* glow background */}
      <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[200px]" />

      <div className="max-w-5xl mx-auto relative z-10">

        {/* heading */}
        <div className="text-center mb-28">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm mb-6">
            Intelligence Feed
          </p>

          <h2 className="text-6xl md:text-8xl font-black leading-[0.9]">
            Knowledge
            <span className="block bg-gradient-to-r from-cyan-400 to-brand-greentext-transparent bg-clip-text">
              Stream
            </span>
          </h2>

          <p className="text-white/50 max-w-2xl mx-auto mt-6">
            A continuous flow of insights shaping modern enterprise systems.
          </p>
        </div>

        {/* timeline */}
        <div className="relative">

          {/* vertical glow line */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-400/40 via-emerald-400/30 to-transparent" />

          {articles.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-20 py-12"
            >

              {/* node dot */}
              <div className="absolute left-[18px] top-14 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(0,255,220,0.7)]" />

              {/* content (NOT card) */}
              <div className="space-y-4">

                <div className="flex items-center gap-4 text-xs text-white/40 tracking-[0.3em] uppercase">
                  <span className="text-cyan-400">{item.category}</span>
                  <span>•</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black leading-tight hover:text-cyan-300 transition">
                  {item.title}
                </h3>

                <p className="text-white/50 max-w-2xl leading-relaxed">
                  {item.excerpt}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}