import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import type { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };
  console.log('env', env);
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;
  const apiKey = env.apiKey || '';

  const isDev = mode === 'development';
  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiKey,
    project: 'frontend',
  });
};
