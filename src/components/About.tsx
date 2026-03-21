import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              I’m a software engineer specializing in React and React Native, building mobile and web applications
              with a focus on performance and user experience.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              I enjoy turning ideas into real products and creating interfaces that feel fast, clean, and intuitive.
              I’m always looking to learn, build, and collaborate on meaningful projects.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <Layout className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Web Apps</h3>
                <p className="text-sm text-slate-500">React, Tailwind CSS</p>
              </div>
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <Smartphone className="text-purple-600 mb-4" size={32} />
                <h3 className="font-bold text-slate-900 mb-2">Mobile Apps</h3>
                <p className="text-sm text-slate-500">React Native, Zustand, Expo, Tailwind CSS</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="images/warren.jpg"
                alt="Austin Warren"
                className="object-cover w-full h-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 p-8 bg-white rounded-3xl shadow-xl border border-slate-100 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-blue-50 rounded-2xl">
                  <Code2 className="text-blue-600" size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                  <p className="text-xl font-bold text-slate-900">Software Engineer</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
