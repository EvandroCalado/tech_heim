import { Container } from '@/components/global';
import { ProductsContainer } from '@/components/products';
import { FC } from 'react';

interface ProductsContainerProps {
  searchParams?: {
    layout?: 'list' | 'grid';
    brand?: string;
    search?: string;
  };
}

const ProductsPage: FC<ProductsContainerProps> = ({ searchParams }) => {
  const layout = searchParams?.layout || 'grid';
  const brand = searchParams?.brand || '';
  const search = searchParams?.search || '';

  return (
    <Container className="my-20">
      <ProductsContainer layout={layout} search={search} brand={brand} />
    </Container>
  );
};

export default ProductsPage;
