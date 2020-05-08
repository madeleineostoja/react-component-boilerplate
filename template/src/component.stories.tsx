import React from 'react';
import { <%= name %>, <%= name %>Props } from '.';

export default {
  title: 'API & Demo',
  component: <%= name %>
};

export const Default = (props: <%= name %>Props) => (
  <<%= name %> {...props} />
);