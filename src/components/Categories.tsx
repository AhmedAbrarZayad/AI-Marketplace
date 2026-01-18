"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Categories = () => {
  const categories = [
    {
      name: "Content Writing",
      description: "Blog posts, articles, copywriting",
      icon: "📝",
      count: 250,
      color: "bg-blue-100 text-blue-600"
    },
    {
      name: "Code Generation",
      description: "Programming, debugging, optimization",
      icon: "💻",
      count: 180,
      color: "bg-purple-100 text-purple-600"
    },
    {
      name: "Marketing",
      description: "Ads, social media, SEO",
      icon: "📊",
      count: 150,
      color: "bg-pink-100 text-pink-600"
    },
    {
      name: "Design",
      description: "UI/UX, graphics, branding",
      icon: "🎨",
      count: 120,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      name: "Business",
      description: "Strategy, analysis, planning",
      icon: "💼",
      count: 200,
      color: "bg-green-100 text-green-600"
    },
    {
      name: "Education",
      description: "Learning, tutoring, research",
      icon: "📚",
      count: 140,
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-purple-100 rounded-full">
            <span className="text-sm font-semibold text-purple-600">Categories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text mb-4">
            Explore Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect prompts for your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link 
                href={`/all-prompts?category=${category.name.toLowerCase()}`}
                className="group relative block p-8 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`text-5xl p-4 rounded-2xl ${category.color} shadow-lg`}
                    >
                      {category.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition">
                        {category.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {category.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full border border-gray-200 shadow-sm">
                        <span className="text-sm font-semibold text-gray-700">
                          {category.count}+ prompts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              href="/all-prompts"
              className="btn btn-lg bg-gradient-to-r from-purple-600 to-blue-600 text-white border-none hover:shadow-xl transition-all"
            >
              View All Categories
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;
