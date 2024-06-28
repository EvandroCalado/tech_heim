import { fetchAllProducts } from '@/actions';
import { IconGrid, IconList } from '@/icons';
import Link from 'next/link';
import { FC } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '../ui/breadcrumb';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import { ProductsFilters } from './ProductsFilters';
import { ProductsGrid } from './ProductsGrid';
import { ProductsList } from './ProductsList';

export interface ProductsContainerProps {
  layout?: 'list' | 'grid';
  search?: string;
  company?: string;
}

export const ProductsContainer: FC<ProductsContainerProps> = async ({
  layout,
  search,
  company,
}) => {
  const products = await fetchAllProducts({ search, company });

  const totalProducts = products.length;
  const searchQuery = search ? `&search=${search}` : '';

  return (
    <>
      {/* BREADCRUMB */}
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <Link href="/" className="hover:text-primary/90 hover:underline">
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href={`/products?layout=${layout}${searchQuery}`}
                className="hover:text-primary/90 hover:underline"
              >
                Produtos
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* HEADER */}
      <div>
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-medium">
            {totalProducts} produto{totalProducts > 1 && 's'}
          </h4>

          <div className="flex gap-x-4">
            <Button
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size="icon"
            >
              <Link href={`/products?layout=grid${searchQuery}`}>
                <IconGrid
                  className={`${layout === 'grid' ? 'text-primary-foreground' : 'text-secondary-foreground'}`}
                />
              </Link>
            </Button>
            <Button
              variant={layout === 'list' ? 'default' : 'ghost'}
              size="icon"
            >
              <Link href={`/products?layout=list${searchQuery}`}>
                <IconList
                  className={`${layout === 'list' ? 'text-primary-foreground' : 'text-secondary-foreground'}`}
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <Separator className="mt-4" />

      {/* FILTERS */}
      <div className="flex gap-4">
        <div className="flex-1">
          <ProductsFilters products={products} layout={layout} />
        </div>

        {/* PRODUCTS */}
        <div className="flex-[4]">
          {totalProducts === 0 ? (
            <h5 className="mt-16 text-2xl">
              Desculpe, nenhum produto encontrado
            </h5>
          ) : layout === 'grid' ? (
            <ProductsGrid products={products} />
          ) : (
            <ProductsList products={products} />
          )}
        </div>
      </div>
    </>
  );
};
