"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, PencilRuler, ShieldAlert } from "lucide-react";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-24 overflow-hidden">
      <div className="container max-w-6xl z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-space-grotesk font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            variants={itemVariants}
          >
            Welcome to Futureal<br />
            <span className="text-foreground">Where Code Meets Imagination</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            A student-led tech club that empowers individuals to explore and build with cutting-edge technology. Join us in shaping the future through innovation.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={itemVariants}
          >
            <Link href="/#about">
              <Button size="lg" className="rounded-full">
                Explore
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/core-team">
              <Button size="lg" variant="outline" className="rounded-full">
                Meet Our Team
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="backdrop-blur-lg bg-card/20 border border-border/50 rounded-2xl p-6 transition-transform hover:scale-105">
            <div className="bg-blue-500/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Code className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="font-space-grotesk font-bold mb-2">Coding</h3>
            <p className="text-sm text-muted-foreground">From web dev to algorithms</p>
          </div>
          
          <div className="backdrop-blur-lg bg-card/20 border border-border/50 rounded-2xl p-6 transition-transform hover:scale-105">
            <div className="bg-green-500/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <Cpu className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="font-space-grotesk font-bold mb-2">AI</h3>
            <p className="text-sm text-muted-foreground">Explore ML and AI innovations</p>
          </div>
          
          <div className="backdrop-blur-lg bg-card/20 border border-border/50 rounded-2xl p-6 transition-transform hover:scale-105">
            <div className="bg-purple-500/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <PencilRuler className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-space-grotesk font-bold mb-2">Design</h3>
            <p className="text-sm text-muted-foreground">UI/UX and creative design</p>
          </div>
          
          <div className="backdrop-blur-lg bg-card/20 border border-border/50 rounded-2xl p-6 transition-transform hover:scale-105">
            <div className="bg-orange-500/10 p-3 rounded-full w-12 h-12 mx-auto mb-4 flex items-center justify-center">
              <ShieldAlert className="h-6 w-6 text-orange-500" />
            </div>
            <h3 className="font-space-grotesk font-bold mb-2">Cyber Security</h3>
            <p className="text-sm text-muted-foreground">Learn ethical hacking & security</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;