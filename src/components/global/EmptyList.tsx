import { cn } from '@/lib/utils';
import { FC } from 'react';

export interface EmptyListProps {
  heading?: string;
  className?: string;
}

export const EmptyList: FC<EmptyListProps> = ({
  heading = 'Nenhum resultado encontrado.',
  className,
}) => {
  return <h2 className={cn('text-xl', className)}>{heading}</h2>;
};
