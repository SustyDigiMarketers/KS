import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { CLIENTS, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Testimonials */}
      <section className="bg-brand-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What Clients Say" subtitle="Don't just take our word for it." center={true} />
           {/* Overriding header color for dark bg */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-brand-800 p-8 rounded-xl relative">
                <Quote className="text-brand-500 w-10 h-10 mb-4 opacity-50" />
                <p className="text-lg italic text-brand-100 mb-6">"{t.text}"</p>
                <div className="font-bold text-white">{t.author}</div>
              </div>
            ))}
           </div>
        </div>
      </section>

      {/* Clients List */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <SectionHeader title="Recent Projects" subtitle="Trusted by businesses across Coimbatore." />

           <div className="overflow-hidden bg-slate-50 shadow sm:rounded-md mt-8">
             <ul className="divide-y divide-slate-200">
               {CLIENTS.map((client) => (
                 <li key={client.id} className="px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center hover:bg-white transition">
                   <div className="font-bold text-lg text-slate-800">{client.name}</div>
                   <div className="text-sm text-slate-500 mt-1 sm:mt-0 bg-white border px-3 py-1 rounded-full">
                     {client.project}
                   </div>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;