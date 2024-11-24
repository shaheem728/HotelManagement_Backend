
import Link from 'next/link'
import { Inter } from 'next/font/google'
 
const inter = Inter({ subsets: ['latin'] })
 
export default function Header(){
    return (

        <nav className="navbar navbar-expand-lg bg-color-normal ">
  <div className="container-fluid">
    <a className={`navbar-brand ${inter.className} heading-color`} href="#">hms</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className='ms-auto'>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link  text-white" aria-current="page" href="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Gallery</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" href="/contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="btn  bg-color-dark" href="/book_event">Book Event</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
          
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
    )
}