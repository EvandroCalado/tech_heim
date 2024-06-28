import prisma from '@/utils/db';
import { Product } from '@prisma/client';

export const fetchFeaturedProducts = async (): Promise<Product[]> => {
  try {
    const products = await prisma.product.findMany({
      where: {
        featured: true,
      },
    });

    if (!products) {
      throw new Error('No featured products found');
    }

    return products;
  } catch (error) {
    console.error('Error fetching featured products:', error);
    throw error;
  }
};

interface FetchAllProductsProps {
  search?: string;
  company?: string;
}

export const fetchAllProducts = async ({
  search = '',
  company = '',
}: FetchAllProductsProps) => {
  try {
    const filters = {
      AND: [] as any[],
    };

    if (search) {
      filters.AND.push({
        OR: [
          {
            name: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            company: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
      });
    }

    if (company) {
      filters.AND.push({
        company: {
          contains: company,
          mode: 'insensitive',
        },
      });
    }

    const products = await prisma.product.findMany({
      where: filters.AND.length > 0 ? filters : undefined,
      orderBy: {
        createdAt: 'desc',
      },
    });

    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
