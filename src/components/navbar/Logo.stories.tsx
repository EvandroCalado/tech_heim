import { Meta, StoryFn } from '@storybook/react';
import { Logo, LogoProps } from '.';

export default {
  title: 'Components/Navbar/Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<LogoProps> = () => <Logo />;
