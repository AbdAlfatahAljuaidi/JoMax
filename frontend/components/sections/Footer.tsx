'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Mail, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="
    relative text-white pt-32 pb-14 overflow-hidden
  bg-slate-900
bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)]
    ">

      {/* background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/10 blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">

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

          {/* CONTACT NODE (SYSTEM STYLE) */}
          <div className="lg:col-span-3">

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">

              <h4 className="text-xs tracking-[0.4em] text-white/40">
                CONTACT NODE
              </h4>

              {/* location */}
              <div className="flex gap-4">
                <MapPin className="text-cyan-400" />
                <div>
                  <p className="text-white/40 text-xs">LOCATION</p>
                  <p className="font-bold">Amman, Jordan</p>
                </div>
              </div>

              {/* email */}
              <div className="flex gap-4">
                <Mail className="text-brand-green" />
                <div>
                  <p className="text-white/40 text-xs">CHANNEL</p>
                  <a href="mailto:info@jomaxsoft.com" className="font-bold hover:text-cyan-300">
                    info@jomaxsoft.com
                  </a>
                </div>
              </div>

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