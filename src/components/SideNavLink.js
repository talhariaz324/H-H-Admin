import React from "react";
import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";

const SideNavLink = ({ icon, label, link, active }) => {

    // const dispatch = useDispatch();

    return (
        <>
            <NavLink
                to={`/${link}`}
                style={({ isActive }) => ({
                    background: isActive ? '#F5F5F5' : 'inherit',
                  })}
                className={`link flex justify-start items-center gap-3 w-[90%] rounded-md cursor-pointer p-2 text-base2`}
            >
                {/* <img
                    src={icon}
                    alt={`${label} icon`}
                    className="bg-transparent pointer-events-none"
                /> */}
                <h3 className=" pointer-events-none">{label}</h3>
            </NavLink>
        </>
    );
};

export default SideNavLink;
