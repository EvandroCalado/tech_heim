import { Input } from '../ui/input';

export const Search = () => {
  return (
    <Input
      type="search"
      placeholder="Buscar produto..."
      className="dark:bg-muted max-w-xs"
    />
  );
};
