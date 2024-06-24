import { cn } from '@/lib/utils';
import { FC } from 'react';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto max-w-6xl px-8 xl:max-w-7xl', className)}>
      {children}
    </div>
  );
};
