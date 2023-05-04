/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';


const Main = () => {
    const { loading} = useContext(AuthContext);
    if(loading){
        return  <div className='text-center mt-5'><progress className="progress w-56"></progress></div>
    }
    return (
        <div>
            
         <Navbar></Navbar>
        
          <Outlet></Outlet>
        
         <Footer></Footer>
        </div>
    );
};

export default Main;