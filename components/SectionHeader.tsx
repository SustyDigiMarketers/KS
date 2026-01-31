import React from 'react';

interface Props {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionHeader: React.FC<Props> = ({ title, subtitle, center = true }) => {
  return (
    <div className={`mb-16 ${center ? 'text-center' : 'text-left'} reveal`}>
      <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6 inline-block relative">
        {title}
        <div className={`absolute -bottom-2 ${center ? 'left-1/2 -translate-x-1/2' : 'left-0'} w-24 h-1.5 bg-gradient-to-r from-brand-600 to-brand-400 rounded-full`}></div>
      </h2>
      {subtitle && (
        <p className="text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mt-4">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;