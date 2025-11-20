import React from 'react';
import { Link } from 'react-router-dom';
import ServiceData from '../../api/service';
import titleimg from '../../img/theme-img/title_icon.svg';
const ServiceArea = (props) => {
   const ClickHandler = () => {
      window.scrollTo(10, 0);
   }
   return (

      <section className={"" + props.hclass} id="service-sec">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-5">
                  <div className="title-area text-center">
                     <span className="sub-title">ROTAL SERVICES</span>
                     <h2 className="sec-title ">Explore Rotal Services</h2>
                     <span className="title-img"><img src={titleimg} alt="shape" /></span>
                  </div>
               </div>
            </div>
            <div className="row gy-4">
               {ServiceData.slice(0, 6).map((service, index) => (
                  <div className="col-md-6 col-xl-4" key={index}>
                     <div className="service-card">
                        <div className="box-number">{service.num}</div>
                        <div className="box-icon">
                           <img src={service.Icon} alt="Icon" />
                        </div>
                        <h3 className="box-title">
                           <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>{service.title}</Link></h3>
                        <p className="box-text">{service.subtitle}</p>
                        <div className="box-img global-img">
                           <img src={service.image} alt="Icon" />
                        </div>
                     </div>
                  </div>
               ))}

            </div>

         </div>
      </section>
   );
};

export default ServiceArea;