import { Container } from '../global';
import { CartButton } from './CartButton';
import { DarkMode } from './DarkMode';
import { Logo } from './Logo';
import { MenuMobile } from './MenuMobile';
import { Navbar } from './Navbar';
import { Search } from './Search';

export const Header = () => {
  return (
    <header className="border-b">
      <Container className="flex items-center justify-between gap-4 py-8">
        <Logo />

        <Navbar />

        <div className="flex items-center gap-4">
          <Search />
          <CartButton />
          <DarkMode />
          <MenuMobile />
        </div>
      </Container>
    </header>
  );
};
