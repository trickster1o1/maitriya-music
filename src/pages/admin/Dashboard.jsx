import { useEffect } from "react"

export default function Dashboard() {
    useEffect(() => {
        console.log(window.location.href.split('/').length)
    },[]);
    return (
        <div className="admin-cont">
            <h1>Dashboard</h1>
        </div>
    )
}