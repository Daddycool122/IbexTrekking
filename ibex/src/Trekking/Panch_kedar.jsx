import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/panch_kedar/img1.jpeg";
import img2 from "../assets/Trek/panch_kedar/img2.jpeg";
import img3 from "../assets/Trek/panch_kedar/img3.jpeg";
import img4 from "../assets/Trek/panch_kedar/img4.jpeg";
import img5 from "../assets/Trek/panch_kedar/img5.jpeg";
import img6 from "../assets/Trek/panch_kedar/img6.jpeg";
import img7 from "../assets/Trek/panch_kedar/img7.jpeg";
import img8 from "../assets/Trek/panch_kedar/img8.jpeg";
import img9 from "../assets/Trek/panch_kedar/img9.jpeg";
import img10 from "../assets/Trek/panch_kedar/img10.jpeg";
import img11 from "../assets/Trek/panch_kedar/img11.jpeg";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import FormNP from "./FormNP";

export default function PanchKedar() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Desktop_intro_section
        img={img1}
        title={"Panch Kedar Trek & Drive"}
        open_form={setOpen_form}
        des={"A sacred journey through the heart of the Himalayas"}
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
        ]}
      />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Panch Kedar Trek & Drive</div>
          <div className={styles.tag_line}>
            An Epic Spiritual & Scenic Journey through the Himalayas.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>12D/11N</div>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            info={[
              {
                title: "Day 1: Rishikesh to Pipalkoti",
                para1:
                  "Drive 215 km from Rishikesh to Pipalkoti through scenic Himalayan roads (8–9 hours).",
                para2:
                  "Altitude: 1,340 m / 4,400 ft. Overnight stay at Pipalkoti.",
                img: img1,
              },
              {
                title: "Day 2: Pipalkoti to Kalpeshwar and Back",
                para1:
                  "Drive 70 km round trip to Kalpeshwar, one of the Panch Kedar temples.",
                para2:
                  "Altitude: Pipalkoti – 1,340 m / 4,400 ft, Kalpeshwar – 2,100 m / 6,900 ft.",
                img: img2,
              },
              {
                title:
                  "Day 3: Pipalkoti to Sagar Village and Trek to Lyuti Bugyal",
                para1:
                  "Drive 30 km (1 hr) to Sagar Village and trek 8 km (6–7 hrs) to Lyuti Bugyal.",
                para2:
                  "Altitude: Pipalkoti – 1,340 m / 4,400 ft, Lyuti Bugyal – 3,000 m / 10,000 ft.",
                img: img3,
              },
              {
                title: "Day 4: Lyuti Bugyal to Rudranath and Back",
                para1:
                  "Trek 18 km (10–12 hrs) to Rudranath temple and return to Lyuti Bugyal.",
                para2: "Altitude: Rudranath – 3,550 m / 11,600 ft.",
                img: img4,
              },
              {
                title:
                  "Day 5: Lyuti Bugyal to Sagar Village and Drive to Chopta",
                para1:
                  "Descend 8 km trek (4–5 hrs) to Sagar Village, then drive 35 km (1–2 hrs) to Chopta.",
                para2:
                  "Altitude: Chopta – 2,900 m / 9,500 ft. Overnight in Chopta.",
                img: img5,
              },
              {
                title: "Day 6: Chopta to Tungnath Temple and Chandrashila",
                para1:
                  "Trek 8–9 km (7–8 hrs) to Tungnath temple, with optional hike to Chandrashila peak.",
                para2:
                  "Altitude: Tungnath – 3,500 m / 11,500 ft, Chandrashila – 3,700 m / 12,000 ft.",
                img: img6,
              },
              {
                title: "Day 7: Chopta to Ransi and Trek to Gaundhar",
                para1:
                  "Drive 52 km (3–4 hrs) to Ransi, then trek 6 km (4–5 hrs) to Gaundhar.",
                para2: "Altitude: Gaundhar – 1,800 m / 5,800 ft.",
                img: img7,
              },
              {
                title: "Day 8: Gaundhar to Madhmaheshwar",
                para1:
                  "Trek 10 km (6–7 hrs) from Gaundhar to the sacred Madhmaheshwar temple.",
                para2:
                  "Altitude: 3,200 m / 10,600 ft. Overnight stay near the temple.",
                img: img8,
              },
              {
                title:
                  "Day 9: Madhmaheshwar to Ransi and Drive to Guptakashi/Phata",
                para1:
                  "Trek 16 km (8–9 hrs) back to Ransi, then drive 45 km (2–3 hrs) to Guptakashi/Phata.",
                para2: "Altitude: Guptakashi – 1,400 m / 4,500 ft.",
                img: img9,
              },
              {
                title:
                  "Day 10: Guptakashi/Phata to Gaurikund and Trek to Kedarnath",
                para1:
                  "Drive 35 km (2–3 hrs) to Gaurikund, then trek 16 km (8–9 hrs) to Kedarnath temple.",
                para2:
                  "Altitude: Kedarnath – 3,600 m / 11,700 ft. Overnight in Kedarnath.",
                img: img10,
              },
              {
                title:
                  "Day 11: Kedarnath to Gaurikund and Drive Back to Guptakashi/Phata",
                para1:
                  "Descend 16 km trek (8–9 hrs) to Gaurikund, then drive 35 km (2–3 hrs) to Guptakashi.",
                para2:
                  "Altitude: Guptakashi – 1,400 m / 4,500 ft. Accommodation in guesthouse.",
                img: img11,
              },
              {
                title: "Day 12: Guptakashi to Rishikesh",
                para1:
                  "Drive 180 km (7–8 hrs) back from Guptakashi to Rishikesh.",
                para2:
                  "Altitude: Rishikesh – 400 m / 1,400 ft. End of trek journey.",
                img: img1,
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
            <span className={styles.indi_highlight_title}>Days:</span> 12
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Altitude:</span>{" "}
            11,500 ft approx
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 80+
            km trek & drive
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Moderate
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> May to
            Oct
          </div>

          <Title text={"Why is Panch Kedar Trek & Drive a Must-Do?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Covers all five sacred Kedars – Kalpeshwar, Rudranath, Tungnath,
                Kedarnath, Madhyamaheshwar.
              </li>
              <li className={styles.li}>
                A perfect blend of spirituality and adventure.
              </li>
              <li className={styles.li}>
                Trek through meadows, forests, and high-altitude villages.
              </li>
              <li className={styles.li}>
                Ideal for cultural and spiritual seekers.
              </li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 12 years</li>
            </ul>
          </div>

          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Good stamina for long treks and high altitude.
              </li>
              <li className={styles.li}>
                Ability to trek 8–10 km daily with a backpack.
              </li>
            </ul>
          </div>

          {/* <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Pick-up: Haridwar Railway Station at 6:00 AM
              </li>
              <li className={styles.li}>
                Drop: Haridwar Railway Station (by evening)
              </li>
            </ul>
          </div> */}

          <Title text={"Trek Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation: Mix of homestays, guesthouses, and camps
              </li>
              <li className={styles.li}>
                Meals: From Day 1 dinner to Day 14 dinner
              </li>
              <li className={styles.li}>
                Support Team: Trek leaders, guides, cooks, and porters
              </li>
              <li className={styles.li}>
                Equipment: Sleeping bags, tents, and technical gear
              </li>
              <li className={styles.li}>
                First Aid: Oxygen cylinder, BP monitor
              </li>
              <li className={styles.li}>Permits and entry fees</li>
            </ul>
          </div>

          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Stay: Mix of homestays, lodges, and camps
              </li>
              <li className={styles.li}>
                Meals: Veg meals during trek and drives
              </li>
              <li className={styles.li}>
                Certified trek leader and local guides
              </li>
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
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                What is Panch Kedar?
                <br />
                Panch Kedar refers to the five sacred Shiva temples in
                Uttarakhand – Kedarnath, Tungnath, Rudranath, Madhyamaheshwar,
                and Kalpeshwar.
              </li>
              <li className={styles.li}>
                How long does Panch Kedar trek take?
                <br />
                It usually takes around 15–18 days to complete the full circuit
                covering all five temples.
              </li>
              <li className={styles.li}>
                What is the best season for Panch Kedar trek?
                <br />
                May to June and September to October are the best seasons. Avoid
                monsoon due to landslides.
              </li>
              <li className={styles.li}>
                Is this trek difficult?
                <br />
                Yes, it is a long and challenging trek as it covers multiple
                high-altitude temples and remote trails.
              </li>
              <li className={styles.li}>
                Do we need special permits for Panch Kedar?
                <br />
                No special permit is required, but you need ID proofs and forest
                entry passes for some areas.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.billing_section}>
          <FormNP
            open_form={open_form}
            setOpen_form={setOpen_form}
            name={"Panch Kedar Trek"}
            price={34999}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
