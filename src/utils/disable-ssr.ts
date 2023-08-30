import fs from 'fs';

export function disableSSR() {
  const nextConfigPath = './next.config.js';

  let nextConfig = fs.readFileSync(nextConfigPath, 'utf8');

  nextConfig = nextConfig.replace(/ssr: true/, 'ssr: false');

  fs.writeFileSync(nextConfigPath, nextConfig);

  console.log('SSR disabled in next.config.js');
}

disableSSR();