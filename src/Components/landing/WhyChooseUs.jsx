import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Shield, 
  LineChart, 
  HeartHandshake,
  Lightbulb,
  Clock
} from 'lucide-react';
import GradientText from '../ui/GradientText';

const features = [
  {
    icon: Rocket,
    title: 'Resultados Rápidos',
    description: 'Metodologia ágil que entrega resultados mensuráveis desde o primeiro mês.',
  },
  {
    icon: Shield,
    title: 'Transparência Total',
    description: 'Acesso completo aos dados e relatórios das suas campanhas.',
  },
  {
    icon: LineChart,
    title: 'Baseado em Dados',
    description: 'Decisões estratégicas fundamentadas em análise de dados e IA.',
  },
  {
    icon: HeartHandshake,
    title: 'Atendimento Humanizado',
    description: 'Equipe dedicada que entende seu negócio e suas necessidades.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação Constante',
    description: 'Sempre à frente das tendências do marketing digital.',
  },
  {
    icon: Clock,
    title: 'Suporte Ágil',
    description: 'Resposta rápida e suporte contínuo para seu sucesso.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="diferenciais" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1525] to-[#050A14]" />
      
      {/* Glow Effects */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00F0FF]/5 rounded-full blur-[150px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#FF8C00]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#00F0FF]/10 text-[#00F0FF] text-sm font-medium mb-4">
            Por Que Nos Escolher
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nos torna <GradientText variant="tech">Diferentes</GradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Combinamos expertise, tecnologia e paixão para entregar resultados extraordinários.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-500">
                {/* Icon Container */}
                <div className="relative mb-6 inline-block">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#00F0FF]/10 to-[#0075FF]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-[#00F0FF]" />
                  </div>
                  {/* Glow on Hover */}
                  <div className="absolute inset-0 bg-[#00F0FF]/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#00F0FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}