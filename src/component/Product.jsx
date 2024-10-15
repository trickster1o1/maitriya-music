import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiCancel } from "react-icons/gi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
export default function Product({title, price, img, link}) {
  const navigate = useNavigate();
  const [url,setUrl] = useState('');
  return (
    <>
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
        <button className="custom-btn" onClick={()=>setUrl(window.location.origin+''+link)} role="button">Inquire</button>
      </div>
    </div>
    <div className="img-preview" style={url ? {zIndex: '9999',opacity:1} : {zIndex: '-1',opacity:'0'}}>
            <div style={url ? {transform: 'scale(1)'} : {transform: 'scale(0)'}}>
                <div className="modal-head">How would you like to contact us?<span role="button" onClick={()=>setUrl('')}><GiCancel /></span></div>
                <div className="modal-body">
                    <ul>
                      <li><a href={"https://api.whatsapp.com/send?phone=9860240733&text="+url} target="_blank" rel="noopener noreferrer"><FaWhatsapp /> WhatsApp</a></li>
                      <li><a href={"mailto: rickykhadgi10@gmail.com?body="+url} target="_blank" rel="noopener noreferrer"><AiOutlineMail /> Email</a></li>
                    </ul>
                </div>
            </div>
    </div>
    </>
  );
}
