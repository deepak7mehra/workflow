import InfoBar from '@/components/infobar'
import Sidebar from '@/components/sidebar'
import React from 'react'

type Props = {children:React.ReactNode}

export default function layout(props:Props) {
  return <div className='flex h-screen '>
    <div className='h-full'>

      <Sidebar/>
    </div>
    <div className='w-full h-full '>
        <InfoBar/>
        {props.children}
    </div>

  </div>
}
