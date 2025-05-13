"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Particle = {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
};

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Initialize dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Generate particles
    const particleCount = Math.min(window.innerWidth / 20, 50); // Responsive count
    const newParticles: Particle[] = [];
    
    const colors = ['#3B82F6', '#10B981', '#7C3AED', '#0EA5E9', '#6366F1'];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 10,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    
    setParticles(newParticles);

    // Handle resize
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-30 pointer-events-none"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            x: [
              Math.random() * dimensions.width * 0.1 - dimensions.width * 0.05,
              Math.random() * dimensions.width * 0.1 - dimensions.width * 0.05,
              Math.random() * dimensions.width * 0.1 - dimensions.width * 0.05,
            ],
            y: [
              Math.random() * dimensions.height * 0.1 - dimensions.height * 0.05,
              Math.random() * dimensions.height * 0.1 - dimensions.height * 0.05,
              Math.random() * dimensions.height * 0.1 - dimensions.height * 0.05,
            ],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
    </div>
  );
};

export default AnimatedBackground;