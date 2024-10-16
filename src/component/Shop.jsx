import { useEffect, useState } from 'react';
import Product from './Product';
import ScrollTrigger from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function Shop({featured}) {
  const [filter,setFilter] = useState('new');

  useEffect(() => {
    let ctx = gsap.context(() => {
      let tm = gsap.timeline({
        scrollTrigger: {
          trigger: ".shop-cont",
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tm.from(".shop-ani", {
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
    <div className='main-shop-cont'>
      <div className="shop-cont custom-cont">
        <h1 className="custom-header shop-ani">Shop Now</h1>
        <p className='shop-ani'>
          {/* Aenean tempor auctor dui sed eleifend. Praesent maximus <br />
          justo quis tellus placerat, eget molestie nisl dignissim. */}
          Explore our wide range of top-quality instruments, <br /> gear, and accessories for musicians of all levels.
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

      <div className="prod-cont mini-p">
        {featured.length ?
        (
          filter === 'new' ?
          featured.slice(0,4).map(p => 
            <Product className='shop-ani' title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
          )
          : filter === 'bs' ? 
          featured.filter(e=>e[4].toString()==='1').slice(0,4).map(p => 
            <Product className='shop-ani' title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
          )
          : featured.filter(e=>e[5].toString()==='1').slice(0,4).map(p => 
            <Product className='shop-ani' title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
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
