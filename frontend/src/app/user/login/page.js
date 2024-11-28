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
            
            <div className='w-25  h-50  shadow-lg p-3 m-auto my-4 bg-body-tertiary rounded'> 
            <form onSubmit={handleSubmit}>
            <h2>Login</h2>
                <div className="mb-3">
                    <label for="userName" className="form-label">User Name</label>
                    <input className="form-control" type="text" id="userName" placeholder="Enter UserName"value={userName}onChange={(e) => setUserName(e.target.value)}required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password"  id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="reset" className="btn btn-primary">Reset</button>
                <button type="submit" className="btn bg-color-dark ms-1">Submit</button>
                <p>Forget Password ?<Link href={'/user/forgetpassword'}>Forget Password</Link></p>
                <p>if you are not registered user<Link href={'/user/signup'}>SignUp here</Link></p>
            </form>
            </div>
        </div>
    )
}