// ✅ Next.js server component version
import { use } from 'react';
import Amarbook from './Amarbook';

export default function Book({ Apppromise }) {
  const data = use(Apppromise);
  
  return (
   <div>
    <div>
      <h1 className='text-4xl text-center w-auto mt-20 mb-10 justify-center font-bold ' >Tending Apps</h1>
      <p className='text-gray-300 text-center text-2xl mb-10'>Explore all tending apps on thr market developed by us </p>
    </div>
     <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>

      
      {
        data.map((singleapp)=><Amarbook key={singleapp.id} singleapp={singleapp}></Amarbook>)
      }
    </div>
   </div>
  );
}
