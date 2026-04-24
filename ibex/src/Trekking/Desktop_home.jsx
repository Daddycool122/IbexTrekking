import styles from "./Desktop_intro_section.module.css";
import rating_img1 from "../assets/Rating/img1.jpg";
import rating_img2 from "../assets/Rating/img2.jpg";
import rating_img3 from "../assets/Rating/img3.jpg";
import rating_img4 from "../assets/Rating/img4.jpg";
import rating_img5 from "../assets/Rating/img5.jpg";
import logo from "../assets/home/logo.jpeg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Desktop_home({
  img,
  title,
  des,
  scrollToTrekking,
  scrollToReview,
}) {
  const [open_options, setOpen_options] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.main_intro_section_home}>
        <img src={img} alt="" className={styles.main_img} />
        <div className={styles.dark_section}></div>
        <header className={styles.header}>
          <div className={styles.main_header}>
            <div className={styles.logo_section}>
              <div className={styles.logo_circle}>
                <img src={logo} alt="" className={styles.logo} />
              </div>
              <div className={styles.logo_name}>IBEX ICEAXE</div>
            </div>
            <div className={styles.links_section}>
              <div className={styles.links} onClick={() => navigate("/")}>
                Home
              </div>
              <div
                className={styles.links}
                onClick={() => navigate("/trekking")}
              >
                Trekking
              </div>
              <div
                className={styles.links}
                onClick={() => navigate("/river-rafting")}
              >
                Rafting
              </div>
            </div>
            {/* <div className={styles.login_section}>Login</div> */}
            <div className={styles.login_section_}></div>
          </div>
        </header>

        <header className={styles.header_mobile}>
          <div className={styles.main_header_mobile}>
            <div className={styles.logo_section}>
              <div className={styles.logo_circle}>
                <img src={logo} alt="" className={styles.logo} />
              </div>
            </div>
            <div className={styles.logo_name}>IBEX ICEAXE</div>
            <div className={styles.logo_section}>
              <div
                className={styles.logo_circle}
                onClick={() => {
                  setOpen_options(true);
                }}
              >
                <svg
                  viewBox="0 -0.5 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={"35px"}
                  width={"35px"}
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
                      d="M6.5 11.75C6.08579 11.75 5.75 12.0858 5.75 12.5C5.75 12.9142 6.08579 13.25 6.5 13.25V11.75ZM18.5 13.25C18.9142 13.25 19.25 12.9142 19.25 12.5C19.25 12.0858 18.9142 11.75 18.5 11.75V13.25ZM6.5 15.75C6.08579 15.75 5.75 16.0858 5.75 16.5C5.75 16.9142 6.08579 17.25 6.5 17.25V15.75ZM18.5 17.25C18.9142 17.25 19.25 16.9142 19.25 16.5C19.25 16.0858 18.9142 15.75 18.5 15.75V17.25ZM6.5 7.75C6.08579 7.75 5.75 8.08579 5.75 8.5C5.75 8.91421 6.08579 9.25 6.5 9.25V7.75ZM18.5 9.25C18.9142 9.25 19.25 8.91421 19.25 8.5C19.25 8.08579 18.9142 7.75 18.5 7.75V9.25ZM6.5 13.25H18.5V11.75H6.5V13.25ZM6.5 17.25H18.5V15.75H6.5V17.25ZM6.5 9.25H18.5V7.75H6.5V9.25Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </header>

        {open_options ? (
          <div className={styles.main_options}>
            <div
              className={styles.main_options1}
              onClick={() => {
                setOpen_options(false);
              }}
            ></div>
            <div className={styles.main_options2}>
              <div className={styles.options_title}>Our Treks</div>
              <div
                className={styles.options}
                onClick={() => navigate("/valley-of-flower")}
              >
                Valley Of Flower
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/chopta-chandrashilla-trek")}
              >
                Chopta Chandrashilla
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/pangarchulla-peak-trek")}
              >
                Pangarchulla Peak
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/panch-kedar-trek")}
              >
                Panch Kedar
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/kuari-pass-trek")}
              >
                Kuari Pass
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/gaumukh-tapovan-trek")}
              >
                Gaumukh Tapovan
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/brahmatal-trek")}
              >
                Brahmatal
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/kedarkantha-trek")}
              >
                Kedarkantha
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/dayara-bugyal-trek")}
              >
                Dayara Bugyal
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/ali-bedni-bugyal-trek")}
              >
                Ali Bedni Bugyal
              </div>
              <div className={styles.options_title}>Hike</div>
              <div
                className={styles.options}
                onClick={() => navigate("/kunjapuri-hike")}
              >
                Kunjapuri Hike
              </div>
              <div className={styles.options_title}>Rafting</div>
              <div
                className={styles.options}
                onClick={() => navigate("/rafting?id=16")}
              >
                16 KM River Rafting
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/rafting?id=25")}
              >
                25 KM River Rafting
              </div>
              <div
                className={styles.options}
                onClick={() => navigate("/rafting?id=35")}
              >
                35 KM River Rafting
              </div>
            </div>
          </div>
        ) : null}

        <div className={styles.content_section_home}>
          <div className={styles.main_name}>{title}</div>
          <div className={styles.tag_line}>
            Ride Waves, Climb Peaks, <br />
            Explore
          </div>
          <div
            className={styles.book_now_btn}
            onClick={() => {
              scrollToTrekking();
            }}
          >
            <div className={styles.book_now_arrow}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"28px"}
                width={"28px"}
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
                    d="M6 12H18M18 12L13 7M18 12L13 17"
                    stroke="#fff"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className={styles.book_now_text}>Trekking</div>
          </div>
          <div
            className={styles.trust_box_home}
            onClick={() => {
              scrollToReview();
            }}
          >
            <div className={styles.tb_images_section}>
              <img src={rating_img4} alt="" className={styles.trust_imgs_1} />
              <img src={rating_img5} alt="" className={styles.trust_imgs_2} />
              <img src={rating_img2} alt="" className={styles.trust_imgs_3} />
            </div>
            <div className={styles.trust_line}>
              Trusted by 200+ Happy
              <br />
              Clients
            </div>
            <div className={styles.trust_rating}>
              4.9
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height={"26px"}
                width={"26px"}
                className={styles.star_svg_section}
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
                    d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                    fill="#F37002"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>

          {/* <div className={styles.slot_section}>
            <div className={styles.slot_arrow_section}>
              <div className={styles.slot_indi_arrow}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={"24px"}
                  width={"24px"}
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
                      d="M6 12H18M6 12L11 7M6 12L11 17"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <div className={styles.slot_indi_arrow}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  height={"24px"}
                  width={"24px"}
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
                      d="M6 12H18M18 12L13 7M18 12L13 17"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className={styles.slot_slot_section}>
              <div className={styles.indi_slot}>
                <div className={styles.indi_slot_img_section}>
                  <img src={img1} alt="" className={styles.indi_slot_img} />
                </div>
                <div className={styles.slot_content_section}>
                  <div className={styles.slot_date}>20th May 2025</div>
                  <div className={styles.slot_details}>
                    Wander through a valley where every step blooms with color
                    and serenity.
                  </div>
                </div>
              </div>
              <div className={styles.indi_slot}>
                <div className={styles.indi_slot_img_section}>
                  <img src={img1} alt="" className={styles.indi_slot_img} />
                </div>
                <div className={styles.slot_content_section}>
                  <div className={styles.slot_date}>20th May 2025</div>
                  <div className={styles.slot_details}>
                    Wander through a valley where every step blooms with color
                    and serenity.
                  </div>
                </div>
              </div>
              <div className={styles.indi_slot}>
                <div className={styles.indi_slot_img_section}>
                  <img src={img1} alt="" className={styles.indi_slot_img} />
                </div>
                <div className={styles.slot_content_section}>
                  <div className={styles.slot_date}>20th May 2025</div>
                  <div className={styles.slot_details}>
                    Wander through a valley where every step blooms with color
                    and serenity.
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* <div className={styles.slots_mobile}>
        <div className={styles.mobile_indi_slot}>
          <div className={styles.mis_top_section}>
            <div className={styles.mts_date}>20th May 2025</div>
            <div className={styles.mts_des}>
              Wander through a valley where every step blooms with color and
              serenity.
            </div>
          </div>
          <div className={styles.mis_img_section}>
            <img src={img1} className={styles.mobile_slot_img} alt="" />
          </div>
          <div className={styles.mis_btn_section}>Book Now</div>
        </div>
        <div className={styles.mobile_indi_slot}>
          <div className={styles.mis_top_section}>
            <div className={styles.mts_date}>20th May 2025</div>
            <div className={styles.mts_des}>
              Wander through a valley where every step blooms with color and
              serenity.
            </div>
          </div>
          <div className={styles.mis_img_section}>
            <img src={img1} className={styles.mobile_slot_img} alt="" />
          </div>
          <div className={styles.mis_btn_section}>Book Now</div>
        </div>
        <div className={styles.mobile_indi_slot}>
          <div className={styles.mis_top_section}>
            <div className={styles.mts_date}>20th May 2025</div>
            <div className={styles.mts_des}>
              Wander through a valley where every step blooms with color and
              serenity.
            </div>
          </div>
          <div className={styles.mis_img_section}>
            <img src={img1} className={styles.mobile_slot_img} alt="" />
          </div>
          <div className={styles.mis_btn_section}>Book Now</div>
        </div>
        <div className={styles.mobile_indi_slot}>
          <div className={styles.mis_top_section}>
            <div className={styles.mts_date}>20th May 2025</div>
            <div className={styles.mts_des}>
              Wander through a valley where every step blooms with color and
              serenity.
            </div>
          </div>
          <div className={styles.mis_img_section}>
            <img src={img1} className={styles.mobile_slot_img} alt="" />
          </div>
          <div className={styles.mis_btn_section}>Book Now</div>
        </div>
      </div> */}
    </>
  );
}
