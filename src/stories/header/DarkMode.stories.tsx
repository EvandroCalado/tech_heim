import { DarkMode, DarkModeProps } from '@/components/header';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Header/DarkMode',
  component: DarkMode,
} as Meta;

export const Default: StoryFn<DarkModeProps> = () => <DarkMode />;
