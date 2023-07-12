import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getGroupDetails, getGroupMembers } from "../redux/action/GroupAction";
import Loader from "../components/Loader";
import AdminHeader from "../components/AdminHeader";

const GroupDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const groupId = params.id;

  useEffect(() => {
    console.log("called");
    dispatch(getGroupDetails(groupId));
    dispatch(getGroupMembers(groupId));
  }, [dispatch, groupId, params.id]);

  const { loading, group } = useSelector((state) => state.groupDetail);
  const {
    members,
    loading: groupLoading,
    error,
  } = useSelector((state) => state.groupMembers);
  const representativeData =
    members.groupUsers &&
    members.groupUsers.filter((member) => member.isGroupRespresentative);
  console.log("🚀 ~ file: GroupDetail.js:20 ~ GroupDetail ~ error:", error);
  // console.log("🚀 ~ file: GroupDetail.js:20 ~ GroupDetail ~ groupMembers:", members.groupUsers)

  console.log("🚀 ~ file: MemberDetail.js:18 ~ MemberDetail ~ group:", group);
  // if (loading ) {
  //   return <Loader />;
  // }
  const member = group?.member;
  console.log("🚀 ~ file: MemberDetail.js:29 ~ MemberDetail ~ member:", member);
  return (
    <div className="flex w-full justify-between gap-5">
      <div className="flex flex-col w-full mx-auto bg-[#F5F5F5]" >
      <div className="px-10 bg-white">
        <AdminHeader
          heading={"Group Detail"}
          pages={"Pages / Properties Hosts List"}
        />
      </div>
      {loading || groupLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          {/* <div className=""> */}
          {/* <h1 className="text-4xl font-semibold">
              Hello, {group?.associationName}
            </h1> */}
          <br></br>
          <div className="px-6 shadow-inset shadow-2xl rounded-xl w-full">
            <h1 className="text-xl font-semibold p-4">
              Hello, {group?.associationName}
            </h1>
            <hr></hr>
            <br></br>
            <div className="flex flex-row mobile:flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">
                  Association Name
                </h2>
                <p className="text-gray-500 text-base mobile:pt-1">
                  {group?.associationName}
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">
                  Email
                </h2>
                <p className="text-gray-500 text-base mobile:pt-1">
                  {group?.email}
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">
                  Country
                </h2>
                <p className="text-gray-500 text-base mobile:pt-1">
                  {group?.country}
                </p>
              </div>
            </div>
            <div className="flex flex-row mobile:flex-wrap">
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">
                  Account Status:
                </h2>
                <p className="text-gray-500 text-base mobile:pt-1">
                  {group?.accountStatus}
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">
                  Registered Members:
                </h2>
                <p className="text-gray-500 text-base mobile:pt-1">
                  {group?.registeredMembers}
                </p>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
                <h2 className="text-orange text-xl font-semibold mb-2">
                  Contact:
                </h2>
                <p className="text-gray-500 text-base mobile:pt-1">
                  {group?.phoneNumbers[0]}
                </p>
              </div>
            </div>
          </div>
          {/* </div> */}
          <br></br>

          {error ? <h1>no member</h1> : null}
          <div className="flex justify-between mt-10 mx-16">
            {representativeData &&
              representativeData.map((data, index) => {
                return (
                  <div
                    key={data._id}
                    className="shadow-inset shadow-xl rounded-xl mb-4 flex flex-col h-64"
                  >
                    <div className="flex justify-between p-2">
                      <h1 className="text-xl font-semibold">
                        Representative {Number(index) + 1}
                      </h1>
                      <NavLink to={`/memberDetail/${data._id}`} className="text-sm pr-4 hover:underline">View Detail</NavLink>
                    </div>
                    <hr></hr>
                    <div className="flex flex-col w-80 ">
                      <div className="flex flex-col px-4 my-2">
                        <h2 className="text-orange text-xl font-semibold mb-1">
                          Name:
                        </h2>
                        <p className="text-gray-500 text-base pt-1">
                          {data.firstName} {data.lastName}
                        </p>
                      </div>
                      <div className="flex flex-col px-4 my-2">
                        <h2 className="text-orange text-xl font-semibold mb-1">
                          Email:
                        </h2>
                        <p className="text-gray-500 text-base pt-1">
                          {data.email}
                        </p>
                      </div>
                      <div className="flex flex-col px-4 my-2">
                        <h2 className="text-orange text-xl font-semibold mb-1">
                          Contact:
                        </h2>
                        <p className="text-gray-500 text-base pt-1">
                          555 555 555
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default GroupDetail;
