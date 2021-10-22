import React, { useEffect} from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({children})=>{
    const { isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently} = useAuth0();

    useEffect(()=>{
        const fetchAuth0Token = async()=>{
            const accessToken = await getAccessTokenSilently({
                audience: 'api-autenticacion-coffeecoders',
            })
            localStorage.setItem('token',accessToken)
        }
        if (isAuthenticated){
            fetchAuth0Token();
        }
    },[isAuthenticated, getAccessTokenSilently])

    if (isLoading) return <div>Loading...</div>;

    if (! isAuthenticated) {
        return loginWithRedirect();

    //return isAuthenticated ? <>{children}</> : <div>No esta autorizado para ver este sitio</div>
}
return <>{children}</>
}

export default PrivateRoute;