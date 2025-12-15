import React from 'react';
import { Link } from 'react-router-dom';

// Attraction images
import attraction1 from '../../img/gallery/Maithon-Dam.jpg';
import attraction2 from '../../img/gallery/topchachi.jpeg';
import attraction3 from '../../img/gallery/parasnath.jpeg';
import attraction4 from '../../img/gallery/birsa.png';
import attraction5 from '../../img/gallery/Ushri_falls.jpeg';
import attraction6 from '../../img/gallery/Bhatinda_fall.jpg';

const attractions = [
  {
    name: 'Maithon Dam',
    distance: '48 km',
    image: attraction1,
    description:
      'A major dam built on the Barakar River known for its scenic reservoir and underground hydroelectric power station (one of the first in Southeast Asia). Surrounded by lush forested hills, it is a popular spot for boating and sunrise/sunset views, with the nearby Kalyaneshwari Temple adding spiritual significance.'
  },
  {
    name: 'Topchanchi Lake',
    distance: '15-20 km approx',
    image: attraction2,
    description:
      'An artificial lake spread over around 214 acres and surrounded by hills and greenery. It lies next to the Topchanchi Wildlife Sanctuary and is ideal for quiet nature walks, boating, and birdwatching, especially during winter when migratory birds visit.'
  },
  {
    name: 'Parasnath Hills',
    distance: '60-70 km approx',
    image: attraction3,
    description:
      'The highest peak in Jharkhand (over 1,350 meters) and an important Jain pilgrimage site known as Shikharji, where many Tirthankaras are believed to have attained moksha. It also holds cultural importance for the Santhal tribe as Marang Buru and offers beautiful trekking trails through forested terrain.'
  },
  {
    name: 'Bhatinda Falls',
    distance: '15-20 km approx',
    image: attraction6,
    description:
      'A scenic waterfall located on the confluence of the Katari and Damodar rivers, surrounded by rugged rocky formations and forest. Popular for short trips and picnics, the area provides a peaceful natural retreat but requires careful navigation due to uneven terrain.'
  },
  {
    name: 'Usri Falls',
    distance: '50 to 55 km approx by road',
    image: attraction5,
    description:
      'A three-tiered waterfall around 12 meters high near Giridih, flowing through a gorge surrounded by dense forest. Known for its unique rock formations and eco-tourism potential, it is a serene location for nature photography and monsoon visits.'
  },
  {
    name: 'Birsa Munda Park',
    distance: '5 – 6 km approx',
    image: attraction4,
    description:
      'A well-maintained urban park spread across approximately 21 acres with landscaped gardens, walking paths, kids’ play areas, and a toy train. Ideal for morning walks and family outings, it is named after the tribal freedom fighter Birsa Munda and offers a peaceful environment within the city.'
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
                        Discover the best attractions and landmarks near M J Hotel and Resorts. 
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
                        height: '400px',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
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
                           background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.85) 60%, transparent 100%)',
                           padding: '60px 25px 25px',
                           color: '#fff'
                        }}>
                           <h3 style={{
                              fontSize: '22px',
                              fontWeight: '700',
                              marginBottom: '12px',
                              color: '#C2913D'
                           }}>
                              {attraction.name}
                           </h3>
                           <p style={{
                              fontSize: '14px',
                              marginBottom: '0',
                              color: 'rgba(255,255,255,0.95)',
                              lineHeight: '1.6'
                           }}>
                              {attraction.description}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>

             {/* Connectivity Section */}
            <div className="row justify-content-center mt-60 mb-60">
               <div className="col-lg-10">
                  <div style={{
                     background: 'linear-gradient(135deg, rgba(194, 145, 61, 0.1) 0%, rgba(194, 145, 61, 0.05) 100%)',
                     border: '2px solid rgba(194, 145, 61, 0.3)',
                     borderRadius: '15px',
                     padding: '40px',
                     textAlign: 'center'
                  }}>
                     <h3 style={{
                        fontSize: '28px',
                        fontWeight: '700',
                        marginBottom: '20px',
                        color: '#C2913D'
                     }}>
                        <i className="fas fa-route" style={{ marginRight: '12px' }}></i>
                        Excellent Connectivity
                     </h3>
                     <p style={{
                        fontSize: '18px',
                        lineHeight: '1.8',
                        marginBottom: '30px',
                        color: '#D8DBDC'
                     }}>
                        M J Hotel and Resorts is strategically located on NH-2 (Grand Trunk Road), ensuring seamless connectivity to all major cities across India.
                     </p>
                     <div className="row gy-3">
                        <div className="col-md-3 col-6">
                           <div style={{ padding: '15px' }}>
                              <i className="fas fa-train" style={{ fontSize: '32px', color: '#C2913D', marginBottom: '10px' }}></i>
                              <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>Dhanbad Railway</h5>
                              <p style={{ fontSize: '14px', margin: 0, color: '#D8DBDC' }}>8 km away</p>
                           </div>
                        </div>
                        <div className="col-md-3 col-6">
                           <div style={{ padding: '15px' }}>
                              <i className="fas fa-plane" style={{ fontSize: '32px', color: '#C2913D', marginBottom: '10px' }}></i>
                              <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>Durgapur Airport</h5>
                              <p style={{ fontSize: '14px', margin: 0, color: '#D8DBDC' }}>100 km away</p>
                           </div>
                        </div>
                        <div className="col-md-3 col-6">
                           <div style={{ padding: '15px' }}>
                              <i className="fas fa-plane" style={{ fontSize: '32px', color: '#C2913D', marginBottom: '10px' }}></i>
                              <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>Kolkata Airport</h5>
                              <p style={{ fontSize: '14px', margin: 0, color: '#D8DBDC' }}>270 km away</p>
                           </div>
                        </div>
                        <div className="col-md-3 col-6">
                           <div style={{ padding: '15px' }}>
                              <i className="fas fa-road" style={{ fontSize: '32px', color: '#C2913D', marginBottom: '10px' }}></i>
                              <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '5px' }}>NH-2 Highway</h5>
                              <p style={{ fontSize: '14px', margin: 0, color: '#D8DBDC' }}>Direct Access</p>
                           </div>
                        </div>
                     </div>
                     <div style={{ marginTop: '25px', fontSize: '15px', color: '#D8DBDC' }}>
                        <p style={{ marginBottom: '12px' }}>
                           <strong style={{ color: '#C2913D' }}>Nearest Airports:</strong> Durgapur (100 km) • Kolkata (270 km) • Ranchi (165 km)
                        </p>
                        <div style={{ backgroundColor: 'rgba(194, 145, 61, 0.1)', padding: '15px', borderRadius: '8px', borderLeft: '3px solid #C2913D' }}>
                           <h5 style={{ color: '#C2913D', marginBottom: '10px', fontSize: '14px', fontWeight: '600' }}>Major City Connectivity</h5>
                           <p style={{ marginBottom: '8px', fontSize: '14px' }}>
                              <strong style={{ color: '#C2913D' }}>Durgapur:</strong> Industrial city with excellent business connectivity, just 100 km away. Great for corporate travelers.
                           </p>
                           <p style={{ marginBottom: '0', fontSize: '14px' }}>
                              <strong style={{ color: '#C2913D' }}>Kolkata:</strong> India's cultural capital and major metropolitan hub, 270 km away. Perfect for international and domestic connections with major airlines and excellent road connectivity via NH-2.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NearbyAttractions;
