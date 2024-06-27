import { Card, CardContent } from '../ui/card';
import { Skeleton } from '../ui/skeleton';

export const LoadingContainer = () => {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <LoadingProducts />
      <LoadingProducts />
      <LoadingProducts />
      <LoadingProducts />
    </div>
  );
};

const LoadingProducts = () => {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="h-48 w-full" />
        <Skeleton className="mt-4 h-4 w-3/4" />
        <Skeleton className="mt-4 h-4 w-1/2" />
      </CardContent>
    </Card>
  );
};
