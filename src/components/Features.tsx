"use client";

import React from 'react';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  BoltIcon,
  CurrencyDollarIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: "Premium Quality",
      description: "Curated collection of high-quality AI prompts tested and verified by experts"
    },
    {
      icon: RocketLaunchIcon,
      title: "Instant Access",
      description: "Get immediate access to thousands of prompts for various AI models"
    },
    {
      icon: ShieldCheckIcon,
      title: "Verified Results",
      description: "All prompts are tested to ensure consistent and reliable outputs"
    },
    {
      icon: BoltIcon,
      title: "Regular Updates",
      description: "New prompts added daily, keeping pace with latest AI developments"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Monetize Skills",
      description: "Sell your own prompts and earn from your AI expertise"
    },
    {
      icon: UserGroupIcon,
      title: "Community Driven",
      description: "Join thousands of creators and AI enthusiasts sharing knowledge"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-sm font-semibold text-blue-600">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to supercharge your AI workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 shadow-lg"
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
