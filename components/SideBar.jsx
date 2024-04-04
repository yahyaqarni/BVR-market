'use client';

import Dashboard from '@/app/dashboard/page'
import { signOut } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const SideBar = () => {

    const menuItems = [
        { name: "Dashboard", icon: 'home', link: '/dashboard' },
        { name: "Grains", icon: 'home', link: '/dashboard/grains' },
        { name: "Vegetables", icon: 'home', link: '/dashboard/vegetables' },
        { name: "Fruits", icon: 'home', link: '/dashboard/fruits' },
        { name: "Meat", icon: 'home', link: '/dashboard/meat' },
        { name: "Spices", icon: 'home', link: '/dashboard/spices' },
    ]

    return (
        <div className='w-full h-full flex flex-col text-black bg-accent py-8 px-4 justify-between mt-[60px] '>
            <div className='w-full'>
                {
                    menuItems.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 mb-4'>
                            <div className='w-8 h-8 bg-white rounded-full'></div>
                            <Link href={item.link} className='text-white'>{item.name}</Link>
                            <Link href={item.link} className='text-white'>{item.name}</Link>
                        </div>
                    ))
                }
            </div>
            <button onClick={() => signOut()} className='bg-accent-dark text-white w-full py-2 rounded-md mb-8'>Logout</button>
        </div>
    )
}

export default SideBar;