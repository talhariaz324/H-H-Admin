import React, {useContext, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteIndividualMember } from '../../redux/action/IndividualAction'
import { MemberDataContext } from '../../context/MemberDataContext'
import { deleteGroupMember } from '../../redux/action/GroupAction'
import Loader from '../Loader'


const MembersTable = ({ data, loading, error, type }) => {
    console.log("🚀 ~ file: MembersTable.js:9 ~ MembersTable ~ type:", type)
    const dispatch = useDispatch();
    // const { memberData, setMemberData } = useContext(MemberDataContext);
    console.log("🚀 ~ file: MembersTable.js:13 ~ MembersTable ~ memberData:", data)
    // const { error } = useSelector((state) => state.userMembers)


   

    const state = useSelector(state => {
        return state.individualMemberDelete
    })
    console.log("🚀 ~ file: MembersTable.js:13 ~ MembersTable ~ state:", state)
    // Handlers
    const handleDelete = async (id) => {
        if (type === "individual") {
            if (window.confirm("Are you sure you want to delete this member?")) {
                await dispatch(deleteIndividualMember(id))
             //    const updatedMembers = data.filter(member => member.id !== id);
             //    setMemberData(updatedMembers)
             }
        }else if(type === "group"){
            if (window.confirm("Are you sure you want to delete this member?")) {
                await dispatch(deleteGroupMember(id))
             //    const updatedMembers = data.filter(member => member.id !== id);
             //    setMemberData(updatedMembers)
             }
        }
        
    }

    if (loading) {
        return <Loader />
    }
    // const handleCopyBtn = (content) => {
    //     navigator.clipboard.writeText(content);
    //     window.alert("Unique Link Copied")
    // }

    return (
        <div className="relative overflow-x-auto border-[0.5px] border-solid border-[#CCCCCC] rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[black] text-[white]">
                    <tr>
                        <th className="px-4 py-3">
                            Name
                        </th>
                        <th className="px-4 py-3">
                            email
                        </th>
                        <th className="px-4 py-3">
                            Contact
                        </th>
                        <th className="px-4 py-4">
                            Action
                        </th>
                    </tr>
                </thead>
                {error ? <h1 className='text-[26px] font-bold py-4 flex justify-center items-center'>{error}</h1> : 
                <tbody>
                    {data?.map((entry, index) => (
                        <tr
                            key={entry._id}
                            className="bg-white border-b-[#CCCCCC] border-b-[0.5px]"
                        >
                            <td className="px-4 w-fit max-w-[200px]">
                                <p className='truncate'>{`${entry?.firstName} ${entry?.lastName}`}</p>
                            </td>

                            <td className="px-4 w-fit max-w-[200px]">
                                <p className='truncate'>{entry.email}</p>
                            </td>

                            <td className="px-4 w-fit min-w-[190px]">
                                <div className="flex justify-between max-w-[200px]">
                                <p className='truncate'>{entry.email}</p>
                                
                                </div>
                            </td>

                            <td className="py-4 px-4 flex justify-between w-fit gap-2">
                                <NavLink to={`/memberDetail/${entry._id}`} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
                                    View
                                </NavLink>
                                {/* <NavLink to={`/hostList/${entry.hostID}/${entry._id}?edit=true`} className="bg-editGreen p-1 px-4 rounded-[21px] text-[white]">
                                    Edit
                                </NavLink> */}
                                <NavLink onClick={() => handleDelete(entry._id)} className="bg-deleteRed p-1 px-4 rounded-[21px] text-[white]">
                                    Delete
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>}
            </table>
        </div>
    )
}

export default MembersTable