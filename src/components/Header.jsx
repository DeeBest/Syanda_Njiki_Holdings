import { FaBars } from 'react-icons/fa6';
import logoImg from '../assets/logo-img.png';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="sticky top-0 left-0 flex items-center justify-center bg-white border-b-2 dark:bg-black border-b-sky-600 z-[1000]">
      <section className="relative flex items-center justify-between flex-1 w-full max-w-4xl gap-10 p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[90px] h-[90px] rounded-full bg-white overflow-hidden flex items-center justify-center">
            <img
              src={logoImg}
              alt="logo image"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-4xl font-bold text-sky-600">
              S<span className="text-5xl">n</span>H
            </h1>
            <hr className="w-full h-[2px] bg-sky-600" />
            <h4 className="text-[#6c6c6c] font-light text-xs">
              Syanda Njiki Holdings Pty(ltd)
            </h4>
          </div>
        </Link>
        <nav className="items-center hidden gap-3 text-base font-medium sm:flex">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-[#6c6c6c]' : 'hover:text-[#6c6c6c] duration-500'
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-[#6c6c6c]' : 'hover:text-[#6c6c6c] duration-500'
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-[#6c6c6c]' : 'hover:text-[#6c6c6c] duration-500'
            }
            to="/services"
          >
            Services
          </NavLink>
          <a className="hover:text-[#6c6c6c] duration-500" href="#contact">
            Contact
          </a>
        </nav>
        <FaBars
          className="flex text-2xl duration-500 rounded-sm cursor-pointer sm:hidden text-sky-600 hover:outline-slate-400 hover:outline"
          onClick={toggleMobileNav}
        />
        <nav
          className={`absolute top-0 ${
            isMobileNavOpen ? 'left-[0]' : 'left-[100%]'
          } flex flex-col items-center w-full h-screen p-1 text-base font-medium bg-[rgba(148,163,184,0.95)] dark:bg-[rgba(30,41,59,0.95)] sm:hidden transition-all duration-300 ease-in-out`}
          id="mobile-nav"
        >
          <FaTimes
            className="self-start text-2xl text-red-600 duration-500 rounded-sm cursor-pointer hover:outline-slate-100 hover:outline"
            onClick={toggleMobileNav}
          />
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#6c6c6c]'
                : 'hover:text-[#6c6c6c] hover:bg-slate-100 w-full text-center duration-500'
            }
            onClick={toggleMobileNav}
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#6c6c6c]'
                : 'hover:text-[#6c6c6c] hover:bg-slate-100 w-full text-center duration-500'
            }
            onClick={toggleMobileNav}
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#6c6c6c]'
                : 'hover:text-[#6c6c6c] hover:bg-slate-100 w-full text-center duration-500'
            }
            onClick={toggleMobileNav}
            to="/services"
          >
            Services
          </NavLink>
          <a
            className="hover:text-[#6c6c6c] hover:bg-slate-100 w-full text-center duration-500"
            href="#contact"
            onClick={toggleMobileNav}
          >
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
};
export default Header;
