'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import profilePicture from '@/../../public/assets/picture/photo-profile-placeholder.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Link from 'next/link';

export default function NavigationBar() {
  const [isDark, setDark] = useState(false);
  const [accountMenuActive, setAccountMenuActive] = useState(false);

  const handleAccountMenu = () => {
    setAccountMenuActive(!accountMenuActive);
  }

  const handleDark = () => {
    setDark(!isDark);
  }

  return (
    <div className='bg-white px-[30px] py-[17px] flex justify-end items-center flex-row gap-4'>
      <div onClick={handleDark} className={`rounded-full py-1 transition-all duration-300 ease-in-out ${isDark ? "pl-[35px] pr-1 bg-[#3C3D37]" : "pr-[35px] pl-1 bg-[#EFF4FA]" }`}>
        <svg width="31" height="29" viewBox="0 0 31 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dii_13_131)">
            <rect x="3" y="2" width="24" height="24" rx="12" fill={`${isDark ? "#3D3D3D": "white"}`} />
            <path d="M14.9999 18.6667C17.5772 18.6667 19.6666 16.5773 19.6666 14C19.6666 11.4227 17.5772 9.33333 14.9999 9.33333C12.4226 9.33333 10.3333 11.4227 10.3333 14C10.3333 16.5773 12.4226 18.6667 14.9999 18.6667Z" fill={`${isDark ? "#e5c638": "#969AA1"}`} />
            <path d="M15.0001 21.3067C14.6334 21.3067 14.3334 21.0333 14.3334 20.6667V20.6133C14.3334 20.2467 14.6334 19.9467 15.0001 19.9467C15.3667 19.9467 15.6667 20.2467 15.6667 20.6133C15.6667 20.98 15.3667 21.3067 15.0001 21.3067ZM19.7601 19.4267C19.5867 19.4267 19.4201 19.36 19.2867 19.2333L19.2001 19.1467C18.9401 18.8867 18.9401 18.4667 19.2001 18.2067C19.4601 17.9467 19.8801 17.9467 20.1401 18.2067L20.2267 18.2933C20.4867 18.5533 20.4867 18.9733 20.2267 19.2333C20.1001 19.36 19.9334 19.4267 19.7601 19.4267ZM10.2401 19.4267C10.0667 19.4267 9.90008 19.36 9.76675 19.2333C9.50675 18.9733 9.50675 18.5533 9.76675 18.2933L9.85342 18.2067C10.1134 17.9467 10.5334 17.9467 10.7934 18.2067C11.0534 18.4667 11.0534 18.8867 10.7934 19.1467L10.7067 19.2333C10.5801 19.36 10.4067 19.4267 10.2401 19.4267ZM21.6667 14.6667H21.6134C21.2467 14.6667 20.9467 14.3667 20.9467 14C20.9467 13.6333 21.2467 13.3333 21.6134 13.3333C21.9801 13.3333 22.3067 13.6333 22.3067 14C22.3067 14.3667 22.0334 14.6667 21.6667 14.6667ZM8.38675 14.6667H8.33341C7.96675 14.6667 7.66675 14.3667 7.66675 14C7.66675 13.6333 7.96675 13.3333 8.33341 13.3333C8.70008 13.3333 9.02675 13.6333 9.02675 14C9.02675 14.3667 8.75341 14.6667 8.38675 14.6667ZM19.6734 9.99333C19.5001 9.99333 19.3334 9.92667 19.2001 9.8C18.9401 9.54 18.9401 9.12 19.2001 8.86L19.2867 8.77333C19.5467 8.51333 19.9667 8.51333 20.2267 8.77333C20.4867 9.03333 20.4867 9.45333 20.2267 9.71333L20.1401 9.8C20.0134 9.92667 19.8467 9.99333 19.6734 9.99333ZM10.3267 9.99333C10.1534 9.99333 9.98675 9.92667 9.85342 9.8L9.76675 9.70667C9.50675 9.44667 9.50675 9.02667 9.76675 8.76667C10.0267 8.50667 10.4467 8.50667 10.7067 8.76667L10.7934 8.85333C11.0534 9.11333 11.0534 9.53333 10.7934 9.79333C10.6667 9.92667 10.4934 9.99333 10.3267 9.99333ZM15.0001 8.02667C14.6334 8.02667 14.3334 7.75333 14.3334 7.38667V7.33333C14.3334 6.96667 14.6334 6.66667 15.0001 6.66667C15.3667 6.66667 15.6667 6.96667 15.6667 7.33333C15.6667 7.7 15.3667 8.02667 15.0001 8.02667Z" fill="#969AA1" />
          </g>
          <defs>
            <filter id="filter0_dii_13_131" x="-1" y="0" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
              <feBlend mode="multiply" in2="BackgroundImageFix" result="effect1_dropShadow_13_131" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_13_131" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="-1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="multiply" in2="shape" result="effect2_innerShadow_13_131" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect2_innerShadow_13_131" result="effect3_innerShadow_13_131" />
            </filter>
          </defs>
        </svg>
      </div>
      <div className='grid grid-cols-2 gap-2'>
        <div className='nav-top_notfication'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="16.75" fill="#EFF4FB" stroke="#E2E8F0" strokeWidth="0.5" />
            <path d="M24.1999 22.9344L23.6374 22.0625C23.5249 21.8937 23.4687 21.725 23.4687 21.5281V15.6781C23.4687 14.0187 22.7655 12.4719 21.4718 11.3187C20.4312 10.3906 19.0812 9.8 17.6468 9.6875V9.125C17.6468 8.7875 17.3655 8.47812 16.9999 8.47812C16.6624 8.47812 16.353 8.75937 16.353 9.125V9.65937C16.2968 9.65937 16.2405 9.65937 16.1843 9.6875C12.9218 10.0531 10.4749 12.6687 10.4749 15.7906V21.5281C10.4468 21.8094 10.3905 21.95 10.3343 22.0344L9.7999 22.9344C9.63115 23.2156 9.63115 23.5531 9.7999 23.8344C9.96865 24.0875 10.2499 24.2562 10.5593 24.2562H16.3812V24.875C16.3812 25.2125 16.6624 25.5219 17.028 25.5219C17.3655 25.5219 17.6749 25.2406 17.6749 24.875V24.2562H23.4687C23.778 24.2562 24.0593 24.0875 24.228 23.8344C24.3968 23.5531 24.3968 23.2156 24.1999 22.9344ZM11.2343 22.9906L11.4312 22.6531C11.5999 22.3719 11.6843 22.0344 11.7405 21.6406V15.7906C11.7405 13.3156 13.7093 11.2344 16.3249 10.9531C17.928 10.7844 19.503 11.2625 20.6562 12.275C21.6687 13.175 22.2312 14.3844 22.2312 15.6781V21.5281C22.2312 21.95 22.3437 22.3438 22.5968 22.7375L22.7655 22.9906H11.2343Z" fill="#64748B" />
          </svg>
        </div>
        <div className='nav-top-message_notfication'>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="17" cy="17" r="16.75" fill="#EFF4FB" stroke="#E2E8F0" strokeWidth="0.5" />
            <path d="M18.9688 10.575H15.0313C11.4313 10.575 8.50635 13.4156 8.50635 16.9031C8.50635 20.3906 10.7563 22.8375 16.2688 25.3125C16.4095 25.3688 16.522 25.3969 16.6626 25.3969C16.8595 25.3969 17.0282 25.3406 17.197 25.2281C17.4782 25.0594 17.647 24.75 17.647 24.4125V23.2031H18.9688C22.5688 23.2031 25.522 20.3625 25.522 16.875C25.522 13.3875 22.5688 10.575 18.9688 10.575ZM18.9688 21.9938H17.3376C16.8032 21.9938 16.3532 22.4438 16.3532 22.9781V24.0188C11.6001 21.825 9.74385 19.8 9.74385 16.9313C9.74385 14.1469 12.1063 11.8688 15.0313 11.8688H18.9688C21.8657 11.8688 24.2563 14.1469 24.2563 16.9313C24.2563 19.7156 21.8657 21.9938 18.9688 21.9938Z" fill="#64748B" />
            <path d="M13.4281 16.2844C13.0625 16.2844 12.7812 16.5656 12.7812 16.9312C12.7812 17.2969 13.0625 17.5781 13.4281 17.5781C13.7937 17.5781 14.075 17.2969 14.075 16.9312C14.075 16.5656 13.7937 16.2844 13.4281 16.2844Z" fill="#64748B" />
            <path d="M17.0001 16.2844C16.6345 16.2844 16.3533 16.5656 16.3533 16.9312C16.3533 17.2969 16.6345 17.5781 17.0001 17.5781C17.3376 17.5781 17.647 17.2969 17.647 16.9312C17.647 16.5656 17.3376 16.2844 17.0001 16.2844Z" fill="#64748B" />
            <path d="M20.5719 16.2844C20.2063 16.2844 19.925 16.5656 19.925 16.9312C19.925 17.2969 20.2063 17.5781 20.5719 17.5781C20.9375 17.5781 21.2188 17.2969 21.2188 16.9312C21.2188 16.5656 20.9094 16.2844 20.5719 16.2844Z" fill="#64748B" />
            <circle cx="28" cy="5" r="4" fill="#DC3545" stroke="white" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-2'>
        <div className='text-right'>
          <p className='text-tableHeadingTextColor'>John Doe</p>
          <p className='text-tableSubHeadingTextColor'>Verified Member</p>
        </div>
        <button onClick={handleAccountMenu} className='relative flex flex-row justify-center items-center gap-2'>
          <Image
            src={profilePicture}
            width={46}
            height={46}
            alt='profile picture'
          />
          {accountMenuActive ? 
          <KeyboardArrowUpIcon /> :
          <KeyboardArrowDownIcon />
          }
          <div className={`account-menu_list ${accountMenuActive ? "block" : "hidden"}`}>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
              <nav aria-label="main mailbox folders">
                <List>
                  <ListItem disablePadding>
                    <Link href='/'>
                    <ListItemButton>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary="Account" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href='/'>
                    <ListItemButton>
                      <ListItemIcon>
                        <ManageAccountsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Settings" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href='/'>
                    <ListItemButton>
                      <ListItemIcon>
                        <ExitToAppIcon />
                      </ListItemIcon>
                      <ListItemText primary="Signout" />
                    </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </nav>
            </Box>
          </div>
        </button>
      </div>
    </div>
  )
}
