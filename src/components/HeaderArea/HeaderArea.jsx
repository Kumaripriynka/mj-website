import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.svg';

const HeaderArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   const [isSticky, setIsSticky] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const topPos = window.scrollY;
         setIsSticky(topPos > 500);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   const [menuOpen, setMenuOpen] = useState(false);
   const [openSubMenus, setOpenSubMenus] = useState({});

   const toggleMenu = () => {
      setMenuOpen(prev => !prev);
      setOpenSubMenus({});
   };

   const toggleSubMenu = (menuKey) => {
      setOpenSubMenus((prev) => ({
         ...prev,
         [menuKey]: !prev[menuKey]
      }));
   };

   const { ContactBtn = false, } = props
   const { RoomBtn = false, } = props


  return (
    <div id="scroll">
      <header 
        className={`main-header ${props.hclass || ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundImage: `url('/img/bg/mjhome.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 0
        }}></div>
        <div className="container" style={{ position: 'relative' }}>
          <div 
            className="header-content"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '80px',
              position: 'relative'
            }}
          >
            <div className="header-logo" style={{ 
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              zIndex: 2
            }}>
              <Link 
                to="/" 
                onClick={ClickHandler}
                style={{
                  display: 'block',
                  height: '100%',
                  lineHeight: 0
                }}
              >
                <img
                  src={Logo}
                  alt="Rotal Logo"
                  style={{
                    height: '80px',
                    width: 'auto',
                    maxHeight: '80px',
                    objectFit: 'contain',
                    display: 'block',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    zIndex: 1
                  }}
                />
              </Link>
            </div>
            <nav className="main-navigation">
              <ul className="menu">
                <li><Link onClick={ClickHandler} to="/home-3">Home</Link></li>
                <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                <li className="menu-item-has-children">
                  <Link onClick={ClickHandler} to="#">Blog</Link>
                  <ul className="sub-menu">
                    <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog-details-right-sidebar/1">Blog Details Without Sidebar</Link></li>
                    <li><Link onClick={ClickHandler} to="/blog-details/1">Blog Details</Link></li>
                  </ul>
                </li>
                <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
              </ul>
            </nav>
            <button type="button" className="th-menu-toggle d-block d-lg-none" onClick={toggleMenu}>
              <i className='far fa-bars'></i>
            </button>
            <div className="header-actions" style={{
              display: 'flex',
              gap: '15px',
              alignItems: 'center',
              marginLeft: '20px'
            }}>
              <Link to="/contact" style={{
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: '#b38b59',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: '500',
                fontSize: '14px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                transition: 'background-color 0.3s ease'
              }}>BOOK NOW</Link>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
            <div className="th-menu-wrapper th-body-visible d-block d-lg-none">
               <div className="th-menu-area text-center" onClick={(e) => e.stopPropagation()}>
                  <button className="th-menu-toggle" onClick={toggleMenu}><i className="fal fa-times"></i></button>
                  <div className="mobile-logo" style={{
                     height: '100px',
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'center',
                     padding: '20px 0',
                     backgroundColor: '#fff',
                     marginBottom: '20px',
                     boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                     position: 'relative',
                     overflow: 'hidden'
                  }}>
                     <Link onClick={ClickHandler} to="/" style={{ 
                        display: 'block', 
                        width: '100%', 
                        textAlign: 'center',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                     }}>
                        <img
                           src={Logo}
                           alt="Rotal Logo"
                           style={{
                              height: '80px',
                              maxHeight: '80px',
                              width: 'auto',
                              objectFit: 'contain',
                              display: 'block',
                              transition: 'all 0.3s ease'
                           }}
                        />
                     </Link>
                  </div>
                  <div className="th-mobile-menu">
                     <ul>
                        <li>
                           <Link onClick={ClickHandler} to="/home-3">Home</Link>
                        </li>

                        <li className="menu-item-has-children">
                           <Link to='#' onClick={() => toggleSubMenu('pages')}>Pages</Link>
                           {openSubMenus['pages'] && (
                              <ul className="sub-menu">
                                 <li className="menu-item-has-children">
                                    <Link to='#' onClick={() => toggleSubMenu('rooms')}>All Rooms</Link>
                                    {openSubMenus['rooms'] && (
                                       <ul className="sub-menu">
                                          <li><Link onClick={ClickHandler} to="/room">Rooms Suites</Link></li>
                                          <li><Link onClick={ClickHandler} to="/room-details/1">Room Details</Link></li>
                                       </ul>
                                    )}
                                 </li>
                                 <li><Link onClick={ClickHandler} to="/about">About Us</Link></li>
                                 <li><Link onClick={ClickHandler} to="/team">Team</Link></li>
                                 <li><Link onClick={ClickHandler} to="/team-details/1">Team Details</Link></li>
                                 <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                 <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>
                                 <li><Link onClick={ClickHandler} to="/pricing">Price Plan</Link></li>
                                 <li><Link onClick={ClickHandler} to="/testimonial">Testimonials</Link></li>
                                 <li><Link onClick={ClickHandler} to="/faq">FAQ Page</Link></li>
                                 <li><Link onClick={ClickHandler} to="/error">Error Page</Link></li>
                              </ul>
                           )}
                        </li>

                        <li className="menu-item-has-children">
                           <Link to='#' onClick={() => toggleSubMenu('services')}>Our Services</Link>
                           {openSubMenus['services'] && (
                              <ul className="sub-menu">
                                 <li><Link onClick={ClickHandler} to="/service">Our Services</Link></li>
                                 <li><Link onClick={ClickHandler} to="/service-details/1">Service Details</Link></li>
                              </ul>
                           )}
                        </li>

                        <li><Link onClick={ClickHandler} to="/gallery">Gallery</Link></li>

                        <li className="menu-item-has-children">
                           <Link to='#' onClick={() => toggleSubMenu('blog')}>Blog</Link>
                           {openSubMenus['blog'] && (
                              <ul className="sub-menu">
                                 <li><Link onClick={ClickHandler} to="/blog">Blog</Link></li>
                                 <li><Link onClick={ClickHandler} to="/blog-grid">Blog Grid</Link></li>
                                 <li><Link onClick={ClickHandler} to="/blog-details-right-sidebar/1">Blog Details Without Sidebar</Link></li>
                                 <li><Link onClick={ClickHandler} to="/blog-details/1">Blog Details</Link></li>
                              </ul>
                           )}
                        </li>

                        <li><Link onClick={ClickHandler} to="/contact">Contact Us</Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         )}

      </div>
   );
};

export default HeaderArea;