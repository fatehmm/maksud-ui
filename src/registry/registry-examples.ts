import type { Registry } from 'shadcn/schema';

export const examples: Registry['items'] = [
  {
    name: 'alert-action-demo',
    type: 'registry:example',
    registryDependencies: ['alert'],
    files: [
      {
        path: 'examples/alert-action-demo.tsx',
        type: 'registry:example',
      },
    ],
  },
];
