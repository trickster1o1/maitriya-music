import { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Product from "../component/Product";

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
                : <div>
                    loading...
                  </div>}
                <div>B</div>
            </div>
        </>
    );
}