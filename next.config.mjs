/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { dev }) {
    if (dev) config.cache = { type: "memory" }; // PackFileCacheStrategy 우회
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: "@svgr/webpack", options: { svgo: true } }],
      },
      {
        test: /\.(svg|png|jpe?g|gif|txt|json)$/i,
        type: "asset",
        parser: { dataUrlCondition: { maxSize: 1024 } },
      } // 1KB 넘으면 파일로 분리
    );
    return config;
  },
  compiler: {
    // ssr 및 displayName은 기본적으로 구성됩니다.
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com", // 이미지 도메인 추가
      },
    ],
  },
};

export default nextConfig;
