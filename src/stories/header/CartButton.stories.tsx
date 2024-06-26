import { CartButton, CartButtonProps } from '@/components/header';
import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Components/Header/CartButton',
  component: CartButton,
} as Meta;

export const Default: StoryFn<CartButtonProps> = () => <CartButton />;
