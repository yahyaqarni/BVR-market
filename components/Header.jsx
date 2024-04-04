import Link from 'next/link'
import React from 'react'

const Header = () => {

    const menuItems = [
        { name: "Dashboard", icon: 'home', link: '/dashboard' },
        { name: "Grains", icon: 'home', link: '/dashboard/grains' },
        { name: "Vegetables", icon: 'home', link: '/dashboard/vegetables' },
        { name: "Sign Up", icon: 'home', link: '/register' },
        { name: "Login", icon: 'home', link: '/login' },
    ]

    return (
        <div className='w-full h-20 flex text-white bg-primary py-8 px-4  '>
            <div className="flex flex-1">
                <h1 className='flex items-center pt-2 text-5xl ml-8 text-white'>BVR</h1>
            </div>
            <div className='flex flex-2'>
                {
                    menuItems.map((item, index) => (
                        <div key={index} className='flex flex-1 items-center gap-8 px-4 mr-3'>
                            <Link href={item.link} className='text-white text-xl'>{item.name}</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Header