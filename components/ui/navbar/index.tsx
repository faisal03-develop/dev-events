import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href='/' className="logo">
            <Image alt="Logo" width={24} height={24} src='/icons/logo.png'></Image>
            <p>DevEvents</p>
            </Link>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/'>Events</Link>
                <Link href='/'>Create Event</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar