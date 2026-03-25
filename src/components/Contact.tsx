import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    setStatus('sending');

    // Using your verified ID as a fallback to ensure it works immediately
    const formspreeId = import.meta.env.VITE_FORMSPREE_ID || "xvzwngql";
    console.log('Attempting to send to Formspree ID:', formspreeId);

    if (!formspreeId || formspreeId === 'undefined') {
      console.error('Formspree ID is missing');
      setStatus('error');
      return;
    }

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      console.log('Formspree Response Status:', response.status);

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Formspree Error Response:', errorData);
        setStatus('error');
        // If it's a 404, the ID might be wrong
        if (response.status === 404) {
          console.error('Form ID not found. Please verify "xvzwngql" is correct.');
        }
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.error('Formspree Request Timed Out');
      } else {
        console.error('Formspree Error:', error);
      }
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Have a project in mind or just want to say hello? I'm always open 
              to discussing new opportunities and creative ideas.
            </p>

            <div className="space-y-6">
              <a 
                href="mailto:austingw2020@gmail.com" 
                className="flex items-start sm:items-center gap-4 sm:gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                  <Mail className="text-blue-600" size={32} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 break-words">contact@austingwarren.com</p>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/austin-warren-081ab4211/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start sm:items-center gap-4 sm:gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="p-4 bg-purple-50 rounded-2xl group-hover:bg-purple-100 transition-colors">
                  <Linkedin className="text-purple-600" size={32} />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">LinkedIn</p>
                  <p className="text-lg sm:text-xl font-bold text-slate-900 break-words">linkedin.com/in/austin-warren</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl relative overflow-hidden"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-widest">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 uppercase tracking-widest">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase tracking-widest">Message</label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  rows={4}
                  className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                />
              </div>
              
              <div className="relative">
                <motion.button
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                  disabled={status !== 'idle'}
                  className={`w-full py-5 text-white rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                    status === 'sending' ? 'bg-slate-400 cursor-not-allowed' : 
                    status === 'success' ? 'bg-emerald-500 shadow-emerald-200' :
                    status === 'error' ? 'bg-rose-500 shadow-rose-200' :
                    'bg-blue-600 shadow-blue-200 hover:bg-blue-700'
                  }`}
                >
                  {status === 'idle' && (
                    <>Send Message <Send size={20} /></>
                  )}
                  {status === 'sending' && (
                    <>Sending... <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /></>
                  )}
                  {status === 'success' && (
                    <>Message Sent! <CheckCircle2 size={20} /></>
                  )}
                  {status === 'error' && (
                    <>Failed to Send <AlertCircle size={20} /></>
                  )}
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -bottom-8 left-0 right-0 text-center text-emerald-600 text-sm font-medium"
                    >
                      Thanks for reaching out! I'll get back to you soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="absolute -bottom-8 left-0 right-0 text-center text-rose-600 text-sm font-medium"
                    >
                      Check your Formspree dashboard to ensure the form is "Active" and your email is confirmed.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
