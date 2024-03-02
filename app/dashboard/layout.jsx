import SideBar from "@/components/SideBar";
import TopNav from "@/components/TopNav";

export default function Layout({ children }) {
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