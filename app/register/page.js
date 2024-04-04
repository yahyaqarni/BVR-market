'use client';

import SignupForm from "@/components/SignupForm";
import { signOut, useSession } from "next-auth/react";

export default function Register() {
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
    return (
        <div className="w-full h-full bg-gray py-8 ml-0 mr-0 content-center justify-center">
            <SignupForm />
        </div>
    );
}