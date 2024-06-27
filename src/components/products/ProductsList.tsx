import { formatCurrency } from '@/utils';
import { Product } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Card, CardContent } from '../ui/card';
import { Separator } from '../ui/separator';
import { FavoriteToggleButton } from './FavoriteToggleButton';

export interface ProductListProps {
  products: Product[];
}

export const ProductsList: FC<ProductListProps> = ({ products }) => {
  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { name, price, image, company } = product;
        const productId = product.id;
        const realAmount = formatCurrency(price);

        return (
          <article key={productId} className="group relative">
            <Link href={`/products/${productId}`}>
              <Card className="transform rounded-none border-none shadow-none transition-shadow duration-300 group-hover:shadow-md">
                <CardContent className="grid gap-y-4 md:grid-cols-3">
                  <div className="relative h-64 md:h-48 md:w-48">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="w-full rounded object-contain"
                    />
                  </div>

                  <div className="space-y-8">
                    <h2 className="text-xl font-light capitalize duration-300 group-hover:text-primary">
                      {name}
                    </h2>
                    <h4 className="text-muted-foreground">{company}</h4>
                  </div>

                  <p className="text-lg text-muted-foreground md:ml-auto">
                    {realAmount}
                  </p>
                </CardContent>
              </Card>
            </Link>

            <div className="absolute bottom-8 right-8 z-10">
              <FavoriteToggleButton productId={productId} />
            </div>

            <Separator className="absolute left-0 rounded-full bg-gradient-to-r from-muted via-muted-foreground to-muted duration-300 group-hover:bg-gradient-to-r group-hover:from-primary-foreground group-hover:via-primary group-hover:to-primary-foreground group-hover:shadow-md" />
          </article>
        );
      })}
    </div>
  );
};
