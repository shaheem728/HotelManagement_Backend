'use client'
import Link from "next/link";
import { useState } from "react";
export default function page() {

    // State hooks to store form input values

    const [email, setEmail] = useState('');

    // Handler function to submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data (you can handle form submission here)

        console.log('Email:', email);
        ;
    };

    return (
        <div classNameName="container ">

            <form onSubmit={handleSubmit} className="w-50 shadow-lg p-3 m-auto my-4 bg-body-tertiary rounded">

                <h1 className="h3 mb-3 fw-normal">Forget Password</h1>
                <div className="row">
                    <div className="col-10 mb-3">
                <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" fdprocessedid="vcgfv7" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label for="floatingInput">Email address</label>
                </div>
                </div>
                <div className="col mb-3">
                <button className="btn bg-color-dark w-75 h-100 py-2" type="submit" fdprocessedid="y4mk3u">Submit</button>
                </div>
                </div>
                <p>if you are not registered user<Link href={'/user/signup'}> SignUp here</Link></p>
            </form>
        </div>
    )
}