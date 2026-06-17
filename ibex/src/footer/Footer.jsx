import styles from "./Footer.module.css";
import { useNavigate, Link } from "react-router-dom";
import team1 from "../team-member-1.webp";
import team2 from "../team-member-2.webp";
import rating_img2 from "../assets/Rating/trekker-review-2.jpg";
import rating_img4 from "../assets/Rating/trekker-review-4.jpg";
import rating_img5 from "../assets/Rating/trekker-review-5.jpg";
import { motion } from "framer-motion";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.des_footer}>
      <div className={styles.watermark}>IBEX ICEAXE</div>

      <div className={styles.footer_content}>
        <div className={styles.brand_section}>
          <div className={styles.name}>IBEX ICEAXE</div>
          <div className={styles.des}>
            Driven by Passion, Powered by Adventure. Explore the majestic Himalayas with our meticulously crafted trekking and rafting experiences.
          </div>
          <div className={styles.contact_details}>
            <div className={styles.contact_row}>
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h4a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="tel:+916396518778" className={styles.address_link}>+91-6396518778</a>
            </div>
            <div className={styles.contact_row}>
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="mailto:contact@ibexiceaxe.com" className={styles.address_link}>contact@ibexiceaxe.com</a>
            </div>
            <div className={styles.contact_row}>
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="3" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="https://maps.app.goo.gl/MVANZi9FHW4nRoDH9?g_st=iwb" target="_blank" rel="noreferrer" className={styles.address_link}>
                Ibex Iceaxe, Ghugtani Talli, Secret Waterfall Rd, near DC Hills Hotel, Tapovan, Rishikesh, Uttarakhand 249192
              </a>
            </div>
          </div>
          <div className={styles.social_links}>
            <a href="https://www.facebook.com/share/1EbbLv3GhJ/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className={styles.social_icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ibex.iceaxe?igsh=MW42MjhicnNtaThoYw==" target="_blank" rel="noreferrer" className={styles.social_icon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a href="https://wa.me/916396518778?text=Hi%20Ibex%20Ice%20axe" target="_blank" rel="noreferrer" className={styles.social_icon}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className={styles.links_grid}>
          <div className={styles.link_column}>
            <div className={styles.info_title}>Quick Links</div>
            <Link to="/about" className={styles.info_info} style={{textDecoration: "none"}}>About Us</Link>
            <Link to="/contact-us" className={styles.info_info} style={{textDecoration: "none"}}>Contact Us</Link>
            <Link to="/terms-and-condition" className={styles.info_info} style={{textDecoration: "none"}}>Terms & Condition</Link>
            <Link to="/privacy-policy" className={styles.info_info} style={{textDecoration: "none"}}>Privacy Policy</Link>
            <Link to="/refund-and-cancellation" className={styles.info_info} style={{textDecoration: "none"}}>Refund Policy</Link>
          </div>

          <div className={styles.link_column}>
            <div className={styles.info_title}>Top Treks</div>
            <Link to="/valley-of-flower" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Valley of Flower</Link>
            <Link to="/kedarkantha-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Kedarkantha Trek</Link>
            <Link to="/chopta-chandrashilla-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Chopta Chandrashilla</Link>
            <Link to="/brahmatal-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Brahmatal Trek</Link>
            <Link to="/kuari-pass-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Kuari Pass Trek</Link>
            <Link to="/ali-bedni-bugyal-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Ali Bedni Bugyal</Link>
            <Link to="/dayara-bugyal-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Dayara Bugyal</Link>
            <Link to="/pangarchulla-peak-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Pangarchulla Peak</Link>
            <Link to="/gaumukh-tapovan-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Gaumukh Tapovan</Link>
          </div>

          <div className={styles.link_column}>
            <div className={styles.info_title}>Rafting</div>
            <Link to="/rafting?id=16" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>16 KM River Rafting</Link>
             <Link to="/rafting?id=25" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>25 KM River Rafting</Link>
            <Link to="/rafting?id=35" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>35 KM River Rafting</Link>
          </div>

          <div className={styles.link_column}>
            <div className={styles.info_title}>Tours</div>
            <Link to="/panch-kedar-trek" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Panch Kedar Tour</Link>
            <Link to="/kunjapuri-hike" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Kunjapuri One Day Hike</Link>
            <Link to="/adi-kailash-tour" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Adi Kailash & Om Parvat</Link>
            <Link to="/chardham-yatra-2026" className={styles.info_info} style={{textDecoration: "none", color: "inherit", display: "block"}}>Chardham Yatra 2026</Link>
          </div>
        </div>

        </div>

      {/* Talk to Experts Section */}
      <div className={styles.experts_section}>
        <h2 className={styles.experts_heading}>Talk to Experts</h2>
        <div className={styles.experts_grid}>
          <div className={styles.expert_card}>
            <img src={team2} alt="Team Member" />
            <div className={styles.expert_info}>
              <h3>Paras Rawat</h3>
              <p className={styles.phone_number}>+91-6396518778</p>
              <div className={styles.expert_icons}>
                <a href="https://wa.me/916396518778" target="_blank" rel="noreferrer" className={styles.expert_icon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </a>
                <a href="tel:+916396518778" className={styles.expert_icon}>
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h4a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={styles.expert_card}>
            <img src={team1} alt="Team Member" />
            <div className={styles.expert_info}>
              <h3>Akshay Pandey</h3>
              <p className={styles.phone_number}>+91-8006861613</p>
              <div className={styles.expert_icons}>
                <a href="https://wa.me/918006861613" target="_blank" rel="noreferrer" className={styles.expert_icon}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </a>
                <a href="tel:+918006861613" className={styles.expert_icon}>
                  <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                    <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h4a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.cr}>
        <span>Copyright © 2025 IBEX ICEAXE. All Rights Reserved.</span>
        
        <motion.div
          className={styles.trust_box_footer}
          onClick={() => navigate("/reviews")}
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          <div className={styles.tb_images_section}>
            <img src={rating_img4} alt="Alibedni Trek" className={styles.trust_imgs_1} />
            <img src={rating_img5} alt="Alibedni Trek" className={styles.trust_imgs_2} />
            <img src={rating_img2} alt="Img" className={styles.trust_imgs_3} />
          </div>
          <div className={styles.trust_text_section}>
            <div className={styles.trust_line}>
              Trusted by 500+ <br /> Happy Adventurers
            </div>
            <div className={styles.trust_rating}>
              4.9
              <svg viewBox="0 0 24 24" fill="none" className={styles.star_svg_section}>
                <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#FBBF24" />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
