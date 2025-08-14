import "axios";

declare module "axios" {
  export interface InternalAxiosRequestConfig<D = any> {
    _retry?: boolean; // 🔹 커스텀 플래그 추가
  }
}
