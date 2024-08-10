import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/dev/api', // Adjust this based on your setup
});

export default api;
