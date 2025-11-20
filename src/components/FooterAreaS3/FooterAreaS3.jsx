import React from 'react';
import { Link } from 'react-router-dom';

const logo = '/MJ Hotel & Resort Logo.png';

const FooterAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <footer className={"" + props.hclass}>
         <div className="container">
            <div className="social-area">
               <div className="social-link"><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i><span className="text">FACEBOOK</span></a></div>

               <div className="social-link"><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i><span className="text">TWITTER</span></a></div>
               <div className="social-link"><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i><span className="text">LINKEDIN</span></a></div>
               <div className="social-link"><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i><span className="text">INSTAGRAM</span></a></div>

            </div>
         </div>
         <div className="widget-area">
            <div className="container">
               <div className="row g-4" style={{ display: 'flex', flexWrap: 'wrap', minHeight: '300px' }}>
                  <div className="col-md-6 col-lg-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                     <div className="widget footer-widget footer-line" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="th-widget-about">
                           <div className="about-logo" style={{ marginBottom: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                              <Link onClick={ClickHandler} to="/">
                                 <img 
                                    src={logo} 
                                    alt="MJ Hotel & Resort" 
                                    style={{
                                       maxWidth: '180px',
                                       height: 'auto',
                                       width: '100%',
                                       objectFit: 'contain',
                                       '@media (max-width: 768px)': {
                                          maxWidth: '150px'
                                       },
                                       '@media (max-width: 480px)': {
                                          maxWidth: '120px'
                                       }
                                    }}
                                 />
                              </Link>
                           </div>
                           <p className="about-text" style={{ marginBottom: 0 }}>MJ Hotel a peaceful and exclusive retreat in scenic surroundings. We offer an exclusive and refined experience at our Hotel.</p>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                     <div className="widget widget_nav_menu footer-line footer-widget">
                        <h3 className="widget_title"> Useful Links</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu">
                              <li><Link onClick={ClickHandler} to="#">About Us</Link></li>
                              <li><Link onClick={ClickHandler} to="#">Featured Rooms</Link></li>
                              <li><Link onClick={ClickHandler} to="#">Our Best Services</Link></li>
                              <li><Link onClick={ClickHandler} to="#">Rquest a Booking</Link></li>
                              {/* <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li> */}
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                     <div className="widget widget_nav_menu footer-line footer-widget">
                        <h3 className="widget_title">Explore</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu">
                             
                              <li><Link onClick={ClickHandler} to="#">Our Rooms</Link></li>
                              <li><Link onClick={ClickHandler} to="#">Our Gallery</Link></li>
                              <li><Link onClick={ClickHandler} to="#">Client Reviews</Link></li>
                              <li><Link onClick={ClickHandler} to="#">Neighborhood</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-md-6 col-lg-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
                     <div className="widget footer-widget">
                        <h3 className="widget_title">Get In Touch</h3>
                        <div className="th-widget-contact">
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-location-dot"></i>
                              </div>
                              <p className="box-text">K.G Ashram, Jailgarha, NH-2, Grand Trunk Rd, Gobindpur, Dhanbad, Jharkhand 828109</p>
                           </div>
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-phone"></i>
                              </div>
                              <p className="box-text">
                                 <a href="tel:82280 45049" className="box-link">82280 45049</a>
                                
                              </p>
                           </div>
                           <div className="info-box">
                              <div className="box-icon">
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <p className="box-text">
                                 <a href="mailto:info@mjhotelandresorts.com" className="box-link">info@mjhotelandresorts.com</a>
                                 <a href="mailto:gm@mjhotelandresorts.com" className="box-link">gm@mjhotelandresorts.com</a>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* <div className="room-book-area">
                  <div className="row gy-4">
                     <div className="col-lg-6">
                        <div className="room-book style2">
                           <div className="room-img">
                              <img src={footer1} alt="" />
                              <h3 className="box-title">Our Rooms & Suits</h3>
                           </div>
                           <Link onClick={ClickHandler} className="footer-btn" to="/contact">MAKE RESERVATION<span><img src={right} alt="" /></span></Link>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="room-book style2">
                           <div className="room-img">
                              <img src={footer2} alt="" />
                              <h3 className="box-title">Get to know us</h3>
                           </div>
                           <Link onClick={ClickHandler} className="footer-btn" to="/contact">CONTACT US<span><img src={right} alt="" /></span></Link>
                        </div>
                     </div>
                  </div>
               </div> */}
            </div>
         </div>
         <div className="container">
            <div className="copyright-wrap">
               <div className="row gy-2 align-items-center">
                  <div className="col-lg-6">
                     <p className="copyright-text">Copyright <i className="fal fa-copyright"></i> 2025 <Link onClick={ClickHandler} to="/">MJ Hotel</Link>. All Rights Reserved.</p>
                  </div>
                  {/* <div className="col-lg-6 text-center text-md-end">
                     <div className="footer-links">
                        <ul>
                           <li><Link onClick={ClickHandler} to="/about">Terms of service</Link></li>
                           <li><Link onClick={ClickHandler} to="/about">Privacy policy</Link></li>
                           <li><Link onClick={ClickHandler} to="/about">Cookies</Link></li>
                        </ul>
                     </div>
                  </div> */}
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterAreaS3;