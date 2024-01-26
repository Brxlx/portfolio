'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';

interface PortflioProps {
  img: string;
  title: string;
  content: string;
}

export function Portfolio({ img, title, content }: PortflioProps) {
  return (
    <div
      className="group max-w-[35ch] overflow-hidden rounded-md bg-cover p-[7rem_0_0] transition-transform duration-500 focus-within:scale-105 hover:scale-105"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="flex h-full w-full translate-y-[80%] flex-col gap-4 break-words bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2)_20%,rgba(0,0,0,1))] p-6 transition duration-500 after:w-full hover:translate-y-0 group-focus-within:translate-y-0 group-focus-within:delay-500 after:group-focus-within:duration-0 group-hover:translate-y-[0%] group-hover:delay-500">
        <h2 className="after:transition-translate relative w-fit max-w-full font-sans text-2xl font-bold text-orange-50 text-shadow-sm after:absolute after:-bottom-1 after:left-[calc(1.5rem*-1)] after:h-1 after:w-[calc(100%+1.5rem)] after:origin-left after:scale-x-0 after:bg-orange-100 after:duration-700 after:group-focus-within:scale-105 after:group-hover:scale-x-100">
          {title}
        </h2>
        <p className="text-white">{content}</p>

        <Button type="button" className="">
          <Link href="" aria-label="link" className="">
            Learn More
          </Link>
        </Button>
      </div>
    </div>
  );
}
