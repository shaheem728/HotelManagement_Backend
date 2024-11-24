'use client'
import Link from 'next/link'
import DashBoardSaideBar from '@/components/user/DashBoardSideBar'

export default function page(){
    return (
        <section className="container my-5" style={{'minHeight':'100vh'}}>
            <div className="row">
                <div className="col-md-4 col-12">
                  <DashBoardSaideBar/>
                </div>
             <div className='col-md-8 col-12'>

             <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                    <th>Payment Date</th>
                    <th>Detail</th>
                    <th>Invoice</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                  <td>21-11-2024</td>
                  <td>
                        <p className='fw-bold m-0'>
                            2 rooms
                        </p>
                        <p className='m-0'>
                            21-11-2024 - 22-11-2024
                        </p>
                        <p className='m-0'>
                            2 guest
                        </p>
                    </td>
                    <td>
                        <Link href='#'>#123</Link>
                        <p className='m-0'>
                          1500
                        </p>
                        <p className='m-0 text-danger'>
                            Due 
                        </p>
                    </td>
                    
                </tr>
               
                </tbody>
             </table>

             </div>

            </div>
        </section>    )
}