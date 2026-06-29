import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/brahmataal/brahmataal-trek-1.webp";
import img2 from "../assets/Trek/brahmataal/brahmataal-trek-2.webp";
import img3 from "../assets/Trek/brahmataal/brahmataal-trek-3.webp";
import img4 from "../assets/Trek/brahmataal/brahmataal-trek-4.webp";
import img5 from "../assets/Trek/brahmataal/brahmataal-trek-6.webp";
import img6 from "../assets/Trek/brahmataal/brahmataal-trek-6.webp";
import img7 from "../assets/Trek/brahmataal/brahmataal-trek-7.webp";
import img8 from "../assets/Trek/brahmataal/brahmataal-trek-8.webp";
import img9 from "../assets/Trek/brahmataal/brahmataal-trek-9.webp";
import img10 from "../assets/Trek/brahmataal/brahmataal-trek-10.webp";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Brahmatal() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO 
        title="Brahmatal Trek 2026 | Snow Trek in Uttarakhand | Ibex Ice Axe"
        description="Book Brahmatal Trek 2026 with Ibex Ice Axe. Explore frozen lakes, snow-covered trails, Himalayan summit views, detailed itinerary, trek cost, and booking information."
        keywords="Brahmatal Trek, Brahmatal Trek 2026, Brahmatal Trek Cost, Snow Trek Uttarakhand, Winter Trek India, Brahmatal Package"
        path="/brahmatal-trek"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Brahmatal Trek",
          description: "Brahmatal Trek with frozen lakes and Himalayan summit views.",
          provider: {
            "@type": "Organization",
            name: "Ibex Ice Axe"
          }
        }}
      />
            <Desktop_intro_section
        img={img4}
        title={"Brahmatal Trek"}
        des={"A snowy wonderland with Himalayan giants in sight."}
        open_form={setOpen_form}
      />
      <Photos
        photos={[img1, img2, img3, img4, img6, img7, img8, img9, img10]}
      />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <h1 className={styles.title}>
            Brahmatal Trek 2026 · ₹11,999 + 5% GST
          </h1>
          <div className={styles.tag_line}>
            A Snowy Wonderland for Every Trekker.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>6D/5N</div>
          </div>

          <Title text={"About Brahmatal Trek"} />

          <div className={styles.ul_section}>
            <p>
              Brahmatal Trek is one of India's most beautiful winter treks,
              located in the Chamoli district of Uttarakhand. Famous for its
              frozen lakes, snow-covered forests, and panoramic Himalayan views,
              it is a perfect trek for beginners and experienced trekkers alike.
            </p>

            <p>
              Standing at an altitude of 12,300 feet, Brahmatal offers
              breathtaking views of Mt. Trishul, Nanda Ghunti, Mrigthuni, and
              several other Himalayan peaks. During winter, the trail transforms
              into a snowy wonderland.
            </p>

            <p>
              The trek is known for the frozen Brahmatal Lake and Bekaltal Lake,
              making it one of the most scenic snow treks in India.
            </p>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6]}
            info={[
              {
                title: "Day 1: Rishikesh to Lohajung – Gateway to Brahmatal",
                para1:
                  "Start early from Rishikesh and drive 250 km to Lohajung (2,300 m). The 10-hour drive offers stunning mountain views.",
                para2:
                  "Reach Lohajung base camp, settle in your guesthouse, and enjoy an evening briefing before dinner.",
                img: img2,
              },
              {
                title: "Day 2: Lohajung to Gujreni – Into the Forests",
                para1:
                  "Begin the trek with a 4–5 km hike to Gujreni campsite at 2,800 m through oak and rhododendron forests.",
                para2:
                  "Enjoy the serene surroundings and starlit skies as you camp overnight.",
                img: img3,
              },
              {
                title: "Day 3: Gujreni to Tilandi – Scenic Meadows Await",
                para1:
                  "Trek 4–5 km to Tilandi at 3,200 m. Walk past charming meadows offering glimpses of snow-covered peaks.",
                para2: "Overnight stay in tents under the Himalayan sky.",
                img: img4,
              },
              {
                title:
                  "Day 4: Tilandi to Brahmatal via Jhandi Top – Summit Day",
                para1:
                  "Ascend to Brahmatal summit (3,750 m) via Jhandi Top. Enjoy panoramic views of Mt. Trishul and Nanda Ghunti.",
                para2:
                  "After soaking in the summit glory, return to Tilandi for the night.",
                img: img5,
              },
              {
                title: "Day 5: Brahmatal to Lohajung – Back to Base",
                para1:
                  "Descend 10 km to Lohajung through scenic trails. Freshen up at the guesthouse and relax.",
                para2: "Evening at leisure before departure the next day.",
                img: img2,
              },
              {
                title: "Day 6: Lohajung to Rishikesh – Journey Ends",
                para1:
                  "Drive 250 km back to Rishikesh, reaching by late evening. Carry home memories of snowy peaks and frozen lakes.",
                para2: "Plan onward travel after 10:00 PM.",
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
            12,300 ft (3,750 m)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 26 km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Easy to
            Moderate
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> Spring,
            Autumn, Winter
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Month:</span> Jan,
            Feb, Mar, Apr, Oct, Nov, Dec
          </div>

          <Title text={"Why is Brahmatal a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                A magical winter trek with fresh snow trails.
              </li>
              <li className={styles.li}>
                Two stunning frozen alpine lakes – Brahmatal and Bekaltal.
              </li>
              <li className={styles.li}>
                Panoramic views of Mt. Trishul, Nanda Ghunti, and Mrigthuni.
              </li>
              <li className={styles.li}>
                Forests of oak and rhododendron that bloom in spring.
              </li>
              <li className={styles.li}>
                Ideal for beginners and snow lovers with minimal technical
                challenges.
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
              <li className={styles.li}>
                Pick-up: Tapovan, Rishikesh (Opposite Shiv Vilas Hotel) at 6:00
                AM
              </li>
              <li className={styles.li}>
                Drop: Tapovan, Rishikesh (by 6:30–7:30 PM)
              </li>
            </ul>
          </div>

          <Title text={"Trek Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation: Guesthouse at Lohajung and tents on trek days
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

          <Title text={"Things To Carry"} />

          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Waterproof trekking shoes</li>
              <li className={styles.li}>Thermal innerwear</li>
              <li className={styles.li}>Down jacket</li>
              <li className={styles.li}>Woolen gloves</li>
              <li className={styles.li}>Woolen cap</li>
              <li className={styles.li}>Water bottle</li>
              <li className={styles.li}>Sunglasses</li>
              <li className={styles.li}>Personal medicines</li>
            </ul>
          </div>

          <Title text={"Best Time To Visit Brahmatal Trek"} />

          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                December–March: Best snow trekking season
              </li>

              <li className={styles.li}>
                January–February: Peak snowfall and frozen lakes
              </li>

              <li className={styles.li}>
                October–November: Clear mountain views and pleasant weather
              </li>
            </ul>
          </div>

          <Title text={"Frequently Asked Questions (FAQ)"} />
          <FaqAccordion
            faqs={[
              {
                question: "When is the best time for Brahmatal trek?",
                answer:
                  "December to March is the best time for snow lovers. It is also open in autumn for clear skies.",
              },
              {
                question: "Is Brahmatal trek safe for solo trekkers?",
                answer:
                  "Yes, it is safe when done with a certified trekking organization. Avoid solo trekking in winter due to snow.",
              },
              {
                question: "Will we see snow during the trek?",
                answer:
                  "Yes, from late December to March, the trail is covered with snow, making it a perfect winter trek.",
              },
              {
                question: "Do we need prior experience for this trek?",
                answer:
                  "No prior experience is needed, but you should be physically fit as the altitude reaches 12,200 ft.",
              },
              {
                question: "What peaks are visible from Brahmatal summit?",
                answer:
                  "You can see Mt. Trishul, Nanda Ghunti, and other Himalayan peaks clearly from the summit.",
              },
            ]}
          />
        </div>

        <Title text={"Related Treks"} />

        <div className={styles.ul_section}>
          <ul>
            <li className={styles.li}>
              <Link to="/kedarkantha-trek">Kedarkantha Trek</Link>
            </li>

            <li className={styles.li}>
              <Link to="/kuari-pass-trek">Kuari Pass Trek</Link>
            </li>

            <li className={styles.li}>
              <Link to="/dayara-bugyal-trek">Dayara Bugyal Trek</Link>
            </li>

            <li className={styles.li}>
              <Link to="/valley-of-flowers-trek">Valley of Flowers Trek</Link>
            </li>
          </ul>
        </div>

        <Form
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Brahmatal Trek"}
          price={11999}
        />
      </div>
      <Footer />
    </>
  );
}
