import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,

    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,

      {
        loader: 'css-loader',

        options: {
          esModule: true,
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),

            localIdentName: isDev
              ? '[name]--[hash:base64:5]'
              : '[hash:base64:8]',
          },
        },
      },

      'sass-loader',
    ],
  };
}
