let API_BASE_URL: string;

if (process.env.NODE_ENV === 'production') {
    API_BASE_URL = 'https://api.production.example.com';
}else{
    API_BASE_URL = 'http://localhost:3000';
}
export { API_BASE_URL };