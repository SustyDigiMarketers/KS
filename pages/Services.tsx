import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Laptop, Network, Camera, Fingerprint, Check, ArrowRight, CheckCircle, Cpu, Zap } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { SERVICES, BENEFITS } from '../constants';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Laptop': return <Laptop className="w-8 h-8" />;
      case 'Monitor': return <Monitor className="w-8 h-8" />;
      case 'Network': return <Network className="w-8 h-8" />;
      case 'Camera': return <Camera className="w-8 h-8" />;
      case 'Fingerprint': return <Fingerprint className="w-8 h-8" />;
      default: return <Monitor className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Dynamic Header */}
      <div className="bg-slate-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1)_0%,_transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-block px-4 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full text-brand-400 text-[10px] font-black tracking-widest uppercase mb-6">Service Catalog 4.0</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight mb-6">OUR SOLUTION <br/><span className="text-brand-500">ECOSYSTEM</span></h1>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed">Precision-engineered IT services designed for industrial-grade reliability and seamless scalability.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Service Listings */}
        <div className="space-y-40">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`reveal flex flex-col lg:flex-row gap-20 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-1/2 relative group">
                 <div className="absolute -inset-4 bg-brand-500/5 rounded-[2.5rem] blur-2xl group-hover:bg-brand-500/10 transition-all duration-700"></div>
                 <div className="rounded-[3rem] overflow-hidden shadow-2xl h-96 relative border border-slate-200">
                    <img
                       src={`https://picsum.photos/seed/${service.id}/1200/900`}
                       alt={service.title}
                       className="w-full h-full object-cover transform group-hover:scale-110 transition duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                 </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-white shadow-xl rounded-3xl flex items-center justify-center text-brand-600 border border-slate-100">{getIcon(service.iconName)}</div>
                  <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase">{service.title}</h2>
                </div>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">{service.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
                      <Zap size={16} className="text-brand-500 flex-shrink-0" />
                      <span className="text-sm text-slate-700 font-bold">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-5">
                  <Link to="/contact" className="px-10 py-4 bg-brand-600 text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-brand-700 hover:shadow-2xl shadow-brand-500/20 transition-all">{service.ctaText}</Link>
                  <Link to={`/services/${service.id}`} className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-2xl text-xs uppercase tracking-widest hover:border-brand-600 transition-all">Core Specs</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Advantage Section - Enhanced Glassmorphism */}
        <div className="mt-48 reveal">
          <div className="relative p-1 md:p-1 rounded-[4rem] bg-gradient-to-br from-brand-400/20 via-brand-500/10 to-transparent">
            <div className="bg-white rounded-[3.8rem] shadow-2xl p-12 md:p-24 border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-brand-900 -rotate-12 pointer-events-none">
                <Cpu size={300} />
              </div>
              <SectionHeader title="Operational Excellence" subtitle="The architectural pillars of our service delivery." />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mt-20">
                {BENEFITS.map((benefit, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-500 flex-shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                      <CheckCircle size={24} />
                    </div>
                    <p className="ml-6 text-xl text-slate-700 font-bold leading-tight group-hover:text-brand-600 transition-colors">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;