import { FaPhoneAlt } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

export default function Menu() {
    const [menu,setMenu] = useState(false);
    return (
        <>
        <div className="header-cont">
            <section className="header-top custom-cont">
                <Link to={'/'} className="main-logo"><span>Maitriya</span> Music</Link>
                <div className="header-contact">
                    <span className="dis-mob"><span><FaPhoneAlt /></span>741-869-7572</span>
                    <span className="dis-mob"><span><IoMailSharp /></span>info@maitriyamusic.com</span>
                    <span className="dis-mob"><span><FaLocationDot/></span>Kalanki Chowk, Ktm</span>
                    <span className="mob-nav-b" onClick={()=>setMenu(!menu)}><RxHamburgerMenu /></span>
                </div>
            </section>
        </div>
        <nav className="main-nav custom-cont">
                <ul>
                    <li><Link to={'/'} className="active">Home</Link></li>
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li className="drop-cont"><a href="javascript:void(0)">Category<span><IoMdArrowDropdown/></span></a>
                        <div className="nav-drop">
                            <ul>
                                <li className="li-head">Guitar</li>
                                <li><Link to={'/shop/gibson'}>Gibson</Link></li>
                                <li><Link to={'/shop/fender'}>Fender</Link></li>
                                <li><Link to={'/shop/mantra'}>Mantra</Link></li>
                                <li><Link to={'/shop/deram catcher'}>Dream Catcher</Link></li>
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
            <div className="mob-nav" style={menu ? {'opacity':'1','zIndex':'1000'} : {'opacity': '0','zIndex':'-1'}}>
                <span onClick={()=>setMenu(!menu)}><MdOutlineCancel/></span>
                <ul>
                    <li onClick={()=>setMenu(!menu)}><Link to={'/'}> Home</Link></li>
                    <li onClick={()=>setMenu(!menu)}><Link to={'/shop'}> Shop</Link></li>
                    <li onClick={()=>setMenu(!menu)}><Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </>
    );
}