import { IconMenu } from '@/icons';
import { links } from '@/utils';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

export interface LinksDropdownProps {}

export const LinksDropdown: FC<LinksDropdownProps> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="flex max-w-[100px] gap-4"
        >
          <IconMenu />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        {links.map((links) => (
          <DropdownMenuItem key={links.href}>
            <Link href={links.href} className="w-full capitalize">
              {links.label}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
