import React from 'react';
import App from '../../App';
import Apps from '../../Pages/Book/Apps';
import { Link } from 'react-router';

import { FaGithub } from "react-icons/fa";


  const handleReload = () => {
    window.location.reload(); 
  };
const Newfooter = () => {


  
    return (
       <div>
         <div>
        <div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="-1"
        class="menu menu-sm dropdown-content items-center bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <Link to="/"><li><a>Home</a></li></Link>
        <li>
   <Link to="/about"><li><a>All Apps</a></li></Link>
          <ul class="p-2">
          
          </ul>
        </li>
        <li><a>Install </a></li>
      </ul>
    </div>
    <div onClick={handleReload} className='flex'>
       <img  className='w-10'  src="https://i.postimg.cc/hP2yTyqX/logo.png" alt="" /><h2 className=" text-xl">Hero.io</h2>
    </div>
   
  </div>
  <div class="navbar-center hidden items-center lg:flex">
    <ul class="menu menu-horizontal gap-21 items-center px-1">
      <Link to="/"><li><a className='bg-fuchsia-400  hover:bg-fuchsia-900 p-2 pl-12 pr-12 rounded-2xl'>Home</a></li></Link>
      <li>
        <div className='bg-fuchsia-400 pl-7 pr-7  hover:bg-fuchsia-900 p-2 rounded-2xl'>
           <Link to="/about"><a>All Apps</a></Link>
          
        </div>
      </li>
      <li><a className='bg-fuchsia-400  pl-7 pr-7  hover:bg-fuchsia-900 p-2 rounded-2xl'>Installation</a></li>
    </ul>
  </div>
  <div class="navbar-end">
 <a className='flex pt-3 pb-3 gap-2 items-center btn-primary pr-5 pl-6 rounded-2xl hover:bg-fuchsia-950 pr-6  bg-fuchsia-400 peer-target:' href="https://github.com/shazad369/shazad"> <FaGithub /> github</a>
  </div>
</div>


        </div>
       </div>

    );
};

export default Newfooter;
