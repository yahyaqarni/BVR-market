'use client';

import SideBar from "@/components/SideBar";
import TopNav from "@/components/TopNav";
import { signIn, useSession } from "next-auth/react";

export default function Layout({ children }) {
    const { data: session, status, update } = useSession()

    if (status === "authenticated" && session.user.role === 'bdo') {
    return (
        <div className="w-full flex flex-col overflow-hidden">
                <TopNav />
            <div className="w-full flex  justify-end">
                <div className="w-[30%] lg:w-[25%] xl:w-[20%] h-full fixed left-0">
                    <SideBar />
                </div>
                <div className="w-[70%] lg:w-[75%] xl:w-[80%]">
                    {children}
                </div>
            </div>
        </div>
    );
}
else
{
  return (
    <div className="bg-bgGray w-screen h-screen flex items-center">
      <div className="text-center w-full">
        <button onClick={() => signIn()} className="bg-white p-2 px-4 rounded-lg">Login with Email</button>
      </div>
    </div>
  );
}
}