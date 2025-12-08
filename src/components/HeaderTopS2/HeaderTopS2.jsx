import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderTopS2.css';

const HeaderTopS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"header-top-s2 " + props.hclass}>
         <div className="container th-container2">
            <div className="row justify-content-between align-items-center">
               <div className="col-auto">
                  <div className="header-links">
                     <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', gap: '0' }}>
                        <li style={{ 
                           display: 'inline-flex', 
                           alignItems: 'center', 
                           color: '#C2913D',
                           fontSize: '14px',
                           fontWeight: '500'
                        }}>
                           <i className="fas fa-map-marker-alt" style={{ marginRight: '8px', color: '#C2913D' }}></i>
                           K.G Ashram, Jailgarha, NH-2, Dhanbad, Jharkhand
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-auto">
                  <div className="header-links">
                     <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', gap: '30px' }}>
                        <li style={{ 
                           display: 'inline-flex', 
                           alignItems: 'center',
                           position: 'relative'
                        }}>
                           <i className="fa-sharp fa-solid fa-phone" style={{ marginRight: '8px', color: '#C2913D' }}></i>
                           <Link onClick={ClickHandler} to="/contact" style={{ 
                              textDecoration: 'none', 
                              color: '#C2913D',
                              fontSize: '14px',
                              fontWeight: '500',
                              transition: 'color 0.3s ease'
                           }}
                           onMouseEnter={(e) => e.target.style.color = '#D4A853'}
                           onMouseLeave={(e) => e.target.style.color = '#C2913D'}
                           >
                              +91 9296913101, +91 9296913103
                           </Link>
                        </li>
                        <li style={{ 
                           display: 'inline-flex', 
                           alignItems: 'center'
                        }}>
                           <i className="fa-sharp fa-solid fa-envelope" style={{ marginRight: '8px', color: '#C2913D' }}></i>
                           <Link onClick={ClickHandler} to="/contact" style={{ 
                              textDecoration: 'none', 
                              color: '#C2913D',
                              fontSize: '14px',
                              fontWeight: '500',
                              transition: 'color 0.3s ease'
                           }}
                           onMouseEnter={(e) => e.target.style.color = '#D4A853'}
                           onMouseLeave={(e) => e.target.style.color = '#C2913D'}
                           >
                              fo@mjhotelandresorts.com
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default HeaderTopS2;