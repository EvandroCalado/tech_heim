import { links } from '@/utils';
import Link from 'next/link';
import { Separator } from '../ui/separator';

export const Navbar = () => {
  return (
    <nav>
      <ul className="hidden items-center gap-4 md:flex">
        {links.map((link) => (
          <li key={link.href} className="group">
            <Link
              href={link.href}
              className="group relative font-light capitalize duration-150 hover:text-primary"
            >
              {link.label}
            </Link>

            <Separator className="mx-auto mt-1 w-0 duration-150 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-primary-foreground group-hover:via-primary group-hover:to-primary-foreground" />
          </li>
        ))}
      </ul>
    </nav>
  );
};
