import logoImg from '../assets/logo-img.png';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-center">
      <section className="flex items-center justify-between flex-1 w-full max-w-4xl gap-10 p-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-[70px]">
            <img
              src={logoImg}
              alt="logo image"
              className="object-cover w-full"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[#4090f9] font-bold font-serif text-4xl">
              S<span className="text-5xl">n</span>H
            </h1>
            <hr className="w-full h-[2px] bg-[#4090f9]" />
            <h4 className="text-[#6c6c6c] font-light text-xs">
              Synda Njiki Holdings Pty(ltd)
            </h4>
          </div>
        </Link>
        <nav className="flex items-center gap-3 text-base font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#6c6c6c]'
                : 'text-black hover:text-[#6c6c6c] duration-500'
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'text-[#6c6c6c]'
                : 'text-black hover:text-[#6c6c6c] duration-500'
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink className="hover:text-[#6c6c6c] duration-500" to="#contact">
            Contact
          </NavLink>
        </nav>
      </section>
    </header>
  );
};
export default Header;
