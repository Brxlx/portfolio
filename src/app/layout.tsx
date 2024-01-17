import './globals.css';

import type { Metadata } from 'next';
import { M_PLUS_Rounded_1c } from 'next/font/google';

const baseFont = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  preload: true,
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'Bruno Santos | Portfolio',
  description: 'This is my personal portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={baseFont.className}>{children}</body>
    </html>
  );
}
