"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const statistics = [
    {
      value: "10,000+",
      label: "AI Prompts",
      description: "Curated collection"
    },
    {
      value: "5,000+",
      label: "Active Users",
      description: "Growing community"
    },
    {
      value: "50,000+",
      label: "Downloads",
      description: "This month"
    },
    {
      value: "4.8/5",
      label: "User Rating",
      description: "Average satisfaction"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
            <span className="text-sm font-semibold">Stats</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100">
            Join the fastest-growing AI prompt community
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center group"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <motion.div 
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  className="text-4xl md:text-5xl font-extrabold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-lg md:text-xl font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-100">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
