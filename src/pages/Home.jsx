import { useState } from "react";

export default function Home() {
    let [data,setData] = useState({});
    async function testGet() {
        console.log('Adding...');
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?category=${data.category}&brand=${data.brand}&name=${data.name}&desc=${data.desc}&price=${data.price}&thumb=${data.thumb}&imgs=${data.imgs}`)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
        }).catch(e=>console.log(e));
    }

    return (
        <>
        <div className="banner-cont">
        </div>
        <input type="text" placeholder="brand" onChange={(e)=>setData({...data, brand: e.target.value})} /><br />
        <input type="text" placeholder="category" onChange={(e)=>setData({...data, category: e.target.value})} /><br />
        <input type="text" placeholder="Name" onChange={(e)=>setData({...data, name: e.target.value})} /><br />
        <input type="text" placeholder="Description" onChange={(e)=>setData({...data, desc: e.target.value})} /><br />
        <input type="text" placeholder="Price" onChange={(e)=>setData({...data, price: e.target.value})} /><br />
        <input type="text" placeholder="Thumbnail" onChange={(e)=>setData({...data, thumb: e.target.value})} /><br />
        <input type="text" placeholder="Images" onChange={(e)=>setData({...data, imgs: e.target.value})} /><br />
        <button onClick={testGet}>Check Get</button>
        </>
    );
}