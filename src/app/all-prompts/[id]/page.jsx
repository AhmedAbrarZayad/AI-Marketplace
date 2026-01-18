"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Footer from '../../../components/Footer';
import toast from 'react-hot-toast';

export default function PromptDetails() {
    const params = useParams();
    const router = useRouter();
    const [prompt, setPrompt] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (params.id) {
            fetchPromptDetails();
        }
    }, [params.id]);

    const fetchPromptDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/prompts/${params.id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch prompt details');
            }
            const data = await response.json();
            setPrompt(data);
        } catch (error) {
            console.error('Error fetching prompt details:', error);
            toast.error('Failed to load prompt details');
        } finally {
            setLoading(false);
        }
    };

    const handleCopyPrompt = () => {
        if (prompt?.content) {
            navigator.clipboard.writeText(prompt.content);
            toast.success('Prompt copied to clipboard!');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (!prompt) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Prompt not found</h2>
                    <Link href="/all-prompts" className="btn btn-primary">
                        Back to All Prompts
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Back Button */}
                    <Link 
                        href="/all-prompts"
                        className="btn btn-ghost mb-6"
                    >
                        ← Back to All Prompts
                    </Link>

                    {/* Main Content */}
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h1 className="text-4xl font-bold mb-4">
                                        {prompt.title || 'Untitled Prompt'}
                                    </h1>
                                    <p className="text-blue-100 text-lg">
                                        {prompt.description || 'No description available'}
                                    </p>
                                </div>
                                {prompt.rating && (
                                    <div className="badge badge-warning badge-lg gap-1 ml-4">
                                        ⭐ {prompt.rating}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Details */}
                        <div className="p-8">
                            {/* Meta Information */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="stat bg-gray-50 rounded-lg">
                                    <div className="stat-title">Price</div>
                                    <div className="stat-value text-blue-600">
                                        ${prompt.price || '0.00'}
                                    </div>
                                </div>
                                <div className="stat bg-gray-50 rounded-lg">
                                    <div className="stat-title">Category</div>
                                    <div className="stat-value text-2xl">
                                        {prompt.category || 'General'}
                                    </div>
                                </div>
                                <div className="stat bg-gray-50 rounded-lg">
                                    <div className="stat-title">Rating</div>
                                    <div className="stat-value text-2xl">
                                        {prompt.rating ? `${prompt.rating} / 5` : 'N/A'}
                                    </div>
                                </div>
                            </div>

                            {/* Prompt Content */}
                            {prompt.content && (
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            Prompt Content
                                        </h2>
                                        <button 
                                            onClick={handleCopyPrompt}
                                            className="btn btn-outline btn-sm gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                            Copy
                                        </button>
                                    </div>
                                    <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                                        {prompt.content}
                                    </div>
                                </div>
                            )}

                            {/* Additional Details */}
                            <div className="space-y-4">
                                {prompt.tags && prompt.tags.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Tags</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {prompt.tags.map((tag, index) => (
                                                <span key={index} className="badge badge-primary">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {prompt.aiModel && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Compatible AI Models</h3>
                                        <p className="text-gray-600">{prompt.aiModel}</p>
                                    </div>
                                )}

                                {prompt.useCases && prompt.useCases.length > 0 && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-2">Use Cases</h3>
                                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                                            {prompt.useCases.map((useCase, index) => (
                                                <li key={index}>{useCase}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 flex gap-4">
                                <button className="btn btn-primary btn-lg flex-1">
                                    Purchase Now - ${prompt.price || '0.00'}
                                </button>
                                <button className="btn btn-outline btn-lg">
                                    Add to Favorites
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
