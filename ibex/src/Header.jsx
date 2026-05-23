import styles from "./Header.module.css";
import logo from "./assets/home/logo.PNG";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [open_options, setOpen_options] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <header className={`${styles.header} ${(scrolled || !isHome) ? styles.scrolled : ""}`}>
        <div className={styles.main_header}>
          <div className={styles.logo_section} onClick={handleLogoClick}>
            <div className={styles.logo_circle}>
              <img src={logo} alt="Logo" className={styles.logo} />
            </div>
            <div className={styles.logo_name}>IBEX ICEAXE</div>
          </div>

          <nav className={styles.links_section}>
            <div className={styles.links} onClick={() => navigate("/")}>Home</div>
            <div className={styles.links} onClick={() => navigate("/tours")}>Tours</div>
            <div className={styles.links} onClick={() => navigate("/trekking")}>Treks</div>
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

      {!isHome && <div className={styles.header_spacer} />}
    </>
  );
}
