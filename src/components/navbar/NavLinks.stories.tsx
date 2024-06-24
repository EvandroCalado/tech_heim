import { Meta, StoryFn } from '@storybook/react';
import { NavLinks, NavLinksProps } from '.';

export default {
  title: 'Components/Navbar/NavLinks',
  component: NavLinks,
} as Meta;

export const Default: StoryFn<NavLinksProps> = () => <NavLinks />;
