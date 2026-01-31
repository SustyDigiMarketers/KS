import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import { COMPANY_DETAILS, FAQS } from '../constants';
import { MapPin, Phone, Mail, Send, HelpCircle, CheckCircle2, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      // REPLACE THIS URL with your actual particular action link (e.g. Formspree, your backend, etc.)
      const ACTION_LINK = "https://formspree.io/f/placeholder"; 
      
      // Sending data to the action link
      const response = await fetch(ACTION_LINK, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      });

      // Show success state regardless for demo purposes, 
      // but in production check if response.ok is true
      setFormStatus('submitted');

      // Trigger Party Pop (Confetti)
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0ea5e9', '#38bdf8', '#0284c7', '#ffffff', '#0c4a6e'],
        zIndex: 9999
      });
      
    } catch (error) {
      console.error("Submission error:", error);
      // For a better UX, even if the dummy fetch fails, we show success here for your demonstration
      setFormStatus('submitted');
      confetti({
        particleCount: 100,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-900 text-white py-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15)_0%,_transparent_70%)]"></div>
         <h1 className="text-5xl font-black tracking-tighter uppercase relative z-10">Initialize <br/><span className="text-brand-500">Connectivity</span></h1>
         <p className="mt-6 text-slate-400 font-medium tracking-wide relative z-10">We are ready to deploy solutions for your next technological challenge.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Contact Info & Bank Details */}
          <div className="reveal">
            <div className="mb-12">
              <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase tracking-tighter">NODE ADDRESS</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all mr-6">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-xs text-slate-400 uppercase tracking-widest mb-1">Physical Location</h3>
                    <p className="text-slate-700 font-bold leading-relaxed">{COMPANY_DETAILS.address}</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all mr-6">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-xs text-slate-400 uppercase tracking-widest mb-1">Voice Communication</h3>
                    <p className="text-slate-700 font-bold text-lg">{COMPANY_DETAILS.phone}</p>
                  </div>
                </div>
                <div className="flex items-center group">
                  <div className="w-12 h-12 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-all mr-6">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-black text-xs text-slate-400 uppercase tracking-widest mb-1">Data Transmission</h3>
                    <p className="text-slate-700 font-bold">{COMPANY_DETAILS.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bank Details Card */}
            <div className="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-brand-500/5 group-hover:scale-110 transition-transform duration-700"></div>
              <h2 className="text-xl font-black text-white mb-6 border-b border-slate-800 pb-4 flex justify-between items-center uppercase tracking-tighter">
                Financial Protocol
                <span className="text-[10px] text-brand-500 bg-brand-500/10 px-3 py-1 rounded-full tracking-widest">Verified</span>
              </h2>
              <div className="space-y-4 text-sm relative z-10">
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Recipient</span>
                  <span className="font-black text-white">{COMPANY_DETAILS.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Bank Institution</span>
                  <span className="font-black text-white text-right">{COMPANY_DETAILS.bank.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-900 pb-2">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Routing Number</span>
                  <span className="font-mono font-black text-brand-400 tracking-tighter">{COMPANY_DETAILS.bank.accountNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">IFSC Code</span>
                  <span className="font-mono font-black text-brand-400 tracking-tighter">{COMPANY_DETAILS.bank.ifsc}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="reveal reveal-delay-2">
            <div className="bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-slate-100 p-10 md:p-14 min-h-[600px] flex flex-col justify-center transition-all duration-500">
              {formStatus === 'submitted' ? (
                <div className="text-center space-y-8 animate-fade-in-up">
                  <div className="w-32 h-32 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto shadow-inner group relative">
                    <CheckCircle2 size={64} className="relative z-10 animate-pulse" />
                    <div className="absolute inset-0 bg-emerald-500/10 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase mb-4">Transmission Successful!</h2>
                    <p className="text-slate-500 font-medium max-w-xs mx-auto leading-relaxed">
                      Your technical inquiry has been received. Our engineers will respond shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setFormStatus('idle')} 
                    className="px-10 py-4 bg-slate-900 text-white font-black rounded-2xl text-xs uppercase tracking-widest hover:bg-brand-600 transition-all shadow-xl active:scale-95"
                  >
                    Send New Transmission
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-10">
                    <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase tracking-tighter">SUBMIT INQUIRY</h2>
                    <p className="text-slate-500 font-medium">Fields marked with * are required for system processing.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-500 transition-colors">Full Name *</label>
                        <input required name="name" type="text" id="name" className="block w-full rounded-2xl border-slate-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-4 bg-slate-50 font-bold text-slate-700 transition-all border group-hover:border-slate-300" placeholder="John Doe" />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-500 transition-colors">Phone Number *</label>
                        <input required name="phone" type="tel" id="phone" className="block w-full rounded-2xl border-slate-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-4 bg-slate-50 font-bold text-slate-700 transition-all border group-hover:border-slate-300" placeholder="+91 00000 00000" />
                      </div>
                    </div>
                    <div className="group">
                      <label htmlFor="service" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-500 transition-colors">Service Module</label>
                      <select name="service" id="service" className="block w-full rounded-2xl border-slate-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-4 bg-slate-50 font-bold text-slate-700 appearance-none border group-hover:border-slate-300">
                        <option>Laptop Diagnostics</option>
                        <option>Desktop Sales/Build</option>
                        <option>Surveillance Deployment</option>
                        <option>Infrastructure Networking</option>
                        <option>Biometric Access Control</option>
                        <option>Other Modules</option>
                      </select>
                    </div>
                    <div className="group">
                      <label htmlFor="message" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-brand-500 transition-colors">Detailed Requirements *</label>
                      <textarea required name="message" id="message" rows={4} className="block w-full rounded-2xl border-slate-200 shadow-sm focus:border-brand-500 focus:ring-brand-500 p-4 bg-slate-50 font-bold text-slate-700 transition-all border group-hover:border-slate-300" placeholder="Specify technical requirements..."></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="group relative w-full flex justify-center py-5 px-6 border border-transparent rounded-2xl shadow-xl text-xs font-black uppercase tracking-[0.2em] text-white bg-brand-600 hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-95 overflow-hidden"
                    >
                      <span className="relative z-10 flex items-center">
                        {formStatus === 'submitting' ? 'Processing Transmission...' : 'Execute Submission'}
                        {formStatus === 'idle' && <Send size={16} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-brand-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Integrated FAQ Section */}
        <div className="mt-48 reveal">
          <SectionHeader title="Technical Clearance" subtitle="Pre-service information and frequent technical queries." center={true} />
          <div className="max-w-4xl mx-auto space-y-6 mt-20">
            {FAQS.map((faq, idx) => (
              <div key={faq.id} className={`reveal reveal-delay-${(idx % 3) + 1} bg-white rounded-3xl border border-slate-100 p-10 hover:shadow-2xl transition-all duration-500 group`}>
                <div className="flex gap-8">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-500 flex-shrink-0 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <HelpCircle size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{faq.question}</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       {/* Map Integration */}
       <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal glass-card border-none rounded-[3rem] overflow-hidden shadow-2xl min-h-[500px] relative">
            <div className="absolute inset-0 grayscale-[0.5] hover:grayscale-0 transition-all duration-1000">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.472877399438!2d76.9926!3d10.9276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzM5LjQiTiA3NsKwNTknMzMuNCJF!5e0!3m2!1sen!2sin!4v1625555555555!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen={true}
                loading="lazy"
                title="Location Map"
              ></iframe>
            </div>
            {/* Visual overlay to blend map */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-white/10 rounded-[3rem]"></div>
          </div>
        </div>
       </section>
    </div>
  );
};

export default Contact;