import Link from "next/link"
const Header = () => {
  return (
    <header className="flex items-center justify-between">

      <nav className="flex gap-1 text-gray-500 font-semibold">
      <Link className="text-primary font-semibold text-2xl" href="/">ST PIZZA</Link>
        <Link href={'/'} className=" px-7 py-1">Home</Link>
        <Link href={''} className=" px-7 py-1">Menu</Link>
        <Link href={''} className=" px-7 py-1">About</Link>
        <Link href={''} className=" px-7 py-1">Contact</Link>
      </nav>
      <nav className="flex gap-8 items-center">
      <Link href={'/login'} className="">Login</Link>
      <Link href={'/register'} className="bg-primary text-white rounded-full px-7 py-1">Register</Link>
     

      </nav>
    </header>
  )
}

export default Header
