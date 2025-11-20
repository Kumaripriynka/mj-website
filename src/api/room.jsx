
/* Image */
import cat from "../img/icon/cat_2.svg";
import cat2 from "../img/icon/cat_3.svg";
import Off from "../img/shape/tag.png";


import img8 from "../img/offer/offer_4_1.jpg";
import img9 from "../img/offer/offer_4_2.jpg";
import img10 from "../img/offer/offer_4_3.jpg";
import img11 from "../img/offer/offer_4_4.jpg";
import img12 from "../img/offer/offer_4_5.jpg";
import img1 from "../img/room/room_1_1.jpg";
import img2 from "../img/room/room_1_2.jpg";
import img3 from "../img/room/room_1_3.jpg";
import img4 from "../img/room/room_1_4.jpg";
import img5 from "../img/room/room_3_1.jpg";
import img6 from "../img/room/room_3_2.jpg";
import img7 from "../img/room/room_3_3.jpg";

import img4_1 from "../img/room/room_4_1.jpg";
import img4_2 from "../img/room/room_4_2.jpg";
import img4_3 from "../img/room/room_4_3.jpg";
import img4_4 from "../img/room/room_4_4.jpg";
import img4_5 from "../img/room/room_4_5.jpg";
import img4_6 from "../img/room/room_4_6.jpg";


import img2_1 from "../img/room/room_2_1.jpg";
import img2_2 from "../img/room/room_2_2.jpg";
import img2_3 from "../img/room/room_2_3.jpg";
import img2_4 from "../img/room/room_2_4.jpg";
import img2_5 from "../img/room/room_2_5.jpg";
import img2_6 from "../img/room/room_2_6.jpg";



const RoomData = [

   {
      id: '1',
      number: '01',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$690',
      cat: cat,
      cat2: cat2,
      img: img1,
      imgRoom: img1,
      imgRoom2: img2_1,
      title: 'Exclusive Deluxe',
      subtitle: 'We have sixteen Executive Deluxe rooms for only BDT. 5555+ with King size bed.',
      subtitle2: 'A luxurious retreat with breathtaking sunset views.',
      slug: '1',
      categories: ["cat1", "cat2"]
   },
   {
      id: '2',
      number: '02',
      bed: 'Room',
      sqft: '1500',
      discount: '$690',
      cat: cat,
      cat2: cat2,
      img: img2,
      imgRoom: img2,
      imgRoom2: img2_2,
      title: 'Premier Suite',
      subtitle: 'We have sixteen Executive Deluxe rooms for only BDT. 5555+ with King size bed.',
      subtitle2: 'A luxurious retreat with breathtaking sunset views.',
      slug: '2',
      categories: ["cat3", "cat2"]
   },

   {
      id: '3',
      number: '03',
      bed: 'Twine Bed',
      sqft: '1500',
      discount: '$690',
      cat: cat,
      cat2: cat2,
      img: img3,
      imgRoom: img3,
      imgRoom2: img2_3,
      title: 'Ocenview Suite',
      subtitle: 'We have sixteen Executive Deluxe rooms for only BDT. 5555+ with King size bed.',
      subtitle2: 'A luxurious retreat with breathtaking sunset views.',
      slug: '3',
      categories: ["cat1", "cat2","cat4"]
   },
   {
      id: '4',
      number: '04',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$690',
      cat: cat,
      cat2: cat2,
      img: img4,
      imgRoom: img4,
      imgRoom2: img2_4,
      title: 'Deluxe Twine',
      subtitle: 'We have sixteen Executive Deluxe rooms for only BDT. 5555+ with King size bed.',
      subtitle2: 'A luxurious retreat with breathtaking sunset views.',
      slug: '4',
      categories: ["cat5", "cat6","cat4"]

   },

   {
      id: '5',
      number: '01',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img5,
      imgRoom: img2,
      imgRoom2: img2_5,
      title: 'Exclusive Weekend Getaway',
      subtitle: 'Birthdays, anniversaries, engagements – whatever the milestone, it’ll be a celebration fit for royalty.',
      subtitle2: 'A luxurious retreat with breathtaking sunset views.',
      slug: '5',
      categories: ["cat5", "cat4","cat7"]

   },
   {
      id: '6',
      number: '02',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img6,
      imgRoom: img3,
      imgRoom2: img2_6,
      title: 'Indulge in Our Spa Retreat',
      subtitle: 'Birthdays, anniversaries, engagements – whatever the milestone, it’ll be a celebration fit for royalty.',
      subtitle2: 'A luxurious retreat with breathtaking sunset views.',
      slug: '6',
      categories: ["cat9", "cat8","cat4"]

   },
   {
      id: '7',
      number: '03',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img7,
      title: 'Create Lasting Memories Together',
      subtitle: 'Birthdays, anniversaries, engagements – whatever the milestone, it’ll be a celebration fit for royalty.',
      slug: '7',
   },
   {
      id: '8',
      number: '01',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img8,
      img1: img4_1,
      title: 'Exclusive Deluxe',
      subtitle: 'We offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long day.',
      slug: '8',
   },

   {
      id: '9',
      number: '02',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img9,
      img1: img4_2,
      title: 'Premier Suite',
      subtitle: 'We offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long day.',
      slug: '9',
   },
   {
      id: '10',
      number: '03',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img10,
      img1: img4_3,
      title: 'Ocenview Suite',
      subtitle: 'We offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long day.',
      slug: '10',
   },
   {
      id: '11',
      number: '04',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img11,
      img1: img4_4,
      title: 'Deluxe Twine',
      subtitle: 'We offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long day.',
      slug: '11',
   },
   {
      id: '12',
      number: '05',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$250',
      cat: cat,
      cat2: Off,
      img: img12,
      img1: img4_5,
      title: 'Sunset Vista',
      subtitle: 'We offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long day.',
      slug: '12',
   },
   {
      id: '13',
      number: '06',
      bed: 'King Bed',
      sqft: '1500',
      discount: '$200',
      cat: cat,
      cat2: Off,
      img: img12,
      img1: img4_6,
      title: 'King Bed Exclusive',
      subtitle: 'We offer bigger bed and every bathroom has bathtub and shower, which brings relaxation to you after a long day.',
      slug: '13',
   },

]

export default RoomData;