import React, { Suspense } from 'react';
import All from './All';


const Allapp = fetch('./players2.json').then(res => res.json())


const Aboutapp = () => {
    return (
        <div>
        
          


<Suspense fallback={<div><span class="loading loading-ring loading-xl"></span></div>}>
<All Allapp={Allapp} ></All>
</Suspense>


        </div>

    );
};

export default Aboutapp;