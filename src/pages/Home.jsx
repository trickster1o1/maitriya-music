import { useState, useEffect } from "react";
import Categories from "../component/Categories";
import AboutUs from "../component/About";
import Shop from "../component/Shop";
import Loader from "../component/Loader";
import { useDispatch } from "react-redux";
import { changeUrl } from "../feature/navPing";

export default function Home() {
    const [featured,setFeatured] = useState([]);
    const [gallery,setGallery] = useState([]);
    const setUrl = useDispatch();
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

    let getGallery = async () => {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getgallery`)
        .then(res=>res.json()).then(res=>{
            setGallery(res.products.reverse());
        }).catch(e=>console.log(e));
    }
    useEffect(() => {
        setUrl(changeUrl('home'));
        getGallery();
        getFeatured();
    }, []);

    return (
        <>
        <Loader />
        <div className="banner-cont">
        </div>
        <Categories />
        <AboutUs gallery = {gallery} />
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