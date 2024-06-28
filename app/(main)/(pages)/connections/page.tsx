import React from 'react'

type Props = {
    searchParams?: { [key:string] : string | undefined }
}

export default function page() {
  return (
    <div className='relative flex flex-col gap-4'>
        <h1 className='sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg'>
            connections
        </h1>

        <div className='realtive flex flex-col gap-4' >
            <section className='flex flex-col gap-4 p-6 text-muted-foreground' >
                Connect all yours apps directly from here. You may need to connect these apps regularly to refresh verification
            </section>
        </div>
      
    </div>
  )
}
