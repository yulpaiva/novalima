import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Target, LineChart, Palette, FileText, BarChart3 } from 'lucide-react';
import GradientText from '../ui/GradientText';

const solutions = [
  {
    icon: Target,
    title: 'Gestão de Tráfego (Meta Ads)',
    description: 'Campanhas otimizadas no Facebook e Instagram com foco total em conversão e ROI.',
  },
  {
    icon: LineChart,
    title: 'Estratégia de Funil de Vendas',
    description: 'Construção de jornadas de compra estratégicas que maximizam suas vendas.',
  },
  {
    icon: BarChart3,
    title: 'Web Analytics e Pixel',
    description: 'Configuração avançada de rastreamento para decisões baseadas em dados reais.',
  },
  {
    icon: Palette,
    title: 'Consultoria de Criativos',
    description: 'Estratégia visual de alto impacto que para o scroll e converte.',
  },
  {
    icon: FileText,
    title: 'Relatórios de Performance',
    description: 'Acompanhamento transparente com métricas que realmente importam.',
  },
];

export default function SolutionsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#0A1525]" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8C00]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">NOSSAS </span>
            <GradientText variant="tech">SOLUÇÕES</GradientText>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tudo que você precisa para dominar o marketing digital
          </p>
        </motion.div>

        {/* Solutions List */}
        <div className="max-w-4xl mx-auto space-y-6">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-transparent border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-[#00F0FF]/20 to-[#0075FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-8 h-8 text-[#00F0FF]" strokeWidth={2.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#00F0FF] transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}