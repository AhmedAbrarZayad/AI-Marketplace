import { API_BASE_URL } from '@/api/api';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import PromptCards from './PromptCards';


async function fetchTrendingPrompts() {
    const response = await fetch(`${API_BASE_URL}/api/prompts/trending/top`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}
const Trending = async () => {

    const prompts = await fetchTrendingPrompts();
    return (
        <div>
            <h1> Trending Prompts </h1>
            <div className='flex gap-3'>
                {
                    prompts.map((prompt) => (
                        <PromptCards key={prompt._id} prompt={prompt} />
                    ))
                }
            </div>
        </div>
    );
};

export default Trending;