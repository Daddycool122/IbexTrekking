// Navigation preview data for header hover menus
// Images are imported dynamically to keep data clean

// Trek data
import valleyImg from "../assets/Trek/Valley_of_flower/img1.jpg";
import kedarkanthaImg from "../assets/Trek/kedarkantha/img1.jpeg";
import choptaImg from "../assets/Trek/chopta/img1.jpeg";
import brahmataalImg from "../assets/Trek/brahmataal/img1.jpeg";
import kuariImg from "../assets/Trek/kuari/img1.jpeg";
import aliBedniImg from "../assets/Trek/alibedni/img1.jpg";
import dyaraBugyal from "../assets/Trek/dyarabugyal/img1.jpeg";
import pangarchullaImg from "../assets/Trek/pangarchulla/img1.jpeg";
import gaumukhImg from "../assets/Trek/gaumukh/img1.jpeg";

// Tour data
import panchkedarImg from "../assets/Trek/panch_kedar/img1.jpeg";
import adikailashImg from "../assets/hike/adikailash/img1.jpeg";
import chardhamImg from "../assets/hike/chardham/img1.jpg";
import kunjapuriImg from "../assets/hike/kunjapuri/img1.jpeg";

// Rafting data
import rafting16Img from "../assets/Rafting/img6.jpg";
import rafting25Img from "../assets/Rafting/img7.jpg";
import rafting35Img from "../assets/Rafting/img8.jpg";

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
  { name: 'Kunjapuri Hike', route: '/kunjapuri-hike', image: kunjapuriImg },
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
