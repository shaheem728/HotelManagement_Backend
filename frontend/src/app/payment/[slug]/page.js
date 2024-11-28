import Link from "next/link"

export default async function page({ params }) {
    const slug = await params.slug; // Await the params

    return (
        <section className="container text-center my-2">
            {
                slug === 'success' ? (
                    <>
                        <h1 className="text-success">Tank u</h1>
                        <h5>Invoice:<Link href='#'>HMS</Link></h5> 
                        <div className="my-3">
                            <Link className="btn btn-primary" href="/">Home</Link>
                            <Link className="btn bg-color-dark ms-2" href="/user/dashboard">Dash Board</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <h1 className="text-success">Faile</h1>
                        <h5>Invoice:<Link href='#'>HMS</Link></h5> 
                        <div className="my-3">
                            <Link className="btn btn-primary " href="/">Home</Link>
                            <Link className="btn bg-color-dark ms-2" href="/user/dashboard">Dash Board</Link>
                        </div>
                    </>
                )
            }
        </section>
    )
}