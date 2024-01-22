import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

import { ToggleTheme } from '../ToggleTheme';

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-3 text-base">
      <h2 className="break-before-all p-2 text-lg font-semibold tracking-tighter">Bruno Santos</h2>
      <div className="flex items-center gap-6">
        <Link href="/tecs" className="hover:underline active:underline">
          Tecnologias
        </Link>
        <Link
          href="https://github.com/Brxlx"
          target="_blank"
          className="inline-flex items-center gap-1 hover:underline active:underline"
        >
          <IoLogoGithub /> Projetos
        </Link>
        <ToggleTheme />
      </div>
    </nav>
  );
}
