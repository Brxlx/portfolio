import { TecnologyCard } from './TecnologyCard';

export function Tecnologies() {
  return (
    <article id="tecs" className="mx-auto max-w-3xl px-8">
      <section>
        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <TecnologyCard imgPath="/nodejs.png" alt="Node.js" name="Node.js" level="Avançado" />
          <TecnologyCard imgPath="/react.png" alt="React Js" name="React js" level="Avançado" />
        </ul>
      </section>
    </article>
  );
}
