
/** @type {import('next').NextConfig} */
import withPlaiceholder from '@plaiceholder/next';
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https' as 'https',
        hostname: 'ik.imagekit.io',
        port: '',
        pathname: '/**'
      },
      {
        hostname: "localhost"
      },
      {
        hostname: "miro.medium.com"
      },
    ]
  },
  
};

export default withPlaiceholder(nextConfig);
