import Link from "next/link"
const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">ST PIZZA</Link>
      <nav className="flex gap-1 text-gray-500 font-semibold">
        <Link href={''} className=" px-7 py-1">Home</Link>
        <Link href={''} className=" px-7 py-1">Menu</Link>
        <Link href={''} className=" px-7 py-1">About</Link>
        <Link href={''} className=" px-7 py-1">Contact</Link>
        <Link href={''} className="bg-primary text-white rounded-full px-7 py-1">Login</Link>
      </nav>
    </header>
  )
}

export default Header
