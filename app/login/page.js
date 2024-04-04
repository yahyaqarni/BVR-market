'use client';
import {signIn, signOut, useSession} from "next-auth/react";



export default function LoginPage() {
    const { data: session, status, update } = useSession()
    if(status === 'authenticated')
    {
        return (
            <div className="bg-bgGray w-screen h-screen flex items-center">
              <div className="text-center w-full">
                <p>Already signed in!</p>
                <button onClick={() => signOut()} className="bg-white p-2 px-4 rounded-lg">Logout</button>
              </div>
            </div>
          );
    }
    else{
        return (
            <div className="bg-bgGray w-screen h-screen flex items-center">
              <div className="text-center w-full">
                <button onClick={() => signIn()} className="bg-white p-2 px-4 rounded-lg">Login with Email</button>
              </div>
            </div>
          );
    }
}