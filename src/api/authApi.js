import axiosInstance from './axiosInstance';

// 회원가입 API 호출 함수
export const signup = async (userData) => {
  try {
    const response = await axiosInstance.post('/api/signup', userData); // '/posts'는 모킹된 엔드포인트입니다.
    return response.data;
  } catch (error) {
    throw new Error('회원가입에 실패했습니다.');
  }
};

// 로그인 API 호출 함수
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/api/login', credentials); // '/posts'는 모킹된 엔드포인트입니다.
    const token = response.data.token;
    localStorage.setItem('token', token);
    return response.data;
  } catch (error) {
    throw new Error('로그인에 실패했습니다.');
  }
};