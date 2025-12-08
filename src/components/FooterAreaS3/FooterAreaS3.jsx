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
         padding: '0',
         width: '100%'
      }}>
         <div className="widget-area" style={{ 
            padding: '80px 0',
            width: '100%'
         }}>
            <div className="container" style={{ padding: '0 60px' }}>
               <div className="row justify-content-between" style={{ rowGap: '40px' }}>
                  <div className="col-md-6 col-lg-4">
                     <div className="widget footer-widget footer-line" style={{ height: '100%' }}>
                        <div className="th-widget-about">
                           <div className="about-logo" style={{ marginBottom: '25px' }}>
                              <Link onClick={ClickHandler} to="/">
                                 <img 
                                    src={logo} 
                                    alt="MJ Hotel & Resort" 
                                    style={{
                                       maxWidth: '160px',
                                       height: 'auto'
                                    }}
                                 />
                              </Link>
                           </div>
                           <p className="about-text" style={{ 
                              marginBottom: 0,
                              lineHeight: '1.6',
                              fontSize: '16px',
                              paddingRight: '20px'
                           }}>MJ Hotel & Resort - A peaceful retreat in the heart of Dhanbad</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="col-md-6 col-lg-3">
                     <div className="widget widget_nav_menu footer-line footer-widget" style={{ paddingLeft: '20px' }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px', fontSize: '18px' }}>Useful Links</h3>
                        <div className="menu-all-pages-container">
                           <ul className="menu" style={{ marginBottom: 0, paddingLeft: 0, listStyle: 'none' }}>
                              <li style={{ marginBottom: '12px' }}><Link onClick={ClickHandler} to="/" style={{ textDecoration: 'none', fontSize: '15px' }}>Home</Link></li>
                              <li style={{ marginBottom: '12px' }}><Link onClick={ClickHandler} to="/banquet-hall" style={{ textDecoration: 'none', fontSize: '15px' }}>Banquet Hall</Link></li>
                              <li style={{ marginBottom: '12px' }}><Link onClick={ClickHandler} to="/swimming" style={{ textDecoration: 'none', fontSize: '15px' }}>Swimming</Link></li>
                              <li style={{ marginBottom: '12px' }}><Link onClick={ClickHandler} to="/room" style={{ textDecoration: 'none', fontSize: '15px' }}>Room</Link></li>
                              <li style={{ marginBottom: '12px' }}><Link onClick={ClickHandler} to="/nearby-attractions" style={{ textDecoration: 'none', fontSize: '15px' }}>Nearby Attractions</Link></li>
                              <li style={{ marginBottom: '0' }}><Link onClick={ClickHandler} to="/contact" style={{ textDecoration: 'none', fontSize: '15px' }}>Contact</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="col-md-6 col-lg-4">
                     <div className="widget footer-widget" style={{ paddingLeft: '40px' }}>
                        <h3 className="widget_title" style={{ marginBottom: '25px', fontSize: '18px' }}>Get In Touch</h3>
                        <div className="th-widget-contact">
                           <div className="info-box" style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '15px', marginTop: '3px', flexShrink: 0 }}>
                                 <i className="fal fa-location-dot"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.5', fontSize: '14px' }}>K.G Ashram, Jailgarha, NH-2, Grand Trunk Rd, Gobindpur, Dhanbad, Jharkhand 828109</p>
                           </div>
                           <div className="info-box" style={{ marginBottom: '20px', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '15px', marginTop: '3px', flexShrink: 0 }}>
                                 <i className="fal fa-phone"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.6' }}>
                                 <span style={{ display: 'block', fontWeight: '600', marginBottom: '2px', fontSize: '13px' }}>Event Booking:</span>
                                 <span style={{ display: 'block' }}>
                                    <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', fontSize: '14px', marginRight: '8px' }}>9296913100,</Link>
                                    <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', fontSize: '14px' }}>9296913103</Link>
                                 </span>
                              </p>
                           </div>
                           <div className="info-box" style={{ marginBottom: '0', display: 'flex', alignItems: 'flex-start' }}>
                              <div className="box-icon" style={{ marginRight: '15px', marginTop: '3px', flexShrink: 0 }}>
                                 <i className="fal fa-envelope"></i>
                              </div>
                              <p className="box-text" style={{ margin: 0, lineHeight: '1.6' }}>
                                 <Link onClick={ClickHandler} to="/contact" className="box-link" style={{ textDecoration: 'none', display: 'block', marginBottom: '5px', fontSize: '14px' }}>fo@mjhotelandresorts.com</Link>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container" style={{ padding: '0 60px' }}>
            <div className="copyright-wrap" style={{ 
               padding: '30px 0',
               borderTop: '1px solid #e5e5e5',
            }}>
               <div className="row align-items-center">
                  <div className="col-lg-12" style={{ textAlign: 'center' }}>
                     <p className="copyright-text" style={{ margin: 0 }}>
                        Copyright <i className="fal fa-copyright"></i> 2025 <Link onClick={ClickHandler} to="/">MJ Hotel</Link>. All Rights Reserved. <span style={{ marginLeft: '5px' }}>Designed and developed by love with <a href="https://www.snmrgroup.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#C2913D', textDecoration: 'none' }}>snmrgroup</a></span>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default FooterAreaS3;