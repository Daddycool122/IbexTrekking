import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";

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
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h4a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="tel:+916396518778" className={styles.address_link}>+91-6396518778</a>
            </div>
            <div className={styles.contact_row}>
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <a href="mailto:contact@ibexiceaxe.com" className={styles.address_link}>contact@ibexiceaxe.com</a>
            </div>
            <div className={styles.contact_row}>
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="3" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
            <a href="/about" className={styles.info_info}>About Us</a>
            <a href="/contact-us" className={styles.info_info}>Contact Us</a>
            <a href="/terms-and-condition" className={styles.info_info}>Terms & Condition</a>
            <a href="/privacy-policy" className={styles.info_info}>Privacy Policy</a>
            <a href="/refund-and-cancellation" className={styles.info_info}>Refund Policy</a>
          </div>

          <div className={styles.link_column}>
            <div className={styles.info_title}>Top Treks</div>
            <div className={styles.info_info} onClick={() => navigate("/valley-of-flower")}>Valley of Flower</div>
            <div className={styles.info_info} onClick={() => navigate("/kedarkantha-trek")}>Kedarkantha Trek</div>
            <div className={styles.info_info} onClick={() => navigate("/chopta-chandrashilla-trek")}>Chopta Chandrashilla</div>
            <div className={styles.info_info} onClick={() => navigate("/brahmatal-trek")}>Brahmatal Trek</div>
            <div className={styles.info_info} onClick={() => navigate("/kuari-pass-trek")}>Kuari Pass Trek</div>
            <div className={styles.info_info} onClick={() => navigate("/panch-kedar-trek")}>Panch Kedar Trek</div>
          </div>

          <div className={styles.link_column}>
            <div className={styles.info_title}>More Treks & Rafting</div>
            <div className={styles.info_info} onClick={() => navigate("/ali-bedni-bugyal-trek")}>Ali Bedni Bugyal</div>
            <div className={styles.info_info} onClick={() => navigate("/dayara-bugyal-trek")}>Dayara Bugyal</div>
            <div className={styles.info_info} onClick={() => navigate("/pangarchulla-peak-trek")}>Pangarchulla Peak</div>
            <div className={styles.info_info} onClick={() => navigate("/gaumukh-tapovan-trek")}>Gaumukh Tapovan</div>
            <div className={styles.info_info} onClick={() => navigate("/rafting?id=16")}>16 KM River Rafting</div>
            <div className={styles.info_info} onClick={() => navigate("/rafting?id=35")}>35 KM River Rafting</div>
          </div>
        </div>
      </div>

      <div className={styles.cr}>
        <span>Copyright © 2025 IBEX ICEAXE. All Rights Reserved.</span>
      </div>
    </div>
  );
}
