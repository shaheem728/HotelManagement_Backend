'use client'
import Link from 'next/link'
import DashBoardSaideBar from '@/components/user/DashBoardSideBar'
import { useState } from "react";
export default function page(){
    
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data (you can handle form submission here)
        console.log('User signed up with the following details:');
        console.log('Password:', password);
    };
    return (
        <section className="container my-1" style={{'minHeight':'100vh'}}>
            <div className="row">
                <div className="col-md-4 col-12">
                  <DashBoardSaideBar/>
                </div>
             <div className='col-md-8 col-12'>
            <div className="card ">
                <h5 className='card-header'>Change Password</h5>
                <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input className="form-control" type="password"  id="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input className="form-control" type="password"  id="password" placeholder="Enter Confirm Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
              
                <button type="reset" className="btn btn-primary">Reset</button>
                <button type="submit" className="btn bg-color-dark ms-1">Submit</button>
            </form>
            </div>

             </div>
             </div>
             
            
        </section>    )
}