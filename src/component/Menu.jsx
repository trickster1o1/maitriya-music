import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Menu() {
    return (
        <div className="header-cont">
            <section className="header-top custom-cont">
                <span className="main-logo"><span>Maitriya</span> Music</span>
                <div className="header-contact">
                    <span><span><FaPhoneAlt /></span>741-869-7572</span>
                    <span><span><IoMailSharp /></span>info@maitriyamusic.com</span>
                    <span><span><FaLocationDot/></span>Kalanki Chowk, Ktm</span>
                </div>
            </section>
            <nav className="main-nav custom-cont">
                <ul>
                    <li><Link to={'/'} className="active">Home</Link></li>
                    <li><Link to={'/about'}>About</Link></li>
                    <li className="drop-cont"><a href="javascript:void(0)">Category<span><IoMdArrowDropdown/></span></a>
                        <div className="nav-drop">
                            <ul>
                                <li className="li-head">Guitar</li>
                                <li><Link to={'/'}>Gibson</Link></li>
                                <li><Link to={'/'}>Fender</Link></li>
                                <li><Link to={'/'}>Mantra</Link></li>
                                <li><Link to={'/'}>Dream Catcher</Link></li>
                            </ul>
                            
                            <ul>
                                <li className="li-head">Ukulele</li>
                                <li><Link to={'/'}>Mantra</Link></li>
                                <li><Link to={'/'}>Dream Catcher</Link></li>
                            </ul>
                            
                            <ul>
                                <li className="li-head">Flute</li>
                                <li><Link to={'/'}>Gibson</Link></li>
                                <li><Link to={'/'}>Fender</Link></li>
                                <li><Link to={'/'}>Mantra</Link></li>
                                <li><Link to={'/'}>Dream Catcher</Link></li>
                            </ul>
                            
                            <ul>
                                <li className="li-head">Cajón</li>
                                <li><Link to={'/'}>Gibson</Link></li>
                                <li><Link to={'/'}>Fender</Link></li>
                                <li><Link to={'/'}>Mantra</Link></li>
                                <li><Link to={'/'}>Dream Catcher</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li><Link to={'/contact'}>Contact</Link></li>
                    {/* <li>Home</li>
                    <li>Home</li> */}
                </ul>
            </nav>
        </div>
    );
}