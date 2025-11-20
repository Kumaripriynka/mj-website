
import React from 'react';
import { Link } from 'react-router-dom';


import Ab4 from '../../img/normal/about_4.jpg';
import Avater from '../../img/normal/about_avater2.png';
import Signature from '../../img/normal/signature2.svg';

const AboutAreaS4 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }

   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xl-4">
                  <div className="pe-xl-5">
                     <div className="title-area mb-37 text-center text-xl-start">
                        <span className="sub-title2 style1 ">MANAGER</span>
                        <h2 className="sec-title ">The rotal In The Heart of Switzerland</h2>

                     </div>
                     <p className="fs-18  text-center text-xl-start">Hotels & Resorts is a modern, upscale hospitality company that is passionate about
                        ‘making moments’, recognising that small gestures make a big difference to our guests. We do
                        ordinary things in an extraordinary way – A philosophy that has defined our brand’s success.</p>
                     <div className="btn-group mt-40 d-flex justify-content-center justify-content-xl-start">
                        <Link onClick={ClickHandler} to="/about" className="th-btn style2 extra-btn">EXPLORE MORE</Link>

                     </div>
                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="img-box4">
                     <div className="img1 th-parallax">
                        <img src={Ab4} alt="Image" />
                     </div>

                  </div>
               </div>
               <div className="col-xl-4">
                  <div className="ps-xl-5">
                     <div className="about-profile2">
                        <div className="avater">
                           <img src={Avater} alt="avater" />
                        </div>
                        <h3 className="box-title">Andrew Karlex</h3>
                        <span className="text">manager</span>
                        <p className="extra-text fs-18 mb-35">Etiam vitae dapibus rhoncus. Eget etiam aenean montes felis pretium donec veni. Pede This blog is mle slice of the interweb to share outfits, good shopping</p>
                        <div>
                           <div className="signature">
                              <img src={Signature} alt="signature" />
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AboutAreaS4;