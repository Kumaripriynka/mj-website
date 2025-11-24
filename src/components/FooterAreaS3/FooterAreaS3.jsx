import React from 'react';
import { Link } from 'react-router-dom';
import './FooterAreaS3.css';

const logo = '/MJ Hotel & Resort Logo.png';

const FooterAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <footer className={"" + props.hclass} style={{ 
         padding: '60px 0 0 0',
         width: '100%'
      }}>
         <div className="container" style={{ padding: '0 20px' }}>
            <div className="social-area" style={{ 
               marginBottom: '60px',
               display: 'flex',
               justifyContent: 'center'
            }}>
               <div className="social-link"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i><span className="text">FACEBOOK</span></a></div>
               <div className="social-link"><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i><span className="text">TWITTER</span></a></div>
               <div className="social-link"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i><span className="text">LINKEDIN</span></a></div>
               <div className="social-link"><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i><span className="text">INSTAGRAM</span></a></div>
            </div>
         </div>
         <div className="widget-area" style={{ 
            padding: '40px 0',
            width: '100%'
         }}>
            <div className="container" style={{ padding: '0 20px' }}>
               <div className="row g-4" style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap',
                  margin: '0 -20px',
                  justifyContent: 'space-between',
                  alignItems: 'stretch'
               }}>
                  <div className="col-md-6 col-lg-3" style={{ 
                     padding: '0 20px',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: '0'
                  }}>
                     <div className="widget footer-widget footer-line" style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        paddingRight: '20px',
                        justifyContent: 'flex-start'
                     }}>
                        <div className="th-widget-about" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                           <div className="about-logo" style={{ 
                              marginBottom: '25px', 
                              display: 'flex', 
                              justifyContent: 'flex-start',
                              minHeight: '50px',
                              alignItems: 'flex-start'
                           }}>
                              <Link onClick={ClickHandler} to="/">
                                 <img 
                                    src={logo} 
                                    alt="MJ Hotel & Resort" 
                                    style={{
                                       maxWidth: '160px',
                                       height: 'auto',
                                       width: '100%',
                                       objectFit: 'contain'
                                    }}
                                 />
                              </Link>
                           </div>
                           <p className="about-text" style={{ 
                              marginBottom: 0,
                              lineHeight: '1.6',
                              fontSize: '16px',
                              flex: 1
                           }}>MJ Hotel & Resort - A peaceful retreat in the heart of Dhanbad</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-2" style={{ 
                     padding: '0 20px',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: '0'
                  }}>
                     <div className="widget widget_nav_menu footer-line footer-widget" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        paddingRight: '20px',
                        justifyContent: 'flex-start'
                     }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px', fontSize: '18px', minHeight: '50px', display: 'flex', alignItems: 'flex-start' }}>Useful Links</h3>
                        <div className="menu-all-pages-container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                           <ul className="menu" style={{ marginBottom: 0, paddingLeft: 0, listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>About Us</Link></li>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>Featured Rooms</Link></li>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>Our Best Services</Link></li>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="/contact" style={{ textDecoration: 'none', fontSize: '15px' }}>Contact Us</Link></li>
                              <li style={{ marginBottom: '0' }}><Link onClick={ClickHandler} to="/contact" style={{ textDecoration: 'none', fontSize: '15px' }}>Request Booking</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-2" style={{ 
                     padding: '0 20px',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: '0'
                  }}>
                     <div className="widget widget_nav_menu footer-line footer-widget" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        paddingRight: '20px',
                        justifyContent: 'flex-start'
                     }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px', fontSize: '18px', minHeight: '50px', display: 'flex', alignItems: 'flex-start' }}>Explore</h3>
                        <div className="menu-all-pages-container" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                           <ul className="menu" style={{ marginBottom: 0, paddingLeft: 0, listStyle: 'none', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>Our Rooms</Link></li>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>Our Gallery</Link></li>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>Client Reviews</Link></li>
                              <li style={{ marginBottom: '18px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>Amenities</Link></li>
                              <li style={{ marginBottom: '0' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none', fontSize: '15px' }}>Neighborhood</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-4" style={{ 
                     padding: '0 20px',
                     display: 'flex',
                     flexDirection: 'column',
                     minWidth: '0'
                  }}>
                     <div className="widget footer-widget" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                        justifyContent: 'flex-start'
                     }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px', fontSize: '18px', minHeight: '50px', display: 'flex', alignItems: 'flex-start' }}>Get In Touch</h3>
                        <div className="th-widget-contact">
                           <div className="info-box" style={{ marginBottom: '18px', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }}>
                                 <i className="fal fa-location-dot"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.5', fontSize: '14px' }}>K.G Ashram, Jailgarha, NH-2, Grand Trunk Rd, Gobindpur, Dhanbad, Jharkhand 828109</p>
                           </div>
                           <div className="info-box" style={{ marginBottom: '18px', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }}>
                                 <i className="fal fa-phone"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.6' }}>
                                 <span style={{ display: 'block', fontWeight: '600', marginBottom: '2px', fontSize: '13px' }}>Reception:</span>
                                 <span style={{ display: 'block', marginBottom: '10px' }}>
                                    <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', fontSize: '14px', marginRight: '8px' }}>9296913101,</Link>
                                    <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', fontSize: '14px' }}>9296913102</Link>
                                 </span>
                                 <span style={{ display: 'block', fontWeight: '600', marginBottom: '2px', fontSize: '13px' }}>Event Booking:</span>
                                 <span style={{ display: 'block' }}>
                                    <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', fontSize: '14px', marginRight: '8px' }}>9296913100,</Link>
                                    <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', fontSize: '14px' }}>9296913103</Link>
                                 </span>
                              </p>
                           </div>
                           <div className="info-box" style={{ marginBottom: '0', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '12px', marginTop: '3px', flexShrink: 0 }}>
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.6' }}>
                                 <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', display: 'block', marginBottom: '5px', fontSize: '14px' }}>fo@mjhotelandresorts.com</Link>
                                 <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', display: 'block', marginBottom: '5px', fontSize: '14px' }}>gm@mjhotelandresorts.com</Link>
                                 <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', display: 'block', fontSize: '14px' }}>info@mjhotelandresorts.com</Link>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container" style={{ padding: '0 20px' }}>
            <div className="copyright-wrap" style={{ 
               padding: '30px 0',
               borderTop: '1px solid #e5e5e5',
               marginTop: '40px'
            }}>
               <div className="row gy-2 align-items-center">
                  <div className="col-lg-12" style={{ textAlign: 'center' }}>
                     <p className="copyright-text" style={{ margin: 0 }}>Copyright <i className="fal fa-copyright"></i> 2025 <Link onClick={ClickHandler} to="/">MJ Hotel</Link>. All Rights Reserved.</p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterAreaS3;