import Intro_section from "./Intro_section";
import img1 from "../assets/Rafting/img7.jpg";
import img2 from "../assets/Rafting/img6.jpg";
import img3 from "../assets/Rafting/img8.jpg";
import img4 from "../assets/Rafting/img9.jpg";
import img5 from "../assets/Rafting/img10.jpg";
import img6 from "../assets/Rafting/img11.jpg";

import vid1 from "../assets/Rafting/vid1.mp4";
import vid2 from "../assets/Rafting/vid2.mp4";
import vid3 from "../assets/Rafting/vid3.mp4";
import vid4 from "../assets/Rafting/vid4.mp4";
import vid5 from "../assets/Rafting/vid5.mp4";
import vid6 from "../assets/Rafting/vid6.mp4";
import Photos from "../Trekking/Photos";
import styles from "../Trekking/Trek.module.css";
import { useState, useEffect } from "react";
import Title from "../Trekking/Title";
import Footer from "../footer/Footer";
import RaftingForm from "../Trekking/RaftingForm";
import { useSearchParams } from "react-router-dom";
import Videos from "./Video";
export default function Rafting() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [km, setKm] = useState(id == undefined ? 16 : id);
  const [open_form, setOpen_form] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [price, setPrice] = useState(0);
  return (
    <>
      <Intro_section
        title={"River Rafting"}
        img={img1}
        des={"Where roaring rivers meet fearless hearts."}
        open_form={setOpen_form}
      />
      <Photos photos={[img1, img2, img3, img4, img5, img6]} />
      <div className={styles.main_section}>
        <div className={styles.info_section}>
          {km == 16 ? (
            <div className={styles.title}>
              16 KM River Rafting · ₹1,020/Person
            </div>
          ) : null}
          {km == 25 ? (
            <div className={styles.title}>
              25 KM River Rafting · ₹1,520/Person
            </div>
          ) : null}
          {km == 35 ? (
            <div className={styles.title}>
              35 KM River Rafting · ₹2,520/Person
            </div>
          ) : null}

          {km == 16 ? (
            <div className={styles.tag_line}>
              Thrill-seekers, meet your 16 KM adventure challenge.
            </div>
          ) : null}
          {km == 25 ? (
            <div className={styles.tag_line}>
              Thrill-seekers, meet your 25 KM adventure challenge.
            </div>
          ) : null}
          {km == 35 ? (
            <div className={styles.tag_line}>
              Thrill-seekers, meet your 35 KM adventure challenge.
            </div>
          ) : null}

          <div className={styles.all_dates}>
            <div
              className={
                km == 16 ? styles.indi_date : styles.indi_date_inactive
              }
              onClick={() => {
                setKm(16);
              }}
            >
              16 KM
            </div>
            <div
              className={
                km == 25 ? styles.indi_date : styles.indi_date_inactive
              }
              onClick={() => {
                setKm(25);
              }}
            >
              25 KM
            </div>
            <div
              className={
                km == 35 ? styles.indi_date : styles.indi_date_inactive
              }
              onClick={() => {
                setKm(35);
              }}
            >
              35 KM
            </div>
          </div>

          <div className={styles.p_section}>
            Rishikesh has earned its title as the Adventure Capital of India
            thanks to its thrilling activities like bungee jumping, camping,
            river rafting, and more. Travelers from across the globe visit
            Rishikesh to experience world-class river rafting, known not just
            for its excitement but also for its safety. What sets rafting here
            apart is the presence of flat rescue sections after every rapid,
            giving river guides enough time to ensure the safety of their teams.
          </div>
          <div className={styles.p_section}>
            Beyond adventure, Rishikesh is steeped in spiritual energy and
            natural beauty, nestled between the Ganges and the Himalayan
            foothills. The stretch from Kaudiyala to Muni Ki Reti is considered
            the heart of all adventure sports in the area. Shivpuri, famously
            known as the birthplace of river rafting in Rishikesh, hosted the
            first commercial rafting trip and remains the most popular starting
            point for the iconic 16 km Shivpuri to Rishikesh rafting run. It’s
            also home to one of India’s oldest and most trusted whitewater
            rafting schools.
          </div>

          <Title text={"Itinerary"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Report to Our Office - Arrive at your scheduled reporting time
                to kickstart your adventure.
              </li>
              <li className={styles.li}>
                Fill the Consent Form - Complete a quick consultation and
                consent form before heading out.
              </li>
              <li className={styles.li}>
                Travel to the Starting Point - We’ll take you to the rafting
                start location by vehicle.
              </li>
              <li className={styles.li}>
                Gear Up - Put on your safety gear — life jacket, helmet, and
                grab your paddle.
              </li>
              <li className={styles.li}>
                Safety Briefing - Our expert guides will give a 10–20 minute
                briefing on paddling techniques, rescue procedures, and
                essential safety tips.
              </li>
              <li className={styles.li}>
                Start Rafting - It’s time to hit the river! Enjoy the thrill of
                riding the rapids
              </li>
              <li className={styles.li}>
                Return to Office - After your rafting session, we’ll transport
                you back to our office.
              </li>
              <li className={styles.li}>
                Changing Room - Freshen up and change into dry clothes in our
                clean changing facilities.
              </li>
              <li className={styles.li}>
                Photos & Videos - Capture the action! Our river guide can record
                your adventure for an additional charge.
              </li>
            </ul>
          </div>

          <Title text={"Videos that you will love"} />
          <Videos photos={[vid1, vid2, vid3, vid4, vid5, vid6]} />
          <Title text={"Eligibility Criteria for River Rafting Rishikesh"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Minimum Age - 14 years (12 years allowed for 9 KM section)
              </li>
              <li className={styles.li}>
                Maximum Age - 60 years (65 years allowed for 9 KM section)
              </li>
              <li className={styles.li}>Minimum Weight - 40 kg</li>
              <li className={styles.li}>Maximum Weight - 100–110 kg</li>
              <li className={styles.li}>
                Not Allowed - Individuals under the influence of alcohol
                Pregnant women Asthma patients Persons with recent heart
                surgeries or serious medical conditions
              </li>
            </ul>
          </div>

          <Title text={"Rishikesh Rafting Safety Measures"} />
          <div className={styles.p_section}>
            At Ibexiceaxe, we understand that safety comes first when it comes
            to river rafting. That’s why we follow strict protocols and
            professional practices to ensure every adventure is both thrilling
            and secure. Here's how we keep you safe on the water:
          </div>
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Quality Equipment - Certified helmets, life jackets, and paddles
              </li>
              <li className={styles.li}>
                Expert Guides - Trained professionals with years of rafting
                experience.
              </li>
              <li className={styles.li}>
                Certified Training - Our team undergoes courses in First Aid,
                CPR (Cardiopulmonary Resuscitation), Rescue Techniques, Swimming
                & River Navigation
              </li>
              <li className={styles.li}>
                River Reading Skills - Understanding river lines, rapids, and
                current behavior.
              </li>
              <li className={styles.li}>
                Flip & Rescue Drills Preparedness for unexpected situations.
              </li>
              <li className={styles.li}>
                Pre-Departure Briefing - Mandatory safety instructions and
                paddling guidance before every trip.
              </li>
              <li className={styles.li}>
                Life Jackets Always On No exceptions, safety gear is mandatory.
              </li>
              <li className={styles.li}>
                Weather Monitoring Real-time updates to avoid dangerous
                conditions.
              </li>
              <li className={styles.li}>
                Medical Support First aid kit available and quick-response
                assistance
              </li>
              <li className={styles.li}>
                Age & Health Guidelines Strictly followed for participant
                safety.
              </li>
            </ul>
          </div>

          <Title text={"Advantages"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Complete Adventure Experience - Enjoy a holistic journey that
                blends the serenity of camping with the thrill of rafting.
              </li>
              <li className={styles.li}>
                Reconnect with Nature - Escape the city chaos and unwind in a
                peaceful, natural environment by the riverside.
              </li>
              <li className={styles.li}>
                Tailored for All Levels - Our curated packages suit everyone —
                from beginners seeking a gentle start to pros craving extreme
                adventure.
              </li>
            </ul>
          </div>

          <Title text={"Inclusions"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Safety Equipment (Life Jacket, Helmet, Paddle)
              </li>
              <li className={styles.li}>Certified Professional Guide</li>
              <li className={styles.li}>Office-to-Office Transportation</li>
              <li className={styles.li}>Safety Kayaker (In all routes)</li>
            </ul>
          </div>
          <Title text={"Exclusion"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>Meals</li>
              <li className={styles.li}>
                Video Recording (Available at additional cost through your river
                guide)
              </li>
            </ul>
          </div>
          <Title text={"Various Rapids for All Levels"} />
          <div className={styles.p_section}>
            Whether you're a beginner seeking the calm thrill of Grade I rapids
            or a true adventure enthusiast ready to take on the mighty Grade IV
            rapids of the Ganges — Rishikesh has it all. Different routes offer
            different levels of challenge. Some of the popular Grade I–II rapids
            include: Black Money, Sweet Sixteen, Good Morning, and Body Surfing.
            For those craving more excitement, Grade III–IV rapids like Three
            Blind Mice, The Great Wall, and Golf Course are sure to deliver.
            Choose the route that best matches your spirit of adventure!
          </div>
          <Title text={"Classification of Rapids"} />
          <div className={styles.p_section}>
            To truly enjoy and prepare for your rafting adventure, it helps to
            understand the classes of rapids you'll encounter. Each grade
            reflects the intensity, challenge, and skill required to navigate
            the river.
          </div>
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                Class I – Easy - Gentle, slow-moving water with small waves and
                no obstacles. Perfect for beginners and families.
              </li>
              <li className={styles.li}>
                Class II – Novice - Mild rapids with moderate waves and some
                maneuvering. Great for beginners who want a touch more
                excitement.
              </li>
              <li className={styles.li}>
                Class III – Intermediate - Faster currents, bigger waves, and
                possible obstacles. Requires teamwork and coordination. Ideal
                for adventure seekers.
              </li>
              <li className={styles.li}>
                Class IV – Advanced - Strong rapids with powerful waves, drops,
                and technical maneuvers. For experienced rafters looking for a
                true adrenaline rush.
              </li>
              <li className={styles.li}>
                Class V – Expert - Extremely intense rapids with turbulent
                water, large waves, and complex navigation. Reserved for
                seasoned professionals with high skill and physical fitness.
              </li>
              <li className={styles.li}>
                Class VI – Extreme - Unpredictable, highly dangerous rapids not
                recommended for commercial rafting.Beyond this level, rapids are
                considered waterfalls.
              </li>
            </ul>
          </div>
          <Title text={"Frequently Asked Questions"} />
          <div className={styles.ul_section}>
            <ul>
              <li className={styles.li}>
                What are the best months for rafting in Rishikesh?
                <br /> The ideal time for river rafting in Rishikesh is
                mid-September to November and mid-February to the end of June.
                For strong rapids and thrilling adventure, visit in September,
                October, May, or June. For clean, transparent water, opt for
                November to April.
              </li>
              <li className={styles.li}>
                Are there age restrictions for rafting in Rishikesh?
                <br /> Yes, age restrictions apply for safety reasons: 9 KM
                section: Minimum age 12, maximum age 65 12 KM and above: Minimum
                age 14, maximum age 60
              </li>
              <li className={styles.li}>
                What safety measures are in place for rafting?
                <br /> Safety is a top priority in Rishikesh. Here's what’s
                ensured: Regular maintenance of all safety gear Certified life
                jackets and helmets Pre-departure safety briefing Trained river
                guides with licenses issued by UTDB after passing a qualifying
                test Well-established emergency protocols
              </li>
              <li className={styles.li}>
                Can non-swimmers go rafting in Rishikesh?
                <br /> Absolutely! Life jackets (PFDs) are mandatory for all,
                and they are specially designed to keep non-swimmers safe and
                afloat throughout the journey
              </li>
              <li className={styles.li}>
                What are some nearby attractions for non-adventurous travelers?
                <br /> Rishikesh is not just for thrill-seekers. For a peaceful
                and spiritual experience, you can explore: Ashrams & Yoga
                Centers: Parmarth Niketan, Nirmal Ashram, The Beatles Ashram
                Ghats & Temples: Triveni Ghat, Ganga Aarti (Triveni, Parmarth
                Niketan, Satrughan Ghat) Bridges & Views: Laxman Jhula, Janki
                Setu, Ram Jhula Waterfalls & Sunsets: Neer Waterfall, Patna
                Waterfall, and Kyarki (famous sunset point)
              </li>
            </ul>
          </div>
        </div>

        <RaftingForm
          open_form={open_form}
          setOpen_form={setOpen_form}
          name={
            (km == 16
              ? "16 km"
              : km == 25
                ? "25 km"
                : km == 35
                  ? "35 km"
                  : "16 km") + " River Rafting"
          }
          price={km == 16 ? 1020 : km == 25 ? 1520 : km == 35 ? 2520 : 1020}
        />
      </div>
      <Footer />
    </>
  );
}
