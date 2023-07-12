import React, { useEffect } from 'react'
import ActionComponent from './userComponents/ActionComponent';
import Loader from './Loader';

function ActiveTableComponent({ data, columns, loading, setRefresh, memberLink, detailLink }) {
console.log("🚀 ~ file: ActiveTableComponent.js:6 ~ ActiveTableComponent ~ loading:", loading)
console.log("🚀 ~ file: ActiveTableComponent.js:6 ~ ActiveTableComponent ~ data:", data)

  // Handlers
  const handleCopyBtn = (e, content) => {
    console.log("btn", e.target.id);
    navigator.clipboard.writeText(content);
    // navigator.clipboard.write(content)
    window.alert(`${e.target.id} Copied`)
  }

  if (loading) {
    return <Loader />
  }

  return (
    <div className="relative overflow-x-auto border-[0.5px] border-solid border-[#050505] rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-[black] text-[white]">
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className="px-2 py-3">
                {column.header}
              </th>
            ))}
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
                  {/* <img id="Email" src={copyIcon} alt="copy" className='cursor-pointer' onClick={(e) => handleCopyBtn(e, entry.email)} /> */}
                </div>
              </td>

              <td className='px-2 w-fit'>
                <div className="flex justify-between min-w-[120px]">
                  {/* <p>{entry.mobile}</p> */}
                  {/* <img id='PhoneNumber' src={copyIcon} alt="copy" className='cursor-pointer' onClick={(e) => handleCopyBtn(e, entry.mobile)} /> */}
                </div>
              </td>

              <td className="py-4 flex justify-between w-fit gap-4 ml-auto pr-5">

                <ActionComponent memberLink={memberLink} detailLink={detailLink} setRefresh={setRefresh} id={entry.id} />

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ActiveTableComponent
