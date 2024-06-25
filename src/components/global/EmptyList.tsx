import { FC } from 'react';

export interface EmptyListProps {}

export const EmptyList: FC<EmptyListProps> = () => {
  return (
    <div>
      <h1>EmptyList</h1>
    </div>
  );
};
