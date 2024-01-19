import React from 'react'
import { BiMenu, BiPlug, BiPlus, BiSolidHome, BiSolidPlusCircle } from 'react-icons/bi'
import { BsPeopleFill, BsWindowStack } from 'react-icons/bs'

const BottomNavbar = () => {
  return (
    <div className='fixed bottom-2 left-1/2 -translate-x-1/2 w-12 h-12 flex justify-center items-center text-3xl rounded-full bg-primary text-secondary'>
      <BiMenu/>
    </div>
  )
}

export default BottomNavbar
