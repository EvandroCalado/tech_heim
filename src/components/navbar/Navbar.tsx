import { FC } from 'react';
import { Container } from '../global';
import { CartButton } from './CartButton';
import { DarkMode } from './DarkMode';
import { LinksDropdown } from './LinksDropdown';
import { Logo } from './Logo';
import { Search } from './Search';

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <Search />

        <div className="flex items-center gap-4">
          <CartButton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
};
