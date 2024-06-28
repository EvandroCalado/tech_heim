'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from '../ui/input';

export const ProductSearch = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [search, setSearch] = useState(
    searchParams?.get('search')?.toString() || '',
  );

  const handleSearch = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`/products?${params.toString()}`);
  }, 300);

  useEffect(() => {
    if (!searchParams?.get('search')) {
      setSearch('');
    }
  }, [searchParams]);

  return (
    <Input
      type="search"
      name="search"
      placeholder="Pesquisar..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value), handleSearch(e.target.value);
      }}
    />
  );
};
