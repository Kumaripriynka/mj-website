import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './WelcomeFeatures.css';

// Import GIF images
import icon1 from '../../img/1.gif';
import icon2 from '../../img/2.gif';
import icon3 from '../../img/3.gif';
import icon4 from '../../img/4.gif';
import icon5 from '../../img/5.gif';
import icon6 from '../../img/6.gif';
import separatorImg from '../../img/border-icon.png';

const WelcomeFeatures = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 5000, // Slower speed for smooth marquee
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        arrows: false,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    const features = [
        { img: icon1, title: "banquet hall" },
        { img: icon2, title: "Business Lounge" },
        { img: icon3, title: "Meeting room facilities" },
        { img: icon4, title: "stocked bar" },
        { img: icon5, title: "4 Star Hotel at Dhanbad" },
        { img: icon6, title: "Approved by Ministry of Tourism" },
    ];

    return (
        <div className="welcome-features-area">
            <div className="container">
                <div className="welcome-content">
                    <h2 className="welcome-title sec-title sub-title2">
                        Step Into a World of Elegance
                    </h2>
                    <p className="welcome-text">
                        Discover unparalleled business hospitality at M J Hotel and Resorts
                        <br />
                        <span>
                            <br />Once your workday concludes, treat yourself to a bit of retail therapy...<br />
                            Our hotel features a designated smoking area and a variety of amenities, making it the premier choice for business travelers in Dhanbad.
                        </span>
                    </p>
                    <div className="welcome-divider">
                         <img src={separatorImg} alt="Divider" className="img-fluid" />
                    </div>
                </div>

                <div className="features-marquee">
                    <Slider {...settings}>
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-box">
                                    <div className="feature-icon-img">
                                        <img src={feature.img} alt={feature.title} />
                                    </div>
                                    <p className="feature-title">{feature.title}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default WelcomeFeatures;
