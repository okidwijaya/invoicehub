import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
      return[
        {
          source: '/',
          destination: '/invoices/add',
          permanent: true
        },
        {
          source: '/invoices',
          destination: '/invoices/add',
          permanent: true
        },
      ]
  },
};

export default nextConfig;
