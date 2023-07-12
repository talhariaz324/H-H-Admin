import request from "./request";


// export const login = async (values) => {
//   try {
//     const result = await request.post("/auth/login", values);
    
//     // localStorage.setItem("auth-token", result.data.token);
//     localStorage.setItem("login-user", result.data.user);
//     console.log("🚀 ~ file: auth.ts:12 ~ login ~ result:", result.data.user)
//     return result;
//   } catch (error) {
//     console.log("🚀 ~ file: auth.ts:24 ~ login ~ error:", error);
//     return error.response;
//   }
// };

export const createRepresentative = async (values) => {
  try {
    const { data } = await request.post("/group/create-representative", values);
    console.log("🚀 ~ file: groupOnboading.ts:29 ~ createRepresentative ~ values:", values)
    return data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const createIndividualMember = async (values) => {
  try {
    const { data } = await request.post("/auth/create-member", values);
    console.log("🚀 ~ file: individualOndoarding.ts:23 ~ createKin:", data);
    return data;
  } catch (error) {
    console.error(error);
    // throw new Error("Login failed. Please try again.");
  }
};
