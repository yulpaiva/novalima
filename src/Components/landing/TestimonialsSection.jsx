import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import GradientText from '../ui/GradientText';

const testimonials = [
  {
    name: 'Carlos Eduardo',
    role: 'CEO, TechStart',
    image: "/images/TestimonialsSection1.jpg",
    content: 'A Nova Lima transformou completamente nossa presença digital. Em 6 meses, triplicamos nossas vendas online.',
    rating: 5,
  },
  {
    name: 'Amanda Ferreira',
    role: 'Diretora, Beauty Store',
    image: "/images/TestimonialsSection2.jpg",
    content: 'Profissionais incríveis! O ROI das campanhas superou todas as expectativas. Recomendo de olhos fechados.',
    rating: 5,
  },
  {
    name: 'Roberto Santos',
    role: 'Fundador, RS Imóveis',
    image: "/images/TestimonialsSection3.jpg",
    content: 'A equipe entende muito de marketing digital. Nosso site agora está em primeiro lugar no Google!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050A14] to-[#0A1525]" />
      
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#00F0FF]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#FF8C00]/10 text-[#FF8C00] text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nossos <GradientText variant="cta">Clientes</GradientText> dizem
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Histórias reais de transformação digital e sucesso.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#FF8C00]/30 transition-all duration-500">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-r from-[#FF8C00]/20 to-[#FF4500]/20 flex items-center justify-center">
                  <Quote className="w-6 h-6 text-[#FF8C00]" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#FF8C00] text-[#FF8C00]" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#FF8C00]/50">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#FF8C00] to-[#FF4500] rounded-full blur opacity-30" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}