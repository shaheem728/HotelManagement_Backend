import Link from "next/link"
export default function Footer(){
    return (
        <footer className="py-3 my-4 bg-color-normal">
      <ul className="nav justify-content-center border-bottom pb-3 mb-3">
        <li className="nav-item">
          <Link href="/" className="nav-link px-2 text-white">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about" className="nav-link px-2 text-white">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact" className="nav-link px-2 text-white">
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/career" className="nav-link px-2 text-white">
            Careers
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            About
          </a>
        </li>
      </ul>
      <p className="text-center text-white">© 2024 Company, Inc</p>
    </footer>
    )
}