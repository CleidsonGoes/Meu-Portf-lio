/* eslint-disable react/jsx-max-depth */
import { useEffect, useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
// import profileImg from '../assets/dfasdfa/.png';
import NavLink from './NavLink';

const links = ['home', 'sobre', 'projetos'];

function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add('bg-zinc-900', 'py-4', 'bg-opacity-80');
          headerRef.current.classList.remove('py-8', 'bg-opacity-50');
        } else {
          headerRef.current.classList.remove('bg-zinc-900', 'py-4', 'bg-opacity-80');
          headerRef.current.classList.add('py-8', 'bg-opacity-50');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark-600 h-screen w-full" id="home">
      <header
        ref={ headerRef }
        className="fixed w-full py-8
        transition-all duration-700 ease-in-out bg-opacity-50"
      >
        <div className="max-w-screen-xl mx-auto px-8 flex justify-between items-center">
          <p className="text-green-500 font-bold text-lg">@cleidsongoes</p>
          <nav className="flex gap-2 text-white">
            {links.map((link) => (
              <NavLink
                key={ link }
                name={ link }
                activeLink={ activeLink }
                setActiveLink={ setActiveLink }
              />
            ))}
          </nav>
        </div>
      </header>
      <div
        className="h-full flex items-center justify-between
      gap-4 max-w-screen-xl mx-auto p-8"
      >
        <div className="text-white">
          <h1 className="text-6xl font-bold">Cleidson Goes</h1>
          <p className="text-2xl text-green-500">Desenvolvedor Front-End</p>
          <div className="flex gap-4 mt-8 text-green-500">
            <a
              href="https://www.linkedin.com/in/cleidson-jorge-s-goes/"
              className="flex items-center gap-2 "
            >
              <FaLinkedin size={ 24 } />
              Linkedin
            </a>

            <a
              href="https://github.com/CleidsonGoes"
              className="flex items-center gap-2"
            >
              <FaGithub size={ 24 } />
              Github
            </a>
          </div>
        </div>
        <div>
          {/* <img src={ profileImg } alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
