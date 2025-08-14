import { axiosInstance } from '@/stories/shared/api/axiosInstance';

// ✅ 사용자 정보 가져오기
export const getUserProfile = async () => {
  return axiosInstance.get('/users/me');
};

// ✅ 사용자 업데이트
export const updateUserProfile = async (userData: { name?: string; email?: string }) => {
  return axiosInstance.put('/users/me', userData);
};
