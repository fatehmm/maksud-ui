import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      /**
       * @see https://github.com/magicuidesign/magicui/blob/main/next.config.mjs
       */
      {
        source: '/r/index',
        destination: '/r/index.json',
        permanent: true,
      },
      {
        source: '/r/registry',
        destination: '/r/registry.json',
        permanent: true,
      },
      {
        source: '/r/:name((?!index\\.json|registry\\.json|styles/).*)',
        destination: '/r/styles/default/:name.json',
        permanent: true,
        missing: [
          {
            type: 'query',
            key: '_redirected',
            value: undefined,
          },
        ],
      },
    ];
  },
};

export default withMDX(config);
