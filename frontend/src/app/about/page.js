export default function page() {
    return (
        <div>
            <section className="about-section py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src='..' alt="About Shopping Cart" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <h2 className="mb-4">About Us</h2>
                            <p className="lead">Welcome to [Hotel Name], where comfort meets excellence. We are dedicated to providing exceptional services to our guests, whether you are here for a peaceful stay or a grand celebration. Our hotel management system is designed to offer seamless room reservations and event hosting, ensuring a memorable experience every time.</p>
                           
                            <h5>Our Services</h5>
                                <ol>
                                    <li><b>Room Rentals </b><br/>
                                    <p>Enjoy a restful stay in our well-appointed rooms, tailored to meet the needs of both business and leisure travelers. With a range of room options, we ensure that your stay is comfortable, convenient, and unforgettable.</p></li>
                                    <li><b>Event Hosting</b><br/>
                                    <p>From weddings to birthday parties, corporate events, and more, we offer versatile event spaces that can accommodate all your needs. Our dedicated team is committed to helping you plan and execute your event to perfection, ensuring every detail is taken care of.</p></li>
                                </ol>
                            
                            <p className="lead">At [Hotel Name], we pride ourselves on our high standards of service, our commitment to customer satisfaction, and our passion for creating memorable experiences. Whether you are visiting for a short stay or celebrating a milestone, we strive to exceed your expectations and make your time with us truly special.</p>    
                            <p className="font-weight-bold">Thank you for choosing [Hotel Name]. <br /> We look forward to welcoming you!</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}