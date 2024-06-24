import { Meta, StoryFn } from '@storybook/react';
import { MenuMobile, MenuMobileProps } from '.';

export default {
  title: 'Components/Navbar/LinksDropdown',
  component: MenuMobile,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<MenuMobileProps> = () => <MenuMobile />;
