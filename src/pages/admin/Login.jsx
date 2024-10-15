import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuLoader } from "react-icons/lu";

export default function Login() {
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false);
    const [err,setErr] = useState('');
    const [data,setData] = useState({user:'',pwd:''});
    useEffect(() => {
        if(sessionStorage.getItem('token')) {
            navigate('/mm3000');
        }
    }, []);
    let login = async () => {
        setLoader(true);
        setErr('');
        await fetch(`https://script.google.com/macros/s/AKfycbyU1SDsHiyyTSlzKDJnLsHy0tfa99tYX7tcsPk4rS2K7kXo_8aCMzTyjg-RE9RPh1l4OQ/exec?type=login&user=${data.user}&pwd=${data.pwd}`)
        .then(res=>res.json()).then(res=>{
            console.log(res);
            if(res.status === 'success') {
                sessionStorage.setItem('token',res.msg);
                window.location.reload();
            } else {
                setErr(res.msg);
                setLoader(false);
            }
        }).catch(e=>{console.log(e);setLoader(false);});

    }
    return (
        <div className="login-cont">
            <form action="javascript:void(0)" onSubmit={login}>
                <span className="main-logo"><span>Maitriya</span> Music</span>
                <input type="text" placeholder="Username"  onChange={(e)=>setData({...data,user: e.target.value})} />
                <input type="password" placeholder="Password" onChange={(e)=>setData({...data,pwd: e.target.value})} />
                <button role="button">Login</button>
                {err ? <span style={{color:'#fff'}}>{err}</span> : null}
            </form>
            <div className="loader" style={loader ? {'display':'flex'} : {'display':'none'}}>
                <span><LuLoader /></span>
            </div>
        </div>
    );
}