/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["res.cloudinary.com", "drive.google.com", "github.com"],
  },
  basePath: '',
};

module.exports = nextConfig;
