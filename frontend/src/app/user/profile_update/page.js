'use client'
import Link from 'next/link'
import DashBoardSaideBar from '@/components/user/DashBoardSideBar'
import { useState } from "react";
export default function page(){
    const [userName, setUserName] = useState('');
    const [mobile, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        <section className="container my-1" style={{'minHeight':'100vh'}}>
            <div className="row">
                <div className="col-md-4 col-12">
                  <DashBoardSaideBar/>
                </div>
             <div className='col-md-8 col-12'>
            <div className="card my-1   shadow-lg p-3 m-auto my-4 bg-body-tertiary rounded">
                <h5 className='card-header'>Update Profile</h5>
               
                <form onSubmit={handleSubmit}>
                
                <div className="mb-3">
                    <label for="userName" className="form-label">User Name</label>
                    <input className="form-control" type="text" id="userName" placeholder="Enter UserName"value={userName}onChange={(e) => setUserName(e.target.value)}required />
                </div>
                <div className="mb-3">
                    <label for="mobile" className="form-label">Mobile</label>
                    <input className="form-control" type="del" id="mobile" placeholder="Enter Mobile Number"value={mobile}onChange={(e) => setMobileNumber(e.target.value)}required />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input className="form-control" type="email" id="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                <p>if you change password<Link href={'/user/change_password'}>Click here..</Link></p>
            </form>
            </div>

             </div>
             </div>
             
            
        </section>    )
}