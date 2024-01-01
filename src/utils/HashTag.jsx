import React from 'react'

const HashTag = ({text}) => {
  return (
    <div className='self-start flex items-center justify-center px-3 py-1 bg-primary text-white rounded-md'>
        <span>{text}</span>
    </div>
  )
}

export default HashTag