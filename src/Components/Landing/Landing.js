import React from "react";
import { OurBestSellers } from "./OurBestSellers";
// import "./landing.css";
import "./newlanding.css";
import { Caro } from "./Caro";
import { Testimonials } from "./Testimonials";
import { Contactus } from "./Contactus";
import { Footer } from "../Footer/Footer";
import img1 from "./3_ 1.png";
import img2 from "./4 1.png";
import img3 from "./6.png";
import img4 from "./12eeeab4-9c1e-4b34-bc15-1618ca2060e7-removebg-preview 1.png";
import "./TestiCaro.css";
import img5 from "./357afd91-05da-4ece-8b27-2709123848ab-removebg-preview 1.png";
import img6 from "./12eeeab4-9c1e-4b34-bc15-1618ca2060e7-removebg-preview 1.png";
import img7 from "./77b8b7bf-4a7e-4508-a551-8f2209ad58cf-removebg-preview 1.png";

export const Landing = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="landsec1">
        <Caro />
      </div>

      <div className="landbgdiv">
        <span className="landtit">@ The Design House</span>
        <div className="landiconsdiv">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "150px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <svg width="84" height="80" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="80" rx="22" fill="#4C2A76" />
              <path
                d="M30.2543 55.975C32.0409 55.975 34.5223 58.2354 36.3172 58.2354C38.4906 58.2354 40.5155 55.975 42.3809 55.975C44.2463 55.975 46.2722 58.2354 48.4447 58.2354C50.2413 58.2354 52.7209 55.975 54.5103 55.975C56.0053 55.975 58.4932 56.9396 59.7664 57.5049C59.2027 47.3978 51.664 40.7666 49.2376 35.9463H49.7152V35.0629V31.5296V30.6463H49.1569C50.3165 27.6041 52.4899 23.5699 51.4495 19.4076C51.4495 19.4076 51.2222 19.4085 50.839 19.4288V12H49.7243V19.5233C47.7654 19.7362 44.558 20.3519 42.3809 22.1415C40.2038 20.351 36.9946 19.7362 35.0357 19.5233V12H33.9238V19.4297C33.5415 19.4094 33.3133 19.4085 33.3133 19.4085C32.271 23.5708 34.4453 27.6041 35.6058 30.6472H35.0458V31.5305V35.0638V35.9472H35.5243C33.0988 40.7675 25.5656 47.3996 25 57.5049C26.2742 56.9378 28.7574 55.975 30.2543 55.975ZM48.7994 31.64V34.9525H47.5601V34.9543C49.9838 39.3029 50.8298 46.6894 50.8298 46.6894L46.3418 48.2423C46.3418 48.2423 46.3382 42.1013 44.8128 35.7166C45.1135 35.4269 45.3051 34.9304 45.3968 34.358L47.2576 38.311C47.0981 36.8093 46.1393 35.131 45.4362 34.0427C45.5132 33.2115 45.4004 32.2893 45.1153 31.64H48.7994ZM40.818 31.0818C41.4569 30.4661 43.6936 30.4661 44.3334 31.0818C44.9815 31.7054 45.3949 34.7335 44.3334 35.7555C43.6973 36.3676 41.4533 36.3676 40.818 35.7555C39.6474 34.6275 40.2231 31.655 40.818 31.0818ZM37.8205 34.9525H35.9624V31.64H40.0352C39.7675 32.2478 39.6493 33.0975 39.7006 33.8881C38.849 35.047 38.2376 36.2943 37.9791 36.8066L39.7565 34.3704C39.8207 34.7714 39.9334 35.1363 40.1003 35.418C39.2459 38.1405 38.4906 42.846 38.4906 42.846L35.0183 42.0731C35.0183 42.0731 35.8653 38.0645 37.8205 34.9525Z"
                fill="#FFB8BC"
              />
            </svg>
            <p>Customization per your style, desire and comfort</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "150px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <svg width="84" height="80" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="80" rx="22" fill="#4C2A76" />
              <mask id="path-2-inside-1_291_10617" fill="white">
                <path d="M43.6553 35.2124C49.7197 41.3505 61.4944 48.767 67.4325 49.0397C68.1266 49.0715 68.7858 48.7244 69.1504 48.133C69.7353 47.1842 69.9244 46.0483 70.099 44.9312C70.2677 43.8519 69.705 42.9307 68.6814 42.644C61.5872 40.6569 54.6975 35.8256 49.1052 31.213C47.2243 32.1012 43.6553 35.2124 43.6553 35.2124" />
              </mask>
              <path
                d="M43.6553 35.2124C49.7197 41.3505 61.4944 48.767 67.4325 49.0397C68.1266 49.0715 68.7858 48.7244 69.1504 48.133C69.7353 47.1842 69.9244 46.0483 70.099 44.9312C70.2677 43.8519 69.705 42.9307 68.6814 42.644C61.5872 40.6569 54.6975 35.8256 49.1052 31.213C47.2243 32.1012 43.6553 35.2124 43.6553 35.2124"
                fill="#FFB8BC"
              />
              <path
                d="M67.4325 49.0397L67.3867 50.0386L67.3866 50.0386L67.4325 49.0397ZM69.1504 48.133L70.0017 48.6577L70.0017 48.6577L69.1504 48.133ZM70.099 44.9312L71.087 45.0856L71.087 45.0856L70.099 44.9312ZM68.6814 42.644L68.9511 41.681L68.9511 41.681L68.6814 42.644ZM49.1052 31.213L48.6782 30.3088L49.252 30.0378L49.7415 30.4416L49.1052 31.213ZM44.3666 34.5096C47.3274 37.5064 51.7162 40.8451 56.1042 43.4672C58.295 44.7762 60.4672 45.8955 62.4427 46.7014C64.4334 47.5134 66.16 47.9802 67.4784 48.0407L67.3866 50.0386C65.7359 49.9628 63.7639 49.4003 61.6873 48.5532C59.5955 47.6999 57.3316 46.5304 55.0783 45.184C50.5784 42.4951 46.0476 39.0566 42.9439 35.9153L44.3666 34.5096ZM67.4783 48.0407C67.8109 48.0559 68.126 47.8891 68.2992 47.6082L70.0017 48.6577C69.4456 49.5597 68.4423 50.087 67.3867 50.0386L67.4783 48.0407ZM68.2991 47.6082C68.7617 46.8578 68.9316 45.9245 69.111 44.7767L71.087 45.0856C70.9172 46.172 70.7088 47.5106 70.0017 48.6577L68.2991 47.6082ZM69.111 44.7768C69.2065 44.1655 68.9162 43.7482 68.4117 43.6069L68.9511 41.681C70.4938 42.1132 71.3288 43.5383 71.087 45.0856L69.111 44.7768ZM68.4117 43.6069C61.1071 41.5609 54.0836 36.6155 48.4689 31.9844L49.7415 30.4416C55.3115 35.0357 62.0674 39.7529 68.9511 41.681L68.4117 43.6069ZM49.5322 32.1172C48.7095 32.5058 47.4312 33.4346 46.294 34.3311C45.7405 34.7675 45.2438 35.1774 44.8853 35.4783C44.7062 35.6286 44.5621 35.7514 44.4631 35.8362C44.4137 35.8786 44.3755 35.9115 44.3499 35.9337C44.3372 35.9447 44.3275 35.9531 44.3212 35.9585C44.3181 35.9613 44.3157 35.9633 44.3143 35.9646C44.3135 35.9652 44.313 35.9657 44.3127 35.966C44.3125 35.9661 44.3124 35.9662 44.3124 35.9662C44.3123 35.9663 44.3123 35.9663 44.3123 35.9663C44.3123 35.9663 44.3124 35.9662 43.6553 35.2124C42.9982 34.4586 42.9982 34.4586 42.9983 34.4585C42.9983 34.4585 42.9984 34.4584 42.9985 34.4583C42.9987 34.4582 42.9989 34.458 42.9992 34.4578C42.9997 34.4573 43.0005 34.4566 43.0015 34.4557C43.0034 34.454 43.0063 34.4516 43.0099 34.4484C43.0172 34.4421 43.0279 34.4328 43.0417 34.4209C43.0693 34.397 43.1097 34.3622 43.1615 34.3178C43.265 34.229 43.4144 34.1018 43.5994 33.9465C43.9689 33.6364 44.482 33.2129 45.0558 32.7605C46.1734 31.8794 47.62 30.8085 48.6782 30.3088L49.5322 32.1172Z"
                fill="#4C2A76"
                mask="url(#path-2-inside-1_291_10617)"
              />
              <mask id="path-4-inside-2_291_10617" fill="white">
                <path d="M40.3449 46.8351C33.3785 41.0182 25.8192 34.078 17.6473 31.5934C16.9573 31.3837 16.1957 31.5568 15.6995 32.08C15.0319 32.7839 14.7763 33.5083 14.5056 34.2134C13.5601 36.6768 13.8282 37.3972 16.276 38.3392C22.0218 40.5509 26.8027 44.2266 31.4282 48.1556C32.1287 48.7505 33.518 49.8928 34.2843 50.5228C36.8183 49.8437 40.3449 46.8351 40.3449 46.8351" />
              </mask>
              <path
                d="M40.3449 46.8351C33.3785 41.0182 25.8192 34.078 17.6473 31.5934C16.9573 31.3837 16.1957 31.5568 15.6995 32.08C15.0319 32.7839 14.7763 33.5083 14.5056 34.2134C13.5601 36.6768 13.8282 37.3972 16.276 38.3392C22.0218 40.5509 26.8027 44.2266 31.4282 48.1556C32.1287 48.7505 33.518 49.8928 34.2843 50.5228C36.8183 49.8437 40.3449 46.8351 40.3449 46.8351"
                fill="#FFB8BC"
              />
              <path
                d="M17.6473 31.5934L17.9381 30.6366L17.9382 30.6366L17.6473 31.5934ZM15.6995 32.08L14.9738 31.3919L14.9739 31.3918L15.6995 32.08ZM14.5056 34.2134L13.572 33.855L13.5721 33.855L14.5056 34.2134ZM16.276 38.3392L16.6351 37.4059L16.6352 37.4059L16.276 38.3392ZM31.4282 48.1556L30.7809 48.9177L30.7808 48.9177L31.4282 48.1556ZM34.2843 50.5228L34.5432 51.4887L34.0464 51.6219L33.6492 51.2953L34.2843 50.5228ZM39.704 47.6027C36.1943 44.6721 32.6052 41.5191 28.8569 38.7711C25.1135 36.0268 21.2863 33.745 17.3564 32.5501L17.9382 30.6366C22.1802 31.9264 26.2186 34.357 30.0394 37.1582C33.8553 39.9557 37.5292 43.1812 40.9859 46.0675L39.704 47.6027ZM17.3564 32.5502C16.999 32.4415 16.6399 32.5416 16.425 32.7681L14.9739 31.3918C15.7515 30.5719 16.9157 30.3258 17.9381 30.6366L17.3564 32.5502ZM16.4251 32.7681C15.9145 33.3065 15.719 33.8431 15.4392 34.5718L13.5721 33.855C13.8337 33.1735 14.1493 32.2614 14.9738 31.3919L16.4251 32.7681ZM15.4392 34.5717C15.2097 35.1698 15.079 35.5998 15.0262 35.925C14.975 36.2406 15.0093 36.3859 15.0401 36.4591C15.0693 36.5285 15.1425 36.6461 15.3918 36.8138C15.6523 36.989 16.0448 37.1787 16.6351 37.4059L15.9168 39.2725C15.2832 39.0286 14.7243 38.7751 14.2756 38.4733C13.8158 38.164 13.4221 37.7709 13.1965 37.2345C12.9725 36.7019 12.9641 36.1463 13.052 35.6046C13.1384 35.0725 13.3288 34.4887 13.572 33.855L15.4392 34.5717ZM16.6352 37.4059C22.5478 39.6818 27.436 43.4524 32.0756 47.3934L30.7808 48.9177C26.1694 45.0007 21.4959 41.42 15.9167 39.2724L16.6352 37.4059ZM32.0756 47.3934C32.7684 47.9818 34.1499 49.1177 34.9194 49.7504L33.6492 51.2953C32.8861 50.6679 31.489 49.5192 30.7809 48.9177L32.0756 47.3934ZM34.0254 49.5569C35.1095 49.2664 36.501 48.4365 37.6923 47.6045C38.2714 47.2 38.7752 46.8151 39.1342 46.5313C39.3133 46.3897 39.4556 46.2739 39.5523 46.1942C39.6006 46.1543 39.6375 46.1236 39.6618 46.1032C39.674 46.093 39.683 46.0853 39.6887 46.0805C39.6916 46.0781 39.6936 46.0763 39.6948 46.0753C39.6954 46.0748 39.6958 46.0744 39.696 46.0743C39.6961 46.0742 39.6962 46.0742 39.6961 46.0742C39.6961 46.0742 39.6961 46.0742 39.6961 46.0742C39.696 46.0743 39.6959 46.0744 40.3449 46.8351C40.9939 47.5959 40.9938 47.596 40.9937 47.5961C40.9937 47.5962 40.9935 47.5963 40.9934 47.5964C40.9932 47.5966 40.9929 47.5968 40.9926 47.5971C40.9919 47.5977 40.991 47.5984 40.9899 47.5994C40.9877 47.6012 40.9847 47.6038 40.9808 47.6071C40.973 47.6137 40.9619 47.623 40.9476 47.635C40.9191 47.659 40.8777 47.6935 40.8246 47.7373C40.7185 47.8248 40.5655 47.9493 40.3745 48.1003C39.9929 48.4019 39.4567 48.8116 38.8375 49.2441C37.6319 50.0862 35.9931 51.1001 34.5432 51.4887L34.0254 49.5569Z"
                fill="#4C2A76"
                mask="url(#path-4-inside-2_291_10617)"
              />
              <mask id="path-6-inside-3_291_10617" fill="white">
                <path d="M27.7942 25.3721C29.7921 26.3959 32.8677 27.6043 34.8728 28.7308C36.4924 27.3026 40.2424 24.4578 40.2424 24.4578C37.5233 22.64 33.1865 19.9336 30.1672 19.1528C29.4373 18.964 28.6623 19.248 28.2012 19.8445C27.3184 20.9868 26.8079 22.1995 26.764 23.6426C26.7421 24.3665 27.1499 25.042 27.7942 25.3721" />
              </mask>
              <path
                d="M27.7942 25.3721C29.7921 26.3959 32.8677 27.6043 34.8728 28.7308C36.4924 27.3026 40.2424 24.4578 40.2424 24.4578C37.5233 22.64 33.1865 19.9336 30.1672 19.1528C29.4373 18.964 28.6623 19.248 28.2012 19.8445C27.3184 20.9868 26.8079 22.1995 26.764 23.6426C26.7421 24.3665 27.1499 25.042 27.7942 25.3721"
                fill="#FFB8BC"
              />
              <path
                d="M34.8728 28.7308L35.5342 29.4808L35.0018 29.9502L34.383 29.6026L34.8728 28.7308ZM40.2424 24.4578L40.7982 23.6264L41.9648 24.4063L40.8468 25.2545L40.2424 24.4578ZM30.1672 19.1528L29.9168 20.121L29.9167 20.1209L30.1672 19.1528ZM28.2012 19.8445L27.4099 19.233L27.41 19.2329L28.2012 19.8445ZM26.764 23.6426L25.7645 23.6123L25.7645 23.6122L26.764 23.6426ZM28.2503 24.4822C29.22 24.9791 30.4556 25.5228 31.741 26.1009C33.0055 26.6697 34.3153 27.2706 35.3626 27.8589L34.383 29.6026C33.4252 29.0645 32.1946 28.4979 30.9206 27.9249C29.6674 27.3613 28.3663 26.789 27.3381 26.2621L28.2503 24.4822ZM34.2114 27.9807C35.0468 27.2441 36.4117 26.1586 37.5497 25.2704C38.1225 24.8233 38.6442 24.4213 39.0227 24.1311C39.2119 23.9859 39.3655 23.8686 39.4719 23.7875C39.5251 23.747 39.5665 23.7155 39.5947 23.694C39.6087 23.6833 39.6195 23.6751 39.6268 23.6696C39.6305 23.6668 39.6332 23.6647 39.6351 23.6633C39.6361 23.6626 39.6368 23.6621 39.6373 23.6617C39.6375 23.6615 39.6377 23.6613 39.6378 23.6612C39.6379 23.6612 39.638 23.6612 39.638 23.6611C39.638 23.6611 39.6381 23.6611 40.2424 24.4578C40.8468 25.2545 40.8468 25.2545 40.8468 25.2545C40.8468 25.2545 40.8468 25.2545 40.8467 25.2545C40.8466 25.2546 40.8465 25.2547 40.8463 25.2549C40.8458 25.2552 40.8452 25.2557 40.8443 25.2564C40.8426 25.2577 40.84 25.2597 40.8365 25.2623C40.8295 25.2676 40.819 25.2756 40.8052 25.2861C40.7777 25.307 40.7369 25.338 40.6844 25.3781C40.5794 25.4581 40.4273 25.5743 40.2397 25.7181C39.8645 26.0059 39.3474 26.4043 38.7803 26.847C37.6384 27.7383 36.3184 28.7893 35.5342 29.4808L34.2114 27.9807ZM39.6867 25.2891C38.3382 24.3877 36.5994 23.2732 34.8315 22.2905C33.0475 21.2988 31.2991 20.4784 29.9168 20.121L30.4176 18.1847C32.0546 18.608 33.9842 19.5312 35.8032 20.5424C37.6383 21.5625 39.4275 22.7101 40.7982 23.6264L39.6867 25.2891ZM29.9167 20.1209C29.5929 20.0371 29.2209 20.1605 28.9923 20.4561L27.41 19.2329C28.1037 18.3356 29.2818 17.8908 30.4177 18.1847L29.9167 20.1209ZM28.9924 20.456C28.2149 21.4621 27.7999 22.4764 27.7636 23.673L25.7645 23.6122C25.8159 21.9226 26.4218 20.5116 27.4099 19.233L28.9924 20.456ZM27.7636 23.6729C27.7536 24.0024 27.942 24.3242 28.2503 24.4822L27.3382 26.2621C26.3579 25.7597 25.7306 24.7307 25.7645 23.6123L27.7636 23.6729Z"
                fill="#4C2A76"
                mask="url(#path-6-inside-3_291_10617)"
              />
              <path
                d="M44.9296 57.2118C48.2837 59.1472 51.9211 60.5818 54.4375 61.1202L44.9296 57.2118ZM44.9296 57.2118C46.0739 56.425 47.2453 55.5334 48.1783 54.7989C48.7366 54.3593 49.2117 53.9742 49.5473 53.6989C49.6644 53.6029 49.7646 53.5202 49.8455 53.4531C50.5608 53.7436 51.4341 54.0291 52.3116 54.3159C52.5089 54.3805 52.7065 54.445 52.9025 54.5098C54.1147 54.91 55.2723 55.3168 56.0896 55.7631L56.0896 55.7632C56.5241 56.0004 56.8051 56.4531 56.8351 56.9615L56.8351 56.9616C56.9093 58.2165 56.6112 59.361 55.8747 60.5188L55.8747 60.5189C55.5716 60.9954 54.9907 61.2385 54.4375 61.1203L44.9296 57.2118Z"
                fill="#FFB8BC"
                stroke="#4C2A76"
              />
              <mask id="path-9-inside-4_291_10617" fill="white">
                <path d="M19.5501 41.5754C18.3594 41.9159 16.0939 42.2752 15.0564 42.907C14.5874 43.1926 14.272 43.69 14.2046 44.2349C14.0341 45.6128 14.388 46.8538 15.0599 48.1025C15.4272 48.7845 16.1768 49.1792 16.9468 49.0938C19.259 48.8369 23.4377 47.0896 25.6999 46.0553C22.4237 43.0384 19.5501 41.5754 19.5501 41.5754Z" />
              </mask>
              <path
                d="M19.5501 41.5754C18.3594 41.9159 16.0939 42.2752 15.0564 42.907C14.5874 43.1926 14.272 43.69 14.2046 44.2349C14.0341 45.6128 14.388 46.8538 15.0599 48.1025C15.4272 48.7845 16.1768 49.1792 16.9468 49.0938C19.259 48.8369 23.4377 47.0896 25.6999 46.0553C22.4237 43.0384 19.5501 41.5754 19.5501 41.5754Z"
                fill="#FFB8BC"
              />
              <path
                d="M15.0564 42.907L15.5766 43.7611L15.5766 43.7611L15.0564 42.907ZM14.2046 44.2349L15.1971 44.3575L15.197 44.3577L14.2046 44.2349ZM15.0599 48.1025L14.1795 48.5766L14.1794 48.5763L15.0599 48.1025ZM16.9468 49.0938L17.0572 50.0877L17.0569 50.0877L16.9468 49.0938ZM25.6999 46.0553L26.3773 45.3196L27.4842 46.339L26.1157 46.9647L25.6999 46.0553ZM19.825 42.5369C19.221 42.7096 18.2517 42.9111 17.4885 43.1021C16.6307 43.3167 15.9478 43.535 15.5766 43.7611L14.5363 42.0529C15.2025 41.6472 16.1711 41.37 17.0031 41.1619C17.9296 40.9301 18.6884 40.7817 19.2752 40.6139L19.825 42.5369ZM15.5766 43.7611C15.374 43.8845 15.2277 44.1093 15.1971 44.3575L13.2122 44.1122C13.3162 43.2706 13.8009 42.5008 14.5363 42.0529L15.5766 43.7611ZM15.197 44.3577C15.0595 45.4693 15.3332 46.5001 15.9405 47.6286L14.1794 48.5763C13.4427 47.2075 13.0088 45.7563 13.2122 44.1121L15.197 44.3577ZM15.9404 47.6284C16.1149 47.9524 16.4732 48.1402 16.8366 48.0999L17.0569 50.0877C15.8804 50.2181 14.7395 49.6166 14.1795 48.5766L15.9404 47.6284ZM16.8364 48.0999C17.8608 47.9861 19.384 47.5245 20.995 46.9283C22.5814 46.3412 24.1677 45.6562 25.284 45.1458L26.1157 46.9647C24.9698 47.4886 23.3357 48.1946 21.6892 48.8039C20.0673 49.4042 18.345 49.9446 17.0572 50.0877L16.8364 48.0999ZM25.0225 46.7909C23.4314 45.3257 21.9384 44.2384 20.8464 43.5192C20.3008 43.1598 19.8566 42.8932 19.5519 42.7181C19.3996 42.6305 19.2823 42.5659 19.2048 42.524C19.166 42.5031 19.1372 42.4878 19.1189 42.4783C19.1098 42.4735 19.1033 42.4701 19.0995 42.4682C19.0976 42.4672 19.0964 42.4666 19.0959 42.4663C19.0956 42.4662 19.0956 42.4661 19.0956 42.4662C19.0957 42.4662 19.0958 42.4662 19.0959 42.4663C19.096 42.4663 19.0961 42.4664 19.0961 42.4664C19.0963 42.4665 19.0964 42.4666 19.5501 41.5754C20.0038 40.6842 20.004 40.6843 20.0042 40.6844C20.0043 40.6845 20.0045 40.6846 20.0046 40.6846C20.0049 40.6848 20.0053 40.685 20.0057 40.6852C20.0064 40.6856 20.0074 40.6861 20.0085 40.6867C20.0108 40.6878 20.0138 40.6893 20.0174 40.6912C20.0247 40.695 20.0348 40.7002 20.0475 40.7069C20.0729 40.7202 20.109 40.7393 20.1552 40.7643C20.2476 40.8142 20.3804 40.8874 20.5487 40.9842C20.8852 41.1776 21.3641 41.4653 21.9465 41.8489C23.1103 42.6154 24.6922 43.7679 26.3773 45.3196L25.0225 46.7909Z"
                fill="#4C2A76"
                mask="url(#path-9-inside-4_291_10617)"
              />
              <path
                d="M43.1588 47.1263L43.4642 47.5222C44.0888 47.0404 44.8989 46.4243 45.7573 45.7716C47.0491 44.7893 48.45 43.724 49.492 42.9083C49.537 42.9462 49.5865 42.9877 49.6401 43.0323C49.9343 43.277 50.3552 43.6182 50.8635 44.0056C51.7294 44.6655 52.8581 45.4663 54.0531 46.153C46.0772 53.4374 38.9204 59.0971 29.5548 61.0579L43.1588 47.1263ZM43.1588 47.1263L43.4642 47.5222C39.1735 50.832 34.5731 53.6134 29.2798 55.2004L29.2797 55.2004M43.1588 47.1263L29.2797 55.2004M29.2797 55.2004C28.0239 55.5769 27.3846 56.3613 27.24 57.2736C27.0907 58.216 27.4519 59.4106 28.4568 60.5907L28.4569 60.5908M29.2797 55.2004L28.4569 60.5908M28.4569 60.5908C28.7651 60.9529 29.1996 61.1322 29.5547 61.0579L28.4569 60.5908Z"
                fill="#FFB8BC"
                stroke="#4C2A76"
              />
            </svg>
            <p>Premium quality fabric</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "150px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <svg width="84" height="80" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="80" rx="22" fill="#4C2A76" />
              <path
                d="M59.19 45.3295L61.8025 30.9608C61.8757 30.5582 61.8595 30.1444 61.7552 29.7487C61.6508 29.353 61.4608 28.9851 61.1986 28.6709C60.9364 28.3567 60.6084 28.1039 60.2377 27.9305C59.867 27.7571 59.4628 27.6671 59.0536 27.6671H25.246L24.2117 21.9786C24.0949 21.3348 23.7557 20.7523 23.2533 20.3331C22.7509 19.9138 22.1172 19.6842 21.4628 19.6845H17.8605C17.5429 19.6845 17.2383 19.8107 17.0138 20.0352C16.7892 20.2598 16.6631 20.5643 16.6631 20.8819C16.6631 21.1995 16.7892 21.504 17.0138 21.7286C17.2383 21.9531 17.5429 22.0793 17.8605 22.0793H21.4628C21.5563 22.0792 21.6468 22.112 21.7186 22.1719C21.7904 22.2318 21.8388 22.315 21.8555 22.407L27.1843 51.7156C27.2439 52.0439 27.3618 52.3588 27.5326 52.6454C26.7214 53.249 26.1041 54.0763 25.7567 55.0259C25.4092 55.9754 25.3466 57.0058 25.5766 57.9904C25.8067 58.975 26.3193 59.8709 27.0515 60.5682C27.7837 61.2655 28.7036 61.7338 29.6982 61.9155C30.6929 62.0972 31.719 61.9844 32.6504 61.591C33.5819 61.1976 34.3781 60.5407 34.9414 59.701C35.5047 58.8614 35.8104 57.8754 35.8211 56.8644C35.8318 55.8533 35.5469 54.8612 35.0015 54.0098H50.2117C49.5918 54.9804 49.3125 56.1299 49.4181 57.2768C49.5237 58.4237 50.008 59.5028 50.7947 60.344C51.5814 61.1853 52.6257 61.7407 53.763 61.9227C54.9003 62.1048 56.0658 61.9031 57.0758 61.3495C58.0857 60.7958 58.8827 59.9218 59.341 58.8651C59.7993 57.8085 59.8928 56.6293 59.6068 55.5136C59.3208 54.3979 58.6716 53.4092 57.7615 52.7033C56.8514 51.9974 55.7323 51.6145 54.5805 51.615H29.9332C29.8397 51.615 29.7492 51.5823 29.6774 51.5224C29.6056 51.4625 29.5572 51.3793 29.5405 51.2873L28.8744 47.6237H56.4411C57.0955 47.6239 57.7292 47.3944 58.2316 46.9751C58.734 46.5558 59.0732 45.9734 59.19 45.3295ZM33.4266 56.8037C33.4266 57.3563 33.2627 57.8964 32.9557 58.3559C32.6487 58.8154 32.2124 59.1735 31.7019 59.3849C31.1913 59.5964 30.6296 59.6517 30.0876 59.5439C29.5456 59.4361 29.0478 59.17 28.6571 58.7793C28.2663 58.3885 28.0002 57.8907 27.8924 57.3487C27.7846 56.8068 27.84 56.245 28.0514 55.7345C28.2629 55.224 28.621 54.7876 29.0804 54.4806C29.5399 54.1736 30.0801 54.0098 30.6327 54.0098C31.3734 54.0106 32.0836 54.3052 32.6073 54.829C33.1311 55.3528 33.4258 56.0629 33.4266 56.8037ZM57.3744 56.8037C57.3744 57.3563 57.2106 57.8964 56.9036 58.3559C56.5966 58.8154 56.1602 59.1735 55.6497 59.3849C55.1392 59.5964 54.5774 59.6517 54.0354 59.5439C53.4935 59.4361 52.9957 59.17 52.6049 58.7793C52.2142 58.3885 51.9481 57.8907 51.8403 57.3487C51.7325 56.8068 51.7878 56.245 51.9993 55.7345C52.2107 55.224 52.5688 54.7876 53.0283 54.4806C53.4878 54.1736 54.0279 54.0098 54.5805 54.0098C55.3213 54.0106 56.0314 54.3052 56.5552 54.829C57.079 55.3528 57.3736 56.0629 57.3744 56.8037ZM25.6813 30.0619H59.0536C59.112 30.0619 59.1698 30.0748 59.2227 30.0995C59.2757 30.1243 59.3226 30.1604 59.36 30.2053C59.3975 30.2502 59.4246 30.3028 59.4395 30.3593C59.4544 30.4158 59.4567 30.4749 59.4463 30.5325L56.8338 44.9012C56.8172 44.9932 56.7687 45.0764 56.6969 45.1363C56.6251 45.1962 56.5346 45.229 56.4411 45.2289H28.439L25.6813 30.0619Z"
                fill="#FFB8BC"
              />
            </svg>
            <p>One Stop platform</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "150px",
              alignItems: "center",
            }}
          >
            <svg width="84" height="80" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="80" rx="22" fill="#4C2A76" />
              <path
                d="M34.7769 54.1677C34.7769 57.7149 34.7816 61.2606 34.7722 64.8077C34.7707 65.8994 34.0678 66.729 32.9335 67.0417C31.9591 67.311 30.7674 66.9172 30.2693 66.0326C30.0055 65.5649 29.872 64.9814 29.8643 64.4487C29.8224 61.9642 29.8457 59.4783 29.8457 56.9939V55.9905H28.8309C25.5724 55.9905 22.3138 55.9978 19.0553 55.9876C17.2802 55.9818 15.7425 55.0335 15.2537 53.632C15.1203 53.2484 15.0334 52.8227 15.0551 52.4231C15.1963 49.804 15.2987 47.1791 15.5609 44.5687C15.7689 42.4998 16.3864 40.4975 17.4369 38.6486C18.2795 37.169 19.3982 35.9456 21.2494 35.4794C22.7793 35.0942 23.7352 35.3896 24.5405 36.6347C25.9665 38.8412 27.394 41.0462 28.7781 43.2744C29.1164 43.8188 29.4888 44.0692 30.1839 44.049C31.7077 44.0026 33.2345 44.0345 34.7598 44.0345C36.7724 44.0345 37.3465 44.4486 37.4225 46.1671H26.1232C25.8935 45.6647 25.5956 45.1768 25.2527 44.6947C24.2131 43.2324 23.3224 41.676 22.3604 40.1645C22.1338 39.8069 21.9306 39.2379 21.3487 39.5738C20.7792 39.9039 21.2323 40.3541 21.448 40.7031C22.4442 42.3072 23.4931 43.8825 24.4536 45.5055C24.736 45.9847 24.8896 46.5797 24.9222 47.1314C24.992 48.3099 24.9687 49.4942 24.9346 50.6756C24.9175 51.2214 25.1317 51.3821 25.698 51.3749C27.7152 51.3503 29.7324 51.3604 31.748 51.3662C33.7233 51.372 34.7769 52.3507 34.7769 54.1677Z"
                fill="#FFB8BC"
              />
              <path
                d="M26.6011 48.6993C26.6243 48.4271 26.6243 48.1622 26.6011 47.903V47.3253H58.0008V49.3986H26.6011V48.6993Z"
                fill="#FFB8BC"
              />
              <path
                d="M69.5512 52.1712C69.545 54.6136 67.9561 55.9862 65.3384 55.9891C62.1839 55.9934 59.0278 55.9905 55.8732 55.9905C54.7265 55.992 54.7265 55.9934 54.725 57.03C54.7234 59.6129 54.6924 62.1944 54.7296 64.7758C54.7576 66.6146 52.6923 67.5962 51.198 66.8737C50.3989 66.4886 49.8884 65.8993 49.8837 65.0553C49.862 61.22 49.8512 57.3833 49.8868 53.5466C49.8977 52.329 51.122 51.385 52.6023 51.3705C54.6443 51.3503 56.6878 51.343 58.7298 51.3778C59.3831 51.3894 59.6422 51.2591 59.6205 50.5887C59.5724 49.1684 59.3304 47.6699 59.7167 46.3437C60.1031 45.019 61.1582 43.8636 61.9248 42.6359C62.3903 41.8874 62.8946 41.1548 63.3135 40.3845C63.4299 40.1717 63.3042 39.846 63.2887 39.5709C62.9908 39.6737 62.5454 39.6939 62.4166 39.8923C61.0667 41.967 59.7462 44.0591 58.4583 46.1671H47.1854V46.1613C47.1311 44.7685 47.7564 44.0953 49.26 44.0374C50.9637 43.9737 52.6721 43.9317 54.3774 43.9577C55.0648 43.9679 55.4512 43.7623 55.7941 43.2179C57.1146 41.12 58.5809 39.0989 59.8083 36.9561C60.9627 34.9437 62.564 35.1246 64.1747 35.7718C65.4952 36.3017 66.3486 37.2935 67.0267 38.4285C68.3968 40.7248 68.9663 43.2512 69.2502 45.8182C69.483 47.9247 69.5559 50.053 69.5512 52.1712Z"
                fill="#FFB8BC"
              />
              <path
                d="M26.0472 35.1565C23.6297 35.1463 21.6637 33.2946 21.6932 31.0563C21.7242 28.7543 23.6235 26.9908 26.0736 26.9923C28.5563 26.9937 30.4819 28.7977 30.4757 31.1185C30.4726 33.3482 28.4771 35.1666 26.0472 35.1565Z"
                fill="#FFB8BC"
              />
              <path
                d="M62.8701 31.1099C62.8655 33.3699 60.9181 35.1637 58.4758 35.1565C56.0691 35.1493 54.1156 33.3149 54.1187 31.0606C54.1202 28.7948 56.0629 26.9923 58.4975 26.9952C60.9988 26.9995 62.8748 28.763 62.8701 31.1099Z"
                fill="#FFB8BC"
              />
              <path
                d="M51.2281 22.3293C51.2281 17.7368 47.2232 14 42.3013 14C37.3794 14 33.3745 17.7368 33.3745 22.3293C33.3745 26.5033 36.6842 29.9708 40.9824 30.5673V32.5002H40.5169V42.2599H44.0857V32.5002H43.6202V30.5673C47.9184 29.9708 51.2281 26.5033 51.2281 22.3293ZM35.8572 22.3293C35.8572 19.0138 38.748 16.3165 42.3013 16.3165C45.8547 16.3165 48.7454 19.0138 48.7454 22.3293C48.7454 25.6448 45.8547 28.342 42.3013 28.342C38.748 28.342 35.8572 25.6448 35.8572 22.3293Z"
                fill="#FFB8BC"
              />
            </svg>
            <p>Work Transparency</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "150px",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <svg width="84" height="80" viewBox="0 0 84 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="84" height="80" rx="22" fill="#4C2A76" />
              <path
                d="M41.6809 65C36.6733 65 31.7781 63.5151 27.6144 60.733C23.4507 57.9509 20.2055 53.9966 18.2891 49.3701C16.3728 44.7437 15.8714 39.6528 16.8483 34.7414C17.8253 29.83 20.2367 25.3186 23.7776 21.7776C27.3186 18.2367 31.83 15.8253 36.7414 14.8483C41.6528 13.8714 46.7437 14.3728 51.3701 16.2891C55.9966 18.2055 59.9509 21.4507 62.733 25.6144C65.5151 29.7781 67 34.6733 67 39.6809C67 46.396 64.3325 52.836 59.5842 57.5842C54.836 62.3325 48.396 65 41.6809 65ZM41.6809 17.5267C37.2992 17.5267 33.0159 18.826 29.3727 21.2604C25.7295 23.6947 22.8899 27.1547 21.2131 31.2029C19.5363 35.251 19.0976 39.7055 19.9524 44.003C20.8072 48.3005 22.9172 52.248 26.0155 55.3463C29.1138 58.4446 33.0614 60.5546 37.3588 61.4094C41.6563 62.2643 46.1108 61.8255 50.159 60.1487C54.2071 58.4719 57.6671 55.6324 60.1015 51.9891C62.5358 48.3459 63.8351 44.0626 63.8351 39.6809C63.8351 33.8053 61.501 28.1702 57.3463 24.0155C53.1916 19.8608 47.5566 17.5267 41.6809 17.5267Z"
                fill="#FFB8BC"
              />
              <path
                d="M40.0985 34.9334H36.9336C36.9336 34.094 36.6002 33.289 36.0066 32.6955C35.4131 32.102 34.6081 31.7685 33.7687 31.7685C32.9294 31.7685 32.1244 32.102 31.5308 32.6955C30.9373 33.289 30.6039 34.094 30.6039 34.9334H27.439C27.439 33.2547 28.1058 31.6447 29.2929 30.4576C30.48 29.2705 32.09 28.6037 33.7687 28.6037C35.4475 28.6037 37.0575 29.2705 38.2446 30.4576C39.4316 31.6447 40.0985 33.2547 40.0985 34.9334Z"
                fill="#FFB8BC"
              />
              <path
                d="M55.9227 34.9334H52.7578C52.7578 34.094 52.4244 33.289 51.8309 32.6955C51.2373 32.102 50.4323 31.7685 49.593 31.7685C48.7536 31.7685 47.9486 32.102 47.355 32.6955C46.7615 33.289 46.4281 34.094 46.4281 34.9334H43.2632C43.2632 33.2547 43.9301 31.6447 45.1171 30.4576C46.3042 29.2705 47.9142 28.6037 49.593 28.6037C51.2717 28.6037 52.8817 29.2705 54.0688 30.4576C55.2558 31.6447 55.9227 33.2547 55.9227 34.9334Z"
                fill="#FFB8BC"
              />
              <path
                d="M41.681 53.9225C38.3235 53.9225 35.1035 52.5887 32.7294 50.2146C30.3553 47.8405 29.0215 44.6205 29.0215 41.263H32.1864C32.1864 43.7811 33.1867 46.1961 34.9673 47.9767C36.7479 49.7573 39.1629 50.7576 41.681 50.7576C44.1992 50.7576 46.6142 49.7573 48.3948 47.9767C50.1754 46.1961 51.1757 43.7811 51.1757 41.263H54.3406C54.3406 44.6205 53.0068 47.8405 50.6327 50.2146C48.2586 52.5887 45.0385 53.9225 41.681 53.9225Z"
                fill="#FFB8BC"
              />
            </svg>
            <p>No sitting back until we see you smile</p>
          </div>
        </div>
        <span className="landser">Services</span>
        <div className="servcaro">
          <div className="servcarocont">
            <img src={img1} alt="" />
            <span>Wedding</span>
            <span>Collections</span>
          </div>
          <div className="servcarocont">
            <img src={img2} alt="" />
            <span>Customized</span>
            <span>Designs</span>
          </div>
          <div className="servcarocont">
            <img src={img3} alt="" />
            <span>Image</span>
            <span>Consulting</span>
          </div>
          <div className="servcarocont">
            <img src={img1} alt="" />
            <span>Get</span>
            <span>Pampered</span>
          </div>
        </div>
        <span className="landser2">Products</span>
        <div className="servcaro">
          <div className="servcarocont">
            <img src={img1} alt="" />
            <span>WeddingDesigner</span>
            <span>Collections</span>
          </div>
          <div className="servcarocont">
            <img src={img5} alt="" />
            <span>Handloom</span>
            <span>Sarees</span>
          </div>
          <div className="servcarocont">
            <img src={img3} alt="" />
            <span>Casual</span>
            <span>Wear</span>
          </div>
          <div className="servcarocont">
            <img src={img2} alt="" />
            <span>Exclusive</span>
            <span>Accessories</span>
          </div>
        </div>
        <span className="Landingtesti">Testimonials</span>
        <div className="testcont">
          <div className="avatar"></div>

          <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active ">
                <p>“ We suggest suitable combinations of colors for different dress</p>
                <h3>Rowan Atkinson</h3>
              </div>
              <div class="carousel-item ">
                <p>“ We suggest suitable combinations of colors for different dress</p>
                <h3>Rowan Atkinson</h3>
              </div>
              <div class="carousel-item ">
                <p>“ We suggest suitable combinations of colors for different dress</p>
                <h3>Rowan Atkinson</h3>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
