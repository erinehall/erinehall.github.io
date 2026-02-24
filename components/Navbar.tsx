
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/contact', label: 'Contact' },
  ];

  const getLinkClasses = (isActive: boolean) => 
    `text-sm font-medium transition-colors duration-200 tracking-wide ${
      isActive 
        ? 'text-accent font-semibold' 
        : 'text-stone-600 hover:text-accent'
    }`;

  const getMobileLinkClasses = (isActive: boolean) =>
    `block px-4 py-3 rounded-xl text-base font-medium ${
      isActive
        ? 'bg-accent/10 text-accent'
        : 'text-stone-700 hover:bg-stone-100'
    }`;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="text-4xl font-cursive text-primary tracking-wide hover:text-accent transition-colors duration-300">
              Erin Hall
            </NavLink>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <NavLink 
                  key={link.path} 
                  to={link.path} 
                  className={({ isActive }) => getLinkClasses(isActive)}
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-stone-700 hover:bg-stone-100 hover:text-accent focus:outline-none transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 shadow-lg rounded-b-2xl" id="mobile-menu">
          <div className="px-6 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path} 
                to={link.path} 
                className={({ isActive }) => getMobileLinkClasses(isActive)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;