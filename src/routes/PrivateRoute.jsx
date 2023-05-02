/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log('user in private route', user);
    if(loading){
        return <div className="radial-progress" ></div>
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
  };


export default PrivateRoute;