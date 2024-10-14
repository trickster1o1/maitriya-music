import { useState, useEffect } from "react";
import Categories from "../component/Categories";
import AboutUs from "../component/About";
import Shop from "../component/Shop";
import Loader from "../component/Loader";
// import slugify from 'react-slugify';

export default function Home() {
    let [featured,setFeatured] = useState([]);

    // let [loader,setLoader] = useState(0);
    // async function testGet() {
    //     setLoader(1);
    //     console.log('Adding...');
    //     await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=addprod&category=${data.category}&brand=${data.brand}&name=${data.name}&slug=${slugify(name)}&desc=${data.desc}&price=${data.price}&thumb=${data.thumb}&imgs=${data.imgs}`)
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res);
    //         setData({});
    //         setLoader(0);
    //     }).catch(e=>{
    //         console.log(e);
    //         setLoader(0);
    //     });
    // }

    async function getFeatured() {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getprods`)
        .then(res=>res.json())
        .then(res=>{
            setFeatured(res.product.reverse());
            let ld = document.getElementById('l-c');
            ld.style.opacity = 0;
            ld.style.zIndex = -1;
        }).catch(e=>{
            console.log(e);
        });
    }
    useEffect(() => {
        getFeatured();
    }, []);

    return (
        <>
        <Loader />
        <div className="banner-cont">
        </div>
        <Categories />
        <AboutUs />
        <Shop featured = {featured} />
        {/* <input type="text" placeholder="brand" value={data.brand ? data.brand : ''} onChange={(e)=>setData({...data, brand: e.target.value})} /><br />
        <input type="text" placeholder="category" value={data.category ? data.category : ''} onChange={(e)=>setData({...data, category: e.target.value})} /><br />
        <input type="text" placeholder="Name" value={data.name ? data.name : ''} onChange={(e)=>setData({...data, name: e.target.value})} /><br />
        <input type="text" placeholder="Description" value={data.desc ? data.desc : ''} onChange={(e)=>setData({...data, desc: e.target.value})} /><br />
        <input type="text" placeholder="Price" value={data.price ? data.price : ''} onChange={(e)=>setData({...data, price: e.target.value})} /><br />
        <input type="text" placeholder="Thumbnail" value={data.thumb ? data.thumb : ''} onChange={(e)=>setData({...data, thumb: e.target.value})} /><br />
        <input type="text" placeholder="Images" value={data.imgs ? data.imgs : ''} onChange={(e)=>setData({...data, imgs: e.target.value})} /><br />
        <span style={loader ? {display: 'block'} : {display: 'none'}}>Posting....</span>
        <button onClick={testGet}>Add Product</button> */}
        </>
    );
}