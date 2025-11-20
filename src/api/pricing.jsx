
import line from '../img/bg/line-pattern2.png'

const pricingData = [
   {
      title: "Primary",
      subtitle: "Thinking of booking a hotel soon? Our category of hotel booking provides a wide range",
      price: "$290.00",
      duration: "/Monthly",
      popular: false,
      active: false,
      bgSrc: line,
      features: [
         "Personal packages",
         "Dining packages",
         "Spa packages",
         { text: "Romantic packages", unavailable: true },
         { text: "Activities packages", unavailable: true },
         { text: "Adventure or tour packages", unavailable: true },
      ],
   },
   {
      title: "Advance",
      subtitle: "Thinking of booking a hotel soon? Our category of hotel booking provides a wide range",
      price: "$590.00",
      duration: "/Monthly",
      popular: true,
      active: true,
      bgSrc: line,
      features: [
         "Personal packages",
         "Dining packages",
         "Spa packages",
         "Romantic packages",
         "Activities packages",
         "Adventure or tour packages",
      ],
   },
   {
      title: "Premium",
      subtitle: "Thinking of booking a hotel soon? Our category of hotel booking provides a wide range",
      price: "$790.00",
      duration: "/Monthly",
      popular: false,
      active: false,
      bgSrc: line,
      features: [
         "Personal packages",
         "Dining packages",
         "Spa packages",
         "Romantic packages",
         "Activities packages",
         "Adventure or tour packages",
      ],
   },
];


export default pricingData;