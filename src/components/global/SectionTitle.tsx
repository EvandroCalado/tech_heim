import { FC } from 'react';
import { Separator } from '../ui/separator';

export interface SectionTitleProps {
  text: string;
}

export const SectionTitle: FC<SectionTitleProps> = ({ text }) => {
  return (
    <div>
      <h2 className="mb-8 text-3xl font-medium capitalize tracking-wider">
        {text}
      </h2>
      <Separator />
    </div>
  );
};
