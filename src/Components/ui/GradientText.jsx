import React from 'react';

export default function GradientText({ children, variant = 'tech', className = '' }) {
  const gradients = {
    tech: 'bg-gradient-to-r from-[#00F0FF] to-[#0075FF]',
    cta: 'bg-gradient-to-r from-[#FF8C00] to-[#FF4500]',
  };

  return (
    <span className={`${gradients[variant]} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}