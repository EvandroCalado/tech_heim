import { Product } from '@prisma/client';
import Link from 'next/link';
import { FC, Suspense } from 'react';
import { Separator } from '../ui/separator';
import { ProductCompanyFilter } from './ProductCompanyFilter';
import { ProductSearch } from './ProductSearch';

export interface ProductsFiltersProps {
  products: Product[];
  layout?: string;
}

export const ProductsFilters: FC<ProductsFiltersProps> = ({
  products,
  layout = '',
}) => {
  const filterCompanies = Array.from(
    new Set(products.map((product) => product.company)),
  );

  return (
    <div className="mt-12 space-y-4">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h4 className="font-semibold capitalize">filtros</h4>
        <Link
          href={`/products?layout=${layout}`}
          className="text-sm text-primary hover:underline"
        >
          Limpar
        </Link>
      </div>

      {/* SEARCH */}
      <Suspense>
        <ProductSearch />
      </Suspense>

      {/* COMPANY FILTER */}
      <h4 className="font-light">Marcas</h4>
      {filterCompanies.map((company) => (
        <Suspense key={company}>
          <ProductCompanyFilter name="company" label={company} />
        </Suspense>
      ))}

      <Separator className="rounded-full bg-gradient-to-r from-muted via-muted-foreground to-muted duration-300" />
    </div>
  );
};
