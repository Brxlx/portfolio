import { IoArrowForward } from 'react-icons/io5';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import { Card } from '../Card';
import { Tecnologies } from '../Tecnologies/Tecnologies';
import { Masthead } from './Masthead';
import { Section } from './Section';

export function Main() {
  return (
    <main className="w-full p-2 pt-24">
      <h1 className="mb-12 text-center text-3xl font-bold">
        Quem sou <span className="text-red-500">eu</span>.
      </h1>
      {/* Avatar */}
      <Avatar
        className="mx-auto my-6 h-36 w-36 border-4 border-orange-300 dark:border-zinc-100"
        aria-label="Avatar"
      >
        <AvatarImage src="https://github.com/Brxlx.png" alt="@Brxlx" />
        <AvatarFallback>Bruno Santos</AvatarFallback>
      </Avatar>
      {/* Avatar */}

      <h2 className="text-center">
        Sou um <span className="font-bold text-red-500">Full-Stack Developer</span>, com mais de{' '}
        <span className="font-bold text-red-500">4 anos</span> de experiência no mercado de
        trabalho.
      </h2>
      <Masthead />
      <Tecnologies />
      {/* TODO  */}
      <Card />
      <Card />
      <Card />
      <Card />
      <a className="inline-flex items-center gap-1 indent-1 text-red-500 hover:underline" href="#">
        Saiba mais sobre mim <IoArrowForward />
      </a>
      <Section />
    </main>
  );
}
