import { createAsyncThunk } from "@reduxjs/toolkit";
import request from "../../utils/request";

const getAllIndividuals = createAsyncThunk(
    "allIndividuals/getAllIndividuals",
    async ({limit, status}, { rejectWithValue }) => {

        let url = `/auth/allUsers?status=${status}`
        if (limit){
            url = `/auth/allUsers?limit=${limit}&status=${status}`
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

const getUserDetails = createAsyncThunk(
    "userDetails/getUserDetails",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await request.get(`/auth/member-detail/${id}`, {
                withCredentials: true,
            });

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)

const getUserMembers = createAsyncThunk(
    "userMembers/getUserMembers",
    async (id, { rejectWithValue }) => {
        try {
            const { data } = await request.get(`/auth/invidual-members-admin/${id}`, {
                withCredentials: true,
            });

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const deleteIndividualMember = createAsyncThunk(
    "deleteMember/deleteMember",
    async (id, { rejectWithValue }) => {
      try {
        const { data } = await request.delete(`/auth/delete-individual-member/${id}`, {
          withCredentials: true,
        });
  
        return data;
      } catch (err) {
        return rejectWithValue(err.response.data);
      }
    }
  );

const updateIndividualStatus = createAsyncThunk(
    "updateIndividual/updateIndividualStatus",
    async ({id, status}, {rejectWithValue}) =>{

        try {
            const {data} = await request.patch(`/auth/update-individual-account?id=${id}&status=${status}`)

            return data;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
)  

export {getAllIndividuals, getUserDetails, getUserMembers, deleteIndividualMember, updateIndividualStatus}
