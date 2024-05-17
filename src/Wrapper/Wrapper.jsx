import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import SideBar from '../SideBar';

const Wrapper = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const location = useLocation();
  
    const handleMenuClick = () => {
      setSidebarOpen(!sidebarOpen);
    };
  
    const isLoginPage = location.pathname === '/';
  
    return (
      <div className="flex">
        {!isLoginPage && (
          <>
            <div className="fixed-header">
              <Header onMenuClick={handleMenuClick} />
            </div>
            <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </>
        )}
        <div className={`content flex-grow ${sidebarOpen && !isLoginPage ? 'ml-64' : 'ml-0'}`}>
          <Outlet />
        </div>
      </div>
    );
}

export default Wrapper