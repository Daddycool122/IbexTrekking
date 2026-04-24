import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/dyarabugyal/img1.jpeg";
import img2 from "../assets/Trek/dyarabugyal/img2.jpeg";
import img3 from "../assets/Trek/dyarabugyal/img3.jpeg";
import img4 from "../assets/Trek/dyarabugyal/img4.jpeg";
import img5 from "../assets/Trek/dyarabugyal/img5.jpeg";
import img6 from "../assets/Trek/dyarabugyal/img6.jpeg";
import img7 from "../assets/Trek/dyarabugyal/img7.jpeg";
import img8 from "../assets/Trek/dyarabugyal/img8.jpeg";
import img9 from "../assets/Trek/dyarabugyal/img9.jpeg";
import img10 from "../assets/Trek/dyarabugyal/img10.jpeg";
import img11 from "../assets/Trek/dyarabugyal/img11.jpeg";
import img12 from "../assets/Trek/dyarabugyal/img12.jpeg";
import img13 from "../assets/Trek/dyarabugyal/img13.jpeg";
import img14 from "../assets/Trek/dyarabugyal/img14.jpeg";
import img15 from "../assets/Trek/dyarabugyal/img15.jpeg";
import img16 from "../assets/Trek/dyarabugyal/img16.jpeg";
import img17 from "../assets/Trek/dyarabugyal/img17.jpeg";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import FormNP from "./FormNP";

