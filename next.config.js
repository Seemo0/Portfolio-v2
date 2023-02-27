/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Seemo0',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/semo_ou7',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://linkedin.com/in/mohamedouallal',
        permanent: true,
      },
    ]
  },
}
