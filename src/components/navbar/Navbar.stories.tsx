import { Meta, StoryFn } from '@storybook/react';
import { Navbar, NavbarProps } from '.';

export default {
  title: 'Components/Navbar/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<NavbarProps> = () => <Navbar />;
