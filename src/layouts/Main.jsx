/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div>
            
         <Navbar></Navbar>
         <div className='md:min-h-[calc(100vh-341px)]'>
          <Outlet></Outlet>
        </div>
         
         <Footer></Footer>
        </div>
    );
};

export default Main;