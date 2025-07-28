import axios from 'axios';
const api = axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL, withCredentials: true });
// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: true,
// });

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401 && !localStorage.getItem('token')) {
      console.log('Token tidak ada atau kadaluarsa');

      return Promise.reject(err);
    }

    if (err.response?.status === 401) {
      console.log('Token mungkin kadaluarsa atau tidak valid');
    }

    return Promise.reject(err);
  }
);

export default api;
