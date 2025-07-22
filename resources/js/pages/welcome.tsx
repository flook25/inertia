import { Link } from '@inertiajs/react'

export default function Welcome() {
  return (
    <div>
      <div className='text-3xl text-green-600'>Welcome Page</div>
      <Link href="/about">About</Link>
    </div>
  )
}