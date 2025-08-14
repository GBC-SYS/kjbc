import axios, { AxiosError, AxiosResponse } from 'axios';

// ✅ 정상 응답 처리 (data만 반환)
export const responseInterceptor = (response: AxiosResponse) => {
  return response.data;
};

// ❌ 에러 응답 처리
export const responseInterceptorError = async (error: AxiosError) => {
  const originalRequest = error.config;

  // 🔄 401 Unauthorized → 토큰 갱신 시도
  if (error.response?.status === 401 && !originalRequest?._retry) {
    originalRequest._retry = true;
    try {
      const { data } = await axios.post('/auth/refresh-token', {
        refreshToken: localStorage.getItem('refreshToken'),
      });

      localStorage.setItem('accessToken', data.accessToken);
      originalRequest.headers.Authorization = `Bearer ${data.accessToken}`;

      return axios(originalRequest);
    } catch (refreshError) {
      console.error('토큰 갱신 실패', refreshError);
      window.location.href = '/login';
    }
  }

  // 🔁 500 서버 오류 → 1초 후 재요청
  if (error.response?.status === 500 && !originalRequest?._retry) {
    originalRequest._retry = true;
    console.warn('서버 오류 발생! 1초 후 재시도...');
    await new Promise(resolve => setTimeout(resolve, 1000));
    return axios(originalRequest);
  }

  // ⚠️ 기타 에러 처리
  switch (error.response?.status) {
    case 403:
      alert('권한이 없습니다.');
      break;
    case 404:
      alert('요청한 데이터를 찾을 수 없습니다.');
      break;
    case 500:
      alert('서버 오류가 발생했습니다.');
      break;
  }

  return Promise.reject(error);
};
