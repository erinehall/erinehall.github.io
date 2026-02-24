
import React, { useState, useEffect } from 'react';
import { ExternalLink, X, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { PortfolioItem } from '../types';
import ScrollReveal from './ScrollReveal';

const Portfolio: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    if (selectedItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedItem]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-32">
        <ScrollReveal className="text-center mb-20" baseDelay={100}>
          <h1 className="text-5xl xl:text-6xl font-serif font-bold text-primary mb-6">Portfolio</h1>
          <p className="text-xl xl:text-2xl text-stone-600 max-w-3xl mx-auto font-light leading-relaxed">
            A collection of my academic research, technical publications, and engineering projects.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch">
          {portfolioData.map((item, idx) => (
            <ScrollReveal key={idx} baseDelay={idx * 150} className="h-full">
              <article 
                onClick={() => setSelectedItem(item)}
                className="flex flex-col bg-white rounded-3xl border border-stone-100 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 group cursor-pointer h-full"
              >
                <div className="h-64 xl:h-80 overflow-hidden bg-stone-200 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                  />
                </div>
                <div className="flex-1 p-8 xl:p-10 flex flex-col">
                  <div className="mb-6">
                    <h2 className="text-2xl xl:text-3xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {item.title}
                    </h2>
                    <h3 className="text-xs xl:text-sm font-bold text-accent uppercase tracking-widest">
                      {item.subtitle}
                    </h3>
                  </div>
                  <p className="text-stone-600 xl:text-lg text-sm mb-10 font-light leading-relaxed line-clamp-4">
                    {item.description}
                  </p>
                  
                  <div className="pt-6 border-t border-stone-100 mt-auto">
                    <span 
                      className="inline-flex items-center px-6 py-2.5 rounded-full bg-accent text-white font-bold text-sm hover:bg-primary transition-all transform hover:-translate-y-0.5 shadow-sm"
                    >
                      View Details <ArrowUpRight size={14} className="ml-1.5" />
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 md:p-10"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="absolute inset-0 bg-primary/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedItem(null)}
          ></div>
          
          <div className="relative bg-white w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-[2.5rem] shadow-2xl animate-scale-in flex flex-col">
            <button 
              onClick={() => setSelectedItem(null)}
              className="absolute top-8 right-8 p-3 bg-stone-100 hover:bg-stone-200 rounded-full text-primary transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>

            <div className="p-10 sm:p-14 lg:p-20">
              <div className="mb-12">
                <h3 className="text-sm font-bold text-accent uppercase tracking-[0.25em] mb-4">
                  {selectedItem.subtitle}
                </h3>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight">
                  {selectedItem.title}
                </h2>
              </div>

              <div className="space-y-6 mb-12">
                <h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest border-b border-stone-100 pb-2">Abstract</h4>
                <div className="prose prose-stone max-w-none">
                  <p className="text-stone-600 text-lg sm:text-xl font-light leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-10 border-t border-stone-100">
                {selectedItem.links.map((link, idx) => (
                  <a 
                    key={idx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-3.5 rounded-full bg-accent text-white hover:bg-primary transition-all font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <ExternalLink size={18} className="mr-3" />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
