'use client';

import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { type ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);
    const [lang, setLang] = useState('en');

    useEffect(() => {
        // إدارة تهيئة الجزيئات
        const setupParticles = async () => {
            try {
                await initParticlesEngine(async (engine) => {
                    await loadFull(engine);
                });
                setInit(true);
            } catch (error) { console.error(error); }
        };
        setupParticles();

        // إدارة تغيير اللغة
        const storedLang = localStorage.getItem('language') || 'en';
        setLang(storedLang);
        const handleStorageChange = () => {
            setLang(localStorage.getItem('language') || 'en');
        };
        const interval = setInterval(handleStorageChange, 500);
        return () => clearInterval(interval);
    }, []);

    const isAr = lang === 'ar';

    const particlesOptions: ISourceOptions = {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 120, // تقليل الـ FPS قليلاً لتحسين الأداء على المتصفحات
        particles: {
            color: { value: isAr ? "#00E6CC" : "#007C7C" }, // تغيير طفيف في الدرجة اللونية للعربية لتمييزها
            links: { 
                color: isAr ? "#00E6CC" : "#007AFF", 
                distance: 150, 
                enable: true, 
                opacity: 0.15, 
                width: 1 
            },
            move: { 
                enable: true, 
                speed: 0.6, 
                // جعل الجزيئات تميل للحركة نحو اليمين في العربية ونحو اليسار في الإنجليزية
                direction: isAr ? "right" : "left", 
                random: true, 
                straight: false,
                outModes: { default: "out" } 
            },
            number: { 
                density: { enable: true }, 
                value: isAr ? 85 : 70 // زيادة الكثافة قليلاً في العربية لتعطي شعوراً بالوفرة
            },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
            opacity: { value: { min: 0.1, max: 0.4 } },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab", // جذب الجزيئات عند مرور الماوس يعطي شعوراً بالتفاعل
                },
            },
        },
        retina_detect: true,
    };

  return (
    <div dir={isAr ? "rtl" : "ltr"}>
          {/* Background Particles */}
          {init && (
                <div className="fixed inset-0 z-[1] pointer-events-none">
                    <Particles 
                        id="tsparticles" 
                        options={particlesOptions} 
                        className="h-full w-full" 
                    />
                </div>
            )}
    </div>
  )
}

export default ParticlesBackground;