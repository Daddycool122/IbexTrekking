// Navigation preview data for header hover menus
// Images are imported dynamically to keep data clean

// Trek data
import valleyImg from "../assets/Trek/Valley_of_flower/valley-of-flower-trek-1.webp";
import kedarkanthaImg from "../assets/Trek/kedarkantha/kedarkantha-trek-1.jpeg";
import choptaImg from "../assets/Trek/chopta/chopta-trek-1.jpeg";
import brahmataalImg from "../assets/Trek/brahmataal/brahmataal-trek-1.jpeg";
import kuariImg from "../assets/Trek/kuari/kuari-trek-1.jpeg";
import aliBedniImg from "../assets/Trek/alibedni/alibedni-trek-1.webp";
import dyaraBugyal from "../assets/Trek/dyarabugyal/dyarabugyal-trek-1.webp";
import pangarchullaImg from "../assets/Trek/pangarchulla/pangarchulla-trek-1.jpeg";
import gaumukhImg from "../assets/Trek/gaumukh/gaumukh-trek-1.jpeg";

// Tour data
import panchkedarImg from "../assets/Trek/panch_kedar/panch-kedar-trek-1.jpeg";
import adikailashImg from "../assets/tour/adikailash/adikailash-tour-1.webp";
import chardhamImg from "../assets/tour/chardham/chardham-yatra-tour-1.jpg";
import kunjapuriImg from "../assets/tour/kunjapuri/kunjapuri-sunrise-tour-1.jpeg";

// Rafting data
import rafting16Img from "../assets/Rafting/rishikesh-river-rafting-6.webp";
import rafting25Img from "../assets/Rafting/rishikesh-river-rafting-7.webp";
import rafting35Img from "../assets/Rafting/rishikesh-river-rafting-8.webp";

export const TREKS = [
  { name: 'Valley of Flower', route: '/valley-of-flower', image: valleyImg },
  { name: 'Kedarkantha Trek', route: '/kedarkantha-trek', image: kedarkanthaImg },
  { name: 'Chopta Chandrashilla', route: '/chopta-chandrashilla-trek', image: choptaImg },
  { name: 'Brahmatal Trek', route: '/brahmatal-trek', image: brahmataalImg },
  { name: 'Kuari Pass Trek', route: '/kuari-pass-trek', image: kuariImg },
  { name: 'Ali Bedni Bugyal', route: '/ali-bedni-bugyal-trek', image: aliBedniImg },
  { name: 'Dayara Bugyal', route: '/dayara-bugyal-trek', image: dyaraBugyal },
  { name: 'Pangarchulla Peak', route: '/pangarchulla-peak-trek', image: pangarchullaImg },
  { name: 'Gaumukh Tapovan', route: '/gaumukh-tapovan-trek', image: gaumukhImg }
];

export const TOURS = [
  { name: 'Panch Kedar Tour', route: '/panch-kedar-trek', image: panchkedarImg },
  { name: 'Kunjapuri Tour', route: '/kunjapuri-tour', image: kunjapuriImg },
  { name: 'Adi Kailash & Om Parvat', route: '/adi-kailash-tour', image: adikailashImg },
  { name: 'Chardham Yatra', route: '/chardham-yatra-2026', image: chardhamImg }
];

export const RAFTING = [
  { name: '16 KM Rafting', id: 16, image: rafting16Img },
  { name: '25 KM Rafting', id: 25, image: rafting25Img },
  { name: '35 KM Rafting', id: 35, image: rafting35Img }
];

// Position offsets for each menu type (for responsive alignment)
export const MENU_POSITIONS = {
  treks: '0px',
  tours: '300px',
  rafting: '500px'
};

// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1024
};
