import { useEffect, useState } from "react";
import { LuLoader } from "react-icons/lu";
import Modal from "../../component/Modal";
import { MdDeleteForever } from "react-icons/md";


export default function Gallery() {
    const [loader,setLoader] = useState(false);
    const [gallery, setGallery] = useState([]);
    const [img,setImg] = useState('');
    const [show,setShow] = useState(false);
    const [pop,setPop] = useState(false);
    const [pid, setPid] = useState(0);
    const delGallery = async () => {
        setShow(false);
        setLoader(true);
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=delgallery&id=${pid}`)
        .then(res=>res.json()).then(res=>{
            setGallery(res.gallery);setLoader(false);
        }).catch(e=>{console.log(e);setLoader(false);});
    }
    let getGallery = async () => {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getgallery`)
        .then(res=>res.json()).then(res=>{
            setGallery(res.products);
        }).catch(e=>console.log(e));
    }

    let addGallery = async () => {
        setLoader(true);
        setPop(false);
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=addgallery&img=${img}`)
        .then(res=>res.json()).then(res=>{
            setGallery(res.gallery);
            setLoader(false);
            setImg('');
        }).catch(e=>{console.log(e);setLoader(false);setImg('');});
    }
    useEffect(()=> {
        getGallery();
    }, []);
    return (
        <div className="admin-cont">
            <h2 className="admin-header">Gallery <button role="button" 
            onClick={()=>setPop(true)}
            >Add</button></h2>

            <div className="list-cont">
                {
                    gallery && gallery.length ?
                        gallery.map((g,key) => 
                            <div className="g-img" key={key}>
                                <div className="overlay">
                                    <span role="button">
                                        <MdDeleteForever title="Delete" onClick={()=>{setShow(true);setPid(g[0])}} />
                                    </span>
                                </div>
                                <img  src={g[1]} alt={"img-"+key} />
                            </div>
                        )
                    : 'loading...'
                }
            </div>
            <Modal text={'Are you sure you want to delete this image ?'} id={pid} header={'Confirm'} show={show} setShow={setShow} dFun={delGallery} />
            <div className="loader" style={loader ? {'display':'flex'} : {'display':'none'}}>
                <span><LuLoader /></span>
            </div>
            <div className="product-pop" style={pop ? {'zIndex':'9999','opacity':'1'} : {'zIndex':'-1','opacity':'0'}}>
                <div className="pop-cont">
                        <div className="modal-head">
                            Add Image
                        </div>
                        <div className="pop-body">
                            <span className="in-cont">
                                <input type="text" value={img} onChange={(e)=>setImg(e.target.value)} />
                                <span>Image</span>
                            </span>
                            
                        </div>
                        <div className="modal-foot">
                            <button style={{'backgroundColor':'rgb(255,0,0)'}} role="button" onClick={()=>setPop(false)}>Cancel</button>
                            <button style={{'backgroundColor':'rgb(100,100,100)'}} role="button" onClick={addGallery} >Add</button>
                        </div>
                </div>
            </div>
        </div>
    )
}