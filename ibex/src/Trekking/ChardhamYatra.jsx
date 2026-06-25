import { Helmet } from "react-helmet-async";
import Photos from "./Photos";
import Desktop_intro_section from "./Desktop_intro_section";
import styles from "./Trek.module.css";
import Title from "./Title";
import Itinerary from "./Itinerary";
import { useState, useEffect } from "react";
import Footer from "../footer/Footer";
import Header from "../Header";
import Form from "./Form";
import FaqAccordion from "./FaqAccordion";
import img1 from "../assets/tour/chardham/chardham-yatra-tour-1.webp";
import img2 from "../assets/tour/chardham/chardham-yatra-tour-2.webp";
import img3 from "../assets/tour/chardham/chardham-yatra-tour-3.webp";
import img4 from "../assets/tour/chardham/chardham-yatra-tour-4.webp";
import img5 from "../assets/tour/chardham/chardham-yatra-tour-5.webp";
import img6 from "../assets/tour/chardham/chardham-yatra-tour-6.webp";
import img7 from "../assets/tour/chardham/chardham-yatra-tour-7.webp";

export default function ChardhamYatra() {
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>

      <Helmet>
        <link rel="canonical" href="https://ibexiceaxe.com/chardham-yatra-2026" />
        <title>Chardham Yatra 2026 Tour Package | Kedarnath, Badrinath | Ibex Ice Axe</title>
        <meta name="description" content="Join our comprehensive Chardham Yatra 2026 package covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Premium stay and guided spiritual journey." />
      </Helmet>

      <Header />
      <Desktop_intro_section
        img={img1}
        title={"Chardham Yatra 2026"}
        open_form={setOpen_form}
        des={"Yamunotri | Gangotri | Kedarnath | Badrinath (10 Days/9 Nights)"}
      />
      <Photos photos={[img1, img2, img3, img4, img5, img6, img7]} />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          <div className={styles.title}>Chardham Yatra 2026 · ₹30,999 + 5% GST</div>
          <div className={styles.tag_line}>
            A sacred journey covering Yamunotri, Gangotri, Kedarnath, and Badrinath. Ex-Haridwar/Dehradun.
          </div>
          <div className={styles.all_dates}>
            <div className={styles.indi_date}>10D/9N</div>
          </div>

          <Itinerary
            all_days={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            info={[
              {
                title: "Day 1: HARIDWAR/DEHRADUN - BARKOT (150 Kms. / 05 Hrs Approx)",
                para1: "Upon Arrival at Dehradun Airport / Haridwar Railway Station drive to Barkot via Dehradun - Mussoorie. En-route visit Kempty fall, reach Barkot by late evening.",
                para2: "Dinner & Overnight stay at Hotel.",
                img: img7,
              },
              {
                title: "Day 2: BARKOT - YAMUNOTRI - BARKOT (36 Kms Drive & 6 Kms One Way Trek)",
                para1: "After an early breakfast proceed to Yamunotri drive up to Jankichatti then 6 kms Trek (One way) to Yamunotri, here one can cook rice by packing it in a cloth and dipping it in the hot water of the hot kund. Pilgrims take this cooked rice home as 'Prasad'. Here near the temple 'Pooja' can be offered to Divya Shila, after taking bath in Jamunabai Kund's and having 'Darshan' of 'Yamunaji'. Return back to Jankichatti & further drive back to Barkot.",
                para2: "Dinner & Overnight stay at Hotel.",
                img: img2,
              },
              {
                title: "Day 3: BARKOT - UTTARKASHI (100 Kms / 04 Hrs approx)",
                para1: "After breakfast drive 100 kms to Reach Uttarkashi, En-route visit Prakateshwar Panchavan Mahadev(Shiv Gufa) in Nagarnather Gaon, later visit Kashi Vishwanath temple in Uttarkashi. Evening free for Relax.",
                para2: "Dinner & Overnight stay at Hotel.",
                img: img5,
              },
              {
                title: "Day 4: UTTARKASHI - GANGOTRI - UTTARKASHI (100 Kms / 04 Hrs Drive One Way)",
                para1: "After breakfast leave for Gangotri early in the morning. Post offering Pooja & Darshan at Gangotri Temple, En-route visit Kalp Kedar Mahadev Temple in Harsil. Further drive back to Uttarkashi.",
                para2: "Dinner & Overnight stay at Hotel.",
                img: img3,
              },
              {
                title: "Day 5: UTTARKASHI - GUPTKASHI / SITAPUR / SONPRAYAG (220 Kms / 09 Hrs Approx)",
                para1: "After Early breakfast leave for almost day long drive to here, Reached Hotel at late evening.",
                para2: "Dinner & Overnight stay at Hotel.",
                img: img6,
              },
              {
                title: "Day 6: GUPTKASHI / SITAPUR / SONPRAYAG - KEDARNATH (18 Kms Trek One Way)",
                para1: "After early breakfast drive to Sonprayag Parking then go to Gaurikund by local sharing jeep on direct payment basis then start trek to Kedarnath (Doli/pony options are available there on direct payment basis) reach Kedarnath by evening. Do Darshan/Pooja at Temple.",
                para2: "Dinner & Overnight stay at Guest House.",
                img: img1,
              },
              {
                title: "Day 7: KEDARNATH - GUPTKASHI / SITAPUR / SONPRAYAG (18 Kms Trek One Way)",
                para1: "After breakfast start same down trek to Gaurikund then back to Sonprayag Parking by same local sharing Taxi & drive back to hotel / Guptkashi. Evening free for Relax.",
                para2: "Dinner & Overnight stay at Hotel / Guptkashi.",
                img: img1,
              },
              {
                title: "Day 8: GUPTKASHI / SITAPUR / SONPRAYAG - BADRINATH (220 Kms / 08 Hrs approx)",
                para1: "After Breakfast leave for Badrinath. On arrival check-in to hotel, later visit Vyas Gufa, Ganesh Gufa, Bhim Bridge & origin of River Saraswati at Mana village the last village before the Tibetan border, later go to temple for holy Darshan/ Pooja & attend evening Aarti.",
                para2: "Dinner & Overnight stay at Hotel.",
                img: img4,
              },
              {
                title: "Day 9: BADRINATH - SRINAGAR (190 Kms / 08 Hrs approx)",
                para1: "Early Morning Maha-Abhishek Pooja (optional, which will be booked day before) after breakfast drive to Srinagar. En-route visit Vishnuprayag, Karnprayag, Nandprayag & Rudraprayag. Reach Srinagar by late evening.",
                para2: "Dinner & Overnight stay at Hotel.",
                img: img6,
              },
              {
                title: "Day 10: SRINAGAR - HARIDWAR/DEHRADUN DROP (115 Kms / 04 Hrs approx)",
                para1: "After breakfast drive to Haridwar/Dehradun. En-route visit Devprayag (The Confluence of River Alaknanda & Bhagirathi) to become Ganga. Reached Haridwar/Dehradun to catch your flight/Train for your onwards journey....",
                para2: "Trip Ends.",
                img: img7,
              },
            ]}
          />

          <Title text={"About the Destinations"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}><strong>YAMUNOTRI:</strong> Maharani Guleria of Jaipur built the temple in the 19th Century. It was destroyed twice in the present century and rebuilt again. Yamunotri temple is dedicated to Goddess Yamuna. Yamunotri is the source of revered river Yamuna which originates from the Champasar Glacier lying 1 km ahead of the shrine situated at an elevation of 3235 mts. above sea level. The approach is extremely difficult and therefore pilgrims offer Pooja at the temple itself. Yamunotri was the home of an ancient sage Asit Muni. Yamuna is the daughter of the Sun just like Yama who is considered his son. It is believed that Yama would not torment any person at the time of death who takes a holy dip in Yamuna.</li>
              <li className={styles.li}><strong>SURYA KUND:</strong> There are a Number of thermal springs in the vicinity of the temple, which flows into numerous pools. The most important is Surya Kund.</li>
              <li className={styles.li}><strong>DIVYA SHILA:</strong> A rock pillar, worshipped before entering the Yamunotri Temple.</li>
              <li className={styles.li}><strong>GANGOTRI:</strong> Gangotri temple is 18th Century temple dedicated to Goddess Ganga. It is located near a sacred stone where King Bhagirath worshipped Lord Shiva. Ganga is believed to have touched earth at this spot. According to another legend, Pandavas performed the great "Deva Yagna" here to atone the death of their kinsmen in the epic battle of Mahabharata. The temple is an exquisite 20 ft. high structure made up of white granite.</li>
              <li className={styles.li}><strong>HARSIL:</strong> Located in the Northern Himalayas belt within the Mandakini river valley, which has lush green forests & number of streams and rivulets drain into the main Mandakini River. It has salubrious climate with its elevation being around 1,500 meters (4,920 ft). The sweet sparkling view of the Chaukhamba peak is a lovely sight to behold in the morning hours from here. The valley has large magnolia trees (locally called Champa) that provide a sweet scented atmosphere to the place. Kashi Vishwanath Temple & Ardh Narishwar Temple is Attraction point in Guptkashi.</li>
              <li className={styles.li}><strong>KEDARNATH:</strong> The present temple built in 8th Century A.D. by Adi Guru Shankaracharya lies adjacent to the site of an ancient temple built by Pandavas. The temple has a conical lingam - the main idol, a statue of Nandi - the celestial bull, a 'Garba Grah' for worship and a man dap for assemblies of pilgrims and visitors. The temple is more than 1000 years old. Note: Heli Ticket will be subject to availability & open time by the heli vendors on extra cost. If not available, then guest will go Kedarnath by Doli / Pony at their own cost by direct payment basis.</li>
              <li className={styles.li}><strong>BADRINATH:</strong> Cradled in the twin Mountain ranges of Nar and Narayan is the holiest of the four main shrines - Badrinath along the left bank of river Alaknanda with the towering Neelkantha Peaks as the splendid backdrop. Once the spot was carpeted with 'badris' or wild berries and hence was famous as Badri van. Legend has it, when the Ganga was requested to descend to earth to help suffering humanity; the earth was unable to withstand the force of its descent. Therefore, the mighty Ganga was split into 12 holy channels. Alaknanda was one of them that later became the abode of Lord Vishnu or Badrinath.</li>
              <li className={styles.li}><strong>NARAD KUND:</strong> A recess in the river, near Tapt Kund, forming a pool from where the Badrinath idol was recovered.</li>
              <li className={styles.li}><strong>BRAHMA KAPAL:</strong> It is a flat platform a few yards north of the temple and on the bank of river Alaknanda. It is an important place for Shraddha ceremony or offering of pinds to ensure a heavenly place for dead ancestors or manes. It is said that offering pind here, the manes are permanently enshrined in heaven and no more pinds are to be done elsewhere ever afterwards. Legends have it that when Shiva chopped off the fifth head of Brahma, it got stuck to his trident. Lastly with the blessing of Lord Vishnu at Badrivan, the head of Brahma fell down from the trident at this place & hence the name Brahma-Kapal (head).</li>
              <li className={styles.li}><strong>MANA VILLAGE:</strong> Inhabited by an Indo-Mongolian tribe, it is the last Indian village before Tibet. The women of the village offer Choli to the deity on closing day of the temple each year.</li>
              <li className={styles.li}><strong>BHIM PUL:</strong> On the other side of Mana village, a massive rock forming a natural bridge lies over the roaring Saraswati River. It presents a spectacular view of water thundering down through the narrow passage under the rock and is believed to have been placed there by Bhim, the second eldest among the five Pandava brothers.</li>
            </ul>
          </div>



          <Title text={"Inclusion & Facilities"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Pickup and drop facility from Dehradun Airport/ Haridwar Railway Station</li>
              <li className={styles.li}>All Hotels as per the Package (No AC on hills)</li>
              <li className={styles.li}>The Package on MAP Basis (Breakfast & Dinner)</li>
              <li className={styles.li}>Twin Sharing Accommodation at all Places.</li>
              <li className={styles.li}>AC Rooms in Srinagar Hotel</li>
              <li className={styles.li}>Toll Taxes/Parking & Driver TA</li>
            </ul>
          </div>

          <Title text={"Child Policy"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}><strong>Child up to 5 Years of age:</strong> No Charge (No ID, seat & bed)</li>
              <li className={styles.li}><strong>Child between 5-12 years of age:</strong> 75% of the package cost with seat, extra bed/Mattress & meals.</li>
            </ul>
          </div>

          <Title text={"Booking & Payment"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Advance deposit - 50% advance / Per Person at the time of booking</li>
              <li className={styles.li}>Final payment to be made 20 days prior to the departure date.</li>
            </ul>
          </div>

          <Title text={"Cancellation Policy"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}><strong>30 Days to 21 Days</strong> prior to the departure of the Tour - Deducting 25% of Pkg Cost & Service Tax.</li>
              <li className={styles.li}><strong>20 Days to 15 Days</strong> prior to the departure of the Tour - Deducting 50% of Pkg Cost & Service Tax.</li>
              <li className={styles.li}><strong>14 Days prior to departure</strong> of the Tour or "No Show on the Tour" - No Refund</li>
            </ul>
          </div>

        </div>

        <Form
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={"Chardham Yatra 2026"}
          price={30999}
        />
      </div>
      <Footer />
    </>
  );
}
