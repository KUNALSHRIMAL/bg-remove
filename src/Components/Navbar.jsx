import React from 'react'
import { assets} from "../assets/assets"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items-center justify-between m-4 py-3 lg:mx-44'>
        <Link to='/'><img className='w-32 sm:w-44' src={assets.logo} alt="" srcset="" /></Link> 
        <button className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-4 sm:px-8 text-sm rounded-full'>
            Get started <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" srcset="" />
        </button>      
    </div>
  )
}
export default Navbar