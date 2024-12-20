
/** @type {import('next').NextConfig} */

import withPlaiceholder from '@plaiceholder/next';
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();
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
      {
        hostname: "lh3.googleusercontent.com"
      }
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb"

    }
  },
  
};

export default withNextIntl(withPlaiceholder(nextConfig));
