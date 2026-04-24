import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Para from "./Para";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/Valley_of_flower/img1.jpg";
import img2 from "../assets/Trek/Valley_of_flower/img2.jpeg";
import img3 from "../assets/Trek/Valley_of_flower/img3.jpeg";
import img4 from "../assets/Trek/Valley_of_flower/img4.jpeg";
import img5 from "../assets/Trek/Valley_of_flower/img5.jpeg";
import img6 from "../assets/Trek/Valley_of_flower/img6.jpeg";
import img7 from "../assets/Trek/Valley_of_flower/img7.jpeg";
import img8 from "../assets/Trek/Valley_of_flower/img8.jpeg";
import img9 from "../assets/Trek/Valley_of_flower/img9.jpeg";
import img10 from "../assets/Trek/Valley_of_flower/img10.jpeg";
import img11 from "../assets/Trek/Valley_of_flower/img11.jpeg";
import Footer from "../footer/Footer";
import FormNP from "./FormNP";
import { useState, useEffect } from "react";
export default function Valley_of_flower() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Desktop_intro_section
        img={img10}
        title={"Valley of Flower"}
        open_form={setOpen_form}
        des={"A trail of flower, a journey to peace"}
      />
      <Photos
        photos={[img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]}
      />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Valley of Flower</div>
          <div className={styles.tag_line}>
            A Trail of Flowers, A Journey to
            <br />
            Peace.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>6D/5N</div>
          </div>
          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6]}
            info={[
              {
                title:
                  "Day 1: Rishikesh to Pipalkoti – A Scenic Himalayan Drive",
                para1:
                  "Your journey begins with a long but breathtaking drive from Rishikesh to Pipalkoti. Covering 200 km in 9–10 hours, the route takes you through winding mountain roads, dense forests, and river valleys.",
                para2:
                  "On the way, you will pass iconic confluences like Devprayag and Rudraprayag, where rivers merge to form the sacred Ganga. Enjoy the serene Himalayan landscapes before reaching Pipalkoti for an overnight stay.",
                img: img2,
              },
              {
                title: "Day 2: Pipalkoti to Ghangaria – The Trek Begins",
                para1:
                  "Start the day with a drive to Govindghat and then a short jeep ride to Pulna, the last motorable point. From here, your 9 km trek to Ghangaria begins along the Pushpawati River.",
                para2:
                  "The trail is scenic with waterfalls, lush forests, and occasional tea stalls for quick breaks. Ghangaria, your base camp for the next two days, welcomes you with simple accommodations and mountain charm.",
                img: img3,
              },
              {
                title:
                  "Day 3: Ghangaria to Valley of Flowers – A Colorful Paradise",
                para1:
                  "Today, you trek into the world-famous Valley of Flowers, a UNESCO World Heritage Site. The 4 km trail from Ghangaria to the valley entrance gradually opens up to a stunning alpine meadow filled with wildflowers.",
                para2:
                  "Spend hours exploring vibrant blossoms like Blue Poppy and Dog Flower against the backdrop of snow-capped peaks. After soaking in the beauty, return to Ghangaria for the night.",
                img: img4,
              },
              {
                title: "Day 4: Ghangaria to Hemkund Sahib – Spiritual Heights",
                para1:
                  "An early start takes you on a challenging 6 km uphill trek to Hemkund Sahib, one of the highest Gurudwaras in the world at 4,300 m. The trail is steep but rewarding with breathtaking mountain views.",
                para2:
                  "At the top, visit the serene Hemkund Lake and the holy Gurudwara, surrounded by snow-clad peaks. After some rest, descend back to Ghangaria for your final night here.",
                img: img5,
              },
              {
                title:
                  "Day 5: Ghangaria to Pipalkoti – Via Badrinath (Optional)",
                para1:
                  "Descend the familiar 9 km trail from Ghangaria to Pulna, then drive back to Govindghat. If time and weather allow, take a detour to visit the sacred Badrinath Temple before heading to Pipalkoti.",
                para2:
                  "The journey back offers a last glimpse of the mountains and rivers that defined your trek. Rest at Pipalkoti before the final return to the plains.",
                img: img6,
              },
              {
                title: "Day 6: Pipalkoti to Rishikesh – Back to Civilization",
                para1:
                  "Your adventure concludes with a drive back to Rishikesh, retracing the route through the Garhwal Himalayas. The 200 km journey takes about 9–10 hours.",
                para2:
                  "Take with you the unforgettable memories of flower-filled meadows, serene lakes, and towering peaks as you return to city life.",
                img: img7,
              },
            ]}
          />
          <Title text={"Highlights of the trip"} />
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Country:</span> India
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Location:</span>{" "}
            Uttarakhand
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Days:</span> 6
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Altitude:</span> 14,
            100ft (4,300m)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 37km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Easy to
            Moderate
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> Monsoon
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Month:</span> June,
            July, August, September
          </div>
          <div className={styles.indi_highlight}>
            <a href="tel://+916396518778">
              <span className={styles.indi_highlight_title}>Contact:</span>{" "}
              +916396518778
            </a>
          </div>
          {/* <Para /> */}

          <Title text={"Why is Valley of Flowers a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                The trek takes you to a spectacular Himalayan valley blooming
                with over 500 species of rare alpine flowers, including
                Himalayan Blue Poppy and Brahma Kamal.
              </li>
              <li className={styles.li}>
                The colorful floral landscape, set against a backdrop of
                snow-clad mountains, offers a dreamlike experience
              </li>
              <li className={styles.li}>
                You also visit Hemkund Sahib, one of the highest Gurudwaras in
                the world, situated beside a pristine glacial lake surrounded by
                seven peaks.
              </li>
              <li className={styles.li}>
                It’s a UNESCO World Heritage Site, rich in biodiversity,
                offering chances to spot unique flora and fauna
              </li>
              <li className={styles.li}>
                A perfect blend of natural beauty, spirituality, and adventure,
                making it a truly once-in-a-lifetime experience.
              </li>
            </ul>
          </div>
          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 9 years</li>
            </ul>
          </div>
          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Should be able to jog 5 km in 35 minutes or 10 km in 80 minutes
                without stress.
              </li>
              <li className={styles.li}>
                Alternatively, should be able to cycle 10 km in 30 minutes
              </li>
              <li className={styles.li}>
                If carrying a backpack: 10–12 kg. If off-loading, must be able
                to carry 3–5 kg
              </li>
            </ul>
          </div>
          <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Pick-Up Point: Tapovan, Rishikesh (opposite Shiv Vilas Hotel) at
                6:00 AM
              </li>
              <li className={styles.li}>
                Drop-Off Point: Tapovan, Rishikesh (arrive back by 6:30–7:30 PM)
              </li>
            </ul>
          </div>
          <Title text={"Options to reach Rishikesh"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Train/Bus to Rishikesh, Haridwar (25 km away), or Dehradun (50
                km away)
              </li>
              <li className={styles.li}>
                Flight to Jolly Grant Airport, Dehradun (21 km from Rishikesh){" "}
                <br />
                <br />
                Recommended to arrive the day before and keep a buffer day in
                July & August due to monsoon delays.
              </li>
            </ul>
          </div>
          <Title text={"Trek Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation: Guesthouses in Pipalkoti and Ghangaria,
                triple/dormitory basis
              </li>
              <li className={styles.li}>
                Meals: Veg (and eggs); from Day 1 dinner to Day 5 dinner
              </li>
              <li className={styles.li}>
                Trek Equipment: Tents, sleeping bags, liners, mattresses,
                utensils, kitchen/dining/toilet tents
              </li>
              <li className={styles.li}>
                Support Team: Certified trek leader, base camp manager, guides,
                high-altitude cook, porters
              </li>
              <li className={styles.li}>
                First Aid: Medical kit, oxygen, BP monitor, oximeter, stretcher
              </li>
              <li className={styles.li}>
                Transport: From Rishikesh to Pipalkoti and back, and local
                transport to Pulna, Govindghat, Badrinath (if opted)
              </li>
              <li className={styles.li}>
                Other: Permits, cloakroom, trek completion certificate
              </li>
            </ul>
          </div>
          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Stay at Pipalkoti (Day 1 & 5) and Ghangaria (Day 2–4)
              </li>
              <li className={styles.li}>
                Veg + egg meals (Day 1 dinner to Day 5 dinner)
              </li>
              <li className={styles.li}>
                Certified trek leaders, chef, support staff
              </li>
              <li className={styles.li}>Trekking gear and camping equipment</li>
              <li className={styles.li}>
                First aid and emergency response setup
              </li>
              <li className={styles.li}>
                All permits and entry fees (Indian nationals)
              </li>
              <li className={styles.li}>Transportation (if opted)</li>
              <li className={styles.li}>Cloakroom facility at base camp</li>
              <li className={styles.li}>Trek completion certificate</li>
            </ul>
          </div>
          <Title text={"Exclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Travel Insurance (mandatory)</li>
              <li className={styles.li}>Food during transit</li>
              <li className={styles.li}>Personal expenses</li>
              <li className={styles.li}>Mule/porter for personal luggage</li>
              <li className={styles.li}>
                Emergency evacuation, hospitalization
              </li>
              <li className={styles.li}>
                Anything not mentioned under Inclusion
              </li>
            </ul>
          </div>
          <Title text={"Frequently Asked Questions (FAQ)"} />
          <FaqAccordion faqs={[
            { question: "When is the best time to visit Valley of Flowers?", answer: "The best time is July to mid-September. This is when the flowers are in full bloom due to monsoon rains." },
            { question: "What is the total trek distance?", answer: "The trek is approximately 38 km round trip:" },
            { question: "What is the trek altitude and difficulty level?", answer: "Altitude: Around 12,000 ft (3,658 m) at the highest point in the Valley. Difficulty: Easy to moderate. The trail is well-defined but requires good stamina because of the climb and altitude." },
            { question: "Where does the trek start and end?", answer: "Start: Govindghat (near Joshimath, Uttarakhand). End: Govindghat. From Govindghat, you trek to Ghangaria, the base village for the Valley of Flowers and Hemkund Sahib." },
            { question: "How many days does the trek take?", answer: "Typically 5 to 6 days, including travel" },
            { question: "How to reach Valley of Flowers from Delhi?", answer: "By road: Delhi → Rishikesh → Joshimath → Govindghat (~520 km). By train: Nearest station: Haridwar/Rishikesh. By air: Nearest airport: Jolly Grant Airport, Dehradun. From Govindghat, start the trek." },
            { question: "Do I need permits?", answer: "Yes. You need to purchase an entry permit at the Forest Department checkpoint at Ghangaria." },
            { question: "What are some places to visit nearby?", answer: "Hemkund Sahib (a Sikh pilgrimage site, 6 km from Ghangaria). Badrinath Temple (famous Char Dham temple). Mana Village (India’s last village near Tibet border). Auli (skiing destination)." },
            { question: "Is it safe to travel and trek?", answer: "Yes, it is generally safe. However: Avoid trekking during heavy rains (risk of landslides). Stick to marked trails. Carry ID and emergency numbers." },
            { question: "Is camping allowed in the Valley?", answer: "No, camping and overnight stays are strictly prohibited inside the Valley of Flowers as it is a UNESCO World Heritage Site and protected area." },
            { question: "Are mules/porters available for luggage?", answer: "Yes. You can hire mules and porters at Govindghat or Ghangaria for carrying luggage." },
            { question: "What fitness level is required?", answer: "A basic to moderate level of fitness is enough. You should be able to walk 8–10 km uphill comfortably. Start light exercises or walking a month before the trek." },
            { question: "How many flower species can be seen?", answer: "Over 500 species of flowers, including rare Himalayan varieties like: Brahma Kamal Blue Poppy Cobra Lily Himalayan Bellflower" },
            { question: "Is the Valley of Flowers trek famous?", answer: "Yes, it is one of India’s most famous Himalayan treks and a UNESCO World Heritage Site known for its alpine flowers and natural beauty." }
          ]} />
        </div>
        <FormNP
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Valley of flower Trek"}
          price={10999}
        />
      </div>
      <Footer />
    </>
  );
}
