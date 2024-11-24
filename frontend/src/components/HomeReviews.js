'user client'
import Link from "next/link";
import { FaStar } from "react-icons/fa";

export default function HomeReviews() {
    return (
        <div className="container">
            <h2 className="text-center">Reviews <Link href="/reviews" className="float-end fs-5 btn bg-color-dark">View All</Link></h2>
            <div className="row d-flex flex-wrap justify-content-center">
                <div className="col-5 bg-info m-1">
                   <h5>Author</h5>
                   <p>This awesome project</p>
                   <div style={{ color: "#FFD700", fontSize: "24px" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar style={{ opacity: 0.3 }} />
                    </div>
                </div>
                <div className="col-5 bg-info m-1">
                   <h5>Author </h5>
                   <p>This awesome project</p>
                   <div style={{ color: "#FFD700", fontSize: "24px" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar style={{ opacity: 0.3 }} />
                    </div>
                </div>
                <div className="col-5 bg-info m-1">
                   <h5>Author </h5>
                   <p>This awesome project</p>
                   <div style={{ color: "#FFD700", fontSize: "24px" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar style={{ opacity: 0.3 }} />
                    </div>
                </div>
                <div className="col-5 bg-info m-1">
                   <h5>Author </h5>
                   <p>This awesome project</p>
                   <div style={{ color: "#FFD700", fontSize: "24px" }}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar style={{ opacity: 0.3 }} />
                    </div>
                </div>
                
                
               
            </div>
        </div>
    )
}