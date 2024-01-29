import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { animateScroll } from 'react-scroll';
import { FaStream } from 'react-icons/fa';
import { routes } from '../../routes';
import './header.css';

export const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setScrollHeader(true);
    } else {
      setScrollHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeHeader);
  }, []);

  return (
    <header className={`${scrollHeader ? 'scroll-header' : ''} header`}>
      <nav className='nav container'>
        <Link to='/' onClick={scrollTop} className='nav__logo'>
          <img src={'/assets/logo.png'} alt='Logo' className='nav__logo-img' />
        </Link>

        <div className={`${showMenu ? 'show-menu' : ''} nav__menu`}>
          <ul className='nav__list'>
            {routes.map(({ name, path }, index) => {
              return (
                <li className='nav__item' key={index}>
                  <Link
                    className='nav__link'
                    to={path}
                    spy={true}
                    hashSpy={true}
                    smooth={true}
                    offset={-60}
                    duration={500}
                    onClick={() => setShowMenu(!showMenu)}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className='nav__toggle' onClick={() => setShowMenu(!showMenu)}>
          <FaStream />
        </div>
      </nav>
    </header>
  );
};
