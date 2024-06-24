import { Meta, StoryFn } from '@storybook/react';
import { LinksDropdown, LinksDropdownProps } from '.';

export default {
  title: 'Components/Navbar/LinksDropdown',
  component: LinksDropdown,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<LinksDropdownProps> = () => <LinksDropdown />;
