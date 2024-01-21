import Image from 'next/image';

interface CardProps {
  id: string;
  title: string;
  content: JSX.Element;
}

export function Card({ id, title, content }: CardProps) {
  return (
    <div
      id={id}
      key={id}
      className="sticky top-0 flex h-screen w-full items-end justify-center text-white"
    >
      <div className="mb-[calc(5vh+3%)] flex flex-col gap-6 p-4">
        <h1 className="text-3xl drop-shadow-md">{title}</h1>
        <div className="leading-7">{content}</div>
        <Image
          src="https://source.unsplash.com/random/1000x1000"
          alt=""
          width={1000}
          height={1000}
          className="absolute left-0 top-0 -z-[1] h-full w-full object-cover brightness-50"
        />
      </div>
    </div>
  );
}
