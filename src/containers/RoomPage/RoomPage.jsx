import { Fragment } from 'react';
import HeaderAreaS2 from '../../components/HeaderAreaS2/HeaderAreaS2';
import HeaderTopS2 from '../../components/HeaderTopS2/HeaderTopS2';
import FooterAreaS3 from '../../components/FooterAreaS3/FooterAreaS3';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import RoomAreaS6 from '../../components/RoomAreaS6/RoomAreaS6';
import OfferAreaS4 from '../../components/OfferAreaS4/OfferAreaS4';
import PoliciesNote from '../../components/PoliciesNote/PoliciesNote';

const RoomPage = () => {
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
                           <span style={{ color: '#D8DBDC' }}>Rooms</span>
                        </a>
                     </div>
                     <h1 className="breadcumb-title" style={{ 
                        color: '#fff', 
                        fontSize: 'clamp(32px, 5vw, 48px)', 
                        marginTop: '25px',
                        marginBottom: '15px',
                        fontWeight: '800'
                     }}>Our Rooms & Suites</h1>
                     <p style={{ 
                        color: '#D8DBDC', 
                        fontSize: 'clamp(16px, 2vw, 18px)',
                        maxWidth: '600px',
                        margin: '30px auto'
                     }}>Experience comfort and luxury in our well-appointed rooms</p>
                  </div>
               </div>
            </div>

              <OfferAreaS4 hclass={'offer-area4 position-relative overflow-hidden space-top'} />

            {/* Policies Note Component */}
            <div style={{ background: '#112E2E', padding: '50px 0' }}>
               <div className="container">
                  <PoliciesNote isDarkBg={true} />
               </div>
            </div>

            {/* Rooms Content */}
            <RoomAreaS6 />
          

            <FooterAreaS3 hclass={'footer-wrapper footer-layout1 footer-layout3'} />
            <Scrollbar />
         </div>
      </Fragment>
   );
};

export default RoomPage;
