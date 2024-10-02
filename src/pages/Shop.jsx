import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Product from "../component/Product";
import ProductLoader from "../component/ProductLoader";

export default function ShopProd() {
    const [products,setProducts] = useState([]);
    async function getProducts() {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getprods`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setProducts(res.product);
        }).catch(e=>{
            console.log(e);
        });
    }
    useEffect(()=> {
        getProducts();
    }, []);
    return (
        <>
            <Banner  title={'shop'}  />
            <div className="custom-cont products-cont">
                { products && products.length ?
                    <div className="prod-cont">
                        {
                            products.map(p => 
                                <Product title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
                            )

                        }
                    </div>                
                : <div className="prod-cont">
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                  </div>}
                <div className="prod-filter">
                    <input type="text" placeholder="Search Products..." />
                    <button role="button" className="custom-btn">Search</button>
                    <span className="header-filter">Categories</span>
                    <ul>
                        <li>Guitar</li>
                        <li>Piano</li>
                        <li>Flute</li>
                        <li>Djimbe</li>
                        <li>Cajon</li>
                    </ul>
                    <div className="line-break"></div>
                    <span className="header-filter">Brands</span>
                    <ul>
                        <li>Fender</li>
                        <li>Casio</li>
                        <li>Mantra</li>
                        <li>Dream Maker</li>
                        <li>Ibanez</li>
                    </ul>
                </div>
            </div>
        </>
    );
}