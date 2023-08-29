/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: {
            loader: 'url-loader',
          },
        });
    
        return config;
      },
    trailingSlash: true,
    output: 'export',
    // experimental: {
    //     appDir: true
    // },
    // ssr: false
}

module.exports = nextConfig
