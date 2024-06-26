import { fetchFeaturedProducts } from '@/actions';
import { EmptyList, SectionTitle } from '../global';
import { ProductsGrid } from '../products';

export const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle text="Produtos em destaque" />
      <ProductsGrid products={products} />
    </section>
  );
};
