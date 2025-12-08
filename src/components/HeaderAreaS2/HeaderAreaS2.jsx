import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderAreaS2.css';
import HeaderTopS2 from '../HeaderTopS2/HeaderTopS2';

const Logo = '/MJ Hotel & Resort Logo.png';

const HeaderAreaS2 = () => {
   const [isSticky, setIsSticky] = useState(false);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const location = useLocation();
   
   // Check if we're on the home page
   const isHomePage = location.pathname === '/';

   useEffect(() => {
      const handleScroll = () => {
         // Only track scroll position for sticky state (background change)
         // Header is always visible, just changes background
         if (window.scrollY > 100) {
            setIsSticky(true);
         } else {
            setIsSticky(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   // Close menu when route changes
   useEffect(() => {
      setIsMenuOpen(false);
   }, [location]);

   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
   const closeMenu = () => setIsMenuOpen(false);

   const scrollToTop = () => {
      window.scrollTo(0, 0);
      closeMenu();
   };

   return (
      <>
         {/* Always show HeaderTopS2 when sticky */}
         {isSticky && <HeaderTopS2 hclass={'header-top d-none d-lg-block'} />}
         
         <header className={`header-area ${isSticky ? 'sticky' : ''} ${isHomePage && !isSticky ? 'transparent' : ''}`}>
            <div className="container-fluid">
               <div className="header-main">
                  <div className="header-logo">
                     <Link to="/" onClick={scrollToTop}>
                        <img src={Logo} alt="MJ Hotel & Resort" />
                     </Link>
                  </div>

                  <div className={`main-menu-wrapper ${isMenuOpen ? 'open' : ''}`}>
                     <button className="menu-close d-xl-none" onClick={closeMenu}>
                        <i className="far fa-times"></i>
                     </button>
                     <nav className="main-menu">
                        <ul>
                           <li>
                              <Link to="/" onClick={scrollToTop}>HOME</Link>
                           </li>
                           <li>
                              <Link to="/banquet-hall" onClick={scrollToTop}>BANQUET HALL</Link>
                           </li>
                           <li>
                              <Link to="/swimming" onClick={scrollToTop}>SWIMMING</Link>
                           </li>
                           <li>
                              <Link to="/room" onClick={scrollToTop}>ROOM</Link>
                           </li>
                          
                           <li>
                              <Link to="/contact" onClick={scrollToTop}>CONTACT</Link>
                           </li>
                           <li>
                              <Link to="/nearby-attractions" onClick={scrollToTop}>NEARBY ATTRACTIONS</Link>
                           </li>
                            <li>
                              <Link to="/restro-bar" onClick={scrollToTop}>RESTRO & ROOFTOP BAR</Link>
                           </li>
                        </ul>
                     </nav>
                  </div>

                  <div className="header-right">
                     <button className="menu-toggle d-xl-none" onClick={toggleMenu}>
                        <i className="far fa-bars"></i>
                     </button>
                  </div>
               </div>
            </div>
            
            {/* Overlay for mobile menu */}
            {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
         </header>
      </>
   );
};

export default HeaderAreaS2;