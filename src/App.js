import { Routes, Route } from "react-router-dom";
import SideNav from "./components/SideNav";
import { CreateMember, GroupDetail, GroupMembers, GroupUsers, IndividualMembers, IndividualUser, MemberDetail } from "./screens";
import Login from "./screens/Login";
import { useState } from "react";


function App() {
  // const [loading, setLoading] = useState(false)
  const token = localStorage.getItem("auth-token");
  console.log("🚀 ~ file: App.js:11 ~ App ~ token:", token)
  
  return (
    <div className="flex w-full min-h-screen overflow-auto relative">
    {/* {loading && <h1>loading...</h1>}   */}
    {token && <SideNav />}
      <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<IndividualUser />} />
      <Route path="/memberDetail/:id" element={<MemberDetail />} />
      <Route path="/individualMember/:id" element={<IndividualMembers />} />
      <Route path="/createMember/:type/:id" element={<CreateMember />} />
      <Route path="/groupUser" element={<GroupUsers />} />
      <Route path="/groupMember/:id" element={<GroupMembers />} />
      <Route path="/groupDetail/:id" element={<GroupDetail />} />
      </Routes>
    {/* </SideNav> */}
    </div>
  );
}
  

export default App;
