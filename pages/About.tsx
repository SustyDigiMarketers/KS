import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { COMPANY_DETAILS, CLIENTS, TESTIMONIALS } from '../constants';
import { Target, Award, Users, TrendingUp, Heart, Zap, Shield, Quote, ExternalLink } from 'lucide-react';

const About: React.FC = () => {
  const galleryImages = [
    { id: 1, title: 'Network Infrastructure', seed: 'it1' },
    { id: 2, title: 'Smart Surveillance', seed: 'sec1' },
    { id: 3, title: 'Server Diagnostics', seed: 'srv1' },
    { id: 4, title: 'Precision Hardware', seed: 'hw1' },
    { id: 5, title: 'Enterprise Lab', seed: 'lab1' },
    { id: 6, title: 'Custom Workstations', seed: 'wk1' },
  ];

  // Combine testimonials twice for seamless infinite scroll
  const scrollingTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className="bg-white">
      {/* Dramatic Header */}
      <div className="bg-slate-50 py-32 relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.8] mb-8">ORIGIN & <br/><span className="text-brand-600">MISSION</span></h1>
          <p className="mt-4 text-xl text-slate-500 font-bold tracking-widest uppercase opacity-70">Legacy of Trust since 2008</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Storytelling Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="reveal">
            <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tighter">THE CORE <br/>IDENTITY</h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              {COMPANY_DETAILS.name} isn't just a service center; it's a dedicated technology lab. For over 15 years, we've focused on one mission: providing Coimbatore with the highest level of IT technical proficiency.
            </p>
            <div className="p-8 bg-slate-950 rounded-[2.5rem] text-white relative group overflow-hidden">
               <div className="absolute inset-0 bg-brand-600/10 group-hover:scale-150 transition-transform duration-700"></div>
               <div className="relative z-10">
                 <h3 className="text-lg font-black text-brand-400 uppercase tracking-widest mb-2">Our Mission</h3>
                 <p className="text-xl font-bold leading-relaxed italic opacity-90">
                   "To deliver elite, industrial-grade tech solutions that ensure our clients remain secure, operational, and ahead of the curve."
                 </p>
               </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2 relative group">
             <div className="absolute -inset-6 bg-brand-500/5 rounded-[3rem] blur-2xl group-hover:bg-brand-500/10 transition-all"></div>
             <div className="relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border border-slate-200">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Team" className="w-full h-full object-cover" />
             </div>
          </div>
        </div>

        {/* Modern Metrics Grid */}
        <div className="mt-48 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { icon: Users, val: "500+", label: "Elite Clients", color: "text-brand-500" },
            { icon: Award, val: "200+", label: "Surveillance Deployments", color: "text-emerald-500" },
            { icon: TrendingUp, val: "1.5K+", label: "Optimized Systems", color: "text-amber-500" }
          ].map((item, idx) => (
            <div key={idx} className={`reveal reveal-delay-${idx+1} bg-slate-50 p-12 rounded-[3rem] text-center border border-slate-100 hover:shadow-xl transition-all duration-500 group`}>
               <item.icon className={`mx-auto h-16 w-16 ${item.color} mb-6 transition-transform duration-500 group-hover:scale-110`} />
               <div className="text-6xl font-black text-slate-900 tracking-tighter mb-2">{item.val}</div>
               <div className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials - Futuristic Auto-Scrolling Marquee */}
        <div className="mt-48 reveal">
          <SectionHeader title="Voices of Trust" subtitle="Verified feedback from our long-term technology partners." />
          <div className="mt-16 relative overflow-hidden pause-on-hover py-10">
            {/* Soft edge masks for smooth entry/exit */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex animate-marquee whitespace-nowrap">
              {scrollingTestimonials.map((t, idx) => (
                <div 
                  key={`${t.id}-${idx}`} 
                  className="inline-block w-[400px] md:w-[500px] flex-shrink-0 px-6"
                >
                  <div className="bg-white p-10 rounded-[2.5rem] relative border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-700 h-full whitespace-normal">
                    <Quote className="text-brand-500 w-10 h-10 mb-6 opacity-20" />
                    <p className="text-xl font-bold text-slate-800 leading-tight mb-8">"{t.text}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-px bg-brand-500"></div>
                      <div className="font-black text-[10px] uppercase tracking-widest text-slate-400">{t.author}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Grid - Minimalist Modern */}
        <div className="mt-48 reveal">
           <SectionHeader title="Client Network" subtitle="Precision solutions for industry leaders." />
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
             {CLIENTS.map((client) => (
               <div key={client.id} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-lg transition-all flex flex-col justify-between group">
                 <h4 className="font-black text-lg text-slate-900 group-hover:text-brand-600 transition-colors uppercase tracking-tight">{client.name}</h4>
                 <div className="mt-6 inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-600">
                    <ExternalLink size={12} className="mr-2" /> {client.project}
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* Project Gallery - Cinematic Grid */}
        <div className="mt-48 reveal">
          <SectionHeader title="Visual Proof" subtitle="The standard of quality across our technical operations." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {galleryImages.map((img) => (
              <div key={img.id} className="group relative overflow-hidden rounded-[2.5rem] shadow-xl aspect-w-1 aspect-h-1 h-[350px] bg-slate-100 cursor-none">
                <img
                  src={`https://picsum.photos/seed/${img.seed}/800/800`}
                  alt={img.title}
                  className="w-full h-full object-cover transform scale-110 group-hover:scale-125 transition duration-1000 ease-in-out grayscale-[0.5] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <p className="text-white font-black text-xl p-10 tracking-tighter uppercase">{img.title}</p>
                </div>
                <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white scale-0 group-hover:scale-100 transition-transform duration-500">
                   <ExternalLink size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;