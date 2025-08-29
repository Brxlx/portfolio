import Image from 'next/image';
import { JSX } from 'react';

interface CardProps {
  id: string;
  title: string;
  content: JSX.Element;
}

export function Card({ id, title, content }: CardProps) {
  return (
    <div id={id} key={id} className="sticky top-0 flex h-screen w-full justify-center text-white">
      <div className="mb-[calc(5vh+3%)] flex flex-col items-center gap-6 p-2 py-12">
        <h1 className="font-sans text-5xl text-shadow-lg">{title}</h1>
        <div className="text-md my-8 font-sans leading-7">{content}</div>
        <Image
          src="https://source.unsplash.com/random/1000x1000"
          alt=""
          width={1000}
          height={1000}
          className="absolute top-0 left-0 -z-1 h-full w-full object-cover brightness-50"
        />
      </div>
    </div>
  );
}
