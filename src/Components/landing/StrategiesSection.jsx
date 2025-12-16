import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Package, Camera } from 'lucide-react';
import GradientText from '../ui/GradientText';

const strategies = [
  {
    title: 'ESTRATÉGIA: MODA E VAREJO',
    icon: ShoppingBag,
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80',
    items: [
      'Carrossel de Produtos',
      'Remarketing (Perseguição)',
      'Público de Compradores',
      'Recuperação de Vendas',
    ],
  },
  {
    title: 'ESTRATÉGIA: DELIVERY',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80',
    items: [
      'Anúncios no Raio de 3km',
      'Ativação nos Horários de Fome',
      'Botão Direto para WhatsApp',
      'Custo por Pedido Reduzido',
    ],
  },
];

export default function StrategiesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1525] to-[#050A14]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Estratégias <GradientText variant="cta">Personalizadas</GradientText>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Abordagens específicas para cada tipo de negócio
          </p>
        </motion.div>

        {/* Strategies Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#FF8C00]/50 bg-gradient-to-br from-white/5 to-transparent">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 border-4 border-[#00F0FF] rounded-lg m-4" />
                  <img
                    src={strategy.image}
                    alt={strategy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF8C00] to-[#FF4500] flex items-center justify-center">
                      <strategy.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#FF8C00]">{strategy.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {strategy.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-300">
                        <div className="w-2 h-2 rounded-full bg-[#00F0FF]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Production Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#0075FF] flex items-center justify-center">
                <Camera className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                PRODUÇÃO DE <GradientText variant="tech">MODA DIGITAL</GradientText>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Before/After */}
              <div>
                <div className="text-center mb-3">
                  <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                    PEÇA NO CABIDE
                  </span>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border border-white/20">
                  <img
                    src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80"
                    alt="Peça no cabide"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="text-center mb-3">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white text-sm font-medium">
                    EDITORIAL HIGH-END
                  </span>
                </div>
                <div className="aspect-square rounded-xl overflow-hidden border-2 border-[#FF8C00]">
                  <img
                    src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&q=80"
                    alt="Editorial"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-center text-[#FF8C00] text-lg font-medium mt-8">
              Sua marca com qualidade de revista, sem custos de estúdio.
            </p>
          </div>
        </motion.div>

        {/* Visual Engineering */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            ENGENHARIA VISUAL DE <GradientText variant="tech">IMPACTO</GradientText>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <div className="text-center mb-3">
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                  FOTO ORIGINAL
                </span>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden border border-white/20">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80"
                  alt="Foto original"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div>
              <div className="text-center mb-3">
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#0075FF] text-white text-sm font-medium">
                  TRATAMENTO PUBLICITÁRIO
                </span>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden border-2 border-[#00F0FF]">
                <img
                  src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&q=80"
                  alt="Tratamento"
                  className="w-full h-full object-cover brightness-110 contrast-110"
                />
              </div>
            </div>
          </div>

          <p className="text-center text-[#00F0FF] text-lg font-medium mt-8">
            Transformamos fotos comuns em anúncios de desejo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}