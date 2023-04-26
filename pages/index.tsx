import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello And welcome hehe</p>
      <Image src="../public/cute.png" alt="cute" className="w-64 h-64"></Image>
      <Link href="/about">Visit about page</Link>
    </>
  )
}
