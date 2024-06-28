import React from 'react'

type props = {
    children : React.ReactNode
}

export default function layout({children}:props) {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
        {children}
      
    </div>
  )
}
