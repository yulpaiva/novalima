import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, TrendingUp } from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlowButton from '../ui/GlowButton';

const plans = [
  {
    name: 'Plano START',
    price: '600',
    period: 'mês',
    description: 'Ideal para começar com gestão profissional',
    features: [
      'Gestão de Facebook & Instagram Ads',
      '1 Reunião Mensal',
      'Relatório Simplificado',
    ],
    cta: 'Começar Agora',
    popular: false,
    gradient: 'from-[#00F0FF] to-[#0075FF]',
  },
  {
    name: 'Plano GROWTH',
    price: '1000',
    period: 'mês',
    description: 'Para escalar com máxima performance',
    features: [
      'Gestão Completa + Remarketing',
      'Configuração Avançada de Pixel',
      'Consultoria de Criativos',
      'Relatórios de Performance',
      'Suporte Prioritário',
    ],
    cta: 'Escolher Growth',
    popular: true,
    gradient: 'from-[#FF8C00] to-[#FF4500]',
  },
];

export default function PricingSection() {
  return (
    <section id="planos" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#0A1525]" />
      
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#FF8C00]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            ESCOLHA SEU <GradientText variant="cta">PLANO</GradientText>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Investimento estratégico com retorno garantido
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto px-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-6 py-2 rounded-full bg-gradient-to-r from-[#FF8C00] to-[#FF4500] text-white text-sm font-bold shadow-lg shadow-[#FF8C00]/50">
                    MAIS ESCOLHIDO
                  </div>
                </div>
              )}

              {/* Card */}
              <div className={`relative h-full rounded-2xl border-2 ${
                plan.popular ? 'border-[#FF8C00]' : 'border-[#00F0FF]'
              } bg-gradient-to-br from-white/5 to-transparent p-8 sm:p-10`}>
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`} />

                <div className="relative">
                  {/* Plan Name */}
                  <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${plan.gradient} bg-opacity-10 mb-6`}>
                    {plan.popular ? (
                      <TrendingUp className="w-5 h-5 text-[#FF8C00]" />
                    ) : (
                      <Zap className="w-5 h-5 text-[#00F0FF]" />
                    )}
                    <span className={`font-bold text-lg ${
                      plan.popular ? 'text-[#FF8C00]' : 'text-[#00F0FF]'
                    }`}>
                      {plan.name}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl sm:text-6xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                        R$ {plan.price}
                      </span>
                      <span className="text-gray-400">/{plan.period}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">(Gestão)</p>
                    <p className="text-xs text-gray-500">Valor pago ao Facebook não incluso</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-8">{plan.description}</p>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mt-0.5`}>
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {plan.popular ? (
                    <GlowButton href="https://wa.me/5531990687050" className="w-full">
                      {plan.cta}
                    </GlowButton>
                  ) : (
                    <a
                      href="https://wa.me/5531990687050"
                      className={`block w-full px-8 py-4 text-center font-semibold rounded-xl border-2 ${
                        plan.popular ? 'border-[#FF8C00]' : 'border-[#00F0FF]'
                      } text-white hover:bg-white/5 transition-all duration-300`}
                    >
                      {plan.cta}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-8">
            * Planos personalizados disponíveis sob consulta • Sem taxa de setup
          </p>
          
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-r from-[#00F0FF]/10 to-[#FF8C00]/10 border border-white/10">
            <div className="text-4xl">🎯</div>
            <div className="text-center sm:text-left">
              <p className="text-white font-semibold text-lg mb-1">Garantia de Resultados</p>
              <p className="text-gray-400 text-sm">Acompanhamento mensal com relatórios transparentes e métricas reais</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}