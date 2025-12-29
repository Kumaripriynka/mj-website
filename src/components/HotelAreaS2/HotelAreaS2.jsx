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

const amenities = [
   {
      title: 'Swimming Pool',
      icon: icon7,
      image: '/mj-4.jpeg',
   },
   {
      title: '2 Pillar-less Banquets',
      icon: icon1,
      image: '/mj-3.jpeg',
   },
   {
      title: '32,000 Sqft Open Lawn',
      icon: icon4,
      image: '/mj-1.jpeg',
   },
   {
      title: 'Fully-Equipped Gym',
      icon: icon3,
      image: '/mj-6.jpeg',
   },
   {
      title: 'SPA (Proposed)',
      icon: icon5,
      image: '/mj-8.jpeg',
   },
   {
      title: 'Rooftop Lounge Bar (Proposed)',
      icon: icon6,
      image: '/mj-5.jpeg',
   },
   {
      title: 'Wheelchair Accessible',
      icon: icon3,
      image: '/mj-7.jpeg',
   },
];

const ClickHandler = () => {
   window.scrollTo(10, 0);
}

const HotelAreaS2 = (props) => {
   const [activeIndex, setActiveIndex] = useState(0);
   const backgroundImage = amenities[activeIndex].image;
   const textColor = '#F5F7FA';
   const accentColor = '#F9D57E';
   const textShadow = '0 6px 28px rgba(0, 0, 0, 0.65)';
   return (
      <div
         className={"" + props.hclass}
         style={{
            backgroundImage: `linear-gradient(180deg, rgba(4, 13, 20, 0.55) 0%, rgba(4, 13, 20, 0.7) 100%), url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: textColor
         }}
      >
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5">
                  <div className="title-area text-center space">
                     <span className="sub-title2" style={{ color: accentColor, textShadow }}>HOTEL AMENITIES</span>
                     <h2 className="sec-title" style={{ color: textColor, textShadow }}>Premium Facilities at M J Hotel and Resorts</h2>
                     <p className="fs-18 mt-30 text-golden" style={{ color: 'rgba(245, 247, 250, 0.92)', textShadow }}>
                        M J Hotel and Resorts offers world-class amenities including a swimming pool, 2 pillar-less banquets, 
                        32,000 sqft open lawn, fully-equipped gym, and upcoming SPA and Rooftop Lounge Bar. 
                        We are wheelchair accessible and friendly for special abled persons. Please note: Pet not allowed.
                        Experience luxury and comfort with our state-of-the-art facilities designed for both business and leisure travelers.
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