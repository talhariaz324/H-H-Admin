import React from 'react'
// import { CircularProgress } from '@mui/material'
// import { deleteHostAction } from '../../store/thunks/HostActions'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { updateGroupStatus } from '../../redux/action/GroupAction'
import { updateIndividualStatus } from '../../redux/action/IndividualAction'
import Loader from '../Loader'
// import { deleteDriverAction } from '../../store/thunks/driverActions'

const ActionComponent = ({memberLink, detailLink, setRefresh, id }) => {

    const dispatch = useDispatch()

    const {loading: IndividualLoading, success: IndividualSuccess} = useSelector(state => state.updateIndividualStatus)
    const {loading, success} = useSelector(state => state.updateGroupStatus)

    // const handleDelete = () => {
    //     if (window.confirm("Are you sure ?")) {
    //         link == "host" && dispatch(deleteHostAction(id))
    //         link == "driver" && dispatch(deleteDriverAction(id))
    //     }
    // }

    if (loading || IndividualLoading) {
        return <Loader />
    }

    const updateStatus = async (id, status) =>{
        if (memberLink === "groupMember") {
            await dispatch(updateGroupStatus({id, status}))
            if (success) {
                setRefresh(true)
            }
        }else if(memberLink === "individualMember"){
            await dispatch(updateIndividualStatus({id, status}))
        if (IndividualSuccess) {
            setRefresh(true)
        }
        }
        
    }

    return (
        <>
            <NavLink to={`/${detailLink}/${id}`} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
                View
            </NavLink>
            
            <NavLink to={`/${memberLink}/${id}`} className="bg-editGreen p-1 px-4 rounded-[21px] text-[white]">
                members
            </NavLink>
            <NavLink className="bg-deleteRed p-1 px-4 rounded-[21px] text-[white]"
                onClick={() => updateStatus(id, "suspend")}
                >
                <p>Suspend</p>
            </NavLink>
        </>
    )
}

export default ActionComponent