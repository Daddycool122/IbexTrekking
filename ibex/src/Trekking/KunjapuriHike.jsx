import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Form from "./Form";
import ItineraryHike from "./ItineraryHike";
import img1 from "../assets/hike/kunjapuri/img1.jpeg";
import img2 from "../assets/hike/kunjapuri/img2.jpeg";
import img3 from "../assets/hike/kunjapuri/img3.jpeg";
import img4 from "../assets/hike/kunjapuri/img4.jpeg";
import img5 from "../assets/hike/kunjapuri/img5.jpeg";
import img6 from "../assets/hike/kunjapuri/img6.jpeg";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import FormNP from "./FormNP";

export default function KunjapuriHike() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Desktop_intro_section
        img={img1}
        title={"Kunjapuri One Day Hike"}
        open_form={setOpen_form}
        des={"Kunjapuri Day Hike – Sunrise, Spirituality & Nature"}
      />
      <Photos photos={[img1, img2, img3, img4, img5, img6]} />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Kunjapuri One Day Hike</div>
          <div className={styles.tag_line}>
            Kunjapuri One Day Hike – Sunrise, Spirituality & Nature
          </div>
          <div className={styles.all_dates}>
            {/* <div className={styles.indi_date}>One Day Hike</div> */}
          </div>

          <ItineraryHike
            all_days={[
              "4:00 AM",
              "4:00 AM - 5:00 AM",
              "5:00 AM - 7:00 AM",
              "7:30 AM - 8:30 AM",
              "8:30 AM - 1:00 PM",
              "1 PM",
            ]}
            info={[
              {
                title: "4:00 AM – Meeting in Tapovan",
                para1:
                  "The day begins early as we gather in Tapovan at 4:00 AM (timing may vary depending on sunrise). From here, we start our journey towards the sacred Kunjapuri Temple.",
                img: img1,
              },
              {
                title: "4:00 AM – 5:00 AM – Drive to Kunjapuri Temple",
                para1:
                  "Enjoy a peaceful one-hour drive covering 30 km through winding mountain roads. As we ascend, the cool breeze and early morning silence set the tone for a spiritual and adventurous day ahead.",
                img: img2,
              },
              {
                title: "5:00 AM – 7:00 AM – Sunrise at Kunjapuri Temple",
                para1:
                  "Arrive at Kunjapuri Temple just before sunrise. Climb up the temple steps and witness the breathtaking sunrise over the Himalayan peaks. Spend time exploring the temple, soaking in the spiritual atmosphere, and relaxing while taking in panoramic views.",
                img: img3,
              },
              {
                title: "7:30 AM – 8:30 AM – Breakfast",
                para1:
                  "After the temple visit, enjoy a wholesome breakfast with the backdrop of the mountains. This break gives you the energy needed before beginning the downhill trek back to Rishikesh.",
                img: img4,
              },
              {
                title:
                  "8:30 AM – 1:00 PM – Downhill Trek with Neer Waterfall Stop",
                para1:
                  "Start your trek from Kunjapuri Temple, descending gradually through village paths, forests, and fields. Along the way, you’ll experience changing landscapes and local life. By late morning, reach Neer Waterfall, where you’ll pause to rest, snack, and swim in its refreshing waters before continuing.",
                img: img5,
              },
              {
                title: "1:00 PM – Arrival in Tapovan",
                para1:
                  "The trek concludes back in Tapovan around 1:00 PM (timing may vary depending on weather and conditions). With the adventure completed, you return carrying memories of sunrise views, Himalayan beauty, and cultural experiences.",
                img: img6,
              },
            ]}
          />

          <Title text={"Highlights of the hike"} />
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title_hike}>
              Witness a stunning sunrise over the Himalayas from Kunjapuri
              Temple
            </span>
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title_hike}>
              Experience the spiritual aura of a sacred Hindu temple
            </span>
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title_hike}>
              Walk through village trails, forests, and fields on your way back
            </span>
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title_hike}>
              Relax and swim at the beautiful Neer Waterfall
            </span>
          </div>
          <div className={styles.indi_highlight}>
            <span className={styles.indi_highlight_title_hike}>
              A perfect one-day adventure near Rishikesh combining culture and
              nature
            </span>
          </div>

          {/* <Title text={"Why is Kedarkantha a Must-Do Trek?"} />
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
          </div> */}

          {/* <Title text={"Age Requirement"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Minimum age: 8 years</li>
            </ul>
          </div> */}

          {/* <Title text={"Fitness Criteria"} />
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
          </div> */}

          {/* <Title text={"How To Reach"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Pick-up: ISBT Dehradun at 6:30 AM</li>
              <li className={styles.li}>Drop: ISBT Dehradun (by 6:30 PM)</li>
            </ul>
          </div> */}

          {/* <Title text={"Trek Essentials"} />
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
                Transport from Rishikesh (Tapovan) to Kunjapuri Temple by car
              </li>
              <li className={styles.li}>Breakfast & snacks</li>
              <li className={styles.li}>Trek leader/guide</li>
              <li className={styles.li}>Entry fees for Neer Waterfall</li>
            </ul>
          </div>

          {/* <Title text={"Exclusion"} />
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
          </div> */}

          <Title text={"Frequently Asked Questions (FAQ)"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                How long is the Kunjapuri hike?
                <br />
                The downhill trek from Kunjapuri to Rishikesh is about 9–10 km
                and takes around 4–5 hours.
              </li>
              <li className={styles.li}>
                Is the trek suitable for beginners?
                <br />
                Yes, it’s an easy trek, mostly downhill, suitable for beginners,
                kids, and families.
              </li>
              <li className={styles.li}>
                What is the best time for the Kunjapuri hike?
                <br />
                The hike is done year-round, but the sunrise view is best in
                October to April, when skies are clearer.
              </li>
              <li className={styles.li}>
                Can I swim at Neer Waterfall?
                <br />
                Yes, you can swim and relax at the waterfall. Carry a change of
                clothes if you plan to take a dip.
              </li>
              <li className={styles.li}>
                What is included in the cost?
                <br />
                Transport, breakfast, snacks, trek leader, and entry fees for
                Neer Waterfall are included.
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.billing_section}>
          <FormNP
            open_form={open_form}
            setOpen_form={setOpen_form}
            name={"Kunjapuri Hike"}
            price={2499}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
