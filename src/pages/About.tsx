import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { resumeData } from '../data/resume';
import { portfolioData } from '../data/portfolio';
import { contactData } from '../data/contact';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  const latestProjects = portfolioData.slice(0, 3);
  const [imgError, setImgError] = useState(false);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-stone-50">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-32 relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 text-center lg:text-left order-1">
              <ScrollReveal baseDelay={100}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold font-serif tracking-tight text-primary mb-2">
                  Erin <span className="text-accent">Hall</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-medium font-serif text-stone-600 mb-6">
                  Intermediate Software Engineer
                </h2>
                <h3 className="text-lg xl:text-xl text-stone-500 font-light mb-10 tracking-wide uppercase">
                  The MITRE Corporation
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <NavLink
                    to="/portfolio"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-full shadow-lg text-white bg-accent hover:bg-stone-800 transition-all transform hover:-translate-y-1 font-bold w-full sm:w-60"
                  >
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                  <NavLink
                    to="/resume"
                    className="inline-flex items-center justify-center px-8 py-3.5 border border-stone-300 rounded-full text-stone-700 bg-white hover:bg-stone-50 transition-all font-bold w-full sm:w-60"
                  >
                    See Resume
                  </NavLink>
                </div>
              </ScrollReveal>
            </div>

            {/* Image Container */}
            <div className="lg:col-span-5 flex justify-center order-2 mt-20 lg:mt-0">
              <ScrollReveal
                baseDelay={300}
                className="relative w-56 h-56 sm:w-80 sm:h-80 lg:w-[26rem] lg:h-[26rem] xl:w-[28rem] xl:h-[28rem]"
              >
                <div
                  className="absolute inset-[-20%] rounded-full opacity-40 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(27, 67, 50, 0.4) 0%, rgba(27, 67, 50, 0) 70%)',
                    willChange: 'transform',
                    transform: 'translateZ(0) translateY(16px) scale(1.1)',
                  }}
                ></div>

                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-stone-100">
                  {!imgError ? (
                    <img
                      src={contactData.profileImage}
                      alt="Erin Hall"
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-stone-200 text-stone-500 p-6 text-center">
                      <div className="text-4xl mb-2">📷</div>
                      <p className="text-sm font-medium">Image not found</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full py-16 bg-white border-y border-stone-100">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-32">
          <ScrollReveal>
            <p className="text-center text-xs font-bold text-accent uppercase tracking-[0.2em] mb-8">
              Skills
            </p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
              {resumeData.aboutPageSkills.map((s) => (
                <span
                  key={s}
                  className="text-lg xl:text-xl font-serif font-semibold text-stone-600 hover:text-accent transition-colors cursor-default"
                >
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="w-full py-24 bg-stone-50">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-32">
          <ScrollReveal className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl xl:text-5xl font-serif font-bold text-primary">
                Featured Work
              </h2>
            </div>
            <NavLink
              to="/portfolio"
              className="hidden sm:flex items-center text-accent hover:text-primary font-bold group"
            >
              View All{' '}
              <ChevronRight
                size={16}
                className="ml-1 group-hover:translate-x-1 transition-transform"
              />
            </NavLink>
          </ScrollReveal>

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 items-stretch">
            {latestProjects.map((p, i) => (
              <ScrollReveal key={i} baseDelay={i * 150} className="h-full">
                <div className="group relative h-full bg-white overflow-hidden rounded-3xl hover:shadow-2xl transition-all border border-stone-100 flex flex-col">
                  <div className="h-72 overflow-hidden relative flex-shrink-0">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col">
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mb-5">
                      {p.subtitle}
                    </p>
                    <p className="text-stone-600 line-clamp-3 leading-relaxed font-light mb-8">
                      {p.description}
                    </p>
                    <div className="mt-auto pt-6 border-t border-stone-50">
                      <span className="text-primary font-bold text-sm flex items-center group-hover:translate-x-2 transition-transform">
                        Read more <ArrowRight size={16} className="ml-2 text-accent" />
                      </span>
                    </div>
                  </div>
                  <NavLink to="/portfolio" className="absolute inset-0">
                    <span className="sr-only">View {p.title}</span>
                  </NavLink>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;