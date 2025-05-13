"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container max-w-6xl">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-space-grotesk font-bold mb-4">
            Our Mission
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Futureal is a student-led tech club that empowers individuals to explore and build with 
            code, design, AI, and cybersecurity. We conduct sessions, workshops, and competitions 
            to spark innovation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeIn}>
            <Card className="h-full bg-gradient-to-br from-background to-accent/10 border-accent/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-space-grotesk font-bold mb-4">What We Do</h3>
                <ul className="space-y-4">
                  {[
                    "Weekly tech workshops and coding sessions",
                    "Hands-on projects and hackathons",
                    "Guest lectures from industry professionals",
                    "Networking events with tech companies",
                    "Open source contribution opportunities"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={fadeIn}>
            <Card className="h-full bg-gradient-to-br from-background to-primary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-space-grotesk font-bold mb-4">Why Join Us</h3>
                <ul className="space-y-4">
                  {[
                    "Learn cutting-edge technologies from peers",
                    "Build an impressive project portfolio",
                    "Connect with like-minded tech enthusiasts",
                    "Gain real-world problem-solving experience",
                    "Prepare for tech industry careers"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative p-8 md:p-12 rounded-2xl bg-card/50 backdrop-blur-sm border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 rounded-2xl opacity-60" />
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-space-grotesk font-bold mb-6">
              Our Vision
            </h3>
            <p className="text-lg mb-8">
              We envision a community where students can collaborate, learn, and grow together 
              in the rapidly evolving tech landscape. By providing resources, mentorship, and 
              hands-on experience, we aim to bridge the gap between academic knowledge and 
              industry requirements.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-500 mb-2">300+</div>
                <p className="text-muted-foreground">Active Members</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-500 mb-2">50+</div>
                <p className="text-muted-foreground">Workshops Per Year</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">20+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;