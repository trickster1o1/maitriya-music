import { useEffect } from "react";
import { gsap } from "gsap";

export default function Loader() {
   
    useEffect(() => {
        let ctx = gsap.context(() => {
          let tm = gsap.timeline();
    
          tm.from(".s-left", {
            width: '0.9em',
            duration: 1,
            ease: "power2.inOut",
          });

          tm.from(".s-right", {
            width: '0.9em',
            duration: 1,
            ease: "power2.inOut",
          });

          tm.from(".sound", {
            opacity: '0',
            duration: .8,
            ease: "power2.inOut",
          });

        });
    
        return () => ctx.revert();
    }, []);
    return (
        <div className="load-cont" style={{flexDirection:'column'}} id="l-c">
            <div to={'/'} className="main-logo splash"><span className="s-left">Maitriya</span> <section className="s-right">Music</section></div>
            <img src="/sound.gif" alt="Loading..." className="sound" />
        </div>
    );
}