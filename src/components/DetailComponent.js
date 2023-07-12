import React from 'react'

const DetailComponent = ({member}) => {
  return (
    <>
    <div>
        <h1 className="text-2xl font-bold text-orange">Personal Information</h1>
        <br></br>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> First Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.firstName}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Middle Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.middleName}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Last Name:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.lastName}
            </p>
          </div>
        </div>
        </div>
         <div>
        {/* <h1 className="text-2xl font-bold text-orange">Personal Information</h1>
        <br></br> */}
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
        <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Place Of Birth:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.placeOfBirth}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Country Of Residence:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.countryOfResidence}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2">Date Of Birth:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.dateOfBirth}
            </p>
          </div>
        </div>
        </div> <div>
        {/* <h1 className="text-2xl font-bold text-orange">Personal Information</h1>
        <br></br> */}
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Email:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.email}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Nationality:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.nationality}
            </p>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Position Occupied:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.positionOccupied}
            </p>
          </div>
        </div>
        </div>  <div>
        <h1 className="text-2xl font-bold text-orange">Account Information</h1>
        <br></br>
        <div className="flex flex-row mobile:flex-wrap tabletOnly:flex-wrap">
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 mobile:flex mobile:justify-between mobile:mb-0">
            <h2 className="text-xl font-normal mb-2"> Account Status:</h2>
            <p className="text-gray-500 text-base mobile:pt-1">
              {member?.accountStatus}
            </p>
          </div>
        </div>
        </div>
      </>
  )
}

export default DetailComponent