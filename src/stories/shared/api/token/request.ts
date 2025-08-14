import { AxiosRequestConfig } from 'axios';

export const requestInterceptor = (config: AxiosRequestConfig) => {
  // 1️⃣ 인증 토큰 자동 추가
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  // 2️⃣ 요청 로깅
  console.log(`[API 요청] ${config.method?.toUpperCase()} ${config.url}`, config);

  // 3️⃣ JSON -> FormData 변환
  if (config.headers['Content-Type'] === 'multipart/form-data' && config.data) {
    const formData = new FormData();
    Object.entries(config.data).forEach(([key, value]) => {
      formData.append(key, value as any);
    });
    config.data = formData;
  }

  return config;
};
