'use client'
import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
export default function HomeGallery() {
    const [toggler, setToggler] = useState(false);
    return (
        <div className="container text-center">
            <FsLightbox
				toggler={toggler}
				sources={[
					'thump/image-placeholder-500x500.jpg',
					'thump/image-placeholder-500x500.jpg',
					'thump/image-placeholder-500x500.jpg',
				]}
			/>
            <h2>Gallery <button onClick={() => setToggler(!toggler)} className="btn bg-color-dark float-end fs-5">View All</button></h2>
            <div className="row">
                <div className="col-4">
                    <div className="card" style={{ "width":"18rem;"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ "width":" 18rem;"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        
                    </div>
                </div>
                <div className="col-4">
                    <div className="card" style={{ "width":" 18rem;"}}>
                        <img src="..." className="card-img-top" alt="..." />
                    </div>
                </div>

            </div>
        </div>
    )
}