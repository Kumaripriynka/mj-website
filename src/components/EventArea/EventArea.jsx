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
            <div className="event-area bg-fixed background-image" style={{ backgroundImage: `url(${EventBg})` }}>
               <div className="row align-items-center justify-content-center">
                  <div className="col-xl-5">
                     <div className="event-item">
                        <div className="box-content">
                           <h3 className="box-title">Corporate Events & <span>Business Meetings</span></h3>
                           <p className="box-text">Coming soon - state-of-the-art conference facilities and banquet halls for professional corporate gatherings. Perfect blend of modern amenities and comfortable atmosphere for productive business discussions and conferences.</p>
                           {/* <Link onClick={ClickHandler} to="/events" className="th-btn style2 th-icon">VIEW PLANS</Link> */}
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
                           <p className="box-text">Launching soon - spacious banquet halls for grand wedding celebrations. Our elegant venues, expert event planning, and luxurious amenities will make your special moments cherished memories forever.</p>
                           {/* <Link onClick={ClickHandler} to="/events" className="th-btn style2 th-icon">VIEW PLANS</Link> */}
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