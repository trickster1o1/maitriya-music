import { Link } from "react-router-dom";

export default function AboutUs({ gallery }) {
  return (
    <div className="about-cont">
      <div className="about-desc custom-cont">
        <h1 className="custom-header">About Us</h1>
        <p>
          {/* Aenean tempor auctor dui sed eleifend. Praesent maximus justo quis
          tellus placerat, eget molestie nisl dignissim. Ut sem eros, elementum
          sit amet felis id, efficitur semper odio. Pellentesque eu eros
          efficitur, consequat arcu quis, varius ex. Nam interdum ligula quis
          risus blandit volutpat. */}
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
                <img src={e[1]} alt={"Img-" + key} />
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
