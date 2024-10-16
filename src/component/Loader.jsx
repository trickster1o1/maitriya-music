import { useEffect } from "react";
import { gsap } from "gsap";

export default function Loader() {
   
    useEffect(() => {
      let tm = gsap.timeline();
    
      tm.to(".s-left", {
        width: '4em',
        duration: 1,
        ease: "power2.inOut",
      });

      tm.to(".s-right", {
        width: '3em',
        duration: 1,
        ease: "power2.inOut",
      });

      tm.to(".sound", {
        opacity: '1',
        duration: .8,
        ease: "power2.inOut",
      });
    }, []);
    return (
        <div className="load-cont" style={{flexDirection:'column'}} id="l-c">
            <div to={'/'} className="main-logo splash"><span className="s-left">Maitriya</span> <section className="s-right">Music</section></div>
            <img src="/sound.gif" alt="Loading..." className="sound" />
        </div>
    );
}