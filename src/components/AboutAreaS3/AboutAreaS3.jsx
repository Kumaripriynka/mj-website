import React from 'react';
import CountUp from 'react-countup';

// images
import { Link } from 'react-router-dom';
import feature1 from '../../img/icon/about_feature_1.svg';
import feature2 from '../../img/icon/about_feature_2.svg';
import feature3 from '../../img/icon/about_feature_3.svg';
import feature4 from '../../img/icon/about_feature_4.svg';
import Ab4 from '../../img/normal/about_3.jpg';
import VideoModal from '../ModalVideo/ModalVideo';


const AboutAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} id="about-sec">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-6 mb-xl-0">
                  <div className="title-area mb-30 pe-xxl-5">
                     <span className="sub-title2 style1">ABOUT US</span>
                     <h2 className="sec-title text-white">We're dedicated to create moments of joy & delight for every guest
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row gy-4 gx-15 justify-content-between">
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature1} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">Serenity and bliss</h3>
                        <p className="box-text">Your comfort zone away from home</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature2} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">Store Luggage</h3>
                        <p className="box-text">Hospitality Meets Home</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature3} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">Room Services</h3>
                        <p className="box-text">Hospitality meets home</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-xl-4 col-xxl-3">
                  <div className="about-feature style2">
                     <div className="box-icon">
                        <img src={feature4} alt="Icon" />
                     </div>
                     <div className="box-content">
                        <h3 className="box-title">Pick up & Drop</h3>
                        <p className="box-text">Experience elegance stay distinctive</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row gy-4 space-top">
               <div className="col-xxl-7">
                  <div className="img-box3">
                     <div className="img1 th-parallax">
                        <img src={Ab4} alt="" />
                        <VideoModal vidclass={'play-btn border-play-btn popup-video'} />
                     </div>
                  </div>
               </div>
               <div className="col-xxl-5">
                  <div className="ps-xxl-5 pe-xxl-5">
                     <div className="counter-card-wrap style2">
                        <div className="counter-card">
                           <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={290} /></span>+</h2>
                              <p className="box-text">Luxury Rooms</p>
                           </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card">
                           <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={4} />.<CountUp end={8} /></span>+</h2>
                              <p className="box-text">Guest Rating</p>
                           </div>
                        </div>
                        <div className="divider"></div>
                        <div className="counter-card">
                           <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={128} /></span>k+</h2>
                              <p className="box-text">Clients Happy</p>
                           </div>
                        </div>
                        <div className="divider"></div>
                     </div>
                     <p className="extra-text text-body fs-18 mt-50 mb-40">All our Standard rooms have big windows to help you take a
                        broad view of the cityscape and nature. We offer bigger bed and every bathroom has bathtub and
                        shower, which brings relaxation to you after a long day.</p>
                     <p className="extra-text text-body fs-18 mb-50 pe-xl-5">Fast WIFI connection, satelite TV and
                        international standard electric socket are standard throughout Hotel. Lorem ipsum dolor sit
                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.</p>
                     <div className="btn-group justify-content-start">
                        <Link onClick={ClickHandler} to="/about" className="th-btn th-icon">LEARN MORE</Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutAreaS3;