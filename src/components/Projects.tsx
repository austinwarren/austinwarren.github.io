import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Smartphone, Music, Computer, Monitor } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  icon: React.ReactNode;
  image: string;
  github?: string;
  live?: string;
}

const projects: Project[] = [
  {
    title: 'Doyo',
    description: 'A social mobile app where real-world experiences become badges and stories. Discover experiences, unlock badges, share stories, and connect through groups.',
    tech: ['React Native', 'Expo', 'Typescript', 'AWS', 'Terraform', 'Zustand', 'Tailwind CSS'],
    features: ['Interactive Map', 'Badges and Stories', 'Public Feeds', 'Groups', 'Search & Discovery', 'Notifications'],
    icon: <Smartphone className="text-blue-600" size={32} />,
    image: '/images/doyo.png',
    //github: 'https://github.com',
    live: 'https://doyosocial.com',
  },
  {
    title: 'Satin Love Orchestra',
    description: 'Designed, developed, and deployed a responsive website for a professional band, creating a central platform for showcasing performances, promoting upcoming events, and handling booking inquiries.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Formspree'],
    features: ['Upcoming Events', 'Media player', 'Booking Inquiries', 'Photo Gallery', 'Band History', 'Setlists & Performances'],
    icon: <Monitor className="text-purple-600" size={32} />,
    image: 'images/SLO.png',
    github: 'https://github.com/austinwarren/SLO-site',
    live: 'https://satinlove.com',
  },
  {
    title: 'RN Patient Advocacy - In Development',
    description: 'Designing and developing a membership-based platform for an RN patient advocacy business, including user authentication, subscription payments, and protected premium video content.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Stripe'],
    features: ['User Authentication', 'Membership Subscriptions', 'Coaching Booking', 'Protected Video Content', 'Member Accounts'],
    icon: <Monitor className="text-purple-600" size={32} />,
    image: 'images/rnAdvocate.png',
    //github: 'https://github.com/austinwarren/SLO-site',
    //live: 'https://satinlove.com',
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            A selection of my recent work showcasing full-stack development, mobile applications, and user-focused product design.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 card-hover"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                   <div className="flex gap-4">
                      {project.github && (
                        <a href={project.github} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all">
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/40 transition-all">
                          <ExternalLink size={20} />
                        </a>
                      )}
                   </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white border border-slate-200 text-slate-600 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {project.features.map((f) => (
                      <li key={f} className="text-sm text-slate-500 flex items-center gap-2">
                        <div className="w-1 h-1 bg-blue-600 rounded-full" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
