import React from 'react'
import CreateEvent from '~/components/event/create-event'

const page = () => {
  return (
    <div className='bg-[#373A40] w-full  p-8 space-y-4'>
      <h1 className='text-xl font-extrabold '>Create Event</h1>
      <CreateEvent />
    </div>
  )
}

export default page