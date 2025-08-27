import Link from 'next/link';

import { MainAvatar } from './MainAvatar';

export function Masthead() {
  return (
    <section className="relative mb-0 flex h-132 items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 h-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover opacity-95 dark:opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/coding-3.mp4" type="video/mp4;"></source>
        </video>
      </div>
      <div className="z-10 px-8 text-center shadow-black drop-shadow-lg">
        <div className="w-full">
          <h1 className="mx-auto mb-12 text-center text-3xl font-bold text-orange-50">
            Quem sou <span className="text-red-500">eu</span> .
          </h1>
          <MainAvatar />
        </div>
        <div className="flex flex-col gap-6 px-2">
          <h2 className="text-center leading-8 text-orange-50">
            Sou um{' '}
            <span className="font-bold text-red-500">
              <i>Senior Full-Stack Developer</i>
            </span>{' '}
            com mais de <span className="font-bold text-red-500">6 anos</span> de experiência no
            <span className="font-bold text-green-500"> mercado de trabalho.</span>
          </h2>
          <h2 className="text-center leading-8 text-orange-50">
            Utilizo as{' '}
            <Link href="/techs" className="cursor-pointer">
              <span className="animate-pulse font-bold text-sky-500 transition-colors duration-300 hover:text-red-500">
                tecnologias
              </span>
            </Link>{' '}
            mais <span className="font-bold text-green-500">recentes</span> e as{' '}
            <span className="font-bold text-yellow-500"> melhores práticas, </span>
            estando totalmente alinhado com as demandas do mercado atual.
          </h2>
        </div>
      </div>
    </section>
  );
}
