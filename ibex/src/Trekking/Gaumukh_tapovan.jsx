import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/gaumukh/gaumukh-trek-1.webp";
import img2 from "../assets/Trek/gaumukh/gaumukh-trek-2.webp";
import img3 from "../assets/Trek/gaumukh/gaumukh-trek-3.webp";
import img4 from "../assets/Trek/gaumukh/gaumukh-trek-4.webp";
import img5 from "../assets/Trek/gaumukh/gaumukh-trek-5.webp";
import img6 from "../assets/Trek/gaumukh/gaumukh-trek-6.webp";
import img7 from "../assets/Trek/gaumukh/gaumukh-trek-7.webp";
import img8 from "../assets/Trek/gaumukh/gaumukh-trek-8.webp";
import img9 from "../assets/Trek/gaumukh/gaumukh-trek-9.webp";
import img10 from "../assets/Trek/gaumukh/gaumukh-trek-10.webp";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";

export default function Gaumukh_Tapovan() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SEO 
        title="Gaumukh Tapovan Trek 2026 | Source of Ganga & Mt. Shivling Views | Ibex Ice Axe"
        description="Book Gaumukh Tapovan Trek 2026 with Ibex Ice Axe. Trek to the source of the Ganga at Gaumukh Glacier and witness breathtaking views of Mt. Shivling, Bhagirathi Peaks, and Tapovan meadows."
        keywords="Gaumukh Tapovan Trek, Gaumukh Trek, Tapovan Trek, Gaumukh Tapovan Trek 2026, Gangotri Glacier Trek, Source of Ganga Trek, Mt Shivling Trek, Uttarakhand Himalayan Trek"
        path="/gaumukh-tapovan-trek"
        image={img10}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "TouristTrip",
          name: "Gaumukh Tapovan Trek",
          description: "Gaumukh Tapovan Trek is one of the most iconic Himalayan treks leading to the source of the Ganga River and the stunning Tapovan meadows.",
          touristType: "Trekking",
          provider: {
            "@type": "Organization",
            name: "Ibex Ice Axe",
            url: "https://ibexiceaxe.com"
          },
          itinerary: {
            "@type": "ItemList",
            numberOfItems: 8
          },
          offers: {
            "@type": "Offer",
            price: "18999",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock"
          }
        }}
      />
            <Desktop_intro_section
        img={img10}
        title={"Gaumukh Tapovan Trek"}
        open_form={setOpen_form}
        des={"Walk to the source of the Ganges, where mountains touch the sky."}
      />
      <Photos photos={[img2, img3, img5, img6, img7, img8, img9, img10]} />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <h1 className={styles.title}>Gaumukh Tapovan Trek · ₹18,999 + 5% GST</h1>
          <div className={styles.tag_line}>
            To the Source of the Ganges and Beyond.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>8D/7N</div>
          </div>

          <Title text={"About Gaumukh Tapovan Trek"} />

<div className={styles.ul_section}>
  <p>
    Gaumukh Tapovan Trek is one of the most iconic Himalayan adventures in
    Uttarakhand. Starting from the sacred town of Gangotri, the trail follows
    the Bhagirathi River to Gaumukh Glacier, the revered source of the Ganga.
  </p>

  <p>
    The trek combines spiritual significance with breathtaking Himalayan
    landscapes. Trekkers walk through Chirbasa and Bhojwasa before reaching
    Gaumukh and the magnificent Tapovan meadows.
  </p>

  <p>
    Tapovan offers unmatched views of Mt. Shivling, Bhagirathi Peaks, Meru,
    and several towering Himalayan summits, making it one of the most rewarding
    treks in India.
  </p>
