import { IoArrowForward } from 'react-icons/io5';

import img from '@/../public/portfolio.jpg';

import { Masthead } from './Masthead';
import { Portfolio } from './Portflio';

export function Main() {
  return (
    <main className="w-full pt-24">
      <Masthead />
      <section className="my-10 flex flex-col items-center justify-center gap-6">
        <h1 className="mx-auto text-center text-3xl font-bold dark:text-orange-50">Portfolio .</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Portfolio
            img={img.src}
            title="Something awesome"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab veritatis nam
          omnis quibusdam vel, mollitia consequuntur quasi laborum illo magni dolor voluptatum
          repellendus nobis nostrum nemo nulla, placeat dignissimos!"
          />
          <Portfolio
            img={img.src}
            title="Something awesome"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab veritatis nam
          omnis quibusdam vel, mollitia consequuntur quasi laborum illo magni dolor voluptatum
          repellendus nobis nostrum nemo nulla, placeat dignissimos!"
          />
          <Portfolio
            img={img.src}
            title="Something awesome"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, ab veritatis nam
          omnis quibusdam vel, mollitia consequuntur quasi laborum illo magni dolor voluptatum
          repellendus nobis nostrum nemo nulla, placeat dignissimos!"
          />
        </div>
      </section>
      {/* <Card
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
      /> */}
      <a className="inline-flex items-center gap-1 indent-1 text-red-500 hover:underline" href="#">
        Saiba mais sobre mim <IoArrowForward />
      </a>
    </main>
  );
}
