import styles from '../footer/Footer.module.css'
import { FaInstagram } from "react-icons/fa6";
import { SiTelegram } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>مقداد آی تی</h4>
            <ul>
              <li>مجوز و گواهی نامه ها</li>
              <li>قوانین و مقرارت</li>
              <li>حریم خصوصی</li>
              <li>تماس با ما</li>
              <li>درباره ما</li>
            </ul>
          </div>

          <div className="col">
            <h4>راهنما</h4>
            <ul>
              <li>تضمین اصالت کالا</li>
              <li>شرایط عودت کالا</li>
              <li>نحوه ارسال کالا</li>
              <li>راهنمای خرید</li>
              <li>تخفیف ها</li>
            </ul>
          </div>

          <div className="col">
            <h4>خدمات</h4>
            <ul>
              <li>مشاوره رایگان</li>
              <li>پشتیبانی</li>
              <li>تبلیغات</li>
              <li>خرید سازمانی</li>
              <li>اسمبل آنلاین</li>
              <li>اعتبار سنجی خریداران</li>
            </ul>
          </div>
           <div className={`col ${styles.socials}`}>
            <h4>با ما در ارتباط باشید</h4>
              <ul>
                <li><FaInstagram /></li>
                <li><SiTelegram /></li>
                <li><FaWhatsapp /></li>
                <li><FaLinkedin /></li>
                <li><FaFacebook /></li>
              </ul>
           </div>

        </div>
      </div>
    </div>
  )
}

export default Footer