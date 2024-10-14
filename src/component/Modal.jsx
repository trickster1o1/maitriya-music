export default function Modal({text,header,id, show, setShow, dFun}) {
    return (
        <div className="modal-cont" style={show ? {'zIndex':'9999','opacity':'1'} : {'zIndex':'-1','opacity':'0'}}>
            <div>
                <div className="modal-head">{header}</div>
                <div>
                    {text}
                </div>
                <div className="modal-foot">
                    <button style={{'backgroundColor':'rgb(255,0,0)'}} role="button" onClick={()=>setShow(!show)}>No</button>
                    <button style={{'backgroundColor':'rgb(100,100,100)'}} role="button" onClick={()=>dFun(id)}>Yes</button>
                </div>
            </div>
        </div>
    );
}