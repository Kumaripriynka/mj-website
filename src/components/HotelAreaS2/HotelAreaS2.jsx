import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageShape from '../../img/shape/circle-line.png';
// images
import icon1 from '../../img/icon/hotel_1_1.svg';
import icon2 from '../../img/icon/hotel_1_2.svg';
import icon3 from '../../img/icon/hotel_1_3.svg';
import icon4 from '../../img/icon/hotel_1_4.svg';
import icon5 from '../../img/icon/hotel_1_5.svg';
import icon6 from '../../img/icon/hotel_1_6.svg';
import icon7 from '../../img/icon/hotel_1_7.svg';

import image1 from '../../img/hotel/parking.png';
import image2 from '../../img/pages/delux.png';
import image3 from '../../img/hotel/zym.png';
import image4 from '../../img/package/luxuary.png';
// import image5 from '../../img/hotel/hotel_2_5.jpg';
import image6 from '../../img/package/dining.png';
import image7 from '../../img/package/swim.png';



const amenities = [
   
   {
      title: 'High-Speed WiFi',
      icon: icon2,
      image: image2,
   },
   {
      title: 'gym Center',
      icon: icon3,
      image: image3,
   },
   {
      title: '24/7 Room Service',
      icon: icon4,
      image: image4,
   },
  
   {
      title: 'Multi-Cuisine Restaurant',
      icon: icon6,
      image: image6,
   },
   {
      title: 'Swimming Pool',
      icon: icon7,
      image: image7,
   },
   {
      title: 'Secure Parking',
      icon: icon1,
      image: image1,
   },
];

const ClickHandler = () => {
   window.scrollTo(10, 0);
}

const HotelAreaS2 = (props) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const backgroundImage = amenities[activeIndex].image;
   return (
      <div
         className={"" + props.hclass}
         style={{ backgroundImage: `url(${backgroundImage})` }}
      >
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5">
                  <div className="title-area text-center space">
                     <span className="sub-title2">HOTEL AMENITIES</span>
                     <h2 className="sec-title ">Premium Facilities at MJ Hotel</h2>
                     <p className="fs-18 mt-30 ">
                        MJ Hotel Dhanbad offers world-class amenities designed for both business and leisure travelers. 
                        Experience luxury and comfort with our state-of-the-art facilities and exceptional services 
                        that cater to your every need in the heart of Jharkhand.
                     </p>
                  </div>
               </div>
            </div>

            <div className="row">
               <div className="col-xl-12 hotel-card2_wrapp">
                  {amenities.map((item, index) => (
                     <div
                        key={index}
                        className={`hotel-card2 hover-item ${index === activeIndex ? 'item-active' : ''
                           }`}
                        onMouseEnter={() => setActiveIndex(index)}
                     >
                        <div className="box-icon">
                           <img src={item.icon} alt="Icon" />
                        </div>
                        <div className="box-content">
                           <div className="box-img">
                              <img src={item.image} alt="" />
                           </div>
                           <h3 className="box-title">{item.title}</h3>
                           
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <div className="circle-line">
            <img src={ImageShape} alt="" />
         </div>
      </div>
   );
};

export default HotelAreaS2;