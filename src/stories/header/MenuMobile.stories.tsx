import { MenuMobile, MenuMobileProps } from '@/components/header';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Header/MenuMobile',
  component: MenuMobile,
} as Meta;

export const Default: StoryFn<MenuMobileProps> = () => <MenuMobile />;
