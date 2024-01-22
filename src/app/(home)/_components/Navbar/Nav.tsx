import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

import { ToggleTheme } from '../ToggleTheme';

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-3 text-base">
      <h2 className="p-2 text-lg font-semibold tracking-tighter">Bruno Santos</h2>
      <div className="flex items-center gap-6">
        <Link href="#">
          <span className="hover:underline active:underline">Sobre</span>
        </Link>
        <Link
          href="https://github.com/Brxlx"
          target="_blank"
          className="inline-flex items-center gap-1"
        >
          <IoLogoGithub /> <span className="hover:underline active:underline">Projetos</span>
        </Link>
        <ToggleTheme />
      </div>
    </nav>
  );
}
