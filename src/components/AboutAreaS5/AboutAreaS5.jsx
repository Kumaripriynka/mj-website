import React from 'react';
import { Link } from 'react-router-dom';
import Ab5 from '../../img/normal/aboutmj.png'
import Ab6 from '../../img/normal/abt_6.png'
import Award from '../../img/normal/mj.png'
import CountUp from 'react-countup';

const AboutAreaS5 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" +props.hclass} id="about-sec">
      <div className="container">
          <div className="row gy-5 align-items-center">
              <div className="col-xl-6">
                  <div className="img-box5">
                      <div className="about-img-area">
                          <div className="img1 th-parallax">
                              <img className="w-100" src={Ab5} alt="" />
                          </div>
                      </div>
                      <div className="about-wrapp">
                          <div className="img2">
                              <img src={Ab6} alt="" />
                          </div>
                          <div className="box-content">
                              <div className="award"><img src={Award} alt="" /></div>
                              <h3 className="box-title">Coming Soon - Grand Launch 2025</h3>
                          </div>
                      </div>

                  </div>
              </div>
              <div className="col-xl-5">
                  <div className="ps-xxl-5 ms-xxl-2">
                      <div className="title-area mb-37">
                          <span className="sub-title2 style1">ABOUT MJ HOTEL</span>
                          <h2 className="sec-title">Welcome To MJ Hotel <span>Luxury Awaits in The Heart of Dhanbad</span></h2>
                      </div>
                      <p className="extra-text text-body fs-18 mb-0">Located at Post-K.G Ashram, Jailgarha, NH-2, Grand Trunk Road in Gobindpur, Dhanbad, MJ Hotel is set to become the new benchmark of luxury hospitality in Jharkhand. We are creating an exclusive retreat that combines modern elegance with warm Indian hospitality.</p>
                      <p className="extra-text text-body fs-18 mb-50">MJ Hotel will feature contemporary architecture with state-of-the-art amenities, offering guests a perfect blend of comfort and sophistication. Our strategic location on the historic Grand Trunk Road provides excellent connectivity while maintaining a peaceful atmosphere for our valued guests.</p>

                      <div className="counter-card-wrap style2">
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number"><CountUp end={20}></CountUp></span>+ </h2>
                                  <p className="box-text">Luxury Rooms</p>
                              </div>
                          </div>
                          {/* <div className="divider style2"></div> */}
                          {/* <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number">
                                  <CountUp end={5}></CountUp>.<CountUp end={0}></CountUp>
                                    </span>+ </h2>
                                  <p className="box-text">Star Rating</p>
                              </div>
                          </div> */}
                          <div className="divider style2"></div>
                          <div className="counter-card">
                              <div className="media-body">
                                  <h2 className="box-number"><span className="counter-number"><CountUp end={3}></CountUp></span>+ </h2>
                                  <p className="box-text">Dining Options</p>
                              </div>
                          </div>
                          <div className="divider style2"></div>
                      </div>

                      {/* <div className="btn-group mt-70 justify-content-start">
                          <Link onClick={ClickHandler}  to="/about" className="th-btn th-icon">LEARN MORE</Link>
                          <Link onClick={ClickHandler}  to="/room" className="th-btn style3 th-icon">VIEW PREVIEW</Link>
                      </div> */}
                  </div>
              </div>
          </div>
      </div>
  </div>
   );
};

export default AboutAreaS5;