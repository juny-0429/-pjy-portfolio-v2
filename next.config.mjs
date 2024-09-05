/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: {
      // 이 설정이 SSR을 활성화하고 CSS 속성을 활성화합니다.
      sourceMap: true,
      autoLabel: 'dev-only',
      labelFormat: '[local]',
      ssr: true,
    },
  },
  experimental: {
    scrollRestoration: true,
  },

  // 다국어 설정
  i18n: {
    locales: ['en-US', 'ko'],
    defaultLocale: 'ko',
    localeDetection: true,
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            titleProp: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: { removeViewBox: false },
                  },
                  // Enable figma's wrong mask-type attribute work
                  removeRasterImages: false,
                  removeStyleElement: false,
                  removeUnknownsAndDefaults: false,
                  // Enable svgr's svg to fill the size
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
