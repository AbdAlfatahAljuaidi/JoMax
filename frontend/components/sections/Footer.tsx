'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="
    relative text-white pt-12 pb-8 overflow-hidden
  bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)]
    ">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-12">

          {/* BRAND CORE */}
          <div className="lg:col-span-4 space-y-8">

            <div className="p-5 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl w-fit">
              <Image
                src="/images/jomax.png"
                alt="Jomax"
                width={160}
                height={40}
              />
            </div>

            <p className="text-white/50 text-lg leading-relaxed max-w-sm">
              Building intelligent infrastructure systems that power modern enterprises across the region.
            </p>

            {/* SOCIAL SIGNALS */}
            <div className="flex gap-3">
              {['FB', 'LN', 'X', 'IG'].map((s) => (
                <div
                  key={s}
                  className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-white/40 hover:text-cyan-300 hover:border-cyan-400/40 transition"
                >
                  {s}
                </div>
              ))}
            </div>

          </div>

          {/* NAV LINKS */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-12">

            <div>
              <h4 className="text-xs tracking-[0.4em] text-cyan-400 mb-6">SOLUTIONS</h4>

              <ul className="space-y-4 text-white/60">
                {["Infrastructure", "Cyber Security", "Cloud Systems", "Enterprise ERP"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-cyan-300 transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs tracking-[0.4em] text-brand-green mb-6">COMPANY</h4>

              <ul className="space-y-4 text-white/60">
                {["About", "Projects", "Careers", "Partners"].map((item) => (
                  <li key={item}>
                    <Link href="#" className="hover:text-emerald-300 transition">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="lg:col-span-3">
  <div className="group relative p-8 border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent overflow-hidden">
    
    {/* مؤشر النبض (Pulse Indicator) */}
    <div className="absolute top-6 right-6">
      <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
      </div>
    </div>

    <h4 className="text-[10px] tracking-[0.3em] text-white/30 mb-8 font-mono">
      SYSTEM_STATUS: <span className="text-cyan-400">ONLINE</span>
    </h4>

    <div className="space-y-6">
      {/* Location */}
      <div className="relative pl-6 border-l border-white/10 group-hover:border-cyan-500 transition-colors duration-500">
        <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">Coordinates</p> 
        <p className="text-xs text-white ">Amman, Jordan</p>
      </div>

      {/* Email */}
      <div className="relative pl-6 border-l border-white/10 group-hover:border-emerald-500 transition-colors duration-500">
        <p className="text-[9px] text-white/30 uppercase tracking-widest mb-1">Direct_Channel</p>
        <a href="mailto:info@jomaxsoft.com" className="font-mono text-sm tracking-tight hover:text-emerald-400 transition-colors">
          info@jomaxsoft.com
        </a>
      </div>
    </div>

    {/* إطار جانبي يضيء عند الهوفر */}
    <div className="absolute left-0 bottom-0 w-[2px] h-0 bg-cyan-500 transition-all duration-700 group-hover:h-full" />
  </div>
</div>

        </div>

        {/* BOTTOM SYSTEM BAR */}
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <div className="text-xs text-white/40 tracking-[0.3em] uppercase">
            © {currentYear} JOMAX SYSTEMS
          </div>

          <div className="text-xs text-cyan-400 tracking-[0.3em] uppercase">
            ENGINEERED FOR SCALE
          </div>

          <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:border-cyan-400/40 hover:text-cyan-300 transition">
            <ArrowUp size={18} />
          </button>

        </div>

      </div>
    </footer>
  );
}