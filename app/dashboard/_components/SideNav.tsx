"use client"
import Image from "next/image";
import {FileClockIcon, HomeIcon, Settings, WalletCards} from "lucide-react";
import {usePathname} from "next/navigation";
import {useEffect} from "react";

export default function SideNav() {
    const MenuList = [
        {
            name:"Home",
            icon:HomeIcon,
            path:'/dashboard'
        },
        {
            name:"History",
            icon:FileClockIcon,
            path:'/dashboard/history'
        },
        {
            name:"Billing",
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:"Setting",
            icon:Settings,
            path:'/dashboard/settings'
        }
    ]
    const path = usePathname();
    useEffect(()=>{
        console.log(path);
    })
    return (
        <div className="p-5 border h-screen shadow-sm">
            <div className="flex justify-center"><Image src={'/logo.svg'} alt={'logo'} width={100} height={100}/></div>
            <hr className="my-6 border"/>
            <div className="mt-10">
                {MenuList.map((menu, index) => (
                    <div key={index} className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer
                    ${path===menu.path&&'bg-primary text-white'}
                    `}>
                        <menu.icon/>
                        <h2>{menu.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}