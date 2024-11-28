'use client'
import Link from "next/link";
import { useState } from "react";
export default function page() {

    // State hooks to store form input values
    const [userName, setUserName] = useState('');
    const [mobile, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handler function to submit the form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data (you can handle form submission here)
        console.log('User signed up with the following details:');
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="container">
            <div className="row w-75 d-flex justify-content-center shadow-lg  m-auto my-4 py-4 bg-body-tertiary rounded">
            <h1 >Sign Up</h1>
               
           
            <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                <div className="mb-3">
                    <label for="userName" className="form-label">User Name</label>
                    <input className="form-control" type="text" id="userName" placeholder="Enter UserName"value={userName}onChange={(e) => setUserName(e.target.value)}required />
                </div>
                <div className="mb-3">
                    <label for="mobile" className="form-label">Mobile</label>
                    <input className="form-control" type="del" id="mobile" placeholder="Enter Mobile Number"value={mobile}onChange={(e) => setMobileNumber(e.target.value)}required />
                </div>
                </div>
                <div className="col">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input className="form-control" type="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password"  id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                </div>
                </div>
                <div className=" form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="reset" className="btn btn-primary">Reset</button>
                <button type="submit" className="btn bg-color-dark ms-1">Submit</button>
                <p>if you already registered user<Link href={'/user/login'}>Login here</Link></p>
            </form>
            </div>
            
            </div>
       
    )
}