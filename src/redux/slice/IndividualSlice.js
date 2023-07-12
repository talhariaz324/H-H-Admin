import { createSlice } from "@reduxjs/toolkit";
import { deleteIndividualMember, getAllIndividuals, getUserDetails, getUserMembers, updateIndividualStatus } from "../action/IndividualAction";

const allIndividualSlice = createSlice({
    name: "individuals",
    initialState: {
      loading: false,
      success: false,
      individualList: null,
      error: "",
    },
    reducers: {
    //   hostListReset: (state) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.hostList = null;
    //     state.error = "";
    //   }
    },
    extraReducers: (builder) => {
      builder
        .addCase(getAllIndividuals.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllIndividuals.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.individualList = action.payload;
        })
        .addCase(getAllIndividuals.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

  const userDetailSlice = createSlice({
    name: "userDetails",
    initialState: {
      loading: false,
      success: false,
      user: null,
      error: "",
    },
    // reducers: {
    //   hostDetailsReset: (state) => {
    //     state.loading = false;
    //     state.success = false;
    //     state.host = null;
    //     state.error = "";
    //   }
    // },
    extraReducers: (builder) => {
      builder
        .addCase(getUserDetails.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUserDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.user = action.payload;
        })
        .addCase(getUserDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

  const userMembersSlice = createSlice({
    name: "userMembers",
    initialState: {
      loading: false,
      members: [],
      error: "",
    },
    // reducers: {
    //   hostPropertiesReset: (state) => {
    //     state.loading = false;
    //     state.members = [];
    //     state.error = "";
    //   },
    // },
    extraReducers: (builder) => {
      builder
        .addCase(getUserMembers.pending, (state) => {
          state.loading = true;
        })
        .addCase(getUserMembers.fulfilled, (state, action) => {
          state.loading = false;
          state.members = action.payload;
        })
        .addCase(getUserMembers.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.msg;
          state.members = []
        });
    },
  });

  const individualMemberDeleteSlice = createSlice({
    name: 'memberDelete',
    initialState: {
        loading: false,
        success: false,
        message: '',
        error: ''
    },
    // reducers: {
    //     deletePropertyReset: (state) => {
    //         state.loading = false;
    //         state.success = false;
    //         state.message = '';
    //         state.error = ''
    //     }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(deleteIndividualMember.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteIndividualMember.fulfilled, (state, action) => {
                console.log("🚀 ~ file: IndividualSlice.js:123 ~ .addCase ~ action:", action)
                state.loading = false;
                state.success = action.payload.success;
                state.message = action.payload.msg;
            })
            .addCase(deleteIndividualMember.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.msg
            })
    }
})

const updateIndividualSlice = createSlice({
  name: "updateIndividualStatus",
  initialState: {
      loading: false,
      success: false,
      error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(updateIndividualStatus.pending, (state) => {
              state.loading = true;
              state.success = false;
              state.error = ''
          })
          .addCase(updateIndividualStatus.fulfilled, (state, action) => {
              state.loading = false;
              state.success = true;
              state.error = ''
          })
          .addCase(updateIndividualStatus.rejected, (state, action) => {
              state.loading = false;
              state.success = false;
              state.error = action.payload?.msg
          });
  },
});

export {allIndividualSlice, userDetailSlice, userMembersSlice, individualMemberDeleteSlice, updateIndividualSlice}  