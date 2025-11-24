import { Fragment } from 'react';
import HeaderAreaS2 from '../../components/HeaderAreaS2/HeaderAreaS2';
import FooterAreaS3 from '../../components/FooterAreaS3/FooterAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import ContactArea from '../../components/ContactArea/ContactArea';

const ContactPage = () => {
   return (
      <Fragment>
         <div className="home-city-hotel" style={{ backgroundColor: "#112E2E" }}>
            <HeaderAreaS2 hclass={'th-header header-layout3'} />
            
            {/* Page Title with Breadcrumb */}
            <div className="breadcumb-wrapper" style={{
               background: 'linear-gradient(135deg, #112E2E 0%, #184040 100%)',
               padding: '80px 0 60px'
            }}>
               <div className="container">
                  <div className="breadcumb-content text-center">
                     <div style={{ marginBottom: '20px' }}>
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
                           <span style={{ color: '#D8DBDC' }}>Contact</span>
                        </a>
                     </div>
                     <h1 className="breadcumb-title" style={{ 
                        color: '#fff', 
                        fontSize: 'clamp(32px, 5vw, 48px)', 
                        marginBottom: '15px',
                        fontWeight: '800'
                     }}>Contact Us</h1>
                     <p style={{ 
                        color: '#D8DBDC', 
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        maxWidth: '600px',
                        margin: '0 auto'
                     }}>Get in touch with MJ Hotel & Resort</p>
                  </div>
               </div>
            </div>

            {/* Contact Information Cards */}
            <div className="space-top space-bottom" style={{ background: '#112E2E', padding: '60px 0' }}>
               <div className="container">
                  <div className="row g-3 g-md-4 mb-50 mb-md-60">
                     {/* Room Reservation */}
                     <div className="col-12 col-sm-6 col-lg-6">
                        <div className="contact-card-wrapper" style={{ padding: '30px', borderRadius: '8px', background: 'rgba(194, 145, 61, 0.1)', transition: 'all 0.3s ease' }}>
                           <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                              <i className="fas fa-bed" style={{ fontSize: '42px', color: '#C2913D', marginBottom: '15px', display: 'block' }}></i>
                              <h3 style={{ color: '#C2913D', fontSize: '20px', fontWeight: '700', marginBottom: '8px', margin: '0 0 8px 0' }}>Room Reservation</h3>
                              <p style={{ color: '#D8DBDC', fontSize: '14px', margin: '0' }}>Book your comfortable stay</p>
                           </div>
                           <div style={{ color: '#D8DBDC' }}>
                              <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                 <i className="fas fa-phone" style={{ color: '#C2913D', fontSize: '16px', minWidth: '16px' }}></i>
                                 <a href="tel:9296913101" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '14px' }}>9296913101</a>
                              </div>
                              <div style={{ marginBottom: '0', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                 <i className="fas fa-envelope" style={{ color: '#C2913D', fontSize: '16px', minWidth: '16px' }}></i>
                                 <a href="mailto:fo@mjhotelandresorts.com" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '13px', wordBreak: 'break-word' }}>fo@mjhotelandresorts.com</a>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Event Booking */}
                     <div className="col-12 col-sm-6 col-lg-6">
                        <div className="contact-card-wrapper" style={{ padding: '30px', borderRadius: '8px', background: 'rgba(194, 145, 61, 0.1)', transition: 'all 0.3s ease' }}>
                           <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                              <i className="fas fa-calendar-alt" style={{ fontSize: '42px', color: '#C2913D', marginBottom: '15px', display: 'block' }}></i>
                              <h3 style={{ color: '#C2913D', fontSize: '20px', fontWeight: '700', marginBottom: '8px', margin: '0 0 8px 0' }}>Event Booking</h3>
                              <p style={{ color: '#D8DBDC', fontSize: '14px', margin: '0' }}>Plan your perfect event</p>
                           </div>
                           <div style={{ color: '#D8DBDC' }}>
                              <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                 <i className="fas fa-phone" style={{ color: '#C2913D', fontSize: '16px' }}></i>
                                 <div className="phone-numbers" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    <a href="tel:9296913103" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '14px' }}>9296913103</a>
                                    <span style={{ color: '#999' }}>|</span>
                                    <a href="tel:9296913100" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '14px' }}>9296913100</a>
                                 </div>
                              </div>
                              <div style={{ marginBottom: '0', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                 <i className="fas fa-envelope" style={{ color: '#C2913D', fontSize: '16px', marginTop: '2px', minWidth: '16px' }}></i>
                                 <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                    <a href="mailto:info@mjhotelandresorts.com" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '13px', wordBreak: 'break-word' }}>info@mjhotelandresorts.com</a>
                                    <a href="mailto:gm@mjhotelandresorts.com" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '13px', wordBreak: 'break-word' }}>gm@mjhotelandresorts.com</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Reception */}
                     <div className="col-12 col-sm-6 col-lg-6">
                        <div className="contact-card-wrapper" style={{ padding: '30px', borderRadius: '8px', background: 'rgba(194, 145, 61, 0.1)', transition: 'all 0.3s ease' }}>
                           <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                              <i className="fas fa-concierge-bell" style={{ fontSize: '42px', color: '#C2913D', marginBottom: '15px', display: 'block' }}></i>
                              <h3 style={{ color: '#C2913D', fontSize: '20px', fontWeight: '700', marginBottom: '8px', margin: '0 0 8px 0' }}>Reception</h3>
                              <p style={{ color: '#D8DBDC', fontSize: '14px', margin: '0' }}>24/7 assistance at your service</p>
                           </div>
                           <div style={{ color: '#D8DBDC' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                 <i className="fas fa-phone" style={{ color: '#C2913D', fontSize: '16px' }}></i>
                                 <div className="phone-numbers" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                                    <a href="tel:9296913101" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '14px' }}>9296913101</a>
                                    <span style={{ color: '#999' }}>|</span>
                                    <a href="tel:9296913102" style={{ color: '#D8DBDC', textDecoration: 'none', fontSize: '14px' }}>9296913102</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     {/* Address */}
                     <div className="col-12 col-sm-6 col-lg-6">
                        <div className="contact-card-wrapper" style={{ padding: '30px', borderRadius: '8px', background: 'rgba(194, 145, 61, 0.1)', transition: 'all 0.3s ease' }}>
                           <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                              <i className="fas fa-map-marker-alt" style={{ fontSize: '42px', color: '#C2913D', marginBottom: '15px', display: 'block' }}></i>
                              <h3 style={{ color: '#C2913D', fontSize: '20px', fontWeight: '700', marginBottom: '8px', margin: '0 0 8px 0' }}>Visit Us</h3>
                              <p style={{ color: '#D8DBDC', fontSize: '14px', margin: '0' }}>Find us on the map</p>
                           </div>
                           <div style={{ color: '#D8DBDC' }}>
                              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                 <i className="fas fa-location-dot" style={{ color: '#C2913D', fontSize: '16px', marginTop: '2px', minWidth: '16px' }}></i>
                                 <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.5' }}>
                                    K.G Ashram, Jailgarha, NH-2,<br />
                                    Grand Trunk Rd, Gobindpur,<br />
                                    Dhanbad, Jharkhand 828109
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Google Map */}
                  <div className="row mb-40 mb-md-60">
                     <div className="col-12">
                        <div className="contact-map-wrapper" style={{
                           borderRadius: '12px',
                           overflow: 'hidden',
                           border: '2px solid rgba(194, 145, 61, 0.3)',
                           height: '300px',
                           minHeight: 'auto'
                        }}>
                           <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8976543210123!2d86.43!3d23.79!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sK.G%20Ashram%2C%20Jailgarha%2C%20NH-2%2C%20Grand%20Trunk%20Rd%2C%20Gobindpur%2C%20Dhanbad%2C%20Jharkhand%20828109!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                              width="100%"
                              height="100%"
                              style={{ border: 0, display: 'block' }}
                              allowFullScreen=""
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              title="MJ Hotel & Resort - K.G Ashram, Jailgarha, NH-2, Grand Trunk Rd, Gobindpur, Dhanbad, Jharkhand 828109"
                           ></iframe>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Contact Form */}
            <ContactArea />

            <FooterAreaS3 hclass={'footer-wrapper footer-layout1 footer-layout3'} />
            <Scrollbar />
         </div>
      </Fragment>
   );
};

export default ContactPage;
