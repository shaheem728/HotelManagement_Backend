import Link from "next/link"
export default function page() {
    return (
        <div className="container py-1">
            <h1>Rooms</h1>
            <div className="row">
                <div className="col-4 ">
                    <div className="card m-1" style={{ "width": "18rem" }}>
                        <Link href='/room-type/single-bedroom'> <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body bg-color-normal text-center">
                                <h6 className="card-text text-white ">Single BedRoom</h6>
                            </div></Link>
                    </div>
                </div>
                <div className="col-4">
                    <Link href='/room-type/double-bedroom'> <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body bg-color-normal text-center">
                            <h6 className="card-text text-white ">Double BedRoom</h6>
                        </div></Link>
                </div>
                <div className="col-4">
                    <div className="card" style={{ "width": " 18rem" }}>
                        <Link href='/room-type/single-bedroom'> <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body bg-color-normal text-center">
                                <h6 className="card-text text-white ">Single BedRoom</h6>
                            </div></Link>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ "width": " 18rem" }}>
                        <Link href='/room-type/double-bedroom'><img src="..." className="card-img-top" alt="..." />
                            <div className="card-body bg-color-normal text-center">
                                <h6 className="card-text text-white ">Room Type 4</h6>
                            </div></Link>
                    </div>
                </div>
                <div className="col-4">
                    <Link href='/room-type/single-bedroom'> <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body bg-color-normal text-center">
                            <h6 className="card-text text-white ">Single BedRoom</h6>
                        </div></Link>
                </div>
                <div className="col-4">
                    <Link href='/room-type/single-bedroom'> <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body bg-color-normal text-center">
                            <h6 className="card-text text-white ">Single BedRoom</h6>
                        </div></Link>
                </div>

            </div>
        </div>
    )
}