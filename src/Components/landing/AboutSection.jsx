import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Clock } from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlowButton from '../ui/GlowButton';

const highlights = [
  'Equipe especializada em marketing digital',
  'Metodologias baseadas em dados e IA',
  'Relatórios transparentes e detalhados',
  'Suporte dedicado ao seu sucesso',
];

const stats = [
  { icon: Award, value: '5+', label: 'Anos de Experiência' },
  { icon: Users, value: '150+', label: 'Clientes Atendidos' },
  { icon: Clock, value: '24/7', label: 'Suporte Disponível' },
];

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#0A1525]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF8C00]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#00F0FF]/20 to-[#FF8C00]/20 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10">
                <img
                  src="/images/AboutSection.jpg"
                  alt="Equipe Nova Lima Marketing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050A14] via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 max-w-xs"
            >
              <div className="bg-[#050A14]/90 backdrop-blur-xl rounded-2xl border border-white/10 p-6 shadow-2xl">
                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="text-center">
                      <stat.icon className="w-6 h-6 text-[#00F0FF] mx-auto mb-2" />
                      <div className="text-xl font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-[#FF8C00]/10 text-[#FF8C00] text-sm font-medium mb-4">
              Sobre Nós
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Sua parceira em <GradientText variant="cta">Transformação Digital</GradientText>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              A Nova Lima Marketing Digital nasceu da paixão por resultados. Somos uma agência 
              boutique especializada em estratégias de marketing que realmente funcionam, 
              combinando criatividade humana com o poder da inteligência artificial.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              Nossa missão é transformar a presença digital de empresas de todos os tamanhos, 
              entregando soluções personalizadas que geram vendas, reconhecimento e crescimento sustentável.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#0075FF] flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <GlowButton href="https://wa.me/5531990687050">
              Conhecer mais sobre nós
            </GlowButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}