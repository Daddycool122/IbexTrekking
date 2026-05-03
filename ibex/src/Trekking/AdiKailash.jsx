import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Itinerary from "./Itinerary";
import img1 from "../assets/hike/adikailash/img1.jpeg";
import img2 from "../assets/hike/adikailash/img2.jpeg";
import img3 from "../assets/hike/adikailash/img3.jpeg";
import img4 from "../assets/hike/adikailash/img4.jpeg";
import img5 from "../assets/hike/adikailash/img5.jpeg";
import img6 from "../assets/hike/adikailash/img6.jpeg";
import img7 from "../assets/hike/adikailash/img7.jpeg";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import FormNP from "./FormNP";
import FaqAccordion from "./FaqAccordion";

export default function AdiKailash() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Desktop_intro_section
        img={img1}
        title={"Adi Kailash & Om Parvat Tour"}
        open_form={setOpen_form}
        des={"A sacred journey to the mystical Himalayas."}
      />
      <Photos photos={[img1, img2, img3, img4, img5, img6, img7]} />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Adi Kailash & Om Parvat Tour</div>
          <div className={styles.tag_line}>
            Experience the divine presence of Shiva at Adi Kailash and witness the sacred "ॐ" formation at Om Parvat.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>6D/5N</div>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6]}
            info={[
              {
                title: "Day 1: Kathgodam → Pithoragarh",
                para1: "Route: Kathgodam → Almora → Jageshwar → Pithoragarh. Early morning departure from Kathgodam.",
                para2: "En route visit Jageshwar Dham (ancient temple complex surrounded by deodar forests) and Dol Ashram (peaceful spiritual retreat with scenic views). Travel time: 8–10 hrs. Overnight stay: Pithoragarh.",
                img: img2,
              },
              {
                title: "Day 2: Pithoragarh → Dharchula",
                para1: "Enjoy a scenic mountain drive along Kali River valley experiencing border town vibes near Nepal.",
                para2: "Explore the local market in the evening. Travel time: 3–4 hrs. Overnight stay: Dharchula.",
                img: img3,
              },
              {
                title: "Day 3: Dharchula → Nabi Village",
                para1: "Route: Dharchula → Tawaghat → Gunji → Nabi. Inner Line Permit required (must be arranged in advance).",
                para2: "Drive through rugged Himalayan terrain with gradual altitude gain – move slowly. Travel time: 7–9 hrs (road conditions vary). Overnight stay: Nabi (homestay/basic accommodation).",
                img: img4,
              },
              {
                title: "Day 4: Nabi → Om Parvat → Adi Kailash → Back to Nabi / Gunji",
                para1: "Early morning start to visit Om Parvat (Sacred snow formation resembling 'ॐ') and Adi Kailash (Also known as Chhota Kailash).",
                para2: "High altitude day (carry essentials, oxygen may be low). Overnight stay: Nabi or Gunji.",
                img: img5,
              },
              {
                title: "Day 5: Dharchula → Chaukori",
                para1: "Route: Return to Dharchula → Drive to Chaukori. Relaxing drive after intense mountain section.",
                para2: "Evening leisure with Himalayan views. Travel time: 7–8 hrs. Overnight stay: Chaukori.",
                img: img6,
              },
              {
                title: "Day 6: Chaukori → Kathgodam",
                para1: "Start the day with beautiful sunrise views of Panchachuli peaks.",
                para2: "Return journey via Almora. Travel time: 7–9 hrs. Trip ends at Kathgodam.",
                img: img7,
              },
            ]}
          />

          <Title text={"Highlights of the tour"} />
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Country:</span> India
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Location:</span> Uttarakhand
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Days:</span> 6
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Moderate to Difficult (High Altitude)
          </div>

          <Title text={"Why is Adi Kailash a Must-Do Tour?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Witness the miraculous "ॐ" snow formation at Om Parvat.</li>
              <li className={styles.li}>Experience the spiritual energy of Adi Kailash, the replica of Mount Kailash.</li>
              <li className={styles.li}>Scenic drives through the Kumaon Himalayas, Kali River valley, and high-altitude villages.</li>
              <li className={styles.li}>Visit the ancient Jageshwar Dham and serene Dol Ashram.</li>
              <li className={styles.li}>Breathtaking views of the Panchachuli peaks from Chaukori.</li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 10 years</li>
              <li className={styles.li}>Maximum age: 65 years (Subject to fitness and medical conditions)</li>
            </ul>
          </div>

          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>This is a high-altitude tour, so basic physical fitness is required.</li>
              <li className={styles.li}>Must not have severe respiratory issues or severe heart conditions.</li>
              <li className={styles.li}>Acclimatization is key; travelers must be prepared for thin air at higher altitudes.</li>
            </ul>
          </div>

          <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Pick-up: Kathgodam Railway Station at early morning</li>
              <li className={styles.li}>Drop: Kathgodam Railway Station (by evening of Day 6)</li>
            </ul>
          </div>

          <Title text={"Tour Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Warm clothing (thermals, down jackets, woolen caps, gloves)</li>
              <li className={styles.li}>Comfortable trekking/walking shoes</li>
              <li className={styles.li}>Personal medical kit and necessary prescribed medicines</li>
              <li className={styles.li}>Valid ID proofs (Aadhar, Voter ID, or Passport) and Passport size photographs for Inner Line Permit</li>
              <li className={styles.li}>Sunscreen, sunglasses, and lip balm to protect against high-altitude sun</li>
            </ul>
          </div>

          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Accommodation in hotels/guesthouses/homestays on a sharing basis</li>
              <li className={styles.li}>Meals: Breakfast and Dinner during the trip</li>
              <li className={styles.li}>Transportation from Kathgodam to Kathgodam in comfortable vehicles</li>
              <li className={styles.li}>Inner Line Permit and other required permissions</li>
              <li className={styles.li}>Experienced driver/guide familiar with the terrain</li>
              <li className={styles.li}>First aid kit with basic high-altitude medicines and portable oxygen cylinder</li>
            </ul>
          </div>

          <Title text={"Exclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Train or flight tickets to/from Kathgodam</li>
              <li className={styles.li}>Lunch and meals during transit</li>
              <li className={styles.li}>Personal expenses, tips, laundry, and telephone calls</li>
              <li className={styles.li}>Travel insurance (highly recommended)</li>
              <li className={styles.li}>Any emergency evacuation charges or medical expenses</li>
              <li className={styles.li}>Anything not specifically mentioned in the Inclusions list</li>
            </ul>
          </div>

          <Title text={"Frequently Asked Questions (FAQ)"} />
          <FaqAccordion faqs={[
            { question: "Is it safe to travel to Om Parvat and Adi Kailash?", answer: "Yes, it is generally safe. However, since it involves high altitudes and remote terrains, it requires proper acclimatization, permits, and traveling with experienced locals." },
            { question: "Do we need a passport for this trip?", answer: "Indian nationals only need a valid ID (like Aadhar Card or Voter ID) to obtain the Inner Line Permit. Foreign nationals require special permits which need to be processed well in advance." },
            { question: "Will there be mobile network connectivity?", answer: "Network connectivity will be available in Pithoragarh, Dharchula, and Chaukori. However, in higher areas like Nabi, Gunji, Om Parvat, and Adi Kailash, connectivity is very limited or non-existent (mostly only BSNL works occasionally)." },
            { question: "What kind of food will be provided?", answer: "You will be provided with nutritious, basic vegetarian Indian meals (Breakfast and Dinner). Keep in mind that food at higher altitudes will be simple." },
            { question: "Is oxygen support available?", answer: "Yes, our support vehicles carry a portable oxygen cylinder for emergencies, as the high altitude can sometimes cause breathlessness." }
          ]} />

        </div>

        <FormNP
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Adi Kailash & Om Parvat Tour"}
          price={25000}
        />
      </div>
      <Footer />
    </>
  );
}
