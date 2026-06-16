import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import Itinerary from "./Itinerary";
import img1 from "../assets/Trek/pangarchulla/img1.jpeg";
import img2 from "../assets/Trek/pangarchulla/img2.jpeg";
import img3 from "../assets/Trek/pangarchulla/img3.jpeg";
import img4 from "../assets/Trek/pangarchulla/img4.jpeg";
import img5 from "../assets/Trek/pangarchulla/img5.jpeg";
import img6 from "../assets/Trek/pangarchulla/img6.jpeg";
import img7 from "../assets/Trek/pangarchulla/img7.jpeg";
import img8 from "../assets/Trek/pangarchulla/img8.jpeg";
import img9 from "../assets/Trek/pangarchulla/img9.jpeg";
import img10 from "../assets/Trek/pangarchulla/img10.jpeg";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../Header";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import FaqAccordion from "./FaqAccordion";

export default function PangarchullaPeak() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
  <title>
    Pangarchulla Peak Trek 2026 | Summit Trek in Uttarakhand | Ibex Ice Axe
  </title>

  <meta
    name="description"
    content="Book Pangarchulla Peak Trek 2026 with Ibex Ice Axe. Conquer the thrilling 15,100 ft summit and witness breathtaking views of Nanda Devi, Chaukhamba, Hathi Ghoda, and the Garhwal Himalayas."
  />

  <meta
    name="keywords"
    content="Pangarchulla Peak Trek, Pangarchulla Trek 2026, Pangarchulla Peak Uttarakhand, Pangarchulla Summit Trek, Pangarchulla Trek Cost, Pangarchulla Trek Package, Pangarchulla Trek Booking, Uttarakhand Summit Trek"
  />

  <link
    rel="canonical"
    href="https://ibexiceaxe.com/pangarchulla-peak-trek"
  />

  <meta property="og:type" content="website" />
  <meta
    property="og:title"
    content="Pangarchulla Peak Trek 2026 | Summit Trek in Uttarakhand"
  />
  <meta
    property="og:description"
    content="Experience one of the most thrilling summit treks in Uttarakhand with stunning Himalayan panoramas."
  />
  <meta
    property="og:url"
    content="https://ibexiceaxe.com/pangarchulla-peak-trek"
  />
  <meta property="og:image" content={img1} />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      name: "Pangarchulla Peak Trek",
      description:
        "Pangarchulla Peak Trek is a challenging summit trek in Uttarakhand offering panoramic Himalayan views and an exciting summit climb.",
      touristType: "Trekking",
      provider: {
        "@type": "Organization",
        name: "Ibex Ice Axe",
        url: "https://ibexiceaxe.com",
      },
      itinerary: {
        "@type": "ItemList",
        numberOfItems: 7,
      },
      offers: {
        "@type": "Offer",
        price: "13999",
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
      },
    })}
  </script>
</Helmet>
      <Header />
      <Desktop_intro_section
        img={img1}
        title={"Pangarchulla Peak Trek"}
        open_form={setOpen_form}
        des={"Conquer a thrilling summit amidst Himalayan giants."}
      />
      <Photos
        photos={[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]}
      />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <h1 className={styles.title}>
  Pangarchulla Peak Trek 2026 · ₹13,999 + 5% GST
</h1>
          <div className={styles.tag_line}>
            A Challenging Summit Trek with Stunning Views of Nanda Devi and
            Hathi Ghoda Peaks.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>7D/6N</div>
          </div>


          <Title text={"About Pangarchulla Peak Trek"} />

<div className={styles.ul_section}>
  <p>
    Pangarchulla Peak Trek is one of the most exciting summit treks in
    Uttarakhand. Situated in the Garhwal Himalayas near Joshimath, the trek
    combines beautiful forests, high-altitude campsites, snow-covered slopes,
    and a thrilling summit climb.
  </p>

  <p>
    Standing at an altitude of 15,100 ft, Pangarchulla Peak offers spectacular
    views of Nanda Devi, Chaukhamba, Hathi Ghoda, Dronagiri, Neelkanth, and
    several Himalayan giants. The summit push is challenging and highly
    rewarding for adventure seekers.
  </p>

  <p>
    Ideal for experienced trekkers, Pangarchulla Peak Trek 2026 is among the
    best summit treks in India and provides a true Himalayan mountaineering
    experience.
  </p>
