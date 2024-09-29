import e from '../gallery/e.png';
import g from '../gallery/g.png';
import u from '../gallery/u.png';
import j from '../gallery/j.png';
import Product from './Product';

export default function Shop() {
  return (
    <>
      <div className="shop-cont custom-cont">
        <h1 className="custom-header">Shop Now</h1>
        <p>
          Aenean tempor auctor dui sed eleifend. Praesent maximus <br />
          justo quis tellus placerat, eget molestie nisl dignissim.
        </p>
        <div className="tab-btn-cont">
          <button className="custom-btn active">New</button>
          <button className="custom-btn">Bestseller</button>
          <button className="custom-btn">Sale</button>
        </div>
      </div>

      <div className="prod-cont">
        <Product title ='Ibanez Electric Guitar' price='25000' img={e} link='' />
        <Product title ='Hopner guitar' price='8000' img={g} link='' />
        <Product title ='kasper' price='4500' img={u} link='' />
        <Product title ='Djembe High Quality Wood' price='10000' img={j} link='' />
      </div>
    </>
  );
}
