import type webpack from 'webpack';

import type { BuildOptions } from './types/config';

import { buildLoaders } from './buildLoaders';

import { buildResolvers } from './buildResolvers';

import { buildPlugins } from './buildPlugins';

import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
  options: BuildOptions,
): webpack.Configuration {
  const { paths, mode, isDev } = options;

  return {
    mode,

    entry: paths.entry,

    output: {
      filename: 'main.[contenthash].js',

      chunkFilename: 'asyncComponents.[contenthash].js',

      path: paths.build,

      clean: true,

      publicPath: '/',
    },

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(options),

    plugins: buildPlugins(options),

    devtool: isDev ? 'inline-source-map' : undefined,

    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
