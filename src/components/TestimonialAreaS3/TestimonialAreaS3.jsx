import React from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import leftArrow from '../../img/icon/left-arrow2.svg';
import Quote from '../../img/icon/quote2.svg';
import rightArrow from '../../img/icon/right-arrow2.svg';

const features = [
   {
      title: "Prime NH-2 Location",
      description: "Strategically located on Grand Trunk Road with excellent connectivity to Dhanbad city center and major business districts. Easy access to transportation and local attractions.",
      position: "Easy Accessibility"
   },
   {
      title: "Luxury Banquet Halls",
      description: "Spacious venues perfect for weddings, corporate events, and social gatherings with state-of-the-art facilities. Capacity to host large events with premium amenities.",
      position: "Event Excellence"
   },
   {
      title: "Modern Amenities",
      description: "Swimming pool, fitness center, and multi-cuisine restaurants designed for ultimate guest comfort and luxury experience.",
      position: "Premium Facilities"
   },
   {
      title: "Expert Hospitality",
      description: "Managed by experienced professionals committed to delivering exceptional service and creating memorable experiences for all our guests.",
      position: "Professional Service"
   },
   {
      title: "Luxury Accommodation",
      description: "Elegantly designed rooms and suites with modern amenities, comfortable bedding, and stunning views to ensure a relaxing stay.",
      position: "Comfort & Style"
   },
   {
      title: "Fine Dining Experience",
      description: "Multi-cuisine restaurant offering local Jharkhand delicacies along with international dishes, prepared by expert chefs using fresh ingredients.",
      position: "Culinary Excellence"
   }
];

const TestimonialAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   
   const settings = {
      loop: true,
      speed: 1200,
   };
   
   return (
      <section className={"" + props.hclass} id="testi-sec">
         <div className="container">
            <div className="row justify-content-between align-items-center">
               <div className="col-xxl-4 col-xl-5 col-lg-6">
                  <div className="title-area mb-30 text-center text-md-start">
                     <span className="sub-title2 style1">WHY CHOOSE US</span>
                     <h2 className="sec-title text-white">Premium Features at MJ Hotel Dhanbad</h2>
                  </div>
               </div>
               {/* <div className="col-md-auto">
                  <div className="sec-btn mt-n3 mt-md-0">
                     <Link onClick={ClickHandler} to="/contact" className="th-btn th-icon style3">Pre-Register Now</Link>
                  </div>
               </div> */}
            </div>
            <div className="slider-area">
               <Swiper
                  modules={[Navigation, Pagination]}
                  spaceBetween={30}
                  navigation={{
                     nextEl: '.slider-next',
                     prevEl: '.slider-prev',
                  }}
                  loop={settings['loop'] === false ? false : true}
                  speed={settings['speed'] ? settings['speed'] : 1000}
                  pagination={{
                     el: '.slider-pagination',
                     type: 'progressbar',
                     clickable: true,
                  }}
                  breakpoints={{
                     0: { slidesPerView: 1 },
                     576: { slidesPerView: 1 },
                     768: { slidesPerView: 1 },
                     992: { slidesPerView: 2 },
                     1200: { slidesPerView: 3, centeredSlides: true },
                  }}
                  className="swiper th-slider testiSlider3 has-shadow" id="roomSlider1"
               >

                  {features.map((feature, index) => (
                     <SwiperSlide key={index}>
                        <div className="testi-box style2">
                           <div className="box-quote"><img src={Quote} alt="" /></div>
                           <p className="box-text">{feature.description}</p>
                           <div className="box-wrapper">
                              <div className="box-content">
                                 <h3 className="box-title">{feature.title}</h3>
                                 <p className="box-desig">{feature.position}</p>
                              </div>
                              <div className="ratting-only">
                                 <i className="fa-sharp fa-solid fa-star"></i>
                                 <span className="title">5.0</span>
                              </div>
                           </div>
                        </div>
                     </SwiperSlide>
                  ))}

                  <div className="slider-controller">
                     <button className="slider-arrow style2 default slider-prev">
                        <img src={leftArrow} alt="" />
                     </button>
                     <div className="slider-pagination"></div>
                     <button className="slider-arrow style2 default slider-next">
                        <img src={rightArrow} alt="" />
                     </button>
                  </div>
               </Swiper>
            </div>
         </div>
      </section>
   );
};

export default TestimonialAreaS3;