import { useLoaderData, useParams } from "react-router";

import { ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { FaStar } from "react-icons/fa";

  import { ToastContainer, toast } from 'react-toastify';


const Readlist = () => {
  

  
const {id} = useParams();
const data=useLoaderData();

const singleapp=data.find(ourapp=>ourapp.id==id)
const {title,image,ratings,companyName,reviews,downloads,description,size,ratingAvg}=singleapp

  
const code = [
{
  name: '1 star',
  uv: 590,
  pv: ratings?.[0]?.count || 0,
  amt: 1400,
},
  {
    name: '2 star',
    uv: 868,
    pv: ratings?.[1]?.count || 0,
    amt: 1506,
  },
  {
    name: '3 star',
    uv: 1397,
    pv: ratings?.[2]?.count || 0,
    amt: 989,
  },
  {
    name: '4 star',
    uv: 1480,
    pv: ratings?.[3]?.count || 0,
    amt: 1228,
  },
  {
    name: '5 star',
    uv: 1520,
    pv: ratings?.[4]?.count || 0,
    amt: 1100,
  },

];
const handleclick=()=>{

toast('Downloaded successfully')

}


    return (
   <div>
         <div>
          <div className="flex justify-center gap-10 mt-4"> 
          
           
            <figure>
              <img className=' pt-3.5 rounded-2xl w-[250px]'
                src={image}
                alt="Shoes" />
            </figure>
           <div className="mt-4 ">
            <h2 className="card-title text-6xl">{title}:{companyName}</h2>
            
          <p1 className="text-2xl text-gray-300">Developed by {companyName}</p1>

            <div>
<div>
  {
    ratings.map((rating, index) => (
      <div key={index} className="flex justify-between p-2 my-1 rounded">
     
   
      </div>
    ))
  }
</div>



            </div>
    
       <div className="flex justify-center gap-10 mt-4">
            <div>
             <h5 className="w-[30px]"><img src="https://i.postimg.cc/HxM1GTYx/icon-downloads.png" alt="" /></h5>
            <h3 className="text-2xl font-bold">Downlods</h3>
            <h2 className="text-4xl font-bold">{downloads}k</h2>
           </div>
            <div>
             <h5 className="w-[30px]"><img src="https://i.postimg.cc/7LGZ68HV/icon-ratings.png" alt="" /></h5>
            <h3 className="text-2xl font-bold">Avrage rating</h3>
            <h2 className="text-4xl font-bold">{ratingAvg}k</h2>
           </div>
            <div>
             <h5 className="w-[30px]"><img src="https://i.postimg.cc/0yr8WRwg/icon-review.png" alt="" /></h5>
            <h3 className="text-2xl font-bold">Total reviews</h3>
            <h2 className="text-4xl font-bold">{reviews}k</h2>
           </div>

       </div>


           </div>
      

           <div>
          <button></button>
           </div>
        </div>


 <ToastContainer />

          <div >
            <button onClick={handleclick} className="text-2xl font-bold ml-250 bg-emerald-400 hover:bg-emerald-600 pl-6 pr-6 pt-2 pb-2 rounded-2xl text-amber-300 max-w-2xl mx-auto mt-12 mb-12">install (size:{size}Mb)</button>
          </div>
         </div>
         <div className="text-4xl ml-14">Ratings</div>
    <ComposedChart
      layout="vertical"
      style={{ width: '100%', maxWidth: '800px', maxHeight: '80vh', aspectRatio: 1 / 1.618 }}
      responsive
      data={code}
      margin={{
        top: 20,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    >
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis type="number" />
      <YAxis dataKey="name" type="category" scale="band" width="1200px" />
      <Tooltip />
      <Legend />
      {/* <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
      <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      {/* <Line dataKey="uv" stroke="#ff7300" /> */}
    </ComposedChart>
    <h5 className="text-2xl font-bold text-amber-300 max-w-2xl mx-auto mt-12 mb-12">Description:{description}</h5>

   </div>
    );
};

export default Readlist;