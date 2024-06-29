import { categoriesLinks } from '@/utils/categoriesLinks';
import Link from 'next/link';
import { FC } from 'react';
import { Separator } from '../ui/separator';

export interface CategoriesProductsProps {}

export const CategoriesProducts: FC<CategoriesProductsProps> = () => {
  return (
    <div className="mb-10 mt-24 flex items-center justify-center gap-2 lg:gap-4 xl:gap-8">
      {categoriesLinks.map((categoryLink) => (
        <div
          className="group flex flex-col items-center"
          key={categoryLink.name}
        >
          <Link
            href={`/`}
            className="flex h-14 w-14 flex-col items-center rounded-lg dark:text-zinc-100 sm:h-20 sm:w-20 md:h-32 md:w-32 lg:h-40 lg:w-40"
          >
            {categoryLink.icon}

            <h5 className="my-2 text-xs font-semibold capitalize text-zinc-700 dark:text-zinc-200 md:text-base lg:my-4">
              {categoryLink.name}
            </h5>
          </Link>

          <Separator className="mx-auto mt-1 w-0 duration-300 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-primary-foreground group-hover:via-primary group-hover:to-primary-foreground" />
        </div>
      ))}
    </div>
  );
};
