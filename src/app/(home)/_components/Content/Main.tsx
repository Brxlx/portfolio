import { IoArrowForward } from 'react-icons/io5';

import { Masthead } from './Masthead';
import { Section } from './Section';

export function Main() {
  return (
    <main className="w-full p-2 pt-24">
      <h1 className="mb-12 text-center text-3xl font-bold">
        Quem sou <span className="text-red-500">eu</span>
      </h1>
      <Masthead />
      <h2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde exercitationem alias tempore
        dolor sit ipsum corrupti sint ut temporibus debitis itaque veritatis mollitia culpa,
        reprehenderit magni atque. Fuga, velit voluptate.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel porro ab est! Quasi
        quisquam voluptate deleniti et sequi! Ea officiis animi, maxime ipsa esse suscipit ratione
        eligendi soluta in.
      </p>
      <a className="inline-flex items-center gap-1 indent-1 text-red-500 hover:underline" href="#">
        Saiba mais sobre mim <IoArrowForward />
      </a>
      <Section />
    </main>
  );
}
