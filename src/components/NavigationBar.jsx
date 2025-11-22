import React from 'react'
import { HomeOutlined, SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div className='h-16 bg-black text-white flex items-center justify-between px-6'>
      <div className='flex items-center space-x-4'>
        <Link to={"/"}>
        <HomeOutlined style={{ fontSize: '24px', color: 'white' }} />

        </Link>
    
      </div>
      <div>
        <SearchOutlined style={{ fontSize: '24px', color: 'white' }} />
      </div>
    </div>
  )
}

export default NavigationBar
