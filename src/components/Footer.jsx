import logoImg from '../assets/logo-img.png';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationPin,
  FaPhone,
} from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="w-full text-sm">
      <section className="flex flex-col w-full max-w-4xl p-4 mx-auto">
        <div className="flex flex-col items-start justify-between w-full gap-5 sm:flex-row">
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

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex flex-col" id="contact">
              <h3 className="font-serif font-semibold text-[#6c6c6c] mb-1">
                Contact Us
              </h3>
              <div className="flex items-start gap-1">
                <FaLocationPin className="text-xl" />
                <div>
                  <p>220 Tambo Village,</p>
                  <p>Emzinoni Bethal,</p>
                  <p>Mpumalanga 2309</p>
                </div>
              </div>
              <div className="flex items-start gap-1 mt-2">
                <FaEnvelope className="text-xl" />
                <a href="mailto:info.thegembeselectrical@gmail.com">
                  info.thegembeselectrical@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-1 mt-2">
                <FaPhone className="text-xl" />
                <a href="tel:+27792219330">+27792219330</a>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif font-semibold text-[#6c6c6c] mb-1">
                About
              </h3>
              <Link to="/about">About Syanda Njiki Holdings Pty(ltd)</Link>
              <Link to="/about">Our Mission</Link>
              <Link to="/about">Our Vision</Link>
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif font-semibold text-[#6c6c6c] mb-1">
                Services
              </h3>
              <Link to="/services">Electrical Services</Link>
              <Link to="/services">Civil Work Services</Link>
              <Link to="/services">Supply Services</Link>
              <Link to="/services">Transportation Services</Link>
            </div>
            <div className="flex flex-col">
              <h3 className="font-serif font-semibold text-[#6c6c6c] mb-1">
                Legal
              </h3>
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Term & Conditions</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between mt-5 text-xs sm:flex-row">
          <p>&copy;Syanda Njiki Holdings Pty(ltd) || All Rights Reserved</p>
          <div className="flex flex-col items-center justify-center">
            <p>
              Developed & Maintained By Simphiwe {new Date().getFullYear()}.
            </p>
            <div className="flex gap-1">
              <Link
                className="duration-500 hover:rotate-45"
                to="mailto:simphiwedladla8@gmail.com"
              >
                <FaEnvelope />
              </Link>
              <Link
                className="duration-500 hover:rotate-45"
                to="https://github.com/DeeBest"
              >
                <FaGithub />
              </Link>
              <Link
                className="duration-500 hover:rotate-45"
                to="https://www.linkedin.com/in/dladla-simphiwe-89061a20a/"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
