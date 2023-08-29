import React from 'react'
import { useDispatch} from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
// import {menu,youtubeLogo,user} from "../assets/icons"

const Head = () => {
    
    const dispath = useDispatch()


    const toggleMenuHandler = () =>{
        dispath(toggleMenu())

    }
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
       
        <div className='flex col-span-1'>
            
            <img 
            onClick = {toggleMenuHandler}
            className='h-8 cursor-pointer' alt='menu' src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png"/>
            <a href='ss'>
            <img className='h-8 mx-2'  alt='youtubeLogo' src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"/>
            </a>
        </div>
        <div className='col-span-10'>
            <input  className="w-1/2 items-center border border-gray-800 p-2 rounded-l-full" type='text'/>
            <button className='border border-gray-200 px-5 py-2 rounded-r-full bg-gray-100'> search
            {/* <img className=''  src='https://img.freepik.com/premium-vector/search-icon-magnifying-glass-symbol-outline-icon_543062-139.jpg?w=2000' alt='search'/> */}
            </button>
    
        </div>
        <div className='col-span-1'>
          <img className='h-8' alt='user' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
        </div>
    </div>
  )
}

export default Head