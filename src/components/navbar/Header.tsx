import { Container } from '../global';
import { Separator } from '../ui/separator';
import { CartButton } from './CartButton';
import { DarkMode } from './DarkMode';
import { Logo } from './Logo';
import { MenuMobile } from './MenuMobile';
import { Navbar } from './Navbar';
import { Search } from './Search';

export const Header = () => {
  return (
    <header>
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

      <Separator className="mx-auto rounded-full bg-gradient-to-r from-primary-foreground via-primary to-primary-foreground px-4" />
    </header>
  );
};
