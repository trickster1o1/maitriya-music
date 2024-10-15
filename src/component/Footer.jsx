import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="footer-cont custom-cont">
      <div>
        <span className="main-logo">
          <span>Maitriya</span> Music
        </span>
        <div>
          <a
            href="https://www.facebook.com/profile.php?id=61565342055220"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/maitreyamusicinstruments"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <ul>
            <li className="li-head">Link</li>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/gallery"}>Gallery</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <ul>
            <li className="li-head">Contact Info</li>
            <li>
              <a href="tel: 9810223311"><span className="cont-icon"><FaPhoneAlt/></span> <span style={{'color':'#ff9300','fontSize':'25px'}}>9860240733</span></a>
            </li>
            <li>
            <a href="mailto: info@mail.com"><span className="cont-icon"><IoMailSharp/></span> <span>info@maitriyamusic.com.np</span></a>
            </li>
            <li>
            <a href="javascript:void(0)"><span className="cont-icon"><IoTime/></span> <span>Sunday - Friday <br className="dis-mob" />
            10:00 AM - 08:00 PM</span></a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <ul className="b-less">
            <li className="li-head">Address</li>
            <li>
              <a href="javascript:void(0)"><span className="cont-icon"><FaLocationDot/></span> <span>Kalanki Chowk, <br className="dis-mob" /> Kathmandu</span></a>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  );
}
