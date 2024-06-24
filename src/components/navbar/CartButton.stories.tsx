import { Meta, StoryFn } from '@storybook/react';
import { CartButton, CartButtonProps } from '.';

export default {
  title: 'Components/Navbar/CartButton',
  component: CartButton,
} as Meta;

export const Default: StoryFn<CartButtonProps> = () => <CartButton />;
