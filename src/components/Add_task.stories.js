import React from 'react';
import { action } from '@storybook/addon-actions';

import Add_task from './Add_task';

export default {
  component: Add_task,
  title: 'Add_task',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  title: 'Enter task',
};

export const Submit = () => <Add_task add_task={{ ...taskData }}/>;