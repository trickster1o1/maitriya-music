import { useNavigate } from "react-router-dom";
import gCover from '../gallery/categories/guitar_cover.jpg';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

export default function Categories() {
    const navigate = useNavigate();
    gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tm = gsap.timeline({
        scrollTrigger: {
          trigger: ".category-cont",
          start: "top 45%",
          toggleActions: "play none none none",
        },
      });

      tm.from(".ani-cat", {
        y: 25,
        duration: 0.8,
        opacity: 0,
        ease: "power2.inOut",
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);
    return (
        <div className="category-cont custom-cont">
            <h1 className="custom-header">Categories</h1>
            <div>
                <div className="ani-cat" role="button" onClick={()=>navigate('/shop/c/guitar')} style={{backgroundImage: `url('${gCover}')`}} ><div className="overlay"></div><h3 className="custom-header">Guitar</h3></div>
                <div className="ani-cat" role="button" onClick={()=>navigate('/shop/c/ukulele')}><div className="overlay"></div><h3 className="custom-header">Ukulele</h3></div>
                <div className="ani-cat" role="button" onClick={()=>navigate('/shop/c/keyboard')}><div className="overlay"></div><h3 className="custom-header">Keyboard</h3></div>
                <div className="ani-cat" role="button" onClick={()=>navigate('/shop/c/cajon')}><div className="overlay"></div><h3 className="custom-header">Cajón</h3></div>
            </div>
        </div>
    );
}