import {
  IconDesktop,
  IconGames,
  IconMobile,
  IconServer,
  IconSmartWatch,
  IconTablet,
} from '@/icons';

type CategoryLink = {
  name: string;
  icon: React.ReactNode;
};

export const categoriesLinks: CategoryLink[] = [
  {
    name: 'desktop',
    icon: <IconDesktop className="h-full w-full" />,
  },
  {
    name: 'servidor',
    icon: <IconServer className="h-full w-full" />,
  },
  {
    name: 'tablet',
    icon: <IconTablet className="h-full w-full" />,
  },
  {
    name: 'relógio',
    icon: <IconSmartWatch className="h-full w-full" />,
  },
  {
    name: 'telefonia',
    icon: <IconMobile className="h-full w-full" />,
  },
  {
    name: 'jogos',
    icon: <IconGames className="h-full w-full" />,
  },
];
