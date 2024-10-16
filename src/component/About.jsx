import { useEffect } from "react";
import { Link } from "react-router-dom";
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function AboutUs({ gallery }) {
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tm = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-cont",
          start: "top 45%",
          toggleActions: "play none none none",
        },
      });

      tm.from(".about-ani", {
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
    <div className="about-cont">
      <div className="about-desc custom-cont">
        <h1 className="custom-header about-ani">About Us</h1>
        <p className="about-ani">
          Welcome to Maitreya Music, your one-stop shop for all things music!
          Whether you're a beginner looking to find your first instrument or a
          seasoned musician searching for the perfect gear, we've got you
          covered. With a wide range of instruments, accessories, and equipment
          from top brands, we are passionate about helping you make music your
          way.
        </p>
      </div>
      <div className="about-gallery">
        {/* <div><img src='/gall/a.jpg' alt="Img A" /></div>
          <div><img src='/gall/b.jpg' alt="Img A" /></div>
          <div><img src='/gall/c.jpg' alt="Img A" /></div> */}
        {gallery && gallery.length ? (
          <>
            {gallery.slice(0, 3).map((e, key) => (
              <div key={key}>
                <img src={e[1]} alt={"Img-" + key} className="about-ani" />
              </div>
            ))}
            <div className="more-img">
              <Link to={"/gallery"} className="custom-btn">
                View More
              </Link>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
