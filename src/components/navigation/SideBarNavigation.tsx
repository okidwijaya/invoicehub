'use client'
import Image from 'next/image'
import React from 'react'
import logo from '@/../../public/assets/icon/logo.svg';
import logoLetter from '@/../../public/assets/icon/logo-capital-letter.svg';
import logoList from '@/../../public/assets/icon/logo-list.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideBarNavigation() {
  const pathname = usePathname();
  return (
    <div className='w-full h-full'>
        <Image
          src={logo}
          width="160"
          height="40"
          alt='logo'
        />

        <div className='grid grid-cols-1 gap-[20px] justify-start pt-[49px]'>
          <h2 className='text-secondaryTextColor uppercase font-medium'>Menu</h2>
          <div className='grid grid-cols-1 gap-[35px] justify-start'>
            <Link href='/invoices/add' className={`flex gap-2 justify-start items-center hover:opacity-100 ${pathname === "/invoices/add" ? "opacity-100" : "opacity-30"}`}>
              <Image
                src={logoLetter}
                width="16"
                height="16"
                alt='logo'
                className='fill-white'
                />
              <p className='font-semibold capitalize'>Add Invoice</p>
            </Link>
            <Link href='/invoices/list' className={`flex gap-2 justify-start items-center hover:opacity-100 ${pathname === "/invoices/list" ? "opacity-100" : "opacity-30"}`}>
              <Image
                src={logoList}
                width="16"
                height="16"
                alt='logo'
                className='fill-white'
                />
              <p className='font-semibold capitalize'>My Invoice</p>
            </Link>
          </div>
        </div>
    </div>
  )
}
