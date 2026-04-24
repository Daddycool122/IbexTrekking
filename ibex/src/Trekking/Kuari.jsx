import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/kuari/img1.jpeg";
import img2 from "../assets/Trek/kuari/img2.jpeg";
import img3 from "../assets/Trek/kuari/img3.jpeg";
import img4 from "../assets/Trek/kuari/img4.jpeg";
import img5 from "../assets/Trek/kuari/img5.jpeg";
import img6 from "../assets/Trek/kuari/img6.jpeg";
import img7 from "../assets/Trek/kuari/img7.jpeg";
import img8 from "../assets/Trek/kuari/img8.jpeg";
import img9 from "../assets/Trek/kuari/img9.jpeg";
import img10 from "../assets/Trek/kuari/img10.jpeg";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import FormNP from "./FormNP";

export default function WinterKuariPass() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Desktop_intro_section
        img={img1}
        title={"Winter Kuari Pass Trek"}
        open_form={setOpen_form}
        des={"An alpine pass with views that steal your breath."}
      />
      <Photos
        photos={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]}
      />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Winter Kuari Pass Trek</div>
          <div className={styles.tag_line}>
            A Classic Himalayan Winter Trek with Panoramic Mountain Views.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>6D/5N</div>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6]}
            info={[
              {
                title: "Day 1: Rishikesh to Joshimath",
                para1:
                  "Drive 256 km from Rishikesh to Joshimath (2,050 m) via Devprayag and Rudraprayag.",
                para2: "Stay overnight in a guesthouse.",
                img: img2,
              },
              {
                title: "Day 2: Joshimath to Dhak and Trek to Gulling Top",
                para1:
                  "Drive to Dhak village and trek 6 km to Gulling campsite at 2,800 m.",
                para2: "Stay in tents surrounded by snow.",
                img: img3,
              },
              {
                title: "Day 3: Gulling Top to Tali Forest Camp",
                para1: "Trek 6 km to Tali through dense forests and meadows.",
                para2: "Camp overnight at Tali.",
                img: img4,
              },
              {
                title: "Day 4: Tali to Kuari Pass and back to Tali",
                para1:
                  "Trek 12 km to Kuari Pass (3,650 m) and witness stunning views of Nanda Devi, Hathi Ghoda, and Chaukhamba.",
                para2: "Return to Tali for overnight stay.",
                img: img5,
              },
              {
                title: "Day 5: Tali to Dhak and Drive to Joshimath",
                para1: "Descend to Dhak and drive to Joshimath.",
                para2: "Stay overnight in guesthouse.",
                img: img2,
              },
              {
                title: "Day 6: Joshimath to Rishikesh",
                para1: "Drive back to Rishikesh via scenic routes.",
                para2: "End of the trek.",
                img: img3,
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
            12,500 ft (3,810 m)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 33 km
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

          <Title text={"Why is Winter Kuari Pass a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Spectacular views of Nanda Devi, Chaukhamba, and Hathi Ghoda
                peaks.
              </li>
              <li className={styles.li}>
                Snow-laden trails through oak and rhododendron forests.
              </li>
              <li className={styles.li}>
                Charming campsites like Tali and Gulling.
              </li>
              <li className={styles.li}>
                Ideal for beginners and winter trekking enthusiasts.
              </li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 10 years</li>
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

          <Title text={"Trek Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation: Guesthouse at Joshimath and tents on trek days
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
              <li className={styles.li}>Transport to and from Rishikesh</li>
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
          <FaqAccordion
            faqs={[
              {
                question: "What is the best time for Kuari Pass trek?",
                answer:
                  "December to March for snow lovers, and April for spring views.",
              },
              {
                question: "Is it suitable for beginners?",
                answer:
                  "Yes, it is perfect for beginners who are physically fit and ready for moderate ascents.",
              },
              {
                question: "What kind of shoes should we bring?",
                answer:
                  "High-ankle waterproof trekking shoes with good grip are recommended.",
              },
              {
                question: "Can we offload our backpacks?",
                answer:
                  "Yes, backpack offloading is available at an extra cost if you don’t want to carry your own bag.",
              },
              {
                question: "How to reach Rishikesh for the pick-up?",
                answer:
                  "Rishikesh is well connected by train and road. The nearest airport is Jolly Grant Airport in Dehradun (35 km away).",
              },
            ]}
          />
        </div>

        <FormNP
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"winter kauri pass trek"}
          price={9999}
        />
      </div>
      <Footer />
    </>
  );
}
