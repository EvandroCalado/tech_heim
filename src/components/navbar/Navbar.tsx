import { Container } from '../global';
import { CartButton } from './CartButton';
import { DarkMode } from './DarkMode';
import { Logo } from './Logo';
import { MenuMobile } from './MenuMobile';
import { Search } from './Search';

export interface NavbarProps {}

export const Navbar = () => {
  return (
    <nav className="border-b">
      <Container className="flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <Logo />

        <div className="flex items-center gap-2">
          <Search />
          <CartButton />
          <DarkMode />
          <MenuMobile />
        </div>
      </Container>
    </nav>
  );
};
