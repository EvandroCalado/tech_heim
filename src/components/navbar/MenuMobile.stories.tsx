import { Meta, StoryFn } from '@storybook/react';
import { MenuMobile, MenuMobileProps } from '.';

export default {
  title: 'Components/Navbar/MenuMobile',
  component: MenuMobile,
} as Meta;

export const Default: StoryFn<MenuMobileProps> = () => <MenuMobile />;
