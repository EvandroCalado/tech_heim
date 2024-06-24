import { IconCart } from '@/icons';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../ui/button';

export interface CartButtonProps {}

export const CartButton: FC<CartButtonProps> = () => {
  const numItemsInCart = 3;

  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="relative flex items-center justify-center"
    >
      <Link href="/cart">
        <IconCart />
        <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
