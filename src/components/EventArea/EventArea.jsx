import { Link } from 'react-router-dom';
import EventBg from '../../img/event/eventbg.png';
import CircleTextS2 from '../CircleTextS2/CircleTextS2';
import VideoModal from '../ModalVideo/ModalVideo';
const EventArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }



   return (
      <section className={"" + props.hclass}>
         <div className="container">
            {/* Now Open Banner */}
            <div style={{
               background: 'linear-gradient(135deg, #C2913D 0%, #D4A853 100%)',
               borderRadius: '20px',
               padding: '30px',
               marginBottom: '50px',
               textAlign: 'center',
               boxShadow: '0 10px 40px rgba(194, 145, 61, 0.3)',
               position: 'relative',
               overflow: 'hidden'
            }}>
               <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%'
               }}></div>
               <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '150px',
                  height: '150px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '50%'
               }}></div>
               <div style={{ position: 'relative', zIndex: 1 }}>
                  <h2 style={{
                     color: '#fff',
                     fontSize: '42px',
                     fontWeight: '800',
                     marginBottom: '15px',
                     textTransform: 'uppercase',
                     letterSpacing: '2px'
                  }}>
                     RESORT IS NOW OPEN!
                  </h2>
                  <p style={{
                     color: '#fff',
                     fontSize: '20px',
                     marginBottom: '25px',
                     fontWeight: '500'
                  }}>
                     Book Your Events, Parties, Weddings & Corporate Meetings
                  </p>
                  <div style={{
                     display: 'flex',
                     justifyContent: 'center',
                     gap: '20px',
                     flexWrap: 'wrap'
                  }}>
                     <a href="tel:9296913100" style={{
                        background: '#fff',
                        color: '#C2913D',
                        padding: '15px 35px',
                        borderRadius: '50px',
                        fontWeight: '700',
                        fontSize: '16px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease'
                     }}
                     onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                     onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                     >
                        <i className="fas fa-phone"></i>
                        Call: 9296913100
                     </a>
                     <a href="tel:9296913103" style={{
                        background: '#fff',
                        color: '#C2913D',
                        padding: '15px 35px',
                        borderRadius: '50px',
                        fontWeight: '700',
                        fontSize: '16px',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        boxShadow: '0 5px 20px rgba(0,0,0,0.2)',
                        transition: 'transform 0.3s ease'
                     }}
                     onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                     onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                     >
                        <i className="fas fa-phone"></i>
                        Call: 9296913103
                     </a>
                  </div>
               </div>
            </div>
            
            <div className="event-area bg-fixed background-image" style={{ backgroundImage: `url(${EventBg})` }}>
               <div className="row align-items-center justify-content-center">
                  <div className="col-xl-5">
                     <div className="event-item">
                        <div className="box-content">
                           <h3 className="box-title">Corporate Events & <span>Business Meetings</span></h3>
                           <p className="box-text">State-of-the-art conference facilities and 2 pillar-less banquet halls now available for professional corporate gatherings. Perfect blend of modern amenities and comfortable atmosphere for productive business discussions and conferences.</p>
                           <a href="tel:9296913100" className="th-btn style2 th-icon" style={{ textDecoration: 'none' }}>BOOK NOW</a>
                        </div>
                     </div>
                  </div>
                  {/* <div className="col-xl-2">
                     <div className="event-wrapp">
                        <div className="discount-wrapp">
                           <VideoModal vidclass={'play-btn popup-video'} />
                           <div className='MJ-hotel-round'>
                              <CircleTextS2 text="MJ Hotel Dhanbad * Launching Soon * MJ Hotel Dhanbad *" />
                           </div>
                        </div>
                     </div>
                  </div> */}
                  <div className="col-xl-5">
                     <div className="event-item">
                        <div className="box-content">
                           <h3 className="box-title">Weddings & Banquet <span>Celebrations</span></h3>
                           <p className="box-text">Spacious banquet halls and 32,000 sqft open lawn now open for grand wedding celebrations. Our elegant venues, expert event planning, and luxurious amenities will make your special moments cherished memories forever.</p>
                           <a href="tel:9296913103" className="th-btn style2 th-icon" style={{ textDecoration: 'none' }}>BOOK NOW</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default EventArea;