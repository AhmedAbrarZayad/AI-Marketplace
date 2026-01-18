let API_BASE_URL: string;

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = 'https://ai-marketplace-backend.vercel.app';
}else{
    API_BASE_URL = 'https://ai-marketplace-backend.vercel.app';
}
export { API_BASE_URL };