import imgA from '../gallery/a.jpg';
import imgB from '../gallery/b.jpg';
import imgC from '../gallery/c.jpg';
export default function AboutUs() {
  return (
    <div className="about-cont">
      <div className="about-desc custom-cont">
        <h1 className="custom-header">About Us</h1>
        <p>
          Aenean tempor auctor dui sed eleifend. Praesent maximus justo quis
          tellus placerat, eget molestie nisl dignissim. Ut sem eros, elementum
          sit amet felis id, efficitur semper odio. Pellentesque eu eros
          efficitur, consequat arcu quis, varius ex. Nam interdum ligula quis
          risus blandit volutpat.
        </p>
      </div>
      <div className="about-gallery">
          <div><img src={imgA} alt="Img A" /></div>
          <div><img src={imgB} alt="Img A" /></div>
          <div><img src={imgC} alt="Img A" /></div>
          <div className='more-img'><button className='custom-btn'>View More</button></div>
      </div>     
    </div>
  );
}
