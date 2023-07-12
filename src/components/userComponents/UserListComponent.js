import React, { useState } from "react";
import ActiveTableComponent from "../ActiveTableComponent.js";
import EntriesComponent from "../EntriesComponent";
import { NavLink } from "react-router-dom";
import PendingTableComponent from "../PendingTableComponent";

const columns = [
  {
    key: "id", header: "#", render: (value) => (
      <div className="flex justify-between max-w-fit min-w-[20px] truncate">
        <p>{value}</p>
      </div>
    ),
  },
  {
    key: "name", header: "Name", render: (value) => (
      <div className="flex justify-start min-w-[200px]">
        <p>{value}</p>
      </div>
    ),
  },
  {
    key: "email",
    header: "Email",
    render: (value) => (
      <div className="flex justify-between max-w-[300px] min-w-[250px]">
        <p>{value}</p>
        <img src="copy.svg" alt="copy" />
      </div>
    ),
  },
  {
    key: "mobile", header: "Mobile", render: (value) => (
      <div className="flex justify-start min-w-[100px]">
        <p>{value}</p>
      </div>
    ),
  },
  {
    // key: "action",
    // header: "Action",
    render: () => (
      <td className="py-4 flex justify-between w-fit gap-4">
        <NavLink to={`/`} className="bg-viewBlue p-1 px-4 rounded-[21px] text-[white]">
          View
        </NavLink>
        <button className="bg-editGreen p-1 px-4 rounded-[21px] text-[white]">
          Edit
        </button>
        <button className="bg-deleteRed p-1 px-4 rounded-[21px] text-[white]">
          Delete
        </button>
      </td>
    ),
  },
];

function UserListComponent({ data , setLimit, setRefresh, activeTab, loading, memberLink, detailLink}) {

  const [search, setSearch] = useState('');

  if (search.length !== 0) {
    data = (data.filter(entry => entry?.name.toLowerCase().includes(search.toLowerCase()) || entry?.email.toLowerCase().includes(search.toLowerCase()) || entry?.mobile.includes(search.toLowerCase())))
  }

  return (
    <div className="bg-[white] px-5 py-3">

      <EntriesComponent search={search} setSearch={setSearch} setLimit={setLimit}/>

      {data && activeTab === 'Active' && <ActiveTableComponent name="host" data={data} columns={columns} setRefresh={setRefresh} loading={loading} memberLink={memberLink} detailLink={detailLink} />}

      {data && activeTab === 'Pending' && <PendingTableComponent name="host" data={data} setRefresh={setRefresh} loading={loading}  memberLink={memberLink} />}
    </div>
  );
}

export default UserListComponent;
