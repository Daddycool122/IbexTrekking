import styles from "./Footer.module.css";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.des_footer}>
      <div className={styles.name}>IBEX ICEAXE</div>
      <div className={styles.des}>
        Driven by Passion, Powered <br />
        by Adventure.
      </div>
      <div className={styles.info_Section}>
        <div className={styles.info_indi}>
          <div className={styles.info_title}>Contact</div>
          <a href="tel://+916396518778" className={styles.info_info}>
            +91-6396518778
          </a>
          <div className={styles.info_info}>Rishikesh Uttarakhand, 249193</div>
          <div className={styles.info_info}>contact@ibexiceaxe.com</div>
          <a href="/about" className={styles.info_info}>
            About us
          </a>
          <br />
          <a href="/contact-us" className={styles.info_info}>
            Contact us
          </a>
          <br />
          <a href="/terms-and-condition" className={styles.info_info}>
            Terms and Condition
          </a>
          <br />
          <a href="/privacy-policy" className={styles.info_info}>
            Privacy Policy
          </a>
          <br />
          <a href="/refund-and-cancellation" className={styles.info_info}>
            Refund and Cancellation
          </a>
        </div>
        <div>
          <div className={styles.info_title}>Treks</div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/valley-of-flower")}
          >
            Vallery of flower
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/chopta-chandrashilla-trek")}
          >
            Chopta Chandrashilla Trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/pangarchulla-peak-trek")}
          >
            Pangarchulla Peak Trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/panch-kedar-trek")}
          >
            Panch Kedar Trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/kedarkantha-trek")}
          >
            Kedarkantha Trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/kuari-pass-trek")}
          >
            Kuari Pass Trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/gaumukh-tapovan-trek")}
          >
            Gaumukh Tapovan Trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/gaumukh-tapovan-trek")}
          >
            Brahmatal Trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/ali-bedni-bugyal-trek")}
          >
            Ali bedni bugyal trek
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/dayara-bugyal-trek")}
          >
            Dayara Bugyal Trek
          </div>
        </div>
        <div>
          <div className={styles.info_title}>Rafting</div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/rafting?id=16")}
          >
            16 KM River Rafting
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/rafting?id=25")}
          >
            25 KM River Rafting
          </div>
          <div
            className={styles.info_info}
            onClick={() => navigate("/rafting?id=35")}
          >
            35 KM River Rafting
          </div>
        </div>
        {/* <div>
          <div className={styles.info_title}>Social</div>
          <div className={styles.info_info}>Facebook</div>
          <div className={styles.info_info}>Instagram</div>
        </div> */}
        {/* <div>
          <div className={styles.info_title}>Legal</div>
          <div className={styles.info_info}>Terms & conditions</div>
          <div className={styles.info_info}>Cancellation policy</div>
          <div className={styles.info_info}>Refund Policy</div>
        </div> */}
      </div>
      <div className={styles.cr}>Copyright © 2025 - All Rights Reserved</div>
    </div>
  );
}
