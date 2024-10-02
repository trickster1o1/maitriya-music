import { useParams, Link } from "react-router-dom";
import Banner from "../component/Banner";
import { useEffect, useState } from "react";
import Product from "../component/Product";

export default function Detail() {
    const param = useParams();
    const [prod,setProd] = useState([]);
    const [related,setRelated] = useState([]);
    async function getProd() {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getprod&slug=${param.slug}`)
        .then(res=>res.json())
        .then(async (res)=>{
            setProd(res.product);
            if(res.product.length) {
                await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getrelated&category=${res.product[8].toString().toLowerCase()}&brand=${res.product[3] === 'No brand' ? '0' : res.product[3].toString().toLowerCase()}&id=${res.product[0]}`)
                    .then(res=>res.json()).then(res=> {
                        setRelated(res.products);
                    }).catch(e=>console.log(e));
            }
        }).catch(e=>{
            console.log(e);
        });
    }
    useEffect(()=> {
        getProd();
    }, []); 
    return (
        <>
            <Banner title={prod.length ? prod[1] : ''} sub={'shop'} />
            <div className="detail-cont custom-cont">
                <div>
                    {prod.length ?
                        <img src={prod[9]} alt={prod[1]} />
                    : null}
                </div>
                <div>
                    <div className="detail-detail">
                        <h1 className="custom-header">{prod.length ? prod[1] : null}</h1>
                        {prod.length ? 
                        <>
                            <span>Category: <Link to={'/'}>{prod[8]}</Link></span>
                            <span>Brand: <Link to={'/'}>{prod[3]}</Link></span>
                            <div className="line-break"></div>
                        </>
                        : null}
                    </div>
                    {
                        prod.length ? 
                        <>
                        <p>{prod[6]}</p>
                        <div className="line-break"></div>
                        <div className="p-price">
                            <span>Price:</span><span>Rs.{prod[7]}</span>    <br />
                            <button className="custom-btn">
                                Inquire
                            </button>
                        </div>
                        </>
                        : null
                    }
                </div>
            </div>
            {
                prod && prod.length && related && related.length ?
                <>
                <h1 className="custom-header" 
                style={{'backgroundColor':'white','marginTop':'0','paddingTop':'2em'}}>Related Products</h1>
                <div className="prod-cont related-cont">
                    {
                        related.map(p=> 
                            <Product title ={p[1]} price={p[7]} img={p[9]} link={'/product/'+p[2]} />
                        )
                    }
                </div>
                </>
                : null
            }
        </>
    );
}