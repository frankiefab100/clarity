/*
 * Copyright (c) 2016-2020 VMware, Inc.
 * All Rights ReserveThis software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { moduleMetadata } from '@storybook/angular';
import { ClarityModule } from '@clr/angular';

const basicTemplate = require('!!raw-loader!./basic.html'); // eslint-disable-line

export default {
  title: 'Login',
  decorators: [
    moduleMetadata({
      imports: [ClarityModule],
    }),
  ],
};

export const Basic = () => {
  const form = {
    type: 'local',
    username: '',
    password: '',
    rememberMe: false,
  };

  return {
    title: 'Basic',
    template: basicTemplate.default,
    props: { form },
  };
};
