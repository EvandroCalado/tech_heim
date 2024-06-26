import { IconLogo } from '@/icons';
import Link from 'next/link';

export interface LogoProps {}

export const Logo = () => {
  return (
    <Link href="/">
      <IconLogo size={50} />
    </Link>
  );
};
