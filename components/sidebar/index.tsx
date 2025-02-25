"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { menuOptions } from '@/lib/constant';
import clsx from 'clsx';
import { Separator } from "@/components/ui/separator"
import { Database, GitBranch, LucideMousePointerClick } from 'lucide-react';
import { ModeToggle } from '../global/mode-toggle';




type Props ={}

export default function Sidebar(props:Props) {
  const pathName = usePathname();
  
  return (
    <nav className='dark:bg-black h-screen overflow-scroll justify-between flex items-center flex-col gap-10 py-2 px-4'>
      <div className='flex items-center justify-center flex-col gap-4'>
      <Link
      className='flex font-bold flex-row'
      href="/"
      >fuzzie.</Link>

<TooltipProvider>
          {menuOptions.map((menuItem) => (
            <ul key={menuItem.name} >
              <Tooltip delayDuration={0}>
                <TooltipTrigger>
                  <li>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        ' h-6 w-6 flex items-center justify-center  scale-[1.5] rounded-lg p-[3px]  cursor-pointer',
                        {
                          'dark:bg-[#2F006B] bg-[#EEE0FF] ':
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </li>
                </TooltipTrigger>
                <TooltipContent
                  side="right"
                  className="bg-black/10 backdrop-blur-xl"
                >
                  <p>{menuItem.name}</p>
                </TooltipContent>
              </Tooltip>
            </ul>
          ))}
        </TooltipProvider>

        <Separator/>

      </div>
      <div className="flex items-center flex-col gap-9  dark:bg-[#353346]/30 py-4 px-2 rounded-full h-52 overflow-scroll border-[1px]">
      <div className='relative dark:bg-[#353356]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
      <LucideMousePointerClick className='dark:text-white' size={18} />
      <div className='border-l-2 border-muted-foreground h-6 absolute left-1/2 -bottom-[29px] ' />

      </div>
      <div className='relative dark:bg-[#353356]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
      <GitBranch className='dark:text-white' size={18} />
      <div className='border-l-2 border-muted-foreground h-6 absolute left-1/2 -bottom-[29px] ' />

      </div>
      <div className='relative dark:bg-[#353356]/70 p-2 rounded-full dark:border-t-[2px] border-[1px] dark:border-t-[#353346]'>
      <Database className='dark:text-white' size={18} />
      <div className='border-l-2 border-muted-foreground h-6 absolute left-1/2 -bottom-[29px] ' />

      </div>
      </div>

      
    </nav>
  )
}
