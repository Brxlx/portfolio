import { Navbar } from '../Navbar';

export function Header() {
  return (
    <header className="fixed z-20 w-full rounded-full p-2 backdrop-blur-md">
      <Navbar />
    </header>
  );
}
