import styles from "./Form.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function FormNP({ open_form, setOpen_form, name, price }) {
  const [p_name, setPName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [no_of_people, setNo_of_people] = useState("");
  const [date, setDate] = useState("");
  const [total_amount, setTotal_amount] = useState(0);
  const [grand_total, setGrand_total] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.main_form}>
        <div className={styles.title}>Book {name}</div>
        <div className={styles.tag_line}>
          Or call at{" "}
          <a className="orange" href="tel://+916396518778">
            +916396518778
          </a>{" "}
          to book instantly
        </div>
        <div className={styles.input_section}>
          <input
            type="text"
            value={p_name}
            onInput={(e) => {
              setPName(e.target.value);
            }}
            className={styles.input}
            placeholder="Your Name"
          />
        </div>
        <div className={styles.input_section}>
          <input
            type="email"
            className={styles.input}
            placeholder="Your Email"
            value={email}
            onInput={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={styles.input_section}>
          <input
            type="number"
            className={styles.input}
            placeholder="Your Contact Number"
            value={contact}
            onInput={(e) => {
              setContact(e.target.value);
            }}
          />
        </div>
        {/* <div className={styles.input_section}>
          <input
            type="number"
            className={styles.input}
            placeholder="Number of people"
            value={no_of_people}
            onInput={(e) => {
              setNo_of_people(e.target.value);
            }}
          />
        </div> */}
        {/* <div className={styles.input_section}>
          <label htmlFor="dod_d" className={styles.input}>
            Date of departure
          </label>
          <input
            id="dod_d"
            type="date"
            className={styles.input}
            placeholder="Date of departure"
            hidden
            value={date}
            onInput={(e) => {
              setDate(e.target.value);
            }}
          /> */}
        {/* </div> */}

        <div className={styles.btn}>Enquire now!</div>
      </div>
      {open_form ? (
        <div className={styles.mobile_form}>
          <div
            className={styles.cross_section}
            onClick={() => {
              setOpen_form(false);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              height={"18px"}
              width={"18px"}
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
                  d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"
                  fill="#fff"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className={styles.title}>Book {name}</div>
          <div className={styles.tag_line}>
            Or call at{" "}
            <a className="orange" href="tel://+916396518778">
              +916396518778
            </a>{" "}
            to book instantly
          </div>
          <div className={styles.input_section}>
            <input
              type="text"
              className={styles.input}
              placeholder="Your Name"
              value={p_name}
              onInput={(e) => {
                setPName(e.target.value);
              }}
            />
          </div>
          <div className={styles.input_section}>
            <input
              type="email"
              className={styles.input}
              placeholder="Your Email"
              value={email}
              onInput={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={styles.input_section}>
            <input
              type="number"
              className={styles.input}
              placeholder="Your Contact Number"
              value={contact}
              onInput={(e) => {
                setContact(e.target.value);
              }}
            />
          </div>
          {/* <div className={styles.input_section}>
            <input
              type="number"
              className={styles.input}
              placeholder="Number of people"
              value={no_of_people}
              onInput={(e) => {
                setNo_of_people(e.target.value);
              }}
            />
          </div> */}
          {/* <div className={styles.input_section}>
            <label htmlFor="dod" className={styles.input}>
              Date of departure
            </label>
            <input
              id="dod"
              type="date"
              className={styles.input}
              placeholder="Date of departure"
              hidden
              value={date}
              onInput={(e) => {
                setDate(e.target.value);
              }}
            />
          </div> */}

          {/* {no_of_people != "" ? (
            <>
              <div className={styles.mobile_pay_summary}>
                <div>Subtotal</div>
                <div>
                  ₹{price.toLocaleString()} x {no_of_people} ={" "}
                  {(price * no_of_people).toLocaleString()}
                </div>
              </div>
              <div className={styles.mobile_pay_summary}>
                <div>GST(5%)</div>
                <div>
                  ₹{((price * no_of_people * 5) / 100).toLocaleString()}
                </div>
              </div>
              <div className={styles.mobile_pay_summary}>
                <div>Grand Total</div>
                <div>
                  ₹
                  {(
                    (price * no_of_people * 5) / 100 +
                    price * no_of_people
                  ).toLocaleString()}
                </div>
              </div>
            </>
          ) : null} */}
          {/* <div className={styles.ta_section}>
            <textarea
              className={styles.ta}
              placeholder="Any Message for us"
            ></textarea>
          </div> */}

          {/* <div className={styles.btn}>Enquiry</div> */}

          <div className={styles.btn}>Enquire now!</div>
        </div>
      ) : null}
    </>
  );
}
