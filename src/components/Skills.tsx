import React from 'react';
import { motion } from 'motion/react';
import { Layout, Server, CodeXml, Wrench} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: <CodeXml className="text-emerald-600" size={24} />,
    skills: ['TypeScript', 'JavaScript', 'Python', 'HTML/CSS'],
  },
  {
    title: 'Frontend',
    icon: <Layout className="text-blue-600" size={24} />,
    skills: ['React', 'React Native', 'Next.js', 'Expo', 'Tailwind CSS', 'Zustand'],
  },
  {
    title: 'Backend',
    icon: <Server className="text-purple-600" size={24} />,
    skills: ['FastAPI', 'PostgreSQL', 'GraphQL', 'Supabase'],
  },
  {
    title: 'Tools & Technologies',
    icon: <Wrench className="text-emerald-600" size={24} />,
    skills: ['AWS', 'Terraform', 'Docker', 'Git', 'GitHub'],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            Technical <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            My technical toolkit for building modern web and mobile applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="p-4 bg-slate-50 rounded-3xl border border-slate-100 card-hover"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white rounded-2xl shadow-sm">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-slate-200 text-slate-600 text-sm font-medium rounded-2xl"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
