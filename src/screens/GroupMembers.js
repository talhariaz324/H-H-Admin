import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import { getUserMembers } from '../redux/action/IndividualAction'
import MembersTable from '../components/userComponents/MembersTable'
import { getGroupMembers } from '../redux/action/GroupAction'

const GroupMembers = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params
  
  
    // Use Selectors -------------------------------
    // const { loading: loadingDetails, host, error: errorHostDetails } = useSelector((state) => state.hostDetails)
    const { loading, members, error } = useSelector((state) => state.groupMembers)
    // console.log("🚀 ~ file: GroupMembers.js:18 ~ IndividualMembers ~ members:", members)
    const data = members?.groupUsers
    useEffect(() => {
      console.log("id ", id);
      dispatch(getGroupMembers(id))
    }, [])
  
    return (
        <div className="flex w-full h-screen overflow-auto">
        <div className="flex flex-col w-full mx-auto bg-[#F5F5F5]">
      <div className="bg-[white] p-5">
  
        {/* <Details details={host} loading={loadingDetails} link="host"/> */}
        <div className="px-10 bg-white flex justify-between items-center">
          <AdminHeader heading={"Member List"} />
          <NavLink to={`/createMember/${"group"}/${id}`} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
              Add Members
          </NavLink>
        </div>
  
  
        {/* host properties list get */}
        <MembersTable data={data} loading={loading} error={error} type={"group"} />
  
        {/* <HostDetailsTable /> */}
      </div>
      </div>
      </div>
    );
}

export default GroupMembers