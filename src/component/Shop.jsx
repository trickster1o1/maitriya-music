// import e from '../gallery/e.png';
// import g from '../gallery/g.png';
// import u from '../gallery/u.png';
// import j from '../gallery/j.png';
import Product from './Product';

export default function Shop({featured}) {
  return (
    <div className='main-shop-cont'>
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
        {featured.length ?
        featured.slice(0, 4).map(p => 
          <Product title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
        )
        :
        <>
        <div className="prod-p-cont p-loader">
          <div className="thumb-cont">
          </div>
          <div className="prod-title">
          </div>
          <div className="prod-info">
            <button className="custom-btn"></button>
            <button className="custom-btn"></button>
          </div>
        </div>
        <div className="prod-p-cont p-loader">
          <div className="thumb-cont">
          </div>
          <div className="prod-title">
          </div>
          <div className="prod-info">
            <button className="custom-btn"></button>
            <button className="custom-btn"></button>
          </div>
        </div>
        <div className="prod-p-cont p-loader">
          <div className="thumb-cont">
          </div>
          <div className="prod-title">
          </div>
          <div className="prod-info">
            <button className="custom-btn"></button>
            <button className="custom-btn"></button>
          </div>
        </div>
        <div className="prod-p-cont p-loader">
          <div className="thumb-cont">
          </div>
          <div className="prod-title">
          </div>
          <div className="prod-info">
            <button className="custom-btn"></button>
            <button className="custom-btn"></button>
          </div>
        </div>
        </> 
        }
      </div>
    </div>
  );
}
