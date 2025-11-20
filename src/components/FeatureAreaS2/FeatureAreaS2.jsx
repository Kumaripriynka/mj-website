import React from 'react';
import { Link } from 'react-router-dom';


// icon
import feaat1 from '../../img/normal/why_1.jpg'
import hotelIcon1 from '../../img/icon/hotel-icon1-5.svg'
import hotelIcon2 from '../../img/icon/hotel-icon1-1.svg'
import hotelIcon3 from '../../img/icon/hotel-icon1-6.svg'
import hotelIcon4 from '../../img/icon/hotel-icon1-2.svg'
import hotelIcon5 from '../../img/icon/hotel-icon1-7.svg'
import hotelIcon6 from '../../img/icon/hotel-icon1-3.svg'
import hotelIcon7 from '../../img/icon/hotel-icon1-8.svg'
import hotelIcon8 from '../../img/icon/hotel-icon1-4.svg'

const FeatureAreaS2 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" +props.hclass}>
         <div className="container">
            <div className="why-wrap1">
               <div className="why-img-box1">
                  <img src={feaat1} alt="img" />
               </div>
               <div className="why-wrap-content">
                  <div className="title-area">
                     <span className="sub-title2 style1">HOTEL FACILITIES</span>
                     <h2 className="sec-title">Why Choose Us</h2>
                     <p className="sec-text pe-xl-5 me-xxl-5">We pride ourselves on a high standard of friendly cheerful service which cafers to the needs of the whole family.</p>
                  </div>
                  <ul className="why-grid-list">
                     <li>
                        <div className="box-icon"><img src={hotelIcon1} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Free High Speed WiFi</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon2} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Swimming Pool</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon3} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Wellness & Spa</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon4} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Free Breakfast</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon5} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Well Furnished Rooms</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon6} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Animals & Pets Care</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon7} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Car Parking</p>
                        </div>
                     </li>
                     <li>
                        <div className="box-icon"><img src={hotelIcon8} alt="img" /></div>
                        <div className="why-grid-list-details">
                           <p className="box-text">Toproof Bar</p>
                        </div>
                     </li>
                  </ul>
                  <div className="btn-group mt-60">
                     <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">VIEW ALL</Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeatureAreaS2;