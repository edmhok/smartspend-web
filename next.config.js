/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(woff|woff2|eot|ttf|otf|svg|png|jpg|gif)$/,
          use: {
            loader: 'url-loader',
          },
        });
    
        return config;
      },
      images: {
        domains: [
          'smartspend-assets.s3.ap-northeast-1.amazonaws.com',
          'smartspend-assets.s3.amazonaws.com',
          's3.amazonaws.com'
        ],
      },
    trailingSlash: true,  
    future: {
      webpack5: true,
    },
    // output: 'export',
    // experimental: {
    //     appDir: true
    // },
    // ssr: false
}

module.exports = nextConfig
