/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.pbs.org',
            port: ''
          },
        ],
      }

};

  
export default nextConfig;
