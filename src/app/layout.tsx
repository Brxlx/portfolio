import './globals.css';

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';

import { ThemeProvider } from './(home)/_components/ThemeProvider';

const baseFont = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'Bruno Santos | Portfolio',
  description: 'This is my personal portfolio.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={cn(
          baseFont.className,
          'duration-3000 container break-words bg-orange-50 p-5 text-zinc-900 transition-all duration-700 dark:bg-zinc-900 dark:text-zinc-300'
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
