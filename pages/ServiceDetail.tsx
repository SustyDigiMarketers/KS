import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES, COMPANY_DETAILS } from '../constants';
import { Check, Phone, ArrowRight, ChevronRight, AlertCircle } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    if (!service) {
      // Could redirect to 404 or services list if invalid ID
      // navigate('/services'); 
    }
    window.scrollTo(0, 0);
  }, [service, navigate]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <AlertCircle className="w-16 h-16 text-slate-400 mb-4" />
        <h2 className="text-2xl font-bold text-slate-700 mb-2">Service Not Found</h2>
        <Link to="/services" className="text-brand-600 hover:underline">Back to Services</Link>
      </div>
    );
  }

  const otherServices = SERVICES.filter(s => s.id !== id);

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-slate-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900 opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center gap-2 text-sm text-brand-300 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight size={14} />
            <span className="text-white truncate">{service.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold">{service.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-10">
              <img 
                src={`https://picsum.photos/seed/${service.id}/800/400`} 
                alt={service.title} 
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Overview</h2>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  {service.longDescription}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start bg-slate-50 p-3 rounded-lg">
                      <Check className="w-5 h-5 text-brand-600 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">Why Choose This Service?</h3>
                <ul className="space-y-3 mb-8">
                   {service.benefitList.map((benefit, idx) => (
                     <li key={idx} className="flex items-start">
                       <div className="w-2 h-2 rounded-full bg-brand-500 mt-2.5 mr-3 flex-shrink-0"></div>
                       <span className="text-slate-600 text-lg">{benefit}</span>
                     </li>
                   ))}
                </ul>
              </div>
            </div>

            {/* Bottom CTA in Content Area */}
             <div className="bg-brand-600 rounded-xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
                <div>
                   <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
                   <p className="text-brand-100">Contact us today for a free consultation or quote.</p>
                </div>
                <Link 
                  to="/contact" 
                  className="px-8 py-3 bg-white text-brand-700 font-bold rounded-lg hover:bg-brand-50 transition shadow-md whitespace-nowrap"
                >
                  {service.ctaText}
                </Link>
             </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
             
             {/* Quick Contact Box */}
             <div className="bg-slate-900 text-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-slate-300 mb-6 text-sm">Call our support team directly for urgent inquiries.</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-600 rounded-full flex items-center justify-center">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase">Call Us Now</div>
                    <div className="text-lg font-bold">{COMPANY_DETAILS.phone}</div>
                  </div>
                </div>
                <Link to="/contact" className="block w-full text-center py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-brand-50 transition mt-4">
                   Contact Support
                </Link>
             </div>

             {/* Other Services Menu */}
             <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
               <h3 className="text-lg font-bold text-slate-900 mb-4">Other Services</h3>
               <ul className="space-y-2">
                 {otherServices.map(s => (
                   <li key={s.id}>
                     <Link 
                       to={`/services/${s.id}`} 
                       className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-600 hover:text-brand-600 transition group"
                     >
                       <span>{s.title.split(" ")[0]} Service</span>
                       <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;