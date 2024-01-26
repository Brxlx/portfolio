export function Techs() {
  return (
    <main className="w-full pt-24">
      <section className="relative mb-6 flex h-80 items-center justify-center">
        <div className="absolute h-full w-full overflow-hidden">
          <video
            className="absolute left-1/2 top-1/2 h-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2
            object-cover opacity-85 dark:opacity-30"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/coding.mp4" type="video/mp4;"></source>
          </video>
        </div>
        <div className="z-10 px-8 text-center shadow-black drop-shadow-lg">
          <p className="text-md mb-4 font-mono uppercase text-white">Bem-vindo</p>
          <p className="text-4xl font-medium text-white">
            Minha lista de <span className="text-sky-500">tecnologias</span> que uso no meu{' '}
            <span className="text-green-500">dia-a-dia</span>.
          </p>
        </div>
      </section>
    </main>
  );
}
