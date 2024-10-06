import { useNavigate } from "react-router-dom";

export default function Categories() {
    const navigate = useNavigate();
    return (
        <div className="category-cont custom-cont">
            <h1 className="custom-header">Categories</h1>
            <div>
                <div role="button" onClick={()=>navigate('/shop/c/guitar')}><div className="overlay"></div><h3 className="custom-header">Guitar</h3></div>
                <div role="button" onClick={()=>navigate('/shop/c/ukulele')}><div className="overlay"></div><h3 className="custom-header">Ukulele</h3></div>
                <div role="button" onClick={()=>navigate('/shop/c/keyboard')}><div className="overlay"></div><h3 className="custom-header">Keyboard</h3></div>
                <div role="button" onClick={()=>navigate('/shop/c/cajon')}><div className="overlay"></div><h3 className="custom-header">Cajón</h3></div>
            </div>
        </div>
    );
}