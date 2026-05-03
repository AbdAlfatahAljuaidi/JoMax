'use client';

import { ChevronDown, Menu, X, Mail, LifeBuoy, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation'; // أضفنا هذا لمعرفة الصفحة الحالية

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
// تحديد أن الحالة يمكن أن تكون نص أو null
const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const pathname = usePathname(); // للحصول على المسار الحالي

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: "About Us", links: ["About", "Partners"] },
    { title: "Products", link: "/" },
    { title: "Our Services", links: ["Services", "Projects", "Solutions"] },
    { title: "Portfolio", links: ["Clients", "Certification"] }
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-center px-4 pt-4">
      <div 
        className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between px-6 rounded-full border border-white/10 ${
          isScrolled 
            ? 'w-full max-w-5xl bg-black/60 backdrop-blur-2xl py-2.5 shadow-2xl border-white/20' 
            : 'w-full max-w-[95%] bg-transparent py-4'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image src="/images/jomax2.png" alt="JOMAX" width={110} height={30} priority />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {menuItems.map((menu) => (
            menu.link ? (
              <Link 
                key={menu.title} 
                href={menu.link} 
                // أضفنا normal-case لمنع التحويل لـ CAPITAL
                className={`px-4 py-2 text-sm font-medium transition-all normal-case ${
                  pathname === menu.link ? 'text-brand-green' : 'text-white/80 hover:text-white'
                }`}
              >
                {menu.title}
              </Link>
            ) : (
              <div key={menu.title} className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-all normal-case group-hover:text-brand-green">
                  {menu.title} <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-slate-900/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 w-52 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {menu.links?.map((item) => (
                      <Link 
                        key={item} 
                        href={`/${item.toLowerCase().replace(' ', '-')}`} 
                        className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-2xl transition-all group/item normal-case"
                      >
                        {item}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-brand-green" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden lg:flex items-center gap-2">
          <Link href="/support" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-brand-green px-4 py-2 transition-all normal-case">
            <LifeBuoy size={18} /> Support
          </Link>
          <Link href="/contact" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-green hover:text-white transition-all hover:scale-105 active:scale-95 normal-case">
            <Mail size={16} /> Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white p-2">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/98 backdrop-blur-2xl z-[200] p-8 lg:hidden overflow-y-auto">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white hover:rotate-90 transition-transform duration-300"><X size={32}/></button>
          
          <div className="flex flex-col gap-4 mt-20">
            {menuItems.map((menu) => (
              <div key={menu.title} className="border-b border-white/5 pb-4">
                {menu.link ? (
                  <Link 
                    href={menu.link} 
                    className="text-2xl font-black text-white block normal-case"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <div>
                    <button 
                      onClick={() => setExpandedMenu(expandedMenu === menu.title ? null : menu.title)}
                      className="flex items-center justify-between w-full text-2xl font-black text-white normal-case"
                    >
                      {menu.title}
                      <ChevronDown className={`transition-transform duration-300 ${expandedMenu === menu.title ? 'rotate-180 text-brand-green' : ''}`} />
                    </button>
                    
                    {expandedMenu === menu.title && (
                      <div className="mt-4 ml-4 flex flex-col gap-6 border-l-2 border-brand-green/30 pl-6 py-2">
                        {menu.links?.map((item) => (
                          <Link 
                            key={item} 
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-xl text-gray-400 hover:text-brand-green normal-case transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            
            <div className="mt-8 flex flex-col gap-6">
                <Link href="/support" className="flex items-center gap-3 text-2xl font-black text-white/80 normal-case" onClick={() => setMobileMenuOpen(false)}>
                    <LifeBuoy className="text-brand-green" /> Support
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-3 bg-brand-green text-slate-900 px-6 py-5 rounded-3xl text-xl font-black uppercase tracking-widest" onClick={() => setMobileMenuOpen(false)}>
                    <Mail size={24} /> Contact Us
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;