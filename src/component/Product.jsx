import { Link, useNavigate } from "react-router-dom";

export default function Product({title, price, img, link}) {
  const navigate = useNavigate();
  return (
    <div className="prod-p-cont">
      <div className="thumb-cont" onClick={()=>navigate(link)}>
        <img src={img} alt={title} className="i-fit" />
      </div>
      <div className="prod-title">
        <span role="button" onClick={()=>navigate(link)}>{title}</span>
        <span>Rs.{price}</span>
      </div>
      <div className="prod-info">
        <Link to={link} className="custom-btn">Preview</Link>
        <button className="custom-btn">Inquire</button>
      </div>
    </div>
  );
}
