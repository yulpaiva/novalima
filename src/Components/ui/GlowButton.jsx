import React from 'react';
import { motion } from 'framer-motion';

export default function GlowButton({ children, onClick, href, className = '', size = 'default' }) {
  const sizes = {
    default: 'px-8 py-4 text-base',
    sm: 'px-6 py-3 text-sm',
    lg: 'px-10 py-5 text-lg',
  };

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative inline-flex items-center justify-center gap-2
        ${sizes[size]}
        font-semibold text-white
        bg-gradient-to-r from-[#FF8C00] to-[#FF4500]
        rounded-xl
        shadow-[0_0_30px_rgba(255,140,0,0.4)]
        hover:shadow-[0_0_50px_rgba(255,140,0,0.6)]
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {buttonContent}
      </a>
    );
  }

  return <button onClick={onClick}>{buttonContent}</button>;
}