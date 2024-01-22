import { useId } from 'react';
import { FaDocker } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';
import { SiKubernetes } from 'react-icons/si';

import { Card } from '../Card';
import { Masthead } from './Masthead';

export function Main() {
  return (
    <main className="w-full pt-24">
      <Masthead />
      <Card
        id={useId()}
        title="Main Stack"
        content={
          <h2 className="text-center">
            Trabalhando com uma stack toda focada em{' '}
            <span className="font-bold text-yellow-400 drop-shadow-lg">JavaScript</span>/
            <span className="font-bold text-blue-700">Typescript</span>
          </h2>
        }
      />
      <Card
        id={useId()}
        title="Know-how"
        content={
          <h2>
            Desenvolvendo aplicações <span className="font-bold">modernas</span>,{' '}
            <span className="font-bold">escaláveis</span> e com as melhores práticas do mercado,
            construí aplicações que atendam a todas as demandas, desde interfaces de dashboards a
            serviços web para API&copy;s RESTfull, GraphQL e Edge e também aplicativos mobile.
          </h2>
        }
      />
      <Card
        id={useId()}
        title="Testes"
        content={
          <h2>Também tenho experiência com testes automatizados, desde unitários, até E2E.</h2>
        }
      />
      <Card
        id={useId()}
        title="Containers"
        content={
          <h2>
            Atuando sempre com containerização, com Docker, e orquestrador de contâineres, com o
            Kubernetes.
            <FaDocker className="h-10 w-10 text-blue-300" />
            <SiKubernetes className="h-10 w-10 text-blue-500" />
          </h2>
        }
      />
      <a className="inline-flex items-center gap-1 indent-1 text-red-500 hover:underline" href="#">
        Saiba mais sobre mim <IoArrowForward />
      </a>
    </main>
  );
}
