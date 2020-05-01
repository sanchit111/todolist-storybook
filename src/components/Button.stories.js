
import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
    component: Button,
    title: 'Button',

};

export const AddTodo = () => <button type="submit" onClick={action('clicked')}>Add Todo</button>