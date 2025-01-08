import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed h-24 border-b-2 top-0 w-full flex-center bg-white p-5 px-10'>
      <div className='flex-1 flex items-center'>
        <Link href='/' className='text-2xl font-bold text-brand-pri'>Nani</Link>
      </div>
      <div className='flex-2 flex items-center gap-5'>
        <Link className='' href='/meet'>Meet People</Link>
        <Link className='border-tert text-tert  py-2 rounded-sm px-6 border-2' href='/remind'>Set Reminders</Link>
        <Link className='bg-brand-pri p-2 px-6 rounded-sm' href='/auth'>Authenticate</Link>
      </div>
    </nav>
  )
}

export default Navbar