import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder images - replace with actual attraction images
import attraction1 from '../../img/gallery/railway.png';
import attraction2 from '../../img/gallery/mython.png';
import attraction3 from '../../img/gallery/topchachi.png';
import attraction4 from '../../img/gallery/parasnath.png';
import attraction5 from '../../img/gallery/birsa.png';
import attraction6 from '../../img/gallery/shakti.png';

const attractions = [
   {
      name: 'Dhanbad Railway Station',
      distance: '8 km',
      image: attraction1,
      description: 'Major railway junction connecting to all major cities'
   },
   {
      name: 'Maithon Dam',
      distance: '45 km',
      image: attraction2,
      description: 'Scenic dam and popular picnic spot'
   },
   {
      name: 'Topchanchi Lake',
      distance: '35 km',
      image: attraction3,
      description: 'Beautiful lake surrounded by hills'
   },
   {
      name: 'Parasnath Hills',
      distance: '65 km',
      image: attraction4,
      description: 'Sacred Jain pilgrimage site'
   },
   {
      name: 'Birsa Munda Park',
      distance: '12 km',
      image: attraction5,
      description: 'Popular recreational park'
   },
   {
      name: 'Shakti Mandir',
      distance: '10 km',
      image: attraction6,
      description: 'Famous Hindu temple'
   }
];

const ClickHandler = () => {
   window.scrollTo(10, 0);
}

const NearbyAttractions = (props) => {
   return (
      <div className={"" + props.hclass}>
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-6">
                  <div className="title-area text-center">
                     <span className="sub-title2">EXPLORE NEARBY</span>
                     <h2 className="sec-title">Nearby Attractions</h2>
                     <p className="fs-18 mt-30">
                        Discover the best attractions and landmarks near MJ Hotel & Resort. 
                        From historical sites to natural wonders, explore the rich culture and beauty of Dhanbad.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row gy-4 mt-40">
               {attractions.map((attraction, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                     <div className="attraction-card" style={{
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '10px',
                        height: '350px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease'
                     }}>
                        <div className="attraction-img" style={{
                           width: '100%',
                           height: '100%',
                           position: 'relative'
                        }}>
                           <img 
                              src={attraction.image} 
                              alt={attraction.name}
                              style={{
                                 width: '100%',
                                 height: '100%',
                                 objectFit: 'cover',
                                 transition: 'transform 0.3s ease'
                              }}
                              onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                           />
                           <div style={{
                              position: 'absolute',
                              top: '20px',
                              right: '20px',
                              background: 'rgba(194, 145, 61, 0.95)',
                              color: '#fff',
                              padding: '8px 16px',
                              borderRadius: '25px',
                              fontSize: '14px',
                              fontWeight: '600',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px'
                           }}>
                              <i className="fas fa-map-marker-alt"></i>
                              {attraction.distance}
                           </div>
                        </div>
                        <div style={{
                           position: 'absolute',
                           bottom: '0',
                           left: '0',
                           right: '0',
                           background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 50%, transparent 100%)',
                           padding: '40px 25px 25px',
                           color: '#fff'
                        }}>
                           <h3 style={{
                              fontSize: '22px',
                              fontWeight: '600',
                              marginBottom: '8px',
                              color: '#fff'
                           }}>
                              {attraction.name}
                           </h3>
                           <p style={{
                              fontSize: '15px',
                              marginBottom: '0',
                              color: 'rgba(255,255,255,0.9)',
                              lineHeight: '1.5'
                           }}>
                              {attraction.description}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default NearbyAttractions;
