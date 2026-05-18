'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Target, Rocket, Zap, Eye, Code2, Globe, Shield } from "lucide-react";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export default function AboutSection() {
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

  const coreValues = [
    { 
      title: isAr ? "الابتكار أولاً" : "Innovation First", 
      icon: <Zap size={20}/>, 
      text: isAr ? "لا نكتفي أبداً بالحلول المجربة، بل نبحث دائماً عن 'غير المكتشف'." : "We never settle for 'proven'. We seek the 'undiscovered'." 
    },
    { 
      title: isAr ? "السرعة الفائقة" : "Quantum Speed", 
      icon: <Rocket size={20}/>, 
      text: isAr ? "نشر سريع للأنظمة دون المساس بسلامة الهيكل البرمجي." : "Rapid deployment without compromising architectural integrity." 
    },
    { 
      title: isAr ? "أمن مطلق" : "Extreme Security", 
      icon: <Shield size={20}/>, 
      text: isAr ? "بروتوكولات حماية غير قابلة للاختراق مدمجة في كل سطر برمج . " : "Bulletproof protocols integrated into every line of code." 
    },
    { 
      title: isAr ? "نطاق عالمي" : "Global Scale", 
      icon: <Globe size={20}/>, 
      text: isAr ? "حلول مصممة لتعمل عبر القارات بفعالية فورية." : "Solutions designed to perform across continents instantly." 
    },
    { 
      title: isAr ? "محورنا الإنسان" : "Human Centric", 
      icon: <Users size={20}/>, 
      text: isAr ? "تقنيات بناها البشر، لأجل البشر، وبلمسة إبداعية حية." : "Technology built by humans, for humans, with soul." 
    },
    { 
      title: isAr ? "منطق عميق" : "Deep Logic", 
      icon: <Code2 size={20}/>, 
      text: isAr ? "بنية كود نظيفة، فعالة، ومعقدة في بساطتها." : "Clean, efficient, and sophisticated code architecture." 
    }
  ];

  return (
    <div className="bg-slate-900" dir={isAr ? "rtl" : "ltr"}>
      <NavBar />

      <section className={`relative min-h-screen text-white overflow-hidden py-24 bg-[radial-gradient(circle_at_top_${isAr ? 'left' : 'right'},rgba(34,211,238,0.1),transparent_50%)]`}>
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute top-1/4 ${isAr ? '-right-20' : '-left-20'} w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full`} />
          <div className={`absolute bottom-1/4 ${isAr ? '-left-20' : '-right-20'} w-80 h-80 bg-cyan-500/10 blur-[100px] rounded-full`} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          {/* Hero Section */}
          <div className="mt-20 mb-32">
            <motion.div
              initial={{ opacity: 0, x: isAr ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`max-w-3xl ${isAr ? 'text-right' : 'text-left'}`}
            >
              <h2 className="text-cyan-400 font-mono tracking-widest uppercase text-sm mb-4">
                {isAr ? "// مهندسو الغد" : "// ARCHITECTS OF TOMORROW"}
              </h2>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
                {isAr ? "ما وراء حدود" : "BEYOND THE"} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
                  {isAr ? "البرمجة التقليدية" : "CODE LIMITS"}
                </span>
              </h1>
              <p className={`text-xl text-slate-400 leading-relaxed ${isAr ? 'border-r-2 pr-6' : 'border-l-2 pl-6'} border-cyan-500/30`}>
  {isAr 
    ? "تمكن JoMax Soft المؤسسات في جميع أنحاء الشرق الأوسط من تحقيق التحول الرقمي بوضوح، ومسؤولية، ونتائج ملموسة. نحن نعمل في مجالات التنفيذ، والتغيير، والحلول الرقمية، والبيانات، وإدارة الأداء لضمان تقدم المبادرات بملكية واضحة ومخرجات ملموسة. نهجنا عملي، ومنظم، وموجه نحو التنفيذ قائم على النتائج الفعلية لا النظريات."
    : "JoMax Soft enables organizations across the Middle East to deliver digital transformation with clarity, accountability, and measurable results. We operate across delivery, change, digital solutions, data, and performance management to ensure initiatives progress with clear ownership and tangible outcomes. Our approach is pragmatic, structured, and execution-focused—built on delivery, not theory."}
</p>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-40">
            {[
              {
                icon: <Target className="text-cyan-400" size={40} />,
                title: isAr ? "المهمة" : "The Mission",
                desc: isAr 
  ? "تمكين تنفيذ الحلول البرمجية بنفس الانضباط الذي تخضع له العمليات الأساسية، وذلك من خلال التنفيذ المنظم، والحوكمة الواضحة، والأداء القابل للقياس." 
  : "To enable software solutions to be executed with the same discipline as core operations through structured delivery, clear governance, and measurable performance.",
                color: "from-cyan-500/20"
              },
              {
                icon: <Eye className="text-blue-400" size={40} />,
                title: isAr ? "الرؤية" : "The Vision",
                desc: isAr 
                ? "أن نصبح مصدراً طويل الأجل للحلول الرقمية التنفيذية التي تعتمد عليها المؤسسات لتحسين آلية تقديم وتحقيق التحول." 
                : "To become a long-term source of execution Digital Solutions that organizations rely on to improve how transformation is delivered.",
                color: "from-blue-500/20"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`p-10 rounded-[40px] bg-gradient-to-br ${item.color} to-transparent border border-white/5 relative group overflow-hidden text-start`}
              >
                <div className={`absolute top-0 ${isAr ? 'left-0' : 'right-0'} p-8 opacity-10 group-hover:scale-150 transition-transform duration-700`}>
                  {item.icon}
                </div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Core Values */}
          <div className="mb-40">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-bold italic tracking-tight">{isAr ? "جوهرنا البرمجي" : "OUR CORE DNA"}</h2>
              <div className="w-24 h-1 bg-cyan-500 mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/5 border border-white/5 rounded-3xl overflow-hidden">
              {coreValues.map((value, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.03)" }}
                  className="p-12 bg-slate-900/50 flex flex-col gap-4 text-start"
                >
                  <div className={`text-cyan-400 flex items-center gap-2 font-mono text-sm ${isAr ? 'flex-row-reverse' : ''}`}>
                    {value.icon} {value.title}
                  </div>
                  <p className="text-slate-400 text-sm">{value.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="relative py-20 px-10 rounded-[60px] bg-white/[0.02] border border-white/5 overflow-hidden text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 pointer-events-none" />
            
            <motion.div
               animate={{ rotate: [0, 360] }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className={`absolute -top-24 ${isAr ? '-left-24' : '-right-24'} w-64 h-64 border border-cyan-500/10 rounded-full`}
            />

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                {isAr ? "هل أنت مستعد لبناء المستقبل؟" : "WANT TO BUILD THE FUTURE?"}
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10">
              {isAr 
                ? "انضم إلينا في رحلتنا لإعادة تعريف الممكن في العالم الرقمي. لنصنع شيئاً أسطورياً معاً."
                : "Join us in our journey to redefine what’s possible in the digital realm. Let's create something legendary."}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-cyan-500 text-slate-900 font-bold rounded-full hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all"
            >
              {isAr ? "ابدأ مشروعك الآن" : "INITIATE PROJECT"}
            </motion.button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}