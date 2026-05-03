import styles from "./Desktop_home.module.css";
import rating_img2 from "../assets/Rating/img2.jpg";
import rating_img4 from "../assets/Rating/img4.jpg";
import rating_img5 from "../assets/Rating/img5.jpg";
import logo from "../assets/home/logo.jpeg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Desktop_home({
  title,
  des,
  scrollToTrekking,
  scrollToReviw,
}) {
  const [open_options, setOpen_options] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Majestic online nature image
  const bgImg = "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2600&auto=format&fit=crop";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
        <div className={styles.main_header}>
          <div className={styles.logo_section} onClick={() => navigate("/")}>
            <div className={styles.logo_circle}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.logo_name}>IBEX ICEAXE</div>
          </div>

          <nav className={styles.links_section}>
            <div className={styles.links} onClick={() => navigate("/")}>Home</div>
            <div className={styles.links} onClick={() => navigate("/tours")}>Tours</div>
            <div className={styles.links} onClick={() => navigate("/trekking")}>Trekking</div>
            <div className={styles.links} onClick={() => navigate("/river-rafting")}>Rafting</div>
          </nav>

          <a href="tel://+916396518778" className={styles.contact_btn}>
            Contact Us
          </a>

          <div
            className={styles.hamburger}
            onClick={() => setOpen_options(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" width="32" height="32">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open_options && (
          <motion.div
            className={styles.main_options}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className={styles.main_options1} onClick={() => setOpen_options(false)}></div>
            <motion.div
              className={styles.main_options2}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className={styles.close_btn} onClick={() => setOpen_options(false)}>
                ✕
              </div>
              <div className={styles.options_title}>Our Treks</div>
              {[
                { name: 'Valley Of Flower', path: '/valley-of-flower' },
                { name: 'Chopta Chandrashilla', path: '/chopta-chandrashilla-trek' },
                { name: 'Pangarchulla Peak', path: '/pangarchulla-peak-trek' },
                { name: 'Kuari Pass', path: '/kuari-pass-trek' },
                { name: 'Gaumukh Tapovan', path: '/gaumukh-tapovan-trek' },
                { name: 'Brahmatal', path: '/brahmatal-trek' },
                { name: 'Kedarkantha', path: '/kedarkantha-trek' },
                { name: 'Dayara Bugyal', path: '/dayara-bugyal-trek' },
                { name: 'Ali Bedni Bugyal', path: '/ali-bedni-bugyal-trek' },
              ].map(trek => (
                <div key={trek.name} className={styles.options} onClick={() => { setOpen_options(false); navigate(trek.path); }}>
                  {trek.name}
                </div>
              ))}

              <div className={styles.options_title} style={{ marginTop: 20 }}>Tours</div>
              {[
                { name: 'Panch Kedar', path: '/panch-kedar-trek' },
                { name: 'Kunjapuri Hike', path: '/kunjapuri-hike' }
              ].map(tour => (
                <div key={tour.name} className={styles.options} onClick={() => { setOpen_options(false); navigate(tour.path); }}>
                  {tour.name}
                </div>
              ))}

              <div className={styles.options_title} style={{ marginTop: 20 }}>Rafting</div>
              {[16, 25, 35].map(km => (
                <div key={km} className={styles.options} onClick={() => { setOpen_options(false); navigate(`/rafting?id=${km}`); }}>
                  {km} KM River Rafting
                </div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={styles.main_intro_section_home}>
        <motion.div
          className={styles.main_img_container}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          <img src={bgImg} alt="Nature Background" className={styles.main_img} />
        </motion.div>

        <div className={styles.dark_section}></div>

        <div className={styles.content_section_home}>
          <div className={styles.text_content_home}>
            <motion.div
              className={styles.main_name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {title || "Discover The Untamed"}
            </motion.div>

            <motion.div
              className={styles.tag_line}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
            >
              {des || "Ride Waves, Climb Peaks,\nExplore"}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.book_now_btn} onClick={scrollToTrekking}>
                <span className={styles.book_now_text}>Start Your Adventure</span>
                <div className={styles.book_now_arrow}>
                  <svg viewBox="0 0 24 24" fill="none" width="20px" height="20px">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className={styles.trust_box_home}
            onClick={scrollToReviw}
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className={styles.tb_images_section}>
              <img src={rating_img4} alt="" className={styles.trust_imgs_1} />
              <img src={rating_img5} alt="" className={styles.trust_imgs_2} />
              <img src={rating_img2} alt="" className={styles.trust_imgs_3} />
            </div>
            <div className={styles.trust_line}>
              Trusted by 500+ <br />
              Happy Adventurers
            </div>
            <div className={styles.trust_rating}>
              4.9
              <svg viewBox="0 0 24 24" fill="none" className={styles.star_svg_section}>
                <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#FBBF24" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
