import { heroLinks } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

export interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <section>
      <Carousel className="mx-8 my-9">
        <CarouselContent>
          {heroLinks.map((heroLink) => (
            <CarouselItem
              key={heroLink.id}
              className="flex flex-col gap-8 md:flex-row"
            >
              <div className="flex justify-center p-0 md:flex-1 md:justify-normal md:p-16">
                <div className="flex flex-col justify-between gap-8">
                  <h1 className="text-5xl font-semibold capitalize text-blue-950 dark:text-zinc-500 xl:text-7xl 2xl:text-9xl">
                    tech heim
                  </h1>

                  <div className="flex items-center gap-2 text-lg font-semibold md:text-xl xl:text-3xl 2xl:text-5xl">
                    <h2 className="text-blue-950 dark:text-zinc-500">
                      &quot;Junte-se a
                    </h2>
                    <h2 className="text-orange-500">revolução digital&quot;</h2>
                  </div>

                  <Button
                    asChild
                    className="w-max bg-orange-500 px-16 py-6 text-base hover:bg-orange-500/90 xl:px-20 xl:py-8 xl:text-lg 2xl:px-28"
                  >
                    <Link href="/products">Explorar mais</Link>
                  </Button>
                </div>
              </div>

              <div className="h-[300px] w-full md:h-[500px] md:flex-1">
                <div className="relative h-full w-full p-16">
                  <Image
                    src={heroLink.image}
                    alt="um notebook"
                    fill
                    priority
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
