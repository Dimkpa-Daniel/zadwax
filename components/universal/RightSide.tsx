import Image from "next/image";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

interface rightSideProp {
  children: React.ReactNode;
  toggleSidebar: () => void;
  showSidebar: boolean;
}

const RightSide: React.FC<rightSideProp> = ({
  children,
  toggleSidebar,
  showSidebar,
}) => {
  return (
    <div className="w-full">
      {/* RIGHT SIDEBAR DASHBOARD */}
      <div className="bg-white w-full h-full">
        {/* Top Section */}
        <div className=" bg-white h-20 border-b border-gray-200 w-full flex items-center justify-between lg:justify-end  px-3 lg:px-16">
          <GiHamburgerMenu
            size={30}
            className="lg:hidden cursor-pointer text-gray-500"
            onClick={toggleSidebar}
          />
          {/* Top contents */}
          <div className="flex items-center gap-20">
            <div className="hidden lg:flex items-center gap-2 border border-gray-300 rounded-lg sm:w-[317px] px-4 py-2.5 ">
              <IoSearch size={16} className="text-gray-500" />
              <input
                type="search"
                name=""
                id=""
                placeholder="Search"
                className="text-sm font-normal text-[#5C5C5C] outline-none flex-1"
              />
            </div>
            <div className="flex items-center gap-3">
              <IoSearch size={16} className="lg:hidden text-gray-500" />
              <IoNotificationsOutline size={24} className="text-gray-500" />

              {/*   Profile name and image */}

              <Image
                src={"/user-img.png"}
                width={32}
                height={32}
                alt="Profile Image"
                className=" rounded-[32px]"
              />
              {/* End of profile name and image */}
            </div>

            {/* Hamburger Menu ends */}
          </div>
          {/* End of top contents */}
        </div>
        {/* End of Top Section */}

        <div className=" overflow-y-scroll max-h-[500px] no-scrollbar">
        {children}
        </div>
      </div>
    </div>
  );
};

export default RightSide;
