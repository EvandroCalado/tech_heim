import { Button } from '@/components/ui/button';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex h-[90vh] flex-col items-center justify-center space-y-10">
      <h2 className="text-7xl font-bold">
        <span className="text-primary">Not</span>{' '}
        <span className="rounded-lg bg-orange-500 px-4 py-2 tracking-widest text-muted">
          Found
        </span>
      </h2>
      <p>Não foi possível encontrar o recurso solicitado!</p>

      <Button asChild size="lg">
        <Link href="/" className="text-lg">
          Home
        </Link>
      </Button>
    </div>
  );
};

export default NotFound;
