"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../../components/Footer';
import toast from 'react-hot-toast';

const AllPrompts = () => {
    const [prompts, setPrompts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        fetchPrompts();
    }, []);

    const fetchPrompts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/prompts');
            if (!response.ok) {
                throw new Error('Failed to fetch prompts');
            }
            const data = await response.json();
            setPrompts(data);
        } catch (error) {
            console.error('Error fetching prompts:', error);
            toast.error('Failed to load prompts. Make sure the backend server is running.');
        } finally {
            setLoading(false);
        }
    };

    const filteredPrompts = prompts.filter(prompt => {
        const matchesSearch = prompt.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            prompt.description?.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || prompt.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = ['all', ...new Set(prompts.map(p => p.category).filter(Boolean))];

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-20 relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-10 left-10 w-64 h-64 bg-pink-500 rounded-full blur-3xl animate-blob"></div>
                        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                            <span className="text-sm font-semibold">Trending</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Explore AI Prompts
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-3xl leading-relaxed">
                            Discover thousands of expertly crafted prompts to enhance your AI experience
                        </p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Search and Filter */}
                    <div className="mb-8 flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Search prompts..."
                                className="input input-bordered w-full pl-10 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white shadow-sm"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select 
                            className="select select-bordered w-full md:w-64 bg-white shadow-sm focus:ring-2 focus:ring-purple-500 transition-all"
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                        >
                            {categories.map(cat => (
                                <option key={cat} value={cat}>
                                    {cat === 'all' ? 'All Categories' : cat}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Results Count */}
                    <div className="mb-6">
                        <p className="text-gray-600">
                            Showing <span className="font-semibold">{filteredPrompts.length}</span> prompts
                        </p>
                    </div>

                    {/* Prompts Grid */}
                    {filteredPrompts.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">No prompts found. Try adjusting your search or filter.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredPrompts.map((prompt) => (
                                <Link 
                                    href={`/all-prompts/${prompt._id}`} 
                                    key={prompt._id}
                                    className="group"
                                >
                                    <div className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-200 hover:border-blue-500 hover:-translate-y-2 overflow-hidden">
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        
                                        <div className="card-body relative z-10">
                                            <div className="flex items-start justify-between mb-2">
                                                <h2 className="card-title text-lg group-hover:text-blue-600 transition font-bold">
                                                    {prompt.title || 'Untitled Prompt'}
                                                </h2>
                                                {prompt.rating && (
                                                    <div className="badge badge-warning gap-1 shadow-sm font-semibold">
                                                        ⭐ {prompt.rating}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {prompt.category && (
                                                <div className="badge badge-outline mb-3 border-2 group-hover:bg-blue-50 group-hover:border-blue-500 transition-all">
                                                    {prompt.category}
                                                </div>
                                            )}
                                            
                                            <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                                                {prompt.description || 'No description available'}
                                            </p>
                                            
                                            <div className="card-actions justify-between items-center mt-auto pt-4 border-t border-gray-100">
                                                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                                                    ${prompt.price || '0.00'}
                                                </div>
                                                <button className="btn btn-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none group-hover:scale-105 transition-transform shadow-md">
                                                    View Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllPrompts;