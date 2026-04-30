'use client';

import { ChevronDown, Menu, X, Mail, LifeBuoy, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // إضافة State للتحكم في القوائم المنسدلة داخل الموبايل
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Business", links: ["Services", "Projects", "Solutions"] },
    { title: "About Us", links: ["About", "Partners"] },
    { title: "Portfolio", links: ["Clients", "Certification"] }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 flex justify-center px-4 pt-4">
      <div 
        className={`transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-between px-6 rounded-full border border-white/10 ${
          isScrolled 
            ? 'w-full max-w-5xl bg-black/60 backdrop-blur-2xl py-2.5 shadow-2xl scale-100 border-white/20' 
            : 'w-full max-w-[95%] bg-transparent py-4 scale-100'
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
              <Link key={menu.title} href={menu.link} className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                {menu.title}
              </Link>
            ) : (
              <div key={menu.title} className="relative group">
                <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors">
                  {menu.title} <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="bg-black/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-3 w-52 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    {menu.links?.map((item) => (
                      <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-2xl transition-all group/item">
                        {item}
                        <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
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
          <Link href="/support" className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white px-4 py-2 transition-colors">
            <LifeBuoy size={18} /> Support
          </Link>
          <Link href="/contact" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-bold hover:scale-105 transition-all">
            <Mail size={16} /> Contact
          </Link>
        </div>

        <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-white p-2">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Updated */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[100] p-8 lg:hidden overflow-y-auto">
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white"><X size={32}/></button>
          
          <div className="flex flex-col gap-4 mt-20">
            {menuItems.map((menu) => (
              <div key={menu.title} className="border-b border-white/10 pb-4">
                {menu.link ? (
                  <Link 
                    href={menu.link} 
                    className="text-2xl font-light text-white block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {menu.title}
                  </Link>
                ) : (
                  <div>
                    <button 
                      onClick={() => setExpandedMenu(expandedMenu === menu.title ? null : menu.title)}
                      className="flex items-center justify-between w-full text-2xl font-light text-white"
                    >
                      {menu.title}
                      <ChevronDown className={`transition-transform duration-300 ${expandedMenu === menu.title ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {expandedMenu === menu.title && (
                      <div className="mt-4 ml-4 flex flex-col gap-4 border-l border-white/20 pl-4">
                        {menu.links?.map((item) => (
                          <Link 
                            key={item} 
                            href={`/${item.toLowerCase().replace(' ', '-')}`}
                            className="text-lg text-gray-400 hover:text-white"
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
            
            {/* إلحاق روابط الدعم والاتصال في نهاية قائمة الموبايل */}
            <div className="mt-4 flex flex-col gap-6">
                <Link href="/support" className="flex items-center gap-3 text-xl text-white/80" onClick={() => setMobileMenuOpen(false)}>
                    <LifeBuoy /> Support
                </Link>
                <Link href="/contact" className="flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full text-lg font-bold" onClick={() => setMobileMenuOpen(false)}>
                    <Mail size={20} /> Contact Us
                </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;