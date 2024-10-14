import { useEffect, useState } from "react";
import { MdModeEdit,MdDeleteForever } from "react-icons/md";
import { LuLoader } from "react-icons/lu";
import Modal from "../../component/Modal";
import { ClassicEditor, Context, Bold, Essentials, Italic, Paragraph, ContextWatchdog } from 'ckeditor5';
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import slugify from 'react-slugify';

import 'ckeditor5/ckeditor5.css';
export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [show,setShow] = useState(false);
    const [loader,setLoader] = useState(false);
    const [pid,setPid] = useState(0);
    const [pop,setPop] = useState(false);
    const [data,setData] = useState({
        title: '', price: '', brand:'',category:'',featured:'',thumbnail:'',slug:''
    });
    const [desc,setDesc] = useState('');
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
            setProducts(res.products);
            setLoader(false);
        }).catch(e=>{
            console.log(e);
            setLoader(false);
        });
    }

    let hanleProd = async (type) => {
        setPop(false);
        setLoader(true)
        if(type === 'u') {
            await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=updprod&title=${data.title}&slug=${data.slug}&description=${desc}&featured=${data.featured}&thumbnail=${data.thumbnail}&category=${data.category}&brand=${data.brand}&price=${data.price}`)
            .then(res=>res.json()).then(res=>{
                setProducts(res.products);
                setLoader(false);
            }).catch(e=>{console.log(e);
                setLoader(false);
            });
        } else if (type === 'a') {
            await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=addprod&category=${data.category}&brand=${data.brand}&name=${data.title}&slug=${slugify(data.title)}&desc=${desc}&price=${data.price}&thumb=${data.thumbnail}&featured=${data.featured}`)
            .then(res=>res.json()).then(res=>{
                setProducts(res.products);
                setLoader(false);
            }).catch(e=>{console.log(e);
                setLoader(false);
            });
        }
    }
    return (
        <div className="admin-cont">
            <h2 className="admin-header">Products <button role="button" 
            onClick={()=>{
                setData({
                    title: '', price: '', brand:'',category:'',featured:'',thumbnail:'',
                    slug: ''
                });
                setDesc('');setPop(true);
            }}>Add</button></h2>

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
                                    <td role="button"><MdModeEdit title='Edit'
                                        onClick={()=>{
                                            setData({
                                                title: p[1], price: p[7], brand:p[3],category:p[8],featured:p[4],thumbnail:p[9],
                                                slug: p[2]
                                            });
                                            setDesc(p[6]);setPop(true);
                                        }}
                                    /><MdDeleteForever title="Delete" 
                                    onClick={()=>{setShow(!show);setPid(p[0]);}} /></td>
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
            <div className="product-pop" style={pop ? {'zIndex':'9999','opacity':'1'} : {'zIndex':'-1','opacity':'0'}}>
                <div className="pop-cont">
                        <div className="modal-head">
                            {data.slug ? data.slug : 'Add Product'}
                        </div>
                        <div className="pop-body">
                            <span className="in-cont">
                                <input type="text" value={data.title} onChange={(e)=>setData({...data, title: e.target.value})} />
                                <span>Title</span>

                            </span>
                            
                            <span className="in-cont">
                                <input type="text" value={data.price} onChange={(e)=>setData({...data, price: e.target.value})} />
                                <span>Price</span>

                            </span>
                            
                            <span className="in-cont">
                                <input type="text" value={data.brand} onChange={(e)=>setData({...data, brand: e.target.value})} />
                                <span>Brand</span>
                            </span>
                            
                            <span className="in-cont">
                                <input type="text" value={data.category} onChange={(e)=>setData({...data, category: e.target.value})} />
                                <span>Category</span>
                            </span>

                            <span className="in-cont">
                                <input type="text" value={data.thumbnail} onChange={(e)=>setData({...data, thumbnail: e.target.value})} />
                                <span>Thumb</span>
                            </span>
                            <span className="in-cont">
                                <CKEditorContext
                                    context={ Context }
                                    contextWatchdog={ ContextWatchdog }
                                    onChangeInitializedEditors={ ( editors ) => {
                                        console.info( editors.editor1?.instance, editors.editor1?.yourAdditionalData );
                                    } }
                                >
                                <CKEditor
                                    editor={ ClassicEditor }
                                    config={ {
                                    plugins: [ Essentials, Bold, Italic, Paragraph ],
                                    toolbar: [ 'undo', 'redo', '|', 'bold', 'italic' ],
                                    } }
                                    data={desc}
                                    onChange={(event, editor) => {
                                        setDesc(editor.getData());
                                    }}
                                    onReady={ ( editor ) => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor 2 is ready to use!', editor );
                                    } }
                                />
                                </CKEditorContext>
                                <span>Description</span>

                            </span>
                            <span className="in-cont">
                                <label htmlFor="featured" style={{color:'rgba(0,0,0,.5)',fontSize:'15px'}}>Is Featured</label>
                                <input type="checkbox" id="featured" style={{width: 'fit-content',marginLeft:'1em'}}
                                    checked={data.featured === 1 ? true : false}
                                    onChange={(e)=>setData({...data, featured: data.featured === 1 ? 0 : 1})}
                                />
                            </span>
                            
                        </div>
                        <div className="modal-foot">
                            <button style={{'backgroundColor':'rgb(255,0,0)'}} role="button" onClick={()=>setPop(false)}>Cancel</button>
                            <button style={{'backgroundColor':'rgb(100,100,100)'}} role="button" onClick={()=>hanleProd(data.slug ? 'u' : 'a')}>{data.slug ? 'Update' : 'Add'}</button>
                        </div>
                </div>
            </div>
        </div>
    );
}