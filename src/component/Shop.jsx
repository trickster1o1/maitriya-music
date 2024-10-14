import { useState } from 'react';
import Product from './Product';

export default function Shop({featured}) {
  const [filter,setFilter] = useState('new');
  return (
    <div className='main-shop-cont'>
      <div className="shop-cont custom-cont">
        <h1 className="custom-header">Shop Now</h1>
        <p>
          Aenean tempor auctor dui sed eleifend. Praesent maximus <br />
          justo quis tellus placerat, eget molestie nisl dignissim.
        </p>
        <div className="tab-btn-cont">
          <button className={`custom-btn ${filter === 'new' ? 'active' : null}`} onClick={()=>setFilter('new')}>New</button>
          {
            featured.filter(e=>e[4].toString()==='1').length ? 
              <button className={`custom-btn ${filter === 'bs' ? 'active' : null}`} onClick={()=>setFilter('bs')}>Bestseller</button>
            : null
          }
          {
            featured.filter(e=>e[5].toString()==='1').length ?
              <button className={`custom-btn ${filter === 'sale' ? 'active' : null}`} onClick={()=>setFilter('sale')}>Sale</button>
            : null
          }
        </div>
      </div>

      <div className="prod-cont">
        {featured.length ?
        (
          filter === 'new' ?
          featured.slice(0,4).map(p => 
            <Product title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
          )
          : filter === 'bs' ? 
          featured.filter(e=>e[4].toString()==='1').slice(0,4).map(p => 
            <Product title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
          )
          : featured.filter(e=>e[5].toString()==='1').slice(0,4).map(p => 
            <Product title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
          )
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
