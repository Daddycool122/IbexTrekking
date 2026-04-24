import styles from "./Videos.module.css";
import img1 from "../assets/Trek/Valley_of_flower/img1.jpg";
import { useState } from "react";
export default function Videos({ photos }) {
  const [open_img, setOpen_img] = useState(false);
  const [selected_img, setSelected_img] = useState("");
  return (
    <>
      <div className={styles.whole_photo_section}>
        {photos.map((item, index) => {
          return (
            <div
              key={`${item}-${index}`}
              className={styles.indi_photo_section}
              onClick={() => {
                setSelected_img(item);
                setOpen_img(true);
              }}
            >
              <video
                src={item}
                muted
                controls
                autoPlay
                alt=""
                preload="metadata"
                className={styles.indi_photo}
                playsInline
                // onClick={() => {
                //   setSelected_img("");
                //   setOpen_img(true);
                // }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
