import React from 'react';
import { Prompts } from '../models/prompts';

interface PromptCards {
    prompt: Prompts;
}

export const PromptCards: React.FC<PromptCards> = ({ prompt }) => {
    return (
        <div className="card bg-base-100 w-96 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{prompt.title}</h2>
                <p className="text-gray-600 line-clamp-3">{prompt.description}</p>
                
                <div className="flex gap-2 mt-2 flex-wrap">
                    <span className="badge badge-primary">{prompt.category}</span>
                    <span className="badge badge-secondary">{prompt.model}</span>
                    <span className="badge badge-accent">{prompt.difficulty}</span>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-500">
                        By <span className="font-semibold">{prompt.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-semibold">{prompt.rating.toFixed(1)}</span>
                    </div>
                </div>
                
                <div className="card-actions justify-end mt-4">
                    <a href={`/all-prompts/${prompt._id}`} className="btn btn-primary">View Details</a>
                </div>
            </div>
        </div>
    )
}