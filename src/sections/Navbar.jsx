import { useState } from 'react';

import { firstName, lastName, navLinks } from '../constants/index.js';
import { Menu, X } from 'lucide-react';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a" onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-background shadow-2xl">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center py-5 mx-auto c-space">
          <img src="assets/aymen_logo.svg" alt="logo" className="w-10 h-10 mr-5 rounded-full" />
          <a href="/" className="text-forefround font-bold text-xl hover:text-white transition-colors">
            {firstName} {lastName}
          </a>

          <button
            onClick={toggleMenu}
            className="text-foreground ml-auto hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            {isOpen ? <X /> : <Menu />}
          </button>

          <nav className="sm:flex hidden ml-auto">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className=" p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
