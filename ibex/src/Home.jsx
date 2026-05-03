import Desktop_intro_section from "./Trekking/Desktop_intro_section";
import Desktop_home from "./Trekking/Desktop_home";
import img1 from "./assets/home/img1.jpg";
import styles from "./Home.module.css";
import rafting from "./assets/home/rafting.jpg";
import trekking from "./assets/home/trekking.jpg";
import { useNavigate } from "react-router-dom";
import img2 from "./assets/Trek/Valley_of_flower/img3.jpeg";
import img3 from "./assets/Trek/brahmataal/img3.jpeg";
import img4 from "./assets/Trek/chopta/img4.jpeg";
import img5 from "./assets/Trek/gaumukh/img1.jpeg";
import img6 from "./assets/Trek/kedarkantha/img1.jpeg";
import img7 from "./assets/Trek/kuari/img2.jpeg";
import img8 from "./assets/Trek/panch_kedar/img1.jpeg";
import img9 from "./assets/Trek/pangarchulla/img1.jpeg";
import img10 from "./assets/Trek/alibedni/img1.jpg";
import img11 from "./assets/Trek/dyarabugyal/img1.jpeg";
import img12 from "./assets/hike/kunjapuri/img4.jpeg";
import rafting1 from "./assets/Rafting/img6.jpg";
import rafting2 from "./assets/Rafting/img7.jpg";
import rafting3 from "./assets/Rafting/img8.jpg";
import trekking_video from "./assets/videos/trekking.mp4";
import rafting_video from "./assets/videos/rafting.mp4";
import tour_video from "./assets/videos/tour.mp4";
import { useRef, useEffect } from "react";
import Footer from "./footer/Footer";
import WhyChooseUs from "./WhyChooseUs";
import TrustedReviews from "./TrustedReviews";
import { useReviews } from "./hooks/useReviews";
export default function Home() {
  const navigate = useNavigate();
  const trekking_ref = useRef(null);
  const rafting_ref = useRef(null);
  const tours_ref = useRef(null);
  const review_ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show_on_scroll);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const elements = document.querySelectorAll(`.${styles.indi_adventure_card}, .${styles.section_intro}, .${styles.trr_indi}`);
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToTrekking = () => {
    trekking_ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToRafting = () => {
    rafting_ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTours = () => {
    tours_ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToReviw = () => {
    review_ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { reviews: all_reviews } = useReviews();
  return (
    <>
      <Desktop_home
        title={"Discover The Untamed"}
        des={`Unleash your spirit in the\nheart of the mountains.`}
        scrollToTrekking={scrollToTrekking}
        scrollToReviw={scrollToReviw}
      />
      <div className={styles.section_intro}>
        <p className={styles.section_kicker}>Adventure Starts Here</p>
        <h2 className={styles.section_title}>
          Find your perfect <span>Escape</span>
        </h2>
        <span className={styles.section_divider}></span>
      </div>

      <div className={styles.trr_section}>
        <div className={styles.trr_indi} onClick={() => navigate("/trekking")}>
          <img src={trekking} className={styles.trr_img} alt="" />
          <div className={styles.trr_blur}>
            <div className={styles.trr_title}>Trekking</div>
            <div className={styles.trr_des}>
              Explore breathtaking trails and hidden gems with our guided treks.
              Perfect for nature lovers and thrill-seekers alike.
            </div>
          </div>
        </div>
        <div
          className={styles.trr_indi}
          onClick={() => navigate("/river-rafting")}
        >
          <img src={rafting} className={styles.trr_img} alt="" />
          <div className={styles.trr_blur}>
            <div className={styles.trr_title}>Rafting</div>
            <div className={styles.trr_des}>
              Ride the rapids with our thrilling rafting adventures. Perfect for
              adrenaline seekers and water lovers.
            </div>
          </div>
        </div>
        <div
          className={styles.trr_indi}
          onClick={() => navigate("/tours")}
        >
          <img src={img12} className={styles.trr_img} alt="" />
          <div className={styles.trr_blur}>
            <div className={styles.trr_title}>Tours</div>
            <div className={styles.trr_des}>
              Discover cultural, spiritual, and adventure tours that will leave you spellbound. Perfect for family and friends.
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section_intro} ${styles.section_intro_alt}`} ref={trekking_ref}>
        <p className={styles.section_kicker}>Curated Himalayan Experiences</p>
        <h2 className={styles.section_title}>
          Your Trekking Journey <span>Begins</span>
        </h2>
        <span className={styles.section_divider}></span>
      </div>

      <div className={styles.featured_section}>
        <div className={styles.featured_left}>
          <div className={styles.video_container}>
            <video
              className={styles.featured_video}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              poster="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop"
            >
              <source src={trekking_video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.featured_right}>
          <div className={styles.badge}>🏔️ MOUNTAIN ADVENTURES</div>
          <h3 className={styles.featured_title}>Experience the Himalayas</h3>
          <p className={styles.featured_description}>
            Embark on unforgettable trekking adventures through the majestic Himalayan ranges. From serene meadows to snow-capped peaks, discover trails that will take your breath away. Our expert guides will lead you through breathtaking landscapes, hidden valleys, and stunning vistas that showcase the raw beauty of nature.
          </p>
          <ul className={styles.features_list}>
            <li>Expert local guides</li>
            <li>Well-planned itineraries</li>
            <li>Safety-first approach</li>
            <li>Stunning viewpoints</li>
          </ul>
          <button 
            className={styles.featured_button}
            onClick={() => navigate("/trekking")}
          >
            <span>EXPLORE TREKS</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Hidden: Original trekking cards section */}
      <div className={styles.adventure_card_section} style={{display: 'none'}}>
        <div className={styles.indi_adventure_card}>
          <img src={img2} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>6 Days & 5 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Valley Of Flower Trek - A trail of flower, a journey to peace
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 10,999</span>
            <span className={styles.ad_cd_price_cut}>INR 12,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/valley-of-flower")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img4} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>3 Days & 2 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Chopta Chandrashilla – Serene forests, stunning summits
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 7,499</span>
            <span className={styles.ad_cd_price_cut}>INR 10,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/chopta-chandrashilla-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img3} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>6 Days & 5 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Brahmatal Trek - A Snowy Wonderland for Every Trekker.
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 9,999</span>
            <span className={styles.ad_cd_price_cut}>INR 12,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/brahmatal-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img5} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>8 Days & 7 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Gaumukh Tapovan Trek - To the Source of the Ganges and Beyond.
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 15,999</span>
            <span className={styles.ad_cd_price_cut}>INR 17,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/gaumukh-tapovan-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img6} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>6 Days & 5 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Kedarkantha Trek - Winter summit of pure adventure and beauty
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 8,999</span>
            <span className={styles.ad_cd_price_cut}>INR 10,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/kedarkantha-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img7} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>6 Days & 5 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Kuari Pass Trek - An alpine pass with views that steal your breath.
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 9,999</span>
            <span className={styles.ad_cd_price_cut}>INR 12,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/kuari-pass-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img8} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>12 Days & 11 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Panch Kedar Trek - A sacred journey in the Himalayas
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 34,999</span>
            <span className={styles.ad_cd_price_cut}>INR 37,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/panch-kedar-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img9} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>7 Days & 6 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Pangarchulla Peak Trek - Conquer a thrilling Himalayan summit
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 12,999</span>
            <span className={styles.ad_cd_price_cut}>INR 14,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/pangarchulla-peak-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img10} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>6 Days & 5 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Ali Bedni Bugyal Trek - witness the Himalayas up close
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 8,999</span>
            <span className={styles.ad_cd_price_cut}>INR 12,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/ali-bedni-bugyal-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img11} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>5 Days & 4 Nights</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Dayara Bugyal Trek - Step into endless meadows
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 9,999</span>
            <span className={styles.ad_cd_price_cut}>INR 12,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/dayara-bugyal-trek")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={img12} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>1 Day Hike</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Kunjapuri One Day Hike – Sunrise, Spirituality & Nature
          </div>
          {/* <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 2,499</span>
            <span className={styles.ad_cd_price_cut}>INR 4,000</span>
          </div> */}
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/kunjapuri-hike")}
            >
              ENQUIRE NOW
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section_intro} ${styles.section_intro_alt}`} ref={rafting_ref}>
        <p className={styles.section_kicker}>Water Thrills, Expert Guides</p>
        <h2 className={styles.section_title}>
          Ride the Rapids <span>With Us</span>
        </h2>
        <span className={styles.section_divider}></span>
      </div>

      <div className={styles.featured_section}>
        <div className={styles.featured_right}>
          <div className={styles.badge}>🌊 WATER SPORTS</div>
          <h3 className={styles.featured_title}>Thrill of the Rapids</h3>
          <p className={styles.featured_description}>
            Experience heart-pumping river rafting adventures on crystal-clear Himalayan rivers. Navigate through exhilarating rapids, enjoy peaceful stretches with stunning mountain views, and create memories that will last a lifetime. Perfect for both beginners seeking adventure and experienced thrill-seekers looking for an adrenaline rush.
          </p>
          <ul className={styles.features_list}>
            <li>Professional safety gear</li>
            <li>Certified instructors</li>
            <li>Multiple difficulty levels</li>
            <li>Scenic river routes</li>
          </ul>
          <button 
            className={styles.featured_button}
            onClick={() => navigate("/river-rafting")}
          >
            <span>BOOK RAFTING TRIPS</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
        <div className={styles.featured_left}>
          <div className={styles.video_container}>
            <video
              className={styles.featured_video}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              poster="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=450&fit=crop"
            >
              <source src={rafting_video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Hidden: Original rafting cards section */}
      <div className={styles.adventure_card_section} style={{display: 'none'}}>
        <div className={styles.indi_adventure_card}>
          <img src={rafting1} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>16 KM River Rafting</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Thrill-seekers, meet your 16 KM adventure challenge.
          </div>
          <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 1020</span>
            <span className={styles.ad_cd_price_cut}>INR 1,200</span>
          </div>
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/rafting?id=16")}
            >
              BOOK NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={rafting2} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>25 KM River Rafting</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Thrill-seekers, meet your 25 KM adventure challenge.
          </div>
          <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 2,020</span>
            <span className={styles.ad_cd_price_cut}>INR 2,400</span>
          </div>
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/rafting?id=25")}
            >
              BOOK NOW
            </div>
          </div>
        </div>

        <div className={styles.indi_adventure_card}>
          <img src={rafting3} className={styles.ad_cd_img} alt="" />
          <div className={styles.date_night_rating}>
            <div className={styles.date_night}>35 KM River Rafting</div>

            <div className={styles.dn_rating_Section}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"15px"}
                width={"15px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>

              <span className={styles.rating}>4.7</span>
              <span>(199)</span>
            </div>
          </div>
          <div className={styles.ad_cd_title}>
            Thrill-seekers, meet your 35 KM adventure challenge.
          </div>
          <div className={styles.ad_cd_price}>
            <span className={styles.ad_cd_price_main}>INR 3,520</span>
            <span className={styles.ad_cd_price_cut}>INR 4,200</span>
          </div>
          <div className={styles.ad_cd_book}>
            <a href="tel://+916396518778" className={styles.ad_cd_call}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"30px"}
                width={"30px"}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0376 5.31617L10.6866 6.4791C11.2723 7.52858 11.0372 8.90532 10.1147 9.8278C10.1147 9.8278 10.1147 9.8278 10.1147 9.8278C10.1146 9.82792 8.99588 10.9468 11.0245 12.9755C13.0525 15.0035 14.1714 13.8861 14.1722 13.8853C14.1722 13.8853 14.1722 13.8853 14.1722 13.8853C15.0947 12.9628 16.4714 12.7277 17.5209 13.3134L18.6838 13.9624C20.2686 14.8468 20.4557 17.0692 19.0628 18.4622C18.2258 19.2992 17.2004 19.9505 16.0669 19.9934C14.1588 20.0658 10.9183 19.5829 7.6677 16.3323C4.41713 13.0817 3.93421 9.84122 4.00655 7.93309C4.04952 6.7996 4.7008 5.77423 5.53781 4.93723C6.93076 3.54428 9.15317 3.73144 10.0376 5.31617Z"
                    fill="#059669"
                  ></path>{" "}
                </g>
              </svg>
            </a>
            <div
              className={styles.ad_cd_book_book}
              onClick={() => navigate("/rafting?id=35")}
            >
              BOOK NOW
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.section_intro} ${styles.section_intro_alt}`} ref={tours_ref}>
        <p className={styles.section_kicker}>Cultural & Spiritual Journeys</p>
        <h2 className={styles.section_title}>
          Explore Our <span>Tours</span>
        </h2>
        <span className={styles.section_divider}></span>
      </div>

      <div className={styles.featured_section}>
        <div className={styles.featured_left}>
          <div className={styles.video_container}>
            <video
              className={styles.featured_video}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              preload="metadata"
              poster="https://images.unsplash.com/photo-1526761122248-c31c93f8b2b9?w=800&h=450&fit=crop"
            >
              <source src={tour_video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={styles.featured_right}>
          <div className={styles.badge}>🏔️ CULTURAL TOURS</div>
          <h3 className={styles.featured_title}>Discover Hidden Gems</h3>
          <p className={styles.featured_description}>
            Embark on a journey through rich culture, spirituality, and stunning nature. From peaceful temple visits to scenic hikes, our carefully curated tours offer an authentic Himalayan experience that caters to all ages and preferences.
          </p>
          <ul className={styles.features_list}>
            <li>Local expert guides</li>
            <li>Cultural immersion</li>
            <li>Family-friendly options</li>
            <li>Comfortable transport</li>
          </ul>
          <button 
            className={styles.featured_button}
            onClick={() => navigate("/tours")}
          >
            <span>EXPLORE TOURS</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div ref={review_ref}>
        <TrustedReviews />
      </div>
      <WhyChooseUs />
      <Footer />
    </>
  );
}
