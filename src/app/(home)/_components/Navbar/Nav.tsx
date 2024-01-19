import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';

import { ToggleTheme } from '../ToggleTheme';
export function Nav() {
  return (
    <nav className="flex items-center gap-3 text-base">
      <h2 className="p-2 text-lg font-semibold tracking-tighter">Bruno Santos</h2>
      <div className="flex items-center gap-6">
        <Link href="#">About</Link>
        <Link href="#" className="inline-flex items-center gap-1">
          <IoLogoGithub /> Projects
        </Link>
        <ToggleTheme />
      </div>
    </nav>
  );
}
