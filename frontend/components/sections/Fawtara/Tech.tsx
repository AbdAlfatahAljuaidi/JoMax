import React from 'react';
import { Send, LayoutDashboard, Terminal, ShieldCheck, Globe, Cpu } from 'lucide-react';
import Image from 'next/image';

const technologies = [
  { name: "ISO 27001", cat: "Security" },
  { name: "256-bit TLS", cat: "Encryption" },
  { name: "SAP Integration", cat: "ERP" },
  { name: "Oracle ERP", cat: "ERP" },
  { name: "Odoo", cat: "ERP" },
  { name: "ZATKA APIs", cat: "Integration" },
  { name: "UBL 2.1 XML", cat: "Standard" },
  { name: "REST API", cat: "Dev" },
  { name: "SHA-256", cat: "Security" },
  { name: "PKI / CSID", cat: "Identity" },
  { name: "Cloud Hosting", cat: "Infra" },
  { name: "QR Code TLV", cat: "ZATKA" }
];

const TechAndCtaSection = () => {
  return (
    <section className="bg-slate-900 pt-32 pb-48 relative overflow-hidden font-sans" dir="ltr">
      
      {/* 1. Tech Stack Matrix */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-40">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 text-brand-green mb-6">
              <Terminal size={18} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Infrastructure</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Built with <br /> 
              <span className="text-slate-600 italic">Advanced Tech.</span>
            </h2>
            <p className="text-slate-500 leading-relaxed">
              We leverage enterprise-grade technologies to ensure every invoice is secure, compliant, and delivered in milliseconds.
            </p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-slate-800/20 border border-slate-800 hover:border-brand-green/40 transition-all duration-300 group"
              >
                <p className="text-[10px] text-slate-600 font-bold uppercase mb-1 group-hover:text-brand-green transition-colors">
                  {tech.cat}
                </p>
                <p className="text-white font-bold group-hover:translate-x-1 transition-transform">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

  {/* 2. Final CTA: The Portal Design */}
<div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
  <div className="relative group overflow-hidden rounded-[3rem] bg-slate-950 border border-slate-800 shadow-2xl shadow-black/50">
    
    {/* --- حاوية الصورة المحسنة --- */}
    <div className="absolute inset-0 z-0 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
      <Image
        src="/images/gf.jpeg" // مسار الصورة الخاص بك
        alt="Operational Flow Map Background" 
        fill
        // object-cover تضمن ملء المساحة،object-center تتوسط الصورة، والأنيميشن يجعلها حيوية
        className=" object-center transition-transform duration-1000 scale-105 group-hover:scale-110 group-hover:rotate-1"
      />
      
      {/* --- طبقة التدرج اللوني لدمج الصورة بنعومة (Vignette Effect) --- */}
      {/* هذا التدرج يجعل أطراف الصورة سوداء تماماً لدمجها مع السيكشن الأسود */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#01040a] via-transparent to-[#01040a] z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#01040a] via-transparent to-[#01040a] z-10" />
    </div>
    
    {/* تأثير التوهج الخلفي الأصلي (تمت زيادة الـ z-index) */}
    <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-green/10 blur-[100px] rounded-full group-hover:bg-brand-green/20 transition-all duration-700 z-10"></div>
    
    {/* المحتوى النصي فوق الصورة (تم التأكد من z-20) */}
    <div className="relative px-8 py-20 md:p-24 flex flex-col items-center text-center z-20">
      <div className="w-20 h-20 bg-brand-green/10 rounded-3xl flex items-center justify-center mb-10 border border-brand-green/20 rotate-3 group-hover:rotate-12 transition-transform duration-500 shadow-xl shadow-black/50backdrop-blur-sm">
        <Globe className="text-brand-green w-10 h-10" />
      </div>

      <h2 className="text-4xl md:text-6xl font-black text-white mb-8 max-w-4xl tracking-tight leading-[1.1]">
        Start Your Smart <br className="hidden md:block"/> Invoicing <span className="text-brand-green underline decoration-brand-green/30 underline-offset-8">Journey Today</span>
      </h2>
      
      {/* إضافة خلفية زجاجية خفيفة للنص لضمان المقروئية فوق الصورة */}
      <p className="text-slate-300 text-lg mb-12 max-w-2xl leading-relaxed bg-black/40 backdrop-blur-md p-4 rounded-2xl border border-white/5">
        Connect with the Jomax Soft team to register as a certified service provider and get an integrated offer that fits your facility's needs.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">
        <button className="flex items-center justify-center gap-3 px-10 py-5 bg-brand-green text-slate-950 font-black rounded-2xl transition-all transform hover:scale-105 hover:bg-white active:scale-95 shadow-xl shadow-brand-green/20">
          <Send className="w-5 h-5" />
          Contact Our Team
        </button>
        <button className="flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl border border-slate-800 hover:bg-slate-800 transition-all active:scale-95">
          <LayoutDashboard className="w-5 h-5" />
          Explore Services
        </button>
      </div>
    </div>

    {/* Bottom Grid Line Decor */}
    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent opacity-30 z-10"></div>
  </div>
</div>

      {/* Decorative Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#28CAE1]/5 blur-[120px] rounded-full pointer-events-none"></div>
    </section>
  );
};

export default TechAndCtaSection;