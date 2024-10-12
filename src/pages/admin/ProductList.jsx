import { useEffect, useState } from "react";
import { MdModeEdit,MdDeleteForever } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import Modal from "../../component/Modal";
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [show,setShow] = useState(false);
    const [loader,setLoader] = useState(false);
    const [pid,setPid] = useState(0);
    const [data,setData] = useState({
        title: '', price: '', brand:'',category:'',featured:'',description:'',thumbnail:''
    });
    async function getProducts() {
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=getprods`)
        .then(res=>res.json())
        .then(res=>{
            setProducts(res.product);
        }).catch(e=>{
            console.log(e);
        });
    }
    useEffect(() => {
        getProducts();
    }, []);

    let delProd = async (id) => {
        setShow(!show);
        setLoader(true);
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=delprod&id=${id}`)
        .then(res=>res.json()).then(res=>{
            console.log(res);
            setProducts(res.products);
            setLoader(false);
        }).catch(e=>{
            console.log(e);
            setLoader(false);
        });
    }
    return (
        <div className="admin-cont">
            <h2 className="admin-header">Products <button role="button">Add</button></h2>

            <div className="list-cont">
                {products && products.length ?
                    <table>
                        <tr>
                            <th width="50%">Name</th>
                            <th width="10%">Brand</th>
                            <th width="10%">Category</th>
                            <th width="10%">Price</th>
                            <th width="10%">Featured</th>
                            <th width="10%">Action</th>
                        </tr>
                        {
                            products.map((p,index)=>
                                <tr key={index}>
                                    <td>
                                        <div>
                                        <span className="t-cont">
                                            <img src={p[9]} alt="title" className="i-fit"/>
                                        </span> <a href={`/product/${p[2]}`} target="_blank" rel="noopener noreferrer">{p[1]}</a>
                                        </div>
                                    </td>
                                    <td>{p[3]}</td>
                                    <td>{p[8]}</td>
                                    <td>Rs.{p[7]}</td>
                                    <td>{p[4]}</td>
                                    <td role="button"><MdModeEdit title='Edit' /><MdDeleteForever title="Delete" 
                                    onClick={()=>{setShow(!show);setPid(p[0]);setData({
                                        title: p[1], price: p[7], brand:p[3],category:p[8],featured:p[4],description:p[6],thumbnail:p[9]
                                    })}} /></td>
                                </tr>
                            )
                        }
                    </table>
                : 'Loading ...'}
            </div>
            <Modal text={'Are you sure you want to delete this item ?'} id={pid} header={'Confirm'} show={show} setShow={setShow} dFun={delProd} />
            <div className="loader" style={loader ? {'display':'flex'} : {'display':'none'}}>
                <span><LuLoader /></span>
            </div>
        </div>
    );
}