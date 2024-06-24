import { Meta } from '@storybook/react';
import { Search } from '.';

export default {
  title: 'Components/Navbar/Search',
  component: Search,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default = () => <Search />;
