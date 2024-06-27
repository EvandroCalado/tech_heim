import { Container, LoadingContainer } from '@/components/global';
import { FeaturedProducts, Hero } from '@/components/home';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Hero />

      <Container>
        <Suspense fallback={<LoadingContainer />}>
          <FeaturedProducts />
        </Suspense>
      </Container>
    </>
  );
}
