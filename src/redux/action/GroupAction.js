import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/request";

const getAllGroups = createAsyncThunk(
    "allGroups/getAllGroups",
    async ({limit, status}, { rejectWithValue }) => {

        let url = `/auth/allGroups?status=${status}`
        if (limit){
            url = `/auth/allGroups?limit=${limit}&status=${status}`
        }
        try {
            const { data } = await request.get(url, {
                withCredentials: true,
            });

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const getGroupMembers = createAsyncThunk(
    "groupMembers/getGroupMembers",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await request.get(`/group/group-members/${id}`, {
                withCredentials: true,
            });

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const getGroupDetails = createAsyncThunk(
    "GroupDetails/getGroupDetails",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await request.get(`/group/${id}`, {
                withCredentials: true,
            });

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const deleteGroupMember = createAsyncThunk(
    "deleteMember/deleteMember",
    async (id, { rejectWithValue }) => {
      try {
        const { data } = await request.delete(`/group/delete-group-member/${id}`, {
          withCredentials: true,
        });
  
        return data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

  const updateGroupStatus = createAsyncThunk(
    "updateGroup/updateGroupStatus",
    async ({id, status}, {rejectWithValue}) =>{

        try {
            const {data} = await request.patch(`/group/update-group?id=${id}&status=${status}`)

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)    

export {getAllGroups, getGroupMembers, getGroupDetails, deleteGroupMember, updateGroupStatus}