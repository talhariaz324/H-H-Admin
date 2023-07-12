import React from 'react'

function EntriesComponent({ search, setSearch, setLimit }) {
  return (
    <div className="flex justify-between my-4 tablet:w-[95%] tablet:m-auto tablet:my-5">
      <div className="flex items-center text-lightborder font-semibold">
        <span className="">Show</span>
        <select id="selectBox_entries" onChange={(e) => setLimit(e.target.value)} className="rounded-md px-2 py-1 ml-2 border border-lightborder min-w-[80px]">
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="">all</option>
        </select>
        <span className="ml-2">entries</span>
      </div>


      <input
        type="search"
        className="bg-lightgrey rounded-3xl px-5 py-2"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  )
}

export default EntriesComponent