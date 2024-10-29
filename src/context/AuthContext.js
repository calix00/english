import React, { createContext, useState, useEffect } from 'react';
import { login as apiLogin, signup as apiSignup } from '../api/authApi';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // 로그인 함수
  const login = async (credentials) => {
    try {
      const response = await apiLogin(credentials);
      setUser(response.user);
      setToken(response.token);
      localStorage.setItem('token', response.token);
    } catch (error) {
      console.error('로그인 실패:', error.message);
      throw error;
    }
  };

  // 회원가입 함수
  const signup = async (userData) => {
    try {
      await apiSignup(userData);
    } catch (error) {
      console.error('회원가입 실패:', error.message);
      throw error;
    }
  };

  // 로그아웃 함수
  const logout = () => {
    setUser(null);
    setToken('');
    localStorage.removeItem('token');
  };

  // 앱이 처음 시작될 때 로컬 스토리지에서 토큰을 가져와 사용자 상태 복원
  useEffect(() => {
    if (token) {
      // 실제 API 호출을 통해 토큰을 검증하고 사용자 데이터를 가져올 수 있음
      setUser({ name: '사용자', id: 'exampleUser' }); // 여기서는 예시로 하드코딩된 데이터를 사용
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};