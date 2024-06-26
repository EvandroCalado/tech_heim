import { Container } from '@/components/global';
import { Header } from '@/components/header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'tech Heim',
  description: 'Loja de tecnologia',
  icons: {
    icon: '/logo-white.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Container className="py-20">{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
