import Image from 'next/image';

interface TecnologyProps {
  imgPath: string;
  name: string;
  kind: string;
  alt: string;
  accentColor: string;
  content: string;
}

export function TecnologyCard({ imgPath, name, kind, alt, accentColor, content }: TecnologyProps) {
  return (
    <div className="h-full max-w-56 rounded-md border p-6 transition-transform duration-500 hover:scale-105 dark:bg-[linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.2)_20%,rgba(0,0,0,1))]">
      <Image src={imgPath} alt={alt} width={500} height={500} className="aspect-square bg-cover" />
      <div className="flex flex-col gap-3 break-words">
        <span className="font-sans text-sm font-bold" style={{ color: accentColor }}>
          {kind}
        </span>
        <h3 className="text-2xl font-semibold">{name}</h3>
        <h2 className="font-sans">{content}</h2>
      </div>
    </div>
  );
}
