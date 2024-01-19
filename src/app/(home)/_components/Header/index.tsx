import { Navbar } from '../Navbar';

export function Header() {
  return (
    <header className="fixed z-20 w-full p-2 backdrop-blur-lg">
      <Navbar />
    </header>
  );
}
