import { Container } from '../global';
import { CartButton } from './CartButton';
import { DarkMode } from './DarkMode';
import { Logo } from './Logo';
import { MenuMobile } from './MenuMobile';
import { NavLinks } from './NavLinks';
import { Search } from './Search';

export interface NavbarProps {}

export const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex items-center justify-between gap-4 py-8">
        <Logo />

        <NavLinks />

        <div className="flex items-center gap-4">
          <Search />
          <CartButton />
          <DarkMode />
          <MenuMobile />
        </div>
      </Container>
    </nav>
  );
};
