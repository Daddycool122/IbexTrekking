import styles from "./Header.module.css";
import logo from "./assets/home/logo.PNG";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PreviewGrid from "./components/PreviewGrid";
import { TREKS, TOURS, RAFTING, MENU_POSITIONS } from "./constants/navigationData";

export default function Header() {
  const [open_options, setOpen_options] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
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

  const handlePreviewItemClick = () => {
    setHoveredMenu(null);
  };

  return (
    <>
      <header className={`${styles.header} ${(scrolled || !isHome) ? styles.scrolled : ""}`}>
        <div className={styles.main_header}>
          <div className={styles.logo_section} onClick={handleLogoClick}>
            <div className={styles.logo_circle}>
              <img src={logo} alt="IBEX ICEAXE Logo" className={styles.logo} />
            </div>
            <div className={styles.logo_name}>IBEX ICEAXE</div>
          </div>

          <nav className={styles.links_section} role="navigation" aria-label="Main navigation">
            <div className={styles.links} onClick={() => navigate("/")}>
              Home
            </div>
            <div 
              className={styles.links} 
              onClick={() => navigate("/tours")}
              onMouseEnter={() => setHoveredMenu('tours')}
              onMouseLeave={() => setHoveredMenu(null)}
              role="button"
              tabIndex={0}
              aria-expanded={hoveredMenu === 'tours'}
              aria-haspopup="menu"
            >
              Tours
            </div>
            <div 
              className={styles.links} 
              onClick={() => navigate("/trekking")}
              onMouseEnter={() => setHoveredMenu('treks')}
              onMouseLeave={() => setHoveredMenu(null)}
              role="button"
              tabIndex={0}
              aria-expanded={hoveredMenu === 'treks'}
              aria-haspopup="menu"
            >
              Treks
            </div>
            <div 
              className={styles.links} 
              onClick={() => navigate("/river-rafting")}
              onMouseEnter={() => setHoveredMenu('rafting')}
              onMouseLeave={() => setHoveredMenu(null)}
              role="button"
              tabIndex={0}
              aria-expanded={hoveredMenu === 'rafting'}
              aria-haspopup="menu"
            >
              Rafting
            </div>
          </nav>

          {/* Hover Preview */}
          <AnimatePresence>
            {hoveredMenu && (
              <motion.div
                className={styles.hoverPreview}
                style={{
                  left: MENU_POSITIONS[hoveredMenu] || '0px'
                }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredMenu(hoveredMenu)}
                onMouseLeave={() => setHoveredMenu(null)}
                role="menu"
              >
                {hoveredMenu === 'treks' && (
                  <PreviewGrid 
                    items={TREKS}
                    title="Popular Treks"
                    onItemClick={handlePreviewItemClick}
                    type="trek"
                  />
                )}
                {hoveredMenu === 'tours' && (
                  <PreviewGrid 
                    items={TOURS}
                    title="Our Tours"
                    onItemClick={handlePreviewItemClick}
                    type="tour"
                  />
                )}
                {hoveredMenu === 'rafting' && (
                  <PreviewGrid 
                    items={RAFTING}
                    title="River Rafting"
                    onItemClick={handlePreviewItemClick}
                    type="rafting"
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <a href="tel://+916396518778" className={styles.contact_btn}>
            Contact Us
          </a>

          <div
            className={styles.hamburger}
            onClick={() => setOpen_options(true)}
            role="button"
            tabIndex={0}
            aria-label="Open navigation menu"
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setOpen_options(true);
              }
            }}
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
