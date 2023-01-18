import { Config } from '@stencil/core';

import { reactOutputTarget } from '@stencil/react-output-target';
import path from 'path';
import { sass } from '@stencil/sass';

const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import {
  angularOutputTarget,
  ValueAccessorConfig,
} from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'design-system',
  globalStyle: 'src/styles/scss-var.scss',
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [{ src: './statics/assets', dest: 'assets' }],
    },
    reactOutputTarget({
      componentCorePackage: '@gota/design-system',
      proxiesFile:
        '../../../libs/design-system-react/src/generated/components.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@gota/design-system',
      directivesProxyFile:
        '../../../libs/design-system-angular/src/generated/directives/proxies.ts',
      directivesArrayFile:
        '../../../libs/design-system-angular/src/generated/directives/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
  ],
  plugins: [
    sass({
      includePaths: [
        path.resolve(__dirname, '../../../node_modules'),
        path.resolve(__dirname, './src/styles')
      ]
    })
  ]
};
