import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Clock, MapPin, Star, Laptop, Cpu, Globe, Quote } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES, TESTIMONIALS, COMPANY_DETAILS } from '../constants';

const Home: React.FC = () => {
  // Combine testimonials twice for seamless infinite scroll
  const scrollingTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="overflow-hidden">
      {/* Futuristic Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_rgba(14,165,233,0.15)_0%,_transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_rgba(2,132,199,0.15)_0%,_transparent_50%)]"></div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-20 scale-105"
            alt="Hero Tech"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950 to-slate-950"></div>
        </div>

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-xs font-black uppercase tracking-[0.2em] mb-8 animate-fade-in-up">
              <Cpu size={14} className="animate-pulse" /> Precision Tech Solutions
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9] mb-8 animate-fade-in-up">
              ENGINEERING THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-brand-500 to-white text-glow">FUTURE OF IT</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 animate-fade-in-up reveal-delay-1 leading-relaxed font-medium">
              Coimbatore's specialized hub for elite chip-level laptop diagnostics, enterprise surveillance systems, and high-performance custom infrastructure.
            </p>
            <div className="flex flex-wrap gap-6 animate-fade-in-up reveal-delay-2">
              <Link 
                to="/contact" 
                className="group relative px-10 py-4 bg-brand-600 rounded-2xl font-black text-sm uppercase tracking-widest transition-all hover:bg-brand-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.4)] active:scale-95 overflow-hidden"
              >
                <span className="relative z-10">Initialize Booking</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link 
                to="/services" 
                className="px-10 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-all border-glow"
              >
                Explore Stack
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Metrics Badge */}
        <div className="absolute bottom-12 right-12 hidden lg:flex items-center gap-6 glass-card p-6 rounded-3xl border-white/10 animate-float">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-slate-900" alt="user" />
            ))}
          </div>
          <div>
            <div className="text-xl font-black text-brand-500">1500+</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Systems Optimized</div>
          </div>
        </div>
      </section>

      {/* Services Grid with Futuristic Hover */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="System Modules" subtitle="Modular IT services engineered for peak performance and absolute reliability." />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {SERVICES.slice(0, 5).map((service, idx) => (
              <div 
                key={service.id} 
                className={`reveal reveal-delay-${(idx % 3) + 1} glass-card group p-8 rounded-[2rem] hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-500 cursor-pointer overflow-hidden relative`}
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-500/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="mb-6 inline-flex p-4 bg-brand-50 rounded-2xl text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all duration-500 shadow-sm">
                   <Laptop size={28} />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{service.description}</p>
                <Link to={`/services/${service.id}`} className="inline-flex items-center text-xs font-black uppercase tracking-widest text-brand-600 group-hover:translate-x-2 transition-transform">
                  Access Module <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            ))}
            
            <div className="reveal reveal-delay-3 bg-brand-900 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
              <h3 className="text-3xl font-black mb-4 relative z-10 leading-tight">CUSTOM <br/>ARCHITECTURE?</h3>
              <p className="text-brand-300 text-sm mb-10 relative z-10 font-medium">We design proprietary IT ecosystems for high-demand enterprises.</p>
              <Link to="/contact" className="relative z-10 px-8 py-3 bg-white text-brand-900 font-black rounded-xl text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl">
                Start Blueprint
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Advantage - Futuristic Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="The Kanishk Advantage" subtitle="Why Coimbatore's industry leaders trust our technical supremacy." center={true}/>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-20">
            {[
              { icon: ShieldCheck, title: "Ironclad Warranty", desc: "Every fix, every part, backed by our zero-excuse guarantee.", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Clock, title: "Rapid Recovery", desc: "Mission-critical repairs delivered within 24-hour windows.", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: Cpu, title: "Silicon Mastery", desc: "Specialized chip-level technicians for motherboard salvation.", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: Globe, title: "Ubiquitous Support", desc: "Remote and on-site assistance anywhere in the region.", color: "text-purple-500", bg: "bg-purple-50" }
            ].map((item, idx) => (
              <div key={idx} className={`reveal reveal-delay-${idx+1} text-center group`}>
                <div className={`w-24 h-24 ${item.bg} ${item.color} rounded-[2rem] flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 transition-transform duration-500 shadow-inner`}>
                  <item.icon size={40} />
                </div>
                <h4 className="font-black text-xl mb-4 text-slate-900 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonial Marquee - Home Version */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Animated background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-600/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
          <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 animate-float">
            <Star className="text-yellow-400" fill="currentColor" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">ENGINEERING TRUST</h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto">Real outcomes for real businesses. See why Kanishk Systems is the standard for tech excellence.</p>
        </div>

        <div className="relative overflow-hidden pause-on-hover py-10 z-10">
          {/* Edge Masks */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-marquee whitespace-nowrap">
            {scrollingTestimonials.map((t, idx) => (
              <div 
                key={`${t.id}-${idx}`} 
                className="inline-block w-[350px] md:w-[450px] flex-shrink-0 px-4"
              >
                <div className="bg-white/5 backdrop-blur-md p-10 rounded-[2.5rem] relative border border-white/10 hover:border-brand-500/50 transition-all duration-700 h-full whitespace-normal group">
                  <Quote className="text-brand-500 w-10 h-10 mb-6 opacity-30 group-hover:opacity-100 transition-opacity" />
                  <p className="text-lg md:text-xl font-bold text-white leading-tight mb-8">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-px bg-brand-500"></div>
                    <div className="font-black text-[10px] uppercase tracking-widest text-brand-400">{t.author}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Map CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal glass-card border-none rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row min-h-[500px]">
            <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center bg-slate-50">
               <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Physical <br/>Node</h2>
               <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
                 Join us at our central hub for direct diagnostics and custom consultations. Open 10 AM to 8 PM.
               </p>
               <div className="flex flex-wrap gap-5">
                 <Link to="/contact" className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl shadow-slate-900/10">
                   Routing Directions
                 </Link>
                 <a href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`} className="px-10 py-4 border-2 border-slate-200 text-slate-900 font-black rounded-2xl text-xs uppercase tracking-widest hover:border-brand-600 transition-all">
                   Voice Call
                 </a>
               </div>
            </div>
            <div className="lg:w-1/2 relative grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472877399438!2d76.9926!3d10.9276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzM5LjQiTiA3NsKwNTknMzMuNCJF!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Office Location"
                  className="absolute inset-0"
                ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;