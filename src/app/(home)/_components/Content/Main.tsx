import { useId } from 'react';
import { FaDocker } from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';
import { SiKubernetes } from 'react-icons/si';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Card } from '../Card';
import { Tecnologies } from '../Tecnologies/Tecnologies';
import { Masthead } from './Masthead';
import { Section } from './Section';

export function Main() {
  return (
    <main className="w-full pt-24">
      <h1 className="mb-12 text-center text-3xl font-bold">
        Quem sou <span className="text-red-500">eu</span>.
      </h1>
      {/* Avatar */}
      <Avatar
        className="mx-auto my-6 h-48 w-48 border-4 border-orange-300 dark:border-zinc-100"
        aria-label="Avatar"
      >
        <AvatarImage src="/self.jpg" alt="@Brxlx" />
        <AvatarFallback>Bruno Santos</AvatarFallback>
      </Avatar>
      {/* Avatar */}
      <div className="flex flex-col gap-6 px-2">
        <h2 className="text-center">
          Sou um <span className="font-bold text-red-500">Full-Stack Developer</span> com mais de{' '}
          <span className="font-bold text-red-500">4 anos</span> de experiência no mercado de
          trabalho.
        </h2>
      </div>
      <Masthead />
      <Tecnologies />
      <Card
        id={useId()}
        title="JavaScript"
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
      <Section />
    </main>
  );
}
