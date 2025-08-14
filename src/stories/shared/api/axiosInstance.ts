import axios from 'axios';

import { requestInterceptor } from '@/stories/shared/api/token/request';
import { responseInterceptor, responseInterceptorError } from '@/stories/shared/api/token/response';

// ✅ 공통 axios 인스턴스 생성
export const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // 서버 주소
  timeout: 5000, // 요청 제한 시간 (5초)
  headers: {
    'Content-Type': 'application/json',
  },
});

// ✅ 요청 및 응답 인터셉터 설정
axiosInstance.interceptors.request.use(requestInterceptor);
axiosInstance.interceptors.response.use(responseInterceptor, responseInterceptorError);
