import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Sidebar() {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen)
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-48'>
         <ul>
            <li><Link to="/">Home</Link></li>
            <li>Short</li>
            <li>Video</li>
            <li>live</li>
            
        </ul>
        <h1 className='font-bold pt-5'>Subscription</h1>
        <ul className='font-medium'>
            <li>Music</li>
            <li>Sport</li>
            <li>Game</li>
            <li>Movie</li>
        </ul>
        <h1 className='font-bold  mt-5'>Watch Later</h1>
        <ul className='font-medium'>
            <li>Music</li>
            <li>Sport</li>
            <li>Game</li>
            <li>Movie</li>
        </ul>
    </div>
  )
}

export default Sidebar