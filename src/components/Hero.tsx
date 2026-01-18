"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div
        className="hero min-h-screen relative overflow-hidden"
        style={{
            backgroundImage:
            "url(/Hero.jpg)",
        }}
        >
        <div className="hero-overlay bg-gradient-to-br from-purple-900/80 via-blue-900/70 to-indigo-900/80"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="hero-content text-neutral-content text-center relative z-10">
            <div className="max-w-4xl">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
                <span className="text-sm font-semibold">Transform Your AI Experience</span>
            </motion.div>
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 text-5xl md:text-7xl font-extrabold leading-tight"
            >
                Unlock Better AI Results — <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">Instantly</span>
            </motion.h1>
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
            >
                Discover expertly crafted AI prompts that help you generate smarter content, write better code, and get precise answers from AI tools. Browse, use, or publish prompts designed to save time and boost productivity.
            </motion.p>
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex gap-4 justify-center flex-wrap"
            >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/all-prompts" className="btn btn-lg bg-gradient-to-r from-purple-600 to-blue-600 border-none text-white hover:shadow-2xl transition-all shadow-lg">
                        <span className="text-lg">Explore Prompts</span>
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/create-prompts" className="btn btn-lg bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-all">
                        <span className="text-lg">Create Your Own</span>
                    </Link>
                </motion.div>
            </motion.div>
            </div>
        </div>
        </div>
    );
};

export default Hero;