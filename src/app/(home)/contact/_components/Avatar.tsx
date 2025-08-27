'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function ContactAvatar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <>
      <div className="w-full pt-24">
        <div className="flex flex-col items-center justify-center">
          <Avatar
            aria-label="Avatar"
            className="mx-auto mt-6 h-48 w-48 border-4 border-zinc-100"
            style={{}}
          >
            <AvatarImage src="https://github.com/Brxlx.png" alt="@Brxlx" />
            <AvatarFallback>Bruno Santos</AvatarFallback>
          </Avatar>
          {/* Avatar */}
          <Link href="https://instagram.com/brcesar19" target="_blank" aria-label="Instagram">
            <div className="my-1 inline-flex -translate-y-2 rounded-2xl border-2 bg-linear-to-r from-pink-400 to-orange-400 p-2 transition-all duration-300 hover:scale-105">
              <h2 className="text-sm font-bold text-orange-50">@brcesar19</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
