import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    // a location ta login a ja home navigate/rasta set korsi shipping a proyojone change krta kortasa
     const location = useLocation();

     if(loading)
     {
        console.log("yes loading found");
        return <div>Loading...</div>
     }

    if(user && user.uid)
    {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace ></Navigate>
};

export default PrivateRoute;