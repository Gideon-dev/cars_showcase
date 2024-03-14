import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'

const Navbar = () => {
  return (
    <nav className='w-full absolute z-10 '> 
        <div className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
            <Link href="/" className='flex justify-center items-center'>
            <Image 
                src="/logo.svg"
                alt="logo"
                width={180}
                height={18}
                className='object-contain'
            />
            </Link>

            <CustomButton
                btnType="button"
                title="Sign In"
                containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
            />
        </div>
    </nav>
  )
}

export default Navbar