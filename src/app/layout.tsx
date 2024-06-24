import { Navbar } from '@/components/navbar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Providers from './Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Store',
  description: 'Dev Store loja online',
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
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
