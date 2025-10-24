import React from 'react';
import Newfooter from '../Newfooter/Newfooter';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Navber = () => {
    return (
        <div className='max-w-7.30xl '>
            <Newfooter></Newfooter>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Navber;