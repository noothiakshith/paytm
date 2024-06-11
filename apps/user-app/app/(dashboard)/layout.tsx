"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home } from 'lucide-react';
import { ArrowRightLeft } from 'lucide-react';
import { Clock3 } from 'lucide-react';
import { Router } from 'lucide';
import { useRouter } from 'next/navigation';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  



const options = [
    {
        label: 'Dashboard',
        href: '/dashboard',
        icons: Home
    },
    {
        label: 'Transfer',
        href: '/transfer',
        icons: ArrowRightLeft
    },
    {
        label: 'Transactions',
        href: '/transactions',
        icons: Clock3
    }
];

const Layout = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();
    const router = useRouter();
    return (
        <div className='flex'>
            <div className='w-72 border-r border-slate-300 min-h-screen mr-4 pt-28'>
                <div>
                    {options.map((option, index) => {
                        const isActive = pathname === option.href;
                        return (
                            <Link href={option.href} key={index} onClick={()=>router.push(option.href)}>
                                <div className={`flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 ${isActive ? 'bg-gray-100' : ''}`}>
                                    {option.icons && <option.icons size={24} />}
                                    <span className={isActive ? 'font-semibold text-[#6a51a6]' : 'text-slate-500'}>{option.label}</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;
