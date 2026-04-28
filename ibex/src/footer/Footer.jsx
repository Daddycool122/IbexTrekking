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
              <span>+91-6396518778</span>
            </div>
            <div className={styles.contact_row}>
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 6l-10 7L2 6" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>contact@ibexiceaxe.com</span>
            </div>
            <div className={styles.contact_row}>
              <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="10" r="3" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>Rishikesh Uttarakhand, 249193</span>
            </div>
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
