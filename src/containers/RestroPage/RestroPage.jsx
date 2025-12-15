import { Fragment } from 'react';
import HeaderAreaS2 from '../../components/HeaderAreaS2/HeaderAreaS2';
import HeaderTopS2 from '../../components/HeaderTopS2/HeaderTopS2';
import FooterAreaS3 from '../../components/FooterAreaS3/FooterAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import PoliciesNote from '../../components/PoliciesNote/PoliciesNote';

const RestroPage = () => {
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
                           <span style={{ color: '#D8DBDC' }}>Restro & Rooftop Bar</span>
                        </a>
                     </div>
                     <h1 className="breadcumb-title" style={{ 
                        color: '#fff', 
                        fontSize: 'clamp(32px, 5vw, 48px)', 
                        marginTop: '25px',
                        marginBottom: '15px',
                        fontWeight: '800'
                     }}>RESTRO & ROOFTOP BAR</h1>
                     <p style={{ 
                        color: '#D8DBDC', 
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        maxWidth: '600px',
                         marginBottom: '20px',
                        margin: '0 auto'
                     }}>Elevate your dining experience with breathtaking views</p>
                  </div>
               </div>
            </div>

            {/* Coming Soon Content */}
            <div className="space" style={{ 
               background: '#112E2E', 
               padding: '120px 0',
               minHeight: '50vh',
               display: 'flex',
               alignItems: 'center'
            }}>
               <div className="container">
                  <div className="row justify-content-center">
                     <div className="col-lg-8 text-center">
                        <div style={{
                           background: 'rgba(26, 58, 58, 0.5)',
                           padding: '60px 40px',
                           borderRadius: '10px',
                           border: '1px solid rgba(194, 145, 61, 0.2)',
                           boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
                        }}>
                           <div style={{
                              width: '100px',
                              height: '100px',
                              background: 'rgba(194, 145, 61, 0.1)',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              margin: '0 auto 30px',
                              border: '2px solid #C2913D'
                           }}>
                              <i className="fas fa-cocktail" style={{ color: '#C2913D', fontSize: '40px' }}></i>
                           </div>
                           <h2 style={{
                              color: '#C2913D',
                              fontSize: '36px',
                              fontWeight: '700',
                              marginBottom: '20px',
                              textTransform: 'uppercase',
                              letterSpacing: '2px'
                           }}>Coming Soon</h2>
                           <h3 style={{
                              color: '#fff',
                              fontSize: '28px',
                              fontWeight: '600',
                              // marginBottom: '20px'
                           }}>RESTRO & ROOFTOP BAR</h3>
                           <p style={{
                              color: '#D8DBDC',
                              fontSize: '18px',
                              lineHeight: '1.8',
                              // marginBottom: '60px',
                              maxWidth: '700px',
                              marginLeft: 'auto',
                              marginRight: 'auto'
                           }}>
                              We're crafting an exceptional dining and entertainment experience that will take your breath away. Our RESTRO & ROOFTOP BAR will offer a perfect blend of exquisite cuisine, handcrafted cocktails, and panoramic views.
                           </p>
                           <div style={{
                              background: 'rgba(194, 145, 61, 0.1)',
                              padding: '20px 30px',
                              borderRadius: '8px',
                              border: '1px solid rgba(194, 145, 61, 0.3)',
                              marginBottom: '40px',
                              maxWidth: '700px',
                              marginLeft: 'auto',
                              marginRight: 'auto'
                           }}>
                              <h4 style={{
                                 color: '#C2913D',
                                 fontSize: '16px',
                                 fontWeight: '600',
                                 // marginBottom: '20px',
                                 marginTop: '0'
                              }}>Facilities & Policies</h4>
                              <div style={{ color: '#D8DBDC', fontSize: '15px', lineHeight: '1.8' }}>
                                 <p style={{ marginBottom: '8px' }}>
                                    <i className="fas fa-wheelchair" style={{ color: '#C2913D', marginRight: '10px' }}></i>
                                    <strong>Wheelchair Accessible</strong> - Fully accessible for special abled persons
                                 </p>
                                 <p style={{ marginBottom: '0' }}>
                                    <i className="fas fa-ban" style={{ color: '#C2913D', marginRight: '10px' }}></i>
                                    <strong>Pet Not Allowed</strong> - Please note we do not permit pets on premises
                                 </p>
                              </div>
                           </div>
                           <div style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '15px',
                              marginTop: '20px'
                           }}>
                              <a href="/contact" className="btn" style={{
                                 background: '#C2913D',
                                 color: '#fff',
                                 padding: '12px 30px',
                                 borderRadius: '50px',
                                 textDecoration: 'none',
                                 display: 'inline-block',
                                 fontWeight: '600',
                                 textTransform: 'uppercase',
                                 letterSpacing: '1px',
                                 transition: 'all 0.3s ease',
                                 border: '2px solid #C2913D'
                              }} onMouseEnter={(e) => { e.target.style.background = 'transparent'; e.target.style.color = '#C2913D'; }} onMouseLeave={(e) => { e.target.style.background = '#C2913D'; e.target.style.color = '#fff'; }}>
                                 Contact Us
                              </a>
                              <a href="/" className="btn" style={{
                                 background: 'transparent',
                                 color: '#C2913D',
                                 padding: '12px 30px',
                                 borderRadius: '50px',
                                 textDecoration: 'none',
                                 display: 'inline-block',
                                 fontWeight: '600',
                                 textTransform: 'uppercase',
                                 letterSpacing: '1px',
                                 transition: 'all 0.3s ease',
                                 border: '2px solid #C2913D'
                              }} onMouseEnter={(e) => { e.target.background = '#C2913D'; e.target.style.color = '#fff'; }} onMouseLeave={(e) => { e.target.background = 'transparent'; e.target.style.color = '#C2913D'; }}>
                                 Return Home
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Policies Note Component */}
            <div style={{ background: '#112E2E', padding: '50px 0' }}>
               <div className="container">
                  <PoliciesNote isDarkBg={true} />
               </div>
            </div>

            <FooterAreaS3 hclass={'footer-wrapper footer-layout1 footer-layout3'} />
            <Scrollbar />
         </div>
      </Fragment>
   );
};

export default RestroPage;
