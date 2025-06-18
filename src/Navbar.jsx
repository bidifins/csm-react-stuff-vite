import { useState, useEffect  } from 'react';
import navlogo from './assets/images/fps-icon.svg';
import navlogowhite from './assets/images/fps-icon-white.svg';

const Nav = ({ socialdata, navidata  }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navibar shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-[#115C99]'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <a className="flex items-center" href="/">
            <img src={isScrolled ? navlogo : navlogowhite} alt="Logo" className="h-8 w-auto scale-150 transition-colors duration-300" />
          </a>
          <div className={`hidden md:flex items-center transition-colors duration-300 space-x-4 text-[16px] font-bold ${isScrolled ? 'text-[#115C99]' : 'text-white'}`}>
            {navidata.map((navi, index) => (
              <div key={index} className="relative group">
                <a href={navi.navilink} className="">
                  {navi.naviname}
                </a>
                {navi.children && (
                  <div className="absolute left-0 mt-2 w-90 bg-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                    <h1>test</h1>
                    {navi.children.map((child, i) => (
                      <a key={i} href={child.link} className="block pl-12 pr-2 py-2 text-[12px] text-[#115C99] hover:bg-gray-100">
                        {child.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className={`hidden md:flex items-center transition-colors duration-300 space-x-4 text-[14px] font-bold ${isScrolled ? 'text-[#115C99]' : 'text-white'}`}>
            {socialdata.map((social) => (
                <a href={ social.sociallink } className="">{ social.socialname }</a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg className={`w-6 h-6 transition-colors duration-300 ${isScrolled ? 'text-[#115C99]' : 'text-white'}`} fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          {navidata.map((navi, index) => (
            <div key={index}>
              <a href={navi.navilink} className={`block py-2 text-[16px] font-bold ${isScrolled ? 'text-[#115C99]' : 'text-white'}`}>
                {navi.naviname}
              </a>
              {navi.children && (
                <div className="pl-4">
                  {navi.children.map((child, i) => (
                    <a key={i} href={child.link} className={`block py-1 text-[14px] ${isScrolled ? 'text-[#115C99]' : 'text-white'}`}>
                      {child.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {socialdata.map((social) => (
              <a href={ social.sociallink } className={`transition-colors duration-300 mx-1 text-[14px] font-bold ${isScrolled ? 'text-[#115C99]' : 'text-white'}`}>{ social.socialname }</a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;
