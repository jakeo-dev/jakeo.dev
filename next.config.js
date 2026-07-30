/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

/* module.exports = {
  nextConfig,
  async redirects() {
    return [
      {
        // immediately redirect to new blog/posts page
        source: "/blog/:path*",
        destination: "/posts",
        permanent: true,
      },
    ]
  }
}
 */