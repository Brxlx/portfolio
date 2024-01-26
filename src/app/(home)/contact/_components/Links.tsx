'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { contact } from '@/consts';

export function Links() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="my-12 flex flex-col items-center justify-center gap-4">
      {contact.map((ct, i) => (
        <Link key={i} href={ct.link} aria-label={`Meu ${ct.title}`} className="w-[55%] md:w-[30%]">
          <div className="flex w-full items-center justify-center gap-4 rounded-2xl border-2 p-4 transition-transform duration-700 hover:scale-105">
            <ct.icon
              color={resolvedTheme && resolvedTheme === 'light' ? ct.colorWhite : ct.colorDark}
              className="h-9 w-9"
            />
            {ct.title}
          </div>
        </Link>
      ))}
    </div>
  );
}
