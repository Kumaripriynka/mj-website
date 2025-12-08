import React from 'react';
import './BookingPartners.css';

// Import logos
import bookingLogo from '../../assets/img/partners/booking.png';
import agodaLogo from '../../assets/img/partners/agoda.png';
import goibiboLogo from '../../assets/img/partners/goibibo.png';
import makemytripLogo from '../../assets/img/partners/makemytrip.png';
import easemytripLogo from '../../assets/img/partners/easemytrip.png';
import expediaLogo from '../../assets/img/partners/expedia.png';
import playtripLogo from '../../assets/img/partners/playtrip.png'; 

const BookingPartners = () => {
    const partners = [
        { name: 'Booking.com', logo: bookingLogo },
        { name: 'Agoda', logo: agodaLogo },
        { name: 'Goibibo', logo: goibiboLogo },
        { name: 'MakeMyTrip', logo: makemytripLogo },
        { name: 'EaseMyTrip', logo: easemytripLogo },
        { name: 'Expedia', logo: expediaLogo },
        { name: 'PlayTrip', logo: playtripLogo },
    ];

    return (
        <div className="booking-partners-area">
            <div className="container">
                <div className="title-area text-center mb-40">
                    <h2 className="sec-title text-golden">Book Through Us</h2>
                </div>
                <div className="partners-grid">
                    {partners.map((partner, index) => (
                        <div key={index} className="partner-item">
                            <img src={partner.logo} alt={`${partner.name} logo`} className="partner-logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookingPartners;
