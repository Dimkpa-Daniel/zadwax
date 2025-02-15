import { DashboardLayoutProp } from '@/types'
import React, { useState } from 'react'
import LeftSide from './universal/LeftSide';
import RightSide from './universal/RightSide';

const DashboardLayout: React.FC<DashboardLayoutProp> = ({children}) => {
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
      setShowSidebar(!showSidebar);
    };
    return (
      <div className=" h-full w-full flex items-stretch  bg-white">
        <LeftSide 
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
        />
        
        <RightSide
          children={children}
          toggleSidebar={toggleSidebar}
          showSidebar={showSidebar}
        />
      </div>
    );
  };

export default DashboardLayout