'use client';

import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { type ISourceOptions } from "@tsparticles/engine";

const ParticlesBackground = () => {

    const [init, setInit] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

  

    useEffect(() => {
        const setupParticles = async () => {
            try {
                await initParticlesEngine(async (engine) => {
                    await loadFull(engine);
                });
                setInit(true);
            } catch (error) { console.error(error); }
        };
        setupParticles();
    }, []);

    const particlesOptions: ISourceOptions = {
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        fpsLimit: 220,
        particles: {
            color: { value: "#007C7C" },
            links: { color: "#007AFF", distance: 150, enable: true, opacity: 0.15, width: 1 },
            move: { enable: true, speed: 0.8, direction: "none", random: true, outModes: { default: "out" } },
            number: { density: { enable: true }, value: 70 },
            shape: { type: "circle" },
            size: { value: { min: 2, max: 4 } },
            opacity: { value: { min: 0.1, max: 0.4 } },
        },
    };



  return (
    <div>
          {/* Background Particles */}
          {init && (
                <div className="fixed inset-0 z-50 pointer-events-none">
                    <Particles id="tsparticles" options={particlesOptions} className="h-full w-full" />
                </div>
            )}
    </div>
  )
}

export default ParticlesBackground