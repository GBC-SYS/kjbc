// response.ts
import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosHeaders,
} from "axios";

// 🔒 재귀 방지용(리프레시엔 인터셉터 미적용 권장)
const authClient = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export const responseInterceptor = (res: AxiosResponse) => res.data;

export const responseInterceptorError = async (error: AxiosError) => {
  const originalRequest = error.config as
    | (InternalAxiosRequestConfig & { _retry?: boolean })
    | undefined;

  // 401 → 토큰 갱신
  if (
    error.response?.status === 401 &&
    originalRequest &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
    try {
      const { data } = await authClient.post("/auth/refresh-token", {
        refreshToken:
          typeof window !== "undefined"
            ? localStorage.getItem("refreshToken")
            : null,
      });

      if (typeof window !== "undefined")
        localStorage.setItem("accessToken", data.accessToken);

      // 헤더 안전 세팅
      if (!originalRequest.headers)
        originalRequest.headers = new AxiosHeaders();
      (originalRequest.headers as AxiosHeaders).set?.(
        "Authorization",
        `Bearer ${data.accessToken}`
      ) ??
        ((originalRequest.headers as any).Authorization =
          `Bearer ${data.accessToken}`);

      return authClient(originalRequest);
    } catch (e) {
      console.error("토큰 갱신 실패", e);
      if (typeof window !== "undefined") window.location.href = "/login";
      return Promise.reject(error);
    }
  }

  // 500 → 1회 재시도
  if (
    error.response?.status === 500 &&
    originalRequest &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
    await new Promise((r) => setTimeout(r, 1000));
    return authClient(originalRequest);
  }

  // 기타 에러
  const code = error.response?.status;
  if (code === 403) alert("권한이 없습니다.");
  if (code === 404) alert("요청한 데이터를 찾을 수 없습니다.");
  if (code === 500) alert("서버 오류가 발생했습니다.");

  return Promise.reject(error);
};
