import { TecnologyCard } from './TecnologyCard';

interface TecnologiesProps {
  header: string;
  techs: {
    imgPath: string;
    accentColor: string;
    name: string;
    alt: string;
    kind: string;
    content?: string;
  }[];
}

export function Tecnologies({ header, techs }: TecnologiesProps) {
  return (
    <section className="mx-auto max-w-3xl px-8">
      <h1 className="my-6 text-center text-3xl ">{header}</h1>
      <div className="grid grid-cols-2 place-items-center gap-12 md:grid-cols-3">
        {techs.map((tech, i) => (
          <TecnologyCard
            key={i}
            imgPath={tech.imgPath}
            alt={tech.alt}
            name={tech.name}
            kind={tech.kind}
            accentColor={tech.accentColor}
            // content={tech?.content ? tech.content : undefined}
          />
        ))}
      </div>
    </section>
  );
}
