import { useEffect, useState } from "react"
import Loader from "../component/Loader";
import { GiCancel } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { changeUrl } from "../feature/navPing";

export default function Galleries() {
    const [gallery,setGallery] = useState([]);
    const [img,setImg] = useState({show:false, src:''});
    const setUrl = useDispatch();

    let getGallery = async () => {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getgallery`)
        .then(res=>res.json()).then(res=>{
            setGallery(res.products.reverse());
            let ld = document.getElementById('l-c');
            ld.style.opacity = 0;
            ld.style.zIndex = -1;
        }).catch(e=>console.log(e));
    }
    useEffect(() => {
        setUrl(changeUrl('gallery'));
        getGallery();
    }, []);
    return (
        <>
        <div className="custom-cont gal-cont">
        <Loader />

            {
                gallery && gallery.length ?
                        gallery.map((g,key) => 
                            <div className="g-img" key={key} role="button" onClick={()=>setImg({show: true, src:g[1]})}>
                                <div className="overlay"></div>
                                <img  src={g[1]} alt={"img-"+key} className="i-fit" />
                            </div>
                        )
               
                : <h2>Gallery's Empty!</h2>
            }
        </div>
        <div className="img-preview" style={img.show ? {zIndex: '9999',opacity:1} : {zIndex: '-1',opacity:'0'}}>
            <span role="button" onClick={()=>setImg({...img,show:false})}><GiCancel /></span>
            <img src={img.src} alt="Image Preview" />
        </div>
        </>
    )
}