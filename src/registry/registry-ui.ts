import type { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    name: 'alert',
    type: 'registry:ui',
    dependencies: ['class-variance-authority', 'lucide-react'],
    files: [
      {
        path: 'ui/alert.tsx',
        type: 'registry:ui',
      },
    ],
  },
];
