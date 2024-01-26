'use client';

import { useEffect, useState } from 'react';

import { Nav } from './Nav';

export function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <div className="mx-auto max-w-3xl">
      <Nav />
    </div>
  );
}
