import React, {useEffect} from 'react';
import Sidebar from 'components/Sidebar';
import SidebarResponsive from 'components/SidebarResponsive';
import { useAuth0 } from "@auth0/auth0-react";
 

const PrivateLayout = ({ children }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  
  useEffect(() => {
    console.log (user, isAuthenticated, isLoading);
  }, [user, isAuthenticated, isLoading]);
    
  return (
      <div className='flex w-screen h-screen'>
        <div className='flex flex-col lg:flex-row flex-nowrap h-full w-full'>
          <Sidebar />
          <SidebarResponsive />
          <main className='flex w-full  overflow-y-scroll items-center justify-center'>
            {children}
          </main>
        </div>
      </div>
    );
};

export default PrivateLayout;
