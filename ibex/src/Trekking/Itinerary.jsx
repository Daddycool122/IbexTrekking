import styles from "./Itinerary.module.css";
import Para from "./Para";
import img1 from "../assets/Trek/Valley_of_flower/img1.jpg";
import { useState } from "react";
export default function Itinerary({ all_days, info }) {
  const [days, setDays] = useState(all_days);
  const [selected_day, setSelected_day] = useState(0);
  return (
    <div className={styles.whole_itonerary}>
      <div className={styles.days_section}>
        {days.map((item, index) => {
          return (
            <div
              key={`day-${item}-${index}`}
              className={
                selected_day == index
                  ? styles.indi_day_selected
                  : styles.indi_day
              }
              onClick={() => {
                setSelected_day(index);
              }}
            >
              Day {item}
            </div>
          );
        })}
        {/* <div className={styles.indi_day}>Day 2</div>
        <div className={styles.indi_day}>Day 3</div>
        <div className={styles.indi_day}>Day 4</div> */}
      </div>

      {info.map((item, index) => {
        if (index == selected_day) {
          return (
            <div key={`iti-${index}`} className={styles.indi_iti}>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.para}>{item.para1}</div>
              <div className={styles.para}>{item.para2}</div>
              <div className={styles.img_Section}>
                <img src={item.img} className={styles.img} alt="" />
              </div>
              {/* <div className={styles.title2}>What we will do in govind ghat</div>
        <div className={styles.ul_section}>
          <ul>
            <li className={styles.li}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              repellat doloribus possimus eos minima quia sit eius consectetur
              facilis minus vitae nisi molestiae, corrupti amet distinctio
              aspernatur id aliquid dolores.
            </li>
            <li className={styles.li}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
              repellat doloribus possimus eos minima quia sit eius consectetur
              facilis minus vitae nisi molestiae, corrupti amet distinctio
              aspernatur id aliquid dolores.
            </li>
          </ul>
        </div> */}
            </div>
          );
        }
      })}
    </div>
  );
}
