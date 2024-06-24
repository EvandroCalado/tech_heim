type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/about', label: 'sobre' },
  { href: '/products', label: 'produtos' },
  { href: '/favorites', label: 'favoritos' },
  { href: '/cart', label: 'carrinho' },
  { href: '/orders', label: 'pedidos' },
];
