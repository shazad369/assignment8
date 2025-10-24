import React, { Suspense } from 'react';
import { Link } from 'react-router';

const Full = ({singleapp}) => {

const{title,id,image,downloads,ratingAvg}=singleapp

    return (
        <div  >
<Link to={`/readlist/${id}`}>

                  <div class="card bg-blue-300 mt-8 w-96 shadow-sm">
  <figure>
    <img className= ' pt-3.5  rounded-2xl w-[150px]'
      src={image}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {title}
      <div class="badge badge-secondary"> Downlods {downloads}</div>
    </h2>
   
    <div class="card-actions justify-end">
      <div class="badge badge-outline"> Ratting  {ratingAvg}</div>
    
    </div>
  </div>
</div>


</Link>


        </div>
    );
};

export default Full;