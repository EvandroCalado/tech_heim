import { Header } from '@/components/header';
import { Meta } from '@storybook/react';

export default {
  title: 'Components/Header/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Header />;
