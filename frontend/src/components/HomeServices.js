import Link from "next/link"
export default function HomeServices() {
    return (
        <div className="container text-center">
            <h2>Services</h2>
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ "width":"18rem;"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body bg-color-normal text-center">
                            <h6 className="card-text text-white ">online Book</h6>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ "width":" 18rem;"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body bg-color-normal text-center">
                            <h6 className="card-text text-white ">Events</h6>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ "width":" 18rem"}}>
                    <Link href='/room-type'> <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body bg-color-normal text-center">
                            <h6 className="card-title text-white ">Room servicse</h6>
                        </div></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}