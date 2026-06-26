import FaqAccordion from "./FaqAccordion";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Para from "./Para";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/chopta/chopta-trek-1.webp";
import img2 from "../assets/Trek/chopta/chopta-trek-2.webp";
import img3 from "../assets/Trek/chopta/chopta-trek-3.webp";
import img4 from "../assets/Trek/chopta/chopta-trek-4.webp";
import img5 from "../assets/Trek/chopta/chopta-trek-5.webp";
import img6 from "../assets/Trek/chopta/chopta-trek-6.webp";
import img7 from "../assets/Trek/chopta/chopta-trek-7.webp";
import img8 from "../assets/Trek/chopta/chopta-trek-8.webp";
import img9 from "../assets/Trek/chopta/chopta-trek-9.webp";
import img10 from "../assets/Trek/chopta/chopta-trek-10.webp";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Chopta_Chandrashila() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
  <title>
    Chopta Chandrashila Trek 2026 | Tungnath Trek Package | Ibex Ice Axe
  </title>

  <meta
    name="description"
    content="Book Chopta Chandrashila Trek 2026 with Ibex Ice Axe. Visit Tungnath Temple, Chandrashila Summit, enjoy Himalayan views, itinerary, cost, and booking details."
  />

  <meta
    name="keywords"
    content="Chopta Chandrashila Trek, Tungnath Trek, Chandrashila Trek 2026, Chopta Trek Package, Tungnath Temple Trek, Weekend Trek Uttarakhand"
  />

  <link
    rel="canonical"
    href="https://ibexiceaxe.com/chopta-chandrashilla-trek"
  />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Chopta Chandrashila Trek",
      description:
        "Chopta Chandrashila Trek with Tungnath Temple and Himalayan summit views.",
      provider: {
        "@type": "Organization",
        name: "Ibex Ice Axe",
      },
    })}
  </script>
</Helmet>
            <Desktop_intro_section
        img={img4}
        title={"Chopta Chandrashila"}
        open_form={setOpen_form}
        des={"Where serene forests meet breathtaking summit views."}
      />
      <Photos
        photos={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]}
      />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <h1 className={styles.title}>
  Chopta Chandrashila Trek 2026 · ₹10,999 + 5% GST
</h1>
          <div className={styles.tag_line}>
            Mini Switzerland of India – Chopta Awaits You!
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>3D/2N</div>
          </div>

          <Title text={"About Chopta Chandrashila Trek"} />

<div className={styles.ul_section}>
  <p>
    Chopta Chandrashila Trek is one of the most scenic short treks in
    Uttarakhand. The trek takes you through beautiful forests, alpine
    meadows, the famous Tungnath Temple, and finally to Chandrashila
    Summit at an altitude of around 12,000 feet.
  </p>

  <p>
    Tungnath is the highest Shiva temple in the world and an important
    part of the Panch Kedar pilgrimage. From Chandrashila Peak,
    trekkers enjoy panoramic views of Nanda Devi, Chaukhamba,
    Kedarnath, Trishul, and other Himalayan peaks.
  </p>

  <p>
    The Chopta Chandrashila Trek is ideal for beginners, families,
    weekend travelers, and anyone looking for a short Himalayan
    adventure.
  </p>
