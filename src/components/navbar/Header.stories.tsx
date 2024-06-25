import { Meta } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Components/Navbar/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Header />;
