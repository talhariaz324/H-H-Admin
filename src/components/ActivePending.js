import React, { useState } from 'react'
import TableTabComponent from './TableTabComponent.js'
// import activeIcon from '../icons/activeIcon.svg'
// import pendingIcon from '../icons/pendingIcon.svg'
// import rejectedIcon from '../icons/rejectedIcon.svg'
// import checkIcon from '../icons/check.svg'
// import createdIcon from '../icons/created.png'
// import requestedIcon from '../icons/requested.png'

function ActivePending({ activeTab, setActiveTab, active, pending, rejected, completed, picked, requested }) {

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div className="flex">
      {active && <TableTabComponent name={active} active={activeTab === active} onClick={() => handleTabClick(active)} />}
      {/* {requested && <TableTabComponent name={requested} icon={createdIcon} active={activeTab === requested} onClick={() => handleTabClick(requested)} />} */}
      {pending && <TableTabComponent name={pending} active={activeTab === pending} onClick={() => handleTabClick(pending)} />}
      {/* {picked && <TableTabComponent name={picked} icon={pendingIcon} active={activeTab === picked} onClick={() => handleTabClick(picked)} />} */}
      {/* {completed && <TableTabComponent name={completed} icon={checkIcon} active={activeTab === completed} onClick={() => handleTabClick(completed)} />} */}
      {/* {rejected && <TableTabComponent name={rejected} icon={rejectedIcon} active={activeTab === rejected} onClick={() => handleTabClick(rejected)} />} */}
    </div>
  )
}

export default ActivePending