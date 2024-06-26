import { Container } from '@/components/global';
import { FeaturedProducts, Hero } from '@/components/home';

export default function Home() {
  return (
    <>
      <Hero />

      <Container>
        <FeaturedProducts />
      </Container>
    </>
  );
}
