import { IconCode } from '@/icons';
import Link from 'next/link';
import { Button } from '../ui/button';

export interface LogoProps {}

export const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <IconCode color="#fff" />
      </Link>
    </Button>
  );
};
