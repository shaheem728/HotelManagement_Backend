import Link from "next/link"
export default function checkout(){
    return (
        <section className="container my-5">
            <h3 className=" my-1" >Checkout</h3>
            <div className="row">
                <div className="col-6">
                    <label>Total Rooms</label>
                    <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>Total Guests</td>
                        <td>2</td>
                        </tr>
                        <tr>
                        <td>Total Rooms</td>
                        <td>4</td>
                        </tr>
                        <tr>
                        <td>Check-in Date</td>
                        <td>21-11-2024</td>
                        </tr>
                        <tr>
                        <td>Check-out Date</td>
                        <td>22-11-2024</td>
                        </tr>
                        <tr>
                        <td>Charges</td>
                        <td>1500 X 2 = 3000</td>
                        </tr>
                        <tr>
                        <td>Tax</td>
                        <td>10%</td>
                        </tr>
                        <tr>
                        <td>Total Amount</td>
                        <td>1500 +</td>
                        </tr>
                        <tr>
                        <td colSpan={2} className="text-danger">One Govt. ID Required When Checkin</td>
                        </tr>
                        <tr>
                        <td colSpan={2}>
                            <Link href={'#'}>Terms&Conditions</Link></td>
                        </tr>
                        <tr>
                        <td colSpan={2}>
                            <button className="btn btn-danger">Cancel</button>
                            <button className="btn bg-color-dark ms-2">Pay Now</button>
                        </td>
                        </tr>
                       
                        
                    </tbody>
                    </table>
                </div>

            </div>
        </section>
    )
}