</div>

          <Itinerary
            all_days={[1, 2, 3]}
            info={[
              {
                title:
                  "Day 1: Rishikesh to Baniyakund – Journey to the Base Camp",
                para1:
                  "Your adventure begins with a scenic 210 km drive from Rishikesh to Baniyakund, taking about 7–8 hours. The route winds through Garhwal’s picturesque valleys and river confluences.",
                para2:
                  "Arrive at Baniyakund and settle in your cottage tents. Enjoy a hot dinner and briefing session before resting for the big day ahead.",
                img: img2,
              },
              {
                title:
                  "Day 2: Summit Day – Chopta to Tungnath & Chandrashila and Back",
                para1:
                  "After an early breakfast, drive 5 km to Chopta, the trek start point. Begin the 9–10 km round trek through rhododendron forests to reach Tungnath, the world’s highest Shiva temple.",
                para2:
                  "From Tungnath, continue to Chandrashila peak (3,700 m) for stunning 360° Himalayan views of Nanda Devi, Chaukhamba, and Kedarnath. Descend back to Chopta and return to Baniyakund for overnight stay.",
                img: img3,
              },
              {
                title:
                  "Day 3: Baniyakund to Rishikesh – Bidding Goodbye to the Himalayas",
                para1:
                  "After breakfast, start the return journey to Rishikesh. The 210 km drive takes about 7–8 hours.",
                para2:
                  "Take home unforgettable memories of snowy peaks, spiritual vibes, and scenic meadows.",
                img: img4,
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
            <span className={styles.indi_highlight_title}>Days:</span> 3
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Altitude:</span>{" "}
            12,000 ft (3,700 m)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 10 km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span> Easy
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> Spring,
            Summer, Autumn, Winter
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Month:</span> Jan,
            Feb, Mar, Apr, May, Jun, Sep, Oct, Nov, Dec
          </div>
          <div className={styles.indi_highlight}>
            <a href="tel://+916396518778">
              <span className={styles.indi_highlight_title}>Contact:</span>{" "}
              +916396518778
            </a>
          </div>

          <Title text={"Why is Chopta Chandrashila a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Covers Chopta, Tungnath, and Chandrashila in one short trek.
              </li>
              <li className={styles.li}>
                Witness the world’s highest Shiva temple, Tungnath.
              </li>
              <li className={styles.li}>
                360° views of Himalayan giants like Nanda Devi, Chaukhamba, and
                Kedarnath.
              </li>
              <li className={styles.li}>
                Chopta – the Mini Switzerland of India with rolling meadows and
                forests.
              </li>
              <li className={styles.li}>
                Breathtaking sunrise from Chandrashila peak.
              </li>
              <li className={styles.li}>
                Perfect for beginners and families – short, easy, and scenic.
              </li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                April to November: Minimum age 7 years
              </li>
              <li className={styles.li}>
                December to March: Minimum age 10 years
              </li>
            </ul>
          </div>

          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Jog 5 km in 40 minutes or 10 km in 90 minutes without stress.
              </li>
              <li className={styles.li}>
                Alternatively, cycle 8 km in 30 minutes.
              </li>
              <li className={styles.li}>
                Carrying capacity: 10–12 kg if self-carrying, 3–5 kg if
                offloading.
              </li>
            </ul>
          </div>

          <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Pick-Up: Tapovan, Rishikesh (Opposite Shiv Vilas Hotel) at 6:00
                AM
              </li>
              <li className={styles.li}>
                Drop-Off: Tapovan, Rishikesh (by 6:30–7:30 PM)
              </li>
            </ul>
          </div>

          <Title text={"Options to Reach Rishikesh"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Train/Bus to Rishikesh, Haridwar (25 km), or Dehradun (50 km)
              </li>
              <li className={styles.li}>
                Flight to Jolly Grant Airport, Dehradun (21 km)
              </li>
              <li className={styles.li}>
                Arrive a day before. Buffer day advised in monsoon
                (July–August).
              </li>
            </ul>
          </div>

          <Title text={"Trek Essentials"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation: Cottage tents (Hexa sharing, separate for
                male/female)
              </li>
              <li className={styles.li}>
                Meals: Veg + Egg from Day 1 dinner to Day 2 dinner
              </li>
              <li className={styles.li}>
                Trek Equipment: Ropes, helmet, harness, gaiters, microspikes (if
                needed)
              </li>
              <li className={styles.li}>
                Support Team: Certified leader, chef, local guides, and staff
              </li>
              <li className={styles.li}>
                First Aid: Medical kit, oxygen, BP monitor, stretcher
              </li>
              <li className={styles.li}>
                Transport: Rishikesh to Baniyakund & back + local transport for
                summit day
              </li>
              <li className={styles.li}>
                Other: Permits, entry fees, cloakroom, insurance (for Indians)
              </li>
            </ul>
          </div>

          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Accommodation in cottage tents (Hexa sharing)
              </li>
              <li className={styles.li}>Meals: Day 1 dinner to Day 2 dinner</li>
              <li className={styles.li}>
                Support team: Certified leader, chef, guides
              </li>
              <li className={styles.li}>
                Trek gear and technical equipment (if needed)
              </li>
              <li className={styles.li}>First aid and medical support</li>
              <li className={styles.li}>
                Transport: Rishikesh ↔ Base camp, local travel for summit day
              </li>
              <li className={styles.li}>
                Permits, insurance (Indians only), cloakroom facility
              </li>
              <li className={styles.li}>Completion certificate</li>
            </ul>
          </div>

          <Title text={"Exclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Food during transit</li>
              <li className={styles.li}>Personal expenses</li>
              <li className={styles.li}>Hospitalization or evacuation costs</li>
              <li className={styles.li}>Anything not listed under Inclusion</li>
              <li className={styles.li}>
                On-demand gear: Satellite phone, PAC bag, AEDs (if available)
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
   
          <Title text={"Best Time To Visit Chopta Chandrashila Trek"} />

<div className={styles.ul_section}>
  <ul>
    <li className={styles.li}>
      March–June: Pleasant weather and rhododendron blooms
    </li>

    <li className={styles.li}>
      September–November: Clear mountain views
    </li>

    <li className={styles.li}>
      December–February: Snow-covered winter landscapes
    </li>
  </ul>
</div>


          <Title text={"Frequently Asked Questions (FAQ)"} />
          <FaqAccordion faqs={[
            { question: "What is the best time to do Chopta Chandrashila trek?", answer: "The best time is from March to June and September to November for clear skies and pleasant weather. Avoid monsoon due to landslides." },
            { question: "Is this trek suitable for beginners?", answer: "Yes, this is an easy to moderate trek and is ideal for beginners with basic fitness levels." },
            { question: "Will we experience snow on this trek?", answer: "Yes, you can experience snow from December to early March, making it a great winter trek." },
            { question: "Do we need a guide for this trek?", answer: "Yes, a certified guide is recommended for safety and navigation, especially in winter or forested areas." },
            { question: "How do I reach Chopta for the trek?", answer: "The trek starts from Sari or Chopta, which can be reached by road from Haridwar or Rishikesh via Rudraprayag and Ukhimath." }
          ]} />
        </div>


        
        <Title text={"Related Treks"} />

<div className={styles.ul_section}>
  <ul>
    <li className={styles.li}>
      <Link to="/kedarkantha-trek">
        Kedarkantha Trek
      </Link>
    </li>

    <li className={styles.li}>
      <Link to="/panch-kedar-trek">
        Panch Kedar Trek
      </Link>
    </li>

    <li className={styles.li}>
      <Link to="/kuari-pass-trek">
        Kuari Pass Trek
      </Link>
    </li>

    <li className={styles.li}>
      <Link to="/valley-of-flowers-trek">
        Valley of Flowers Trek
      </Link>
    </li>
  </ul>
</div>

        <Form
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Chopta Chandrashilla Trek"}
          price={10999}
        />
      </div>
      <Footer />
    </>
  );
}
