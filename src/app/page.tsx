import { Container, LoadingContainer } from '@/components/global';
import { CategoriesProducts, FeaturedProducts, Hero } from '@/components/home';
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
