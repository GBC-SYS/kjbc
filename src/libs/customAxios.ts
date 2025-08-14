/**
 * axios의 interceptors frame(구조)입니다.
 */
import axios from "axios";

export const customAxios = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_HOST,
    withCredentials: false,
  });

  /**
   * axios 요청 전 인터셉터
   */
  instance.interceptors.request.use(
    async (config) => {
      if (config.headers) {
        config.headers["Content-type"] = "application/json; charset=UTF-8";
        config.headers["Accept"] = "application/json;";
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  /**
   * axios 요청 후 인터셉터
   */
  instance.interceptors.response.use(
    (config) => {
      return config;
    },
    async (error) => {
      const { config } = error;
      if (error.response && error.response.status) {
        switch (error.response.status) {
          case 401:
            if (window.location.pathname.includes("/sign/out")) {
              break;
            }

            config.sent = true;

            window.location.href = "/sign/out?expired=true";
            return Promise.reject(error);
          default:
            return Promise.reject(error);
        }
      }

      return Promise.reject(error);
    }
  );

  return instance;
};

type Headers = {
  [key: string]: string;
};

/* 서버와 통신 시 동적 추가 헤더를 설정하는 함수 */
export const createHeaders = (additionalHeaders: Headers): Headers => {
  return {
    ...additionalHeaders,
  };
};
/*  // 서버와 통신 시 동적 추가 헤더를 설정하는 함수 */
