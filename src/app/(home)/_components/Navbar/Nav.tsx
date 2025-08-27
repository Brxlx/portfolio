import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { FiFolderMinus } from 'react-icons/fi';
import { IoLogoGithub } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

import { ToggleTheme } from '../ToggleTheme';

export function Nav() {
  return (
    <nav className="flex items-center justify-between gap-3 text-base">
      <a href="/">
        <h2 className="break-before-all p-2 text-lg font-semibold tracking-tighter hover:underline">
          Bruno Santos
        </h2>
      </a>
      <div className="flex gap-6">
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
              >
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup className="my-4 flex flex-col gap-4">
                <DropdownMenuItem className="outline-none">
                  <Link href="/techs" className="hover:underline active:underline">
                    Tecnologias
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="outline-none">
                  <Link
                    href="https://github.com/Brxlx"
                    target="_blank"
                    className="inline-flex items-center gap-1 hover:underline active:underline"
                  >
                    <IoLogoGithub /> Projetos
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="outline-none">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 hover:underline active:underline"
                  >
                    <FiFolderMinus /> Contato
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden items-center gap-6 md:flex">
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
            <FiFolderMinus /> Contato
          </Link>
        </div>
        <ToggleTheme />
      </div>
    </nav>
  );
}
