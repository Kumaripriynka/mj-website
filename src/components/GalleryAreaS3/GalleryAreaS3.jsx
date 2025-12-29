import React from 'react';
import { Link } from 'react-router-dom';
import GalleryBg from '../../img/bg/gallery_bg_2.png';

const GalleryAreaS3 = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   const cards = [
      { src: '/mj-1.jpeg', alt: 'Open lawn wedding setup', label: 'Grand Lawn' },
      { src: '/mj-3.jpeg', alt: 'Decorated banquet hall', label: 'Banquet Elegance' },
      { src: '/mj-4.jpeg', alt: 'Pool lounge evening', label: 'Pool Lounge' },
      { src: '/mj-5.jpeg', alt: 'Lobby welcome area', label: 'Lobby Welcome' },
      { src: '/mj-6.jpeg', alt: 'Luxury suite interiors', label: 'Luxury Suite' },
      { src: '/mj-7.jpeg', alt: 'Outdoor dining under lights', label: 'Alfresco Dining' },
   ];
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${GalleryBg})` }}>
         <div className="container">

            <div className="gallery-title-area mb-50">
               <div className="title-area">
                  <span className="sub-title2 style1">Brand New Hotel in Dhanbad</span>
                  <h2 className="sec-title">Hotel Preview Gallery</h2>
               </div>
               <p className="mt-3">Get a glimpse of the luxury and elegance that awaits you at M J Hotel and Resorts Dhanbad. Experience premium hospitality in the heart of Jharkhand.</p>
            </div>
            <div className="row gy-4">
               {cards.map((card, idx) => (
                  <div key={card.label} className="col-md-6 col-lg-4 gallery-card_wrapp">
                     <div className="gallery-card">
                        <div className="box-img">
                           <img src={card.src} alt={card.alt} />
                        </div>
                        <a href="#" className="simple-btn" aria-label={card.label}>
                           <i className="fa-brands fa-instagram"></i>
                        </a>
                     </div>
                  </div>
               ))}
            </div>

            <div className="gallery-btn mt-50 text-center">
               <h2 className="sec-title mb-4"><span className="text-white">M J Hotel and Resorts Dhanbad</span></h2>
               {/* <Link onClick={ClickHandler} to="/gallery" className="th-btn style3 th-icon">VIEW MORE PREVIEWS</Link> */}
            </div>
         </div>
      </div>
   );
};

export default GalleryAreaS3;