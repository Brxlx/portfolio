'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';

export function ToggleTheme() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, themes, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <div className="inline-flex items-center rounded-3xl bg-orange-100 p-1 dark:bg-zinc-600">
      {themes
        .filter(t => t !== 'system') // because useTheme includes 'system' value into the array.
        .map(t => {
          const checked = t === resolvedTheme;
          return (
            <button
              key={t}
              className={`${checked ? 'bg-white text-black' : ''} cursor-pointer rounded-3xl p-2`}
              onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
              aria-label="Toggle theme"
            >
              {t === 'light' ? <IoSunny /> : <IoMoon />}
            </button>
          );
        })}
    </div>
  ) : (
    <div />
  );
}
