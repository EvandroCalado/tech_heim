import { links } from '@/utils';
import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <ul className="hidden items-center gap-4 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="relative font-light capitalize after:absolute after:-bottom-1 after:left-1/2 after:h-[1px] after:w-0 after:-translate-x-1/2 after:bg-primary after:duration-150 after:content-[''] hover:text-primary after:hover:w-full"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
