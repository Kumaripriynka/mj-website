import { Fragment } from 'react';
import HeaderAreaS2 from '../../components/HeaderAreaS2/HeaderAreaS2';
import HeaderTopS2 from '../../components/HeaderTopS2/HeaderTopS2';
import FooterAreaS3 from '../../components/FooterAreaS3/FooterAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import { Link } from 'react-router-dom';
import gallery1 from '../../img/gallery/galery_1.png';


const BanquetHallPage = () => {
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
                           <span style={{ color: '#D8DBDC' }}>Banquet Hall</span>
                        </a>
                     </div>
                     <h1 className="breadcumb-title" style={{ 
                        color: '#fff', 
                        fontSize: 'clamp(32px, 5vw, 48px)', 
                        marginTop: '25px',
                        marginBottom: '15px',
                        fontWeight: '800'
                     }}>Banquet Hall</h1>
                     <p style={{ 
                        color: '#D8DBDC', 
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        maxWidth: '600px',
                        margin: '0 auto'
                     }}>Celebrate your special moments in our elegant banquet hall</p>
                  </div>
               </div>
            </div>

            {/* Introduction Section */}
            <div className="space" style={{ background: '#fff', padding: '100px 0' }}>
               <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
   <div className="about-img">
      <img 
         src={gallery1} 
         alt="Banquet Hall Preview" 
         style={{ 
            width: '100%', 
            height: '400px', 
            objectFit: 'cover',
            borderRadius: '10px'
         }} 
      />
   </div>
</div>

                     <div className="col-lg-6">
                        <div className="about-content ps-lg-4">
                           <div className="title-area mb-30">
                              <span className="sub-title" style={{ color: '#C2913D', fontWeight: '600', letterSpacing: '1px' }}>GRAND CELEBRATIONS</span>
                              <h2 className="sec-title" style={{ color: '#112E2E', fontSize: '36px', marginTop: '10px' }}>The Perfect Venue for Your Special Occasions</h2>
                           </div>
                           <p className="mb-30" style={{ color: '#555', lineHeight: '1.8' }}>
                              Whether you are planning a lavish wedding, a corporate conference, or an intimate family gathering, our Banquet Hall offers the perfect setting. With elegant interiors, state-of-the-art facilities, and impeccable service, we ensure your event is nothing short of spectacular.
                           </p>
                           <div className="list-style1 mb-40">
                              <ul style={{ listStyle: 'none', padding: 0 }}>
                                 <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: '#555' }}>
                                    <i className="fas fa-check-circle" style={{ color: '#C2913D', marginRight: '10px' }}></i> Spacious hall accommodating up to 500 guests
                                 </li>
                                 <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: '#555' }}>
                                    <i className="fas fa-check-circle" style={{ color: '#C2913D', marginRight: '10px' }}></i> Customized catering menus
                                 </li>
                                 <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', color: '#555' }}>
                                    <i className="fas fa-check-circle" style={{ color: '#C2913D', marginRight: '10px' }}></i> Professional event planning support
                                 </li>
                              </ul>
                           </div>
                           <Link to="/contact" className="th-btn" style={{ 
                              backgroundColor: '#C2913D', 
                              color: '#fff', 
                              padding: '15px 30px', 
                              textDecoration: 'none', 
                              display: 'inline-block',
                              borderRadius: '5px',
                              fontWeight: '600'
                           }}>Book Now</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Features Section */}
            <div className="space" style={{ background: '#f9f9f9', padding: '80px 0' }}>
               <div className="container">
                  <div className="title-area text-center mb-50">
                     <span className="sub-title" style={{ color: '#C2913D', fontWeight: '600' }}>OUR AMENITIES</span>
                     <h2 className="sec-title" style={{ color: '#112E2E' }}>Why Choose Us?</h2>
                  </div>
                  <div className="row">
                     {[
                        { icon: 'fa-users', title: 'Large Capacity', desc: 'Comfortably hosts large gatherings with flexible seating arrangements.' },
                        { icon: 'fa-snowflake', title: 'Fully Air-Conditioned', desc: 'Climate-controlled environment for year-round comfort.' },
                        { icon: 'fa-utensils', title: 'Exquisite Catering', desc: 'Delicious multi-cuisine options tailored to your taste.' },
                        { icon: 'fa-music', title: 'Audio-Visual Setup', desc: 'Modern sound systems and projectors for presentations and entertainment.' },
                        { icon: 'fa-gem', title: 'Elegant Decor', desc: 'Beautiful interiors that can be customized to your theme.' },
                        { icon: 'fa-parking', title: 'Ample Parking', desc: 'Convenient parking space for all your guests.' }
                     ].map((feature, index) => (
                        <div key={index} className="col-md-6 col-lg-4 mb-4">
                           <div className="feature-card" style={{ 
                              background: '#fff', 
                              padding: '30px', 
                              borderRadius: '10px', 
                              textAlign: 'center',
                              boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                              height: '100%'
                           }}>
                              <div className="icon" style={{ 
                                 fontSize: '40px', 
                                 color: '#C2913D', 
                                 marginBottom: '20px' 
                              }}>
                                 <i className={`fas ${feature.icon}`}></i>
                              </div>
                              <h3 style={{ fontSize: '20px', marginBottom: '15px', color: '#112E2E' }}>{feature.title}</h3>
                              <p style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }}>{feature.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* CTA Section */}
            <div className="cta-area" style={{ 
               background: '#112E2E', 
               padding: '80px 0', 
               textAlign: 'center' 
            }}>
               <div className="container">
                  <h2 style={{ color: '#fff', marginBottom: '20px' }}>Ready to Plan Your Event?</h2>
                  <p style={{ color: '#D8DBDC', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
                     Contact our event specialists today to discuss your requirements and get a customized quote.
                  </p>
                  <Link to="/contact" className="th-btn style2" style={{ 
                     backgroundColor: '#fff', 
                     color: '#112E2E', 
                     padding: '15px 40px', 
                     textDecoration: 'none', 
                     display: 'inline-block',
                     borderRadius: '5px',
                     fontWeight: '700',
                     textTransform: 'uppercase'
                  }}>Contact Us</Link>
               </div>
            </div>

            <FooterAreaS3 hclass={'footer-wrapper footer-layout1 footer-layout3'} />
            <Scrollbar />
         </div>
      </Fragment>
   );
};

export default BanquetHallPage;
