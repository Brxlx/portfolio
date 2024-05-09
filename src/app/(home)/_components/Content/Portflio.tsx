'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Markdown from 'react-markdown';

import { Button } from '@/components/ui/button';

interface PortflioProps {
  img: string;
  title: string;
  content: string;
  link?: string;
}

export function Portfolio({ img, title, content, link }: PortflioProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  return (
    <div
      className="group max-w-[35ch] overflow-hidden rounded-md bg-cover p-[7rem_0_0] transition-transform duration-500 focus-within:scale-105 hover:scale-105"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="flex h-full w-full translate-y-[70%] flex-col gap-4 break-words bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2)_20%,rgba(0,0,0,1))] p-6 transition duration-500 after:w-full hover:translate-y-0 group-focus-within:translate-y-0 group-focus-within:delay-500 after:group-focus-within:duration-0 group-hover:translate-y-[0%] group-hover:delay-500">
        <h2 className="after:transition-translate relative w-fit max-w-full font-sans text-2xl font-bold text-orange-50 text-shadow-sm after:absolute after:-bottom-1 after:left-[calc(1.5rem*-1)] after:h-1 after:w-[calc(100%+1.5rem)] after:origin-left after:scale-x-0 after:bg-orange-100 after:duration-700 after:group-focus-within:scale-105 after:group-hover:scale-x-100">
          {title}
        </h2>
        {<Markdown className="text-white">{content}</Markdown>}
        {link?.length && (
          <Link href={link} aria-label="link">
            <Button
              type="button"
              variant="default"
              className="w-full bg-[hsl(0_0%_100%)] !text-[hsl(240_5.9%_10%)] hover:bg-[hsl(0_0%_90%)]"
            >
              Ver Projeto
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
