import React from 'react';
import { Link } from 'react-router-dom';

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
                  margin: '0 -15px'
               }}>
                  <div className="col-md-6 col-lg-3" style={{ 
                     padding: '0 15px',
                     display: 'flex',
                     flexDirection: 'column'
                  }}>
                     <div className="widget footer-widget footer-line" style={{ 
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                     }}>
                        <div className="th-widget-about" style={{ height: '100%' }}>
                           <div className="about-logo" style={{ 
                              marginBottom: '25px', 
                              display: 'flex', 
                              justifyContent: 'flex-start' 
                           }}>
                              <Link onClick={ClickHandler} to="/">
                                 <img 
                                    src={logo} 
                                    alt="MJ Hotel & Resort" 
                                    style={{
                                       maxWidth: '175px',
                                       height: 'auto',
                                       width: '100%',
                                       objectFit: 'contain'
                                    }}
                                 />
                              </Link>
                           </div>
                           <p className="about-text" style={{ 
                              marginBottom: 0,
                              lineHeight: '1.5',
                              fontSize: '19px'
                           }}>MJ Hotel - A peaceful retreat </p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3" style={{ 
                     padding: '0 15px',
                     display: 'flex',
                     flexDirection: 'column'
                  }}>
                     <div className="widget widget_nav_menu footer-line footer-widget" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                     }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px' }}>Useful Links</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu" style={{ marginBottom: 0, paddingLeft: 0, listStyle: 'none' }}>
                              <li style={{ marginBottom: '35px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>About Us</Link></li>
                              <li style={{ marginBottom: '35px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>Featured Rooms</Link></li>
                              <li style={{ marginBottom: '35px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>Our Best Services</Link></li>
                              <li style={{ marginBottom: '0' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>Request a Booking</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3" style={{ 
                     padding: '0 15px',
                     display: 'flex',
                     flexDirection: 'column'
                  }}>
                     <div className="widget widget_nav_menu footer-line footer-widget" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                     }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px' }}>Explore</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu" style={{ marginBottom: 0, paddingLeft: 0, listStyle: 'none' }}>
                              <li style={{ marginBottom: '35px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>Our Rooms</Link></li>
                              <li style={{ marginBottom: '35px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>Our Gallery</Link></li>
                              <li style={{ marginBottom: '35px' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>Client Reviews</Link></li>
                              <li style={{ marginBottom: '0' }}><Link onClick={ClickHandler} to="#" style={{ textDecoration: 'none' }}>Neighborhood</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3" style={{ 
                     padding: '0 15px',
                     display: 'flex',
                     flexDirection: 'column'
                  }}>
                     <div className="widget footer-widget" style={{
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%'
                     }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px' }}>Get In Touch</h3>
                        <div className="th-widget-contact">
                           <div className="info-box" style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '10px', marginTop: '2px' }}>
                                 <i className="fal fa-location-dot"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.4', fontSize: '15px' }}>K.G Ashram, Jailgarha, NH-2, Grand Trunk Rd, Gobindpur, Dhanbad, Jharkhand 828109</p>
                           </div>
                           <div className="info-box" style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '10px', marginTop: '2px' }}>
                                 <i className="fal fa-phone"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0 }}>
                                 <a href="tel:82280 45049" className="box-link" style={{ textDecoration: 'none' }}>82280 45049</a>
                              </p>
                           </div>
                           <div className="info-box" style={{ marginBottom: '0', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '10px', marginTop: '2px' }}>
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.4' }}>
                                 <a href="mailto:info@mjhotelandresorts.com" className="box-link" style={{ textDecoration: 'none', display: 'block', marginBottom: '4px' }}>info@mjhotelandresorts.com</a>
                                 <a href="mailto:gm@mjhotelandresorts.com" className="box-link" style={{ textDecoration: 'none', display: 'block' }}>gm@mjhotelandresorts.com</a>
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