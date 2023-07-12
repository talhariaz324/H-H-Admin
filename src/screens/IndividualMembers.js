import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import AdminHeader from '../components/AdminHeader'
import { getUserMembers } from '../redux/action/IndividualAction'
import MembersTable from '../components/userComponents/MembersTable'

const IndividualMembers = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const { id } = params
  
  
    // Use Selectors -------------------------------
    // const { loading: loadingDetails, host, error: errorHostDetails } = useSelector((state) => state.hostDetails)
    const { loading, members, error } = useSelector((state) => state.userMembers)
    console.log("🚀 ~ file: IndividualMembers.js:17 ~ IndividualMembers ~ error:", error)
    console.log("🚀 ~ file: IndividualMembers.js:17 ~ IndividualMembers ~ loading:", loading)
    var data = members?.individualMembers
    // const [member, setMember] = useState()
    useEffect(() => {
      console.log("id ", id);
      dispatch(getUserMembers(id))
      // setMember(data)
    }, [])
  
    return (
        <div className="flex w-full h-screen overflow-auto">
        <div className="flex flex-col w-full mx-auto bg-[#F5F5F5]">
      <div className="bg-[white] p-5">
  
        {/* <Details details={host} loading={loadingDetails} link="host"/> */}
        <div className="px-10 bg-white flex justify-between items-center">
          <AdminHeader heading={"Member List"} />
          <NavLink to={`/createMember/${"individual"}/${id}`} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
              Add Members
          </NavLink>
        </div>
  
  
        {/* host properties list get */}
        <MembersTable data={data} loading={loading} error={error} type={"individual"} />
  
        {/* <HostDetailsTable /> */}
      </div>
      </div>
      </div>
    );
}

export default IndividualMembers