
import React, { createContext, useContext, useState } from 'react';


export const MemberDataContext = createContext({
    memberData: {},
    setMemberData: () => { },
});

export const MemberDataProvider = ({ children }) => {
    const [memberData, setMemberData] = useState(null);

    return (
        <MemberDataContext.Provider value={{ memberData, setMemberData }}>
            {children}
        </MemberDataContext.Provider>
    );
};

export const useMemberData = () => useContext(MemberDataContext);
