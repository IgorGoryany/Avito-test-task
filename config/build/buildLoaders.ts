import type webpack from 'webpack';
import { type BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildСssLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const tsBabelLoader = buildBabelLoader({ ...options, isTsx: false });

  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const fileLoader = buildFileLoader();

  const cssLoader = buildCssLoader(isDev);

  return [fileLoader, tsBabelLoader, tsxBabelLoader, cssLoader];
}
