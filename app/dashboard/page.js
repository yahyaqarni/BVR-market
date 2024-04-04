'use client';

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Dashboard = () => {
  const { data: session, status, update } = useSession()
  const router = useRouter();

  // useEffect(() => {
  //   if (status === "authenticated" && session?.user?.role === 'bdo') {
  //     // User is authenticated and has the 'bdo' role, stay on the dashboard
  //   } else {
  //     // Redirect to the login page if not authenticated or doesn't have the 'bdo' role
  //     router.push('/login');
  //   }
  // }, [status, session, router]);

  
  return (
    <div className='bg-[#e0e0e0] w-full h-full text-black px-28 py-16 mt-[60px]'>
      <p className='text-3xl mb-6'>Welcome to Dashboard BDO!</p>
      <div className='w-full flex gap-2 items-start h-[80%]'>
        <div className='w-[50%] h-full flex flex-col items-center justify-start gap-2'>
          <Card title='Create New Post' img='/images/create-post.svg' link='dashboard/createpost'/>
          <Card title='Deals and Discounts' img='/images/deals.svg' link='/dashboard/createpost'/>

        </div>

        <div className='w-[50%] h-full flex flex-col items-center justify-start gap-2'>
          <Card title='Manage Posts' img='/images/manage-post.svg' link='/dashboard/createpost'/>
          <Card title='Upcoming Tenders' img='/images/upcoming-tenders.svg' link='/dashboard/createpost'/>

        </div>

      </div>
    </div>
  )
  
}

export default Dashboard


const Card = ({ title, img, link }) => {
  return (
    <Link href = {link} className='h-[60%]'>
      <div className='w-full h-full bg-white px-6 py-8 flex justify-start items-center rounded-lg gap-6'>
        <div className='w-[40%] h-full'>
          <Image src={img} width={30} height={30} className='w-full' />
        </div>
        <div className='w-[40%]'>
          <p className='text-2xl font-bold'>{title}</p>
          <Image src='/images/green-right-arrow.svg' width={10} height={10} className='w-[50%] mt-2' />
        </div>
      </div>
    </Link>
  )
}