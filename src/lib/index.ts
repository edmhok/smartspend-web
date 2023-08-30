import axios from 'axios';

export const localAPI = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_API_URL || 'http://localhost:4000',
});
