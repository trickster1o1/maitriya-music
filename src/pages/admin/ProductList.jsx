import { useEffect, useState } from "react";
import { MdModeEdit,MdDeleteForever } from "react-icons/md";
export default function ProductList() {
    const [products, setProducts] = useState([]);
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
    useEffect(() => {
        getProducts();
    }, []);
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
                                        </span> {p[1]}
                                        </div>
                                    </td>
                                    <td>{p[3]}</td>
                                    <td>{p[8]}</td>
                                    <td>Rs.{p[7]}</td>
                                    <td>{p[4]}</td>
                                    <td role="button"><MdModeEdit /><MdDeleteForever /></td>
                                </tr>
                            )
                        }
                    </table>
                : null}
            </div>
        </div>
    );
}