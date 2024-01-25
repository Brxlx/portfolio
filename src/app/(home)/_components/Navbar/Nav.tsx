import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';
import { LuFormInput } from 'react-icons/lu';

import { ToggleTheme } from '../ToggleTheme';

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-3 text-base">
      <a href="/">
        <h2 className="break-before-all p-2 text-lg font-semibold tracking-tighter transition-transform hover:underline">
          Bruno Santos
        </h2>
      </a>
      <div className="flex items-center gap-6">
        <Link href="/techs" className="hover:underline active:underline">
          Tecnologias
        </Link>
        <Link
          href="https://github.com/Brxlx"
          target="_blank"
          className="inline-flex items-center gap-1 hover:underline active:underline"
        >
          <IoLogoGithub /> Projetos
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 hover:underline active:underline"
        >
          <LuFormInput /> Contato
        </Link>
        <ToggleTheme />
      </div>
    </nav>
  );
}
