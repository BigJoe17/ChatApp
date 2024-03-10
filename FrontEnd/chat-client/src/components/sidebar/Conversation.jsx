import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className='flex  gap-3 items-center hover:bg-sky-500 rounded border-r-2 p-2 py-1 overflow-auto cursor-pointer  '>
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200'>Joshua Olu</p>
            <span className='text-xl '>🎃</span>
          </div>
        </div>
      </div>
      <div className='divider px-3'></div>
    </>
  )
}

export default Conversation 