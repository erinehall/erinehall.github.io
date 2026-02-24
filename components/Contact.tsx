import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { contactData } from '../data/contact';
import ScrollReveal from './ScrollReveal';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xanbbkwg';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('message', formState.message);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ name: '', email: '', message: '' });
      } else {
        alert('There was a problem submitting your form. Please try again later.');
        setStatus('idle');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
      setStatus('idle');
    }
  };

  const methods = [
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      label: 'Email',
      val: contactData.email,
      link: `mailto:${contactData.email}`,
    },
    {
      icon: <Linkedin className="h-6 w-6 text-accent" />,
      label: 'LinkedIn',
      val: 'erinehall1',
      link: contactData.linkedin,
    },
    {
      icon: <Github className="h-6 w-6 text-accent" />,
      label: 'GitHub',
      val: 'erinehall',
      link: contactData.github,
    },
    {
      icon: <MapPin className="h-6 w-6 text-accent" />,
      label: 'Location',
      val: contactData.location,
      link: null,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-stone-50 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        <ScrollReveal className="text-center mb-16" baseDelay={100}>
          <h1 className="text-5xl xl:text-6xl font-serif font-bold text-primary">Let's Connect</h1>
        </ScrollReveal>

        <div className="space-y-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methods.map((m, i) => (
              <ScrollReveal key={i} baseDelay={i * 100}>
                <div className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow group h-full">
                  <div className="bg-accent/10 p-4 rounded-2xl mb-5 group-hover:bg-accent/20 transition-colors">
                    {m.icon}
                  </div>
                  <p className="text-[10px] xl:text-xs font-bold text-stone-400 uppercase tracking-widest mb-2">
                    {m.label}
                  </p>
                  {m.link ? (
                    <a
                      href={m.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm xl:text-base font-bold text-stone-900 hover:text-accent break-all transition-colors"
                    >
                      {m.val}
                    </a>
                  ) : (
                    <p className="text-sm xl:text-base font-bold text-stone-900">{m.val}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal baseDelay={400}>
            <div className="bg-white rounded-[2.5rem] border border-stone-100 p-8 sm:p-16 xl:p-20 shadow-xl shadow-stone-200/40 max-w-4xl mx-auto">
              <h2 className="text-3xl xl:text-4xl font-serif font-bold text-primary mb-12 text-center">
                Send a Message
              </h2>

              {status === 'success' ? (
                <div className="bg-stone-50 p-12 rounded-3xl text-center animate-scale-in">
                  <p className="font-serif font-bold text-3xl xl:text-4xl mb-4 text-accent">Message Sent!</p>
                  <p className="text-lg xl:text-xl font-light mb-8 text-stone-600">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-10 py-3 rounded-full border-2 border-accent text-accent font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col">
                      <label htmlFor="name" className="text-sm font-bold text-primary mb-3 flex justify-between">
                        Full Name
                        <span className="text-stone-300 text-[10px] uppercase tracking-tighter">Required</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                        className="w-full rounded-2xl border-stone-200 p-5 border bg-stone-50 outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/5 transition-all text-stone-800"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="email" className="text-sm font-bold text-primary mb-3 flex justify-between">
                        Email Address
                        <span className="text-stone-300 text-[10px] uppercase tracking-tighter">Required</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((p) => ({ ...p, email: e.target.value }))}
                        className="w-full rounded-2xl border-stone-200 p-5 border bg-stone-50 outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/5 transition-all text-stone-800"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-sm font-bold text-primary mb-3 flex justify-between">
                      Message
                      <span className="text-stone-300 text-[10px] uppercase tracking-tighter">Required</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formState.message}
                      onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                      className="w-full rounded-2xl border-stone-200 p-5 border bg-stone-50 outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/5 transition-all resize-none text-stone-800"
                      placeholder="Enter your message"
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="px-14 py-4 rounded-full text-white bg-primary hover:bg-accent disabled:opacity-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all font-bold uppercase tracking-widest flex items-center group"
                    >
                      {status === 'submitting' ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send
                            size={18}
                            className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;