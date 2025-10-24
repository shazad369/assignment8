import React from 'react';

const Ratting = () => {
    return (
       <div className="bg-gradient-to-r  from-indigo-600 via-purple-600 to-pink-500 rounded-2xl p-6 md:p-8 text-white shadow-2xl shadow-purple-500/25">
    
    <div className="text-center pb-20 pt-20 mb-6">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-2 mx-auto text-white/[.9] max-w-2xl">
            <span className="text-yellow-400">Trusted By </span>
            <span className="text-white">Millions</span>
            <span className="text-yellow-400">, Built For You</span>
        </h2>
     
    </div>

    <div className="grid grid-cols-3 pb-36 gap-6 md:gap-8">
        <div className="text-center p-4  bg-white/10 backdrop-blur-sm rounded-xl">
        <h3>Total Downloads </h3>
            <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">29.6M</div>
            <div className="text-xs md:text-sm font-medium">21% more than last month </div>
        </div>
        <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
            <h3>Total Reviews </h3>
            <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">906K</div>
            <div className="text-xs md:text-sm font-medium">45% more than last month </div>
        </div>
        <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
            <h3>active apps </h3>
            <div className="text-2xl md:text-3xl font-black text-yellow-400 mb-2">132+</div>
            <div className="text-xs md:text-sm font-medium">more will 1 month </div>
        </div>
    </div>
</div>
    );
};

export default Ratting;