export default function Kedarkantha() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Desktop_intro_section
        img={img8}
        title={"Dayara Bugyal Trek"}
        open_form={setOpen_form}
        des={"Step into endless meadows, closer to the peaks."}
      />
      <Photos
        photos={[
          img1,
          img2,
          img3,
          img4,
          img5,
          img6,
          img7,
          img8,
          img9,
          img10,
          img11,
          img12,
          img13,
          img14,
          img15,
          img16,
          img17,
        ]}
      />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Dayara Bugyal Trek</div>
          <div className={styles.tag_line}>
            Step into endless meadows, closer to the peaks.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>5D/4N</div>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5]}
            info={[
              {
                title: "Day 1: Dehradun to Natin Village",
                para1:
                  "Your trek begins with a scenic drive from Dehradun to Natin Village, the base camp. The route winds along the Bhagirathi River, through mountain towns and lush green valleys. On clear days, glimpses of Bandarpoonch peak will tease you from afar.",
                para2:
                  "By evening, you’ll arrive in Natin — a small, peaceful village surrounded by oak and pine forests. After settling into the guest house, you can explore the village, interact with locals, or simply rest while gazing at the starlit sky.",
                img: img1,
              },
              {
                title: "Day 2: Natin to Gui",
                para1:
                  "Today marks the start of the trek. The trail from Natin climbs gradually through thick oak and rhododendron forests. The fresh mountain air, chirping birds, and filtered sunlight through the trees make the walk refreshing.",
                para2:
                  "After about 4–5 hours, you’ll reach Gui campsite, surrounded by meadows and a backdrop of snow-capped peaks. The evening is perfect for soaking in views and enjoying your first camping night under a canopy of stars.",
                img: img2,
              },
              {
                title: "Day 3: Gui to Chilapada",
                para1:
                  "The trail today is shorter and easier, giving you more time to enjoy the changing landscapes. From Gui, the path takes you through enchanting alpine forests and opens into the lush green clearings of Chilapada.",
                para2:
                  "Chilapada is a small but serene campsite nestled amidst meadows. The views from here begin to open up more dramatically, and evenings are spent watching golden sunsets over the distant Himalayan peaks.",
                img: img3,
              },
              {
                title: "Day 4: Chilapada to Dayara Top, then trek to Nayata",
                para1:
                  "This is the highlight of the trek. From Chilapada, we trek steadily upward until we reach the grand Dayara Bugyal — one of the largest and most scenic meadows in India. Rolling grasslands stretch as far as the eye can see, dotted with seasonal wildflowers in summer or blanketed with snow in winter.",
                para2:
                  "Climb to Dayara Top (12,000 ft) for the most breathtaking views of the trek. On a clear day, you can see Bandarpoonch, Srikanth, Jaonli, Gangotri Range, and Draupadi ka Danda in their full glory. After soaking in the views, we descend gradually to Nayata campsite, where we spend the night amidst forests and meadows.",
                img: img4,
              },
              {
                title: "Day 5: Nayata to Natin Village and Drive to Dehradun",
                para1:
                  "On the final day, we descend from Nayata back to Natin Village. The trail is easy and scenic, giving you time to reflect on the beauty of the trek. Once at Natin, we board our vehicles and begin the drive back to Dehradun.",
                para2:
                  "By evening, you’ll arrive in Dehradun, marking the end of your Dayara Bugyal adventure — carrying memories of meadows, mountains, and starry campsites.",
                img: img5,
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
            <span className={styles.indi_highlight_title}>Days:</span> 5 Days /
            4 Nights
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Altitude:</span> 3,700
            m / 12,000 ft
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 24 km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Easy
            (Beginner-friendly)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> Spring
            | Summer | Autumn | Winter
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Month:</span> January
            – June, September – December
          </div>

          <Title text={"Why is Dayara Bugyal a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Dayara Bugyal is one of the most stunning alpine meadow treks in
                India. Its rolling meadows, dense oak and rhododendron forests,
                and sweeping Himalayan views make it a trek that can be enjoyed
                in every season. In winter, the meadows turn into a snow
                wonderland, offering one of the best snow-trekking experiences.
                In spring and summer, the meadows burst with wildflowers,
                turning the landscape into a vibrant carpet of colors.
              </li>
              <li className={styles.li}>
                From the summit, trekkers get a 360-degree view of the Garhwal
                Himalayas, including majestic peaks like Bandarpoonch, Srikanth,
                Jaonli, the Gangotri range, and Draupadi ka Danda. Apart from
                landscapes, this trek allows you to experience authentic
                Himalayan culture in small villages along the way, making it not
                just a trek but also a cultural journey. For beginners, Dayara
                Bugyal is one of the most recommended treks, thanks to its
                moderate terrain, short duration, and rewarding scenery.
              </li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 8 years</li>
            </ul>
          </div>

          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Jog 5 km in 40 minutes or 10 km in 90 minutes without stress.
              </li>
              <li className={styles.li}>Cycle 8 km in 30 minutes.</li>
              <li className={styles.li}>
                Ability to carry 10–12 kg backpack (or 3–5 kg if you off-load
                luggage).
              </li>
            </ul>
          </div>

          {/* <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Pick-up: ISBT Dehradun at 6:30 AM</li>
              <li className={styles.li}>Drop: ISBT Dehradun (by 6:30 PM)</li>
            </ul>
          </div> */}

          <Title text={"Trek Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation: Guesthouse at Sankri and tents on trek days
              </li>
              <li className={styles.li}>
                Meals: From Day 1 dinner to Day 5 dinner
              </li>
              <li className={styles.li}>
                Support Team: Certified leader, guides, chef, and staff
              </li>
              <li className={styles.li}>
                Equipment: Sleeping bags, tents, kitchen/dining setup
              </li>
              <li className={styles.li}>
                First Aid: Oxygen, BP monitor, stretcher
              </li>
              <li className={styles.li}>
                Permits, cloakroom, trek completion certificate
              </li>
            </ul>
          </div>

          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                At Natin Base Camp – guest house stay on triple/quad sharing
                basis with separate rooms for males and females.
              </li>
              <li className={styles.li}>
                During the trek – comfortable all-season tents on a twin-sharing
                basis, along with sleeping bags, mats, and camping equipment.
              </li>
              <li className={styles.li}>
                Nutritious and freshly cooked vegetarian meals during the trek
                and at the guest house.
              </li>
              <li className={styles.li}>
                Includes breakfast, lunch, evening snacks, and dinner.
                Occasional eggs will also be served.
              </li>
              <li className={styles.li}>
                Certified and experienced trek leader, guides, and support
                staff.
              </li>
              <li className={styles.li}>
                Cook and kitchen staff at campsites.
              </li>
              <li className={styles.li}>
                Forest entry charges and camping fees included.
              </li>
              <li className={styles.li}>
                First aid kit, oxygen cylinder, and other safety gear as
                required.
              </li>
            </ul>
          </div>

          <Title text={"Exclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Transport to and from Dehradun</li>
              <li className={styles.li}>Insurance (mandatory)</li>
              <li className={styles.li}>Food during transit</li>
              <li className={styles.li}>Personal expenses</li>
              <li className={styles.li}>
                Emergency evacuation or hospital charges
              </li>
              <li className={styles.li}>Anything not mentioned in Inclusion</li>
            </ul>
          </div>

          <Title text={"Frequently Asked Questions (FAQ)"} />
          <FaqAccordion faqs={[
            { question: "What kind of accommodation will we get?", answer: "At Natin Village (base camp), trekkers stay in guest houses (triple/quad sharing) with separate male & female arrangements. During the trek, camping is in twin-sharing all-season tents with sleeping bags, mattresses, and other equipment provided." },
            { question: "Are tents and sleeping bags provided?", answer: "Yes, all central equipment including sleeping bags, mattresses, and tents are provided." },
            { question: "What’s the reporting time and place?", answer: "Reporting is at Prince Chowk, Dehradun (near railway station) at 6:00 AM." },
            { question: "Can you arrange stay if we arrive early?", answer: "No, we don’t provide early accommodation but we can suggest nearby hotels like Hotel Star Wood, Hotel Vishnu Inn, and Hotel Aashrya." },
            { question: "How many trekkers are there in one group?", answer: "Minimum 6 trekkers are required to run a batch, and maximum group size is 24–26." },
            { question: "Is this trek suitable for beginners?", answer: "Yes, Dayara Bugyal is considered one of the best beginner-friendly treks." },
            { question: "What are some alternative treks?", answer: "Alternatives include Chopta Chandrashila, Kuari Pass (Winter), Brahmatal, Ali Bedni Bugyal, and Kedarkantha." },
            { question: "What food is served on the trek?", answer: "Nutritious vegetarian food is served with occasional eggs. Meals typically include dal, sabzi, roti, rice, daliya, poha, sandwiches, and tea." },
            { question: "Is drinking water available?", answer: "Yes, trekkers must carry 2 x 1L bottles which can be refilled at campsites." },
            { question: "What kind of shoes should we wear?", answer: "Shoes with good grip, ankle support, and water-resistant layers are recommended (e.g., Quechua Trek 100, MH 500, MH 100)." },
            { question: "Is a trekking pole necessary?", answer: "Yes, it is highly recommended for balance and reducing strain during the trek." }
          ]} />
        </div>

        <FormNP
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Dayara Bugyal Trek"}
          price={9999}
        />
      </div>
      <Footer />
    </>
  );
}
