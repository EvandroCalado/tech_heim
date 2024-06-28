import { Container } from '@/components/global';
import { ProductsContainer } from '@/components/products';
import { FC } from 'react';

interface ProductsContainerProps {
  searchParams?: {
    layout?: 'list' | 'grid';
    search?: string;
    company?: string;
  };
}

const ProductsPage: FC<ProductsContainerProps> = ({ searchParams }) => {
  const layout = searchParams?.layout || 'grid';
  const search = searchParams?.search || '';
  const company = searchParams?.company || '';

  return (
    <Container className="my-20">
      <ProductsContainer layout={layout} search={search} company={company} />
    </Container>
  );
};

export default ProductsPage;
