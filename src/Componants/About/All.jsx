import React, { use } from 'react';
import Full from './Full';
import Readlist from '../Readlist/Readlist';

const All = ({Allapp}) => {
   const data = use(Allapp);
  

    return (
        <div>
    
<div>
    <h2 className='text-4xl md:ml-100 sm:ml-50 md:w-auto lg:ml-199'>our All Applications </h2>
    <p1 className='md:ml-100 sm:ml-50 md:w-auto lg:ml-199 text-gray-200'>Explore all apps on thr market.Developed by us</p1>
</div>
<div className='flex justify-between'>
    <h3 className='text-2xl ml-3'>(20)Apps Found</h3>

    <label class="input">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
</div>
<div className='grid gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 '>
 
     {

            data.map((singleapp)=><Full key={singleapp.id} singleapp={singleapp}></Full>)
        }


</div>
<div>
    
</div>

        </div>

       
    );
};

export default All;