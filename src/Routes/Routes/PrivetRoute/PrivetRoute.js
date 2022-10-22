import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


/*
1. only allow authentication user to visit the route 
2. Redirect user to the route they wanted to go before login
*/

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <Spinner animation="border" variant="primary" />
    }

    if (!user) {
        return <Navigate to='/Login' state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default PrivetRoute;