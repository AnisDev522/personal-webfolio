import { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'proficiency', label: 'Skill' },
  { to: 'projects', label: 'Projects' },
  { to: 'education', label: 'Education' },
  { to: 'ai-chat', label: 'contact' },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    document.body.style.overflow = isNavOpen ? 'hidden' : 'unset';
  }, [isNavOpen]);

  const toggleNav = () => setIsNavOpen(!isNavOpen);
  const closeNav = () => isNavOpen && setIsNavOpen(false);

  return (
    <>
      <nav id="navbar" className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ease-in-out ${isScrolled ? 'scrolled bg-slate-900/80 shadow-lg backdrop-blur-2xl' : 'bg-slate-900/0'}`}>
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center py-4 relative">
            <div onClick={() => scroll.scrollToTop()} className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent z-[1002] cursor-pointer">
              AY
            </div>

            <ul id="navLinks" className={`nav-links flex flex-col items-center justify-center gap-10 p-8 fixed top-0 right-0 w-[70vw] h-screen bg-slate-800 transform transition-transform duration-500 ease-in-out z-[999] shadow-[-5px_0_15px_rgba(0,0,0,0.2)] lg:relative lg:flex-row lg:h-auto lg:w-auto lg:p-0 lg:bg-transparent lg:shadow-none lg:gap-8 ${isNavOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}>
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    activeClass="active-link"
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={closeNav}
                    className="text-slate-200 no-underline font-medium transition-colors duration-300 relative hover:text-blue-500 lg:text-base text-lg cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div id="hamburgerMenu" onClick={toggleNav} className={`hamburger-menu lg:hidden flex flex-col justify-around w-[30px] h-[25px] cursor-pointer z-[1002] ${isNavOpen ? 'active' : ''}`}>
              <span className="bar block w-full h-[3px] bg-slate-200 rounded-sm transition-all duration-300 ease-in-out"></span>
              <span className="bar block w-full h-[3px] bg-slate-200 rounded-sm transition-all duration-300 ease-in-out"></span>
              <span className="bar block w-full h-[3px] bg-slate-200 rounded-sm transition-all duration-300 ease-in-out"></span>
            </div>
          </div>
        </div>
      </nav>
      <div id="navOverlay" onClick={toggleNav} className={`nav-overlay fixed top-0 left-0 w-full h-full bg-black/50 z-[998] backdrop-blur-[3px] lg:hidden ${isNavOpen ? 'active' : ''}`}></div>

    </>
  );
};

export default Navbar;