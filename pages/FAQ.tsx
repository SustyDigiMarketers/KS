import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { FAQS } from '../constants';
import { HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Frequently Asked Questions" center={true} />

        <div className="space-y-6 mt-12">
          {FAQS.map((faq) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <div className="flex gap-4">
                <HelpCircle className="w-6 h-6 text-brand-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-slate-900">{faq.question}</h3>
                  <p className="mt-2 text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;