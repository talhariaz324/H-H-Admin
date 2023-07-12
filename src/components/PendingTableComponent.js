import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import copyIcon from '../icons/copy.svg'
// import checkIcon from '../icons/check.svg'
// import unCheckedIcon from '../icons/uncheck.svg'
import { NavLink } from 'react-router-dom';
import {updateIndividualStatus} from '../redux/action/IndividualAction'
import {updateGroupStatus} from '../redux/action/GroupAction'
import Loader from './Loader';


const PendingTableComponent = ({ data, setRefresh, memberLink, link }) => {
    const dispatch = useDispatch();
    const {loading: IndividualLoading, success: IndividualSuccess} = useSelector(state => state.updateIndividualStatus)
    const {loading, success} = useSelector(state => state.updateGroupStatus)
    console.log("🚀 ~ file: PendingTableComponent.js:14 ~ PendingTableComponent ~ success:", success)

    // Handlers
    const handleCopyBtn = (content) => {
        navigator.clipboard.writeText(content);
        window.alert("Email Copied")
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

    if (loading || IndividualLoading) {
        return <Loader />
    }

    return (
        <div className="relative overflow-x-auto border-[0.5px] border-solid border-[#050505] rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-[black] text-[white]">
                    <tr>
                        <th className="px-4 py-3">
                            #
                        </th>
                        <th className="px-4 py-3">
                            Name
                        </th>
                        <th className="px-4 py-3">
                            Email
                        </th>
                        <th className="px-4 py-3">
                            Verifications
                        </th>
                        <th className="px-4 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, index) => (
                        <tr
                            key={entry.id}
                            className="bg-white border-b-[#CCCCCC] border-b-[0.5px]"
                        >
                            <td className="px-2 w-fit">
                                <div className="flex justify-between max-w-fit min-w-[20px] truncate">
                                    <p>{index + 1}</p>
                                </div>
                            </td>

                            <td className="px-2 w-fit">
                                <div className="flex justify-start min-w-[100px]">
                                    <p>{entry.name}</p>
                                </div>
                            </td>

                            <td className="px-2 w-fit">
                                <div className="flex justify-between max-w-[300px] min-w-[250px]">
                                    <p>{entry.email}</p>
                                    {/* <img id='copyIcon' src={copyIcon} alt="copy" className='cursor-pointer' onClick={() => handleCopyBtn(entry.email)} /> */}
                                </div>
                            </td>
                            <td className='px-2 w-fit'>
                            <div className="flex gap-2 items-center">
                                    
                                            {/* <img src={checkIcon} alt="check-icon" /> :
                                            <img src={unCheckedIcon} alt="check-icon" /> */}
                                        
                                        <p className='pb-1'>Status pending</p>
                             </div>

                            </td>

                            {/* <td className='px-2 w-fit'>
                                <div className="pl-2 flex flex-col justify-between min-w-[120px]">
                                    <div className="flex gap-2 items-center">
                                        {entry.emailVerified ?
                                            <img src={checkIcon} alt="check-icon" /> :
                                            <img src={unCheckedIcon} alt="check-icon" />
                                        }
                                        <p className='pb-1'>Email Verified</p>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        {entry.stripeVerified ?
                                            <img src={checkIcon} alt="check-icon" /> :
                                            <img src={unCheckedIcon} alt="check-icon" />
                                        }
                                        <p className='pb-1'>Stripe Verified</p>
                                    </div>
                                    {link === "driver" &&
                                        <div className="flex gap-2 items-center">
                                            {entry.checkrVerified == 'clear' ?
                                                <img src={checkIcon} alt="check-icon" />:
                                                <img src={unCheckedIcon} alt="check-icon" />
                                            }
                                            <p className='pb-1'>Checkr Verified</p>
                                        </div>
                                    }
                                </div>
                            </td> */}

                            <td className="py-4 flex justify-between w-fit gap-4 ml-auto pr-5">

                                {/* <ActionComponent link={link} id={entry.id} /> */}
                                <NavLink to={`#`} onClick={() => updateStatus(entry.id, "active")} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
                                    Active
                                </NavLink>
                                <NavLink to={`#`} onClick={() => updateStatus(entry.id, "suspend")} className="bg-red p-1 px-4 rounded-[21px] text-[white]">
                                Suspend
                                </NavLink>
                               </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default PendingTableComponent