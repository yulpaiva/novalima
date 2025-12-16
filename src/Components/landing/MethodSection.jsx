import React from 'react';
import { motion } from 'framer-motion';
import { Search, Target, TrendingUp, Rocket } from 'lucide-react';
import GradientText from '../ui/GradientText';

const steps = [
  {
    number: '1',
    icon: Search,
    title: 'IMERSÃO',
    description: 'Análise profunda do negócio, mercado, público e concorrentes. Coleta de dados e entendimento total do cenário.',
  },
  {
    number: '2',
    icon: Target,
    title: 'TESTES',
    description: 'Criação de hipóteses, desenvolvimento de MVPs e experimentação rápida para validar estratégias de marketing.',
  },
  {
    number: '3',
    icon: TrendingUp,
    title: 'OTIMIZAÇÃO',
    description: 'Análise de performance, refinamento de campanhas, e melhoria contínua com foco em maximizar ROI e conversão.',
  },
  {
    number: '4',
    icon: Rocket,
    title: 'ESCALA',
    description: 'Ampliação dos resultados validados, aumento de investimento e expansão sustentável da operação.',
  },
];

export default function MethodSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1525] to-[#050A14]" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00F0FF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            'O MÉTODO <GradientText variant="tech">NOVA LIMA</GradientText>'
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Uma metodologia comprovada em 4 etapas para acelerar seu crescimento
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative h-full rounded-xl sm:rounded-2xl border-2 border-[#00F0FF]/50 bg-gradient-to-br from-[#00F0FF]/5 to-transparent overflow-hidden">
                {/* Icon Section */}
                <div className="relative p-4 sm:p-8 bg-[#00F0FF]/10 border-b-2 border-[#00F0FF]/30">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#00F0FF]/30 to-[#0075FF]/30 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-[#00F0FF]" />
                  </div>
                  <div className="absolute inset-0 bg-[#00F0FF]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-4 sm:p-6 bg-white/5">
                  <div className="text-4xl sm:text-5xl font-bold text-[#00F0FF] mb-2">{step.number}.</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-xs sm:text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connecting Line (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-[#00F0FF] to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}