import React from 'react';
import { Mail, MessageSquare, Phone, BookOpen, ChevronRight, Zap } from 'lucide-react';
import NavBar from '@/components/sections/NavBar';
import Footer from '@/components/sections/Footer';

const SupportPage = () => {
  const supportCategories = [
    { title: "Technical Issue", desc: "Access manuals and setup guides.", icon: BookOpen },
    { title: "Live Chat", desc: "Connect with our engineers instantly.", icon: MessageSquare },
    { title: "Report an Issue", desc: "Open a priority support ticket.", icon: Mail },
    { title: "Emergency Support", desc: "Immediate help for critical failures.", icon: Phone }
  ];

  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <NavBar />

      <main className="pt-32 pb-24 px-6 relative">
        {/* Ambient background animation */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-main/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[120px] animate-pulse pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Header Area */}
          <div className="mb-20 text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              Jomax <span className="text-brand-green">Support Centerdd</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Our engineering team is dedicated to your uptime. Choose your preferred support channel below.
            </p>
          </div>

          {/* Support Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {supportCategories.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl border border-slate-100
                hover:border-brand-green/30 hover:shadow-2xl hover:-translate-y-2
                transition-all duration-500 ease-out"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6
                group-hover:bg-brand-green group-hover:rotate-6 transition-all duration-500">
                  <item.icon className="text-brand-green group-hover:text-white transition-colors" size={24} />
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-500 text-sm mb-6">{item.desc}</p>

                {/* animated underline */}
                <div className="w-0 group-hover:w-full h-[2px] bg-brand-green transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>

          {/* Support Form Section */}
          <section className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden">
            
            {/* animated background dots */}
            <div
              className="absolute inset-0 opacity-10 animate-pulse"
              style={{
                backgroundImage: `radial-gradient(#fff 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}
            />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="space-y-6">
                <h2 className="text-4xl font-black">Send us a direct request</h2>
                <p className="text-slate-400">
                  Fill in the details and our support desk will respond within 2 hours during working hours.
                </p>

                <div className="flex items-center gap-4 text-brand-green font-bold animate-pulse">
                  <Zap size={20} className="animate-bounce" />
                  <span>Avg. response time: 45 Minutes</span>
                </div>
              </div>

              <form className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 backdrop-blur-md
              hover:scale-[1.02] transition-transform duration-500">

                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="bg-transparent border-b border-white/20 p-3 focus:border-brand-green outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="bg-transparent border-b border-white/20 p-3 focus:border-brand-green outline-none transition-all"
                  />
                </div>

                <select className="w-full bg-transparent border-b border-white/20 p-3 outline-none text-slate-400 focus:border-brand-green transition-all">
                  <option>Select Issue Type</option>
                  <option>Infrastructure</option>
                  <option>Security</option>
                  <option>Cloud</option>
                </select>

                <textarea
                  placeholder="Describe your issue..."
                  className="w-full bg-transparent border-b border-white/20 p-3 outline-none h-32 focus:border-brand-green transition-all"
                />

                <button
                  className="w-full bg-brand-green py-4 rounded-xl font-black uppercase text-xs tracking-widest
                  hover:bg-white hover:text-slate-900 hover:scale-105 active:scale-95
                  transition-all duration-300 shadow-lg"
                >
                  Submit Ticket
                </button>
              </form>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SupportPage;