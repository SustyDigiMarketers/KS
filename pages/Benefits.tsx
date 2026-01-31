import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { BENEFITS } from '../constants';
import { CheckCircle } from 'lucide-react';

const Benefits: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-16">
          <SectionHeader
            title="Why Kanishk Systems?"
            subtitle="We go the extra mile to ensure your technology works for you."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mt-12">
            {BENEFITS.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="flex-shrink-0 w-6 h-6 text-green-500 mt-1" />
                <p className="ml-4 text-lg text-slate-700 font-medium">{benefit}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-slate-500 italic mb-6">"Committed to quality service since day one."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;