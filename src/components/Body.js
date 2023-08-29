import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router'

function Body() {
  return (
    <div className='grid grid-flow-col'>
        <Sidebar className=""/>
        <Outlet/>

    </div>
  )
}

export default Body