import { Meta, StoryFn } from '@storybook/react';
import { DarkMode, DarkModeProps } from '.';

export default {
  title: 'Components/Navbar/DarkMode',
  component: DarkMode,
} as Meta;

export const Default: StoryFn<DarkModeProps> = () => <DarkMode />;
