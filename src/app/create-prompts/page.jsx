"use client";

import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';
import toast from 'react-hot-toast';

const CreatePrompts = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        content: '',
        category: '',
        price: '',
        aiModel: '',
        tags: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation
        if (!formData.title || !formData.description || !formData.content) {
            toast.error('Please fill in all required fields');
            return;
        }

        setIsSubmitting(true);

        try {
            const promptData = {
                title: formData.title,
                description: formData.description,
                content: formData.content,
                category: formData.category || 'General',
                price: parseFloat(formData.price) || 0,
                aiModel: formData.aiModel,
                tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
                rating: 4.5, // Default rating
                author: session?.user?.email || 'anonymous',
                createdAt: new Date().toISOString(),
            };

            const response = await fetch(`${API_BASE_URL}/api/prompts/add-prompt`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([promptData]),
            });

            if (!response.ok) {
                throw new Error('Failed to create prompt');
            }

            toast.success('Prompt created successfully!');
            
            // Reset form
            setFormData({
                title: '',
                description: '',
                content: '',
                category: '',
                price: '',
                aiModel: '',
                tags: '',
            });

            // Redirect to all prompts after 1 second
            setTimeout(() => {
                router.push('/all-prompts');
            }, 1000);

        } catch (error) {
            console.error('Error creating prompt:', error);
            toast.error('Failed to create prompt. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const categories = [
        'Content Writing',
        'Code Generation',
        'Marketing',
        'Design',
        'Business',
        'Education',
        'Other'
    ];

    return (
        <>
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Create New Prompt
                        </h1>
                        <p className="text-xl text-blue-100">
                            Share your expertise and monetize your AI prompts
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Title */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-900">Title *</span>
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    placeholder="Give your prompt a catchy title"
                                    className="input input-bordered w-full bg-white text-gray-900"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-900">Description *</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Describe what your prompt does and what results it produces"
                                    className="textarea textarea-bordered h-24 w-full bg-white text-gray-900"
                                    required
                                />
                            </div>

                            {/* Prompt Content */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-900">Prompt Content *</span>
                                </label>
                                <textarea
                                    name="content"
                                    value={formData.content}
                                    onChange={handleChange}
                                    placeholder="Enter your complete prompt here..."
                                    className="textarea textarea-bordered h-40 w-full font-mono bg-white text-gray-900"
                                    required
                                />
                                <label className="label">
                                    <span className="label-text-alt text-gray-500">
                                        This is the actual prompt that users will receive
                                    </span>
                                </label>
                            </div>

                            {/* Category and Price */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-gray-900">Category</span>
                                    </label>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        className="select select-bordered w-full bg-white text-gray-900"
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map(cat => (
                                            <option key={cat} value={cat}>{cat}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold text-gray-900">Price (USD)</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="9.99"
                                        step="0.01"
                                        min="0"
                                        className="input input-bordered w-full bg-white text-gray-900"
                                    />
                                </div>
                            </div>

                            {/* AI Model */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-900">Compatible AI Models</span>
                                </label>
                                <input
                                    type="text"
                                    name="aiModel"
                                    value={formData.aiModel}
                                    onChange={handleChange}
                                    placeholder="e.g., ChatGPT, Claude, Gemini"
                                    className="input input-bordered w-full bg-white text-gray-900"
                                />
                            </div>

                            {/* Tags */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-gray-900">Tags</span>
                                </label>
                                <input
                                    type="text"
                                    name="tags"
                                    value={formData.tags}
                                    onChange={handleChange}
                                    placeholder="marketing, copywriting, social media (comma separated)"
                                    className="input input-bordered w-full bg-white text-gray-900"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-gray-500">
                                        Separate tags with commas
                                    </span>
                                </label>
                            </div>

                            {/* Submit Button */}
                            <div className="form-control mt-8">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-lg w-full text-white"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="loading loading-spinner"></span>
                                            Creating...
                                        </>
                                    ) : (
                                        'Create Prompt'
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Tips */}
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-bold text-lg mb-4 text-blue-900">💡 Tips for Creating Great Prompts</h3>
                        <ul className="space-y-2 text-blue-800">
                            <li>✅ Be specific and clear about what your prompt achieves</li>
                            <li>✅ Test your prompt thoroughly before publishing</li>
                            <li>✅ Include relevant tags to help users find your prompt</li>
                            <li>✅ Price competitively based on the value provided</li>
                            <li>✅ Update your prompts based on user feedback</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CreatePrompts;