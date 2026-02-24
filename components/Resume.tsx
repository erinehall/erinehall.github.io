
import React from 'react';
import { Briefcase, GraduationCap, Award, BookOpen, Shield, Users, Download } from 'lucide-react';
import { resumeData } from '../data/resume';
import ScrollReveal from './ScrollReveal';

const SectionHeader: React.FC<{ icon: React.ReactNode; title: string }> = ({ icon, title }) => (
  <div className="flex items-center mb-10">
    <div className="p-3 bg-accent/10 rounded-2xl mr-4">{icon}</div>
    <h2 className="text-3xl xl:text-4xl font-serif font-bold text-primary">{title}</h2>
  </div>
);

const Resume: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-32">
        <ScrollReveal className="text-center mb-20">
          <h1 className="text-5xl xl:text-6xl font-serif font-bold text-primary mb-10">Resume</h1>
          <a
            href="/Resume.pdf"
            download="Erin_Hall_Resume.pdf"
            className="inline-flex items-center px-8 py-3.5 border border-stone-300 rounded-full text-stone-700 bg-white hover:bg-stone-50 hover:border-stone-400 hover:shadow-sm transition-all font-bold"
          >
            <Download size={18} className="mr-2 text-accent" /> Download PDF
          </a>
        </ScrollReveal>

        <div className="space-y-24">
          <section>
            <ScrollReveal>
              <SectionHeader icon={<Briefcase className="h-6 w-6 text-accent" />} title="Professional Experience" />
            </ScrollReveal>
            <div className="space-y-16 border-l border-stone-300 ml-6 pl-10 relative">
              {resumeData.experience.map((job, idx) => (
                <div key={idx} className="relative">
                  <div className="absolute -left-[49px] top-1.5 h-4 w-4 rounded-full bg-accent ring-4 ring-stone-50"></div>
                  <ScrollReveal baseDelay={idx * 100}>
                    <div className="mb-8">
                      <h3 className="text-2xl xl:text-3xl font-serif font-bold text-primary">{job.title}</h3>
                      <div className="flex flex-wrap justify-between text-stone-600 mt-1 font-semibold text-lg xl:text-xl">
                        <span>{job.company}</span>
                        <span className="text-sm font-mono text-accent uppercase tracking-wide">{job.date}</span>
                      </div>
                    </div>
                  </ScrollReveal>

                  <div className="grid gap-8 grid-cols-1 xl:grid-cols-2">
                    {job.roles.map((role, ri) => (
                      <ScrollReveal key={ri} baseDelay={(idx + ri) * 100}>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 h-full flex flex-col">
                          <h4 className="font-bold text-stone-800 flex items-center mb-4 text-lg xl:text-xl">
                            {role.heading}
                          </h4>
                          <ul className="list-disc ml-4 space-y-3 text-stone-600 text-base xl:text-lg mb-8 flex-1">
                            {role.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                          </ul>
                          <div className="flex flex-wrap gap-2 pt-6 border-t border-stone-50">
                            {role.skills.map(s => (
                              <span key={s} className="px-3 py-1 bg-stone-50 text-stone-500 text-xs rounded-full font-medium border border-stone-100">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <ScrollReveal>
              <SectionHeader icon={<GraduationCap className="h-6 w-6 text-accent" />} title="Education" />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resumeData.education.map((e, i) => (
                <ScrollReveal key={i} baseDelay={i * 150}>
                  <div className="bg-white p-10 rounded-3xl border border-stone-100 shadow-sm h-full">
                    <h3 className="font-bold text-xl xl:text-2xl text-stone-800">{e.school}</h3>
                    <p className="text-accent font-medium text-lg mt-1">{e.degree}</p>
                    <p className="text-stone-400 text-xs mt-1 mb-6 uppercase tracking-widest">{e.date}</p>
                    <ul className="space-y-3 mb-6">
                      {e.details.map((d, di) => (
                        <li key={di} className="text-base xl:text-lg text-stone-600">
                          <span className="mr-2 text-accent/60">•</span>{d}
                        </li>
                      ))}
                    </ul>
                    {e.thesis && (
                      <a href={e.thesis.url} target="_blank" className="text-sm xl:text-base text-stone-500 hover:text-accent italic block mt-4 border-t border-stone-50 pt-4">
                        Thesis: {e.thesis.title}
                      </a>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <section>
            <ScrollReveal>
              <SectionHeader icon={<Users className="h-6 w-6 text-accent" />} title="Technical Skills" />
              <div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm flex flex-wrap gap-3">
                {resumeData.skills.map((s, idx) => (
                  <span key={s} className="px-5 py-2.5 bg-stone-50 text-stone-600 text-sm xl:text-base font-medium rounded-full border border-stone-100 hover:border-accent hover:text-accent transition-all cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </section>

          <section>
            <ScrollReveal>
              <SectionHeader icon={<BookOpen className="h-6 w-6 text-accent" />} title="Publications" />
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resumeData.publications.map((p, i) => (
                <ScrollReveal key={i} baseDelay={i * 150}>
                  <div className="bg-white p-10 rounded-3xl border border-stone-100 group shadow-sm h-full">
                    <h3 className="text-xl xl:text-2xl font-serif font-bold text-stone-800 mb-2 group-hover:text-accent transition-colors">{p.title}</h3>
                    <p className="text-base xl:text-lg text-accent font-medium mb-4">{p.conference}</p>
                    <div className="text-sm xl:text-base text-stone-500 flex justify-between items-center mt-6 border-t border-stone-50 pt-6">
                      <span className="font-medium">{p.date}</span>
                      <a href={p.link} target="_blank" className="text-accent hover:text-primary font-bold flex items-center">
                        View DOI <span className="ml-2">→</span>
                      </a>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <ScrollReveal className="h-full">
              <div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm h-full">
                <div className="flex items-center mb-8">
                  <Award className="h-6 w-6 text-accent mr-3" />
                  <h2 className="text-2xl xl:text-3xl font-serif font-bold text-primary">Certifications</h2>
                </div>
                <ul className="space-y-8">
                  {resumeData.certifications.map((c, i) => (
                    <li key={i} className="border-b border-stone-50 last:border-0 pb-6 last:pb-0">
                      <h4 className="text-lg font-bold text-stone-800">{c.name}</h4>
                      <div className="flex justify-between text-sm text-stone-500 mt-2">
                        <span>{c.organization}</span>
                        <span className="font-mono text-accent">{c.date}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal className="h-full" baseDelay={150}>
              <div className="bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-sm h-full">
                <div className="flex items-center mb-8">
                  <Shield className="h-6 w-6 text-accent mr-3" />
                  <h2 className="text-2xl xl:text-3xl font-serif font-bold text-primary">Clearances</h2>
                </div>
                <div className="space-y-5">
                  {resumeData.clearances.map((c, i) => (
                    <div key={i} className="flex items-center text-stone-700 text-lg font-medium p-4 bg-stone-50 rounded-2xl border border-stone-100">
                      <div className="w-2.5 h-2.5 bg-accent rounded-full mr-4 shadow-sm shadow-accent/40"></div>
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;