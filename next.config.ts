import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // Permitir importar SVG como componente
    });

    return config;
  },
  images: {
    // Configuración para soportar imágenes AVIF y PNG
    formats: ['image/avif', 'image/webp'],
    // Usa remotePatterns para permitir imágenes externas
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
