import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Product from "../component/Product";
import ProductLoader from "../component/ProductLoader";
import Loader from "../component/Loader";
import { useParams } from "react-router-dom";

export default function ShopProd() {
    const param = useParams();
    const [products,setProducts] = useState([]);
    const [filter,setFilter] = useState(null);
    const [narrow,setNarrow] = useState('');
    async function getProducts() {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getprods`)
        .then(res=>res.json())
        .then(res=>{
            setProducts(res.product);
            setFilter(param.brand ? res.product.filter(e=>e[3].toLowerCase()===param.brand.toLowerCase()) : res.product);
            let ld = document.getElementById('l-c');
            ld.style.opacity = 0;
            ld.style.zIndex = -1;
        }).catch(e=>{
            console.log(e);
        });
    }

    let changeFilter = (type, fil = '') => {
        switch(type) {
            case 'brand':
                setFilter(products.filter(e=>e[3].toLowerCase() === fil.toLowerCase()));
                break;
            case 'category':    
                setFilter(products.filter(e=>e[8].toLowerCase() === fil.toLowerCase()));
                break;
            default:
                setFilter(products.filter(e=>e[1].toLowerCase().indexOf(narrow.toLowerCase()) !== -1 ));
                break;
        }
    }
    useEffect(()=> {
        getProducts();
    }, [param.brand]);
    return (
        <>
            <Loader />
            <Banner  title={'shop'}  />
            <div className="custom-cont products-cont">
                { filter && filter.length ?
                    <div className="prod-cont">
                        {
                            filter.map(p => 
                                <Product title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
                            )

                        }
                    </div>                
                : filter && !filter.length ? 
                <div className="prod-cont">
                    <h2 className="custom-header">No Products To Display.</h2>
                </div>
                : <div className="prod-cont">
                    <ProductLoader />
                    <ProductLoader />
                    <ProductLoader />
                  </div>}
                <div className="prod-filter">
                    <input type="text" placeholder="Search Products..." onChange={(e)=>setNarrow(e.target.value)} onKeyDown={(e)=>e.code === 'Enter' ? changeFilter('title') : null} />
                    <button role="button" className="custom-btn" onClick={()=>changeFilter('title')}>Search</button>
                    <span className="header-filter">Categories</span>
                    <ul>
                        <li onClick={()=>changeFilter('category','guitar')}>Guitar</li>
                        <li onClick={()=>changeFilter('category','piano')}>Piano</li>
                        <li onClick={()=>changeFilter('category','flute')}>Flute</li>
                        <li onClick={()=>changeFilter('category','djimbe')}>Djimbe</li>
                        <li onClick={()=>changeFilter('category','cajon')}>Cajon</li>
                    </ul>
                    <div className="line-break"></div>
                    <span className="header-filter">Brands</span>
                    <ul>
                        <li onClick={()=>changeFilter('brand','fender')}>Fender</li>
                        <li onClick={()=>changeFilter('brand','casio')}>Casio</li>
                        <li onClick={()=>changeFilter('brand','mantra')}>Mantra</li>
                        <li onClick={()=>changeFilter('brand','dream maker')}>Dream Maker</li>
                        <li onClick={()=>changeFilter('brand','ibanez')}>Ibanez</li>
                    </ul>
                </div>
            </div>
        </>
    );
}