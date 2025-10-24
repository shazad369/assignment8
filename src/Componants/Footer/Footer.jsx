import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=''>
            <footer class="footer sm:footer-horizontal bg-neutral text-neutral-content grid-rows-2 p-10">
  <nav>
    <div  className='flex lg:ml-83 md:ml-0'>
       <img  className='w-10'  src="https://i.postimg.cc/hP2yTyqX/logo.png" alt="" /><h2 className=" text-xl">Hero.io</h2>
    </div>
  </nav>
  <nav>
   
  </nav>
  <nav>
  </nav>
  <nav>
    <p1>Copyright © 2022 - All right reserved</p1>
  </nav>
  <nav>
    <h6 class="footer-title">social link</h6>
    <div className='flex gap-3'>
      <a class="link link-hover text-2xl"><FaInstagramSquare /></a>
    <a class="link link-hover text-2xl"><FaWhatsapp /></a>
    <a class="link link-hover text-2xl"><FaTiktok /></a>
  
    </div>
  </nav>
  <nav>
    
  </nav>
</footer>
        </div>
    );
};

export default Footer;