</div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6, 7]}
            info={[
              {
                title: "Day 1: Rishikesh to Joshimath",
                para1:
                  "Drive 256 km from Rishikesh to Joshimath (2,050 m) via Devprayag and Rudraprayag.",
                para2: "Stay overnight in guesthouse.",
                img: img2,
              },
              {
                title: "Day 2: Joshimath to Dhak and Trek to Gulling Top",
                para1: "Drive to Dhak and trek to Gulling campsite (2,800 m).",
                para2: "Stay in tents.",
                img: img3,
              },
              {
                title: "Day 3: Gulling Top to Khullara",
                para1:
                  "Trek to Khullara campsite at 3,350 m with scenic views.",
                para2: "Stay overnight in tents.",
                img: img4,
              },
              {
                title: "Day 4: Acclimatization Day at Khullara",
                para1: "Explore nearby ridges and prepare for summit push.",
                para2: "Stay in Khullara.",
                img: img5,
              },
              {
                title: "Day 5: Summit Pangarchulla Peak and Return to Khullara",
                para1:
                  "Start early and trek to Pangarchulla Peak (4,590 m). Witness panoramic Himalayan views.",
                para2: "Descend to Khullara for overnight stay.",
                img: img2,
              },
              {
                title: "Day 6: Khullara to Dhak and Drive to Joshimath",
                para1: "Descend to Dhak and drive to Joshimath.",
                para2: "Stay overnight in guesthouse.",
                img: img3,
              },
              {
                title: "Day 7: Joshimath to Rishikesh",
                para1: "Drive back to Rishikesh with beautiful memories.",
                para2: "End of trek.",
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
            <span className={styles.indi_highlight_title}>Days:</span> 7
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Altitude:</span>{" "}
            15,100 ft (4,590 m)
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Distance:</span> 46 km
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Grade:</span>{" "}
            Difficult
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title}>Season:</span> April
            to June & Sept to Nov
          </div>

          <Title text={"Why is Pangarchulla Peak a Must-Do Trek?"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                One of the most thrilling summit climbs in Uttarakhand.
              </li>
              <li className={styles.li}>
                Spectacular views of Nanda Devi, Chaukhamba, and other peaks.
              </li>
              <li className={styles.li}>
                Snow-filled adventure in early summer and autumn.
              </li>
              <li className={styles.li}>
                Perfect for experienced trekkers looking for a challenge.
              </li>
            </ul>
          </div>

          <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 15 years</li>
            </ul>
          </div>

          <Title text={"Fitness Criteria"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Run 5 km in 35 mins or 10 km in 80 mins comfortably.
              </li>
              <li className={styles.li}>
                Trek continuously for 7-8 hours on summit day.
              </li>
              <li className={styles.li}>Ability to carry 10–12 kg backpack.</li>
            </ul>
          </div>

          <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Pick-up: Rishikesh Railway Station at 6:30 AM
              </li>
              <li className={styles.li}>
                Drop: Rishikesh Railway Station (by evening)
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
                Meals: From Day 1 dinner to Day 6 dinner
              </li>
              <li className={styles.li}>
                Support Team: Certified trek leader, guides, cooks, and helpers
              </li>
              <li className={styles.li}>
                Equipment: Sleeping bags, tents, technical gear
              </li>
              <li className={styles.li}>
                First Aid: Oxygen, BP monitor, stretcher
              </li>
              <li className={styles.li}>
                Permits and trek completion certificate
              </li>
            </ul>
          </div>

          <Title text={"Inclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Stay: Guesthouse (Day 1 & 6), tents on trek (Day 2–5)
              </li>
              <li className={styles.li}>
                Meals: Veg meals from Day 1 dinner to Day 6 dinner
              </li>
              <li className={styles.li}>
                Certified trek leader and technical guides
              </li>
              <li className={styles.li}>Trek equipment and safety gear</li>
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
    <li className={styles.li}>High-ankle waterproof trekking shoes</li>
    <li className={styles.li}>Down jacket and thermals</li>
    <li className={styles.li}>Fleece layers</li>
    <li className={styles.li}>Woollen cap and gloves</li>
    <li className={styles.li}>Sunglasses with UV protection</li>
    <li className={styles.li}>Sunscreen SPF 50+</li>
    <li className={styles.li}>Personal medicines</li>
    <li className={styles.li}>Headlamp or torch</li>
    <li className={styles.li}>Water bottles (2 litres)</li>
    <li className={styles.li}>Rain cover and poncho</li>
  </ul>
</div>


          <Title text={"Best Time To Visit Pangarchulla Peak Trek"} />

<div className={styles.ul_section}>
  <ul>
    <li className={styles.li}>
      April–June: Best season with snow sections and clear summit views.
    </li>

    <li className={styles.li}>
      May: Most popular month for the Pangarchulla Peak summit climb.
    </li>

    <li className={styles.li}>
      September–November: Stable weather and crystal-clear Himalayan panoramas.
    </li>

    <li className={styles.li}>
      Winter months are generally avoided due to heavy snowfall and harsh
      summit conditions.
    </li>
  </ul>
</div>

          <Title text={"Frequently Asked Questions (FAQ)"} />
          <div className={styles.ul_section}>
           <FaqAccordion
  faqs={[
    {
      question: "How difficult is Pangarchulla Peak Trek?",
      answer:
        "Pangarchulla is a difficult trek and is recommended for trekkers with prior high-altitude trekking experience."
    },
    {
      question: "What is the altitude of Pangarchulla Peak?",
      answer:
        "The summit stands at approximately 15,100 ft (4,590 m) above sea level."
    },
    {
      question: "What is the best time for Pangarchulla Peak Trek?",
      answer:
        "April to June and September to November are considered the best months."
    },
    {
      question: "Do I need prior trekking experience?",
      answer:
        "Yes. Previous trekking experience is highly recommended due to the challenging summit climb."
    },
    {
      question: "Can beginners do Pangarchulla Trek?",
      answer:
        "This trek is not recommended for complete beginners. Good fitness and previous trekking experience are advised."
    },
    {
      question: "Will there be snow on the trek?",
      answer:
        "Yes, especially during April, May, and early June when snow remains on the upper sections."
    }
  ]}
/>
          </div>
        </div>


        <Title text={"Related Treks"} />

<div className={styles.ul_section}>
  <ul>
    <li className={styles.li}>
      <Link to="/kuari-pass-trek">Kuari Pass Trek</Link>
    </li>

    <li className={styles.li}>
      <Link to="/kedarkantha-trek">Kedarkantha Trek</Link>
    </li>

    <li className={styles.li}>
      <Link to="/brahmatal-trek">Brahmatal Trek</Link>
    </li>

    <li className={styles.li}>
      <Link to="/ali-bedni-bugyal-trek">Ali Bedni Bugyal Trek</Link>
    </li>
  </ul>
</div>

        <Form
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Pangarchulla Peak Trek"}
          price={13999}
        />
      </div>
      <Footer />
    </>
  );
}
