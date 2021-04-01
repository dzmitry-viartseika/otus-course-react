import React from 'react';

import { InputTemplate } from './InputTemplate';

export default {
  title: 'Example/InputTemplate',
  component: InputTemplate,
};

const Template = (args) => <InputTemplate {...args} />;


export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};
