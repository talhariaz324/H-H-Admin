import { createSlice } from "@reduxjs/toolkit";
import { deleteGroupMember, getAllGroups, getGroupDetails, getGroupMembers, updateGroupStatus } from "../action/GroupAction";

const allGroupSlice = createSlice({
    name: "groups",
    initialState: {
      loading: false,
      success: false,
      groupList: null,
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
        .addCase(getAllGroups.pending, (state) => {
          state.loading = true;
        })
        .addCase(getAllGroups.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.groupList = action.payload;
        })
        .addCase(getAllGroups.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

  const groupMembersSlice = createSlice({
    name: "groupMembers",
    initialState: {
      loading: false,
      members: [],
      error: "",
    },
    reducers: {
      hostPropertiesReset: (state) => {
        state.loading = false;
        state.members = [];
        state.error = "";
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(getGroupMembers.pending, (state) => {
          state.loading = true;
        })
        .addCase(getGroupMembers.fulfilled, (state, action) => {
          state.loading = false;
          state.members = action.payload;
        })
        .addCase(getGroupMembers.rejected, (state, action) => {
          console.log("🚀 ~ file: GroupSlice.js:61 ~ .addCase ~ action:", action)
          state.loading = false;
          state.error = action.payload?.msg;
          state.members = []
        });
    },
  });

  const groupDetailSlice = createSlice({
    name: "groupDetails",
    initialState: {
      loading: false,
      success: false,
      group: null,
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
        .addCase(getGroupDetails.pending, (state) => {
          state.loading = true;
        })
        .addCase(getGroupDetails.fulfilled, (state, action) => {
          state.loading = false;
          state.success = action.payload.success;
          state.group = action.payload;
        })
        .addCase(getGroupDetails.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload?.error;
        });
    },
  });

  const groupMemberDeleteSlice = createSlice({
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
            .addCase(deleteGroupMember.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteGroupMember.fulfilled, (state, action) => {
                console.log("🚀 ~ file: IndividualSlice.js:123 ~ .addCase ~ action:", action)
                state.loading = false;
                state.success = action.payload.success;
                state.message = action.payload.msg;
            })
            .addCase(deleteGroupMember.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload?.msg
            })
    }
})

const updateGroupSlice = createSlice({
  name: "updateGroupStatus",
  initialState: {
      loading: false,
      success: false,
      error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
      builder
          .addCase(updateGroupStatus.pending, (state) => {
              state.loading = true;
              state.success = false;
              state.error = ''
          })
          .addCase(updateGroupStatus.fulfilled, (state, action) => {
              state.loading = false;
              state.success = true;
              state.error = ''
          })
          .addCase(updateGroupStatus.rejected, (state, action) => {
              state.loading = false;
              state.success = false;
              state.error = action.payload?.msg
          });
  },
});


export {allGroupSlice, groupMembersSlice, groupDetailSlice, groupMemberDeleteSlice, updateGroupSlice}  