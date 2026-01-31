import React from 'react';
import SectionHeader from '../components/SectionHeader';

const Gallery: React.FC = () => {
  // Using picsum with different seeds to simulate different gallery images
  const images = [
    { id: 1, title: 'Shop Interior & Reception', seed: 'tech1' },
    { id: 2, title: 'CCTV Setup at Guru Bakery', seed: 'cctv' },
    { id: 3, title: 'Networking Rack Assembly', seed: 'server' },
    { id: 4, title: 'Custom Gaming PC Build', seed: 'pc' },
    { id: 5, title: 'Team at Work', seed: 'work' },
    { id: 6, title: 'Biometric Installation', seed: 'door' },
    { id: 7, title: 'Laptop Chip-Level Lab', seed: 'chip' },
    { id: 8, title: 'School Computer Lab Setup', seed: 'lab' },
    { id: 9, title: 'Cable Management Project', seed: 'cable' },
  ];

  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Project Gallery" subtitle="A glimpse into our recent projects, facilities, and the quality of our workmanship." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img.id} className="group relative overflow-hidden rounded-lg shadow-md aspect-w-4 aspect-h-3 h-64 bg-slate-100 cursor-pointer">
              <img
                src={`https://picsum.photos/seed/${img.seed}/600/400`}
                alt={img.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-semibold p-4 text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;