import { Container, LoadingContainer } from '@/components/global';
import { FeaturedProducts, Hero } from '@/components/home';
import { CategoriesProducts } from '@/components/home/CategoriesProducts';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Hero />

      <Container>
        <CategoriesProducts />
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts />
        </Suspense>
      </Container>
    </>
  );
}
