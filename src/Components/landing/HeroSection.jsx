import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, TrendingUp, Target } from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlowButton from '../ui/GlowButton';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#0A1525]" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-[128px] animate-pulse" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center max-w-5xl mx-auto">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative inline-block">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF8C00] via-[#FF4500] to-[#00F0FF] p-[3px]">
                <div className="w-full h-full rounded-2xl bg-[#050A14] flex items-center justify-center">
                  <Zap className="w-10 h-10 text-[#00F0FF]" />
                </div>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-[#FF8C00] to-[#00F0FF] rounded-2xl blur-xl opacity-40" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 px-4"
          >
            VAMOS ESCALAR O SEU <br className="hidden sm:block" />
            <GradientText variant="cta">NEGÓCIO</GradientText>?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-[#00F0FF] mb-4 font-medium px-4"
          >
            Nova Lima Marketing Digital
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            Muito além do impulsionar. <span className="text-white font-bold">Foco em ROI e LUCRO real</span> através de 
            <span className="text-[#00F0FF]"> estratégias baseadas em dados</span> e <span className="text-[#FF8C00] font-semibold">performance comprovada</span>.
          </motion.p>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-16 px-4"
          >
            <GlowButton href="https://wa.me/5531999999999" size="lg" className="text-base sm:text-lg md:text-xl px-8 sm:px-12 py-4 sm:py-6">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Agendar Reunião Estratégica</span>
              <span className="sm:hidden">Agendar Reunião</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </GlowButton>
            <p className="text-gray-500 text-xs sm:text-sm mt-4">
              Resposta em até 5 minutos • Sem compromisso
            </p>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto px-4"
          >
            {[
              { icon: TrendingUp, text: 'Inteligência de Dados' },
              { icon: Target, text: 'Estratégia de Vendas' },
              { icon: Zap, text: 'Performance Real' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#00F0FF]/20 to-[#0075FF]/20 flex items-center justify-center mb-3 sm:mb-4">
                  <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#00F0FF]" />
                </div>
                <p className="text-white font-medium text-xs sm:text-base text-center">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#00F0FF] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}