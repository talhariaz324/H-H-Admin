import React, { useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader.js";
import ActivePending from "../components/ActivePending";
import { useDispatch, useSelector } from "react-redux";
import { getAllIndividuals } from "../redux/action/IndividualAction.js";
import UserListComponent from "../components/userComponents/UserListComponent.js";
import { getAllGroups } from "../redux/action/GroupAction.js";
// import { Alert } from "@mui/material";
// import { deleteHostReset, hostListReset } from "../store/slices/HostSlices";

function IndividualUser() {

  const dispatch = useDispatch()
  const [limit, setLimit] = useState(10);

  const [active,] = useState('Active');
  const [pending,] = useState('Pending');
  const [activeTab, setActiveTab] = useState(active);
  const [refresh, setRefresh] = useState(false);

  // Use selector -----------------------------------
  const { loading, groupList, error } = useSelector((state) => state.allGroups)
  console.log("🚀 ~ file: GroupUsers.js:22 ~ IndividualUser ~ groupList:", groupList)
  // console.log("🚀 ~ file: IndividualUser.js:21 ~ IndividualUser ~ individualList:", individualList)
  // const { message: messageDelete, loading: loadingDelete, success: successDelete, error: errorDelete } = useSelector((state) => state.deleteHost)

  // let individualData = groupList && groupList.filter((user) => {
  //   if (activeTab == active) {
  //     if (user.accountStatus === "active") return user
  //   }
  //   if (activeTab == pending) {
  //     if (user.accountStatus === "pending") return user
  //   }
  // })
  // console.log("🚀 ~ file: IndividualUser.js:31 ~ individualData ~ individualData:", individualData)

  const groupData = groupList && groupList.map((user, index) => {
    return {
      id: user._id,
      // name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      // mobile: user.phoneNumber.Cell,
      // emailVerified: user.isVerified === "true" ? "true" : "false",
      // stripeVerified: host.isOnBoarded ? true : false
    }
  })



  useEffect(() => {

    let status = activeTab == active ? 'active' : 'pending';
    dispatch(getAllGroups({ limit, status }))
  }, [limit, activeTab, refresh])

  // useEffect(() => {
  //   setTimeout(() => {
  //     error && dispatch(hostListReset())
  //     successDelete && dispatch(deleteHostReset())
  //     errorDelete && dispatch(deleteHostReset())
  //   }, 2000)
  // }, [successDelete, errorDelete, error])

  return (
    <div className="flex w-full h-screen overflow-auto">

      {/* Error show here
      {successDelete && (
        <Alert
          severity="success"
          sx={{
            position: "fixed",
            width: "90%",
            margin: "auto",
            top: 20,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <strong>{messageDelete}</strong>
        </Alert>
      )}

      {errorDelete && (
        <Alert
          severity="error"
          sx={{
            position: "fixed",
            width: "90%",
            margin: "auto",
            top: 20,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <strong>{errorDelete}</strong>
        </Alert>
      )}

      {error && (
        <Alert
          severity="error"
          sx={{
            position: "fixed",
            width: "90%",
            margin: "auto",
            top: 20,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <strong>{error}</strong>
        </Alert>
      )} */}


      <div className="flex flex-col w-full mx-auto bg-[#F5F5F5]">
        <div className="px-10 bg-white">
          <AdminHeader heading={"Group Lists"} pages={"Pages / Properties Hosts List"} />
        </div>

        <div className="px-6 py-5 h-screen overflow-auto">

          <ActivePending active={active} pending={pending} activeTab={activeTab} setActiveTab={setActiveTab} />

          <UserListComponent data={groupData} setLimit={setLimit} activeTab={activeTab} loading={loading} setRefresh={setRefresh} memberLink="groupMember" detailLink="groupDetail" />
        </div>
      </div>
    </div>
  );
}

export default IndividualUser;
