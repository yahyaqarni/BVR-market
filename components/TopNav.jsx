import React from 'react'

const TopNav = () => {
    return (
        <div className='w-full bg-accent h-[60px] flex justify-between items-center fixed'>
            <div className='flex w-[30%] lg:w-[25%] xl:w-[20%] bg-accent-dark h-full items-center justify-center'>
                <p className='text-white text-4xl'>BVR</p>
            </div>
            <div className='w-[70%] lg:w-[75%] xl:w-[80%] bg-accent h-[60px] flex justify-between items-center px-6'>
                {/* search div */}
                <div>
                    <input type="text" placeholder="Search" className='bg-accent-dark text-white px-4 py-2 rounded-md' />
                </div>
                {/* profile div */}
                <div>
                    <div className='flex items-center gap-4'>
                        <div className='ml-2'>
                            <p className='text-white'>John Doe</p>
                            <p className='text-white text-xs'>Admin</p>
                        </div>
                        <div className='w-[40px] h-[40px] bg-white rounded-full'></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TopNav