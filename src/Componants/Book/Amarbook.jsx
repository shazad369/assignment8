import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import { Link } from 'react-router';
const Amarbook = ({singleapp}) => {
  
const{title,image,id,downloads,ratingAvg}=singleapp


    return (
<div>

<Link to={`/readlist/${id}`}> 

       <div class="card bg-blue-300 mt-8 w-96 shadow-sm">
  <figure>
    <img className=' pt-3.5 rounded-2xl w-[150px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class="badge badge-secondary"><FaArrowCircleDown /> Downlods {downloads}</div>
    </h2>
   
    <div class="card-actions justify-end">
      <div class="badge badge-outline"> Ratting <FaStar /> {ratingAvg}</div>
   
    </div>
  </div>
</div>



</Link>


</div>
    );
};

export default Amarbook;