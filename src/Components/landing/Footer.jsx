import React from 'react';
import { Brain, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const footerLinks = {
  Serviços: [
    { label: 'Tráfego Pago', href: '#servicos' },
    { label: 'Criação de Sites', href: '#servicos' },
    { label: 'Social Media', href: '#servicos' },
    { label: 'SEO', href: '#servicos' },
  ],
  Empresa: [
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Blog', href: '#' },
    { label: 'Contato', href: '#contato' },
  ],
  Legal: [
    { label: 'Política de Privacidade', href: '#' },
    { label: 'Termos de Uso', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050A14] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="inline-flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF8C00] via-[#FF4500] to-[#00F0FF] p-[2px]">
                  <div className="w-full h-full rounded-xl bg-[#050A14] flex items-center justify-center">
                    <Brain className="w-5 h-5 text-[#00F0FF]" />
                  </div>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Nova Lima</span>
                <span className="block text-xs text-[#00F0FF] font-medium -mt-1">Marketing Digital</span>
              </div>
            </a>
            
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Transformando negócios através do marketing digital inteligente. 
              Sua parceira em resultados extraordinários.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#00F0FF] hover:border-[#00F0FF]/30 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#00F0FF] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Nova Lima Marketing Digital. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Feito com 💙 em Nova Lima, MG
          </p>
        </div>
      </div>
    </footer>
  );
}