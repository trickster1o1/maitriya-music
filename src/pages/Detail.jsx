import { useParams } from "react-router-dom";

export default function Detail() {
    const param = useParams();
    return (
        <div className="detail-cont custom-cont">
            <h1>Working {param.slug}</h1>
        </div>
    );
}