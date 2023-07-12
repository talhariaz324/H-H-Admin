import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import notificationIcon from '../icons/notification.svg'
// import infoIcon from '../icons/info.svg'
// import backIcon from '../icons/uturn.svg'

const AdminHeader = ({ heading }) => {

  const navigate = useNavigate()
  return (
    <div className="flex justify-between items-center my-5">

      <div>
        {/* <p>{pages}</p> */}
        <div className="flex gap-5" onClick={()=> navigate(-1)}>
          {/* <img src={backIcon} className=" cursor-pointer" alt="back-icon" /> */}
          <h1 className="text-[34px] font-segoe font-bold">{heading}</h1>
        </div>
      </div>

      <div className=" flex gap-5 items-center bg-white p-5 rounded-[10px] pointer-events-none">
        {/* <NavLink to="/notifications">
          <img src={notificationIcon} alt="notification" />
        </NavLink>
        <NavLink to="/help">
          <img src={infoIcon} alt="notification" />
        </NavLink> */}
      </div>
    </div>
  );
};

export default AdminHeader;
