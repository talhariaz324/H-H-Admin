import React from 'react'

const TableTabComponent = ({ name, icon, active , onClick}) => {

  return (
    <div className={`bg-white ${active ? 'opacity-100' : 'opacity-60'} min-w-[200px] flex justify-start items-center p-3 gap-4 rounded-tl-[10px] cursor-pointer`}
    onClick={onClick}>
      {/* <img src={icon} alt="tab Icon" className='w-4' /> */}
      <p className="text-base2 font-bold font-segoe">
        {name}
      </p>
    </div>
  )
}

export default TableTabComponent