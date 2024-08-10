import { Link } from 'react-scroll';

type NavLinkProps = {
  name: string;
  activeLink: string;
  setActiveLink: (name: string) => void;
};

function NavLink({ name, activeLink, setActiveLink }: NavLinkProps) {
  return (
    <Link
      to={ `${name}` }
      className={ `cursor-pointer ${activeLink === name && 'text-green-500 '}` }
      onClick={ () => setActiveLink(name) }
      smooth
      duration={ 1000 }
      offset={ -70 }
    >
      {name.charAt(0).toUpperCase() + name.slice(1)}
    </Link>
  );
}

export default NavLink;
