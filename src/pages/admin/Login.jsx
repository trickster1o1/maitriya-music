import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    let login = () => {
        navigate('/mm3000');
    }
    return (
        <div className="login-cont">
            <form action="javascript:void(0)" onSubmit={login}>
                <span className="main-logo"><span>Maitriya</span> Music</span>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button role="button">Login</button>
            </form>
        </div>
    );
}