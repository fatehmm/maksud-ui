import { blocks } from '@/registry/registry-blocks';
import { components } from '@/registry/registry-components';
import { examples } from '@/registry/registry-examples';
import { hooks } from '@/registry/registry-hooks';
import { lib } from '@/registry/registry-lib';
import { themes } from '@/registry/registry-themes';
import { ui } from '@/registry/registry-ui';
import type { Registry } from 'shadcn/schema';

export const registry = {
  name: 'maksud/ui',
  homepage: 'https://maksud-ui.vercel.app',
  items: [
    {
      name: 'index',
      type: 'registry:style',
      dependencies: ['tailwindcss-animate', 'class-variance-authority', 'lucide-react'],
      registryDependencies: ['utils'],
      tailwind: {
        config: {
          plugins: ['require("tailwindcss-animate")'],
        },
      },
      cssVars: {},
      files: [],
    },
    {
      name: 'style',
      type: 'registry:style',
      dependencies: ['tailwindcss-animate', 'class-variance-authority', 'lucide-react'],
      registryDependencies: ['utils'],
      tailwind: {
        config: {
          plugins: ['require("tailwindcss-animate")'],
        },
      },
      cssVars: {},
      files: [],
    },
    ...ui,
    ...blocks,
    ...lib,
    ...hooks,
    ...themes,
    ...examples,
    ...components,
  ],
} satisfies Registry;
