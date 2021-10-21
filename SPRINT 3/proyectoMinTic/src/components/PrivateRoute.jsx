import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const { user, isAuthenticated, isLoading } = useAuth0();
        
        if (isLoading) return <div>Loading...</div>;

        return isAuthenticated ? (
            <>{children}</>): ( 
            <div>
                <strong>No estas autorizado para ver este sitio.</strong>
                <Link to = '/'>
                <div>
                    <span>Llevame al incio</span>
                </div>
                </Link>
            </div>
            )
};

export default PrivateRoute;
