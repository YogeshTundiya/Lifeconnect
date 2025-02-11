import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/API";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      const { data } = await API.post("auth/login", { role, email, password });
      //   store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        // localStorage.setItem("user", data.user);
        toast.success(data.message);
        window.location.replace("/contact");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      names,
      role,
      email,
      password,
      organizationName,
      hospitalName,
      address,
      phone,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await API.post("auth/register", {
        names,
        role,
        email,
        password,
        organizationName,
        hospitalName,
        address,
        phone,
        website,
      });
      if (data.success) {
        toast.success("User registerd successfull🎉");
        // toast.success(data.message);
        window.location.replace("/login");
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get("auth/current-user");
      if (res.data) {
        //if not work remove ?
        return res.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
