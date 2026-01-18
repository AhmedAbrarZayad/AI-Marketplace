"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl"
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
          >
            <span className="text-sm font-semibold text-white">Get Started Today</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Ready to Supercharge Your AI Workflow?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join thousands of creators, developers, and professionals who are already using our platform to unlock the full potential of AI.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/all-prompts"
                className="btn btn-lg bg-white text-purple-600 hover:bg-gray-100 border-none shadow-xl font-bold"
              >
                Browse Prompts
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/create-prompts"
                className="btn btn-lg bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-purple-600 font-bold"
              >
                Start Selling
              </Link>
            </motion.div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-blue-100 text-sm"
          >
            No credit card required • Free to start • Cancel anytime
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
