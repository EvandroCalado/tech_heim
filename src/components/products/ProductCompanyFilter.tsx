'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

interface ProductCompanyFilterProps {
  name: string;
  label: string;
}

export const ProductCompanyFilter: FC<ProductCompanyFilterProps> = ({
  name,
  label,
}) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [company, setCompany] = useState(searchParams.get('company') || '');

  const handleCompanyFilter = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set('company', value);
    } else {
      params.delete('company');
    }
    replace(`/products?${params.toString()}`);
  }, 100);

  useEffect(() => {
    if (!searchParams?.get('company')) {
      setCompany('');
    }
  }, [searchParams]);

  return (
    <>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id={label}
          name={name}
          checked={company === label}
          value={label}
          onChange={(e) => {
            setCompany(e.target.value), handleCompanyFilter(e.target.value);
          }}
          className="peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        />
        <label
          htmlFor={label}
          className="w-full cursor-pointer text-sm font-medium capitalize leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {label}
        </label>
      </div>
    </>
  );
};
