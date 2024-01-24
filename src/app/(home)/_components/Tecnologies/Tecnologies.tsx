import { TecnologyCard } from './TecnologyCard';

interface TecnologiesProps {
  header: string;
}

export function Tecnologies({ header }: TecnologiesProps) {
  return (
    <section className="mx-auto max-w-3xl px-8">
      <h1 className="my-6 text-center text-3xl ">{header}</h1>
      <div className="grid grid-cols-2 place-items-center gap-12 md:grid-cols-3">
        <TecnologyCard
          imgPath="/nodejs.webp"
          alt="Javascript"
          name="Javascript"
          kind="Linguagem"
          accentColor="yellow"
          content="Linguagem moderna, poderosa e versátil, capaz de operar em todos os âmbitos de execuções, incluindo processamento direto do navegador."
        />
        <TecnologyCard
          imgPath="/nodejs.webp"
          alt="Typescript"
          name="Typescript"
          kind="Linguagem"
          accentColor="teal"
          content="Uma evolução do Javascript que oferece tipagens fortes, garantindo mais maturidade, integridade e escalabilidade de código."
        />
        <TecnologyCard
          imgPath="/nodejs.webp"
          alt="Node.js"
          name="Node.js"
          kind="Backend"
          accentColor="green"
          content="Tecnologia(JS Runtime) para construir aplicações backend rápidas e confiáveis com JS."
        />
        <TecnologyCard
          imgPath="/react.png"
          alt="React js"
          name="React Js"
          kind="Frontend"
          accentColor="blue"
          content="Biblioteca Js para construção de interfaces reativas modernas."
        />
        <TecnologyCard
          imgPath="/react.png"
          alt="React Native"
          name="React Native"
          kind="Mobile"
          accentColor="purple"
          content="Tecnologia capaz de construir aplicações mobiles natives com JS."
        />
      </div>
    </section>
  );
}
