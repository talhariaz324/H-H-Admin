import React, { useState, useEffect } from "react";
import SideNavLink from "./SideNavLink.js";
import { useNavigate, NavLink, useLocation } from "react-router-dom";



const SideNav = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation()

  // const { adminInfo: hostLogin } = useSelector((state) => state.login);
  // const { sideNav } = useSelector((state) => {
  //   return state;
  // });

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("auth-token");
      navigate("/login");
    }
  };

  return (
    <>

      <div
        id="navLeft"
        className="flex-col items-center w-[300px] min-w-[220px] bg-white shadow-5xl sticky z-1 flex top-0 min-h-[650px]"
      >

        {/* Logo */}
        <div className="flex justify-center items-center brand h-[160px] w-[90%] m-auto mt-2">
          <NavLink to="/user" className="w-[70%]">
            {/* <img
              className="w-full"
              src={logo}
              alt=""
            /> */}
            <h1>Logo</h1>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <div className="nav flex-grow w-full">
          <ul className="flex flex-col gap-2 justify-center items-center mt-5">
            <SideNavLink
              // icon={dashboardIcon}
              label={"Individual Users"}
              link={"user"}
              active="activeNav"
            />

            <SideNavLink
              // icon={propertyIcon}
              label={"Group Users"}
              link={`groupUser`}
            />

            {/* <SideNavLink
              // icon={driverIcon}
              label={"Drivers"}
              link={`driverList`}
            />
            <SideNavLink  label={"Orders"} link={"orderList"} />
            <SideNavLink label={"Packages"} link={"packages"} /> */}
          </ul>
        </div>

        {/* Logout Button */}

        <div
          className="flex justify-center border-t-2 border-lightborder w-full m-auto bottom-5 absolute"
          onClick={handleLogout}
        >
          {/* <SideNavLink icon={logoutLogo} label={"Logout"} /> */}
          <SideNavLink label={"Logout"} link={'login'} />
        </div>
      </div>
    </>
  );
};

export default SideNav;
