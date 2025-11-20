import React from 'react';
import Call from '../../img/icon/call-icon.svg'
import booking from '../../img/bg/booking_bg.png'

const BookingAreaS3 = (props) => {
   return (
      <div className={"" + props.hclass} style={{ backgroundImage: `url(${booking})` }}>
         <div className="container">
            <div className="row gy-4 align-items-center">
               <div className="col-xl-5">
                  <div className="me-xl-4 pe-xl-3">
                     <div className="booking-form2 style2 ajax-contact">
                        <form method="post">
                           <div className="row">
                              <div className="col-12">
                                 <div className="form-group">
                                    <input 
                                       type="text" 
                                       className="form-control style3" 
                                       name="name" 
                                       placeholder="Your Name" 
                                       required 
                                    />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="form-group">
                                    <input 
                                       type="email" 
                                       className="form-control style3" 
                                       name="email" 
                                       placeholder="Email Address" 
                                       required 
                                    />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="form-group">
                                    <input 
                                       type="tel" 
                                       className="form-control style3" 
                                       name="phone" 
                                       placeholder="Phone Number" 
                                       required 
                                    />
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="form-group">
                                    <select className="form-control style3" name="interest">
                                       <option value="">Select Interest</option>
                                       <option value="wedding">Wedding Events</option>
                                       <option value="corporate">Corporate Events</option>
                                       <option value="family">Family Vacation</option>
                                       <option value="business">Business Stay</option>
                                       <option value="banquet">Banquet Hall</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <div className="form-group">
                                    <textarea 
                                       className="form-control style3" 
                                       name="message" 
                                       placeholder="Your Message" 
                                       rows="3"
                                    ></textarea>
                                 </div>
                              </div>
                              <div className="col-12">
                                 <button type="submit" className="th-btn style2 w-100">
                                    SEND MESSAGE <i className="fa-regular fa-arrow-right"></i>
                                 </button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
               <div className="col-xl-6 col-xxl-4">
                  <div className="ps-xl-5">
                     <div className="title-area mb-45 pe-xxl-5">
                        <span className="sub-title2 style1">COMING SOON</span>
                        <h2 className="sec-title text-white ">Be The First To Experience Luxury</h2>
                     </div>
                     <div className="call-info">
                        <div className="call-icon"><a href="tel:+919876543210"><img src={Call} alt="" /></a></div>
                        <div className="media-body"><span className="call-label">Get in Touch with us</span>
                           <p className="call-link"><a href="tel:82280 45049">82280 45049</a></p>
                        </div>
                         <div className="media-body"><span className="email-label">Get in Touch with us</span>
                           <p className="mail-link"><a href="mailto:gm@mjhotelandresorts.com">gm@mjhotelandresorts.com</a></p>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default BookingAreaS3;