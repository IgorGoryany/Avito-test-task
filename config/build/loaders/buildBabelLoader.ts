import type { BuildOptions } from '../types/config';

interface BuildBabelLoaderProps extends BuildOptions {
  isTsx?: boolean;
}

export function buildBabelLoader({ isDev, isTsx }: BuildBabelLoaderProps) {
  return {
    test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
        plugins: [
          '@babel/plugin-transform-runtime',
          ['@babel/plugin-transform-typescript', { isTSX: isTsx }],
          // isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
}
