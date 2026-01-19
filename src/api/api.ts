let API_BASE_URL: string;

if (process.env.NODE_ENV === 'production') {
    console.log("Production env detected");
    API_BASE_URL = 'https://ai-marketplace-backend.vercel.app';
}else{
    console.log(`Development env detected: ${process.env.NODE_ENV}`);
    API_BASE_URL = 'https://ai-marketplace-backend.vercel.app';
}
export { API_BASE_URL };