import { Link } from "react-router-dom";

export default function AdminMenu() {
    return (
        <div className="admin-menu">
           <Link to={'/mm3000'} className="main-logo"><span style={{color:'#fff'}}>Maitriya</span> Music</Link>
           <ul>
            <li><Link to={'/mm3000/products'}>Products</Link></li>
            <li><Link to={'/mm3000/Gallery'}>Gallery</Link></li>
           </ul>
        </div>
    );
}