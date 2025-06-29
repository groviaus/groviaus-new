/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.js",
  },
  experimental: {
    optimizeFonts: true,
  },
};

export default nextConfig;
