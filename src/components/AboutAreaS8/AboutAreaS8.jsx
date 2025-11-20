import CountUp from "react-countup";
import { Link } from "react-router-dom";
import Ab1 from '../../img/normal/about_7.jpg';
import Ab2 from '../../img/normal/about_8.jpg';
import Ab3 from '../../img/normal/about_9.jpg';
import title from '../../img/theme-img/title_icon_white.svg';
import CircleTextS2 from "../CircleTextS2/CircleTextS2";
import VideoModal from "../ModalVideo/ModalVideo";




const AboutAreaS8 = () => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className=" overflow-hidden space-extra2-top space-bottom" id="about-sec">
         <div className="container">
            <div className="row">
               <div className="col-xl-5 mb-35 mb-xl-0">
                  <div className="title-area mb-30 pe-xxl-5">
                     <img src={title} alt="shape" />
                     <h2 className="sec-title text-white">About Rotal</h2>
                     <p className="text-body fs-18 mt-25 mb-40">Rotal Hotels & Resorts is passionate about "creating moments"
                        and understands that little things have a significant impact on our visitors, owners, and
                        employees. We carry out routine tasks in exceptional ways.</p>
                     <p className="text-body fs-18 mb-60">Rotal with its nice restaurant ensure healthily, delicious &
                        different
                        cuisines to our beloved clients. Warmly welcome to Uniresort & enjoy our luxurious suites & sea
                        views.</p>
                  </div>
                  <div className="counter-card-wrap style2">
                     <div className="counter-card">
                        <div className="media-body">
                           <h2 className="box-number"><span className="counter-number"><CountUp end={298}></CountUp></span>+</h2>
                           <p className="box-text">Luxury Rooms</p>
                        </div>
                     </div>
                     <div className="divider"></div>
                     <div className="counter-card">
                        <div className="media-body">
                           <h2 className="box-number"><span className="counter-number"><CountUp end={4}></CountUp>.<CountUp end={8}></CountUp></span>+</h2>
                           <p className="box-text">Guest Rating</p>
                        </div>
                     </div>
                     <div className="divider"></div>
                     <div className="counter-card">
                        <div className="media-body">
                           <h2 className="box-number"><span className="counter-number"><CountUp end={128}></CountUp></span>k+</h2>
                           <p className="box-text">Clients Happy</p>
                        </div>
                     </div>
                     <div className="divider"></div>
                  </div>
                  <div className="btn-group mt-60">
                     <a href="about.html" className="th-btn extra-btn th-radius">LEARN MORE</a>
                     <div className="call-info style2">
                        <div className="call-icon"><a href="tel:+00123456789"><i className="fa-sharp fa-light fa-phone-volume"></i></a>
                        </div>
                        <div className="media-body"><span className="call-label">For Reservation</span>
                           <p className="call-link"><a href="tel:+01234567890">+01 234 567 890</a></p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-7">
                  <div className="img-box6">
                     <div className="img1">
                        <img src={Ab1} alt="" />
                        <div className="about-wrapp">
                           <div className="discount-wrapp">
                              <VideoModal vidclass={'play-btn popup-video'} />
                              <CircleTextS2 text="Rotal hotel since 1999* Rotal hotel since 1999*" />

                           </div>
                        </div>
                     </div>
                     <div className="about-vouchers">
                        <div className="box-content">
                           <h3 className="box-title">Gift Vouchers</h3>
                           <p className="text">Get the gift vouchers of Rotal meals, spa visits and more.</p>
                           <Link onClick={ClickHandler} to="/contact" className="th-btn th-radius">GET VOUCHERS</Link>
                        </div>
                        <div className="customer-review">
                           <div className="box-review">
                              <i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i><i className="fa-sharp fa-solid fa-star"></i>
                           </div>
                           <div className="box-content">
                              <h2 className="box-number"><span className="counter-number"><CountUp end={98}></CountUp></span>%</h2>
                              <p className="text">Customer Rating</p>
                           </div>
                        </div>
                     </div>
                     <div className="img2">
                        <img src={Ab2} alt="" />
                     </div>
                     <div className="img3">
                        <img src={Ab3} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutAreaS8;