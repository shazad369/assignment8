import React, { Suspense } from 'react';
import Ratting from '../Ratting/Ratting';
import Book from '../Book/Book';

import { Link } from 'react-router';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
const Apppromise =  fetch('./players.json').then(res => res.json())







const Home = () => {
    return (
        <div >
            <h6 className='text-6xl font-bold  max-w-2xl pl-11  mx-auto' >We boult an </h6>
            <h6 className='text-6xl font-bold  max-w-2xl pl-7 mx-auto' ><span className='text-fuchsia-700'>Productive</span> Apps </h6>
        <p  className=' mt-5 max-w-2xl mx-auto'>At Hero , we craft innovative degined to make everyday life simple ,smart ,and more excq</p>
       
       
       
        <p className='  max-w-2xl mx-auto'>our goal is to turn your ideas into digital experience that truly make an impact</p>
<div    className='flex justify-center gap-5 mt-5' >
    
    <button><a className='flex gap-3 pl-8 pr-8 pt-3 pb-4 rounded-2xl hover:bg-fuchsia-900 bg-fuchsia-600  items-center btn-primary ' href="https://play.google.com/store/games?hl=en_US"> <FaGooglePlay />playstore</a></button>
<button className='flex gap-3 pl-8 pr-8 pt-3 pb-4 rounded-2xl hover:bg-fuchsia-900 bg-fuchsia-600  items-center btn-primary '> <FaAppStoreIos /><a href="https://www.apple.com/app-store/"> Appstore</a></button></div>


<img className='max-w-4xl mx-auto mt-10' src="https://i.postimg.cc/qvqPfwgw/hero.png" alt="" />





<div className='mt-14'>
    <Ratting></Ratting>
</div>

 <Suspense fallback={<div><span class="loading loading-ring loading-xl"></span></div>}>
    

    {
<Book Apppromise={Apppromise} ></Book>
        
    }
      </Suspense>

<Link to="/about"><li><a><button className='btn text-center btn-primary pl-11 pr-11 ml-230  mt-12  mb-12 mx-auto:' >All Apps</button></a></li></Link>
        </div>
    );
};

export default Home;