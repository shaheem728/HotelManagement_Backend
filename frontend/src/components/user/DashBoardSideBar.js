import Link from "next/link"
import { usePathname } from "next/navigation"
export default function page(){
    const pathname = usePathname()
    return (
        <div className="list-group shadow-lg p-3 m-auto  bg-body-tertiary rounded">
        <Link className={`list-group-item ${pathname == '/user/dashboard' ?'bg-color-dark':''} `} href={'/user/dashboard'}>DashBoard</Link>
        <Link className={`list-group-item ${pathname == '/user/booking_history' ?'bg-color-dark':''} `}href="/user/booking_history">Booking History</Link>
        <Link className={`list-group-item ${pathname == '/user/event_booking_history' ?'bg-color-dark':''} `}href="/user/event_booking_history">Event Booking History</Link>
        <Link className={`list-group-item ${pathname == '/user/payment_logs' ?'bg-color-dark':''} `}href="/user/payment_logs">Payment logs</Link>
        <Link className={`list-group-item ${pathname == '/user/profile_update' ?'bg-color-dark':''} `}href="/user/profile_update">Update Profile</Link>
        <a className="list-group-item text-danger " href="#">Logout</a>
    </div>
    )
}