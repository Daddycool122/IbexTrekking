import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/alibedni/alibedni-trek-1.webp";
import img2 from "../assets/Trek/alibedni/alibedni-trek-2.webp";
import img3 from "../assets/Trek/alibedni/alibedni-trek-3.webp";
import img4 from "../assets/Trek/alibedni/alibedni-trek-4.webp";
import img5 from "../assets/Trek/alibedni/alibedni-trek-5.webp";
import img6 from "../assets/Trek/alibedni/alibedni-trek-6.webp";
import img7 from "../assets/Trek/alibedni/alibedni-trek-7.webp";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AliBedniBugyal() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Ali Bedni Bugyal Trek 2026 | Best Meadow Trek in Uttarakhand | Ibex
          Ice Axe
        </title>

        <meta
          name="description"
          content="Book Ali Bedni Bugyal Trek 2026 with Ibex Ice Axe. Explore India's most beautiful alpine meadows, Bedni Kund, Trishul views, complete itinerary, trek cost, and booking details."
        />

        <meta
          name="keywords"
          content="Ali Bedni Bugyal Trek, Ali Bugyal Trek, Bedni Bugyal Trek, Ali Bedni Bugyal Trek 2026, Meadow Trek Uttarakhand, Best Trek in Uttarakhand"
        />

        <link
          rel="canonical"
          href="https://ibexiceaxe.com/ali-bedni-bugyal-trek"
        />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: "Ali Bedni Bugyal Trek",
            description:
              "Ali Bedni Bugyal Trek through India's most beautiful alpine meadows.",
            provider: {
              "@type": "Organization",
              name: "Ibex Ice Axe",
            },
          })}
        </script>
      </Helmet>
            <Desktop_intro_section
        img={img1}
        title={"Ali Bedni Bugyal Trek"}
        open_form={setOpen_form}
        des={
          "Walk through meadows, touch the sky, and witness the Himalayas up close"
        }
      />
      <Photos photos={[img1, img2, img3, img4, img5, img6, img7]} />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <h1 className={styles.title}>
            Ali Bedni Bugyal Trek 2026 · ₹11,499 + 5% GST
          </h1>
          <div className={styles.tag_line}>
            Walk through meadows, touch the sky, and witness the Himalayas up
            close
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>6D/5N</div>
          </div>

          <Title text={"About Ali Bedni Bugyal Trek"} />

          <div className={styles.ul_section}>
            <p>
              Ali Bedni Bugyal Trek is one of the most beautiful meadow treks in
              India. Located in the Chamoli district of Uttarakhand, the trek
              takes you across the stunning Ali Bugyal and Bedni Bugyal, two of
              the largest alpine meadows in Asia.
            </p>

            <p>
              The trek offers spectacular views of Mt. Trishul, Nanda Ghunti,
              Chaukhamba, and several Himalayan peaks. The rolling grasslands,
              dense oak forests, rhododendron trees, and Bedni Kund make this
              trek a paradise for nature lovers and photographers.
            </p>

            <p>
              Suitable for beginners as well as experienced trekkers, Ali Bedni
              Bugyal is often considered one of the best Himalayan treks in
              Uttarakhand.
            </p>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6]}
            info={[
              {
                title: "Day 1: Rishikesh to Lohajung",
                para1:
                  "Your journey begins from Rishikesh, where the holy Ganga flows with energy and devotion. From here, we set off on a long yet beautiful drive to Lohajung. The road winds through mountain curves, dense forests, charming hill towns, and along the Alaknanda and Pindar rivers. As you travel deeper into the Garhwal region, every turn opens to breathtaking scenery, making the 10–11 hour drive worth every moment.",
                para2:
                  "By evening, we reach Lohajung, a small but lively mountain village that serves as the base camp for many treks in the region. Surrounded by towering peaks, Lohajung offers your first glimpse of life in the higher Himalayas. After checking into the guest house, you can explore the local market, interact with villagers, or simply rest while soaking in the crisp mountain air. The night at Lohajung prepares you for the adventure that lies ahead.",
                img: img1,
              },
              {
                title: "Day 2: Lohajung to Didna Village",
                para1:
                  "The trek officially begins today as we leave behind the roads and step onto the trails. Starting from Lohajung, the path descends gradually through forests and small settlements until we cross the Wan River. From here, the climb towards Didna begins. The trail takes you past terraced fields and into forests of oak and rhododendron, filling the air with earthy scents and bird calls.",
                para2:
                  "After about 4–5 hours of trekking, we arrive at Didna — a quaint mountain village surrounded by dense forest. The serenity of the place immediately slows down the pace of life. Didna is known for its traditional wooden houses and simple mountain lifestyle, giving trekkers a chance to experience authentic Himalayan culture. Tonight, you’ll rest in tents or homestays, with the sound of mountain winds and rustling leaves as your background.",
                img: img2,
              },
              {
                title: "Day 3: Didna to Khobal Tal via Ali Bugyal",
                para1:
                  "This is one of the most beautiful days of the trek, as you’ll experience the magic of alpine meadows. From Didna, the trail climbs steadily until it opens into the vast expanse of Ali Bugyal, one of the largest high-altitude meadows in India. As you step into the Bugyal, you’re greeted with endless rolling grasslands surrounded by snow-clad peaks like Trishul and Nanda Ghunti.",
                para2:
                  "The feeling of walking through Ali Bugyal is truly indescribable — a combination of peace, beauty, and grandeur. Shepherds with their flocks often cross your path, adding to the charm. After spending some time soaking in the views, we continue towards Khobal Tal, our campsite for the night. Situated at an altitude of 11,300 ft, the campsite is surrounded by mountain views and a clear night sky filled with stars.",
                img: img3,
              },
              {
                title: "Day 4: Khobal Tal to Ghairoli Patal via Bedni Bugyal",
                para1:
                  "The day begins with a trek across Bedni Bugyal, another breathtaking alpine meadow. Bedni is not only known for its vast landscapes but also for its spiritual significance. The Bedni Kund, a small lake set amidst the meadow, reflects the mighty Himalayan peaks and creates postcard-perfect scenery. Many consider this a sacred spot, and during certain festivals, locals gather here for rituals.",
                para2:
                  "From Bedni, we gradually descend into the dense oak and rhododendron forests, making our way to Ghairoli Patal, our campsite for the night. The sound of the forest comes alive here — with chirping birds, rustling leaves, and the occasional call of a mountain animal. This campsite is calm, cozy, and offers trekkers a chance to rest in the midst of nature’s lap after a rewarding day.",
                img: img4,
              },
              {
                title: "Day 5: Ghairoli Patal to Wan, then Drive to Lohajung",
                para1:
                  "Today marks the final trekking day. The trail descends steadily through forests and small hamlets until we reach Wan village. The descent is refreshing, with glimpses of the valley, forest streams, and mountain ridges. On the way, you’ll also encounter ancient temples and local farms that showcase the culture and traditions of this region.",
                para2:
                  "From Wan, a short 45-minute drive takes us back to Lohajung, where the trek had begun. Returning to the base feels like coming full circle — with memories of meadows, mountains, and adventures accompanying you. Tonight, you’ll stay at the guest house in Lohajung and enjoy a comfortable rest.",
                img: img5,
              },
              {
                title: "Day 6: Lohajung to Rishikesh",
                para1:
                  "After breakfast, we begin the long drive back to Rishikesh, retracing the route along rivers, forests, and mountain passes. Though the drive takes nearly 10–11 hours, the changing scenery keeps the journey engaging. The descent from the Himalayas feels like leaving behind another world — the simplicity of the mountains, the grandeur of the meadows, and the serenity of the forests.",
                para2:
                  "By evening, we reach Rishikesh, where the trek officially concludes. You can choose to explore the town’s famous temples, cafes, and ghats, or simply relax after your Himalayan adventure. For many trekkers, this moment is filled with reflection — on the journey, the friendships made, and the beauty of the mountains that will stay with you forever.",
                img: img6,
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
            12,500 ft
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 40 km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Easy to
            Moderate
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> Spring,
            Summer & Autumn
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Month:</span> April –
            June, September – November
          </div>

          <Title text={"Why is Ali Bedni Bugyal a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Trek through two of India’s most beautiful alpine meadows – Ali
                Bugyal and Bedni Bugyal.
              </li>
              <li className={styles.li}>
                Stunning views of Mt. Trishul and Mt. Nanda Ghunti right in
                front of your eyes.
              </li>
              <li className={styles.li}>
                Diverse landscapes: from dense Oak and Rhododendron forests to
                wide-open grasslands.
              </li>
              <li className={styles.li}>
                Explore Bedni Kund, a serene glacial lake, perfect for
                photography and reflection.
              </li>
              <li className={styles.li}>
                Experience peace and solitude in the serene Bugyals, surrounded
                by the sound of nature.
              </li>
              <li className={styles.li}>
                Interact with local villagers and shepherds, learning about
                their mountain life.
              </li>
              <li className={styles.li}>
                Experience peace and solitude in the serene Bugyals, surrounded
                by the sound of nature.
              </li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>April to November: Minimum 10 years</li>
              <li className={styles.li}>December to March: Minimum 12 years</li>
            </ul>
          </div>

          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Should be able to jog 5 km in 33 minutes or 10 km in 75 minutes
                without stress.
              </li>
              <li className={styles.li}>
                OR should be able to cycle 15 km in 45 minutes.
              </li>
              <li className={styles.li}>
                Should manage a 10–12 kg backpack (if self-carrying) or 3–5 kg
                backpack if offloading.
              </li>
              <li className={styles.li}>
                If BMI is not in the normal range (18–28), consultation with the
                trek coordinator is required.
              </li>
            </ul>
          </div>

          {/* <Title text={"How To Reach"} />
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
          </div> */}

          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation in guest houses (Day 1 & Day 5) and
                tents/homestays (Day 2–4).
              </li>
              <li className={styles.li}>
                Meals: Veg + Egg (as per itinerary).
              </li>
              <li className={styles.li}>
                Trek support team: trek leader, base camp manager, guides, chef,
                and staff.
              </li>
              <li className={styles.li}>
                Trek equipment: tents, sleeping bags, mats, utensils, dining &
                toilet tents.
              </li>
              <li className={styles.li}>
                Safety gear: ropes, gaiters, microspikes (if needed).
              </li>
              <li className={styles.li}>
                First aid: medical kit, stretcher, oxygen cylinder, oximeter.
              </li>
              <li className={styles.li}>Transportation (Wan to Lohajung).</li>
              <li className={styles.li}>Porters/mules for central luggage.</li>
              <li className={styles.li}>Cloakroom at base camp.</li>
              <li className={styles.li}>
                Necessary permits and entry fees (Indians).
              </li>
              <li className={styles.li}>Services from Lohajung to Lohajung.</li>
              <li className={styles.li}>Trek completion certificate.</li>
            </ul>
          </div>

          <Title text={"Exclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Insurance (mandatory for non-Indians, NRI, OCI card holders).
              </li>
              <li className={styles.li}>
                Meals during transit (Rishikesh to Lohajung and back).
              </li>
              <li className={styles.li}>Personal expenses.</li>
              <li className={styles.li}>Mule/porter for personal luggage.</li>
              <li className={styles.li}>
                Emergency evacuation or hospitalization costs.
              </li>
              <li className={styles.li}>
                Extra costs due to itinerary changes from natural causes
                (roadblocks, weather).
              </li>
              <li className={styles.li}>
                Transport (Rishikesh ↔ Lohajung) unless booked with us.
              </li>
              <li className={styles.li}>
                Anything not mentioned under inclusions.
              </li>
            </ul>
          </div>

          <Title text={"Things To Carry"} />

          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Waterproof trekking shoes</li>
              <li className={styles.li}>Warm jacket</li>
              <li className={styles.li}>Raincoat or poncho</li>
              <li className={styles.li}>Water bottle</li>
              <li className={styles.li}>Sunglasses</li>
              <li className={styles.li}>Sunscreen</li>
              <li className={styles.li}>Personal medicines</li>
              <li className={styles.li}>Torch or headlamp</li>
            </ul>
          </div>

          <Title text={"Best Time To Visit Ali Bedni Bugyal Trek"} />

          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                April–June: Best season for Ali Bedni Bugyal Trek with lush
                green meadows and wildflowers.
              </li>

              <li className={styles.li}>
                July–August: Monsoon greenery and blooming flowers
              </li>

              <li className={styles.li}>
                September–November: Ideal for clear Himalayan mountain views and
                photography.
              </li>

              <li className={styles.li}>
                December–March: Perfect for trekkers looking for a snow-covered
                Ali Bedni Bugyal Trek experience.
              </li>
            </ul>
          </div>

          <Title text={"Frequently Asked Questions (FAQ)"} />
          <FaqAccordion
            faqs={[
              {
                question: "What is the total distance of the trek?",
                answer:
                  "The trek covers about 35–40 km over 5 days, spread across forests, meadows, and descents.",
              },
              {
                question: "Is Ali Bedni Bugyal suitable for beginners?",
                answer:
                  "Yes, it’s a beginner-friendly trek if you prepare fitness-wise. Prior trekking experience helps but is not mandatory.",
              },
              {
                question: "What is the best time to do the trek?",
                answer:
                  "April–June: Green meadows & wildflowers. <br /> September–November: Crystal-clear mountain views. <br /> December–March: Snow trek.",
              },
              {
                question: "How difficult is the trek?",
                answer:
                  "Rated Easy to Moderate. Long trekking hours (6–8 hrs on some days), but manageable with preparation.",
              },
              {
                question: "Will I get mobile network on the trek?",
                answer:
                  "Limited or no network during the trek. Network is available in Lohajung.",
              },
            ]}
          />
        </div>

        <Title text={"Related Treks"} />

        <div className={styles.ul_section}>
          <ul>
            <li className={styles.li}>
              <Link to="/brahmatal-trek">Brahmatal Trek</Link>
            </li>

            <li className={styles.li}>
              <Link to="/kuari-pass-trek">Kuari Pass Trek</Link>
            </li>

            <li className={styles.li}>
              <Link to="/kedarkantha-trek">Kedarkantha Trek</Link>
            </li>

            <li className={styles.li}>
              <Link to="/valley-of-flowers-trek">Valley of Flowers Trek</Link>
            </li>
          </ul>
        </div>

        <Form
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Ali Bedni Bugyal Trek"}
          price={11499}
        />
      </div>
      <Footer />
    </>
  );
}