</div>


          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6, 7, 8]}
            info={[
              {
                title: "Day 1: Dehradun to Gangotri – The Spiritual Gateway",
                para1:
                  "Start your journey from Dehradun with a scenic 250 km drive to Gangotri, the revered shrine at the source of the Ganga. The 8–9 hour journey takes you through picturesque valleys and river confluences.",
                para2:
                  "Arrive at Gangotri, settle in your guesthouse, and soak in the spiritual vibe before dinner and rest.",
                img: img2,
              },
              {
                title:
                  "Day 2: Acclimatization at Gangotri – Explore and Adjust",
                para1:
                  "Spend the day acclimatizing to the altitude. Visit the famous Gangotri Temple, stroll along the Bhagirathi River, or explore local markets.",
                para2:
                  "This rest day prepares you for the upcoming high-altitude trek.",
                img: img3,
              },
              {
                title:
                  "Day 3: Gangotri to Chirbasa – First Steps into the Wild",
                para1:
                  "Begin your trek with a 9 km trail to Chirbasa at 3,550 m. Walk along the Bhagirathi River with stunning Himalayan views all around.",
                para2:
                  "Set up camp in the pine forests of Chirbasa and enjoy a night under the stars.",
                img: img4,
              },
              {
                title: "Day 4: Chirbasa to Bhojwasa – Gateway to Gaumukh",
                para1:
                  "Trek 5 km to Bhojwasa at 3,800 m. The path opens into a wide valley offering spectacular views of Bhagirathi peaks.",
                para2:
                  "Spend the night in tents with a magnificent backdrop of snow peaks.",
                img: img5,
              },
              {
                title:
                  "Day 5: Bhojwasa to Tapovan via Gaumukh – Heart of the Himalayas",
                para1:
                  "Trek 6 km via Gaumukh Glacier, the source of the Ganga. Continue the challenging climb to Tapovan (4,450 m), a meadow renowned for its serene beauty.",
                para2:
                  "Witness Mt. Shivling towering above as you camp at Tapovan, one of the most spectacular high-altitude meadows in India.",
                img: img2,
              },
              {
                title: "Day 6: Tapovan to Bhojwasa – Retrace the Journey",
                para1:
                  "Descend 6 km back to Bhojwasa, revisiting Gaumukh on the way. Enjoy the downhill walk and scenic beauty.",
                para2: "Spend the night at Bhojwasa campsite.",
                img: img3,
              },
              {
                title: "Day 7: Bhojwasa to Gangotri – Back to Civilization",
                para1:
                  "Trek 14 km to Gangotri, where you began your journey. Freshen up and relax after days in the wilderness.",
                para2: "Spend the night in Gangotri.",
                img: img4,
              },
              {
                title: "Day 8: Gangotri to Dehradun – Journey Ends",
                para1:
                  "Drive 250 km back to Dehradun, arriving by evening. Take with you memories of glaciers, sacred rivers, and towering Himalayan peaks.",
                para2: "Plan your onward journey after 9:00 PM.",
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
            <span className={styles.indi_highlight_title}>Days:</span> 8
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Altitude:</span>{" "}
            14,600 ft (4,450 m)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 40 km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Moderate
            to Difficult
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> Summer,
            Autumn
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Month:</span> May,
            June, September, October
          </div>

          <Title text={"Why is Gaumukh Tapovan a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Visit Gangotri, the sacred origin of the Ganga River.
              </li>
              <li className={styles.li}>
                Witness the Gaumukh Glacier, source of the Bhagirathi (Ganga)
                River.
              </li>
              <li className={styles.li}>
                Trek through diverse terrain – pine forests, rocky paths, and
                alpine meadows.
              </li>
              <li className={styles.li}>
                Reach Tapovan, a serene high-altitude meadow famous for
                meditation and beauty.
              </li>
              <li className={styles.li}>
                Enjoy breathtaking views of Mt. Shivling and Bhagirathi peaks.
              </li>
              <li className={styles.li}>
                Encounter Himalayan wildlife and rare alpine flowers.
              </li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 14 years</li>
            </ul>
          </div>

          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Jog 5 km in 30 minutes or 10 km in 70 minutes without stress.
              </li>
              <li className={styles.li}>Cycle 18 km in 50 minutes.</li>
              <li className={styles.li}>
                Ability to carry a 10–12 kg backpack (or 3–5 kg if offloading).
              </li>
            </ul>
          </div>

          <Title text={"Options to Reach Dehradun"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Pick-Up Point: Prince Chowk, Dehradun (06:00 AM)
              </li>
              <li className={styles.li}>
                Drop-Off Point: Prince Chowk, Dehradun (by 6:30–7:30 PM)
              </li>
            </ul>
          </div>

          <Title text={"Options to Reach Dehradun"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Train from Delhi to Dehradun</li>
              <li className={styles.li}>
                Government bus from Delhi ISBT or Chandigarh
              </li>
              <li className={styles.li}>
                Flight to Jolly Grant Airport (reach a day early if flying)
              </li>
            </ul>
          </div>

          <Title text={"Trek Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation: Guesthouse in Gangotri (Day 1, 2, and 7), tents
                on trek days
              </li>
              <li className={styles.li}>
                Meals: Vegetarian from Day 1 dinner to Day 7 dinner
              </li>
              <li className={styles.li}>
                Support Team: Certified expedition leader, guides, high-altitude
                chef
              </li>
              <li className={styles.li}>
                Trek Equipment: Sleeping bags, tents, kitchen/dining/toilet
                tents
              </li>
              <li className={styles.li}>
                Medical Support: Oxygen cylinder, stretcher, first-aid kit
              </li>
              <li className={styles.li}>
                Other: Permits, cloakroom facility, trek completion certificate
              </li>
            </ul>
          </div>

          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Guesthouse and twin-sharing tents as per itinerary
              </li>
              <li className={styles.li}>
                Vegetarian meals from Day 1 dinner to Day 7 dinner
              </li>
              <li className={styles.li}>
                Certified trek leader, chef, support staff
              </li>
              <li className={styles.li}>
                Trek gear: tents, sleeping gear, technical equipment
              </li>
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
              <li className={styles.li}>
                Transport from Dehradun to Gangotri and back
              </li>
              <li className={styles.li}>Mandatory insurance</li>
              <li className={styles.li}>Meals during transit</li>
              <li className={styles.li}>Personal porter or mule charges</li>
              <li className={styles.li}>
                Emergency evacuation or hospitalization costs
              </li>
              <li className={styles.li}>Anything not listed under Inclusion</li>
            </ul>
          </div>



          <Title text={"Things To Carry"} />

<div className={styles.ul_section}>
  <ul>
    <li className={styles.li}>High ankle trekking shoes</li>
    <li className={styles.li}>Down jacket and fleece layers</li>
    <li className={styles.li}>Thermal innerwear</li>
    <li className={styles.li}>Raincoat or poncho</li>
    <li className={styles.li}>Sunglasses with UV protection</li>
    <li className={styles.li}>Water bottles (2 litres)</li>
    <li className={styles.li}>Torch or headlamp</li>
    <li className={styles.li}>Personal medicines and toiletries</li>
  </ul>
</div>

<Title text={"Best Time To Visit Gaumukh Tapovan Trek"} />

<div className={styles.ul_section}>
  <ul>
    <li className={styles.li}>
      May–June: Pleasant temperatures with clear mountain views.
    </li>

    <li className={styles.li}>
      September–October: Crystal-clear skies and excellent visibility of peaks.
    </li>

    <li className={styles.li}>
      Monsoon months are generally avoided due to landslides and trail risks.
    </li>

    <li className={styles.li}>
      Winter season remains inaccessible due to heavy snowfall.
    </li>
  </ul>
</div>

          <Title text={"Frequently Asked Questions (FAQ)"} />
          <FaqAccordion faqs={[
            { question: "What is the best season for Gaumukh Tapovan trek?", answer: "May to June and September to early October are the best months for this trek. Monsoon and heavy snow make it unsafe in other months." },
            { question: "Is Gaumukh Tapovan trek difficult?", answer: "Yes, it is a moderate to difficult trek due to high altitude (14,600 ft) and glacier crossing, requiring good fitness and prior trekking experience." },
            { question: "Are permits required for this trek?", answer: "Yes, permits are mandatory from the Forest Department since the trek passes through Gangotri National Park." },
            { question: "Do we get to see Mt. Shivling from Tapovan?", answer: "Yes, Tapovan offers spectacular views of Mt. Shivling, Bhagirathi peaks, and other Himalayan ranges." },
            { question: "Is camping allowed in Gaumukh area?", answer: "Camping is only allowed at designated campsites like Chirbasa, Bhojbasa, and Tapovan. No camping is permitted near the actual Gaumukh glacier snout." }
          ]} />


          <Title text={"Related Treks"} />

<div className={styles.ul_section}>
  <ul>
    <li className={styles.li}>
      <Link to="/kedartal-trek">Kedartal Trek</Link>
    </li>

    <li className={styles.li}>
      <Link to="/valley-of-flowers-trek">Valley of Flowers Trek</Link>
    </li>

    <li className={styles.li}>
      <Link to="/pangarchulla-peak-trek">Pangarchulla Peak Trek</Link>
    </li>

    <li className={styles.li}>
      <Link to="/kuari-pass-trek">Kuari Pass Trek</Link>
    </li>
  </ul>
</div>

          
        </div>
        <Form
            open_form={open_form}
            setOpen_form={setOpen_form}
            name={"Gaumukh Tapovan Trek"}
            price={18999}
          />
      </div>
      <Footer />
    </>
  );
}
