import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="load-cont" id="l-c" style={{flexDirection:'column',gap:'1em'}}>
            <img src="/loader.gif" alt="Loading..." />
            <h1>Page Not Found</h1>
            <Link to={'/'} style={{textDecoration:'underline'}}>Go Back.</Link>
        </div>
    );
}