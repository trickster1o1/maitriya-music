import { Link } from "react-router-dom";

export default function Product({title, price, img, link}) {
  return (
    <div>
      <div className="thumb-cont">
        <img src={img} alt={title} className="i-fit" />
      </div>
      <div className="prod-title">
        <span>{title}</span>
        <span>Rs.{price}</span>
      </div>
      <div className="prod-info">
        <Link to={'/'} className="custom-btn">Preview</Link>
        <button className="custom-btn">Inquire</button>
      </div>
    </div>
  );
}
