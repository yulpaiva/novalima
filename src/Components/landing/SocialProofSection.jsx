import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '+340%',
    label: 'Crescimento Médio',
    color: 'from-[#00F0FF] to-[#0075FF]',
  },
  {
    icon: Users,
    value: '150+',
    label: 'Clientes Ativos',
    color: 'from-[#FF8C00] to-[#FF4500]',
  },
  {
    icon: Award,
    value: '98%',
    label: 'Taxa de Satisfação',
    color: 'from-[#00F0FF] to-[#0075FF]',
  },
  {
    icon: Target,
    value: '12x',
    label: 'ROI Médio',
    color: 'from-[#FF8C00] to-[#FF4500]',
  },
];

export default function SocialProofSection() {
  return (
    <section className="relative py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1525] to-[#050A14]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative inline-block mb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} bg-opacity-20 flex items-center justify-center`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`absolute -inset-2 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-30`} />
              </div>
              <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}