import React from 'react'
import SideBar from '../components/sidebar/Sidebar'
import MsgContainer from '../components/messages/MsgContainer'


const Home = () => {
  return (
    <>
    <div className='flex  h-screen sm:h-[450px] md:h-[550px] overflow-hidden bg-clip-padding bg-gray-900
    backdrop-filter backdrop-blur-lg bg-opacity-0 ' >

        <SideBar/>
        <MsgContainer/>
        
    </div>
    </>
  )
}

export default Home