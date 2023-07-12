
import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getUserDetails } from "../redux/action/IndividualAction";
import DetailComponent from "../components/DetailComponent";
import Loader from "../components/Loader"
import AdminHeader from "../components/AdminHeader";
// import Loader from "../../components/Loader";

const MemberDetail = () => {
  const dispatch = useDispatch();  
  const params = useParams();
  const memberId = params.id;
  console.log(
    "🚀 ~ file: IndividualMemberDetail.tsx:9 ~ IndividualMemberDetail ~ memberId:",
    memberId
  );

// if (memberId) {
//     dispatch(getUserDetails(memberId)) 
// }

  useEffect(() => {
    console.log("called")
    dispatch(getUserDetails(memberId))
  }, [dispatch, memberId, params.id])

  const { loading, user } = useSelector((state) => state.userDetail)
  console.log("🚀 ~ file: MemberDetail.js:18 ~ MemberDetail ~ user:", user?.member)
  const member = user?.member;
  console.log("🚀 ~ file: MemberDetail.js:29 ~ MemberDetail ~ member:", member)
  
  if(loading){
    return <Loader />
  }

  
  

  return (
    <div className="flex w-full justify-between gap-5">
      <div className="flex flex-col w-full mx-auto bg-[#F5F5F5]" >
      <div className="px-10 bg-white">
          <AdminHeader heading={"Member Detail"} pages={"Pages / Properties Hosts List"} />
        </div>
        
{/*       
      <br></br>
      <hr></hr> */}
    
      <div className="px-6 py-5 h-screen overflow-auto">
        <DetailComponent member={member} />
             
      </div >
      </div>
    </div>
  );
};

export default MemberDetail;
