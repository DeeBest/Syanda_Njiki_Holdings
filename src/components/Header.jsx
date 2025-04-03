import { FaBars } from 'react-icons/fa6';
import logoImg from '../assets/logo-img.png';
import { Link, NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="flex items-center justify-center border-b-2 border-b-sky-600">
      <section className="relative flex items-center justify-between flex-1 w-full max-w-4xl gap-10 p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[70px]">
            <img
              src={logoImg}
              alt="logo image"
              className="object-cover w-full"
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
        <FaBars className="flex text-2xl sm:hidden" />
        <nav className="absolute top-0 left-0 z-50 flex flex-col items-center hidden w-full h-screen p-4 bg-slate-400">
          <FaTimes className="self-end text-2xl" />
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
          <a className="hover:text-[#6c6c6c] duration-500" href="#contact">
            Contact
          </a>
        </nav>
      </section>
    </header>
  );
};
export default Header;
