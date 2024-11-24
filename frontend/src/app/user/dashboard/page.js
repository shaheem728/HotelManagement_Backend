'use client'
import BarChart from '@/components/user/BarChart'
import DashBoardSaideBar from '@/components/user/DashBoardSideBar'
export default function dashboard(){
    return (
        <section className="container my-5" style={{'minHeight':'100vh'}}>
            <div className="row">
                <div className="col-md-4 col-12">
                    <DashBoardSaideBar/>

                </div>
                <div className="col-md-8 col-12">
                   <div className="row">
                    <div className="col-6 text-center">
                        <div className="card">
                                <h5 className="card-header">Total Booking</h5>
                                <div className="card-body">
                                <h4><a href="#">128</a></h4>
                             </div>
                        </div>
                    </div>
                    <div className="col-6 text-center">
                        <div className="card">
                                <h5 className="card-header">Total Payments</h5>
                                <div className="card-body">
                                <h4><a href="#">2500</a></h4>
                             </div>
                        </div>
                    </div>
                   </div>
                 <BarChart/>
                </div>

            </div>
        </section>    )
}