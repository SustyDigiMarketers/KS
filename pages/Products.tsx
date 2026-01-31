import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { PRODUCTS, COMPANY_DETAILS } from '../constants';
import { PhoneCall } from 'lucide-react';

const Products: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Featured Products"
          subtitle="Top quality hardware from leading brands. Call us for current pricing and availability."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden border border-slate-100 flex flex-col hover:-translate-y-1 transition duration-300">
              <div className="h-56 overflow-hidden bg-slate-100 relative">
                <span className="absolute top-4 right-4 bg-brand-600 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.category}
                </span>
                <img
                   src={`https://picsum.photos/seed/${product.id}/500/400`}
                   alt={product.title}
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{product.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{product.specs}</p>
                <div className="mt-auto">
                   <a
                     href={`tel:${COMPANY_DETAILS.phone.replace(/\s+/g, '')}`}
                     className="w-full flex items-center justify-center gap-2 px-4 py-2 border-2 border-brand-600 text-brand-600 font-semibold rounded hover:bg-brand-50 transition"
                   >
                     <PhoneCall size={18} /> Call for Price
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;