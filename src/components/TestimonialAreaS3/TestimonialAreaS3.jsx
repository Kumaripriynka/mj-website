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
                     <span className="sub-title2 style1">WHY M J HOTEL AND RESORTS?</span>
                     <h2 className="sec-title" style={{color: '#ffffff'}}>Premium Features at M J Hotel and Resorts Dhanbad</h2>
                  </div>
               </div>
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
                     1200: { slidesPerView: 3, centeredSlides: false },
                  }}
                  className="swiper th-slider testiSlider3"
               >

                  {features.map((feature, index) => (
                     <SwiperSlide key={index}>
                        <div className="testi-box style2" style={{
                           backgroundColor: 'rgba(255, 255, 255, 0.1)',
                           backdropFilter: 'blur(10px)',
                           border: '1px solid rgba(255, 255, 255, 0.2)',
                           borderRadius: '10px',
                           padding: '30px',
                           height: '100%',
                           opacity: 1,
                           transform: 'none',
                           filter: 'none'
                        }}>
                           <div className="box-quote"><img src={Quote} alt="" /></div>
                           <p className="box-text" style={{
                              color: '#ffffff',
                              fontSize: '16px',
                              lineHeight: '1.6',
                              marginBottom: '20px',
                              opacity: 1,
                              textShadow: 'none'
                           }}>{feature.description}</p>
                           <div className="box-wrapper">
                              <div className="box-content">
                                 <h3 className="box-title" style={{
                                    color: '#ffffff',
                                    fontSize: '20px',
                                    fontWeight: '600',
                                    marginBottom: '8px',
                                    opacity: 1,
                                    textShadow: 'none'
                                 }}>{feature.title}</h3>
                                 <p className="box-desig" style={{
                                    color: '#ffffff',
                                    opacity: 0.8,
                                    fontSize: '14px',
                                    margin: '0',
                                    textShadow: 'none'
                                 }}>{feature.position}</p>
                              </div>
                              <div className="ratting-only">
                                 <i className="fa-sharp fa-solid fa-star" style={{color: '#FFD700'}}></i>
                                 <span className="title" style={{
                                    color: '#ffffff',
                                    opacity: 1,
                                    textShadow: 'none'
                                 }}>5.0</span>
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