import Image from 'next/image';

interface TecnologyProps {
  imgPath: string;
  name: string;
  alt: string;
  level: string;
}

export function TecnologyCard({ imgPath, name, alt, level }: TecnologyProps) {
  return (
    <div className="w-full">
      <Image src={imgPath} alt={alt} width={800} height={800} />
      <span>{name}</span>
      <p>{level}</p>
    </div>
  );
}
