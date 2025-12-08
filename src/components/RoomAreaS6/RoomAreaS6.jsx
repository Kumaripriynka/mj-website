import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RoomAreaS6.css";

/* -------------------- IMAGE IMPORTS -------------------- */
import hcc50 from "../../img/suite-room-4.png";
import hcc51 from "../../img/suite-room-4.png";
import hcc52 from "../../img/suite-room-4.png";
import hcc53 from "../../img/suite-room-4.png";

import slider1 from "../../img/pages/twins.png";
import slider2 from "../../img/pages/twins.png";
import slider3 from "../../img/pages/twins.png";
import slider44 from "../../img/pages/twins.png";
import slider55 from "../../img/pages/twins.png";

import deluxe1 from "../../img/pages/delux.png";
import deluxe2 from "../../img/pages/delux.png";
import deluxe3 from "../../img/pages/delux.png";
import delux44 from "../../img/pages/delux.png";
import delux55 from "../../img/pages/delux.png";

import party1 from "../../img/pages/exclusive.png";
import party2 from "../../img/pages/exclusive.png";
import party3 from "../../img/pages/exclusive.png";
import party5 from "../../img/pages/exclusive.png";

import ground1 from "../../img/package/luxuary.png";
import ground2 from "../../img/package/luxuary.png";
import ground3 from "../../img/package/luxuary.png";
import ground4 from "../../img/package/luxuary.png";

/* ------------------------------------------------------- */

const RoomSection = ({ 
  title, 
  subtitle, 
  description, 
  images, 
  activeImage, 
  setActiveImage,
  reverse 
}) => {
  return (
    <div className="room-card">
      <div className="row align-items-center">
        
        {/* IMAGE COLUMN */}
        <div className={`col-lg-6 ${reverse ? "order-lg-2" : ""} mb-4 mb-lg-0`}>
          <div className="room-image">
            <img 
              src={activeImage} 
              alt={title} 
              className="img-fluid main-room-image"
              loading="lazy"
            />
          </div>
        </div>

        {/* CONTENT COLUMN */}
        <div className={`col-lg-6 ${reverse ? "order-lg-1" : ""}`}>
          <div className="room-content">
            <div className="section-title">
              <span className="subtitle">{subtitle}</span>
              <h2 className="title">
                {title} <span className="age-badge">18+</span>
              </h2>
              <div className="title-shape"></div>
            </div>

            <p className="mb-4">{description}</p>

            <div className="room-thumbnails">
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`thumbnail-item ${activeImage === img ? "active" : ""}`}
                  onClick={() => setActiveImage(img)}
                >
                  <img src={img} alt={`${title} ${index + 1}`} loading="lazy" />
                </div>
              ))}
            </div>

            <Link to="/booking" className="btn btn-primary mt-4">
              Book Now <i className="fas fa-arrow-right ms-2"></i>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

const RoomAreaS6 = () => {

  const [activeImages, setActiveImages] = useState({
    suite: hcc50,
    executive: slider2,
    club: deluxe1,
    party: party1,
    partyHall: ground1
  });

  const updateImage = (type, img) => {
    setActiveImages(prev => ({ ...prev, [type]: img }));
  };

  return (
    <section className="room-area-s6 space-extra-bottom">
      <div className="container">

        {/* Suite Room */}
        <RoomSection
          title="Suite Room"
          subtitle="Luxury Accommodation"
          description="This suite room features elegant décor, modern furnishings, and stunning views."
          images={[hcc50, hcc51, hcc52, hcc53]}
          activeImage={activeImages.suite}
          setActiveImage={(img) => updateImage("suite", img)}
          reverse={false}
        />

        {/* Executive Room */}
        <RoomSection
          title="Executive Rooms"
          subtitle="Executive Comfort"
          description="Premium amenities and a spacious layout designed for comfort."
          images={[slider2, slider1, slider3, slider44, slider55]}
          activeImage={activeImages.executive}
          setActiveImage={(img) => updateImage("executive", img)}
          reverse={true}
        />

        {/* Club Room */}
        <RoomSection
          title="Club Rooms"
          subtitle="Exclusive Stay"
          description="A comfortable king-size bed, private balcony, and beautiful views."
          images={[deluxe1, deluxe2, deluxe3, delux44, delux55]}
          activeImage={activeImages.club}
          setActiveImage={(img) => updateImage("club", img)}
          reverse={false}
        />

        {/* Party Room */}
        <RoomSection
          title="Party Room"
          subtitle="Celebration Space"
          description="A spacious and vibrant room designed for celebrations and gatherings."
          images={[party1, party2, party3, party5]}
          activeImage={activeImages.party}
          setActiveImage={(img) => updateImage("party", img)}
          reverse={true}
        />

        {/* Party Hall Ground Floor */}
        <RoomSection
          title="Party Hall Ground Floor"
          subtitle="Grand Venue"
          description="Elegant amenities and a spacious hall designed for unforgettable events."
          images={[ground1, ground2, ground3, ground4]}
          activeImage={activeImages.partyHall}
          setActiveImage={(img) => updateImage("partyHall", img)}
          reverse={false}
        />

      </div>
    </section>
  );
};

export default RoomAreaS6;
