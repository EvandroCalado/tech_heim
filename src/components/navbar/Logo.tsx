import { IconRobot } from '@tabler/icons-react';
import Link from 'next/link';
import { Button } from '../ui/button';

export interface LogoProps {}

export const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <IconRobot />
      </Link>
    </Button>
  );
};
