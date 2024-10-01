import { Link } from "react-router-dom";

export default function Banner({title, sub}) {
    return (
        <div className="page-header">
            <h1 className="custom-header">{title}</h1>
            <div><Link to={'/'}>Home</Link> {sub ? <>/ <Link to={'/'+sub}>{sub}</Link></> : null} / <span>{title}</span></div>
        </div>  
    );
}