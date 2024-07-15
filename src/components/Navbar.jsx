import React from 'react'

const Navbar = () => {
  return ( 
      <nav className='bg-slate-800 text-white relative -top-[32px] '>
        <div className="mycontainer flex justify-between items-center px-4 py-5 h-16">

        <div className="logo font-bold text-white text-2xl">

            <span className='text-green-500'> &lt; </span>
            <span>Pass</span> 
            <span className='text-green-500'>OP/&gt;</span>
        </div>
        {/* <ul>
            <li className='flex gap-4'>
                <a className='hover:font-bold' href="/">Home</a>
                <a className='hover:font-bold' href="#">About</a>
                <a className='hover:font-bold' href="#">Contact</a>
            </li>
        </ul> */}
        <button className='text-white bg-green-500 flex gap-4 rounded-full'>
          <img className='p-2 w-16' src="icons/github.png" alt="" />
        </button>
        </div>
      </nav> 
  )
}

export default Navbar
