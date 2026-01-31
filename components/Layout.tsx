import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation, Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';
import { COMPANY_DETAILS, NAV_ITEMS } from '../constants';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-brand-500 selection:text-white">
      {/* Top bar with glass tint */}
      <div className="bg-brand-900/95 backdrop-blur-sm text-white text-[11px] py-1.5 px-4 relative z-[60]">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex gap-6 font-medium">
            <span className="flex items-center gap-1.5 hover:text-brand-300 transition-colors cursor-default"><Phone size={12} className="text-brand-400" /> {COMPANY_DETAILS.phone}</span>
            <span className="flex items-center gap-1.5 hover:text-brand-300 transition-colors cursor-default"><Mail size={12} className="text-brand-400" /> {COMPANY_DETAILS.email}</span>
          </div>
          <div className="hidden sm:block opacity-70 font-bold uppercase tracking-widest">
            GSTIN: {COMPANY_DETAILS.gstin}
          </div>
        </div>
      </div>

      {/* Futuristic Sticky Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-3 border-b border-white/20' 
          : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0 group">
              <NavLink to="/" onClick={closeMenu} className="flex flex-col">
                <span className="text-2xl font-black text-brand-900 tracking-tighter group-hover:text-brand-600 transition-colors">
                  KANISHK<span className="text-brand-500">SYSTEMS</span>
                </span>
                <span className="text-[9px] text-slate-500 font-bold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  Advanced Technology Partner
                </span>
              </NavLink>
            </div>

            {/* Nav - Minimalist Desktop */}
            <nav className="hidden lg:flex items-center space-x-10">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-bold tracking-tight transition-all relative py-2 group ${
                      isActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-900'
                    }`
                  }
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-brand-500 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100`}></span>
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-5">
              <Link
                to="/contact"
                className="hidden lg:flex px-7 py-2.5 bg-brand-600 text-white text-sm font-extrabold rounded-full shadow-lg shadow-brand-500/20 hover:bg-brand-700 hover:shadow-brand-500/40 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                Get Started
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-slate-600 hover:text-brand-600 transition-colors"
              >
                {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu with Glassmorphism */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full h-screen bg-white/95 backdrop-blur-2xl z-50 p-6 animate-fade-in-up">
            <div className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block px-6 py-4 rounded-2xl text-lg font-bold ${
                      isActive ? 'bg-brand-600 text-white shadow-xl shadow-brand-500/30' : 'text-slate-800 hover:bg-slate-100'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Enhanced Floating Controls */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <button
          onClick={scrollToTop}
          className={`bg-slate-900/90 backdrop-blur-md text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:bg-brand-600 group ${
            showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
          }`}
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
        <a
          href="https://wa.me/91967756193"
          target="_blank"
          rel="noreferrer"
          className="bg-green-500 text-white p-5 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-110 active:scale-90 transition-all animate-pulse-slow"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

      <footer className="bg-slate-900 text-slate-400 pt-20 pb-10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white tracking-tighter">KANISHK<span className="text-brand-500">SYSTEMS</span></span>
                <span className="text-[10px] text-brand-400 font-bold tracking-widest uppercase">Since 2008</span>
              </div>
              <p className="text-sm leading-relaxed opacity-80">
                Pioneering IT excellence in Coimbatore with precision hardware engineering and elite security installations.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, idx) => (
                  <a key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-all transform hover:-translate-y-1">
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:pl-8">
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h3>
              <ul className="space-y-4 text-sm font-medium">
                {['Home', 'About', 'Services', 'Contact'].map(item => (
                  <li key={item}><Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-brand-400 transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Solutions</h3>
              <ul className="space-y-4 text-sm font-medium">
                {['Laptop Restoration', 'Smart Surveillance', 'VLAN Networking', 'Cloud Biometrics'].map(item => (
                  <li key={item} className="hover:text-brand-400 transition-colors cursor-default">{item}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Office</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-4"><MapPin size={18} className="text-brand-500 flex-shrink-0" /> <span className="opacity-80">{COMPANY_DETAILS.address}</span></li>
                <li className="flex gap-4"><Phone size={18} className="text-brand-500 flex-shrink-0" /> <span className="opacity-80">{COMPANY_DETAILS.phone}</span></li>
                <li className="flex gap-4"><Mail size={18} className="text-brand-500 flex-shrink-0" /> <span className="opacity-80">{COMPANY_DETAILS.email}</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold tracking-widest text-slate-500 uppercase">
            <p>&copy; {new Date().getFullYear()} {COMPANY_DETAILS.name}.</p>
            <div className="mt-4 md:mt-0 flex gap-6">
               <span className="hover:text-brand-400 transition-colors cursor-default">Privacy</span>
               <span className="hover:text-brand-400 transition-colors cursor-default">Terms</span>
               <a 
                 href="https://sustydigimarketers.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="text-slate-600 hover:text-brand-400 transition-colors"
               >
                 Powered by SustyDigiMarketers
               </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;