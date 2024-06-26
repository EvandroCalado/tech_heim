import { IconHeart } from '@/icons';
import { FC } from 'react';
import { Button } from '../ui/button';

export interface FavoriteToggleButtonProps {
  productId: string;
}

export const FavoriteToggleButton: FC<FavoriteToggleButtonProps> = ({
  productId,
}) => {
  console.log(productId);

  return (
    <Button size="icon" variant="outline" className="cursor-pointer">
      <IconHeart className="text-primary" />
    </Button>
  );
};
