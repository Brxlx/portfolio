import Image from 'next/image';

interface TecnologyProps {
  imgPath: string;
  name: string;
  kind: string;
  alt: string;
  accentColor: string;
  content?: string;
}

export function TecnologyCard({ imgPath, name, kind, alt, accentColor, content }: TecnologyProps) {
  return (
    <div className="w-44 p-6 transition-transform duration-500 hover:scale-105">
      <Image
        src={imgPath}
        alt={alt}
        width={500}
        height={500}
        className="aspect-square h-24 w-24 bg-cover"
      />
      <div className="flex flex-col gap-3 break-words">
        <span className="my-2 font-sans text-sm font-bold" style={{ color: accentColor }}>
          {kind}
        </span>
        <h3 className="text-xl font-semibold">{name}</h3>
        <h2 className="font-sans">{content}</h2>
      </div>
    </div>
  );
}
