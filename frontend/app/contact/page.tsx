import React from 'react'
import { ArrowUpRight, MapPin  , Phone,Mail,LocateFixed  } from 'lucide-react';
import Footer from '@/components/sections/Footer';
import NavBar from '@/components/sections/NavBar';

const page = () => {
  return (
    <div>
        <NavBar />
 
    <section className="relative py-40 px-6 bg-[#fcfdfe] overflow-hidden">
    {/* Ambient Background Elements */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-main/5 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
  
    <div className="max-w-7xl mx-auto relative z-10">
      
      {/* Header Area - Bold Typography */}
      <div className="max-w-3xl mb-24 space-y-8 text-center md:text-left">
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:scale-105">
          <div className="w-2 h-2 rounded-full bg-brand-main animate-pulse" />
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Get in touch</span>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
          Let's Build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-main to-brand-green italic font-black">Something Great.</span>
        </h2>
        
        <p className="text-slate-500 text-xl font-medium leading-relaxed max-w-xl">
          Whether you have a project in mind, a challenge to solve, or just want to explore what's possible — <span className="text-slate-900 font-bold">we'd love to hear from you.</span>
        </p>
      </div>
  
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Sidebar: Info Cards & Map (4 Columns) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Info Bento Pills */}
          {[
            { icon: MapPin  , label: 'Headquarters', value: 'Wasfi Al-Tal St., Amman, Jordan', color: 'bg-black' },
            { icon: Phone, label: 'Phone', value: '+962 6 500 0000', color: 'bg-black' },
            { icon: Mail, label: 'Email', value: 'hello@jomax.tech', color: 'bg-slate-900' }
          ].map((item, idx) => (
            <div key={idx} className="group flex items-center gap-6 p-6 bg-white border border-slate-100 rounded-[2rem] transition-all hover:shadow-xl hover:-translate-y-1">
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shrink-0 shadow-lg transition-transform group-hover:rotate-12`}>
                <item.icon size={24} strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</p>
                <p className="text-slate-900 font-bold tracking-tight">{item.value}</p>
              </div>
            </div>
          ))}
  
          {/* Map Placeholder - Ultra Rounded Glass */}
          <div className="relative aspect-video rounded-[2.5rem] bg-slate-100 border-4 border-white shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-slate-200 animate-pulse" />
            <iframe 
              src="https://www.google.com/maps/embed?..." 
              className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000"
              style={{ border: 0 }}
            />
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm">
              Open in Maps
            </div>
          </div>
        </div>
  
        {/* Main Form: Glass Bento Card (8 Columns) */}
        <div className="lg:col-span-8">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden">
            {/* Subtle Form Header */}
            <div className="mb-12">
              <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2">Send Us a Message</h3>
              <p className="text-slate-500 font-medium">Tell us about your project and we'll get back to you within 24 hours.</p>
            </div>
  
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Full Name</label>
                <input type="text" placeholder="Alex Johnson" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-main focus:ring-4 focus:ring-brand-main/5 transition-all outline-none font-bold text-slate-900" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Email Address</label>
                <input type="email" placeholder="alex@company.com" className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-main focus:ring-4 focus:ring-brand-main/5 transition-all outline-none font-bold text-slate-900" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Service Needed</label>
                <select className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-main transition-all outline-none font-bold text-slate-900 appearance-none">
                  <option>Cyber Security</option>
                  <option>Cloud Infrastructure</option>
                  <option>Managed IT Services</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">Your Message</label>
                <textarea rows={5} placeholder="Tell us about your project challenges..." className="w-full px-6 py-5 rounded-2xl bg-slate-50 border border-transparent focus:bg-white focus:border-brand-main transition-all outline-none font-bold text-slate-900 resize-none"></textarea>
              </div>
              
              <div className="md:col-span-2 pt-6">
                <button className="group/btn relative w-full flex items-center justify-center gap-6 pl-10 pr-3 py-3 rounded-full bg-slate-900 text-white font-black uppercase text-xs tracking-[0.2em] transition-all hover:bg-brand-main active:scale-95 shadow-2xl">
                  Send Message
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 group-hover/btn:rotate-45 transition-transform duration-500">
                    <ArrowUpRight size={22} />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  
      {/* Bottom Status Grid (Horizontal Bento) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
        {[
          { title: 'Business Hours', value: 'Mon-Fri, 8am-6pm', detail: 'Standard Support' },
          { title: 'Emergency Line', value: '24/7 Available', detail: 'For enterprise clients' },
          { title: 'Response Time', value: '< 4 Hours', detail: 'Average first response' }
        ].map((stat, idx) => (
          <div key={idx} className="p-8 bg-white border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center space-y-3 hover:shadow-lg transition-all">
            <h4 className="text-[10px] font-black text-brand-main uppercase tracking-[0.3em]">{stat.title}</h4>
            <p className="text-2xl font-black text-slate-900 tracking-tight">{stat.value}</p>
            <p className="text-xs font-bold text-slate-400">{stat.detail}</p>
          </div>
        ))}
      </div>
    </div>


  </section>
  <Footer /> 
  </div>
  )
}

export default page