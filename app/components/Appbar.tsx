'use client';
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Appbar = () => {
    const session = useSession();
    return (
        <div className='flex justify-around p-2'>
            <div>Logo here</div>
            <div className='flex gap-2'>
                <span>{session?.data?.user?.email}</span>
                {
                    session?.status === 'authenticated' && <button className='bg-red-500 rounded-md p-1 text-white' onClick={() => signOut()}>Logout</button>
                }
                {
                    session?.status !== 'authenticated' && <button className='bg-green-500 rounded-md p-1 text-white' onClick={() => signIn()}>Login</button>
                }
            </div>
        </div>
    )
}

export default Appbar
