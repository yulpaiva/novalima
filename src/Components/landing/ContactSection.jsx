import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import GradientText from '../ui/GradientText';
import GlowButton from '../ui/GlowButton';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '(31) 99999-9999',
    href: 'tel:+5531999999999',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@novalima.digital',
    href: 'mailto:contato@novalima.digital',
  },
  {
    icon: MapPin,
    label: 'Localização',
    value: 'Nova Lima, MG',
    href: '#',
  },
];

export default function ContactSection() {
  return (
    <section id="contato" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1525] to-[#050A14]" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF8C00]/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/10 rounded-full blur-[150px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF8C00]/10 text-[#FF8C00] text-sm font-medium mb-6">
            Vamos Conversar
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Pronto para <GradientText variant="cta">Escalar</GradientText>?
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
            Agende uma reunião estratégica <span className="text-white font-semibold">gratuita</span> e descubra como podemos 
            transformar seu investimento em marketing em <span className="text-[#FF8C00] font-semibold">lucro real</span> e crescimento sustentável.
          </p>

          {/* WhatsApp CTA Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative max-w-2xl mx-auto mb-12 sm:mb-16"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-[#FF8C00]/30 to-[#FF4500]/30 rounded-3xl blur-2xl" />
            <div className="relative p-6 sm:p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border-2 border-[#FF8C00]/50">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center shadow-lg shadow-[#25D366]/50">
                  <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">Agende sua Reunião Estratégica</h3>
                  <p className="text-[#00F0FF] font-medium text-sm sm:text-base">⚡ Resposta em até 5 minutos</p>
                </div>
              </div>
              
              <GlowButton href="https://wa.me/5531999999999" className="w-full text-base sm:text-lg md:text-xl px-8 sm:px-10 py-5 sm:py-6">
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="hidden sm:inline">Chamar no WhatsApp Agora</span>
                <span className="sm:hidden">WhatsApp Agora</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </GlowButton>
              
              <p className="text-gray-400 text-xs sm:text-sm mt-4 sm:mt-6 text-center">
                Sem compromisso • Consultoria inicial gratuita • Análise personalizada
              </p>
            </div>
          </motion.div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F0FF]/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-[#00F0FF]/20 to-[#0075FF]/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-[#00F0FF]" />
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">{item.label}</div>
                  <div className="text-white font-medium text-sm">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}