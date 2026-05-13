'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import {
    RiReactjsLine,
    RiNodejsLine
} from "react-icons/ri";

import {
    SiTypescript,
    SiDocker,
    SiKubernetes,
    SiMongodb,
    SiGooglecloud,
    SiGraphql
} from "react-icons/si";

const tech = [
    { icon: RiReactjsLine, name: "React" },
    { icon: RiNodejsLine, name: "Node.js" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiMongodb, name: "MongoDB" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" },
    { icon: SiGooglecloud, name: "Cloud" },
    { icon: SiGraphql, name: "GraphQL" }
];

export default function TechStack() {
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

    return (
        <section 
            className="relative py-20 md:py-32 px-4 md:px-6 bg-slate-900 bg-[radial-gradient(circle_at_center,rgba(40,202,225,.12),transparent_55%)] text-white overflow-hidden"
            dir={isAr ? "rtl" : "ltr"}
        >

            {/* Glow Layers - Responsive adjustments */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[300px] md:h-[500px] bg-cyan-500/10 blur-[120px] md:blur-[180px]" />
            <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[200px] md:h-[400px] bg-emerald-500/10 blur-[100px] md:blur-[160px]" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-28"
                >
                    <p className="text-cyan-400 uppercase tracking-[0.2em] md:tracking-[0.4em] text-xs md:text-sm mb-4 md:mb-6 font-bold">
                        {isAr ? "نظام التقنيات المتكامل" : "Technology Ecosystem"}
                    </p>

                    <h2 className="text-5xl md:text-8xl font-black leading-[1.1] md:leading-[0.9]">
                        {isAr ? "أفق" : "Unified"}
                        <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 text-transparent bg-clip-text">
                            {isAr ? "البرمجيات الموحد" : "Stack Horizon"}
                        </span>
                    </h2>

                    <p className="text-white/60 max-w-2xl mx-auto mt-6 md:mt-8 text-base md:text-lg leading-relaxed px-4">
                        {isAr 
                            ? "بنية تحتية حية حيث تعمل كل تقنية كعقدة متصلة داخل نظام تقني متكامل."
                            : "A living infrastructure where every technology acts as a connected system node."}
                    </p>
                </motion.div>


                {/* Horizon System */}
                <div className="relative mt-12 md:mt-32">

                    {/* Main line glow - Hidden on small screens or adapted */}
                    <div className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

                    {/* Animated pulse line - Hidden on mobile */}
                    <motion.div
                        className="hidden md:block absolute left-0 right-0 top-1/2 h-[2px] bg-cyan-400/40"
                        animate={{ opacity: [0.2, 0.6, 0.2] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                    />

                    {/* Tech Nodes Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:justify-between md:items-center gap-y-12 md:gap-y-0">

                        {tech.map((item, i) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    whileHover={{ scale: 1.1 }}
                                    className="relative flex flex-col items-center group"
                                >

                                    {/* node pulse - subtle on mobile */}
                                    <motion.div
                                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.2, 0.5] }}
                                        transition={{ repeat: Infinity, duration: 2.5 }}
                                        className="absolute top-0 w-6 h-6 rounded-full bg-cyan-400 blur-sm"
                                    />

                                    {/* node dot */}
                                    <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(0,255,220,0.6)] z-10" />

                                    {/* icon */}
                                    <div className="mt-4 md:mt-6 text-white/60 group-hover:text-cyan-300 transition duration-300">
                                        <Icon className="text-3xl md:text-5xl" />
                                    </div>

                                    {/* label */}
                                    <div className={`mt-3 md:mt-4 text-[10px] md:text-xs font-bold text-white/40 group-hover:text-white transition ${isAr ? 'tracking-normal' : 'tracking-[0.2em] md:tracking-[0.3em]'}`}>
                                        {item.name}
                                    </div>

                                    {/* small vertical connector - Hidden on mobile grid */}
                                    <div className="hidden md:block absolute top-6 h-10 w-[1px] bg-cyan-400/20" />

                                </motion.div>
                            )
                        })}

                    </div>
                </div>


                {/* Bottom Ambient Text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className={`text-center mt-20 md:mt-28 text-white/40 text-[10px] md:text-sm font-bold px-4 ${isAr ? 'tracking-normal' : 'tracking-[0.2em] md:tracking-[0.4em]'}`}
                >
                    {isAr 
                        ? "هندسة للتوسع • معيارية • موزعة • ذكية"
                        : "ENGINEERED FOR SCALE • MODULAR • DISTRIBUTED • INTELLIGENT"}
                </motion.div>

            </div>
        </section>
    )
}