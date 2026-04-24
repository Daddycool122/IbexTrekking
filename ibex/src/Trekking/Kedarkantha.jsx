import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/kedarkantha/img1.jpeg";
// import img2 from "../assets/Trek/kedarkantha/img2.jpeg";
import img4 from "../assets/Trek/kedarkantha/img4.jpeg";
// import img5 from "../assets/Trek/kedarkantha/img5.jpeg";
import img7 from "../assets/Trek/kedarkantha/img7.jpeg";
import img8 from "../assets/Trek/kedarkantha/img8.jpeg";
import img9 from "../assets/Trek/kedarkantha/img9.jpeg";
import img10 from "../assets/Trek/kedarkantha/img10.jpeg";
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
        title={"Kedarkantha Trek"}
        open_form={setOpen_form}
        des={"A winter summit that defines adventure and beauty"}
      />
      <Photos photos={[img1, img4, img7, img8, img9, img10]} />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Kedarkantha Trek</div>
          <div className={styles.tag_line}>
            The Most Popular Winter Trek in India.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>6D/5N</div>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6]}
            info={[
              {
                title: "Day 1: Dehradun to Sankri – The Base Village",
                para1:
                  "Drive 220 km from Dehradun to Sankri (1,950 m), a scenic 10-hour journey passing through pine forests and rivers.",
                para2: "Stay overnight in a guesthouse at Sankri.",
                img: img1,
              },
              {
                title: "Day 2: Sankri to Juda Ka Talab – The Frozen Lake",
                para1:
                  "Begin the 4 km trek to Juda Ka Talab at 2,700 m. A mesmerizing campsite with a frozen lake during winter.",
                para2: "Camp overnight with views of snow-laden forests.",
                img: img7,
              },
              {
                title:
                  "Day 3: Juda Ka Talab to Kedarkantha Base – Closer to the Peaks",
                para1:
                  "Trek 4 km to Kedarkantha base camp (3,400 m). The trail opens up to stunning mountain panoramas.",
                para2: "Camp under the stars and prepare for the summit day.",
                img: img4,
              },
              {
                title: "Day 4: Summit Day – Kedarkantha Peak (3,800 m)",
                para1:
                  "Start early for a 6 km ascent to Kedarkantha summit. Witness 360° views of snow-capped ranges and golden sunrise.",
                para2: "Descend back to base camp and continue to Hargaon.",
                img: img7,
              },
              {
                title: "Day 5: Hargaon to Sankri – The Last Descent",
                para1:
                  "Trek down 6 km through forests to Sankri. Relax and enjoy the warmth of the base village.",
                para2: "Stay overnight in Sankri.",
                img: img1,
              },
              {
                title: "Day 6: Sankri to Dehradun – Journey Ends",
                para1: "Drive 220 km back to Dehradun, reaching by evening.",
                para2: "Plan onward travel after 9:00 PM.",
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
            <span className={styles.indi_highlight_title}>Altitude:</span>{" "}
            12,500 ft (3,800 m)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 24 km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Easy to
            Moderate
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> Winter
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Month:</span> Dec to
            Apr
          </div>

          <Title text={"Why is Kedarkantha a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                One of the best winter treks in India.
              </li>
              <li className={styles.li}>
                Spectacular summit climb with 360° views of Himalayan peaks.
              </li>
              <li className={styles.li}>
                Dense pine forests and snow-covered trails.
              </li>
              <li className={styles.li}>
                Charming campsites like Juda Ka Talab and Hargaon.
              </li>
              <li className={styles.li}>
                Ideal for beginners and snow lovers.
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
                Jog 5 km in 35 mins or 10 km in 80 mins without stress.
              </li>
              <li className={styles.li}>
                Cycle 10 km in 30 mins as an alternative.
              </li>
              <li className={styles.li}>
                Carry 10–12 kg backpack (or 3–5 kg if offloading).
              </li>
            </ul>
          </div>

          <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Pick-up: ISBT Dehradun at 6:30 AM</li>
              <li className={styles.li}>Drop: ISBT Dehradun (by 6:30 PM)</li>
            </ul>
          </div>

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
                Stay: Guesthouse (Day 1 & 5), twin-sharing tents (Day 2–4)
              </li>
              <li className={styles.li}>
                Meals: Veg meals from Day 1 dinner to Day 5 dinner
              </li>
              <li className={styles.li}>Certified trek leader and staff</li>
              <li className={styles.li}>Trek equipment and technical gear</li>
              <li className={styles.li}>First aid and oxygen support</li>
              <li className={styles.li}>
                Permits and entry fees (for Indians)
              </li>
              <li className={styles.li}>Completion certificate</li>
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
            { question: "Why is Kedarkantha called the best winter trek?", answer: "It is known for its accessible summit, breathtaking snow views, and well-marked trails even in heavy snow." },
            { question: "When can I find snow on Kedarkantha trek?", answer: "From mid-December to mid-April, the trek is covered in snow." },
            { question: "Is Kedarkantha trek suitable for beginners?", answer: "Yes, it is an easy to moderate trek and perfect for first-time trekkers." },
            { question: "What is the maximum altitude of Kedarkantha?", answer: "The summit is at 12,500 ft (3,800 m)." },
            { question: "Are there network signals on the trek?", answer: "Mobile network is available up to Sankri, but not beyond the base village." }
          ]} />
        </div>

        <FormNP
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Kedarkantha Trek"}
          price={8999}
        />
      </div>
      <Footer />
    </>
  );
}
