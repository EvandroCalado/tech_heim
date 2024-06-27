import { formatCurrency } from '@/utils';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { FavoriteToggleButton } from './FavoriteToggleButton';

export interface ProductsGridProps {
  products: Product[];
}

export const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  return (
    <div className="grid gap-4 pt-12 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { name, price, image } = product;
        const productId = product.id;
        const realAmount = formatCurrency(price);

        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform border-none shadow-none transition-shadow duration-300 group-hover:shadow-xl">
                <CardContent className="flex flex-col justify-center p-4">
                  <div className="relative h-64 w-full overflow-hidden rounded md:h-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                      className="w-full transform rounded object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  <Separator className="my-4 rounded-full bg-gradient-to-r from-muted via-muted-foreground to-muted duration-300 group-hover:bg-gradient-to-r group-hover:from-primary-foreground group-hover:via-primary group-hover:to-primary-foreground group-hover:shadow-md" />

                  <h2 className="mb-4 text-lg font-light capitalize duration-300 group-hover:text-primary">
                    {name}
                  </h2>
                  <p className="text-muted-foreground">{realAmount}</p>
                </CardContent>
              </Card>
            </Link>

            <div className="invisible absolute left-4 top-4 z-10 opacity-0 duration-300 group-hover:visible group-hover:opacity-100">
              <FavoriteToggleButton productId={productId} />
            </div>
          </article>
        );
      })}
    </div>
  );
};
