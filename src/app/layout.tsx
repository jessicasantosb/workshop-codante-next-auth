import type { Metadata } from 'next';
import { Dosis } from 'next/font/google';
import './globals.css';

const dosis = Dosis({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autenticação',
  description: 'Workshop Codante para aprender Next Auth',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-BR'>
      <body className={dosis.className}>{children}</body>
    </html>
  );
}
