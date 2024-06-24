import { Meta } from '@storybook/react';
import { Navbar } from '.';

export default {
  title: 'Components/Navbar/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Navbar />;
