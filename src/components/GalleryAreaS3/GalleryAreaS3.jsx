import React from 'react';
import { Link } from 'react-router-dom';
import GalleryBg from '../../img/bg/gallery_bg_2.png';
import gallery1 from '../../img/gallery/galery_1.png';
import gallery2 from '../../img/gallery/galery_2.png';
import gallery3 from '../../img/gallery/galery_3.png';
import gallery4 from '../../img/pages/delux.png';
import gallery5 from '../../img/package/luxuary.png';
import gallery6 from '../../img/pages/twins.png';

const GalleryAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${GalleryBg})` }}>
         <div className="container">
            <div className="gallery-title-area mb-50">
               <div className="title-area">
                  <span className="sub-title2 style1">COMING SOON</span>
                  <h2 className="sec-title">Hotel Preview Gallery</h2>
               </div>
               <p className="mt-3">Get a glimpse of the luxury and elegance that awaits you at MJ Hotel Dhanbad. Experience premium hospitality in the heart of Jharkhand.</p>
            </div>
            <div className="row gy-4">
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery1} alt="Luxury Room Preview" />
                     </div>
                     <a href="#" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery2} alt="Banquet Hall Preview" />
                     </div>
                     <a href="#" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery3} alt="Restaurant Preview" />
                     </div>
                     <a href="#" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery4} alt="Swimming Pool Area" />
                     </div>
                     <a href="#" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery5} alt="Conference Facility" />
                     </div>
                     <a href="#" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
               <div className="col-md-6 col-lg-4 gallery-card_wrapp">
                  <div className="gallery-card">
                     <div className="box-img">
                        <img src={gallery6} alt="Hotel Exterior" />
                     </div>
                     <a href="#" className="simple-btn"><i className="fa-brands fa-instagram"></i></a>
                  </div>
               </div>
            </div>
            <div className="gallery-btn mt-50 text-center">
               <h2 className="sec-title mb-4"><span className="text-white">MJ Hotel Dhanbad - Opening Soon</span></h2>
               {/* <Link onClick={ClickHandler} to="/gallery" className="th-btn style3 th-icon">VIEW MORE PREVIEWS</Link> */}
            </div>
         </div>
      </div>
   );
};

export default GalleryAreaS3;