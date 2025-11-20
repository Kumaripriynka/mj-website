import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';

import Ab1 from '../../img/normal/about_1.jpg'
import title from '../../img/theme-img/title_icon_white.svg'
import title2 from '../../img/theme-img/title_icon2.svg'
import feature1 from '../../img/icon/about_feature_1.svg'
import feature2 from '../../img/icon/about_feature_2.svg'
import feature3 from '../../img/icon/about_feature_3.svg'
import feature4 from '../../img/icon/about_feature_4.svg'
import CircleText from './CircleText';




const AboutArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className="about-shape overflow-hidden bg-shape " id="about-sec">
      <div className="container">
          <div className="row gy-40 align-items-center">
              <div className="col-lg-6 col-xxl-4">
                  <div className="title-area mb-30 pe-xxl-5">
                      <img src={title} alt="shape" />
                      <h2 className="sec-title text-white">About MJ Hotel</h2>
                      <img src={title2} alt="shape" />
                      <p className="text-body fs-18 mt-25 mb-40">MJ Hotel & Resorts is passionate about "creating moments"
                          and understands that little things have a significant impact on our visitors, owners, and
                          employees. We carry out routine tasks in exceptional ways.</p>
                      <p className="text-body fs-18 mb-60">MJ Hotel with its nice restaurant ensure healthily, delicious &
                          different
                          cuisines to our beloved clients. Warmly welcome to MJ Hotel & enjoy our luxurious suites & sea
                          views.</p>
                  </div>
                  <div className="counter-card-wrap">
                      <div className="counter-card">
                          <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={290}/></span>+</h2>
                              <p className="box-text">Luxury Rooms</p>
                          </div>
                      </div>
                      <div className="divider"></div>
                      <div className="counter-card">
                          <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={4}/>.<CountUp end={8}/></span>+</h2>
                              <p className="box-text">Guest Rating</p>
                          </div>
                      </div>
                      <div className="divider"></div>
                      <div className="counter-card">
                          <div className="media-body">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={128}/></span>k+</h2>
                              <p className="box-text">Clients Happy</p>
                          </div>
                      </div>
                      <div className="divider"></div>
                  </div>
                  <div className="btn-group mt-60">
                      <Link onClick={ClickHandler} to="/about" className="th-btn2 th-icon">LEARN MORE</Link>
                  </div>
              </div>
              <div className="col-lg-6 col-xxl-4">
                  <div className="img-box1">
                      <div className="img1">
                          <img src={Ab1} alt="About" />
                      </div>
                      <div className="about-wrapp">
                          <CircleText text="* welcome to carmelina luxury hotel* welcome to carmelina luxury hotel*" />
                      </div>
                  </div>
              </div>
              <div className="col-xl-12 col-xxl-4 text-center text-xl-start">
                  <div className="about-feature-wrap">
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <img src={feature1} alt="Icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Serenity and bliss</h3>
                              <p className="box-text">Your comfort zone away from home</p>
                          </div>
                      </div>
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <img src={feature2} alt="Icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Store Luggage</h3>
                              <p className="box-text">Hospitality Meets Home</p>
                          </div>
                      </div>
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <img src={feature3} alt="Icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Room Services</h3>
                              <p className="box-text">Hospitality meets home</p>
                          </div>
                      </div>
                      <div className="about-feature">
                          <div className="box-icon">
                              <div className="color-masking">
                                  <div className="masking-src" ></div>
                                  <img src={feature4} alt="Icon" />
                              </div>
                          </div>
                          <div className="box-content">
                              <h3 className="box-title">Pick up & Drop</h3>
                              <p className="box-text">Experience elegance stay distinctive</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
   );
};

export default AboutArea;