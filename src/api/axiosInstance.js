import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    // localStorage에서 토큰을 가져옵니다.
    const token = localStorage.getItem('token');
    if (token) {
      // 토큰이 존재하면 Authorization 헤더에 추가합니다.
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 오류가 있는 경우 처리
    return Promise.reject(error);
  }
);

export default axiosInstance;
