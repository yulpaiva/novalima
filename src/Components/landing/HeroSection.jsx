import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlowButton from '../ui/GlowButton';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[#050A14]">
      {/* Hero Principal - 2 Colunas */}
      <div className="relative min-h-screen lg:min-h-[60vh] flex items-center py-6 lg:py-16">
        {/* Glow Effects */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#00F0FF]/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-[#FF8C00]/15 rounded-full blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-3 lg:mb-6">
                SEU CLIENTE ESTÁ<br />
                NO CELULAR AGORA.<br />
                <GradientText variant="cta">SUA EMPRESA<br />
                DEVERIA ESTAR LÁ.</GradientText>
              </h1>

              <p className="text-sm sm:text-base lg:text-xl text-gray-300 mb-4 lg:mb-8 leading-relaxed">
                Aceleradora de Negócios focada<br />
                em <span className="text-[#FF8C00] font-bold">ROI</span> e <span className="text-[#FF8C00] font-bold">Lucro Real</span>.
              </p>

              <GlowButton 
                href="https://wa.me/5531999999999" 
                size="lg" 
                className="text-sm lg:text-lg px-6 py-3 lg:px-8 lg:py-5 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] hover:from-[#FF4500] hover:to-[#FF8C00]"
              >
                QUERO VENDER MAIS
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </GlowButton>
            </motion.div>

            {/* Right - Engenharia Visual de Impacto */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-6 lg:mt-0"
            >
              <h2 className="text-lg sm:text-xl lg:text-4xl font-bold text-white text-center mb-3 lg:mb-8">
                ENGENHARIA VISUAL DE <GradientText variant="tech">IMPACTO</GradientText>
              </h2>

              <div className="grid grid-cols-2 gap-3 lg:gap-6">
                {/* Before */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-lg lg:rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-[#0A1525] rounded-lg lg:rounded-2xl overflow-hidden border border-white/10">
                    <div className="text-center py-1 lg:py-3 border-b border-white/10">
                      <span className="px-2 lg:px-4 py-0.5 lg:py-1.5 rounded-full border border-white/30 text-white text-[10px] lg:text-sm font-medium">
                        FOTO ORIGINAL
                      </span>
                    </div>
                    <div className="aspect-square p-2 lg:p-6 flex items-center justify-center bg-gradient-to-br from-[#0A1525] to-[#050A14]">
                      <img
                        src="/images/hamburguer1real.jpg"
                        alt="Foto Original - Hambúrguer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* After */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 lg:-inset-1 bg-gradient-to-r from-[#FF8C00]/50 to-[#FF4500]/50 rounded-lg lg:rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                  <div className="relative bg-[#0A1525] rounded-lg lg:rounded-2xl overflow-hidden border-2 border-[#FF8C00]/50">
                    <div className="text-center py-1 lg:py-3 border-b border-[#FF8C00]/30 bg-gradient-to-r from-[#FF8C00]/10 to-[#FF4500]/10">
                      <span className="px-2 lg:px-4 py-0.5 lg:py-1.5 rounded-full bg-white text-[#0A1525] text-[10px] lg:text-sm font-bold">
                        TRATAMENTO PUBLICITÁRIO
                      </span>
                    </div>
                    <div className="aspect-square p-2 lg:p-6 flex items-center justify-center bg-gradient-to-br from-[#0A1525] to-[#050A14]">
                      <img
                        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6940790c3069e39c15eb0846/32b201223_image.png"
                        alt="Tratamento Publicitário - Hambúrguer"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center text-[#FF8C00] text-xs lg:text-lg font-semibold mt-2 lg:mt-6 leading-tight lg:leading-normal"
              >
                Transformamos fotos comuns em anúncios de <span className="text-white">alto impacto</span> e <span className="text-white">desejo de compra</span>.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#00F0FF] rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}