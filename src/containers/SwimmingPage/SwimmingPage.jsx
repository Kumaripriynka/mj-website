import { Fragment } from 'react';
import HeaderAreaS2 from '../../components/HeaderAreaS2/HeaderAreaS2';
import HeaderTopS2 from '../../components/HeaderTopS2/HeaderTopS2';
import FooterAreaS3 from '../../components/FooterAreaS3/FooterAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import { FaSwimmingPool, FaUmbrellaBeach, FaCocktail, FaWifi, FaParking, FaSnowflake, FaHotTub, FaTshirt } from 'react-icons/fa';
import { GiPoolDive, GiWaterSplash, GiPoolTriangle } from 'react-icons/gi';
import image7 from '../../img/package/swim.png';
import { BiSwim } from 'react-icons/bi';

const SwimmingPage = () => {
   return (
      <Fragment>
         <div className="home-city-hotel" style={{ backgroundColor: "#112E2E" }}>
            <HeaderTopS2 hclass={'header-top'} />
            <HeaderAreaS2 hclass={'th-header header-layout3'} />
            
            {/* Page Title with Breadcrumb */}
            <div className="breadcumb-wrapper" style={{
               background: 'linear-gradient(135deg, #112E2E 0%, #184040 100%)',
               paddingTop: 'clamp(140px, 20vw, 160px)',
               paddingBottom: '80px'
            }}>
               <div className="container">
                  <div className="breadcumb-content text-center">
                     <div style={{ marginTop: '20px', marginBottom: '20px' }}>
                        <a href="/" style={{
                           color: '#C2913D',
                           textDecoration: 'none',
                           fontSize: '16px',
                           fontWeight: '500',
                           display: 'inline-flex',
                           alignItems: 'center',
                           gap: '8px',
                           transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => e.target.style.color = '#D4A853'}
                        onMouseLeave={(e) => e.target.style.color = '#C2913D'}
                        >
                           <i className="fas fa-home"></i>
                           Home
                           <i className="fas fa-chevron-right" style={{ fontSize: '12px' }}></i>
                           <span style={{ color: '#D8DBDC' }}>Swimming</span>
                        </a>
                     </div>
                     <h1 className="breadcumb-title" style={{ 
                        color: '#fff', 
                        fontSize: 'clamp(32px, 5vw, 48px)', 
                        marginTop: '25px',
                        marginBottom: '15px',
                        fontWeight: '800'
                     }}>Swimming Pool</h1>
                     <p style={{ 
                        color: '#D8DBDC', 
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        maxWidth: '600px',
                        margin: '0 auto'
                     }}>Dive into luxury at our pristine swimming pool</p>
                  </div>
               </div>
            </div>

            {/* Main Pool Area */}
            <div className="space" style={{ background: '#112E2E', padding: '80px 0' }}>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="about-content-wrap">
                           <div className="hotel-title-area mb-4">
                              <span className="hotel-subtitle" style={{ color: '#C2913D', fontSize: '18px', fontWeight: '600', display: 'block', marginBottom: '15px' }}>
                                 LUXURY POOL EXPERIENCE
                              </span>
                              <h2 className="hotel-title" style={{ color: '#fff', fontSize: '40px', fontWeight: '700', marginBottom: '20px' }}>
                                 Dive into Crystal Clear Waters
                              </h2>
                              <div className="hotel-title-shape" style={{ width: '80px', height: '4px', background: '#C2913D', marginBottom: '25px' }}></div>
                           </div>
                           <p style={{ color: '#D8DBDC', marginBottom: '30px', fontSize: '16px', lineHeight: '1.8' }}>
                              Immerse yourself in the serene beauty of our Olympic-sized swimming pool, designed to provide the perfect blend of relaxation and recreation. Surrounded by lush tropical landscaping, our pool area offers a tranquil oasis where you can unwind under the sun or enjoy a refreshing swim in our temperature-controlled waters.
                           </p>
                           <div className="row">
                              <div className="col-md-6">
                                 <ul className="list-unstyled" style={{ color: '#D8DBDC', marginBottom: '30px' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                       <FaSwimmingPool style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Olympic-Sized Pool
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                       <FaUmbrellaBeach style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Poolside Cabanas
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                       <FaSnowflake style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Temperature Controlled
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                       <FaHotTub style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Adjacent Jacuzzi
                                    </li>
                                 </ul>
                              </div>
                              <div className="col-md-6">
                                 <ul className="list-unstyled" style={{ color: '#D8DBDC' }}>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                       <FaCocktail style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Poolside Bar Service
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                       <FaTshirt style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Towel Service
                                    </li>
                                    <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                                       <FaWifi style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Complimentary WiFi
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center' }}>
                                       <FaParking style={{ color: '#C2913D', marginRight: '10px', fontSize: '20px' }} />
                                       Ample Parking
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-6">
                        <div className="about-img-wrap" style={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
                           <div style={{ 
                              background: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))', 
                              padding: '30px', 
                              position: 'absolute', 
                              bottom: '0', 
                              left: '0', 
                              right: '0',
                              color: '#fff',
                              textAlign: 'center'
                           }}>
                              <h3 style={{ color: '#C2913D', marginBottom: '10px' }}>Pool Hours</h3>
                              <p style={{ marginBottom: '5px' }}>Monday - Sunday: 6:00 AM - 10:00 PM</p>
                              <p>Children's Pool: 8:00 AM - 8:00 PM</p>
                           </div>
                           <img 
                              src={image7}
                              alt="Luxury Swimming Pool" 
                              style={{ width: '100%', height: 'auto', display: 'block' }}
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Features Section */}
            <div className="space" style={{ background: '#0c2323', padding: '80px 0' }}>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8 text-center mb-5">
                        <span className="hotel-subtitle" style={{ color: '#C2913D', fontSize: '18px', fontWeight: '600', display: 'block', marginBottom: '15px' }}>
                           PREMIUM FACILITIES
                        </span>
                        <h2 className="hotel-title" style={{ color: '#fff', fontSize: '36px', fontWeight: '700', marginBottom: '15px' }}>
                           Poolside Perfection
                        </h2>
                        <div style={{ width: '80px', height: '3px', background: '#C2913D', margin: '0 auto 25px' }}></div>
                        <p style={{ color: '#D8DBDC', fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
                           Our swimming pool area is designed with your comfort and enjoyment in mind, featuring premium amenities and services.
                        </p>
                     </div>
                  </div>
                  <div className="row g-4">
                     <div className="col-md-4">
                        <div className="feature-box" style={{ background: '#1a3a3a', padding: '30px', borderRadius: '8px', height: '100%', transition: 'all 0.3s ease' }}>
                           <div style={{ width: '70px', height: '70px', background: 'rgba(194, 145, 61, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                              <GiPoolDive style={{ color: '#C2913D', fontSize: '30px' }} />
                           </div>
                           <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>Lap Swimming</h3>
                           <p style={{ color: '#D8DBDC', marginBottom: '0' }}>
                              Enjoy our dedicated lap lanes for serious swimmers looking to maintain their fitness routine during their stay.
                           </p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="feature-box" style={{ background: '#1a3a3a', padding: '30px', borderRadius: '8px', height: '100%', transition: 'all 0.3s ease' }}>
                           <div style={{ width: '70px', height: '70px', background: 'rgba(194, 145, 61, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                              <GiWaterSplash style={{ color: '#C2913D', fontSize: '30px' }} />
                           </div>
                           <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>Water Features</h3>
                           <p style={{ color: '#D8DBDC', marginBottom: '0' }}>
                              Relax to the soothing sounds of our water fountains and cascading waterfall features throughout the pool area.
                           </p>
                        </div>
                     </div>
                     <div className="col-md-4">
                        <div className="feature-box" style={{ background: '#1a3a3a', padding: '30px', borderRadius: '8px', height: '100%', transition: 'all 0.3s ease' }}>
                           <div style={{ width: '70px', height: '70px', background: 'rgba(194, 145, 61, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                              <GiPoolTriangle style={{ color: '#C2913D', fontSize: '30px' }} />
                           </div>
                           <h3 style={{ color: '#fff', fontSize: '22px', marginBottom: '15px' }}>Kids' Area</h3>
                           <p style={{ color: '#D8DBDC', marginBottom: '0' }}>
                              A safe and fun shallow area designed specifically for our younger guests to splash and play under supervision.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* CTA Section */}
            <div className="space" style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', padding: '100px 0', position: 'relative' }}>
               <div className="container">
                  <div className="row justify-content-center text-center">
                     <div className="col-lg-8">
                        <h2 style={{ color: '#fff', fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>Ready for a Refreshing Experience?</h2>
                        <p style={{ color: '#D8DBDC', fontSize: '18px', marginBottom: '30px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
                           Book your stay with us and enjoy exclusive access to our world-class swimming facilities.
                        </p>
                        <a href="/booking" className="btn" style={{ background: '#C2913D', color: '#fff', padding: '12px 30px', borderRadius: '50px', textDecoration: 'none', display: 'inline-block', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', transition: 'all 0.3s ease', border: '2px solid #C2913D' }} onMouseEnter={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#C2913D'; }} onMouseLeave={(e) => { e.target.style.background = '#C2913D'; e.target.style.color = '#fff'; }}>
                           Book Now
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            <FooterAreaS3 hclass={'footer-wrapper footer-layout1 footer-layout3'} />
            <Scrollbar />
         </div>
      </Fragment>
   );
};

export default SwimmingPage;
