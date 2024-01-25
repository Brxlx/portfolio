import { MainAvatar } from './MainAvatar';

export function Masthead() {
  return (
    <section className="relative mb-0 flex h-[33rem] items-center justify-center">
      <div className="absolute h-full w-full overflow-hidden">
        <video
          className="absolute left-1/2 top-1/2 h-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2
            object-cover opacity-95 dark:opacity-30"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/coding-2.mp4" type="video/mp4;"></source>
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
            Sou um <span className="font-bold text-red-500">Full-Stack Developer</span> com mais de{' '}
            <span className="font-bold text-red-500">4 anos</span> de experiência no mercado de
            trabalho.
          </h2>
          <h2 className="text-center leading-8 text-orange-50">
            Utilizo as <span className="font-bold text-sky-500">tecnologias</span> mais{' '}
            <span className="font-bold text-green-500">recentes</span> e as melhores práticas,
            estando totalmente alinhado com as demandas do mercado atual.
          </h2>
        </div>
      </div>
    </section>
  );
}
