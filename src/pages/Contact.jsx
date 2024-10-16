import { useDispatch } from "react-redux";
import { changeUrl } from "../feature/navPing";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
export default function Contact() {
  const setUrl = useDispatch();
  useEffect(() => {
    let m = document.getElementById('top');
    m.scrollIntoView({ behavior: "smooth" }, true);
    setUrl(changeUrl("contact"));
  }, []);
  return (
    <>
    
    <Helmet prioritizeSeoTags>
        <title>Contact Us | Maitreya Music</title>
        <link rel="canonical" href="/" />
        <meta
        property="og:title"
        content="Contact Us | Maitreya Music"
        />
        <meta property="og:image" content="https://maitreya-music.vercel.app/static/media/guitar_cover.21115ab57ead2354a246.jpg"/>
        <meta name="twitter:image" content="https://maitreya-music.vercel.app/static/media/guitar_cover.21115ab57ead2354a246.jpg"/>
    </Helmet>
    <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220.79852660397768!2d85.28152591891717!3d27.693304157110614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19deec63338b%3A0x8c6b480ea1015b0a!2sCorner%20Mobile%20House!5e0!3m2!1sen!2snp!4v1728983979171!5m2!1sen!2snp"
          style={{"border":"0"}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
    <div className="custom-cont">
        
    </div>
    </>
    
  );
}
