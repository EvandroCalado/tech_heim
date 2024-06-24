import { Meta, StoryFn } from '@storybook/react';
import { CartButton, CartButtonProps } from '.';

export default {
  title: 'Components/CartButton',
  component: CartButton,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Default: StoryFn<CartButtonProps> = () => <CartButton />;
